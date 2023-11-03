import React from "react";
import './css/header.css' ;
import { Link } from "react-router-dom";

function HomePage() {
    const blockStyle = {
        border: '1px solid #ccc',
        padding: '20px',
        margin: '10px',
        backgroundColor: '#ffffff',
    };

    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li><a href="#">Главная</a></li>
                        <li><a href="#">О нас</a></li>
                        <li><a href="#">Услуги</a></li>
                        <li><a href="#">Контакты</a></li>
                    </ul>
                </nav>
            </header>
            <div style={blockStyle}>
                <p>This is a text block.</p>
            </div>

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
    );
}

export default HomePage;
