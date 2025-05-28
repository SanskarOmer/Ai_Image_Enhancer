/* eslint-disable no-unused-vars */
import ImageUpload from "./ImageUpload";
import ImagePreview from "./ImagePreview";
import { useState } from "react";
import enhancedImageAPI from "../utils/EnhancedImageAPI";

const Home = () => {
  const [uploadImage, setUploadImage] = useState("");
  const [enhancedImage, setEnhancedImage] = useState("");
  const [loading, setLoading] = useState(false);
  const UploadHandler = async (file) => {
    setUploadImage(URL.createObjectURL(file));
    setLoading(true);
    try {
      const enhancedURL = await enhancedImageAPI(file);
      setEnhancedImage(enhancedURL);
      setLoading(false);
    } catch (error) {
      console.log(error);
      alert("Error while enhancing the image. Please try again later.");
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
