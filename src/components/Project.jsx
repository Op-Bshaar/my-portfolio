import React from 'react';
import { Porjects } from '../constants/index';

const Project = () => {
  return (
    <div className="bg-gray-800 py-10">
      <h2 className="text-center text-3xl my-8 font-semibold text-gray-800">Projects</h2>
      <div className='mx-auto px-4 sm:px-6 lg:px-8'>
        {Porjects.map((project, index) => {
          return (
            <div key={index} className="flex flex-col lg:flex-row items-center lg:items-start mb-12 bg-white p-6 rounded-lg shadow-lg">
              <div className="lg:w-1/2">
                <img
                  src={project.image}
                  className='w-full h-auto object-cover rounded-md'
                  alt={project.title}
                />
              </div>
              <div className="lg:w-1/2 lg:pl-8 mt-6 lg:mt-0">
                <h3 className='text-xl font-semibold text-gray-700'>{project.title}</h3>
                <p className='mt-4 text-gray-600'>{project.discription}</p>
                <div className='mt-6 flex flex-wrap gap-2'>
                  {project.technology.map((tech, techIndex) => (
                    <span className='bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm' key={techIndex}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Project;
