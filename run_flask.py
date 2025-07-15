#!/usr/bin/env python3

import os
import sys
from app import app

if __name__ == '__main__':
    # Set environment variables for MongoDB
    os.environ.setdefault('MONGODB_URI', 'mongodb://localhost:27017/')
    os.environ.setdefault('SECRET_KEY', 'kavach-jyotish-secret-key-2024')
    
    print("Starting Kavach Jyotish Kendra Flask Application...")
    print("MongoDB not available, using in-memory storage for development")
    print("Available at: http://0.0.0.0:5000")
    print("Admin login: admin / admin123")
    
    # Run Flask app
    app.run(host='0.0.0.0', port=5000, debug=True)