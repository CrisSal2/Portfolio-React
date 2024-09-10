import './skills.css'

const skillIcons = {
  html: '🌐',
  css: '🎨',
  javascript: '💻',
  express: '🚀',
  react: '⚛️',
  mongodb: '🍃',
  sql: '🗄️'
};

const skills = [
  { name: 'HTML', icon: skillIcons.html, description: 'Markup language for creating web pages.' },
  { name: 'CSS', icon: skillIcons.css, description: 'Stylesheet language used for web design.' },
  { name: 'JavaScript', icon: skillIcons.javascript, description: 'Programming language of the web.' },
  { name: 'Express', icon: skillIcons.express, description: 'Fast, minimalist web framework for Node.js.' },
  { name: 'React', icon: skillIcons.react, description: 'JavaScript library for building UIs.' },
  { name: 'MongoDB', icon: skillIcons.mongodb, description: 'NoSQL database for scalable applications.' },
  { name: 'SQL', icon: skillIcons.sql, description: 'Relational database management and querying.' }
];

function Skills() {
  return (
    <div className='container'>
      <h2 className='title'>My Coding Skills</h2>
      <div className='skillsContainer'>
        {skills.map((skill) => (
          <div className='skillCard' key={skill.name}>
            <div className='skillIcon'>{skill.icon}</div>
            <h3 className='skillName'>{skill.name}</h3>
            <p className='skillDescription'>{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;