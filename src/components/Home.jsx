import ImageUpload from "./ImageUpload";
import ImagePreview from "./ImagePreview";
import { useState } from "react";

const Home = () => {
  const [uploadImage, setUploadImage] = useState("");
  const [enhancedImage, setEnhancedImage] = useState("");
  const [loading, setLoading] = useState(false);
  const UploadHandler =(file)=>{
    console.log("File uploaded:", file);
    setUploadImage(URL.createObjectURL(file));
    setLoading(true);
    // Simulate an API call to enhance the image

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
