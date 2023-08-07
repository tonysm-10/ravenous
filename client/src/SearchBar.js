import { useState } from 'react';
import './searchBar.css';

const SearchBar = () => {
    const [input, setInput] = useState('');

    const handleClick = (e) => {
        const select = e.currentTarget.getAttribute('data-value');
        setInput((prevInput) => select); // Using a callback function
    };
    console.log(input);

    return (
        <div className='searchBar-page'>
            <div className="list">
                <p onClick={handleClick} data-value='Best Match' className='item'>Best Match</p>
                <p onClick={handleClick} data-value='Highest Paid' className='item'>Highest Paid</p>
                <p onClick={handleClick} data-value='Most Reviewed' className='item'>Most Reviewed</p>
            </div>
            
            <div className='inputs'>
                <input placeholder='Search Businesses' />
                <input placeholder='Where?' />
            </div>
            
            <button>Let's Go!</button>
        </div>
    );
}

export default SearchBar;

