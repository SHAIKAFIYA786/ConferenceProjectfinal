# Conference Website - Project Documentation

## 1. Project Overview
The Conference Website is a desktop-first, responsive web platform designed to provide details about an upcoming academic or professional conference. It includes both frontend and backend functionality, allowing users to register, submit papers, contact the organizers, and interact with the event data dynamically. It serves as a digital brochure and management tool for the event.

## 2. Features
- **Home Page** with an eye-catching hero section
- **About Page** detailing the conference theme and goals
- **Speakers Section** featuring keynote and guest speakers
- **Schedule Page** outlining the event timeline
- **Registration Form** with backend integration
- **Paper Submission Form** with Cloudinary file uploads
- **Contact Page** for user inquiries
- **Admin Dashboard** (if applicable) for managing registrations and submissions
- **Desktop-first Responsive Design**

## 3. Tech Stack
- **Frontend:** HTML5, CSS3, JavaScript
- **Styling:** Custom CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **File Storage:** Cloudinary
- **Deployment:** Render (Backend), Static Hosting (Frontend)

## 4. Folder Structure
```
Conference-Project/
├── .env                     # Environment variables
├── .gitignore               # Git ignore file
├── index.js                 # Main server file
├── package.json             # Node.js dependencies
├── README.md                # Project documentation
├── backend/                 # Backend logic
│   ├── config/              # Configuration files
│   │   ├── cloudinary.js    # Cloudinary configuration
│   │   └── db.js            # MongoDB connection
│   ├── controllers/         # Controllers for API routes
│   │   ├── contactController.js
│   │   ├── paperController.js
│   │   └── registrationController.js
│   ├── models/              # Mongoose models
│   │   ├── Contact.js
│   │   ├── Paper.js
│   │   └── Registration.js
│   ├── routes/              # API routes
│   │   ├── contactRoutes.js
│   │   ├── paperRoutes.js
│   │   └── registrationRoutes.js
│   └── uploads/             # Uploaded files (if applicable)
├── frontend/                # Frontend files
│   ├── public/              # Static files
│   │   ├── styles/          # CSS files
│   │   ├── scripts/         # JavaScript files
│   │   ├── home.html        # Home page
│   │   ├── contact.html     # Contact page
│   │   ├── registration.html # Registration page
│   │   ├── submission.html  # Paper submission page
│   │   ├── call.html        # Call for papers page
│   │   ├── publication.html # Publication details page
```

## 5. Installation & Setup
1. Clone the repository:
```bash
git clone https://github.com/username/conference-website.git
```
2. Navigate into the project directory:
```bash
cd Conference-Project
```
3. Install backend dependencies:
```bash
npm install
```
4. Set up environment variables in `.env`:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```
5. Start the backend server:
```bash
node index.js
```
6. Open the frontend in a browser:
```bash
open frontend/public/home.html
```

## 6. API Endpoints
- **Contact Form:**
  - `POST /api/contact/contacts`
- **Paper Submission:**
  - `POST /submit/papersubmit`
- **Registration:**
  - `POST /api/registrations/register`

## 7. Pages Description
- **Home:** Welcome message and conference highlights
- **About:** Mission, goals, organizing committee
- **Speakers:** Profile cards of featured speakers
- **Schedule:** Day-wise breakdown of events
- **Register:** Form with fields for name, email, role, etc. — connected to backend
- **Paper Submission:** File upload form connected to Cloudinary via backend
- **Contact:** Form for user queries

## 8. Responsive Design
The website is **desktop-first**, with Flexbox and Grid layout principles and basic responsiveness using media queries for larger screens.

## 9. Deployment Details
- **Frontend:** Static Hosting (Netlify or GitHub Pages)
- **Backend:** Render
- Ensure CORS and environment variables are configured properly for production.

## 10. Future Enhancements
- Improve mobile responsiveness
- Add admin login with secure authentication
- Send confirmation emails upon registration or submission
- Backend dashboard for managing paper submissions and contacts
- Real-time notifications for users

## 11. Contact Information
- **Email:** shaikafiya9676@gmail.com
- **Phone:** +91 9346124731

## 12. Contributors (Optional)
- **Afiya** – Full-stack Developer & Designer

---
*Created with ❤️ by Afiya

