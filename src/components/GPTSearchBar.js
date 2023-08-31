const GPTSearchBar = () => {
  return (
    <div className="pt-[7%] flex justify-center ">
      <form className="w-1/2 bg-black grid grid-cols-12 rounded-md">
        <input
          type="text"
          className="p-4 m-4 col-span-9 rounded-l-md focus:outline-none focus:ring focus:border-blue-300"
          placeholder="What would you like to watch today?"
        />
        <button className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-r-md hover:bg-red-800 transition duration-300 ease-in-out">
          Search
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
