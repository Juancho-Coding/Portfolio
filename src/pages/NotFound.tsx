import { Box, Button, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

const h1 = {
  display: 'inline-block',
  font: 'Poppins, sans-serif',
  color: '#222',
  fontSize: '10rem',
  letterSpacing: '10px',
  margin: 0,
  fontWeight: '700',
  textShadow: '2px 2px 0 #c9c9c9, -2px -2px 0 #c9c9c9',
}

const Page404 = () => {
  const { t } = useTranslation()
  return (
    <Box
      width="100%"
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      boxSizing="border-box"
      rowGap="10px"
      padding="20px"
    >
      <Box display="flex">
        <Typography variant="h1" sx={h1}>
          4
        </Typography>
        <Typography
          variant="h1"
          sx={{
            ...h1,
            textShadow:
              '2px 2px 0 #ffab00, -2px -2px 0 #ffab00, 0 0 8px #ff8700',
          }}
        >
          0
        </Typography>
        <Typography variant="h1" sx={h1}>
          4
        </Typography>
      </Box>
      <Box>
        <Typography textAlign="center">{t('message_404')}</Typography>
      </Box>
      <Button></Button>
      <a href="/">
        <Button variant="contained">{t('message_404_button')}</Button>
      </a>
    </Box>
  )
}

export default Page404
