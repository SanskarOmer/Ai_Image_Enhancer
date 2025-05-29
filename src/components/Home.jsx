/* eslint-disable no-unused-vars */
import { useState } from "react";
import ImageUpload from "./ImageUpload";
import ImagePreview from "./ImagePreview";
import enhancedImageAPI from "../utils/EnhancedImageAPI";

const Home = () => {
  const [uploadImage, setUploadImage] = useState("");
  const [enhancedImage, setEnhancedImage] = useState("");
  const [loading, setLoading] = useState(false);

  const UploadHandler = async (file) => {
    try {
      await checkImageResolution(file); // Check resolution first
    } catch (error) {
      alert(error.message);
      return;
    }

    const previewUrl = URL.createObjectURL(file);
    setUploadImage(previewUrl);
    setLoading(true);

    try {
      const enhancedURL = await enhancedImageAPI(file);
      setEnhancedImage(enhancedURL.image);
    } catch (error) {
      console.error("Image enhancement error:", error);
      alert("Error while enhancing the image. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const checkImageResolution = (file, maxWidth = 4096, maxHeight = 4096) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        if (img.width > maxWidth || img.height > maxHeight) {
          reject(
            new Error(
              `Image too large. Max allowed is ${maxWidth}×${maxHeight}. Your image is ${img.width}×${img.height}`
            )
          );
        } else {
          resolve();
        }
      };
      img.onerror = () =>
        reject(new Error("Failed to load image for resolution check."));
      img.src = URL.createObjectURL(file);
    });
  };

  return (
    <>
      <ImageUpload UploadHandler={UploadHandler} />
      <ImagePreview
        loading={loading}
        upload={uploadImage}
        enhanced={enhancedImage}
      />
    </>
  );
};

export default Home;
