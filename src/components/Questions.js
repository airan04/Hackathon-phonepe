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
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">API Response</h2>
              {apiResponse.map((question, index) => (
                <div key={index} className="mb-4">
                  <h3 className="text-xl font-semibold mb-2">{index + 1}. {question.questionText}</h3>
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