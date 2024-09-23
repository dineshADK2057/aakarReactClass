import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
// import './Card.css'

const Card = ({ title, image }) => {
  return (
    <>
    
    <ImgCard>
      <img src={image} alt="image" width="100%" />
      <div className='info'>
        <h4>{title}</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat molestias odit fugiat non quis nam nobis iste explicabo soluta hic, quibusdam labore, adipisci magni. Exercitationem, est! Corrupti maiores modi quidem.</p>
        <button>Read More</button>
      </div>
    </ImgCard>
    </>
    
  )
}

export default Card

Card.propTypes = {
  title: PropTypes.string.isRequired
}



Card.defaultProps = {
  title: "this is default title"
}


export const ImgCard = styled.div`
  width: 350px;
    display: flex;
    flex-direction: column;
    flex: 1;

    .info{
      padding: 20px;
    border: 1px solid black;
    }
    
`




