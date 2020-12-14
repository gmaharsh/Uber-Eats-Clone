import React from 'react';
import './Home.css';

function Home() {
    return (
        <div className="home">
            <div className="home__jumbotron">
                <div className="home__text">
                    <h1>Crave it? Get it.</h1>
                    <p>Search for a favorite restaurant, cuisine, or dish.</p>
                </div>
                <div className="home__offers">
                    <img 
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5Yb25m_4_86bze2UkoZkHnmoU3FCe6RUqwg&usqp=CAU"
                        alt="" 
                    />
                    <img 
                        src="https://cdn.zouton.com/images/originals/stores/UBEREATS1_1598503617.png"
                        alt=""
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
