import React, { useEffect, useState } from 'react';
import { db } from '../config/firebase';
import { ref, onValue, update } from "firebase/database";
import "../styles/raiseContainer1.css";
import { Button } from "@chakra-ui/react";
import Navbar from './navbar_page';
import DonationModal from './donationModal';
import blogImg1 from "../images/blogs/blog-1.jpg";
import blogImg2 from "../images/blogs/blog-2.jpg";
import blogImg3 from "../images/blogs/blog-3.jpg";
import blogImg4 from "../images/blogs/blog-4.webp";
import blogImg5 from "../images/blogs/blog-5.jpeg";

const RaiseContainer1 = () => {
    const [donations, setDonations] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedDonation, setSelectedDonation] = useState(null);

    useEffect(() => {
        const donationsRef = ref(db, 'raiseRequests/');
        onValue(donationsRef, (snapshot) => {
            const data = snapshot.val();
            const donationsList = [];
            for (let id in data) {
                donationsList.push({ id, ...data[id] });
            }
            setDonations(donationsList);
        });
    }, []);

    const handleDonate = (amount) => {
        if (selectedDonation) {
            const donationRef = ref(db, `raiseRequests/${selectedDonation.id}`);
            const newAmount = parseFloat(selectedDonation.amount) + parseFloat(amount); // Ensure proper type conversion
            const newTotalDonated = parseFloat(selectedDonation.totalDonated || 0) + parseFloat(amount);
    
            console.log("Updating donation with values:", { newAmount, newTotalDonated });
    
            update(donationRef, { 
                totalDonated: newTotalDonated 
            })
                .then(() => {
                    console.log("Donation updated successfully!");
                    // Update local state
                    setDonations((prevDonations) => 
                        prevDonations.map((donation) =>
                            donation.id === selectedDonation.id 
                                ? { ...donation,  totalDonated: newTotalDonated } 
                                : donation
                        )
                    );
                })
                .catch((error) => {
                    console.error("Error updating donation: ", error);
                });
        } else {
            console.error("No donation selected!");
        }
    };
    
    const donateImages = [blogImg1,blogImg2,blogImg3,blogImg4,blogImg5,blogImg4,blogImg2,blogImg3,blogImg1,,blogImg5,blogImg4,blogImg2,blogImg3,blogImg1]
    

    const openModal = (donation) => {
        setSelectedDonation(donation);
        setIsModalOpen(true);
    };

    return (
        <>
        <Navbar/>
        <div className='container-raise'>
            <h2 className='raise-h2'>Donations</h2>
            <ul className='raise-ul'>
                {donations.map((donation, index) => (
                    <li className="raise-li" key={donation.id}>
                         <img 
                            src={donateImages[index % donateImages.length]} 
                            alt="donate images" 
                            style={{ width: '100%', height: 'auto' }} 
                        /><br />
                        <strong>Amount:</strong> ${donation.amount}<br />
                        <strong>Total Donated:</strong> ${donation.totalDonated}<br />
                        <strong>Reason:</strong> {donation.reason}<br />
                        <strong>Context:</strong> {donation.context}<br />
                        <strong>Created At:</strong> {new Date(donation.createdAt).toLocaleString()}<br />
                        <Button 
                            colorScheme='teal' 
                            marginTop="10px" 
                            onClick={() => openModal(donation)}
                        >
                            Donate Now 💰
                        </Button>
                    </li>
                ))}
            </ul>
            <DonationModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
                onDonate={handleDonate} 
            />
        </div>
        </>
    );
};

export default RaiseContainer1;