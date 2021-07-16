import './NavBar.css';
import { Link } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';
export default function NavBar() {
    return (
        <div id="nav-container">
            <DarkModeToggle />
            <ul id="navbar">
                <li className="navbar-item">
                    <Link to='/' className='link'> Main </Link>
                </li>
                <li className="navbar-item">
                    <Link to='/about' className='link'> About Me </Link>
                </li>
                <li className="navbar-item">
                    <Link to='/games' className='link'> Games </Link>
                </li>
            </ul>
            <h1 id="nav-title"> Sameer's Web Games </h1>
        </div >
    )
}