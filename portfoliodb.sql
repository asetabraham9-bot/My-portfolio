-- Portfolio Database Schema
-- Simple database structure for future backend integration

-- Create database
CREATE DATABASE IF NOT EXISTS portfolio_db;
USE portfolio_db;

-- Users/Admin table
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    role ENUM('admin', 'visitor') DEFAULT 'visitor',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Projects table
CREATE TABLE IF NOT EXISTS projects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    description TEXT,
    long_description TEXT,
    image_url VARCHAR(255),
    demo_url VARCHAR(255),
    github_url VARCHAR(255),
    date DATE,
    status ENUM('completed', 'in_progress', 'planned') DEFAULT 'completed',
    featured BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Technologies/Skills table
CREATE TABLE IF NOT EXISTS technologies (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    category ENUM('Frontend', 'Backend', 'Database', 'Tools', 'Core Concepts') NOT NULL,
    proficiency_level ENUM('Beginner', 'Intermediate', 'Advanced') DEFAULT 'Intermediate',
    icon_emoji VARCHAR(10),
    order_index INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Project Technologies (many-to-many relationship)
CREATE TABLE IF NOT EXISTS project_technologies (
    id INT AUTO_INCREMENT PRIMARY KEY,
    project_id INT NOT NULL,
    technology_id INT NOT NULL,
    FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE,
    FOREIGN KEY (technology_id) REFERENCES technologies(id) ON DELETE CASCADE,
    UNIQUE KEY unique_project_tech (project_id, technology_id)
);

-- Education table
CREATE TABLE IF NOT EXISTS education (
    id INT AUTO_INCREMENT PRIMARY KEY,
    degree VARCHAR(200) NOT NULL,
    institution VARCHAR(200) NOT NULL,
    location VARCHAR(200),
    start_date DATE,
    end_date DATE,
    is_current BOOLEAN DEFAULT FALSE,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Certifications table
CREATE TABLE IF NOT EXISTS certifications (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    platform VARCHAR(100) NOT NULL,
    issue_date DATE,
    expiry_date DATE,
    credential_id VARCHAR(100),
    credential_url VARCHAR(255),
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Contact Messages table
CREATE TABLE IF NOT EXISTS contact_messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    subject VARCHAR(200),
    message TEXT NOT NULL,
    status ENUM('new', 'read', 'replied', 'archived') DEFAULT 'new',
    ip_address VARCHAR(45),
    user_agent TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Blog Posts table (for future blog feature)
CREATE TABLE IF NOT EXISTS blog_posts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    slug VARCHAR(200) NOT NULL UNIQUE,
    content TEXT NOT NULL,
    excerpt TEXT,
    featured_image VARCHAR(255),
    author_id INT,
    status ENUM('draft', 'published', 'archived') DEFAULT 'draft',
    published_at TIMESTAMP NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (author_id) REFERENCES users(id) ON DELETE SET NULL
);

-- Blog Categories table
CREATE TABLE IF NOT EXISTS blog_categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    slug VARCHAR(100) NOT NULL UNIQUE,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Blog Post Categories (many-to-many)
CREATE TABLE IF NOT EXISTS blog_post_categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    post_id INT NOT NULL,
    category_id INT NOT NULL,
    FOREIGN KEY (post_id) REFERENCES blog_posts(id) ON DELETE CASCADE,
    FOREIGN KEY (category_id) REFERENCES blog_categories(id) ON DELETE CASCADE,
    UNIQUE KEY unique_post_category (post_id, category_id)
);

-- Analytics table (for tracking page views)
CREATE TABLE IF NOT EXISTS analytics (
    id INT AUTO_INCREMENT PRIMARY KEY,
    page_path VARCHAR(255) NOT NULL,
    visitor_ip VARCHAR(45),
    user_agent TEXT,
    referrer VARCHAR(255),
    visit_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_page_path (page_path),
    INDEX idx_visit_date (visit_date)
);

-- Newsletter Subscribers table
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(100) NOT NULL UNIQUE,
    name VARCHAR(100),
    status ENUM('active', 'unsubscribed') DEFAULT 'active',
    subscribed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    unsubscribed_at TIMESTAMP NULL
);

