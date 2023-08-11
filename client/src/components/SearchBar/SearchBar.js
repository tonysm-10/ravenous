import React, { useState } from 'react';
import './searchBar.css';
// import restaurantapp from '../../assets/restaurantapp.jpeg'
import texturebg from '../../assets/texturebg.png'
import searchBusinesses from '../../utils/YelpApi';
import BusinessList from '../BusinessList/BusinessList'; // Import your BusinessList component

const SearchBar = () => {
    const [inputSearchBusiness, setInputSearchBusiness] = useState('');
    const [inputWhere, setInputWhere] = useState('');
    const [select, setSelect] = useState('');
    const [feedback, setFeedback] = useState('');
    const [businesses, setBusinesses] = useState([]); // State to hold fetched businesses
    
    const backgroundImageStyle = {
        backgroundImage: `url(${texturebg})`,
        // backgroundSize: 'cover', // Adjusts the background image size
        backgroundPosition: 'center', 
        
    };
    
    const handleChangeSearchBusiness = ({target}) => {
        setInputSearchBusiness(target.value);
    }

    const handleChangeWhere = ({target}) => {
        setInputWhere(target.value);
    }
        
    const handleClick = (e) => {
        const choice = e.currentTarget.getAttribute('data-value');
        setSelect(choice);
    };
    
    const handleSubmit = async () => {
        if (inputSearchBusiness !== '' && inputWhere !== '' && select !== '') {
            setFeedback(`Searching Yelp with ${inputSearchBusiness},\n${inputWhere},\n${select}...`);
    
            try {
                const results = await searchBusinesses(inputSearchBusiness, inputWhere, select);

                console.log('Fetched data:', results); // Log the fetched data
                setBusinesses(results);
            } catch (error) {
                console.error('Error fetching data:', error);
                setBusinesses([]);
            }
        } else {
            setFeedback('Select Your choices!');
        }
    }
    
    
    return (
        <div className='searchBar-page' style={backgroundImageStyle}>
            <div className="list">
                <p onClick={handleClick} data-value='best_match' className={select === 'best_match' ? `item selected` : 'item'}>Best Match</p>
                <p onClick={handleClick} data-value='rating' className={select === 'rating' ? `item selected` : 'item'}>Highest Paid</p>
                <p onClick={handleClick} data-value='review_count' className={select === 'review_count' ? `item selected` : 'item'}>Most Reviewed</p>
            </div>
            
            <div className='inputs'>
                <input onChange={handleChangeSearchBusiness} value={inputSearchBusiness} placeholder='Search Businesses' />
                <input onChange={handleChangeWhere} value={inputWhere} placeholder='Where?' />
            </div>
            
            <button onClick={() => { handleSubmit(); }}>Let's Go!</button>
            <div id="render" className="feedback">
                {feedback && <h2>{feedback}</h2>}
            </div> 
            {/* Pass the fetched businesses to BusinessList component */}
            <div className='bcgk'>
                <BusinessList businesses={businesses} />
            </div>
            
        </div>
    );
}

export default SearchBar;
