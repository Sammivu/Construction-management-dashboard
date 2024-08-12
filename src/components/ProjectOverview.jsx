// ./src/components/ProjectOverview.js
import React, { useState } from 'react';
import { projects } from '../data'; // Import the projects data

const ProjectOverview = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0]); // Default to the first project

  const handleProjectChange = (event) => {
    const selectedId = parseInt(event.target.value);
    const project = projects.find(p => p.id === selectedId);
    setSelectedProject(project);
  };

  return (
    <header id='overview'>
      <div className="bg-white rounded-xl p-4 h-[400px] scroll-smooth md:scroll-auto">
        <div className='flex justify-between'>
          <h2 className="font-[600] mb-4">Project Overview</h2>
          <div>
            <select 
              className="border rounded p-2"
              onChange={handleProjectChange}
              value={selectedProject.id}
            >
              {projects.map((project) => (
                <option key={project.id} value={project.id}>{project.name}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="space-y-2 ">
          <p className='text-sm' ><strong>Project Name:</strong> {selectedProject.name}</p>
          <p className='text-sm'><strong>Start Date:</strong> {selectedProject.startDate}</p>
          <p className='text-sm'><strong>End Date:</strong> {selectedProject.endDate}</p>
          <p className='text-sm'><strong>Status:</strong> {selectedProject.status}</p>
        </div>

        <div className="mt-4">
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div
              className="bg-blue-600 h-4 rounded-full"
              style={{ width: `${selectedProject.completionRate}%` }}
            ></div>
          </div>
          <p className="text-right mt-2 text-sm">{selectedProject.completionRate}% Completed</p>
        </div>
      </div>
    </header>
  );
};

export default ProjectOverview;
