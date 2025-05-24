import React from "react";
import { Music, Disc } from "lucide-react";
import { Song } from "../data/songs";

interface QuizCardProps {
  song: Song;
  onAnswer: (answer: "桑田佳祐" | "サザンオールスターズ") => void;
  isAnswered: boolean;
  isCorrect: boolean | null;
  currentQuestion: number;
  totalQuestions: number;
}

const QuizCard: React.FC<QuizCardProps> = ({
  song,
  onAnswer,
  isAnswered,
  isCorrect,
  currentQuestion,
  totalQuestions,
}) => {
  return (
    <div 
      className={`
        bg-white rounded-2xl shadow-xl p-6 md:p-8
        transform transition-all duration-500
        ${isAnswered ? (isCorrect ? "ring-4 ring-green-400" : "ring-4 ring-red-400") : ""}
      `}
    >
      {/* Progress indicator */}
      <div className="mb-6 flex justify-between items-center">
        <span className="text-sm text-gray-500">
          質問 {currentQuestion}/{totalQuestions}
        </span>
        <Disc 
          className={`
            text-blue-500 
            ${isAnswered ? "animate-none" : "animate-spin-slow"}
          `} 
          size={28} 
        />
      </div>
      
      {/* Question */}
      <div className="text-center mb-8">
        <h2 className="text-lg md:text-xl text-gray-600 mb-2">この曲は誰の曲？</h2>
        <div className="flex items-center justify-center space-x-3">
          <Music className="text-red-500" size={28} />
          <h3 className="text-2xl md:text-3xl font-bold text-blue-900">{song.title}</h3>
        </div>
      </div>
      
      {/* Options */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <button
          onClick={() => !isAnswered && onAnswer("桑田佳祐")}
          disabled={isAnswered}
          className={`
            py-4 px-6 rounded-xl font-semibold text-lg
            transition-all duration-300 transform
            ${isAnswered && song.artist === "桑田佳祐" 
              ? "bg-green-500 text-white" 
              : isAnswered && song.artist !== "桑田佳祐" && isCorrect === false 
                ? "bg-red-500 text-white" 
                : "bg-blue-100 hover:bg-blue-200 text-blue-800 hover:scale-105"
            }
          `}
        >
          桑田佳祐
        </button>
        
        <button
          onClick={() => !isAnswered && onAnswer("サザンオールスターズ")}
          disabled={isAnswered}
          className={`
            py-4 px-6 rounded-xl font-semibold text-lg
            transition-all duration-300 transform
            ${isAnswered && song.artist === "サザンオールスターズ" 
              ? "bg-green-500 text-white" 
              : isAnswered && song.artist !== "サザンオールスターズ" && isCorrect === false 
                ? "bg-red-500 text-white" 
                : "bg-yellow-100 hover:bg-yellow-200 text-yellow-800 hover:scale-105"
            }
          `}
        >
          サザンオールスターズ
        </button>
      </div>
      
      {/* Feedback */}
      {isAnswered && (
        <div className={`
          text-center py-3 px-4 rounded-lg
          ${isCorrect ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}
        `}>
          <p className="font-medium">
            {isCorrect 
              ? "正解！" 
              : `不正解。「${song.title}」は${song.artist}の曲です。`}
          </p>
        </div>
      )}
    </div>
  );
};

export default QuizCard;