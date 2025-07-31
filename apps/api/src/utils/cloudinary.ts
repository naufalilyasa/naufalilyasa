import { v2 as cloudinary } from "cloudinary";
import config from "config/config.js";

cloudinary.config({
  api_key: config.apiKeyCloudinary,
  api_secret: config.apiSecretCloudinary,
  cloud_name: config.cloudNameCloudinary,
});

export default cloudinary;
