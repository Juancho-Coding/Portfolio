import { Typography, Card, Box, Button } from '@mui/material'

import { ProjectInformation } from '../assets/information'
import imageUrl from '../utils/dynamicImport'
import Markdown from 'react-markdown'
import GitHubIcon from '@mui/icons-material/GitHub'
import PreviewIcon from '@mui/icons-material/Preview'
import InfoIcon from '@mui/icons-material/Info'

import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

const ProjectCard = ({ element }: props) => {
  const { t } = useTranslation(['projects', 'common'])
  const navigate = useNavigate()

  return (
    <Card
      style={{
        maxWidth: '80%',
        maxHeight: '300px',
        display: 'flex',
        flexDirection: 'row',
        margin: '20px',
        boxShadow: '0 0 5px 1px white',
        justifyContent: 'space-around',
        overflow: 'hidden',
      }}
    >
      <Box width="50%" overflow="auto">
        <Box bgcolor="secondary.main" p="5px" position="sticky" top="0">
          <Typography variant="h5" align="center" color="white">
            {t(element.title)}
          </Typography>
        </Box>
        <Box p="10px">
          <Typography align="center">
            <Markdown>{t(element.description)}</Markdown>
          </Typography>

          <Box display="flex" justifyContent="center">
            {element.demo.length !== 0 && (
              <Button
                variant="contained"
                color="secondary"
                startIcon={<PreviewIcon />}
                onClick={() => {
                  window.open(element.demo, '_blank')
                }}
              >
                {t('button_live')}
              </Button>
            )}
            {element.github.length !== 0 && (
              <Button
                variant="contained"
                color="secondary"
                startIcon={<GitHubIcon />}
                sx={{ ml: 2 }}
                onClick={() => {
                  window.open(element.github, '_blank')
                }}
              >
                {t('button_github')}
              </Button>
            )}
            {element.page.length !== 0 && (
              <Button
                variant="contained"
                color="secondary"
                startIcon={<InfoIcon />}
                sx={{ ml: 2 }}
                onClick={() => {
                  navigate(element.page)
                }}
              >
                {t('button_details')}
              </Button>
            )}
          </Box>
        </Box>
      </Box>
      <Box width="50%" height="100%">
        <img
          style={{
            objectFit: 'cover',
          }}
          width="100%"
          height="100%"
          src={imageUrl(element.image)}
          alt="project image"
        />
      </Box>
    </Card>
  )
}

type props = {
  element: ProjectInformation
}

export default ProjectCard
