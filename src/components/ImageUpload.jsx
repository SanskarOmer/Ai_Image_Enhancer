/* eslint-disable react/prop-types */
const ImageUpload = (props) => {

  const showImageHandler = (event) => {
    const file = event.target.files[0];
    if (file) {
      props.UploadHandler(file);
    }
  }

  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-2xl">
      <label
        htmlFor="fileInput"
        className="block w-full cursor-pointer border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-600 transition-all"
      >
        <input type="file" id="fileInput" className="hidden" onChange={showImageHandler}/>
        <span className="font-medium text-lg text-gray-600">Click and drag to upload your image</span>
      </label>
      
    </div>
  );
};
export default ImageUpload;
