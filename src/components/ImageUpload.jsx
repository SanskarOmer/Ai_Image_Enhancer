const ImageUpload = () => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-2x1">
      <label
        htmlFor="fileInput"
        className="block w-full cursor-pointer border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-600 transition-all"
      >
        <input type="file" id="fileInput" className="hidden" />
        <span className="font-medium text-lg text-gray-600">Click and drag to upload your image</span>
      </label>
      
    </div>
  );
};
export default ImageUpload;
