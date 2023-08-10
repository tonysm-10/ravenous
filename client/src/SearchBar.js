import React, { useState } from 'react';
import './searchBar.css';
import restaurantapp from './restaurantapp.jpeg'
const SearchBar = () => {
    const [inputSearchBusiness, setInputSearchBusiness] = useState('');
    const [inputWhere, setInputWhere] = useState('');
    const [select, setSelect] = useState('');
    const [feedback, setFeedback] = useState(''); 
    
    const backgroundImageStyle = {
        backgroundImage: `url(${restaurantapp})`,
        backgroundSize: 'cover', // Adjusts the background image size
        backgroundPosition: 'center', // Adjusts the background image position
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
    
    const handleSubmit = () => {
        if (inputSearchBusiness !== '' && inputWhere !== '' && select !== '') {
            setFeedback(`Searching Yelp with ${inputSearchBusiness},\n${inputWhere},\n${select}...`);
        } else {
            setFeedback('Select Your choices!');
        }
    }
    
    
    return (
        <div className='searchBar-page' style={backgroundImageStyle}>
            <div className="list">
                <p onClick={handleClick} data-value='Best Match' className={select === 'Best Match' ? `item selected` : 'item'}>Best Match</p>
                <p onClick={handleClick} data-value='Highest Paid' className={select === 'Highest Paid' ? `item selected` : 'item'}>Highest Paid</p>
                <p onClick={handleClick} data-value='Most Reviewed' className={select === 'Most Reviewed' ? `item selected` : 'item'}>Most Reviewed</p>
            </div>
            
            <div className='inputs'>
                <input onChange={handleChangeSearchBusiness} value={inputSearchBusiness} placeholder='Search Businesses' />
                <input onChange={handleChangeWhere} value={inputWhere} placeholder='Where?' />
            </div>
            
            <button onClick={() => { handleSubmit(); }}>Let's Go!</button>
            <div id="render" className="feedback">
                {feedback && <h2>{feedback}</h2>}
            </div> 
        </div>
    );
}

export default SearchBar;
