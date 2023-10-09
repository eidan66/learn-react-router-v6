import {FunctionComponent} from 'react';
import {NavLink, Outlet} from 'react-router-dom';

export const HostLayout: FunctionComponent = () => {
    const activeStyles = {
      fontWeight: 'bold',
      textDecoration:'underline',
      color:'#161616',
    }

    return (
        <>
            <nav className="host-nav">
                <NavLink end style={({isActive}) => isActive ? activeStyles : {}}
                         to="/host">Dashboard</NavLink>
                <NavLink style={({isActive}) => isActive ? activeStyles : {}}
                         to="/host/income">Income</NavLink>
                <NavLink style={({isActive}) => isActive ? activeStyles : {}}
                         to="/host/reviews">Reviews</NavLink>
            </nav>
            <Outlet/>
        </>
    )
}