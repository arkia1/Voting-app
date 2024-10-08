import { VotingSectionProps } from "./VotingSection";

const VoteCard = ({ selected }: VotingSectionProps) => {
  return (
    <div
      className={`w-full max-w-[320px] h-[300px] bg-indigo-500 rounded-lg p-4 mt-8 flex flex-col items-center cursor-pointer duration-300 ${
        selected ? " border-4 border-gray-100 rounded-lg shadow-lg" : ""
      }`}
    >
      <div className="h-24 w-24 bg-white rounded-full mb-4"></div>
      <p className="text-white text-sm font-medium text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu velit
        ultricies, dictum velit at, vestibulum nibh.
      </p>
    </div>
  );
};

export default VoteCard;
