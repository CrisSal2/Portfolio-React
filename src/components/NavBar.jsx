import '../styles/NavBar.css';


const data = [
    {
        label: 'HOME',
        to: '/home'
    },
    {
        label: 'SKILLS',
        to: '/skills'
    },
    {
        label: 'PROJECTS',
        to: '/projects'
    },
    {
        label: 'CONTACT',
        to: '/contact'
    },
    {
        label: 'RESUME',
        to: '/resume'
    },
]






function NavBar() {
    return (
        <nav className="navbar">
            <div className='navbar_container'>
                <button>Home</button>
                <button>Skills</button>
                <button>Projects</button>
                <button>Contact</button>
                <button>Resume</button>
            </div>
        </nav>
    );
};

export default NavBar;