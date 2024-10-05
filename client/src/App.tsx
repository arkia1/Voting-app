import Footer from "./components/shared/Footer";
import Question from "./components/shared/Question";
import VotingSection from "./components/shared/VotingSection";

const App = () => {
  return (
    <main className=" flex flex-col items-center w-screen h-auto bg-zinc-800 ">
      <div className="mt-6 bg-indigo-500 w-auto h-[60px] p-4 text-center rounded-lg shadow-2xl">
        <h1 className="text-gray-100 text-xl font-semibold">
          Vote for your candidate! 🗳️
        </h1>
      </div>
      <div className="">
        <Question />
      </div>
      <div className="">
        <VotingSection />
      </div>
      <div className="overflow-hidden mt-2">
        <Footer />
      </div>
    </main>
  );
};

export default App;
