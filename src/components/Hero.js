import React from 'react'
import styled from 'styled-components'
import avatar from '../images/avatar.png'

const HeroContainer = styled.div`
  /* background: #01131c; */
  background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(1,19,28,1) 100%);
  /* display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; */
  max-width: 1800px;
  margin: 0 auto;
  padding: 0 5vw;
  display: block;
  /* position: relative; */
  /* padding: 0 5rem; */
  /*
  margin-top: -20px; */
  color: #fff;

  /* :before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 2;
  } */
`

// const HeroBg = styled.div`
//   position: absolute;
//   top: 0;
//   bottom: 0;
//   right: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   overflow: hidden;
// `

const VideoBg = styled.img`
  width: 40%;
  /* -o-object-fit: cover;
  object-fit: cover;
  opacity: 0.4; */
  z-index: 1;
  position: absolute;
  /* width: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  opacity: 0.4;
  z-index: 1;
  position: absolute; */
`

const BorderBg = styled.div`
  height: 80%;
  border: #8ec5fc solid 1px;
  margin: 3rem 5rem;

  @media screen and (max-width: 768px) {
    margin: 5rem 2rem;
  }
`
const ShapesBg = styled.div`
  width: 150px;
  height: 500px;
  background-image: linear-gradient(to top, #48c6ef 0%, #6f86d6 100%);
  z-index: 5;
  position: absolute;
  right: 20rem;
`

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1600px;
  width: calc(1005 - 100px);
  margin: 0rem calc((100vw - 1300px) / 2);
`

const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  height: 100vh;
  width: 100%;
  max-height: 100%;
  padding: 0;
  /* margin-right: 27rem; */
  color: #fff;
  line-height: 1.1;
  font-weight: bold;
  z-index: 10;

  /* @media screen and (max-width: 1300px) {
    margin-right: 15rem;
    background: blue;;
  }
  @media screen and (max-width: 1200px) {
    margin-right: 5rem;
  }

  @media screen and (max-width: 868px) {
    margin-right: 5rem;
  }

  @media screen and (max-width: 768px) {
    margin: 0;
  } */
`

const HeroH1 = styled.div`
  font-size: clamp(1.5rem, 6vw, 4rem);
  /* margin-bottom: 1.5rem; */
  letter-spacing: 3px;
  display: flex;

  span {
    margin-left: 10px;
  }

  @media screen and (max-width: 1300px) {
    display: block;

    span {
      margin: 0;
    }
  }

  @media screen and (max-width: 868px) {
    display: block;

    span {
      margin: 0;
    }
  }

  @media screen and (max-width: 768px) {
    display: block;

    span {
      margin: 0;
    }
  }
`

const HeroP = styled.div`
  font-size: clamp(1rem, 3vw, 3rem);
  /* margin-bottom: 3rem; */
  font-weight: 400;
`
const Test1 = styled.div`
  position: absolute;
  bottom: -4.4rem;
  right: 16rem;
  color: white;
  font-size: 110px;
  font-weight: bold;
  background: linear-gradient(to white, transparent var(--p,50%), #eee 0);
  text-align: center;
`
const Test2 = styled.div`
  background: linear-gradient(to top, #14213d var(--p,50%), #edf2f4 0);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
`


const Hero = () => {
  return (
    <HeroContainer>
      {/* <HeroBg> */}
        {/* <VideoBg src={avatar} alt='pattern'/> */}
      {/* </HeroBg> */}
      {/* <HeroContent> */}
        <HeroItems>
          <HeroH1>
            <div>Hi, I'm Ivy Jean Cocharo</div>
          </HeroH1>
          <HeroP>a front-end web developer based in The Philippines</HeroP>
        </HeroItems>
      {/* </HeroContent> */}
      {/* <Test1>
        <Test2>WELCOME</Test2>
      </Test1> */}
    </HeroContainer>
  )
}

export default Hero
