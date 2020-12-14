import React from 'react';
import './Header.css';
import MenuIcon from "@material-ui/icons/Menu";
import LocationIcon from "@material-ui/icons/LocationOn";
import SearchIcon from "@material-ui/icons/Search";


function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <MenuIcon className="header__more" fontSize="large" />
                <img
                    className="header__logo"
                    src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/ee037401cb5d31b23cf780808ee4ec1f.svg"
                    alt=""
                />
            </div>
            <div className="header__right">
                <div className="header__serviceType">
                    <select>
                        <option selected value="delivery">Delivery</option>
                        <option value="pickup">Pickup</option>
                        <option value="dine-in">Dine-in</option>
                    </select>
                </div>
                <div className="header__address">
                    <LocationIcon fontSize="small" />
                    <h4>2801 S King Drive • Now</h4>
                </div>
                <div className="header__search">
                    <SearchIcon className="header__foodSearch"/>
                    <input type="text" placeholder="What are you craving for?" />
                </div>
            </div>
        </div>
    )
}

export default Header
