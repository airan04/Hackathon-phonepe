import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
};

const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);

    // Replace below with your own Service ID, Template ID and Public Key from your EmailJS account
    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_PUBLIC_KEY")
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="bg-gray-100 py-10">
      <div id="contact" className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full md:w-2/3 mb-8 md:mb-0">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="section-title mb-8">
                <h2 className="text-3xl font-bold">Get In Touch</h2>
                <p className="text-gray-600">
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
                </p>
              </div>
              <form name="sentMessage" validate onSubmit={handleSubmit}>
                <div className="flex flex-wrap -mx-4 mb-4">
                  <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control w-full p-3 border border-gray-300 rounded-lg"
                        placeholder="Name"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 px-4">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control w-full p-3 border border-gray-300 rounded-lg"
                        placeholder="Email"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group mb-4">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control w-full p-3 border border-gray-300 rounded-lg"
                    rows="4"
                    placeholder="Message"
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className="w-full md:w-1/3 md:pl-8">
            <div className="contact-info bg-white p-8 rounded-lg shadow-md">
              <div className="contact-item mb-4">
                <h3 className="text-2xl font-bold mb-2">Contact Info</h3>
                <p className="text-gray-600">
                  <span className="font-semibold"><i className="fa fa-map-marker mr-2"></i> Address:</span> {props.data ? props.data.address : "loading"}
                </p>
              </div>
              <div className="contact-item mb-4">
                <p className="text-gray-600">
                  <span className="font-semibold"><i className="fa fa-phone mr-2"></i> Phone:</span> {props.data ? props.data.phone : "loading"}
                </p>
              </div>
              <div className="contact-item mb-4">
                <p className="text-gray-600">
                  <span className="font-semibold"><i className="fa fa-envelope-o mr-2"></i> Email:</span> {props.data ? props.data.email : "loading"}
                </p>
              </div>
              <div className="social mt-4">
                <ul className="flex space-x-4">
                  <li>
                    <a href={props.data ? props.data.facebook : "/"} className="text-blue-600 hover:text-blue-800">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : "/"} className="text-blue-400 hover:text-blue-600">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : "/"} className="text-red-600 hover:text-red-800">
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer" className="bg-gray-800 py-4">
        <div className="container mx-auto text-center text-white">
          <p>
            &copy; 2023 Issaaf Kattan React Land Page Template. Design by{" "}
            <a href="http://www.templatewire.com" rel="nofollow" className="text-blue-400 hover:text-blue-600">
              TemplateWire
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;