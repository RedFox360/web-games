import GamesList from './components/GamesList';
import NavBar from './components/NavBar';
import First from './games/firstProject/First';
import GuessPassword from './games/secondProject/GuessPassword'
import FlappyBird from './games/flappyBird/FlappyBird'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useEffect } from 'react';
import mintGreenImg from './images/mint_green.png';
import mePic from './images/me.jpg';
import CookieClicker from './games/cookieClicker/CookieClicker';
import FishFeeder from './games/fishFeeder/FishFeeder';
import ZRace from './games/zrace/ZRace';
import Rocket from './games/rocket/Rocket';
import TashMe from './games/tashMe/TashMe';
import ZombieEyes from './games/zombieEyes/ZombieEyes';
import LunarLander from './games/lunarLander/LunarLander';
import UFO from './games/ufo/UFO';

export default function App() {
  useEffect(() => {
    document.title = "Game Links";
  }, [])
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/games/first">
          <First />
        </Route>
        <Route path="/games/second">
          <GuessPassword />
        </Route>
        <Route path="/games/flappy">
          <FlappyBird />
        </Route>
        <Route path="/games/fish">
          <FishFeeder />
        </Route>
        <Route path="/games/zombie">
          <ZombieEyes />
        </Route>
        <Route path="/games/lunar">
          <LunarLander />
        </Route>
        <Route path="/games/ufo">
          <UFO />
        </Route>
        <Route path="/games/zrace">
          <ZRace />
        </Route>
        <Route path="/games/rocket">
          <Rocket />
        </Route>
        <Route path="/games/tash">
          <TashMe />
        </Route>
        <Route path="/games/cookie">
          <div> <CookieClicker /> </div>
        </Route>
        <Route path="/games">
          <GamesList />
        </Route>
        <Route path="/about">
          <div id="about-div">
            <h1> About Me </h1>
            <p> Hello, I'm Sameer. I'm 11 years old and I'm going to enter 6th grade. Some of my hobbies include playing the piano and coding. </p>
            <p> My favorite color is mint green and my favorite animal is a penguin. </p>
            <img src={mintGreenImg} alt="Mint Green" width="300" height="300" />
            <img src={mePic} alt="Me, Sameer" width="400" height="300" />
          </div>
        </Route>
        <Route path="/">
          <div id="main-div">
            <h1>Welcome</h1>
            <p> Welcome to my web links website! Here you can view all of my amazing games. Click <Link to="/about"> "About Me" </Link> to learn more about me. </p>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}
