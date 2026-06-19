import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { useIntersection } from '../../hooks/useIntersection'
import { Box, Typography } from '@mui/material'
import { useTheme, alpha } from '@mui/material/styles'
import { parseBoldText } from '../../utils/typoParser'
import { useMediaQuery } from '@mui/material'

const About = ({ onVisible }: props) => {
  const theme = useTheme()
  const small = useMediaQuery('(max-width: 900px)')
  const { t } = useTranslation(['about', 'common'])

  const ref = useRef<HTMLElement>(null)
  const isVisible = useIntersection(ref, '0px')

  useEffect(() => {
    if (isVisible) onVisible('About')
  }, [isVisible])

  return (
    <section
      style={{
        width: '100%',
        marginBottom: '20px',
        paddingTop: '100px',
        paddingBottom: '100px',
      }}
      id="About"
      ref={ref}
    >
      <Box display="flex" justifyContent="center" alignItems="center">
        <Box
          width="90%"
          display="flex"
          flexDirection="column"
          alignItems="center"
          sx={{
            background: alpha(theme.palette.primary.main, 0.7),
            borderRadius: { xs: '0', md: '50px' },
            border: '1px solid rgba(29, 17, 17, 0.1)',
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
          }}
          padding={small ? '10px' : '40px'}
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
            {t('about')}
          </Typography>
          <Box sx={{ width: { xs: '95%', md: '80%' } }}>
            <Typography
              sx={{
                fontSize: '1.2rem',
                textAlign: 'justify',
              }}
            >
              {parseBoldText(t('about_text1'))}
            </Typography>
            <br />
            <Typography
              sx={{
                fontSize: '1.2rem',
                textAlign: 'justify',
              }}
            >
              {parseBoldText(t('about_text2'))}
            </Typography>
          </Box>
        </Box>
      </Box>
    </section>
  )
}

interface props {
  onVisible: React.Dispatch<React.SetStateAction<string>>
}

export default About
