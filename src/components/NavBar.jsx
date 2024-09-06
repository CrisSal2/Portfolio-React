import React from 'react'
import {Link} from 'react-router-dom'

const data = [
    {
        label: 'HOME',
        to: '/'
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
                <Link to={'/'}>
                <button>Home</button>
                </Link>
                <Link to={'/skills'}>
                <button>Skills</button>
                </Link>
                <Link to={'/projects'}>
                <button>Projects</button>
                </Link>
                <Link to={'/contact'}>
                <button>Contact</button>
                </Link>
                <Link to={'/resume'}>
                <button>Resume</button>
                </Link>
            </div>
        </nav>
    );
};

export default NavBar;






/* 

<nav className="navbar">
            <div className='navbar_container'>
                <ul>
                    {
                    data.map((item, key)=> {
                        <li key={key} className='buttonItem'>
                            <Link className='buttonItemLink' to={item.to}>
                            {item.label}
                            </Link>
                        </li>
                    })
                    }
                </ul>
            </div>
        </nav> */