import VoteCard from "./VoteCard";

const VotingSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full h-auto gap-4 p-4 overflow-hidden">
      <VoteCard />
      <VoteCard />
    </div>
  );
};

export default VotingSection;
