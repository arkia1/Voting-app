import { useState } from "react";
import VoteCard from "./VoteCard";

export interface VotingSectionProps {
  selected: boolean;
}

const VotingSection = ({ selected }: VotingSectionProps) => {
  const [localSelected, setLocalSelected] = useState(selected);

  const handleVote = () => {
    setLocalSelected(!localSelected);
  };

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 w-full h-auto gap-8 pt-8 overflow-hidden `}
      onClick={handleVote}
    >
      <VoteCard selected={localSelected} />
      <VoteCard selected={!localSelected} />
    </div>
  );
};

export default VotingSection;
