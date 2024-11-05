import HeroRectangleOne from "../assets/images/rectangleOne.png";
import HeroRectangleTwo from "../assets/images/rectangleTwo.png";

import ProfileImageOne from "../assets/images/muskinho.png"
import Star from "../assets/star.svg";
import StarOuter from "../assets/starouter.svg"
import Check from "../assets/check.svg";
import Button from "../components/Button";

import "../styles/hero.css";
import "../styles/testimonials.css";
import "../styles/pricing.css"

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

        </>
    )
}

export default Home;