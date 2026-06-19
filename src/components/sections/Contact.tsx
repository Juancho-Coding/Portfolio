import { useRef, useEffect } from 'react'
import { Box } from '@mui/material'

import { useIntersection } from '../../hooks/useIntersection'
import ContactForm from '../ContactForm'
import contact from '../../assets/contact.png'

const Contact = ({ onVisible }: props) => {
  const ref = useRef<HTMLElement>(null)
  const isVisible = useIntersection(ref, '0px')

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
          flexDirection: 'row',
          p: '30px',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          gap: '20px',
          background: 'linear-gradient(to bottom right, #32534c, black)',
        }}
      >
        <Box sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
          <img src={contact} alt="contact info" />
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
