import comingSoon from '../../assets/images/coming-soon.png';
import './resume.css';

function Resume() {
  return (
    <div className="resume-download-container">
      <h2>Download My Resume</h2>
      <div className='image-container'>
        <img src={comingSoon} alt="coming-soon" />
      </div>
      <a href="/resume.pdf" download="ChristianSalgado_Resume.pdf" className="download-btn">
        Download Resume
      </a>
    </div>
  );
}

export default Resume;
