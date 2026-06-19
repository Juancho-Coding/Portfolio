import { Box, Typography, useTheme, useMediaQuery } from '@mui/material'
import { useState } from 'react'
import ProjectCard from './ProjectCard'

import { projects } from './../assets/information'

import ProjectDetailedCard from './ProjectDetailedCard'
import { useTranslation } from 'react-i18next'
import ProjectCardFull from './ProjectCardFull'

const ProjectsContainer = (props: props) => {
  const [detailedView, setDetailedView] = useState(false)
  const [detailedItem, setDetailedItem] = useState<number | null>(null)
  const theme = useTheme()
  const matchesMd = useMediaQuery(theme.breakpoints.up('md'))
  const { t } = useTranslation(['projects', 'common'])

  const cardClickHandle = (
    _event: React.MouseEvent<HTMLElement, MouseEvent>,
    key: string
  ) => {
    setDetailedView(true)
    const clickedItem = projects.findIndex((element) => {
      return element.id === key
    })
    setDetailedItem(clickedItem)
    props.onSelection()
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        boxSizing: 'border-box',
        justifyContent: 'center',
      }}
    >
      {(matchesMd || !detailedView) && (
        <Box
          width="100%"
          sx={{
            margin: '20px',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '1rem', md: '1.1rem' },
              textAlign: 'center',
              pb: '10px',
            }}
          >
            {t('description')}
          </Typography>

          <Box
            sx={{
              justifyItems: 'center',
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              rowGap: '20px',
            }}
          >
            {projects.map((element) => {
              return matchesMd ? (
                <ProjectCardFull key={element.id} element={element} />
              ) : (
                <ProjectCard
                  key={element.id}
                  onClick={cardClickHandle}
                  element={element}
                />
              )
            })}
          </Box>
        </Box>
      )}

      {!matchesMd && detailedView && (
        <ProjectDetailedCard
          item={detailedItem !== null ? projects[detailedItem] : null}
          onClose={() => setDetailedView(false)}
        />
      )}
    </Box>
  )
}

type props = {
  onSelection: () => void
}

export default ProjectsContainer
