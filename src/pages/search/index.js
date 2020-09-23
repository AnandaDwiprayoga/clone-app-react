import React from 'react'
import "./style.css";

import { Button } from "./../../material-icons";
import { SearchResult } from "./../../components";
import { searchResult } from "./../../data";

function Search() {
    return (
        <div className="searchPage">
            <div className="searchPage__info">
                <p>62 stays · 26 august to 30 august · 2 guest</p>
                <h1>Stays nearby</h1>
                <Button variant="outlined">Cancellation Flexibility</Button>
                <Button variant="outlined">Type of place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms and beds</Button>
                <Button variant="outlined">More filters</Button>
            </div>
            {searchResult.map(value => 
                <SearchResult 
                    img={value.img} 
                    location={value.location} 
                    title={value.title} 
                    description={value.description} 
                    star={value.star} 
                    price={value.price} 
                    total={value.total} 
                    key={Math.random() * 1000}
                /> 
            )}
        </div>
    )
}

export default Search
