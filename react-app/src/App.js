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
import AnimeForm from "./components/AnimeForm";
import ProfilePage from "./components/ProfilePage";
import EpisodeComponent from './components/EpisodeComponent'
import EpisodeForm from './components/EpisodeForm'
import EditAnime from "./components/EditAnime";
import PageNotFound from "./components/PageNotFound";

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
  // <div className="master-container"> 
  // </div>
  return (
    <div className="main-body">
      <div className="content-body">

      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
       

          
          <Route exact path='/'>
            <LandingPage />
          </Route>

          <Route exact path="/anime">
            <HomePage />
          </Route>

          <Route exact path='/anime/new'>
            <AnimeForm />
          </Route>

          <Route exact path='/anime/:animeId/episodes/new'>
            <EpisodeForm />
          </Route>

          <Route exact path='/anime/:animeId/edit'>
            <EditAnime />
          </Route>

          <Route exact path="/anime/:animeId">
            <AnimeDetail />
          </Route>

          <Route path="/user/:userId" >
            <ProfilePage />
          </Route>

          <Route path="/login" >
            <LoginFormPage />
          </Route>

          <Route path="/signup">
            <SignupFormPage />
          </Route>

          <Route exact path='/anime/:animeId/episodes/:episodeId'>
            <EpisodeComponent />
          </Route>
          <Route>
            <PageNotFound/>
          </Route>
        </Switch>
      )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
