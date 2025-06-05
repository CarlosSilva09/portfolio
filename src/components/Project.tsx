import React from "react";
import '../assets/styles/Project.scss';

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Projetos Pessoais</h1>
            <div className="projects-grid">
                {/* Projeto: Desafio Futureme */}
                <div className="project">
                    <h2>Desafio Futureme</h2>
                    <img
                        src={require("../assets/images/Projeto.jpg")}
                        alt="Desafio Futureme"
                        className="project-image"
                        style={{ width: "100%", maxWidth: "400px", borderRadius: "8px", marginBottom: "2rem" }}
                    />
                    <p>Projeto desenvolvido como desafio para a Futureme, focado em desenvolvimento web e funcionalidades modernas.</p>
                    <p>
                        Veja o código no{" "}
                        <a href="https://github.com/CarlosSilva09/Desafio-Futureme" target="_blank" rel="noreferrer">GitHub</a>
                    </p>
                </div>

                {/* Projeto: WebTistacks */}
                <div className="project">
                    <h2>WebTistacks</h2>
                    <img
                        src={require("../assets/images/WebTistacks.jpg")}
                        alt="WebTistacks"
                        className="project-image"
                        style={{ width: "100%", maxWidth: "400px", borderRadius: "8px", marginBottom: "2rem" }}
                    />
                    <p>Plataforma para gerenciamento de stacks tecnológicas, com interface intuitiva e responsiva.</p>
                    <p>
                        Veja o código no{" "}
                        <a href="https://github.com/CarlosSilva09/WebTistacks" target="_blank" rel="noreferrer">GitHub</a>
                    </p>
                </div>

                {/* Projeto: Controle de Estoque */}
                <div className="project">
                    <h2>Controle de Estoque</h2>
                    <img
                        src={require("../assets/images/ControleDeEstoque.jpg")}
                        alt="Controle de Estoque"
                        className="project-image"
                        style={{ width: "100%", maxWidth: "400px", borderRadius: "8px", marginBottom: "2rem" }}
                    />
                    <p>Sistema completo para controle de estoque, desenvolvido em TypeScript, com foco em usabilidade e eficiência.</p>
                    <p>
                        Veja o código no{" "}
                        <a href="https://github.com/CarlosSilva09/Controle-De-Estoque" target="_blank" rel="noreferrer">GitHub</a>
                    </p>
                </div>

                {/* Projetos em progresso */}
                <div className="project">
                    <br />
                    <h1>Projetos em progresso</h1>
                    <p>Atualmente trabalhando em projetos. Fique ligado para atualizações!</p>
                    <p>
                        Quer me convidar para colaborar ou conversar? Me chame no{" "}
                        <a href="https://www.linkedin.com/in/carlos-eduardo-borba-silva-b726a52b9/" target="_blank" rel="noreferrer">LinkedIn!</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Project;
