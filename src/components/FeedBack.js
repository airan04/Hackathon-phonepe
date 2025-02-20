import React, { useState } from 'react';

const FeedBack = () => {
  const [formData, setFormData] = useState({
    interviewerName: '',
    candidateName: '',
    technicalSkills: '',
    communicationSkills: '',
    problemSolving: '',
    overallExperience: '',
    additionalComments: '',
  });

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // You can submit the form data to your server here or process it as needed.
    alert('Feedback Submitted!');
    setFormData({
      interviewerName: '',
      candidateName: '',
      technicalSkills: '',
      communicationSkills: '',
      problemSolving: '',
      overallExperience: '',
      additionalComments: '',
    });
  };

  return (
    <div className="flex justify-center items-center p-10 bg-gray-100 min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full sm:w-1/2 lg:w-1/3"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">Interview Feedback</h2>

        <div className="mb-4">
          <label
            htmlFor="interviewerName"
            className="block text-gray-700 font-bold mb-2"
          >
            Interviewer's Name:
          </label>
          <input
            type="text"
            id="interviewerName"
            name="interviewerName"
            value={formData.interviewerName}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="candidateName"
            className="block text-gray-700 font-bold mb-2"
          >
            Candidate's Name:
          </label>
          <input
            type="text"
            id="candidateName"
            name="candidateName"
            value={formData.candidateName}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="technicalSkills"
            className="block text-gray-700 font-bold mb-2"
          >
            Technical Skills (1-5):
          </label>
          <input
            type="number"
            id="technicalSkills"
            name="technicalSkills"
            value={formData.technicalSkills}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
            min="1"
            max="5"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="communicationSkills"
            className="block text-gray-700 font-bold mb-2"
          >
            Communication Skills (1-5):
          </label>
          <input
            type="number"
            id="communicationSkills"
            name="communicationSkills"
            value={formData.communicationSkills}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
            min="1"
            max="5"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="problemSolving"
            className="block text-gray-700 font-bold mb-2"
          >
            Problem Solving (1-5):
          </label>
          <input
            type="number"
            id="problemSolving"
            name="problemSolving"
            value={formData.problemSolving}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
            min="1"
            max="5"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="overallExperience"
            className="block text-gray-700 font-bold mb-2"
          >
            Overall Experience (1-5):
          </label>
          <input
            type="number"
            id="overallExperience"
            name="overallExperience"
            value={formData.overallExperience}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
            min="1"
            max="5"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="additionalComments"
            className="block text-gray-700 font-bold mb-2"
          >
            Additional Comments:
          </label>
          <textarea
            id="additionalComments"
            name="additionalComments"
            value={formData.additionalComments}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
            rows="4"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default FeedBack;
