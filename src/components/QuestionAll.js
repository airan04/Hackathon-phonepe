import React, { useState, useEffect } from "react";
import axios from "axios";

const QuestionAll = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [difficultyFilter, setDifficultyFilter] = useState("");

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get("https://hackathon-1-g3fc.onrender.com/api/questions/all");
        setQuestions(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching questions:", error);
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  const handleFilterChange = (e) => {
    setDifficultyFilter(e.target.value);
  };

  const filteredQuestions = difficultyFilter
    ? questions.filter(question => question.difficulty === difficultyFilter)
    : questions;

  return (
    <div className="container mx-auto p-4">
      {loading ? (
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-bold mb-4">Loading...</h2>
          <p>Please wait while we fetch the data.</p>
        </div>
      ) : (
        <>
          <div className="mb-4">
            <label htmlFor="difficulty" className="block text-gray-700 font-bold mb-2">
              Filter by Difficulty:
            </label>
            <select
              id="difficulty"
              value={difficultyFilter}
              onChange={handleFilterChange}
              className="block w-full border border-gray-300 rounded-md p-2"
            >
              <option value="">All</option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>
          {filteredQuestions.length > 0 ? (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">All Questions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredQuestions.map((question, index) => (
                  <div key={index} className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                    <h3 className="text-lg font-semibold mb-2">{index + 1}. {question.questionText}</h3>
                    <p className="text-sm text-gray-600 mb-2">Difficulty: {question.difficulty}</p>
                    <a
                      href={question.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      {question.link}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h2 className="text-2xl font-bold mb-4">No data available</h2>
              <p>There are no questions to display at the moment.</p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default QuestionAll;