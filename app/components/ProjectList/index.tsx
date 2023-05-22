import projects from './../../constants/projects';
import ProjectsListItem from './ProjectListItem';

const ProjectsList = () => {
  return (
    <ul>
      {projects.map((project) => (
        <ProjectsListItem key={project.name} project={project} />
      ))}
    </ul>
  );
};

export default ProjectsList;
