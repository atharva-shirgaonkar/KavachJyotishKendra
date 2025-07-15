from flask import Flask, render_template, request, jsonify, redirect, url_for, session
from datetime import datetime
import os
from functools import wraps

app = Flask(__name__)
app.secret_key = os.environ.get('SECRET_KEY', 'kavach-jyotish-secret-key-2024')

# For development, we'll use simple in-memory storage
# In production, you would connect to actual MongoDB
try:
    from pymongo import MongoClient
    from bson.objectid import ObjectId
    
    MONGO_URI = os.environ.get('MONGODB_URI', 'mongodb://localhost:27017/')
    client = MongoClient(MONGO_URI)
    db = client.kavach_jyotish
    
    # Collections
    appointments = db.appointments
    contact_messages = db.contact_messages
    blog_posts = db.blog_posts
    testimonials = db.testimonials
    users = db.users
    
    # Test connection
    client.admin.command('ping')
    print("Connected to MongoDB successfully!")
    USE_MONGODB = True
except Exception as e:
    print(f"MongoDB not available: {e}")
    print("Using in-memory storage for development...")
    USE_MONGODB = False
    
    # In-memory storage for development
    appointments_data = []
    contact_messages_data = []
    blog_posts_data = []
    testimonials_data = []

# Helper functions for in-memory storage
def get_next_id(collection):
    return len(collection) + 1

def insert_one_memory(collection, document):
    document['_id'] = get_next_id(collection)
    document['created_at'] = datetime.now()
    collection.append(document)
    return type('Result', (), {'inserted_id': document['_id']})()

def find_memory(collection, query=None):
    if query is None:
        return collection
    return [doc for doc in collection if all(doc.get(k) == v for k, v in query.items())]

def update_one_memory(collection, query, update):
    for doc in collection:
        if '_id' in query and doc.get('_id') == query['_id']:
            if '$set' in update:
                doc.update(update['$set'])
            return True
    return False

def admin_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if not session.get('is_admin'):
            return redirect(url_for('admin_login'))
        return f(*args, **kwargs)
    return decorated_function

# Routes
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/services')
def services():
    return render_template('services.html')

@app.route('/book')
def book():
    return render_template('book.html')

@app.route('/blog')
def blog():
    if USE_MONGODB:
        posts = list(blog_posts.find({'is_published': True}).sort('created_at', -1))
    else:
        posts = [post for post in blog_posts_data if post.get('is_published', True)]
        posts.sort(key=lambda x: x.get('created_at', datetime.now()), reverse=True)
    return render_template('blog.html', posts=posts)

@app.route('/testimonials')
def testimonials_page():
    if USE_MONGODB:
        approved_testimonials = list(testimonials.find({'is_approved': True}).sort('created_at', -1))
    else:
        approved_testimonials = [t for t in testimonials_data if t.get('is_approved', True)]
        approved_testimonials.sort(key=lambda x: x.get('created_at', datetime.now()), reverse=True)
    return render_template('testimonials.html', testimonials=approved_testimonials)

@app.route('/contact')
def contact():
    return render_template('contact.html')

# API Routes
@app.route('/api/appointments', methods=['POST'])
def create_appointment():
    try:
        data = request.json
        appointment = {
            'name': data.get('name'),
            'whatsapp': data.get('whatsapp'),
            'service_type': data.get('serviceType'),
            'message': data.get('message', ''),
            'status': 'pending',
            'created_at': datetime.now()
        }
        
        if USE_MONGODB:
            result = appointments.insert_one(appointment)
            return jsonify({'success': True, 'id': str(result.inserted_id)})
        else:
            result = insert_one_memory(appointments_data, appointment)
            return jsonify({'success': True, 'id': str(result.inserted_id)})
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 400

@app.route('/api/contact', methods=['POST'])
def create_contact_message():
    try:
        data = request.json
        message = {
            'name': data.get('name'),
            'email': data.get('email'),
            'subject': data.get('subject', ''),
            'message': data.get('message'),
            'is_read': False,
            'created_at': datetime.now()
        }
        
        if USE_MONGODB:
            result = contact_messages.insert_one(message)
            return jsonify({'success': True, 'id': str(result.inserted_id)})
        else:
            result = insert_one_memory(contact_messages_data, message)
            return jsonify({'success': True, 'id': str(result.inserted_id)})
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 400

