import React, { useState } from "react";
import backgroundImage from "/Users/rishi.airan/Desktop/interviewer-frontend/my-react-app/src/assets/canva-1.png";

const Form = () => {
  const [formData, setFormData] = useState({
    department: "",
    experience: "",
    role: "",
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
    console.log(formData);
  };

  return (
    <div className="container mx-auto p-4">
      <section
        className="w-full bg-gray-60 p-20 rounded-lg mb-20 mt-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
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
            <button
              type="submit"
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Form;
