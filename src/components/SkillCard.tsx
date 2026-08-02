import { Typography, Card, CardContent, CardMedia } from '@mui/material'

import imageUrl from '../utils/dynamicImport'

const SkillCard = ({ title, image, maxWidth = 200 }: CardProps) => {
  return (
    <Card
      sx={{
        flex: '1 1 30%',
        display: 'flex',
        flexDirection: 'column',
        minWidth: '150px',
        maxWidth: maxWidth,
        height: 'auto',
        p: '10px',
        background: '#e9e9e9',
        justifyContent: 'center',
        alignItems: 'center',
        '&:hover': {
          background: '#d0d0d0',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          transform: 'scale(1.05)',
        },
      }}
    >
      <CardMedia
        component="img"
        alt="skill"
        height="100px"
        image={imageUrl(image)}
        sx={{ width: '100%', objectFit: 'contain' }}
      />
      <CardContent style={{ paddingBottom: '10px' }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          textAlign="center"
        >
          {title}
        </Typography>
      </CardContent>
    </Card>
  )
}

type CardProps = {
  title: string
  body: string
  maxWidth?: number
  image: string
}

export default SkillCard
