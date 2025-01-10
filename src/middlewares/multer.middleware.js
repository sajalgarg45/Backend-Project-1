import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
destination: function (req, file, cb) {
    // Use an absolute path to the uploads directory
    const uploadPath = path.resolve('public/temp/my-uploads'); 
    cb(null, uploadPath);
},
filename: function (req, file, cb) {
    cb(null, file.originalname); // Keep the original filename
},
});

// Export the configured multer instance
export const upload = multer({ storage });