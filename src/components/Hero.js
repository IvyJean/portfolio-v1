import React from 'react'
import styled from 'styled-components'

const HeroContainer = styled.div`
  /* background: #0c0c0c; */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 1rem;
  position: relative;
  margin-top: -20px;
  color: #fff;

  :before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 2;
  }
`

const HeroBg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

const VideoBg = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
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
  margin-right: 20rem;
  color: #fff;
  line-height: 1.1;
  font-weight: bold;

  @media screen and (max-width: 1300px) {
    margin-right: 10rem;
  }

  @media screen and (max-width: 868px) {
    margin-right: 10rem;
  }

  @media screen and (max-width: 768px) {
    margin: 0;
  }
`

const HeroH1 = styled.div`
  font-size: clamp(1.5rem, 6vw, 4rem);
  margin-bottom: 1.5rem;
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
  margin-bottom: 3rem;
  font-weight: 400;
`

const Hero = () => {
  return (
    <HeroContainer>
      <HeroBg />
      <HeroContent>
        <HeroItems>
          <HeroH1>
            <div>Hi, I'm Ivy Jean</div>
            <span>Cocharo</span>
          </HeroH1>
          <HeroP>Front-end Web Developer</HeroP>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero
