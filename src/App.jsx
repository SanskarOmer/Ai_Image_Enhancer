import Home from "./components/Home";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 py-8 px-4 text-gray-100">
      <div className="text-center mb-8 max-w-xl px-4">
        <h1 className="text-5xl font-bold mb-2">AI Image Enhancer</h1>
        <p className="text-lg text-gray-400">
          Upload your Image and let AI enhance it in seconds!
        </p>
      </div>
      <Home />
      <div className="text-sm text-gray-500 mt-6">Powered By @Sanskar-Omer</div>
    </div>
  );
};

export default App;
