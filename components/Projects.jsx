import React from 'react';
import viewke from '../public/assets/viewke.PNG';
import proj5 from '../public/assets/proj5.PNG';
import proj4 from '../public/assets/proj4.PNG';
import seaenergy from '../public/assets/seaenergy.PNG';
import face from '../public/assets/face.PNG';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16 overflow-hidden">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I have Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="View 254"
            backgroundImg={viewke}
            projectUrl="/viewke"
          />
          <ProjectItem
            title="Gshon Agency"
            backgroundImg={proj5}
            projectUrl="/property"
          />
          <ProjectItem
            title="Seahorse LTD"
            backgroundImg={seaenergy}
            projectUrl="/seahorse"
          />

          <ProjectItem
            title="E-Commerce Ware shopping"
            backgroundImg={face}
            projectUrl="/face"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
