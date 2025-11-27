# 🧠 AI Resume Builder

A modern, beautifully designed **AI-powered Resume Builder** built with **React**, featuring real-time resume editing, AI-generated summaries, theme customization, and seamless authentication.  
Users can create, edit, save, and download their resumes — completely free.

[Live Demo](https://ai-resume-builder-00.vercel.app/)
This project is integrated with a **Strapi backend**, deployed on **Render**, uses **Neon PostgreSQL** as the database, and is hosted on **Vercel** for fast global access.

---

## 🚀 Tech Stack

**Frontend**
- React + Vite  
- Tailwind CSS  
- ShadCN UI  
- DraftJS (Rich Text Editor)  
- Axios (API communication)

**Backend & Services**
- Strapi v4 (Backend CMS)  
- Clerk Authentication (Email / Google Login)  
- Neon PostgreSQL (Database)  
- Render (Backend Hosting)  
- Vercel (Frontend Hosting)

---

## ⭐ Features

### 🧩 1. AI-Powered Resume Summary  
- Generate professional, job-specific summaries  
- AI suggests bullet points and improvements  
- Edit the content using rich-text editor (bold, italic, underline, bullet lists)

### 🎨 2. Beautiful UI & Customizable Themes  
- Change resume colors and layout styles  
- Clean, modern design with Tailwind + ShadCN components

### 💾 3. Auto-Save & Permanent Storage  
- Every resume is stored securely in the backend  
- Users can log in anytime and continue editing  
- Unlimited resume edits & updates

### 📄 4. Real-Time Preview  
- Side-by-side editing and live preview experience  
- See your resume update instantly while typing

### 🗂 5. Resume Dashboard  
- All created resumes stored in one place  
- Click any resume to edit it again  
- Create multiple resumes with different themes

### ⬇️ 6. Download Resume  
- Export the final resume as a downloadable PDF  
- Clean formatting optimized for printing

### 🔐 7. Secure Login  
- Users log in using **Clerk authentication**  
- All data is linked to the user's account

---

## 📌 Pages Included

- **Home / Hero Page**  
- **Login / Sign-up (Clerk)**  
- **Dashboard** – view all saved resumes  
- **Resume Editor** – form inputs + AI summary + live preview  
- **Resume Viewer** – final PDF-ready page  
- **Themes Section** – choose colors & styles  

---

## 🔗 API Integration (Axios Example)

```js
import axios from "axios";

const API_KEY = import.meta.env.VITE_STRAPI_API_KEY;

const axiosClient = axios.create({
  baseURL: "https://your-render-backend-url/",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
});

export const CreateResume = (data) => {
  return axiosClient.post("/api/user-resumes", data);
}; and more
```

More operations like update, delete, fetch are built similarly.

---

## 🛠 Running the Project Locally

```bash
# install dependencies
npm install

# start development
npm run dev
```


---

---

## 🚀 Deployment

### **Frontend (React)**
Deployed on **Vercel**  
Simply connect GitHub → Import → Deploy.

### **Backend (Strapi)**
Hosted on **Render**  
Connected to **Neon PostgreSQL** database.

---

## 🎉 Conclusion

The **AI Resume Builder** provides a seamless experience to create professional resumes effortlessly.  
With AI assistance, rich editing tools, secure login, real-time preview, and theme customization —  
it's a complete modern resume creation platform.

Feel free to contribute or suggest improvements!

---

Made with ❤️ using React, Clerk, Strapi, and Tailwind.

