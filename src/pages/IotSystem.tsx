import { useTranslation } from 'react-i18next'
import ChallengeTable from '../components/ChallengeTable'
import DetailsViewTemplate from '../components/DetailsViewTemplate'
import MermaidDiagram from '../components/MermaidDiagram'

const IotSystem = () => {
  const { t } = useTranslation(['iot_system'])
  return (
    <DetailsViewTemplate
      status={t('status')}
      banner="project-iot/iotfrontpage.webp"
      title={t('title')}
      subtitle={t('subtitle')}
      badges={t('badges').split('&')}
      links={[
        {
          type: 'link',
          textButton: t('link1'),
          link: 'https://juanchocoding.dev',
        },
        {
          type: 'github',
          textButton: t('link2'),
          link: 'https://github.com/Juancho-Coding/IOT-Dashboard_back',
        },
        {
          type: 'github',
          textButton: t('link3'),
          link: 'https://github.com/Juancho-Coding/IOT-Dashboard_front',
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
        generalInfo: undefined /* [
          {
            title: t('challenge_general1_title'),
            content: t('challenge_general1_content'),
          },
          {
            title: t('challenge_general2_title'),
            content: t('challenge_general2_content'),
          },
          {
            title: t('challenge_general3_title'),
            content: t('challenge_general3_content'),
          },
          {
            title: t('challenge_general4_title'),
            content: t('challenge_general4_content'),
          },
          {
            title: t('challenge_general5_title'),
            content: t('challenge_general5_content'),
          },
        ],*/,
      }}
      architecture={{
        title: t('architecture_title'),
        content: t('architecture_content'),
        component: {
          item: <MermaidDiagram chart={iotArchitectureDiagram} />,
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
          {
            title: t('impact_item2_title'),
            content: t('impact_item2_content'),
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
          {
            title: t('stack_item6_title'),
            chips: t('stack_item6_chips').split('&'),
          },
        ],
      }}
      gallery={undefined}
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
          {
            title: t('roadmap_item3_title'),
            content: t('roadmap_item3_content'),
          },
        ],
      }}
    />
  )
}

const iotArchitectureDiagram = `
graph TB
    subgraph Field["Field"]
        Devices["IoT Devices<br/>sensors"]
    end
 
    Broker["MQTT Broker"]
 
    subgraph Worker["Process 1 — MQTT Worker"]
        WorkerNode["Node.js / TypeScript<br/>polynomial scaling"]
    end
 
    subgraph Backend["Process 2 — REST Backend"]
        BackendNode["Node.js / TypeScript<br/>Express, auth, CRUD"]
    end
 
    Redis[("Redis<br/>pub/sub bus + cache<br/>sensor metadata, latest readings")]
    Postgres[("PostgreSQL<br/>source of truth")]
 
    Traefik["Traefik<br/>reverse proxy, TLS"]
    Frontend["React Frontend<br/>browser"]
 
    Devices -->|MQTT| Broker
    Broker -->|subscribe| WorkerNode
    WorkerNode -->|read metadata| Redis
    WorkerNode -->|publish scaled values| Redis
    Redis -->|pub/sub| BackendNode
    BackendNode <-->|SQL| Postgres
    Traefik -->|HTTPS| BackendNode
    Frontend -->|REST + polling<br/>Socket.IO next| Traefik
`

export default IotSystem
