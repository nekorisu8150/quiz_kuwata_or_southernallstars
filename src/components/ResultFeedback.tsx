import React from "react";
import { ArrowRight } from "lucide-react";

interface ResultFeedbackProps {
  isCorrect: boolean;
  correctAnswer: string;
  onNextQuestion: () => void;
}

const ResultFeedback: React.FC<ResultFeedbackProps> = ({
  isCorrect,
  correctAnswer,
  onNextQuestion,
}) => {
  return (
    <div className="text-center mt-6">
      <button
        onClick={onNextQuestion}
        className="flex items-center justify-center mx-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105"
      >
        次の問題へ
        <ArrowRight className="ml-2" size={18} />
      </button>
    </div>
  );
};

export default ResultFeedback;