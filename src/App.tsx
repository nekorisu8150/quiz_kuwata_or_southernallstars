import React, { useState, useEffect } from "react";
import Layout from "./components/Layout";
import QuizCard from "./components/QuizCard";
import ResultFeedback from "./components/ResultFeedback";
import QuizResults from "./components/QuizResults";
import { getRandomSongs, Song } from "./data/songs";

// Number of questions per quiz
const QUIZ_LENGTH = 10;

function App() {
  // Quiz state
  const [quizSongs, setQuizSongs] = useState<Song[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [quizComplete, setQuizComplete] = useState(false);
  
  // Start a new quiz
  const startQuiz = () => {
    const randomSongs = getRandomSongs(QUIZ_LENGTH);
    setQuizSongs(randomSongs);
    setCurrentQuestionIndex(0);
    setScore(0);
    setIsAnswered(false);
    setIsCorrect(null);
    setQuizComplete(false);
  };
  
  // Initialize quiz on first load
  useEffect(() => {
    startQuiz();
  }, []);
  
  // Handle user answer
  const handleAnswer = (answer: "桑田佳祐" | "サザンオールスターズ") => {
    const currentSong = quizSongs[currentQuestionIndex];
    const correct = answer === currentSong.artist;
    
    setIsCorrect(correct);
    setIsAnswered(true);
    
    if (correct) {
      setScore(prevScore => prevScore + 1);
    }
  };
  
  // Move to next question
  const handleNextQuestion = () => {
    const nextIndex = currentQuestionIndex + 1;
    
    if (nextIndex < quizSongs.length) {
      setCurrentQuestionIndex(nextIndex);
      setIsAnswered(false);
      setIsCorrect(null);
    } else {
      setQuizComplete(true);
    }
  };
  
  // Current question
  const currentSong = quizSongs[currentQuestionIndex];

  // Show loading state until songs are loaded
  if (quizSongs.length === 0) {
    return (
      <Layout>
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin h-12 w-12 rounded-full border-t-2 border-blue-500 border-r-2 border-blue-500"></div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-2xl mx-auto">
        {!quizComplete ? (
          <div className="transition-all duration-500 animate-fade-in">
            <QuizCard
              song={currentSong}
              onAnswer={handleAnswer}
              isAnswered={isAnswered}
              isCorrect={isCorrect}
              currentQuestion={currentQuestionIndex + 1}
              totalQuestions={quizSongs.length}
            />
            
            {isAnswered && (
              <ResultFeedback
                isCorrect={isCorrect as boolean}
                correctAnswer={currentSong.artist}
                onNextQuestion={handleNextQuestion}
              />
            )}
          </div>
        ) : (
          <QuizResults
            score={score}
            totalQuestions={quizSongs.length}
            onRestart={startQuiz}
          />
        )}
      </div>
    </Layout>
  );
}

export default App;