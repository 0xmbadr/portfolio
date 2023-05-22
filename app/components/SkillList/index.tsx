import featuredSkills from '../../constants/skills';
import SkillListItem from './SkillListItem';

const SkillList = () => {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-3 md:gap-2">
      {featuredSkills.map((skill) => (
        <SkillListItem key={skill.name} skill={skill} />
      ))}
    </ul>
  );
};

export default SkillList;
