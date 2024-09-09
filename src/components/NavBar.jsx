import {Link} from 'react-router-dom'

const data = [
    { label: 'HOME', to: '/' },
    { label: 'SKILLS', to: '/skills' },
    { label: 'PORTFOLIO', to: '/portfolio' },
    { label: 'CONTACT', to: '/contact' },
    { label: 'RESUME', to: '/resume' },
];

function NavBar() {
    return (
        <nav className="navbar">
            <div className="navbar_container">
                {data.map((item) => (
                    <Link key={item.to} to={item.to}>
                        <button>{item.label}</button>
                    </Link>
                ))}
            </div>
        </nav>
    );
}

export default NavBar;
