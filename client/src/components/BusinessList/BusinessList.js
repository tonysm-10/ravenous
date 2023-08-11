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



// import React from 'react';
// import Business from './Business';
// import pizzaRestaurant from '../../assets/imgrestaurant.jpeg'
// const businessList = [
//     {
//         image: pizzaRestaurant,
//         name: 'MarginOtto Pizzeria',
//         address: '1010 Paddington Way',
//         city: 'Bordertown',
//         state: 'NY',
//         zipCode: 10101,
//         rating: 4.5,
//         'review count': 90
//     },
//     {
//         image: pizzaRestaurant,
//         name: 'MarginOtto Pizzeria',
//         address: '1010 Paddington Way',
//         city: 'Bordertown',
//         state: 'NY',
//         zipCode: 10101,
//         rating: 4.5,
//         'review count': 90
//     },
//     {
//         image: pizzaRestaurant,
//         name: 'MarginOtto Pizzeria',
//         address: '1010 Paddington Way',
//         city: 'Bordertown',
//         state: 'NY',
//         zipCode: 10101,
//         rating: 4.5,
//         'review count': 90
//     },
//     {
//         image: pizzaRestaurant,
//         name: 'MarginOtto Pizzeria',
//         address: '1010 Paddington Way',
//         city: 'BorderTown',
//         state: 'NY',
//         zipCode: 10101,
//         rating: 4.5,
//         'review count': 90
//     },
//     {
//         image: pizzaRestaurant,
//         name: 'MarginOtto Pizzeria',
//         address: '1010 Paddington Way',
//         city: 'BorderTown',
//         state: 'NY',
//         zipCode: 10101,
//         rating: 4.5,
//         'review count': 90
//     },
//     {
//         image: pizzaRestaurant,
//         name: 'MarginOtto Pizzeria',
//         address: '1010 Paddington Way',
//         city: 'BorderTown',
//         state: 'NY',
//         zipCode: 10101,
//         rating: 4.5,
//         'review count': 90
//     }

// ];

// const BusinessList = () => {
//     const businesses = businessList.map((business, index) => (
//         <Business
//             key={index}
//             image={business.image}
//             name={business.name}
//             address={business.address}
//             city={business.city}
//             state={business.state}
//             zipCode={business.zipCode}
//             rating={business.rating}
//             reviewCount={business['review count']}
//         />
//     ));

//     return (
//         <div className='page'>
//             <div className='flex-container'>
//                 {businesses}
//             </div>
//         </div>
//     );
// };

// export default BusinessList;
