import React from "react";
import '../assets/styles/Project.scss';


function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Projetos Pessoais</h1>
            <div className="projects-grid">
                <div className="project">
                    <h2>Projeto em Progresso</h2>
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
