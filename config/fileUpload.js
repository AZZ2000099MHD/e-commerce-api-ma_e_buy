import cloudinaryPackage from "cloudinary";
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import dotenv from "dotenv";

dotenv.config();

// Configure cloudinary
const cloudinary = cloudinaryPackage.v2;
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET_KEY,
});

// Create storage engine for Multer
const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: "blog-api", // Specify the folder where you want to store uploaded files
    },
});

// Init Multer with the storage engine
const upload = multer({ storage: storage });

export default upload;