@app.route('/api/testimonials', methods=['POST'])
def create_testimonial():
    try:
        data = request.json
        testimonial = {
            'name': data.get('name'),
            'location': data.get('location'),
            'rating': int(data.get('rating', 5)),
            'text': data.get('text'),
            'service': data.get('service'),
            'is_approved': False,
            'created_at': datetime.now()
        }
        
        if USE_MONGODB:
            result = testimonials.insert_one(testimonial)
            return jsonify({'success': True, 'id': str(result.inserted_id)})
        else:
            result = insert_one_memory(testimonials_data, testimonial)
            return jsonify({'success': True, 'id': str(result.inserted_id)})
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 400

# Admin Routes
@app.route('/admin/login', methods=['GET', 'POST'])
def admin_login():
    if request.method == 'POST':
        username = request.form.get('username')
        password = request.form.get('password')
        
        # Simple admin check (in production, use proper password hashing)
        if username == 'admin' and password == 'admin123':
            session['is_admin'] = True
            return redirect(url_for('admin_dashboard'))
        else:
            return render_template('admin_login.html', error='Invalid credentials')
    
    return render_template('admin_login.html')

@app.route('/admin/logout')
def admin_logout():
    session.pop('is_admin', None)
    return redirect(url_for('index'))

@app.route('/admin')
@admin_required
def admin_dashboard():
    if USE_MONGODB:
        appointment_list = list(appointments.find().sort('created_at', -1))
        contact_list = list(contact_messages.find().sort('created_at', -1))
        blog_list = list(blog_posts.find().sort('created_at', -1))
        testimonial_list = list(testimonials.find().sort('created_at', -1))
    else:
        appointment_list = sorted(appointments_data, key=lambda x: x.get('created_at', datetime.now()), reverse=True)
        contact_list = sorted(contact_messages_data, key=lambda x: x.get('created_at', datetime.now()), reverse=True)
        blog_list = sorted(blog_posts_data, key=lambda x: x.get('created_at', datetime.now()), reverse=True)
        testimonial_list = sorted(testimonials_data, key=lambda x: x.get('created_at', datetime.now()), reverse=True)
    
    return render_template('admin_dashboard.html', 
                         appointments=appointment_list,
                         contacts=contact_list,
                         blogs=blog_list,
                         testimonials=testimonial_list)

@app.route('/admin/appointments/<appointment_id>/status', methods=['POST'])
@admin_required
def update_appointment_status(appointment_id):
    try:
        new_status = request.json.get('status')
        
        if USE_MONGODB:
            appointments.update_one(
                {'_id': ObjectId(appointment_id)},
                {'$set': {'status': new_status, 'updated_at': datetime.now()}}
            )
        else:
            update_one_memory(appointments_data, {'_id': int(appointment_id)}, 
                            {'$set': {'status': new_status, 'updated_at': datetime.now()}})
        
        return jsonify({'success': True})
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 400

@app.route('/admin/contacts/<contact_id>/read', methods=['POST'])
@admin_required
def mark_contact_read(contact_id):
    try:
        if USE_MONGODB:
            contact_messages.update_one(
                {'_id': ObjectId(contact_id)},
                {'$set': {'is_read': True}}
            )
        else:
            update_one_memory(contact_messages_data, {'_id': int(contact_id)}, 
                            {'$set': {'is_read': True}})
        
        return jsonify({'success': True})
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 400

@app.route('/admin/testimonials/<testimonial_id>/approve', methods=['POST'])
@admin_required
def approve_testimonial(testimonial_id):
    try:
        if USE_MONGODB:
            testimonials.update_one(
                {'_id': ObjectId(testimonial_id)},
                {'$set': {'is_approved': True}}
            )
        else:
            update_one_memory(testimonials_data, {'_id': int(testimonial_id)}, 
                            {'$set': {'is_approved': True}})
        
        return jsonify({'success': True})
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 400

@app.route('/admin/blog', methods=['POST'])
@admin_required
def create_blog_post():
    try:
        data = request.json
        post = {
            'title': data.get('title'),
            'content': data.get('content'),
            'excerpt': data.get('excerpt'),
            'category': data.get('category'),
            'is_published': data.get('is_published', True),
            'created_at': datetime.now()
        }
        
        if USE_MONGODB:
            result = blog_posts.insert_one(post)
            return jsonify({'success': True, 'id': str(result.inserted_id)})
        else:
            result = insert_one_memory(blog_posts_data, post)
            return jsonify({'success': True, 'id': str(result.inserted_id)})
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 400

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)