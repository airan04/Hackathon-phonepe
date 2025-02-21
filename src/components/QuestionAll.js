import React, { useState, useEffect } from "react";
import axios from "axios";

const QuestionAll = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [difficultyFilter, setDifficultyFilter] = useState("");

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(
          "https://hackathon-1-g3fc.onrender.com/api/questions/all"
        );
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
    ? questions.filter((question) => question.difficulty === difficultyFilter)
    : questions;

  return (
    <div className="container mx-auto p-6">
      {loading ? (
        <div className="fixed inset-0 flex justify-center items-center bg-white bg-opacity-50 z-50">
          <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
        </div>
      ) : (
        <>
          {/* <div className="mb-6 w-[15%] mx-auto">
            <label
              htmlFor="difficulty"
              className="block text-gray-800 font-semibold text-lg mb-2"
            >
              Filter by Difficulty:
            </label>
            <select
              id="difficulty"
              value={difficultyFilter}
              onChange={handleFilterChange}
              className="block w-full border border-gray-300 rounded-lg p-3 text-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All</option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div> */}

          {filteredQuestions.length > 0 ? (
            <div className="bg-white p-6 rounded-lg shadow-xl">
              <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">
                All Questions
              </h2>

              {/* Filter Dropdown in the Right Corner */}
              <div className="flex justify-end mb-6">
                <div className="w-[15%]">
                  <label
                    htmlFor="difficulty"
                    className="block text-gray-800 font-semibold text-lg mb-2"
                  >
                    Filter by Difficulty:
                  </label>
                  <select
                    id="difficulty"
                    value={difficultyFilter}
                    onChange={handleFilterChange}
                    className="block w-full border border-gray-300 rounded-lg p-3 text-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">All</option>
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                  </select>
                </div>
              </div>

              {/* Grid of Questions */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredQuestions.map((question, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-lg border border-gray-300 shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                  >
                    {/* Question Header */}
                    <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                      <span className="text-blue-500 mr-3">{index + 1}.</span>
                      {question.questionText}
                    </h3>

                    {/* Difficulty Section */}
                    {question.difficulty && (
                      <div className="flex items-center mb-4">
                        <span className="text-sm text-gray-600 mr-2">
                          Difficulty:
                        </span>
                        <span
                          className={`text-sm font-semibold ${
                            question.difficulty === "Easy"
                              ? "text-green-500"
                              : question.difficulty === "Medium"
                              ? "text-yellow-500"
                              : "text-red-500"
                          }`}
                        >
                          {question.difficulty}
                        </span>
                      </div>
                    )}

                    {/* Divider */}
                    <div className="my-4 border-t-2 border-gray-200"></div>

                    {/* Link Section */}
                    <div className="mt-4">
                      <a
                        href={question.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-700 font-medium text-sm transition-colors duration-300"
                      >
                        View Question
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h2 className="text-3xl font-bold text-gray-700 mb-4">
                No questions available
              </h2>
              <p className="text-lg text-gray-600">
                There are no questions to display at the moment.
              </p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default QuestionAll;
