import React from 'react';
import '../styles.css';

const FeaturedProject = () => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
        <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Project Title
            </h3>
            <p className="text-gray-600">
                A brief description of your featured project goes here. You can describe the technologies used, your role, and the project's impact.
            </p>
            <a
                href="#"
                className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
            >
                View Project
            </a>
        </div>
    </div>
  );
};

export default FeaturedProject;