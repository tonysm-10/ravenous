import React from 'react';
import './businessList.css';

const Business = ({ name, image, address, city, state, zipCode, rating, reviewCount, url }) => {
    const sendToWeb = () => {
        window.open(url, '_blank');
    }

    return (
        <div onClick={sendToWeb} className='container'>
            <img className='img' src={image} alt="img" />
            <h2>{name}</h2>
            <p>{address}</p>
            <p>{city}, {state} {zipCode}</p>
            <p>Rating: {rating}</p>
            <p>Review Count: {reviewCount}</p>
        </div>
    );
}

export default Business;


// import './businessList.css'

// const Business = ({ name, image, address, city, state, zipCode, rating, reviewCount }) => {
//     return (

//             <div className='container'>
//             <img src={image} alt="img" />
//             <h2>{name}</h2>
//             <p>{address}</p>
//             <p>{city}, {state} {zipCode}</p>
//             <p>Rating: {rating}</p>
//             <p>Review Count: {reviewCount}</p>
//             </div>
        
    
//     );
// }

// export default Business;
