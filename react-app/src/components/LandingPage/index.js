import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SignupFormPage from "../SignupFormPage"
import OpenModalButton from "../OpenModalButton";
import LoginFormModal from '../LoginFormModal';
import './Landingpage.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


function LandingPage() {
  // const sessionUser = useSelector(state => state.session.user);

  //   openLoginModal = () =>{

  //   }
  const history = useHistory()


  return (
    <div className='landingPageContainer'>
      <img className="landingPageLogo" src="https://cdn.discordapp.com/attachments/1113213089702228038/1115025363232378891/phillyroll-low-resolution-logo-color-on-transparent-background.png" />
      <div className='landingPageSignUpContainer'>
        <SignupFormPage />
      </div>
      <div className='landingPageLoginContainer'>
        <OpenModalButton
          buttonText="Already have an account? Log In."
          modalComponent={<LoginFormModal />}
        />
      </div>
      
      <img src ='https://cdn.discordapp.com/attachments/1113213089702228038/1116401833615826964/595-5959626_huey-boondocks-huey-freeman-clothes-hd-png-download-removebg-preview.png'></img>
      <img src = ''></img>
    </div>


  );
}

export default LandingPage;