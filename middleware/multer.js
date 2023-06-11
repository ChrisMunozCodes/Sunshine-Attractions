const multer = require("multer");
const path = require("path");

// Multer configuration for post images
const postImageStorage = multer.diskStorage({
  // Set destination folder for post images
  destination: (req, file, cb) => {
    cb(null, "public/uploads/posts");
  },
  // Set filename for post images
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const extension = path.extname(file.originalname);
    cb(null, uniqueSuffix + extension);
  },
});

// Multer configuration for profile photos
const profilePicStorage = multer.diskStorage({
  // Set destination folder for profile photos
  destination: (req, file, cb) => {
    cb(null, "public/uploads/profiles");
  },
  // Set filename for profile photos
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const extension = path.extname(file.originalname);
    cb(null, uniqueSuffix + extension);
  },
});

// Multer instance for post images
const postImageUpload = multer({
  storage: postImageStorage,
  fileFilter: (req, file, cb) => {
    let ext = path.extname(file.originalname);
    if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
      cb(new Error("File type is not supported"), false);
      return;
    }
    cb(null, true);
  },
});

// Multer instance for profile photos
const profilePicUpload = multer({
  storage: profilePicStorage,
  fileFilter: (req, file, cb) => {
    let ext = path.extname(file.originalname);
    if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
      cb(new Error("File type is not supported"), false);
      return;
    }
    cb(null, true);
  },
});

module.exports = {
  postImageUpload,
  profilePicUpload,
};
