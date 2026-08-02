import { useRef, useEffect, useMemo } from 'react'
import { Box, Typography, Button } from '@mui/material'
import { TypeAnimation } from 'react-type-animation'
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined'
import { HashLink } from 'react-router-hash-link'

import { useIntersection } from '../../hooks/useIntersection'
import photo from '../../assets/photo.jpg'
import classes from './Presentation.module.css'
import { useTranslation } from 'react-i18next'

const Presentation = ({ onVisible }: props) => {
  const { t, i18n } = useTranslation(['presentation'])
  const ref = useRef<HTMLElement>(null)
  const isVisible = useIntersection(ref, '0px')

  const sequence = useMemo(
    () => [
      `${t('greeting')} Juan Pablo\n`,
      10,
      `${t('greeting')} Juan Pablo\nBackend Developer ☁️`,
      1000,
      `${t('greeting')} Juan Pablo\nIoT & Real-Time Systems ⚡`,
      1000,
      `${t('greeting')} Juan Pablo\nSystems Integration 💻`,
      1000,
      `${t('greeting')} Juan Pablo\nHardware Meets Software 🛠️`,
      1000,
    ],
    [i18n.language]
  )

  useEffect(() => {
    if (isVisible) onVisible('Home')
  }, [isVisible])

  return (
    <section
      style={{
        width: '100%',
      }}
      ref={ref}
    >
      <Box
        sx={{
          display: 'flex',
          m: { xs: '90px 10px 10px 10px', md: '90px 40px 10px 40px' },
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          height: { xs: '600px', md: '500px' },
        }}
      >
        <Box
          sx={{
            order: { xs: 1, md: 0 },
            width: '100%',
            p: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            flexGrow: 1,
          }}
        >
          <TypeAnimation
            key={i18n.language}
            style={{ whiteSpace: 'pre-line' }}
            className={classes['type-animation']}
            sequence={sequence}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            preRenderFirstString={true}
          />
          <Typography
            sx={{
              color: 'lightgray',
              fontSize: '1.2rem',
              textAlign: 'justify',
            }}
          >
            {t('tagline')}
          </Typography>
          <HashLink to="/#Contact">
            <Button
              sx={{
                color: 'white',
                px: 2,
                py: 1,
                mt: 2,
                textTransform: 'none',
                ':hover': {
                  bgcolor: 'primary.main',
                },
              }}
              endIcon={<ArrowForwardOutlinedIcon />}
              variant="contained"
            >
              {t('lets_talk', { ns: 'common' })}
            </Button>
          </HashLink>
        </Box>
        <Box
          sx={{
            width: '100%',
            overflow: 'hidden',
          }}
        >
          <Box
            className={classes['blurred-image-container']}
            borderRadius="50%"
            overflow="hidden"
            sx={{
              maxHeight: { xs: '300px', md: '500px' },
              maxWidth: { xs: '300px', md: '500px' },
            }}
          >
            <img
              style={{ objectFit: 'cover' }}
              width="100%"
              height="100%"
              src={photo}
              alt="Coding personal"
            />
          </Box>
        </Box>
      </Box>
    </section>
  )
}

type props = {
  onVisible: React.Dispatch<React.SetStateAction<string>>
}

export default Presentation
