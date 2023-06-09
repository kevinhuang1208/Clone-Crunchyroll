import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SignupFormPage from "../SignupFormPage"
import OpenModalButton from "../OpenModalButton";
import LoginFormModal from '../LoginFormModal';
import './Landingpage.css';
import { useHistory } from 'react-router-dom';
import * as sessionActions from "../../store/session";
import { login } from "../../store/session";
import { useDispatch } from "react-redux";



function LandingPage() {
  // const sessionUser = useSelector(state => state.session.user);

  //   openLoginModal = () =>{

  //   }
  const history = useHistory()
  const dispatch = useDispatch();

//   }

  const handleClick = (e) => {
    e.preventDefault()
    history.push('/anime')

  }

  const handleDemoSubmit = async (e) => {
    e.preventDefault();
    return dispatch(sessionActions.login("demo@aa.io", "password"))
  };

  const handleDemoSubmitStudio = async (e) => {
    e.preventDefault();
    return dispatch(sessionActions.login("marnie@aa.io", "password"))
  };

  return (
    <div className='landingPageContainer'>
      <img className="landingPageLogo" src="https://cdn.discordapp.com/attachments/1113213089702228038/1115025363232378891/phillyroll-low-resolution-logo-color-on-transparent-background.png"/>
      <div className='imgs-with-form'>
      <img id='boondock-left' src ='https://cdn.discordapp.com/attachments/1113213089702228038/1116401833615826964/595-5959626_huey-boondocks-huey-freeman-clothes-hd-png-download-removebg-preview.png'></img>
      <div className='wholeFormContainer'>
      <div className='landingPageSignUpContainer'>
        <SignupFormPage />
      </div>
	  <div className='landingPageLoginContainer'>
      Already Have An Account?
		<OpenModalButton
      className='button'
			buttonText="LOG IN"
			modalComponent={<LoginFormModal/>}
		/>
	  </div>
    <div className="demo-button">
    Regular Demo User:
      <button type="submit"
         onClick={handleDemoSubmit}>Demo User Login</button>
      </div>
    <div className="demo-button">
    To have access to ALL Features: 
      <button type="submit"
         onClick={handleDemoSubmitStudio}>Demo Studio User Login</button>
      </div>
    <div className='guest-button'>
    <a className="guest-button-a"onClick={(e)=> handleClick(e)}> Continue without logging in</a>
    {/* <button className='button' onClick={(e) => handleClick(e)}>GUEST VIEW</button> */}
    </div>
    </div>
    <img id='boondock-right' src ='https://cdn.discordapp.com/attachments/1113213089702228038/1116426351604400299/sunglasses-drawing-riley-freeman-huey-freeman-cartoon-uncle-ruckus-comics-boondocks-simpsons-png-clipart-removebg-preview.png'></img>
    </div>
    </div>


  );
}

export default LandingPage;
