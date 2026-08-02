import { useTranslation } from 'react-i18next'
import ChallengeTable from '../components/ChallengeTable'
import DetailsViewTemplate from '../components/DetailsViewTemplate'
import MermaidDiagram from '../components/MermaidDiagram'
import { useLocation } from 'react-router-dom'
import test_schema from '../assets/project-calibration/test_schema.svg'
import { Box, Typography } from '@mui/material'

const CalibrationBench = () => {
  const { t } = useTranslation(['calibration_auite'])
  const location = useLocation()
  return (
    <DetailsViewTemplate
      status={t('status')}
      banner="project-calibration/bench.webp"
      title={t('title')}
      subtitle={t('subtitle')}
      badges={t('badges').split('&')}
      links={[
        {
          type: 'internal_link',
          textButton: t('link1'),
          link: `#${location.pathname}#architecture`,
        },
        {
          type: 'internal_link',
          textButton: t('link2'),
          link: `#${location.pathname}#key-decisions`,
        },
        {
          type: 'link',
          textButton: t('link3'),
          link: `/projectDetails/managementLab`,
        },
      ]}
      heroText={t('hero_text')}
      challenge={{
        title: t('challenge_title'),
        content: t('challenge_content'),
        component: (
          <ChallengeTable
            rows={[
              {
                text1: t('challenge_content_item1_text1'),
                text2: t('challenge_content_item1_text2'),
              },
              {
                text1: t('challenge_content_item2_text1'),
                text2: t('challenge_content_item2_text2'),
              },
              {
                text1: t('challenge_content_item3_text1'),
                text2: t('challenge_content_item3_text2'),
              },
              {
                text1: t('challenge_content_item4_text1'),
                text2: t('challenge_content_item4_text2'),
              },
              {
                text1: t('challenge_content_item5_text1'),
                text2: t('challenge_content_item5_text2'),
              },
              {
                text1: t('challenge_content_item6_text1'),
                text2: t('challenge_content_item6_text2'),
              },
            ]}
          />
        ),
        generalInfo: undefined,
      }}
      architecture={{
        title: t('architecture_title'),
        content: t('architecture_content'),
        component: {
          item: <MermaidDiagram chart={calibrationSuiteArchitectureDiagram} />,
          flexPriority: 2,
        },
      }}
      keyDecision={{
        title: t('key_decision_title'),
        items: [
          {
            title: t('key_decision_item1_title'),
            summary: t('key_decision_item1_summary'),
            content: t('key_decision_item1_content'),
          },
          {
            title: t('key_decision_item2_title'),
            summary: t('key_decision_item2_summary'),
            content: t('key_decision_item2_content'),
          },
          {
            title: t('key_decision_item3_title'),
            summary: t('key_decision_item3_summary'),
            content: t('key_decision_item3_content'),
          },
          {
            title: t('key_decision_item4_title'),
            summary: t('key_decision_item4_summary'),
            content: t('key_decision_item4_content'),
          },
          {
            title: t('key_decision_item5_title'),
            summary: t('key_decision_item5_summary'),
            content: t('key_decision_item5_content'),
          },
        ],
      }}
      impact={{
        content: [
          {
            title: t('impact_item1_title'),
            content: t('impact_item1_content'),
          },
        ],
        keypoints: [
          {
            title: t('impact_keypoint1_title'),
            value: t('impact_keypoint1_content'),
          },
          {
            title: t('impact_keypoint2_title'),
            value: t('impact_keypoint2_content'),
          },
          {
            title: t('impact_keypoint3_title'),
            value: t('impact_keypoint3_content'),
          },
        ],
      }}
      stack={{
        title: t('stack_title'),
        items: [
          {
            title: t('stack_item1_title'),
            chips: t('stack_item1_chips').split('&'),
          },
          {
            title: t('stack_item2_title'),
            chips: t('stack_item2_chips').split('&'),
          },
          {
            title: t('stack_item3_title'),
            chips: t('stack_item3_chips').split('&'),
          },
          {
            title: t('stack_item4_title'),
            chips: t('stack_item4_chips').split('&'),
          },
          {
            title: t('stack_item5_title'),
            chips: t('stack_item5_chips').split('&'),
          },
        ],
      }}
      gallery={{
        prefix: 'project-calibration',
        images: [
          {
            img: 'imCalibration1.webp',
            label: t('gallery_item1'),
          },
          {
            img: 'bench1.webp',
            label: t('gallery_item2'),
          },
          {
            img: 'bench2.webp',
            label: t('gallery_item3'),
          },
          {
            img: 'bench3.webp',
            label: t('gallery_item4'),
          },
          {
            img: 'bench4.webp',
            label: t('gallery_item5'),
          },
          {
            img: 'bench5.webp',
            label: t('gallery_item6'),
          },
        ],
      }}
      roadmap={{
        title: t('roadmap_title'),
        items: [
          {
            title: t('roadmap_item1_title'),
            content: t('roadmap_item1_content'),
          },
          {
            title: t('roadmap_item2_title'),
            content: t('roadmap_item2_content'),
          },
        ],
      }}
    >
      <Box display="flex" flexDirection="column" alignItems="center">
        <img
          src={test_schema}
          alt="Calibration suite diagram"
          style={{ maxWidth: '100%' }}
        />
        <Typography>{t('architecture_annotation')}</Typography>
      </Box>
    </DetailsViewTemplate>
  )
}

const calibrationSuiteArchitectureDiagram = `
flowchart TB

    subgraph FIELD["Field layer"]
    direction TB
      SENSORS["Process sensors<br/>Valves and actuators"]
      PLC["Industrial PLC"]
      OPC["OPC server"]
      SENSORS --> PLC
      PLC --> OPC
    end

    subgraph SIM["Simulator"]
      EMULATED["Emulated sensors"]
    end

    MQTT{{"Mosquitto broker<br/>Local"}}
    HAL["Hardware Abstraction Layer"]
    LV["LabVIEW app<br/>Test orchestration"]
    DB[("PostgreSQL<br/>Local")]
    WEB["Local web server<br/>Serves tablet UI"]
    TABLET["Operator tablet<br/>paho-mqtt in browser"]
    XL["Excel template<br/>Raw data + formatted cert"]
    OUT["PDF certificate<br/>Thermal label"]

    LV -- "ActiveX: fill raw sheet, print" --> XL
    LV -- "pub/sub Readings" <--> MQTT
    SIM --> HAL
    OPC -- "OPC UA" --> HAL
    HAL --> LV
    LV <--> DB
    WEB -- "HTML/JS" --> TABLET
    TABLET -- "MQTT over WebSockets" --> MQTT
    XL --> OUT


  classDef store fill:transparent,stroke:#FF9132,stroke-width:2px,color:#fff
  classDef broker fill:transparent,stroke:#FF9132,stroke-width:2px,stroke-dasharray: 4 3,color:#fff
  classDef hal fill:transparent,stroke:#FFFFFF,stroke-width:2px,color:#fff
  class DB,XL store
  class MQTT broker
  class HAL hal
`

export default CalibrationBench
