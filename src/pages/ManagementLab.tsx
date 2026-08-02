import { useTranslation } from 'react-i18next'
import ChallengeTable from '../components/ChallengeTable'
import DetailsViewTemplate from '../components/DetailsViewTemplate'
import MermaidDiagram from '../components/MermaidDiagram'
import { useLocation } from 'react-router-dom'

const ManagementLab = () => {
  const { t } = useTranslation(['management_lab'])
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
          link: `/projectDetails/calibration_Meters`,
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
            ]}
          />
        ),
        generalInfo: undefined,
      }}
      architecture={{
        title: t('architecture_title'),
        content: t('architecture_content'),
        component: {
          item: <MermaidDiagram chart={managementArchitectureDiagram} />,
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
          {
            title: t('impact_keypoint4_title'),
            value: t('impact_keypoint4_content'),
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
        prefix: 'project-management',
        images: [
          { img: 'managementfrontpage.webp', label: t('gallery_item1') },
          { img: 'image1.webp', label: t('gallery_item2') },
          { img: 'image5.webp', label: t('gallery_item3') },
          { img: 'image4.webp', label: t('gallery_item4') },
          { img: 'image7.webp', label: t('gallery_item5') },
          { img: 'image6.webp', label: t('gallery_item6') },
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
    ></DetailsViewTemplate>
  )
}

const managementArchitectureDiagram = `
flowchart LR
  subgraph mgmtPC["MANAGEMENT PC (per bench)"]
    direction TB

    subgraph electron["Electron App"]
      direction LR

      renderer["Renderer<br/>React SPA<br/>UI · forms · tables · reports view"]

      subgraph main["Main Process — Node.js"]
        direction TB
        api["Express REST API<br/>Auth (bcrypt + roles)<br/>Business logic"]
        workers["Worker Threads<br/>Excel report generation<br/>Thermal label printing"]
        api -.spawns.-> workers
      end

      renderer -->|HTTP · localhost| api
      renderer -->|IPC + preload<br/>native file/folder dialogs only| main
    end

    printer[("Zebra<br/>Thermal Printer")]
    workers -->|ZPL / TSC over TCP| printer
  end

 
    db[("PostgreSQL<br/>Shared bench DB")]

  main -->|SQL| db
`

export default ManagementLab
