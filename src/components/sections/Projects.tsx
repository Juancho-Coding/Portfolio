import { useEffect, useRef } from 'react'
import { Box, Typography } from '@mui/material'
import 'react-circular-progressbar/dist/styles.css'

import { useIntersection } from '../../hooks/useIntersection'
import ProjectsContainer from '../ProjectsContainer'
import { useTranslation } from 'react-i18next'
import { useMediaQuery } from '@mui/material'

const Prjects = ({ onVisible }: props) => {
  const small = useMediaQuery('(max-width: 900px)')
  const { t } = useTranslation(['projects', 'common'])
  const ref = useRef<HTMLElement>(null)
  const isVisible = useIntersection(ref, '0px')

  useEffect(() => {
    if (isVisible) onVisible('Projects')
  }, [isVisible])

  return (
    <section
      style={{
        width: '100%',
        height: 'auto',
      }}
      id="Projects"
      ref={ref}
    >
      <Box
        flex={1}
        position="relative"
        top={0}
        left={0}
        width="100%"
        height="auto"
      >
        {/* a partir de este punto se ingresa el contenido */}
        <Box style={{ position: 'relative', zIndex: 2 }}>
          <Box
            sx={{
              pt: '100px',
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'stretch',
                pb: '50px',
              }}
            >
              <Typography
                sx={{
                  fontSize: small ? '2rem' : '4rem',
                  fontWeight: '800',
                  fontFamily: 'Poppins',
                  textAlign: 'center',
                  position: 'relative',
                  top: '0px',
                }}
              >
                {t('project')}
              </Typography>

              <ProjectsContainer onSelection={() => {}} />
            </Box>
          </Box>
        </Box>
      </Box>
    </section>
  )
}

type props = {
  onVisible: React.Dispatch<React.SetStateAction<string>>
}

export default Prjects
