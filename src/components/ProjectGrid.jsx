import ProjectCard from "./ProjectCard";

function ProjectGrid({ projects }) {
  return (
    <div className="grid gap-7 sm:grid-cols-2 xl:grid-cols-3">
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
    </div>
  );
}

export default ProjectGrid;
