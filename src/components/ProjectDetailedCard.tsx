import { Box, Button, Card, Fade, Typography } from '@mui/material'
import { ProjectInformation } from '../assets/information'
import { useState } from 'react'
import Markdown from 'react-markdown'

import GitHubIcon from '@mui/icons-material/GitHub'
import PreviewIcon from '@mui/icons-material/Preview'
import InfoIcon from '@mui/icons-material/Info'
import CloseIcon from '@mui/icons-material/Close'
import { useTranslation } from 'react-i18next'
import { IconButton } from '@mui/material'

const ProjectDetailedCard = ({ onClose, item }: props) => {
  const [visibility, setVisibility] = useState(true)
  const { t } = useTranslation(['projects', 'common'])

  return (
    <Fade
      in={visibility}
      appear={true}
      timeout={{ enter: 500, exit: 500 }}
      onExited={() => {
        onClose()
      }}
    >
      <Card
        sx={{
          boxSizing: 'border-box',
          maxWidth: '95%',
          padding: '15px',
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: '0 0 5px 1px white',
        }}
      >
        {item && (
          <>
            <Box
              sx={{
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Box>
                <Typography sx={{ color: 'black' }} variant="h5">
                  {t(item.title)}
                </Typography>
              </Box>
              <Box>
                <Typography sx={{ color: 'black', fontSize: '1rem' }}>
                  <Markdown>{t(item.description)}</Markdown>
                </Typography>
              </Box>
              <Box display="flex" justifyContent="center" gap="5px">
                {item.demo.length !== 0 && (
                  <Button
                    variant="contained"
                    startIcon={<PreviewIcon />}
                    onClick={() => {
                      window.open(item.demo, '_blank')
                    }}
                  >
                    {t('button_live')}
                  </Button>
                )}
                {item.github.length !== 0 && (
                  <Button
                    variant="contained"
                    startIcon={<GitHubIcon />}
                    onClick={() => {
                      window.open(item.github, '_blank')
                    }}
                  >
                    {t('button_github')}
                  </Button>
                )}
                {item.page.length !== 0 && (
                  <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<InfoIcon />}
                    sx={{ ml: 2 }}
                    onClick={() => {
                      window.open(item.page, '_self')
                    }}
                  >
                    {t('button_details')}
                  </Button>
                )}
              </Box>
            </Box>
          </>
        )}
        <IconButton
          sx={{ position: 'absolute', top: 0, right: 0 }}
          onClick={() => {
            setVisibility(false)
          }}
        >
          <CloseIcon />
        </IconButton>
      </Card>
    </Fade>
  )
}

type props = {
  onClose: () => void
  item: ProjectInformation | null
}

export default ProjectDetailedCard
