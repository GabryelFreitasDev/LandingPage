import { useState } from "react";
import Logo from "../assets/logo.svg"
import Close from "../assets/close.svg";
import Menu from "../assets/menu.svg";
import "../styles/header.css";
import "../styles/utility.css";
import '../styles/index.css'
import Button from "../components/Button";

export default function Header() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    
    return (
        <>
            <header className="py-sm header">
            <nav className="flex items-center justify-between">
                <img src={Logo} alt="Logo TurboLag" style={{scale: "2"}} width={220} height={80} />
                <div className="desktop-only">
                    <ul className="flex gap-1">
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#solution">Soluções</a>
                        </li>
                        <li>
                            <a href="#testimonials">Depoimentos</a>
                        </li>
                        <li>
                            <a href="#pricing">Preços</a>
                        </li>
                        <li>
                            <a href="#contact">Contato</a>
                        </li>
                    </ul>
                </div>
                <div className="desktop-only">
                    <div className="flex items-center">
                        <a className="reverse-color ml-lg" href="">Login</a>
                        <Button text="Cadastre-se" />
                    </div>
                </div>

                <div className="mobile-menu">
                    {showMobileMenu ?
                        <div className="mobile-menu-content">
                            <div className="container flex">
                                <ul>
                                    <li>
                                        <a href="#">Home</a>
                                    </li>
                                    <li>
                                        <a href="#solution">Soluções</a>
                                    </li>
                                    <li>
                                        <a href="#testimonials">Depoimentos</a>
                                    </li>
                                    <li>
                                        <a href="#pricing">Preços</a>
                                    </li>
                                    <li>
                                        <a href="#contact">Contato</a>
                                    </li>
                                </ul>
                                <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper">
                                    <img src={Close} alt="ícone fechar menu" width={24} height={24} />
                                </span>
                            </div>
                        </div>
                        :
                        <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper" >
                            <img src={Menu} alt="ícone menu" width={24} height={24} />
                        </span>
                    }
                </div>
            </nav>

            </header>
        </>
    )
}