import React, { useState } from "react";
import emailjs from "emailjs-com";

const FeedBack = () => {
  const [formData, setFormData] = useState({
    interviewerName: "",
    candidateName: "",
    interviewerEmail: "",
    candidateEmail: "",
    technicalSkills: "",
    communicationSkills: "",
    problemSolving: "",
    overallExperience: "",
    additionalComments: "",
  });

  const [sendToCandidate, setSendToCandidate] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendEmail = async () => {
    try {
      const result = await emailjs.send(
        "service_njnfz8g",
        "template_9ogbecz",
        formData,
        "6c33jm8uGtqJFt4iK"
      );
      console.log("Feedback sent successfully:", result.text);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  const handleCheckboxChange = (e) => {
    setSendToCandidate(e.target.checked);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Send feedback to the interviewer's email
    sendEmail();

    // Send a thank you email to the candidate
    if (sendToCandidate) {
      emailjs.send(
        "service_njnfz8g",
        "template_9ogbecz",
        {
          ...formData,
          to_email: formData.candidateEmail,
        },
        "6c33jm8uGtqJFt4iK"
      );
    }

    alert(
      "Feedback submitted and email sent to both interviewer and candidate!"
    );
    setFormData({
      interviewerName: "",
      candidateName: "",
      interviewerEmail: "",
      candidateEmail: "",
      technicalSkills: "",
      communicationSkills: "",
      problemSolving: "",
      overallExperience: "",
      additionalComments: "",
    });
  };

  return (
    <div className="flex justify-center items-center p-10 bg-gray-50 min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-4/5 lg:w-1/3"
      >
        <h2 className="text-3xl font-semibold mb-8 text-center text-blue-600">
          Interview Feedback
        </h2>

        <div className="mb-6">
          <label
            htmlFor="interviewerName"
            className="block text-gray-700 font-medium mb-2"
          >
            Interviewer's Name:
          </label>
          <input
            type="text"
            id="interviewerName"
            name="interviewerName"
            value={formData.interviewerName}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300 ease-in-out"
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="candidateName"
            className="block text-gray-700 font-medium mb-2"
          >
            Candidate's Name:
          </label>
          <input
            type="text"
            id="candidateName"
            name="candidateName"
            value={formData.candidateName}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300 ease-in-out"
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="interviewerEmail"
            className="block text-gray-700 font-medium mb-2"
          >
            Interviewer's Email:
          </label>
          <input
            type="email"
            id="interviewerEmail"
            name="interviewerEmail"
            value={formData.interviewerEmail}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300 ease-in-out"
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="candidateEmail"
            className="block text-gray-700 font-medium mb-2"
          >
            Candidate's Email:
          </label>
          <input
            type="email"
            id="candidateEmail"
            name="candidateEmail"
            value={formData.candidateEmail}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300 ease-in-out"
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="technicalSkills"
            className="block text-gray-700 font-medium mb-2"
          >
            Technical Skills (1-5):
          </label>
          <input
            type="number"
            id="technicalSkills"
            name="technicalSkills"
            value={formData.technicalSkills}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300 ease-in-out"
            min="1"
            max="5"
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="communicationSkills"
            className="block text-gray-700 font-medium mb-2"
          >
            Communication Skills (1-5):
          </label>
          <input
            type="number"
            id="communicationSkills"
            name="communicationSkills"
            value={formData.communicationSkills}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300 ease-in-out"
            min="1"
            max="5"
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="problemSolving"
            className="block text-gray-700 font-medium mb-2"
          >
            Problem Solving (1-5):
          </label>
          <input
            type="number"
            id="problemSolving"
            name="problemSolving"
            value={formData.problemSolving}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300 ease-in-out"
            min="1"
            max="5"
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="overallExperience"
            className="block text-gray-700 font-medium mb-2"
          >
            Overall Experience (1-5):
          </label>
          <input
            type="number"
            id="overallExperience"
            name="overallExperience"
            value={formData.overallExperience}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300 ease-in-out"
            min="1"
            max="5"
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="additionalComments"
            className="block text-gray-700 font-medium mb-2"
          >
            Additional Comments:
          </label>
          <textarea
            id="additionalComments"
            name="additionalComments"
            value={formData.additionalComments}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300 ease-in-out"
            rows="4"
          ></textarea>
        </div>

        <div className="mb-6">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={sendToCandidate}
              onChange={handleCheckboxChange}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className="ml-2 text-gray-700">Send email to candidate</span>
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-3 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default FeedBack;
