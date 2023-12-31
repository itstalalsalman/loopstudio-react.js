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
            <NavBar></NavBar>
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
    gap: 15%;

    img{
        width: 150px;
        height: 20%;
        object-fit: contain;
    }
`;


const TextBox = styled.div`
    width: 100%;
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
        
        @media (max-width: 1200px){
            font-size: 3.5rem;
        }
    }

`


const NavBar = styled.div`
    width: 35%;
`