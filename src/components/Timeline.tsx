import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Histórico de Carreira</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="set de 2024 - o momento"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Aprendiz</h3>
            <h4 className="vertical-timeline-element-subtitle">BERICAP, Sorocaba, São Paulo, Brasil</h4>
            <p>
              Gestão inteligente da produção, criação e manutenção de bancos de dados no Microsoft Access, 
              desenvolvimento de automações com VBA e Python, análises de dados com Power BI, e integração de sistemas.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="jun de 2024 - ago de 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Estagiário</h3>
            <h4 className="vertical-timeline-element-subtitle">Clarios, Sorocaba, São Paulo, Brasil</h4>
            <p>
              Gestão de inventários, criação de dashboards em Power BI, desenvolvimento de automações em VBA, 
              implementação da metodologia 5S, e análise de registros de processos.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="abr de 2023 - jun de 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Aprendiz</h3>
            <h4 className="vertical-timeline-element-subtitle">Clarios, Sorocaba, São Paulo, Brasil</h4>
            <p>
              Entrada de dados de sucata, arquivamento e análise de registros de processos, 
              desenvolvimento de proficiência no pacote Microsoft Office, e criação de dashboards em Power BI.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;