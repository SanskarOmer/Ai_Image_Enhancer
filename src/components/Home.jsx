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
    const previewUrl = URL.createObjectURL(file);
    setUploadImage(previewUrl);
    setLoading(true);

    try {
      const enhancedURL = await enhancedImageAPI(file);
      setEnhancedImage(enhancedURL);
    } catch (error) {
      console.error("Image enhancement error:", error);
      alert("Error while enhancing the image. Please try again later.");
    } finally {
      setLoading(false);
    }
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
