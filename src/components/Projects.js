import React from 'react'
import styled, {keyframes} from 'styled-components'

import {Button} from '../components/Button'
import { IoMdCheckmarkCircleOutline } from "react-icons/io"
import { FaRegLightbulb } from "react-icons/fa"


import {projectData} from '../data/ProjectsData'

const Projects = ({ heading }) => {
  return (
    <TestimonialsContainer>
      <TopLine>{heading}</TopLine>
      <Description>Lorem Ipsum</Description>
      <ContentWrapper>
        <ContentItem>
          {projectData.map((item, key) => (
            <Images key={key} src={item.img} />
          ))}
        </ContentItem>
      </ContentWrapper>
    </TestimonialsContainer>
   )
}

export default Projects

const TestimonialsContainer = styled.div`
  width: 100%;
  height: 100%;
  background: transparent;
  color: #fff;
  padding: 5rem calc((100vw - 1300px) / 2);
  margin-bottom: 4rem;
`
const TopLine = styled.p`
  color: #fff;
  font-size: 1rem;
  padding-left: 2rem;
  margin-bottom: 0.75rem;
  font-style: italic;
`
const Description = styled.p`
  text-align: start;
  padding-left: 2rem;
  /* margin-bottom: 4rem; */
  font-size: clamp(1.5rem, 5vw, 2rem);
  font-weight: bold;
`
const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
const ContentItem = styled.div`
  display: flex;
  grid-template-columns: 1fr 1fr;
  margin-top: 2rem;
  grid-gap: 10px;

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`

const Images = styled.img`
  border-radius: 10px;
  height: 500px;
  width: 300px;
  filter: brightness(70%);
  transition: 0.4s cubic-bezier(0.075, 0.02, 0.165, 1);

  &:hover {
    filter: brightness(100%);
  }
`