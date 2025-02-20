import React from "react";
import backgroundImage from "../assets/canva-1.png";

const About = () => {
  return (
    <div className="container mx-auto p-4">
      <section
        className="w-full bg-gray-60 p-20 rounded-lg mb-20 mt-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <h3>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </h3>
      </section>
    </div>
  );
};

export default About;
