import session from "express-session";
import type { Express, Request, Response, NextFunction } from "express";

// Add this block to extend the SessionData type
declare module "express-session" {
  interface SessionData {
    user?: { admin: boolean; username: string };
  }
}

const ADMIN_USERNAME = process.env.ADMIN_USERNAME || "admin";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "password";

export function setupLocalAuth(app: Express) {
  app.use(
    session({
      secret: process.env.SESSION_SECRET || "devsecret",
      resave: false,
      saveUninitialized: true,
    })
  );

  app.post("/api/login", (req: Request, res: Response) => {
    const { username, password } = req.body;
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      req.session.user = { admin: true, username };
      res.json({ message: "Login successful" });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  });

  app.post("/api/logout", (req: Request, res: Response) => {
    req.session.destroy(() => res.json({ message: "Logged out" }));
  });
}

export function isAuthenticated(req: Request, res: Response, next: NextFunction) {
  if (req.session.user && req.session.user.admin) {
    return next();
  }
  res.status(401).json({ message: "Unauthorized" });
}