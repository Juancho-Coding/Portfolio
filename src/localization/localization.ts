import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import {
  en_nav_dict,
  en_presentation_dict,
  en_about_dict,
  en_skills_dict,
  en_projects_dict,
  en_contact_dict,
  en_dashboard_dict,
  en_calibration_dict,
} from './dict'

import { es_contact_dict, es_nav_dict, es_skills_dict } from './dict_es'

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    supportedLngs: ['en', 'es'],
    lng: 'en',
    fallbackLng: 'en',
    defaultNS: 'common',
    resources: {
      en: {
        common: en_nav_dict,
        presentation: en_presentation_dict,
        about: en_about_dict,
        skill: en_skills_dict,
        projects: en_projects_dict,
        contact: en_contact_dict,
        dashboard_page: en_dashboard_dict,
        calibration_page: en_calibration_dict,
      },
      es: {
        common: es_nav_dict,
        skill: es_skills_dict,
        contact: es_contact_dict,
      },
    },
    interpolation: {
      escapeValue: false,
    },
  })
