import Image from 'next/image';
import { Skill } from '../../constants/skills';
import { AiOutlineHeart } from 'react-icons/ai';
interface SkillListItemProps {
  skill: Skill;
}

const SkillListItem = ({ skill }: SkillListItemProps) => {
  return (
    <li className="mt-2 px-6 py-3 border-2 rounded-lg hover:border-emerald-600/50 bg-zinc-100 border-zinc-300/50 group">
      <div className="flex items-center space-x-2">
        <Image
          src={skill.image}
          alt={`${skill.name} logo`}
          width={skill.name === 'MongoDB' ? '22' : '32'}
          height="32"
        />
        <a
          target="_blank"
          href={`${skill.link}`}
          className="text-lg hover:underline group-hover:text-emerald-600">
          {skill.name}
        </a>
        {skill.isFavorite && (
          <AiOutlineHeart className="h-5 text-zinc-500 group-hover:text-rose-600" />
        )}
      </div>
    </li>
  );
};

export default SkillListItem;
