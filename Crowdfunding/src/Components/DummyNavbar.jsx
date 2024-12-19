import { useState } from 'react';
import { Link } from 'react-router-dom'; 
import '../styles/navbar.css';
import imglogo from "../images/Updated-Logo/CROP_Updated_Logo_W-removebg-preview.png";
import { useDisclosure } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { Modal, ModalOverlay, Button, Text, ModalContent,  ModalHeader, ModalFooter, ModalBody, ModalCloseButton, } from '@chakra-ui/react'

const DummyNavbar = () => {
  const [isOpened, setIsOpen] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure()
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar-wrapper">
      <nav className="navbar">
        <Link to="/" className="logo-link">
          <img src={imglogo} className="navlogo" alt="Logo" />
        </Link>
        
        <div className={`nav-links ${isOpened ? 'open' : ''}`}>
          <Link to="/">Home</Link>
          <Link to="/">About</Link>
          <Link to="/">Blog</Link>
          <Link to="/">Pages</Link>
          <Link to="/">Contact</Link>
          <Button onClick={onOpen} className="make-a-donate">Make a Donate</Button>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Sorry!<img src={imglogo} alt="logo"/></ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text fontSize="17px">To donate 💵 You need to login first.</Text>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button onClick={()=>navigate('/login')} colorScheme='teal'>Login</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>

        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? '✖' : '☰'}
        </div>
      </nav>
    </div>
  );
};

export default DummyNavbar;
