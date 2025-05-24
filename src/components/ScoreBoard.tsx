import React from "react";
import { Award } from "lucide-react";

interface ScoreBoardProps {
  score: number;
  totalQuestions: number;
}

const ScoreBoard: React.FC<ScoreBoardProps> = ({ score, totalQuestions }) => {
  // Calculate percentage score
  const percentage = Math.round((score / totalQuestions) * 100);
  
  // Determine message based on score
  const getMessage = () => {
    if (percentage >= 90) return "音楽の達人！";
    if (percentage >= 70) return "素晴らしい！";
    if (percentage >= 50) return "よくできました！";
    if (percentage >= 30) return "もう少し頑張りましょう！";
    return "次は頑張りましょう！";
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 text-center">
      <Award className="mx-auto text-yellow-500 mb-4" size={48} />
      
      <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-2">
        クイズ結果
      </h2>
      
      <div className="mb-6">
        <div className="text-5xl font-bold text-blue-600 mb-2">
          {score} <span className="text-2xl text-gray-500">/ {totalQuestions}</span>
        </div>
        <p className="text-xl text-gray-600">{getMessage()}</p>
      </div>
      
      {/* Progress bar */}
      <div className="w-full h-4 bg-gray-200 rounded-full mb-6 overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      
      {/* Fun fact based on score */}
      <div className="bg-blue-50 rounded-lg p-4 mb-6 text-left">
        <h3 className="font-semibold text-blue-800 mb-1">豆知識:</h3>
        <p className="text-sm text-gray-700">
          {percentage >= 80 
            ? "桑田佳祐はサザンオールスターズのボーカルとして活動しながら、ソロとしても多くのヒット曲を出しています。"
            : "サザンオールスターズは1978年にデビューし、日本の音楽シーンに大きな影響を与えたロックバンドです。"}
        </p>
      </div>
    </div>
  );
};

export default ScoreBoard;