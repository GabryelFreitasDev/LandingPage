import HeroRectangleOne from "../assets/images/rectangleOne.png";
import HeroRectangleTwo from "../assets/images/rectangleTwo.png";
import Button from "../components/Button";
import TurboCharger from "../assets/images/turbocharger.png";
import FuelTech from "../assets/images/fueltech.png";
import NanoPro from "../assets/images/nanopro.png";
import "../styles/hero.css";
import "../styles/solutions.css";

import Header from './header';

function Home () {
    return (
        <>
            <Header/>
            <section id="hero">
                <span className="desktop-only">
                    <img src={HeroRectangleTwo} alt="Retangulo um tela inicial" />
                </span>
                <img src={HeroRectangleOne} alt="Retangulo dois tela inicial" />
                <div className="container content">
                    <p className="desktop-only">
                        Olá
                    </p>
                    <h1>Comida de mãe direto no seu apê, é só pedir que entregamos para você!</h1>
                    <p>Já pensou em matar a saudade daquela comida caseira? O melhor de tudo, nossas receitas são 100% saudáveis, bora entrar no shape.
                    </p>
                    <div className="flex gap-1">
                        <span><Button text="Cadastre-se" /></span>
                        <span className="desktop-only">
                            <Button text="Veja mais" secondary />
                        </span>
                    </div>
                </div>
            </section>
            <section id="solutions" className="container">
                <h2>Peças de performance para seu projeto</h2>
                <p>Inovação é com a gente! A <strong>TurboLag</strong> já conquistou diversos clientes, seja você mais um deles. Veja tudo que pode ganhar com nossos serviços.</p>
                <div className="cards-container">
                    <div className="card">
                        <img src={TurboCharger} alt="TurboCharger" style={{scale: "1.3"}}/>
                        <h3>Produto Vencedor</h3>
                        <p>Ideia matadora, nosso time já ganhou diversos eventos de inovação com esse produto. Entre eles podemos citar o CityFarm da FAG e Startup Garage.</p>
                    </div>
                    <div className="card">
                        <img src={FuelTech} alt="TurboCharger" style={{scale: "1.2"}}/>
                        <h3>Produto Vencedor</h3>
                        <p>Ideia matadora, nosso time já ganhou diversos eventos de inovação com esse produto. Entre eles podemos citar o CityFarm da FAG e Startup Garage.</p>
                    </div>
                    <div className="card">
                        <img src={NanoPro} alt="TurboCharger" style={{scale: "1"}}/>
                        <h3>Produto Vencedor</h3>
                        <p>Ideia matadora, nosso time já ganhou diversos eventos de inovação com esse produto. Entre eles podemos citar o CityFarm da FAG e Startup Garage.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;