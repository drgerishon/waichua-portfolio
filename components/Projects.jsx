import React from 'react';
import viewke from '../public/assets/viewke.PNG';
import proj5 from '../public/assets/proj5.PNG';
import proj4 from '../public/assets/proj4.PNG';
import seaenergy from '../public/assets/seaenergy.PNG';
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
            projectUrl="/Viewke"
          />
          <ProjectItem
            title="Gshon Agency"
            backgroundImg={proj5}
            projectUrl="/Property"
          />
          <ProjectItem
            title="Seahorse LTD"
            backgroundImg={seaenergy}
            projectUrl="/Seahorse"
          />

          <ProjectItem
            title="E-Commerce"
            backgroundImg={proj4}
            projectUrl="/Property"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
