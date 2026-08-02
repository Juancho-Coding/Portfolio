import { useRef, useEffect } from 'react'
import { Box, Link, Typography, useMediaQuery } from '@mui/material'

import { useIntersection } from '../../hooks/useIntersection'
import ContactForm from '../ContactForm'
import coding from '../../assets/profile.webp'

const Contact = ({ onVisible }: props) => {
  const ref = useRef<HTMLElement>(null)
  const isVisible = useIntersection(ref, '0px')
  const small = useMediaQuery('(max-width: 900px)')

  useEffect(() => {
    if (isVisible) onVisible('Contacts')
  }, [isVisible])

  return (
    <section
      style={{
        width: '100%',
      }}
      id="Contact"
      ref={ref}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: small ? 'column' : 'row',
          p: '30px',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          gap: '20px',
          background: 'linear-gradient(to bottom right, #32534c, black)',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box
            borderRadius="50%"
            overflow="hidden"
            sx={{
              display: { xs: 'none', md: 'block' },
              maxHeight: '200px',
              maxWidth: '200px',
            }}
          >
            <img
              style={{ objectFit: 'cover' }}
              width="100%"
              height="100%"
              src={coding}
              alt="Personal contact"
            />
          </Box>
          <Box textAlign="center">
            <Typography variant="h6">
              Juan Pablo Alvarez · Backend Developer
            </Typography>
            <Link
              href="mailto:juanpabloalvarezovalle@gmail.com"
              underline="hover"
              color="inherit"
            >
              📧 juanpabloalvarezovalle@gmail.com
            </Link>
            <Typography variant="body2">
              📍 Bogotá, Colombia GMT-5 · Remote
            </Typography>
            <Typography variant="body2">
              {'Open to Backend roles Usually replies in <24h'}
            </Typography>
          </Box>
        </Box>
        <Box>
          <ContactForm />
        </Box>
      </Box>
    </section>
  )
}

type props = {
  onVisible: React.Dispatch<React.SetStateAction<string>>
}

export default Contact
