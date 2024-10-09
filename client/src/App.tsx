import Footer from "./components/shared/Footer";
import Question from "./components/shared/Question";
import SubmitButton from "./components/shared/SubmitButton";
import VotingSection from "./components/shared/VotingSection";

const App = () => {
  return (
    <div className=" flex flex-col items-center h-auto bg-zinc-800 ">
      <div className="mt-6 bg-indigo-500 w-auto h-[60px] p-4 text-center rounded-lg shadow-2xl">
        <h1 className="text-gray-100 text-xl font-semibold">
          Vote for your candidate! 🗳️
        </h1>
      </div>
      <div>
        <Question />
      </div>
      <div>
        <VotingSection selected={false} />
      </div>
      <SubmitButton />
      <div className="overflow-hidden mt-2">
        <Footer />
      </div>
    </div>
  );
};

export default App;
