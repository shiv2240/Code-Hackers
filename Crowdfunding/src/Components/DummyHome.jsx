import { Button} from "@chakra-ui/react"
import { useState } from "react"
import DummyNavbar from "./DummyNavbar"
import "../styles/home.css"
import content1img1 from "../images/content1img1.png"
import content1img2 from "../images/content1img2.png"
import content1img3 from "../images/content1img3.png"
import content1 from "../images/content2.png"
import content3 from "../images/content3.png"
import Footer from "./footer"
import VolunteerPage from "./volunteer"
const DummyHome = ()=>{

    const [isVideoVisible, setVideoVisible] = useState(false);
    const videoId = "Oflbho9ZG2U"; 
    const [player, setPlayer] = useState(null);

    const handleVideoClick = () => {
        setVideoVisible(true);
    };

    const onReady = (event) => {
        setPlayer(event.target);
        event.target.playVideo(); 
    };

    const options = {
        height: '390',
        width: '640',
        playerVars: {
            autoplay: 1, 
        },
    };
    return(
        <>
        <div>
            <DummyNavbar/>
            <div className="slider">
                <div className="slider-content">
                    <h3>Get Started Today</h3>
                    <h1>Help the children When they need</h1>
                    <p>With so much to consume and such little time, coming up <br/>
                    with relevant title ideas is essential</p>
                    <Button>Learn More</Button>
                </div>
            </div>
            <div className="content-1">
                <h1 className="content-1-h1">Reason of Helping</h1>
                <div className="content-1-part">
                    <div>
                        <img src={content1img1}/>
                        <div className="img1-content">
                            <h1>Collecting Fund</h1>
                            <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print.</p>
                            <p>Read More...</p>
                        </div>
                    </div>
                    <div>
                        <img src={content1img2}/>
                        <div className="img1-content">
                            <h1>Blood camp</h1>
                            <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print.</p>
                            <p>Read More...</p>
                        </div>
                    </div>
                    <div>
                        <img src={content1img3}/>
                        <div className="img1-content">
                            <h1>Friendly Volunter</h1>
                            <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print.</p>
                            <p>Read More...</p>
                        </div>
                    </div>
                </div>
                
            </div>

            <div className="content-2">
                <div className="left-content2">
                    <img src={content1} alt="img"/>
                    <div onClick={handleVideoClick} className="play-icon" ><i className="fa-solid fa-circle-play" style={{color:"teal"}}></i></div>
                    {isVideoVisible && (
                        <div className="video-Container">
                            <YouTube
                                videoId={videoId} 
                                opts={options} 
                                onReady={onReady} 
                            />
                        </div>
                        
                    )}
                </div>
                <div className="right-content2">
                    <h1 className="content-1-h2">Watch Our Latest Activities</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do<br/> eiusmod tempor incididunt ut labore dolore magna aliqua. enim<br/> minim veniam, quis nostrud exercitation.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do<br/> eiusmod tempor incididunt ut labore dolore magna aliqua. enim<br/> minim veniam, quis nostrud exercitation. tempor incididunt ut<br/> labore dolore magna aliqua. enim minim veniam, quis nostrud<br/> exercitation.</p>
                    <Button p="23px">Donate Now</Button>
                </div>
            </div>
            <div className="content-3">
                <img src={content3} alt="img" />
            </div>
        </div>
        <VolunteerPage/>
        <Footer/>
        </>
    )
}
export default DummyHome