import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useDisclosure } from '@chakra-ui/react';
import DummyNavbar from "./DummyNavbar";
import Footer from "./footer";
import News from "./news";
import React from 'react';
import imglogo from "../images/Updated-Logo/CROP_Updated_Logo_W-removebg-preview.png";
import content1img1 from "../images/content1img1.webp";
import content1img2 from "../images/content1img2.webp";
import content1img3 from "../images/content1img3.webp";
import content1 from "../images/content2.webp";
import content3 from "../images/content3.webp";

const MemoizedDummyNavbar = React.memo(DummyNavbar);
const MemoizedFooter = React.memo(Footer);
const MemoizedNews = React.memo(News);

const DummyHome = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate('/login');
  };

  return (
    <>
      <div>
        <MemoizedDummyNavbar />
        
        <div className="slider">
          <div className="slider-content">
            <h3>Get Started Today</h3>
            <h1>Help the children When they need</h1>
            <p>
              With so much to consume and such little time, coming up <br />
              with relevant title ideas is essential
            </p>
            <Button>Learn More</Button>
          </div>
        </div>

        <section className="content-1">
          <h1 className="content-1-h1">Reason of Helping</h1>
          <div className="content-1-part">
            <div>
              <img src={content1img1} alt="Collecting Fund" />
              <div className="img1-content">
                <h1>Collecting Fund</h1>
                <p>Be part of the journey as we bring hope and change to lives in need.</p>
                <p>Read More...</p>
              </div>
            </div>
            <div>
              <img src={content1img2} alt="Blood camp" />
              <div className="img1-content">
                <h1>Blood camp</h1>
                <p>By donating, you’re becoming a beacon of hope for those who need it most.</p>
                <p>Read More...</p>
              </div>
            </div>
            <div>
              <img src={content1img3} alt="Friendly Volunteer" />
              <div className="img1-content">
                <h1>Friendly Volunter</h1>
                <p>Our friendly volunteers are the heart and soul of our mission.</p>
                <p>Read More...</p>
              </div>
            </div>
          </div>
        </section>

        <section className="content-2">
          <div className="left-content2">
            <img src={content1} alt="img" />
          </div>
          <div className="right-content2">
            <h1 className="content-1-h2">Watch Our Latest Activities</h1>
            <p>
              Discover the impact your contributions are making by exploring our latest activities.
              From community outreach programs to life-changing initiatives, we’re committed to
              transparency and progress. At our crowdfunding platform, every action is a step closer
              to creating a better tomorrow. Together, we can turn dreams into reality—let’s make a difference!
            </p>
            <p>
              Be part of the journey as we bring hope and change to lives in need. Explore our latest
              activities and see the difference your support is creating. From empowering communities to
              uplifting individuals, your contributions fuel impactful projects that matter.
            </p>
            <Button onClick={onOpen} className="make-a-donate">
              Make a Donation
            </Button>
            
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>
                  Sorry! <img src={imglogo} alt="Logo" />
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Text fontSize="17px">To donate 💵, you need to login first.</Text>
                </ModalBody>
                <ModalFooter>
                  <Button colorScheme='blue' mr={3} onClick={onClose}>
                    Close
                  </Button>
                  <Button onClick={handleLoginRedirect} colorScheme='teal'>
                    Login
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </div>
        </section>

        <section className="content-3">
          <img src={content3} alt="img" />
        </section>
      </div>

      <MemoizedNews />
      <MemoizedFooter />
    </>
  );
};

export default DummyHome;
