import React from "react";
import { Link } from "react-router-dom";


function HomePage() {
    return (
        <div>
            <h1>Babam Pro</h1>
            <p>This is test site. About Us:</p>
            <ul>
                <li>
                    <Link to="/newpage">Перейти на новую страницу</Link>
                </li>
                <li>
                    <Link to="/otherpage">Перейти на другую страницу</Link>
                </li>
            </ul>
        </div>
    );
}

export default HomePage;