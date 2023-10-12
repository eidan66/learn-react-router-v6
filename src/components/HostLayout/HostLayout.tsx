import {FunctionComponent} from 'react';
import {NavLink, NavLinkProps, Outlet} from 'react-router-dom';

export const HostLayout: FunctionComponent = () => {
    const getActiveStyles: NavLinkProps['style'] = ({isActive}) => isActive ? ({
        fontWeight: 'bold',
        textDecoration: 'underline',
        color: '#161616'
    }) : {}

    return (
        <>
            <nav className="host-nav">
                <NavLink end style={getActiveStyles}
                         to="/host">Dashboard</NavLink>
                <NavLink style={getActiveStyles}
                         to="income">Income</NavLink>
                <NavLink style={getActiveStyles}
                         to="vans">Vans</NavLink>
                <NavLink style={getActiveStyles}
                         to="reviews">Reviews</NavLink>
            </nav>
            <Outlet/>
        </>
    )
}