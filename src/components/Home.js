import React from 'react';
import Header from './Header';
import arrowIcon from "./../images/angle-right.svg";
import starThree from "./../images/star-3.svg";
import starFour from "../images/star-4.svg";
import star from "../images/star.svg";
import coinPot from "../images/coin-pot.svg";
import coinLeft from "../images/coin-left.svg";
import coinRight from "../images/coin-right.svg";

export default function Home() {
  return(
    <>
      <Header />
      <main>
        <div className="main-section pt-10">
          <img src={starThree} className="three" alt="a star icon" />
          <img src={starFour} className="four" alt="a star icon" />
          <div className="hero-section text-center">
            <h1 className="text-white hidden-md"><span>Unlock to</span> Power your dreams!</h1>
            <h1 className="text-white hidden-sm"><span>Unlock to</span><br/> Power your dreams!</h1>
            <div className="text-wrapper">
              <img src={star} className="one"  alt="a star icon" />
              <h6>Stand a chance to win <span>N3,000,000</span> everyday for the next 5 days</h6>
            </div>
          </div>
          <div className="how-to-play">
            <h6 className='pb-5 text-center'>🚀 How To Play</h6>
            <div className='pb-2'>
              <p>1. Guess the right combination of numbers.</p>
              <p>2. Win <span>N3,000,000</span> instantly</p>
            </div>
            <p className="pb-2">Sounds unbelievable? Well, guess right & see for yourself!</p>
            <div className="think-wrapper flex">
              <div className="mr-1">💡</div>
              <p>Think well before you guess. You have only 2 attempts per day and even after you wi, you can come back the next day to try for another jackpot!</p>
            </div>
          </div>
          <div className="text-center pt-5">
            <a href="/" className="btn-play">
              Play the Game <img src={arrowIcon} alt="an icon" />
            </a>
          </div>
          <div className="animations text-center">
            <img src={coinLeft} className="coin coin-left" alt="a coin" />
            <img src={coinRight} className="coin coin-right" alt="a coin" />
            <img src={coinPot} alt="a pack of coins" />
          </div>
        </div>
      </main>
    </>
  );
}