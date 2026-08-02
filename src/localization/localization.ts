import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import {
  en_nav_dict,
  en_presentation_dict,
  en_about_dict,
  en_skills_dict,
  en_projects_dict,
  en_contact_dict,
  en_iot_system_dict,
  en_calibration_suite,
  en_management_lab_dict,
} from './dict'

import {
  es_about_dict,
  es_calibration_suite,
  es_contact_dict,
  es_iot_system_dict,
  es_management_lab_dict,
  es_nav_dict,
  es_presentation_dict,
  es_projects_dict,
  es_skills_dict,
} from './dict_es'

import {
  fr_about_dict,
  fr_calibration_suite,
  fr_contact_dict,
  fr_iot_system_dict,
  fr_management_lab_dict,
  fr_nav_dict,
  fr_presentation_dict,
  fr_projects_dict,
  fr_skills_dict,
} from './dict_fr'

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    supportedLngs: ['en', 'es', 'fr'],
    lng: 'en',
    fallbackLng: 'en',
    defaultNS: 'common',
    fallbackNS: 'common',
    resources: {
      en: {
        common: en_nav_dict,
        presentation: en_presentation_dict,
        about: en_about_dict,
        skill: en_skills_dict,
        projects: en_projects_dict,
        contact: en_contact_dict,
        iot_system: en_iot_system_dict,
        calibration_auite: en_calibration_suite,
        management_lab: en_management_lab_dict,
      },
      es: {
        common: es_nav_dict,
        presentation: es_presentation_dict,
        about: es_about_dict,
        skill: es_skills_dict,
        projects: es_projects_dict,
        contact: es_contact_dict,
        iot_system: es_iot_system_dict,
        calibration_auite: es_calibration_suite,
        management_lab: es_management_lab_dict,
      },
      fr: {
        common: fr_nav_dict,
        presentation: fr_presentation_dict,
        about: fr_about_dict,
        skill: fr_skills_dict,
        projects: fr_projects_dict,
        contact: fr_contact_dict,
        iot_system: fr_iot_system_dict,
        calibration_auite: fr_calibration_suite,
        management_lab: fr_management_lab_dict,
      },
    },
    interpolation: {
      escapeValue: false,
    },
  })
