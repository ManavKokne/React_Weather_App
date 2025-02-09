import React from 'react'

const SearchSection = ({getWeatherDetails, searchInputRef}) => {

    const API_KEY = import.meta.env.VITE_API_KEY;

    const handleCitySearch = (e) => {
        e.preventDefault();
        const searchInput = e.target.querySelector(".search-input");
        const API_URL = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${searchInput.value}&days=2`;
        getWeatherDetails(API_URL);
        console.log(searchInput.value);
    }

    const handleLocationSearch = () => {
      navigator.geolocation.getCurrentPosition(
        position => {
          const {latitude, longitude} = position.coords;
          const API_URL = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${latitude},${longitude}&days=2`;
          getWeatherDetails(API_URL);
          window.innerWidth >= 768 && searchInputRef.current.focus();
          console.log(position);
        },
        () => {
          alert("Location Access Denied !");
        }
      )
    }

  return (
    <div className="search-section">
      <form action="#" className="search-form" onSubmit={handleCitySearch}>
        <span className="material-symbols-rounded">search</span>
        <input type="search" placeholder="Enter a City Name"  ref ={searchInputRef} className="search-input" required />
      </form>
      <button className="location-button" onClick={handleLocationSearch}>
      <span className="material-symbols-rounded"><img src="public/vite.svg" alt="" /></span>
      </button>
    </div>
  )
}

export default SearchSection
