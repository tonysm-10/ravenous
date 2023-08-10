import React from 'react';
import Business from './Business';
import pizzaRestaurant from '../../assets/imgrestaurant.jpeg'
const businessList = [
    {
        image: pizzaRestaurant,
        name: 'MarginOtto Pizzeria',
        address: '1010 Paddington Way',
        city: 'Bordertown',
        state: 'NY',
        zipCode: 10101,
        rating: 4.5,
        'review count': 90
    },
    {
        image: pizzaRestaurant,
        name: 'MarginOtto Pizzeria',
        address: '1010 Paddington Way',
        city: 'Bordertown',
        state: 'NY',
        zipCode: 10101,
        rating: 4.5,
        'review count': 90
    },
    {
        image: pizzaRestaurant,
        name: 'MarginOtto Pizzeria',
        address: '1010 Paddington Way',
        city: 'Bordertown',
        state: 'NY',
        zipCode: 10101,
        rating: 4.5,
        'review count': 90
    },
    {
        image: pizzaRestaurant,
        name: 'MarginOtto Pizzeria',
        address: '1010 Paddington Way',
        city: 'BorderTown',
        state: 'NY',
        zipCode: 10101,
        rating: 4.5,
        'review count': 90
    },
    {
        image: pizzaRestaurant,
        name: 'MarginOtto Pizzeria',
        address: '1010 Paddington Way',
        city: 'BorderTown',
        state: 'NY',
        zipCode: 10101,
        rating: 4.5,
        'review count': 90
    },
    {
        image: pizzaRestaurant,
        name: 'MarginOtto Pizzeria',
        address: '1010 Paddington Way',
        city: 'BorderTown',
        state: 'NY',
        zipCode: 10101,
        rating: 4.5,
        'review count': 90
    }

];

const BusinessList = () => {
    const businesses = businessList.map((business, index) => (
        <Business
            key={index}
            image={business.image}
            name={business.name}
            address={business.address}
            city={business.city}
            state={business.state}
            zipCode={business.zipCode}
            rating={business.rating}
            reviewCount={business['review count']}
        />
    ));

    return (
        <div className='page'>
            <div className='flex-container'>
                {businesses}
            </div>
        </div>
    );
};

export default BusinessList;
