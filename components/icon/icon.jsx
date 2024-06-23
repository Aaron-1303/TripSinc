"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import {
    FaTree, FaUtensils, FaMoon, FaCocktail, FaLandmark, FaSpa, FaShoppingBag, FaTheaterMasks, FaFutbol, FaCamera, FaRunning, FaGuitar, FaPaintBrush, FaYinYang, FaBed, FaSeedling
} from 'react-icons/fa';

import './icon.css';

import Swal from 'sweetalert2';

export default function Icon() {
    const [selectedIcons, setSelectedIcons] = useState([]);

    const icons = [
        { id: 'nature', icon: <FaTree />, label: 'Nature' },
        { id: 'food', icon: <FaUtensils />, label: 'Food' },
        { id: 'nightlife', icon: <FaMoon />, label: 'Late Night Walks' },
        { id: 'drinks', icon: <FaCocktail />, label: 'Party' },
        { id: 'culture', icon: <FaLandmark />, label: 'Culture' },
        { id: 'relaxation', icon: <FaSpa />, label: 'Relaxation' },
        { id: 'shopping', icon: <FaShoppingBag />, label: 'Shopping' },
        { id: 'theater', icon: <FaTheaterMasks />, label: 'Theater' },
        { id: 'sports', icon: <FaFutbol />, label: 'Sports' },
        { id: 'photography', icon: <FaCamera />, label: 'Photography' },
        { id: 'outdoor', icon: <FaRunning />, label: 'Being Active' },
        { id: 'music', icon: <FaGuitar />, label: 'Music' },
        { id: 'art', icon: <FaPaintBrush />, label: 'Art' },
        { id: 'spiritual', icon: <FaYinYang />, label: 'Spiritual' },
        { id: 'sleeping', icon: <FaBed />, label: 'Sleeping In' },
        { id: 'green', icon: <FaSeedling />, label: 'Agriculture' },
    ];

    const handleIconClick = (id) => {
        if (selectedIcons.includes(id)) {
            setSelectedIcons(selectedIcons.filter(icon => icon !== id));
        } else {
            setSelectedIcons([...selectedIcons, id]);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (selectedIcons.length === 0) {
            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'Please select at least one icon',

            });
        }
        else if (selectedIcons.length > 4) {
            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'Please select at most 4 icons, Which ones fit you best?',

            });
        }
        else {
            Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: 'Your preferences have been saved successfully.',
            });
            console.log('Selected Interests: ', selectedIcons);
        }

    }

    return (<>
        <div className="icon">
            
            <h2 className="header">Select Your Travel Interests (Maximum 4) </h2>
            <div className="icon-container">
                {icons.map(({ id, icon, label }) => (
                    <div key={id} className={`icon-item ${selectedIcons.includes(id) ? 'selected' : ''}`} onClick={() => handleIconClick(id)}>
                        {icon}
                        <p className="icon-label">{label}</p>
                    </div>
                ))}
            </div>
            <p className="icon-info">Hey, tell us about yourself. Which of these do you love doing when you travel? (Select up to 4)</p>
            <button type="submit" onClick={handleSubmit}>Submit</button>
            <Link href="/tourist"> <button className='ml-10'>Let's Plan</button></Link>
           
        </div>
        
        </>
    );
};