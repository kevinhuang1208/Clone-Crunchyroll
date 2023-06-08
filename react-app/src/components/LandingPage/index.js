import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SignupFormPage from "../SignupFormPage"
import OpenModalButton from "../OpenModalButton";
import LoginFormModal from '../LoginFormModal';
import './Landingpage.css';
import { useHistory } from 'react-router-dom';



function LandingPage() {
  // const sessionUser = useSelector(state => state.session.user);

  //   openLoginModal = () =>{

  //   }
  const history = useHistory()

//   }

  const handleClick = (e) => {
    e.preventDefault()
    history.push('/anime')

  }

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
    <div className='guest-button'>
    Continue without logging in:
    <button className='button' onClick={(e) => handleClick(e)}>GUEST VIEW</button>
    </div>
    </div>
    <img id='boondock-right' src ='https://cdn.discordapp.com/attachments/1113213089702228038/1116426351604400299/sunglasses-drawing-riley-freeman-huey-freeman-cartoon-uncle-ruckus-comics-boondocks-simpsons-png-clipart-removebg-preview.png'></img>
    </div>
    </div>


  );
}

export default LandingPage;
