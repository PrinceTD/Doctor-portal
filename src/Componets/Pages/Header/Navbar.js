import React from 'react'
import './navbar.css'

export default function Navbar() {
    return (

        <div className='container'>
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Doctor_Portal</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item navHover">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item navHover">
                                <a class="nav-link active" href="#">About</a>
                            </li>
                            <li class="nav-item navHover">
                                <a class="nav-link active" href="#">Appoinment</a>
                            </li>
                            <li class="nav-item navHover">
                                <a class="nav-link active" href="#">Reviews</a>
                            </li>
                            <li class="nav-item navHover">
                                <a class="nav-link active" href="#">Contact Us</a>
                            </li>
                            <li class="nav-item navHover">
                                <a class="nav-link active" href="#">Login</a>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
        </div>

    )
}
