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
                    <h1>Peças de performance para seu carro você encontra aqui!</h1>
                    <p>Acelere seu carro com peças de confiança e alto desempenho
                    </p>
                    <div className="flex gap-1">
                        <span><Button text="Cadastre-se" /></span>
                        <span className="desktop-only">
                            <Button text="Veja mais" secondary />
                        </span>
                    </div>
                </div>
            </section>
            <section className="solucoes">
                <div className="container">
                    <h2>Potência</h2>
                    <h3>Garantida para você</h3>
                    <p>
                    Performance é com a gente! <span className="empresa-nome">TurboLag</span> já conquistou diversos clientes, seja você mais um deles, veja alguns dos nossos produtos.
                    </p>

                    <div className="produtos">
                        <div className="produto">
                            <div className="icone-produto">
                            <img src={TurboCharger} alt="Produto Vencedor"/>
                            </div>
                            <h4>Turbina Garrett</h4>
                            <p>
                            Projetada para entregar aumento significativo de potência, ela utiliza tecnologia avançada para maximizar o fluxo de ar e a eficiência térmica, permitindo que o motor respire melhor e produza mais energia. Ideal para projetos de alta performance, desde preparações para rua até veículos de competição.
                            </p>
                        </div>

                        <div className="produto">
                            <div className="icone-produto">
                            <img src={FuelTech} alt="Produto Vencedor"/>
                            </div>
                            <h4>FT 600</h4>
                            <p>
                            Permite o gerenciamento de vários parâmetros do motor, como injeção de combustível, ignição e controle de boost. Conta com uma tela touchscreen colorida e é altamente configurável, oferecendo funções como data logger, gerenciamento de mapa e ajustes rápidos, ideal para pilotos e preparadores que querem maximizar o desempenho.
                            </p>
                        </div>

                        <div className="produto">
                            <div className="icone-produto">
                            <img src={NanoPro} alt="Produto Vencedor"/>
                            </div>
                            <h4>Nano Pro</h4>
                            <p>
                            Oferece a visualização precisa de injeção e ignição, além de suporte para controles adicionais como nitro e boosters. Ideal para preparadores que querem elevar o desempenho de veículos sem a necessidade de uma ECU completa de alta gama ou somada a uma.
                            </p>
                        </div>
                    </div>
                </div>
                </section>

        </>
    )
}

export default Home;