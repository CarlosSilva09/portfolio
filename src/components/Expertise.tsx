import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React.js",
    "Tailwind CSS",
    "Chakra UI",
    "Material UI",
    "Next.js",
    "Node.js",
    "Angular",
    "TypeScript",
    "Git",
    "Responsive Design",
    "Basic SEO",
    "Figma"
];

const labelsSecond = [
    "Git",
    "GitHub Actions",
    "Docker",
    "AWS",
    "CI/CD",
    "Kubernetes",
    "n8n"
];

const labelsThird = [
    "OpenAI",
    "Groq",
    "LangChain",
    "Qdrant",
    "Hugging Face",
    "LlamaIndex",
    "Streamlit",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Especialidades</h1>
            <div className="skills-grid">
                <div className="skill">
                <FontAwesomeIcon icon={faReact as IconProp} size="3x" />
                    <h3>Desenvolvedor em Front-End</h3>
                    <p>Tenho experiência em criar interfaces de usuário utilizando React e outras tecnologias modernas. Estou em constante aprendizado para aprimorar minhas habilidades no desenvolvimento frontend.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Stack de tecnologias:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                <FontAwesomeIcon icon={faDocker as IconProp} size="3x" />
                    <h3>DevOps & Automação</h3>
                    <p>Estou começando minha jornada em DevOps, aprendendo a configurar pipelines CI/CD, automação de implantação e práticas de integração contínua para melhorar o fluxo de trabalho de desenvolvimento.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Stack de tecnologias:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                <FontAwesomeIcon icon={faPython as IconProp} size="3x" />
                    <h3>GenAI & LLM</h3>
                    <p>Estou iniciando minha jornada com modelos de IA e aprendizado de máquina. Tenho interesse em explorar como essas tecnologias podem ser aplicadas para resolver problemas do mundo real e criar soluções inovadoras.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Stack de tecnologias:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;
