import React, { useState } from 'react'
import '../Buttons/main.css'
import '../NavigationBar/main.css'


function Navbar(probs) {
    const [click, setclick] = useState(false);
    const handleclick = () => setclick(!click);

    return (
        <div>
            <div className="Navbar">
                <nav className={probs.bg}>
                    <h3 className="logo">{probs.children}</h3>
                    <ul className="navlink">
                        <li className="hover-color2-txt">
                            <a href="./home" className="white-color default-item"><i class={probs.link1_ic}></i> {probs.link1} </a>
                        </li>
                        <li className="hover-color1-txt">
                            <a href="./home" className="white-color default-item"><i class={probs.link2_ic}></i> {probs.link2}  </a>
                        </li>
                        <input type="text" placeholder={probs.placeholder} className="input-type1" />
                        <button className="ui-button green-basic-button radius-r"><i class="fas fa-search"></i></button>
                    </ul>
                    <div onClick={handleclick} className={click ? 'burger right' : 'burger right fg'}>
                        <i className={click ? 'fas fa-bars ' : 'fas fa-user'} />
                    </div>
                </nav>
            </div>

            {/* <nav className="nav-style2 nav-peru divider">
                <h3 className="logo">Style-UI</h3>
                <ul className="navlink">
                    <li className="hover-color1-txt">
                        <a href="./home" className="white-color default-item"><i class="fas fa-home"></i>Home </a>
                    </li>

                    <li className="hover-color1-txt">
                        <a href="./home" className="white-color default-item"><i class="fas fa-user"></i>About  </a>
                    </li>

                    <li className="hover-color1-txt">
                        <a href="./home" className="white-color default-item"><i class="fas fa-user"></i>Privacy </a>
                    </li>
                </ul>
                <div onClick={handleclick} className={click ? 'burger right' : 'burger right fg'}>
                    <i className={click ? 'fas fa-bars ' : 'fas fa-user'} />
                </div>
            </nav>

            <nav className="nav-style3 nav-green divider">
                <ul className="navlink">
                    <li><h2> Navbar </h2></li>
                    <li className="hover-color1-txt">
                        <a href="./home" className="white-color default-item"><i class="fas fa-home"></i> Home </a>
                    </li>

                    <li className="hover-color1-txt">
                        <a href="./home" className="white-color default-item"><i class="fas fa-user"></i>About  </a>
                    </li>

                    <li className="hover-color1-txt">
                        <a href="./home" className="white-color default-item"><i class="fas fa-user"></i> Privacy </a>
                    </li>
                </ul>
                <div onClick={handleclick} className={click ? 'burger right' : 'burger right fg'}>
                    <i className={click ? 'fas fa-bars ' : 'fas fa-user'} />
                </div>
            </nav>


            <nav className="nav-style4 nav-purple divider">
                <ul className="navlink">
                    <li><i class="fas fa-home fa-2x"></i></li>
                    <li className="hover-color1-txt">
                        <a href="./home" className="white-color default-item"> HTML </a>
                    </li>

                    <li className="hover-color2-txt">
                        <a href="./home" className="white-color default-item"> CSS  </a>
                    </li>

                    <li className="hover-color3-txt">
                        <a href="./home" className="white-color default-item"> Javascript </a>
                    </li>

                    <li className="hover-color4-txt">
                        <a href="./home" className="white-color default-item"> React </a>
                    </li>

                    <li className="hover-color5-txt">
                        <a href="./home" className="white-color default-item"> Node Js </a>
                    </li>

                    <li className="hover-color6-txt">
                        <a href="./home" className="white-color default-item"> Python </a>
                    </li>

                    <li className="hover-color7-txt">
                        <a href="./home" className="white-color default-item"> Bootstrap </a>
                    </li>

                    <li className="hover-color8-txt">
                        <a href="./home" className="white-color default-item"> C Programming </a>
                    </li>

                    <li className="hover-color1-txt">
                        <a href="./home" className="white-color default-item"> C++ Programming </a>
                    </li>
                    <li><i class="fas fa-user fa-2x"></i></li>
                </ul>
                <div onClick={handleclick} className={click ? 'burger right' : 'burger right fg'}>
                    <i className={click ? 'fas fa-bars ' : 'fas fa-user'} />
                </div>
            </nav> */}

        </div>
    )
}

export default Navbar;