# 🐾 Pet Connect

A modern **full-stack web application** built to support **animal adoption, donations, and lost & found reporting**.  
This project focuses on solving a real-world problem using a **clean UI, scalable backend, and production-ready architecture**, making it ideal for both **portfolio showcase** and **final year project (FYP)**.

---

## 🚀 Project Overview

This platform provides a centralized system where users can:

- 🐶 Adopt animals
- 🎁 Donate animals
- 🔍 Report lost or found animals

The application is built using a **modern JavaScript stack** with **Firebase as a serverless backend**.  
It follows a **modular and scalable design**, allowing advanced features (such as AI integrations) to be added later without affecting the core system.

---

## ✨ Core Features

### 🔐 Authentication & Authorization

- Secure user sign-up and login
- Firebase Authentication
- Protected routes
- User-specific dashboards
- Only owners can edit or delete their listings

---

### 🎁 Donation Listings

- Create donation posts with images and details
- View all donation listings
- Update or delete your own posts
- Images stored securely using Firebase Storage
- Real-time updates via Firestore

---

### 🐕 Adoption Listings

- Browse animals available for adoption
- Detailed animal profiles
- Adoption status tracking (Available / Adopted)
- Search and filter functionality

---

### 🔍 Lost & Found Animals

- Report lost animals
- Report found animals
- Upload images with location and description
- Public listings to help reconnect animals with owners

---

### 🎨 UI & UX

- Clean, modern interface using Tailwind CSS
- Fully responsive (mobile + desktop)
- Form validation and user feedback
- Consistent design system

---

## 🤖 Optional AI Features (Phase 2)

> These features are **optional** and implemented only if time permits.  
> The core application works independently without them.

- 🧠 **Adoption Recommendation System**  
  Questionnaire-based suggestions (rule-based → AI-assisted)

- 🐾 **Animal Breed Detection**  
  Image-based breed prediction using free or low-cost APIs

- 💬 **Animal Care Chatbot**  
  LLM-powered chatbot (Gemini / OpenAI) with controlled usage

---

## 🛠 Tech Stack

### Frontend

- React **or** Next.js
- JavaScript
- Tailwind CSS

### Backend & Services

- Firebase Authentication
- Firebase Firestore
- Firebase Storage

### Deployment

- Vercel / Netlify

### Optional AI

- Gemini API / OpenAI API
- Free image recognition APIs

---

## 🧩 Architecture Overview

- Component-based frontend architecture
- Serverless backend using Firebase
- Secure Firestore rules
- Modular structure for scalability
- AI-ready system design

---

## 🖼 Screenshots

> Screenshots showcasing core features and UI.

### 🔐 Authentication

![Login](screenshots/login.png)
![Register](screenshots/register.png)

---

### 🎁 Donation Module

![Donation Listings](screenshots/donations-list.png)
![Add Donation](screenshots/add-donation.png)

---

### 🐕 Adoption Module

![Adoption Listings](screenshots/adoption-list.png)
![Animal Details](screenshots/adoption-details.png)

---

### 🔍 Lost & Found Module

![Lost & Found Listings](screenshots/lost-found-list.png)
![Report Lost Animal](screenshots/report-lost.png)

---

### 👤 User Dashboard

![Dashboard](screenshots/dashboard.png)

---

## 🎥 Live Demo

🚀 **Live Application**  
👉 https://your-live-demo-link.vercel.app

📂 **Source Code**  
👉 https://github.com/your-username/your-repo-name

---

## 📁 Project Structure (Example)

```txt
src / app
 ├── components/
 ├── pages / routes/
 ├── dashboard/
 ├── donations/
 ├── adoption/
 ├── lost-found/
 ├── services/        # Firebase configuration
 ├── hooks/
 └── assets/

```

## ▶️ Getting Started

npm install
npm run dev

## 🎯 Project Goals

Solve a real-world animal welfare problem

Demonstrate full-stack development skills

Build a portfolio-ready, production-style application

Showcase authentication, CRUD operations, and scalable design

Prepare a foundation for AI-powered enhancements

```
