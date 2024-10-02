import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function Header() {
  return (
    <HeaderSection>
            {/* <li>StateHook</li> */}
            <Link to="/">StateHook</Link>
            <Link to="/card">card</Link>
            <Link to="/new">New</Link>
            
            <Link to="/form">Form</Link>
            <Link to="/formhook">Form Hook</Link>
            
        </HeaderSection>
  )
}

const HeaderSection = styled.header`
    display: flex;
    gap: 40px;
`
