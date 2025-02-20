import React from "react";
import { useLocation } from "react-router-dom";

const Questions = () => {
  const location = useLocation();
  const { apiResponse } = location.state || {};

  return (
    <div className="container mx-auto p-4">
      {apiResponse ? (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">API Response</h2>
          <h3>{apiResponse.questionText}</h3>
          <a
            href={apiResponse.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            {apiResponse.link}
          </a>
        </div>
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
};

export default Questions;