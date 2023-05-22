import projects, { Project } from '../../constants/projects';
import { AiOutlineLink } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';

interface ProjectstListItemProps {
  project: Project;
}

const ProjectsListItem = ({ project }: ProjectstListItemProps) => {
  return (
    <li className="mb-4 px-6 py-4 border-2 rounded-lg hover:border-emerald-600/50 bg-zinc-100 border-zinc-300/50 group">
      <div className="flex items-center justify-between">
        <h5 className="text-xl font-semibold md:text-2xl group-hover:text-emerald-600">
          {project.name}
        </h5>
        {project.links && (
          <div className="flex items-center space-x-2 group-hover:text-emerald-600">
            {project.links.site && (
              <a
                href={project.links.site}
                target={project.name === 'DevBadr' ? '_self' : '_blank'}>
                <AiOutlineLink size="1.5rem" />
                <span className="sr-only">{`${project.name} site link`}</span>
              </a>
            )}

            {project.links.github && (
              <a href={project.links.github} target="_blank">
                <AiFillGithub size="1.5rem" />
                <span className="sr-only">{`${project.name} repository link`}</span>
              </a>
            )}
          </div>
        )}
      </div>

      <p className="mt-4">{project.description}</p>

      <div className="flex flex-wrap items-center justify-start mt-2">
        {project.tech.map((tech) => (
          <p
            key={tech}
            className="px-4 py-1 mt-2 mr-2 rounded-full bg-zinc-200/50">
            {tech}
          </p>
        ))}
      </div>
    </li>
  );
};

export default ProjectsListItem;
