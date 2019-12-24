import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
    <div>
        <p>Home Page</p>
        <Link to="about" className="btn btn-primary btn-lg">
            Learn More
        </Link>
    </div>
);

export default HomePage;