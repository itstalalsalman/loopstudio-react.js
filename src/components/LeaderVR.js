import React, {useState} from "react";
import styled from "styled-components";

function LeaderVR(){
    const [imgSrc, setImgSrc] = useState("/images/desktop/image-interactive.jpg");

    const handleScreenSizeChange = () => {
        const newImgSrc = window.innerWidth <= 775 ? "/images/mobile/image-interactive.jpg" : "/images/desktop/image-interactive.jpg";
        setImgSrc(newImgSrc);
    };

    React.useEffect(() => {
        window.addEventListener("resize", handleScreenSizeChange);
        return () => {
        window.removeEventListener("resize", handleScreenSizeChange);
        };
    }, []);

    return (
        <VRContainer>
            <Holding>
                <VRImg><img src={imgSrc} alt=""/></VRImg>
                <VRText>
                    <div>
                        <h2>THE LEADER IN INTERACTIVE VR</h2>
                        <p>
                            Founded in 2011, loopstudio has been producing world-class virtual reality projects for some 
                            of the best companies around the globe. Our award-winning creations have transformed businesses 
                            through digital experiences that bind to their brand.  
                        </p>
                    </div>
                </VRText>
            </Holding>
        </VRContainer>
    )
}

export default LeaderVR


const VRContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10vh 0;
    
    @media (max-width: 1024px) {
        margin-top: -10vh;
    }
    @media (max-width: 775px) {
        margin: 0;
        height: 130vh;
    }
    @media (max-width: 700px) {
        margin-top: -20px;
    }
    @media (max-width: 550px) {
        height: 100vh;
    }
`


const Holding = styled.div`
    width: 80%;
    height: 80%;
    position: relative;

    @media (max-width: 775px) {
        display: flex;
        flex-direction: column;
    }

    
    
`

const VRImg = styled.div`
    width: 70%;
    height: 100%;

    img{
        width: 100%;
        height: 100%;
        object-fit: contain;

    }
    @media (max-width: 775px) {
        width: 100%;
    }
    @media (max-width: 550px) {
        height: 40%;
    }
`;

const VRText = styled.div`
    width: 50%;
    height: 65%;
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;

    div{
        width: 80%;
        height: 75%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;

        h2{
            font-size: 3.5vw;
            font-family: 'Josefin Sans', sans-serif;
            font-weight: 300;
            margin-top: 30px;
            @media (max-width: 775px) {
                font-size: 2.5rem;
                text-align: center;
            }
            
            @media (max-width: 500px) {
                font-size: 2.2rem;
                margin-top: 5vh;
            }
        }

        p{
            font-size: 15px;
            font-family: 'Alata', sans-serif;
            font-weight: 400;
            color: gray;
            margin-top: 0;

            @media (max-width: 950px) {
                font-size: 12px;
            }

            @media (max-width: 775px) {
                font-size: 13px;
                text-align: center;
            }

        }

        @media (max-width: 775px) {
            width: 100%;
            height: 100%;
        }
    }
    @media (max-width: 775px) {
        width: 100%;
        height: 35%;
        position: relative;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        margin-top: 5vh;
    }
`