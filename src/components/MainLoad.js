import React from "react";
import styled, {keyframes} from "styled-components";
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

    
    @media (max-width: 775px) {
        background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url("/images/mobile/image-hero.jpg");
    }
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

const opacityInc = keyframes`
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
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
        opacity: 0;
        animation: ${opacityInc} 4s forwards;
        
        
        @media (max-width: 775px){
            font-size: 4.0rem;
        }
        
        @media (max-width: 550px) {
            font-size: 2.65rem;
        }

        @media (max-width: 390px) {
            font-size: 2.5rem;
        }
        
    }

    @media (max-width: 775px) {
        width: 100%;
        height: 50%;
    }
    @media (max-width: 500px) {
        height: 35%;    
    }

    
`

const slideFromTop = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-100px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

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

        li{
            position: relative;
            line-height: 50px;
            cursor: pointer;
            animation: ${slideFromTop} 0.8s ease-in-out forwards;
        }

        li::after{
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0;
            height: 2px;
            background-color: white;
            transition: width 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        li:hover::after {
            width: 100%;
        }
    }

    @media (max-width: 775px){
        display: none;
    }
`