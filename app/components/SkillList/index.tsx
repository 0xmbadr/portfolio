import featuredSkills from '../../constants/skills';
import SkillListItem from './SkillListItem';

const SkillList = () => {
  return (
    <ul className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-2">
      {featuredSkills.map((skill) => (
        <SkillListItem key={skill.name} skill={skill} />
      ))}
    </ul>
  );
};

export default SkillList;