-- Insert sample data for technologies
INSERT INTO technologies (name, category, proficiency_level, icon_emoji, order_index) VALUES
('HTML', 'Frontend', 'Advanced', '🌐', 1),
('CSS', 'Frontend', 'Advanced', '🎨', 2),
('JavaScript', 'Frontend', 'Advanced', '⚡', 3),
('React', 'Frontend', 'Advanced', '⚛️', 4),
('React Native', 'Frontend', 'Intermediate', '📱', 5),
('Bootstrap', 'Frontend', 'Advanced', '🅱️', 6),
('Tailwind CSS', 'Frontend', 'Advanced', '💨', 7),
('PHP', 'Backend', 'Intermediate', '🐘', 8),
('Node.js', 'Backend', 'Advanced', '🟢', 9),
('Express.js', 'Backend', 'Advanced', '🚂', 10),
('Java', 'Backend', 'Intermediate', '☕', 11),
('Python', 'Backend', 'Beginner', '🐍', 12),
('REST APIs', 'Backend', 'Advanced', '🔌', 13),
('MySQL', 'Database', 'Advanced', '🐬', 14),
('MongoDB', 'Database', 'Advanced', '🍃', 15),
('PostgreSQL', 'Database', 'Intermediate', '🐘', 16),
('Git', 'Tools', 'Advanced', '📦', 17),
('GitHub', 'Tools', 'Advanced', '🐙', 18),
('VS Code', 'Tools', 'Advanced', '💻', 19),
('IntelliJ', 'Tools', 'Intermediate', '🧠', 20);

-- Insert sample admin user (password: admin123 - should be hashed in production)
INSERT INTO users (username, email, password_hash, role) VALUES
('admin', 'asetabraham9@gmail.com', '$2y$10$example_hash_here', 'admin');

-- Insert sample education
INSERT INTO education (degree, institution, location, start_date, end_date, is_current, description) VALUES
('Bachelor of Science in Computer Engineering', 'Bahir Dar Institute of Technology', 'Bahir Dar University, Ethiopia', '2023-09-01', '2027-06-30', TRUE, 'Focus on Software Engineering, Web Development, Systems Design, and Network Design and Installation');

-- Insert sample projects
INSERT INTO projects (title, description, long_description, image_url, demo_url, github_url, date, status, featured) VALUES
('Online Exam System', 'A comprehensive examination management system with real-time monitoring and automated grading.', 'Full-featured exam system with question bank, real-time monitoring, automated grading, and detailed analytics dashboard.', '/images/exam-system.jpg', '#', '#', '2025-03-01', 'completed', TRUE),
('MyShop E-commerce', 'Full-featured e-commerce platform with payment integration and inventory management.', 'Complete e-commerce solution with Stripe payment integration, inventory tracking, order management, and admin dashboard.', '/images/myshop.jpg', '#', '#', '2025-01-01', 'completed', TRUE),
('Espotify Music Platform', 'Music streaming platform with playlist management and recommendation system.', 'Music streaming service with AWS S3 storage, playlist management, social features, and personalized recommendations.', '/images/espotify.jpg', '#', '#', '2024-11-01', 'completed', TRUE);

-- Create indexes for better performance
CREATE INDEX idx_projects_status ON projects(status);
CREATE INDEX idx_projects_featured ON projects(featured);
CREATE INDEX idx_contact_status ON contact_messages(status);
CREATE INDEX idx_blog_status ON blog_posts(status);
CREATE INDEX idx_technologies_category ON technologies(category);

-- Create views for easy querying
CREATE OR REPLACE VIEW featured_projects AS
SELECT p.*, GROUP_CONCAT(t.name) as technologies
FROM projects p
LEFT JOIN project_technologies pt ON p.id = pt.project_id
LEFT JOIN technologies t ON pt.technology_id = t.id
WHERE p.featured = TRUE
GROUP BY p.id
ORDER BY p.date DESC;

CREATE OR REPLACE VIEW published_posts AS
SELECT bp.*, u.username as author_name
FROM blog_posts bp
LEFT JOIN users u ON bp.author_id = u.id
WHERE bp.status = 'published'
ORDER BY bp.published_at DESC;

-- Grant permissions (adjust as needed for your setup)
-- GRANT ALL PRIVILEGES ON portfolio_db.* TO 'portfolio_user'@'localhost';
-- FLUSH PRIVILEGES;
