import React from 'react';
import Business from './Business';

const BusinessList = ({ businesses }) => {
    const businessItems = businesses.map((business, index) => (
        <Business
            key={index}
            image={business.image_url}
            name={business.name}
            address={business.location.address1} 
            city={business.location.city} 
            state={business.location.state} 
            zipCode={business.location.zip_code}
            rating={business.rating}
            reviewCount={business.review_count} 
            url={business.url}
            latitude={business.coordinates.latitude}
            longitude={business.coordinates.longitude}
        />
    ));

    return (
        <div className='page'>
            <div className='flex-container'>
                {businessItems}
            </div>
        </div>
    );
};

export default BusinessList;


