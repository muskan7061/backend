import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  timeout: 120000, // Increase timeout to 60 seconds
});

console.log("Cloudinary Config:", {
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// const uploadOnCloudinary =async (localFilePath) => {
//   try {
//       if (!localFilePath) return null;
//       const response = await cloudinary.uploader.upload(localFilePath, {
//           resource_type: "auto",
//       });

//       if (fs.existsSync(localFilePath)) {
//           fs.unlinkSync(localFilePath);
//       }
//       return response;
//   } catch (error) {        
//       if (fs.existsSync(localFilePath)) {
//           fs.unlinkSync(localFilePath);
//       }
//       return null;
//   }
// };
const uploadOnCloudinary = async (localFilePath) => {
  try {
    // console.log("localFilePathlocalFilePath",localFilePath)
    if (!localFilePath) return null;
    //upload the file on cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    console.log("response" , response)
   
    if (fs.existsSync(localFilePath)) {
      fs.unlinkSync(localFilePath);
  }
    return response;
  } catch (error) {
    console.log("errorerror", error);
    // fs.unlinkSync(localFilePath) // remove the locally saved temporary file as the upload operation got failed
    // return error;
    if (fs.existsSync(localFilePath)) fs.unlinkSync(localFilePath); // Clean up file if it exists
    throw new Error("Failed to upload file to Cloudinary");
  }
};

export { uploadOnCloudinary };
