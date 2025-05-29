import Loader from "./Loader";
/* eslint-disable react/prop-types */
const ImagePreview = (props) => {
  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
      {/* Original Image */}
      <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg">
        <h2 className="text-xl font-semibold text-center bg-indigo-700 text-indigo-200 py-2">
          Original Image
        </h2>

        {props.upload ? (
          <img
            src={props.upload}
            alt="Original"
            className="w-full max-h-[450px] object-contain mx-auto"
          />
        ) : (
          <div className="flex items-center justify-center h-64 bg-gray-700 text-gray-400">
            No Image Selected
          </div>
        )}
      </div>
      {/* Enhanced Image */}
      <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg">
        <h2 className="text-xl font-semibold text-center bg-green-700 text-green-200 py-2">
          Enhanced Image
        </h2>
        {props.enhanced && !props.loading ? (
          <img
            src={props.enhanced}
            alt="Enhanced"
            className="w-full max-h-[450px] object-contain mx-auto"
          />
        ) : props.loading ? (
          <Loader />
        ) : (
          <div className="flex items-center justify-center h-64 bg-gray-700 text-gray-400">
            No Enhanced Image
          </div>
        )}
      </div>
    </div>
  );
};

export default ImagePreview;
