import React from 'react'
import { Link } from 'react-router-dom'
import "../App.css"

const Nav = () => {
    return (
        <div className="nav">
            <Link to="/">
                <img src="https://www.automobile.tn/images/logo.png" alt="voiture" className="nav-img" />
            </Link>
            <ul className="nav-ul">

                <li className="nav-li">
                    <Link to="" className="nav-a">
                        Prix du neuf
                    </Link>
                </li>

                <li className="nav-li">
                    <Link to="" className="nav-a">
                        Occasions
                    </Link>
                </li>

                <li className="nav-li">
                    <Link to="" className="nav-a">
                        Auto Mag
                    </Link>
                </li>

                <li className="nav-li">
                    <Link to="" className="nav-a">
                        Guide Pratique
                    </Link>
                </li>

                <li className="nav-li">
                    <Link to="" className="nav-a">
                        Mon Espace
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Nav
