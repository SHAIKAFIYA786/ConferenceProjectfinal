// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const connectDB = require("./config/db");
// const registrationRoutes = require("./routes/registrationRoutes");
// require("dotenv").config();

// const app = express();

// // Connect to MongoDB
// connectDB();

// // Middleware
// app.use(express.json());
// app.use(cors());
// app.use(express.static("../frontend/public")); // Serve static files

// // Routes
// app.use("/api", registrationRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
// require("dotenv").config();
// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const helmet = require("helmet");
// const morgan = require("morgan");

// const app = express();

// // Middleware
// app.use(express.json());
// app.use(cors());
// app.use(helmet());
// app.use(morgan("dev"));

// // Database Connection
// // mongoose.connect(process.env.MONGO_URI, {
// //     useNewUrlParser: true,
// //     useUnifiedTopology: true,
// // })
// // .then(() => console.log("✅ MongoDB Connected"))
// // .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// // Basic Route
// // app.get("/", (req, res) => {
// //     res.send("Server is running!");
// // });
// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, "../frontend/public/home.html"));
// });
// // Start Server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//     console.log(`🚀 Server running on http://localhost:${PORT}`);
// });
require("dotenv").config();
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const connectDB = require("./backend/config/db"); 

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
const registrationRoutes = require("./backend/routes/registrationRoutes");
app.use("/api/registrations", registrationRoutes);

// Set Static Folder for HTML, CSS, JS
// app.use(express.static(path.join(__dirname, "../frontend/public")));

// Render home.html
// app.get("/", (req, res) => {
//     res.render(path.join(__dirname, "../frontend/public/home.html"));
// });
// app.use(express.static(path.join(__dirname, "public")));

// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, "public", "home.html"));
// });
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/conferenceDB";

// mongoose.connect(MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
//     .then(() => console.log("✅ MongoDB Connected"))
//     .catch((err) => console.error("❌ MongoDB Connection Error:", err));
connectDB();

app.use(express.static(path.join(__dirname, "frontend", "public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "public", "home.html"));
});



// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});

