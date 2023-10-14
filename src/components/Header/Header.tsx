import {FunctionComponent} from 'react';
import {Link, NavLink} from 'react-router-dom';
import avatarIcon from '../../assets/images/avatar-icon.png'

export const Header: FunctionComponent = () =>
    (
        <header>
            <Link className="site-logo" to="/">#VanLife</Link>
            <nav>
                <NavLink to="/host" className={({isActive}) => isActive ? 'active-link' : undefined}>Host</NavLink>
                <NavLink to="/about" className={({isActive}) => isActive ? 'active-link' : undefined}>About</NavLink>
                <NavLink to="/vans" className={({isActive}) => isActive ? 'active-link' : undefined}>Vans</NavLink>
                <Link to="login" className="login-link">
                    <img
                        alt={'avatar-icon'}
                        src={avatarIcon}
                        className="login-icon"
                    />
                </Link>
            </nav>
        </header>
    )
