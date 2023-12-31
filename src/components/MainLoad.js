import React from "react";
import styled from "styled-components";
//font-family: 'Alata', sans-serif;
//font-family: 'Josefin Sans', sans-serif;

function MainLoad(){
    return (
        <Container>
            <LogoAndText>
                <img src="/images/logo.svg" alt="" className=""/>
                <TextBox>
                    <h1>IMMERSIVE EXPERIENCES THAT DELIVER</h1>
                </TextBox>
            </LogoAndText>
            <NavBar>
                <ul>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Events</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Support</a></li>
                </ul>
            </NavBar>
        </Container>
    );
}

export default MainLoad;


const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("/images/desktop/image-hero.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: relative;
    display: flex;
    justify-content: center;
`    



const LogoAndText = styled.div`
    width: 45%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 18%;

    img{
        width: 150px;
        height: 20%;
        object-fit: contain;
    }

    @media (max-width: 775px){
        width: 80%;
    }
`;


const TextBox = styled.div`
    width: 665px;
    height: 40%;
    border: 2px solid white;
    color: white;
    display: flex;

    h1{
        width: 100%;
        height: 100%;
        font-family: 'Josefin Sans', sans-serif;
        font-weight: 300;
        font-size: 4.5rem;
        margin-top: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 5%;
        
        @media (max-width: 775px){
            font-size: 4.2rem;
        } 
        
    }

    @media (max-width: 775px) {
        width: 100%;
        height: 50%;
    }

    

`


const NavBar = styled.div`
    width: 35%;
    height: 20%;
    display: flex;
    

    ul{
        margin-top: 0;
        width: 100%;
        height: 100%;
        list-style: none;
        color: white;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 10%;
        margin-right: 5%;
        
        a{
            text-decoration: none;
            color: white;
            font-family: 'Alata', sans-serif;
            font-weight: 400;
            font-size: 15px;
        }
    }

    @media (max-width: 775px){
        display: none;
    }
`