import React from 'react';
import ScrollStack, { ScrollStackItem } from './ScrollStack';
import {project1, project2, project3, project4, project5 } from '../../assets';

const ProjectSection = () => {
  return (
    <section className="project-section" id="projectSection">
      <div className="project-section__container">
        <div className="project-section__header">
          <p className="project-section__eyebrow">RECENT WORK</p>
          <h2 className="project-section__title">Featured projects</h2>
        </div>

        <ScrollStack
          className="project-section__stack"
          itemDistance={64}
          itemScale={0.03}
          itemStackDistance={34}
          stackPosition="20%"
          scaleEndPosition="20%"
          baseScale={0.9}
          rotationAmount={0}
          blurAmount={0.8}
          useWindowScroll={true}
        >
          <ScrollStackItem>
            <img className="project-card-image" src={project1} alt="Project dashboard 1" />
          </ScrollStackItem>
          <ScrollStackItem>
            <img className="project-card-image" src={project2} alt="Project dashboard 2" />
          </ScrollStackItem>
          <ScrollStackItem>
            <img className="project-card-image" src={project3} alt="Project dashboard 3" />
          </ScrollStackItem>
          {/* <ScrollStackItem>
            <img className="project-card-image" src={project4} alt="Project dashboard 4" />
          </ScrollStackItem> */}
          <ScrollStackItem>
            <img className="project-card-image" src={project5} alt="Project dashboard 5" />
          </ScrollStackItem>
        </ScrollStack>
      </div>
    </section>
  );
};

export default ProjectSection;


