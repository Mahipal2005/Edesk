
const express = require("express");
require('dotenv').config();
const cloudinary = require('cloudinary').v2;
const multer = require('multer');
const path = require("path");
const fs = require("fs");

// Cloudinary configuration
cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const app = express();
const port = 3000;

// Multer configuration for storing files locally
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads');
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "index.html"));
});

app.post('/upload', upload.single('avatar'), async function (req, res, next) {
    // req.file is the `avatar` file
    if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded.' });
    }

    try {
        const result = await cloudinary.uploader.upload(req.file.path, {
            folder: 'uploads',
        });

        // Delete the local file after uploading to cloudinary
        fs.unlinkSync(req.file.path);

        res.status(200).json({
            message: "file uploaded successfully",
            imageUrl: result.secure_url,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'File upload failed.', error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
