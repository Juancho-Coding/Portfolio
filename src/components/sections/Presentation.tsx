import { useRef, useEffect, useMemo } from 'react'
import { Box, Typography, Button } from '@mui/material'
import { TypeAnimation } from 'react-type-animation'
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined'
import { HashLink } from 'react-router-hash-link'

import { useIntersection } from '../../hooks/useIntersection'
import coding from '../../assets/profile.webp'
import classes from './Presentation.module.css'
import { useTranslation } from 'react-i18next'

const Presentation = ({ onVisible }: props) => {
  const { t } = useTranslation(['presentation', 'common'])
  const message = useMemo(() => t('tagline'), [])

  const ref = useRef<HTMLElement>(null)
  const isVisible = useIntersection(ref, '0px')

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
            style={{ whiteSpace: 'pre-line' }}
            className={classes['type-animation']}
            sequence={[
              `${t('greeting')} Juan Pablo\n`,
              10,
              `${t('greeting')} Juan Pablo\nBackend Developer 😎`,
              1000,
              `${t('greeting')} Juan Pablo\nFrontend Developer 🎨`,
              1000,
              `${t('greeting')} Juan Pablo\nLabVIEW Developer 💻`,
              1000,
              `${t('greeting')} Juan Pablo\nElectronics Engineer 🛠️`,
              1000,
            ]}
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
            {message}
          </Typography>
          <HashLink to="/#Contact">
            <Button
              sx={{
                color: 'white',
                px: 2,
                py: 1,
                mt: 2,
                ':hover': {
                  bgcolor: 'primary.main',
                },
              }}
              endIcon={<ArrowForwardOutlinedIcon />}
              variant="text"
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
              src={coding}
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
