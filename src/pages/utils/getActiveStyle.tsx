import {NavLinkProps} from 'react-router-dom'

export const getActiveStyles: NavLinkProps['style'] = ({isActive}) => isActive ? ({
    fontWeight: 'bold',
    textDecoration: 'underline',
    color: '#161616'
}) : {}