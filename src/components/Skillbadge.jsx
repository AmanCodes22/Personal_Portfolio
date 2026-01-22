import './SkillBadge.css';

function SkillBadge({ skill, theme }) {
  return (
    <div className={`skill-badge ${theme === 'dark' ? 'dark' : 'light'}`}>
      {skill}
    </div>
  );
}

export default SkillBadge;
