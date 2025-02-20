import React from "react";
import { useLocation } from "react-router-dom";

const Questions = () => {
  const location = useLocation();
  const { apiResponse } = location.state || {};

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Questions</h1>
      {apiResponse ? (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">API Response</h2>
          <pre className="bg-gray-100 p-4 rounded-lg">
            {JSON.stringify(apiResponse, null, 2)}
          </pre>
        </div>
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
};

export default Questions;