# Ostech - Industrial Solutions Platform

A professional, full-stack enterprise application designed for industrial solution providers. This project integrates a robust Content Management System (CMS), an advanced product catalog with multi-level hierarchical categorization, and comprehensive SEO management tools.

## 🚀 Tech Stack

### Frontend
- **Framework:** React.js
- **Styling:** Tailwind CSS
- **Routing:** React Router DOM (with Lazy Loading)
- **Rich Text Editor:** React Quill
- **Icons:** Lucide React, React Icons
- **State & API:** Axios, Hooks (useState, useEffect)
- **Integrations:** Tawk.to Chatbot, WhatsApp Business API

### Backend
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB with Mongoose ODM
- **File Processing:** ExcelJS & XLSX (Import/Export), Multer (File Uploads)
- **Security:** JWT Authentication, Cookie-based sessions

## ✨ Key Features

### 1. Product & Catalog Management
- **Deep Hierarchy:** Support for Parent Categories, Subcategories, and Sub-subcategories.
- **Detailed Specifications:** Manage key features, benefits, and home details using a Rich Text Editor.
- **Media Gallery:** Multiple image uploads per product with custom Alt text and Image Titles for SEO.
- **Technical Assets:** Upload and view product catalogues (PDFs/Docs).
- **Bulk Operations:** Import and export product data via Excel files for efficient inventory management.

### 2. Advanced SEO Suite
- **Granular Meta Control:** Manage Meta Titles, Descriptions, Keywords, Canonical tags, Language settings, and Custom Schema for every product and category.
- **Search Engine Visibility:** Dynamic control over URL slugs, priority indexing, and change frequency (Sitemap optimization).
- **Meta Detail Editing:** Specialized interfaces for bulk editing meta information across categories and products.

### 3. Dynamic Content Management (CMS)
- **Banner System:** Section-specific banners with support for both high-resolution images and videos.
- **Blog/News Engine:** Full blogging platform with dedicated news categories and hierarchical structures.
- **Resource Center:** Manage videos (YouTube/Local), infographics, and step-by-step industrial processes.
- **Corporate Showcase:** Dedicated modules for Infrastructure, Quality Control, Core Values, Mission/Vision, and Team Members.

### 4. Admin Dashboard
- **Protected Routes:** Secure authentication for managing the platform.
- **Configuration:** Centralized settings for WhatsApp contact, Google analytics, and dynamic site-wide color themes.
- **Inquiry Management:** Track customer leads generated from product inquiry forms.

### 5. Client Experience
- **Responsive Design:** Optimized for mobile, tablet, and desktop viewing.
- **Smooth Navigation:** Scroll-to-top functionality and intuitive category-based product browsing.
- **Communication:** Integrated real-time chatbot and floating WhatsApp contact button.

## 📂 Project Structure

```text
ostech/
├── backend/
│   ├── controller/      # API logic (Product, Banner, Category, Video, etc.)
│   ├── model/           # Mongoose Schemas (Product, Banner, FAQ, etc.)
│   ├── images/          # Uploaded product & banner assets
│   ├── logos/           # Category icons & logos
│   └── catalogues/      # Technical PDF documents
└── frontend/
    ├── src/
    │   ├── Clientside/  # Customer-facing components and pages
    │   ├── Components/  # Admin panel interfaces and layouts
    │   └── App.jsx      # Central routing and authentication logic
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16.0.0 or higher)
- MongoDB instance (Local or Atlas)

### 1. Clone the Repository
```bash
git clone https://github.com/Mern-Project-Management/ostech.git 
cd ostech
```

### 2. Backend Configuration
```bash
cd backend
npm install
# Create a .env file:                                                    .env
# DATABASE_URI = mongodb+srv://admin:admin@devcoder980.64axway.mongodb.net/ostech
# EMAIL_USER = "ostech44@gmail.com"
# EMAIL_FROM = "ostech44@gmail.com"
# EMAIL_PASS="sfps xzsl atlo buew"
# PORT = 3024
npm start
```

### 3. Frontend Configuration
```bash
cd frontend
npm install
npm start
```

## 🔌 API Endpoints (Quick Reference)
- `GET /api/product/getAllProducts` - Fetch all products with category mapping.
- `POST /api/banner/insertBanner` - Create section-specific banners.
- `GET /api/video/getLatestTwoVideos` - Retrieve most recent video content.
- `PUT /api/product/updateProduct` - Update product details and metadata.