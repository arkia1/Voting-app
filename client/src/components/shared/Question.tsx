const Question = () => {
  return (
    <>
      <div className="mt-8 text-center">
        <label className="text-gray-100 text-xl font-bold">
          Question of the day ⁉️
        </label>
        <div className="flex text-white mt-4 w-auto max-w-[340px] h-20 bg- bg-indigo-500 rounded-lg shadow-2xl">
          <h2 className="text-lg font-semibold mt-3">
            What is your favorite programming language?
          </h2>
        </div>
      </div>
    </>
  );
};

export default Question;
