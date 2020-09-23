import React from 'react';
import './style.css';

// import components
import { Banner,Card } from "./../../components";
// import data
import { placeWithPrice, placeWithoutPrice } from "./../../data";

function Home() {
    console.log(placeWithoutPrice);
    return (
        <div> 
            <Banner />

            <div className="home__section">
                {placeWithoutPrice.map(value => 
                    <Card 
                        src={value.src}
                        title={value.title}
                        desc={value.description}
                        key={value.id}
                        />
                )}
            </div>

            <div className="home__section">
               {placeWithPrice.map(value => 
                    <Card 
                        src={value.src}
                        title={value.title}
                        price={value.price}
                        desc={value.description}
                        key={value.id}
                        />
                )}
            </div>
        </div>
    )
}

export default Home;
