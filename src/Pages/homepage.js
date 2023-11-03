import React from "react";
import './css/header.css';
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import backgroundImage from '../../src/assets/images/IMG_0632.HEIC';

function ImageBackground(props) {
    return null;
}

ImageBackground.propTypes = {
    style: PropTypes.shape({width: PropTypes.string, height: PropTypes.number}),
    source: PropTypes.any,
    children: PropTypes.node,
};

function HomePage() {
    const blockStyle = {
        border: '1px solid #ccc',
        padding: '20px',
        margin: '10px',
        backgroundColor: '#ffffff',
    };

    return (
        <div>
            <ImageBackground source={backgroundImage} style={{height: 185, width: '100%'}}>
                <header>
                    <nav>
                        <ul>
                            <li><a href="./homepage.js">Главная</a></li>
                            <li><a href="./notfoundpage.js">О нас</a></li>
                            <li><a href="./notfoundpage.js">Услуги</a></li>
                            <li><a href="./notfoundpage.js">Контакты</a></li>
                        </ul>
                    </nav>
                </header>
                <div style={blockStyle}>
                    <p>This is a text block.</p>
                    <p>This is a test site. About Us:</p>
                    <ul>
                        <li>
                            <Link to="/newpage">new Page</Link>
                        </li>
                        <li>
                            <Link to="/homepage">home page</Link>
                        </li>
                    </ul>
                </div>
            </ImageBackground>
        </div>
    );
}

export default HomePage;
