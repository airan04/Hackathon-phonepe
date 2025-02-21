import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Questions = () => {
  const location = useLocation();
  const { apiResponse } = location.state || {};
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (apiResponse) {
      setLoading(false);
    }
  }, [apiResponse]);

  return (
    <div className="container mx-auto p-4">
      {loading ? (
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-bold mb-4">Loading...</h2>
          <p>Please wait while we fetch the data.</p>
        </div>
      ) : (
        <>
          {apiResponse && apiResponse.length > 0 ? (
            <div className="bg-white p-6 rounded-lg shadow-xl">
            <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">
              API Response
            </h2>
          
            {/* Grid of Questions */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {apiResponse.map((question, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg border border-gray-300 shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                >
                  {/* Question Header */}
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <span className="text-blue-500 mr-3">{index + 1}.</span>
                    {question.questionText}
                  </h3>
          
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

export default Questions;
