import React from 'react';
import './businessList.css';

const Business = ({ name, image, address, city, state, zipCode, rating, reviewCount, url, latitude, longitude }) => {
    const sendToWeb = () => {
        window.open(url, '_blank');
    }
    const handleDirectionsClick = () => {
        const mapsUri = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;

        window.open(mapsUri, '_blank'); // Open in new tab or window (iOS)

    };
    
    

    return (
        <div className='container'>
            <img onClick={sendToWeb} className='img' src={image} alt="img" />
            <div className='align'>
                <h2>{name}</h2>
                <p>{address}</p>
                <p>{city}, {state} {zipCode}</p>
                <p>Review Count: {reviewCount}</p>
                <p>Rating: {rating}</p>
            </div>
            <button onClick={handleDirectionsClick} className='btn'>Drive</button>
        </div>
    );
}

export default Business;
