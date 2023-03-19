import React from 'react';
import './home.css';
import Social from './Social';
import Data from './Data';
import ScrollDown from './ScrollDown';
import 'animate.css';

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid animate__animated animate__bounceInDown animate__once" style={{ animationDuration: '5.5s', animationFillMode: 'forwards' }}>
        <div className="home__content grid">
          <Social />
          <div className="home__img"></div>
          <Data />
        </div>
        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;
