import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import LandingPage from "./components/LandingPage"
import Footer from "./components/Footer"
import AnimeDetail from './components/AnimeDetail'
import HomePage from "./components/HomePage";
import { authenticate } from "./store/session";
import Navigation from "./components/Navigation";


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);

  // <Navigation isLoaded={isLoaded} />
  // <Route exact path='/'>
  //   <LandingPage />
  // </Route>
  return (
    <>

      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>

        <Route exact path='/'>
          <LandingPage />
        </Route>

          <Route exact path="/anime">
            <HomePage />

          </Route>

          <Route exact path="/anime/:animeId">
            <AnimeDetail/>
          </Route>
          <Route path="/login" >
            <LoginFormPage />
          </Route>

          <Route path="/signup">
            <SignupFormPage />
          </Route>



        </Switch>
      )}
      <Footer />
    </>
  );
}

export default App;
