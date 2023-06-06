import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }){
	const sessionUser = useSelector(state => state.session.user);
	const location = useLocation()
	// console.log(location.pathname)
	if(location.pathname === "/"){
		return null
	}
	return (
		<ul>
			<li>
				<NavLink className='navlink' exact to="/anime"><img src='https://cdn.discordapp.com/attachments/1113213089702228038/1115025363232378891/phillyroll-low-resolution-logo-color-on-transparent-background.png'/></NavLink>
			</li>
			{isLoaded && (
				<li>
					<ProfileButton user={sessionUser} />
				</li>
			)}
		</ul>
	);
}

export default Navigation;