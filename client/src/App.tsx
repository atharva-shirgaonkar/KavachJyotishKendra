import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useAuth } from "@/hooks/useAuth";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Landing from "@/pages/Landing";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import BookAppointment from "@/pages/BookAppointment";
import Blog from "@/pages/Blog";
import Testimonials from "@/pages/Testimonials";
import Contact from "@/pages/Contact";
import AdminDashboard from "@/pages/AdminDashboard";
import NotFound from "@/pages/not-found";

function Router() {
  const { isAuthenticated, isLoading } = useAuth();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Switch>
          {isLoading || !isAuthenticated ? (
            <>
              <Route path="/" component={Landing} />
              <Route path="/about" component={About} />
              <Route path="/services" component={Services} />
              <Route path="/book" component={BookAppointment} />
              <Route path="/blog" component={Blog} />
              <Route path="/testimonials" component={Testimonials} />
              <Route path="/contact" component={Contact} />
              <Route path="/admin" component={AdminDashboard} />
            </>
          ) : (
            <>
              <Route path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/services" component={Services} />
              <Route path="/book" component={BookAppointment} />
              <Route path="/blog" component={Blog} />
              <Route path="/testimonials" component={Testimonials} />
              <Route path="/contact" component={Contact} />
              <Route path="/admin" component={AdminDashboard} />
            </>
          )}
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
