const Loader = () => {
  return (
    <div className="w-full max-w-md p-4 rounded-xl shadow-lg bg-white h-64">
      <div className="flex justify-center items-center h-full">
        <div className="animate-spin h-12 w-12 border-t-4 border-b-4 border-blue-500 rounded-full"></div>
      </div>
    </div>
  );
};

export default Loader;
