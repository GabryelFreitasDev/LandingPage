import HeroRectangleOne from "../assets/images/rectangleOne.png";
import HeroRectangleTwo from "../assets/images/rectangleTwo.png";

import ProfileImageOne from "../assets/images/muskinho.png"
import Star from "../assets/star.svg";
import StarOuter from "../assets/starouter.svg"
import Check from "../assets/check.svg";
import Button from "../components/Button";
<<<<<<< HEAD

import "../styles/hero.css";
import "../styles/testimonials.css";
import "../styles/pricing.css"
=======
import TurboCharger from "../assets/images/turbocharger.png";
import FuelTech from "../assets/images/fueltech.png";
import NanoPro from "../assets/images/nanopro.png";
import "../styles/hero.css";
import "../styles/solutions.css";
>>>>>>> be55ba42330a33d9763e93ece032f3e228f17340

import Header from './header';

function Home() {
    return (
        <>
            <Header />
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
<<<<<<< HEAD
            <section id="testimonials">
                <header>
                    <span>
                        <p className="desktop-only">
                            Conselho de quem conhece
                        </p>
                        <h2>Cada cliente importa!</h2>
                    </span>
                    <p>
                        Quem já pediu sabe da qualidade das nossas receitas, estamos tirando aquela ideia de que
                        comida congelada tem de ser algo sem gosto, acompanhe abaixo os testemunhos de quem já comprou e aprovou.
                    </p>
                </header>
                <section className="carousel">
                    <div className="carousel-content">
                        <div className="carousel-card">
                            <img src={ProfileImageOne} alt="Imagem perfil cliente" />
                            <span className="testimony">
                                <p>
                                    Certamente o mercado chinês de eletricos está bombando, só existe
                                    uma coisa melhor do que isso, provar uma boa comida DonaFrost no almoço.
                                </p>
                            </span>
                            <span className="rating">
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={StarOuter} alt="ícone estrela sem fundo" width={20} height={22} />
                            </span>
                            <span className="names">
                                <p>Ellon Ma</p>
                                <p>CEO BING CHILLING</p>
                            </span>
                        </div>
                    </div>
                    <div className="carousel-content">
                        <div className="carousel-card">
                            <img src={ProfileImageOne} alt="Imagem perfil cliente" />
                            <span className="testimony">
                                <p>
                                    Certamente o mercado chinês de eletricos está bombando, só existe
                                    uma coisa melhor do que isso, provar uma boa comida DonaFrost no almoço.
                                </p>
                            </span>
                            <span className="rating">
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={StarOuter} alt="ícone estrela sem fundo" width={20} height={22} />
                            </span>
                            <span className="names">
                                <p>Ellon Ma</p>
                                <p>CEO BING CHILLING</p>
                            </span>
                        </div>
                    </div>
                    <div className="carousel-content">
                        <div className="carousel-card">
                            <img src={ProfileImageOne} alt="Imagem perfil cliente" />
                            <span className="testimony">
                                <p>
                                    Certamente o mercado chinês de eletricos está bombando, só existe
                                    uma coisa melhor do que isso, provar uma boa comida DonaFrost no almoço.
                                </p>
                            </span>
                            <span className="rating">
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={StarOuter} alt="ícone estrela sem fundo" width={20} height={22} />
                            </span>
                            <span className="names">
                                <p>Ellon Ma</p>
                                <p>CEO BING CHILLING</p>
                            </span>
                        </div>
                    </div>
                </section>
            </section>

            <section id="pricing" className="container">
                <header>
                    <p className="desktop-only">Planos e preços</p>
                    <h2>Nossos planos</h2>
                </header>
                <section className="even-columns gap-1.5">
                    <div className="pricing-card">
                        <span className="plan">
                            <h3>Básico</h3>
                            <p>Você tem direito a uma prova das comidas DonaFrost.</p>
                        </span><h2>Grátis</h2><Button text="Pedir agora" secondary key="free" /><span className="hr" /><span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>Retire na loja</p>
                        </span><span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>Apenas 1 por CPF</p>
                        </span>
                    </div>
                    <div className="pricing-card premium">
                        <span className="bonus"><p>1º MÊS COM DESCONTO</p></span><span className="plan">
                            <h3>Premium</h3>
                            <p>Para quem precisa de uma marmita diária, muito saborosa.</p>
                        </span><span className="price">
                            <h2>R$ 89,90</h2>
                            <p>/mês</p>
                        </span><Button text="Pedir agora" key="premium" /><span className="hr" /><span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>2 Entregas</p>
                        </span><span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>5 Refeições por semana</p>
                        </span><span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>2 Sucos por semana</p>
                        </span>
                    </div>
                    <div className="pricing-card">
                        <span className="plan">
                            <h3>Básico</h3>
                            <p>Você tem direito a uma prova das comidas DonaFrost.</p>
                        </span><h2>Grátis</h2><Button text="Pedir agora" secondary key="free" /><span className="hr" /><span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>Retire na loja</p>
                        </span><span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>Apenas 1 por CPF</p>
                        </span>
                    </div>
                </section>
            </section>
=======
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
>>>>>>> be55ba42330a33d9763e93ece032f3e228f17340

        </>
    )
}

export default Home;