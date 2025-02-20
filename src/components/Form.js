import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import backgroundImage from "../assets/canva-1.png";

const Form = () => {
  const [formData, setFormData] = useState({
    department: "",
    experience: "",
    role: "",
    difficulty: ""
  });

  const [submittedData, setSubmittedData] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { department, experience, role } = formData;
    const apiUrl = `https://hackathon-1-g3fc.onrender.com/api/questions?department=${encodeURIComponent(department)}&jobType=${encodeURIComponent(role)}&experienceLevel=${encodeURIComponent(experience)}`;

    try {
      const response = await axios.get(apiUrl, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      setSubmittedData(response.data);
      navigate("/questions", { state: { apiResponse: response.data } });
    } catch (error) {
      console.error("Error submitting form data:", error);
    }
  };

  const handleReset = () => {
    setSubmittedData(null);
    setFormData({
      department: "",
      experience: "",
      role: "",
      difficulty: ""
    });
  };

  return (
    <div className="container mx-auto p-4">
      <section
        className="w-full bg-gray-60 p-20 rounded-lg mb-20 mt-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {submittedData ? (
          <div className="flex flex-col items-center justify-center p-10 bg-white bg-opacity-70 rounded-lg min-h-screen">
            <div className="bg-white p-12 rounded-lg shadow-md m-4 w-1/2 text-center">
              <h2 className="text-2xl font-bold mb-4">Form Submitted</h2>
              <p className="text-gray-700 mb-4">
                Thank you for submitting the form. Here is the information you provided:
              </p>
              <ul className="text-left mb-4">
                <li><strong>Department:</strong> {submittedData.department}</li>
                <li><strong>Experience:</strong> {submittedData.experience}</li>
                <li><strong>Role:</strong> {submittedData.role}</li>
                <li><strong>Difficulty:</strong> {submittedData.difficulty}</li>
              </ul>
              <button
                onClick={handleReset}
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700"
              >
                Submit Another Response
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center p-10 bg-white bg-opacity-70 rounded-lg min-h-screen">
            <form
              onSubmit={handleSubmit}
              className="bg-white p-12 rounded-lg shadow-md m-4 w-1/2"
            >
              <div className="mb-10">
                <label
                  htmlFor="department"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Department:
                </label>
                <select
                  name="department"
                  id="department"
                  value={formData.department}
                  onChange={handleChange}
                  className="block w-full border border-gray-300 rounded-md p-2"
                >
                  <option value="">Select department</option>
                  <option value="Backend">Backend</option>
                  <option value="Integration Engineer">
                    Integration Engineer
                  </option>
                  <option value="Ops">Ops</option>
                  <option value="Business">Business</option>
                </select>
              </div>
              <div className="mb-10">
                <label
                  htmlFor="experience"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Experience:
                </label>
                <select
                  name="experience"
                  id="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  className="block w-full border border-gray-300 rounded-md p-2"
                >
                  <option value="">Select experience</option>
                  <option value="0-2 yrs">0-2 yrs</option>
                  <option value="2-4 yrs">2-4 yrs</option>
                  <option value="4-6 yrs">4-6 yrs</option>
                </select>
              </div>
              <div className="mb-10">
                <label
                  htmlFor="role"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Role:
                </label>
                <select
                  name="role"
                  id="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="block w-full border border-gray-300 rounded-md p-2"
                >
                  <option value="">Select role</option>
                  <option value="FTE">FTE</option>
                  <option value="FTC">FTC</option>
                </select>
              </div>
              <div className="mb-10">
                <label
                  htmlFor="difficulty"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Difficulty:
                </label>
                <select
                  name="difficulty"
                  id="difficulty"
                  value={formData.difficulty}
                  onChange={handleChange}
                  className="block w-full border border-gray-300 rounded-md p-2"
                >
                  <option value="">Select difficulty</option>
                  <option value="Easy">Easy</option>
                  <option value="Medium">Medium</option>
                  <option value="Hard">Hard</option>
                </select>
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700"
              >
                Submit
              </button>
            </form>
          </div>
        )}
      </section>
    </div>
  );
};

export default Form;