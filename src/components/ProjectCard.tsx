import { Typography, Card, Box } from '@mui/material'
import { useState } from 'react'
import { ProjectInformation } from '../assets/information'
import imageUrl from '../utils/dynamicImport'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Button } from '@mui/material'
import InfoIcon from '@mui/icons-material/Info'
import classes from './ProjectCard.module.css'

const MotionBox = motion.create(Box)

const ProjectCard = ({ element, onClick }: props) => {
  const [toggled, setToggled] = useState(false)
  const { t } = useTranslation(['projects', 'common'])

  return (
    <Card
      className={classes['card-container']}
      component="div"
      onClick={() => setToggled((prev) => !prev)}
    >
      <MotionBox
        className={classes['hidden-content']}
        sx={{ bgcolor: 'secondary.main' }}
        initial={{ height: 'auto' }}
        animate={{ height: toggled ? '100%' : 'auto' }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        <Typography
          sx={{ color: 'white', cursor: 'pointer' }}
          variant="body1"
          align="center"
        >
          {t(element.title)}
        </Typography>
        {toggled && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <Button
              variant="contained"
              color="primary"
              startIcon={<InfoIcon />}
              sx={{ ml: 2 }}
              onClick={(e) => {
                e.stopPropagation()
                onClick(e, element.id)
              }}
            >
              {t('button_details')}
            </Button>
          </motion.div>
        )}
      </MotionBox>
      <MotionBox
        top="0"
        left="0"
        width="100%"
        height="100%"
        zIndex={1}
        animate={{ height: toggled ? 'auto' : '100%' }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        <img width="100%" src={imageUrl(element.image)} alt="project" />
      </MotionBox>
    </Card>
  )
}

type props = {
  onClick: (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    key: string
  ) => void
  element: ProjectInformation
}

export default ProjectCard
