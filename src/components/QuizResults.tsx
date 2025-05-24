import React from "react";
import { RefreshCw } from "lucide-react";
import ScoreBoard from "./ScoreBoard";

interface QuizResultsProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

const QuizResults: React.FC<QuizResultsProps> = ({
  score,
  totalQuestions,
  onRestart,
}) => {
  return (
    <div className="animate-fade-in">
      <ScoreBoard score={score} totalQuestions={totalQuestions} />
      
      <div className="mt-8 text-center">
        <button
          onClick={onRestart}
          className="flex items-center justify-center mx-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105"
        >
          <RefreshCw className="mr-2" size={18} />
          もう一度チャレンジ
        </button>
      </div>
    </div>
  );
};

export default QuizResults;