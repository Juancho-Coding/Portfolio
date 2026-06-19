export type ProjectInformation = {
  title: string
  description: string
  image: string
  id: string
  github: string
  demo: string
  page: string
}

export const projects: ProjectInformation[] = [
  {
    title: 'project_cinema_title',
    description: `project_cinema_description`,
    image: 'project-cinema/cinemafrontpage.webp',
    id: '1',
    github: 'https://github.com/Juancho-Coding/movie-theater',
    demo: 'https://movie-theater-87qg.vercel.app/',
    page: '',
  },
  {
    title: 'project_dashboard_title',
    description: `project_dashboard_description`,
    image: 'project-dashboard/dashboardfrontpage.webp',
    id: '2',
    github: '',
    demo: '',
    page: '/#/projectDetails/LabDashboard',
  },
  {
    title: 'project_calbench_title',
    description: `project_calbench_description`,
    image: 'project-calibration/bench.webp',
    id: '3',
    github: '',
    demo: '',
    page: '/#/projectDetails/calibration_Meters',
  },
  {
    title: 'project_chatclone_title',
    description: `project_chatclone_description`,
    image: 'chatclone_thumb.jpg',
    id: '4',
    github: 'https://github.com/Juancho-Coding/Chatbot-clone',
    demo: '',
    page: '',
  },
]
