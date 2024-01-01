import React from "react";
import styled from "styled-components";

function OurCreations(){
    const gridInfo = [
        { id: 1, imgSrc: 'deep-earth', heading: 'DEEP EARTH' },
        { id: 2, imgSrc: 'night-arcade', heading: 'NIGHT ARCADE' },
        { id: 3, imgSrc: 'soccer-team', heading: 'SOCCER TEAM VR' },
        { id: 4, imgSrc: 'grid', heading: 'THE GRID' },
        { id: 5, imgSrc: 'from-above', heading: 'FROM UP ABOVE VR' },
        { id: 6, imgSrc: 'pocket-borealis', heading: 'POCKET BOREALIS' },
        { id: 7, imgSrc: 'curiosity', heading: 'THE CURIOSITY' },
        { id: 8, imgSrc: 'fisheye', heading: 'MAKE IT FISHEYE' }
    ]
    return(
        <CreationContainer>
            <CreationHeader>
                <h1>OUR CREATIONS</h1>
                <BtnSeeAll>See All</BtnSeeAll>
            </CreationHeader>
            <Grid>
                {gridInfo.map(item => (
                    <GridItem key={item.id}>
                        <h3>{item.heading}</h3>
                        <img src={`/images/desktop/image-${item.imgSrc}.jpg`} alt={`Item ${item.id}`} />
                    </GridItem>
                ))}
            </Grid>
        </CreationContainer>
    )
}

export default OurCreations


const CreationContainer = styled.div`
    width: 100%;
    height: 170vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`

const CreationHeader = styled.div`
    width: 80%;
    height: 15%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    h1{
        font-family: 'Josefin Sans', sans-serif;
        font-weight: 300;
        font-size: 3rem;
    }

    @media (max-width: 600px) {
        justify-content: center;
    }
`


const BtnSeeAll = styled.button`
    width: 150px;
    height: 40px;
    font-size: 1rem;
    background-color: white;
    color: black;
    border: 2px solid black;
    text-transform: uppercase;
    letter-spacing: 3px;
    cursor: pointer;
    transition: color 0.3s ease, background-color 0.3s ease;

    &:hover{
        color: white;
        background-color: black;
    }

    @media (max-width: 600px) {
       display: none;
    }

`


const Grid = styled.div`
    width: 80%;
    height: 80%;
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* Initially, 4 items per row */
    gap: 20px; /* Adjust the gap between items */
    transition: all 0.3s ease; /* Add smooth transition effect */


    @media (max-width: 1300px) {
        grid-template-columns: repeat(3, 1fr); /* When screen size is smaller, 3 items per row */
    }

    @media (max-width: 900px) {
        grid-template-columns: repeat(2, 1fr); /* When screen size is even smaller, 2 items per row */
    }

    @media (max-width: 600px) {
        grid-template-columns: 1fr; /* On smaller screens, 1 item per row */
    }
`

const GridItem = styled.div`
    width: 250px;
    height: 400px;
    transition: transform 0.3s ease; /* Add transition for the sliding effect */
    position: relative;
    overflow: hidden;
    gap: 10px;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    h3{
        position: absolute;
        color: white;
        font-family: 'Josefin Sans', sans-serif;
        font-weight: 300;
        font-size: 2rem;
        bottom: 0;
        left: 10%;
        z-index: 1; /* Ensure text is above the overlay */
        
    }

    &:nth-child(1){
        h3{
            width: 60%;
        }
    }

    &:nth-child(3){
        h3{
            width: 60%;
        }
    }

    &:nth-child(4){
        h3{
            width: 40%;
        }
    }
    
   
`;
