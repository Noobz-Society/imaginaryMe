import React from 'react'
import '../css/Home.css'
import ExampleImage from '../assets/img/example.svg'
import BottomElipse from '../assets/img/bottomElipse.svg'
import BottomCircle from '../assets/img/bottomCircle.svg'


const Home = () => {
  return (
    <div id="home_container">
      <div className="flex_container">
          <div id="home_left_section">
            <div id="circle"></div>
            <div id="example_container"><img src={ExampleImage} alt="example"/></div>
          </div>
          <div id="home_right_section">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="centered_button">
              <button id="started_button"><a href="/free">Get Started !</a></button>
            </div>
          </div>
      </div>
      <img src={BottomElipse} alt="bottomElipse" id="bottom_elipse"/>
      <img src={BottomCircle} alt="bottomElipse" id="bottom_circle"/>

      
    </div>
  )
}

export default Home
