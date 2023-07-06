import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/session";
import OpenModalButton from "../OpenModalButton";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import { useHistory } from "react-router-dom";
import ProfilePage from "../ProfilePage"
import { NavLink } from "react-router-dom";
import './Navigation.css';


function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const ulRef = useRef();
  const history = useHistory()

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      if (!ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const handleLogout = async (e) => {
    e.preventDefault();
    await dispatch(logout());
    history.push('/')
    // console.log("logout handled")
  };

  const ulClassName = "profile-dropdown" + (showMenu ? "" : " hidden");
  const closeMenu = () => setShowMenu(false);

  return (
    <>
      <div className={`button-with-arrow ${showMenu? 'menu-opened':'menu-closed'}`} onClick={openMenu}>
      <div className="profile-div">
        <img src="https://cdn.discordapp.com/attachments/1113213089702228038/1116759825104257104/morty-smith-pfp-30.jpg"/>
      </div>
      ▼
      </div>
      <ul className={ulClassName} ref={ulRef}>
        {user ? (
          <>
            <li className="username-img-li"><img src="https://cdn.discordapp.com/attachments/1113213089702228038/1116759825104257104/morty-smith-pfp-30.jpg"/> {user.username}</li>
            {user.studio ? <li className='generic-list'>Studio Member</li> : null}
            <li className='generic-list'>{user.email}</li>
            <li className='navlink-list'>
            <NavLink exact to={`/user/${user.id}`} onClick={closeMenu}>
                My Account
               <div className='text-below-navlink'>Manage your profile and settings.</div>
            </NavLink>
            </li>
            <li className='logout-list' onClick={handleLogout}>
              Log Out
            </li>
          </>
        ) : (
          <div className='nonuser-dropdown'>
            <OpenModalButton
              className='nonuser-buttons'
              buttonText="Log In"
              onItemClick={closeMenu}
              modalComponent={<LoginFormModal />}
            />

            <OpenModalButton
              className='nonuser-buttons'
              buttonText="Sign Up"
              onItemClick={closeMenu}
              modalComponent={<SignupFormModal />}
            />

          </div>
        )}
      </ul>
    </>
  );
}

export default ProfileButton;
