import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  AppBar,
  Box,
  Divider,
  IconButton,
  Paper,
  Toolbar,
  Typography,
  useMediaQuery,
} from '@mui/material'
import { useTranslation } from 'react-i18next'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { useNavigate } from 'react-router-dom'
import dinamicImport from '../utils/dinamicImport'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import { motion, AnimatePresence } from 'framer-motion'

import classes from './LabDashboard.module.css'
import { useEffect, useState } from 'react'
import { Card } from '@mui/material'
import Markdown from 'react-markdown'
import Carousel from '../components/Carousel'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { Fab } from '@mui/material'
import { useScrollTrigger } from '@mui/material'
import { Fade } from '@mui/material'
import { Tooltip } from '@mui/material'

const CalibrationBench = () => {
  const [opened, setOpened] = useState([true, false, false, false, false])
  const { t } = useTranslation(['calibration_page', 'common'])
  const navigate = useNavigate()
  const trigger = useScrollTrigger()
  const small = useMediaQuery('(max-width: 900px)')
  const width = small ? '95%' : '80%'
  const sectionTitleSize = small ? 'h5' : 'h3'

  useEffect(() => {
    scrollToTop()
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <Box>
      <Fade in={trigger}>
        <Box
          position="fixed"
          bottom={small ? '5px' : '2rem'}
          right={small ? '5px' : '2rem'}
          zIndex="1000"
        >
          <Tooltip title={t('back_top')} placement="left">
            <Fab
              size={small ? 'small' : 'medium'}
              color="secondary"
              onClick={scrollToTop}
            >
              <KeyboardArrowUpIcon />
            </Fab>
          </Tooltip>
        </Box>
      </Fade>
      {/* NavBar */}
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => {
              navigate(-1)
            }}
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography
            variant={small ? 'body1' : 'h6'}
            component="div"
            width="100%"
            textAlign="center"
          >
            {t('title')}
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
      {/* Banner */}
      <Box maxHeight={small ? '200px' : '400px'} overflow="hidden">
        <img
          style={{
            width: '100%',
          }}
          src={dinamicImport('project-calibration/banner-calibration.webp')}
          alt="banner project calibration"
        />
      </Box>
      {/* Main content */}
      <Box
        className={classes['content_container']}
        rowGap={small ? '10px' : '30px'}
      >
        {/* Summary */}
        <Box className={classes['section_summary']} width={width}>
          <Typography variant={sectionTitleSize} mb="10px" fontWeight="800">
            {t('title_summary')}
          </Typography>
          {t('summary')
            .split('_')
            .map((el) => {
              return (
                <>
                  <Typography
                    key={el}
                    sx={{ textAlign: 'justify' }}
                    variant="body1"
                  >
                    {el}
                  </Typography>
                  <br />
                </>
              )
            })}
        </Box>
        {/* Gallery -- falta */}
        <Box width="90%" height="400px">
          <Carousel
            images={images.map((el) => {
              return { ...el, label: t(el.label) }
            })}
            prefix="project-calibration"
          />
        </Box>
        {/* Objectives and challenges */}
        <Box className={classes['section_summary']} width={width}>
          <Typography variant={sectionTitleSize} mb="10px" fontWeight="800">
            {t('objetives_challenges_title')}
          </Typography>
          <Box
            className={classes['section_obj_chal']}
            flexDirection={small ? 'column' : 'row'}
          >
            <Box>
              <BulletPointCard
                title={t('objectives_title')}
                points={t('objectives_content')}
              />
            </Box>
            <Box>
              <BulletPointCard
                title={t('challenges_title')}
                points={t('challenges_content')}
              />
            </Box>
          </Box>
        </Box>
        {/* Implemented Solution */}
        <Box className={classes['section_summary']} width={width}>
          <Typography variant={sectionTitleSize} mb="10px" fontWeight="800">
            {t('solutions_title')}
          </Typography>
          <Box>
            {[1, 2, 3, 4, 5].map((el, index) => {
              return (
                <Accordion
                  key={'' + index + el}
                  expanded={opened[index]}
                  onChange={(event, expanded) => {
                    setOpened((prev) => {
                      const newArray = [...prev]
                      newArray[index] = expanded
                      return newArray
                    })
                  }}
                  sx={{
                    backgroundColor: opened[index] ? 'primary.main' : 'white',
                  }}
                >
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography
                      component="span"
                      color={opened[index] ? 'white' : 'inherit'}
                      sx={{ width: '40%', flexShrink: 0 }}
                      fontWeight="500"
                    >
                      {t(`solutions_title_${el}`)}
                    </Typography>
                    <Typography
                      component="span"
                      textAlign="left"
                      color={opened[index] ? 'white' : 'text.secondary'}
                    >
                      {t(`solutions_description_${el}`)}
                    </Typography>
                  </AccordionSummary>
                  <Divider variant="fullWidth" sx={{ bgcolor: 'gray' }} />
                  <AccordionDetails>
                    <Typography
                      color={opened[index] ? 'white' : 'text.secondary'}
                    >
                      {t(`solutions_content_${el}`)}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              )
            })}
          </Box>
        </Box>
        {/* Structure */}
        <Box className={classes['section_summary']} width={width}>
          <Typography variant={sectionTitleSize} mb="10px" fontWeight="800">
            {t('structure_title')}
          </Typography>
          <BuildingBlocks prefix="project-calibration" small={small} />
        </Box>
      </Box>
    </Box>
  )
}

const images = [
  { img: 'image1.webp', label: 'label_image1' },
  { img: 'image2.webp', label: 'label_image2' },
  { img: 'image3.webp', label: 'label_image3' },
  { img: 'image4.webp', label: 'label_image4' },
  { img: 'image5.webp', label: 'label_image5' },
  { img: 'image6.webp', label: 'label_image6' },
  { img: 'image7.webp', label: 'label_image7' },
]

const BulletPointCard = (props: { title: string; points: string }) => {
  const [hover, setHover] = useState(false)
  return (
    <Paper
      className={classes['paper_card']}
      elevation={hover ? 20 : 3}
      component="div"
      sx={{
        boxShadow: `0px 0px 20px rgba(255, 255, 255,${hover ? '1' : '0.1'})`,
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Typography variant="h5" mb="10px" textAlign="center">
        {props.title}
      </Typography>
      {props.points.split('_').map((el) => {
        return (
          <Typography key={el} mb="10px" textAlign="justify">
            {el}
          </Typography>
        )
      })}
    </Paper>
  )
}

const BuildingBlocks = (props: { prefix: string; small: boolean }) => {
  const { t } = useTranslation(['dashboard_page', 'common'])
  const [order, setOrder] = useState(['frontend', 'backend', 'database'])
  const [selected, setSelected] = useState('frontend')
  const [expanded, setExpanded] = useState(false)

  const clickHandler = (element: string) => {
    setOrder((prev) => {
      const firstEl = prev.filter((el) => el === element)
      const othersEL = prev.filter((el) => el !== element)
      return [...firstEl, ...othersEL]
    })
  }

  return (
    <Box
      width="100%"
      display="flex"
      flexDirection={props.small ? 'column' : 'row'}
      gap="10px"
    >
      <Box
        display="flex"
        flexDirection={props.small ? 'row' : 'column'}
        gap="10px"
        sx={{ overflowX: props.small ? 'auto' : 'none' }}
      >
        {order.map((el) => (
          <motion.div layout whileHover={{ scale: 1.1 }} key={el}>
            <Card
              sx={{
                width: '100px',
                height: '100px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
                backgroundColor: selected === el ? 'lightgray' : '',
              }}
              onClick={() => {
                clickHandler(el)
                setSelected(el)
              }}
            >
              <img
                width="50%"
                src={dinamicImport(`${props.prefix}/${el}.svg`)}
              ></img>
              <Typography>{t(el)}</Typography>
            </Card>
          </motion.div>
        ))}
      </Box>
      <Box flexGrow={2}>
        <AnimatePresence mode="wait">
          <motion.div
            key={selected}
            initial={{ opacity: 0, x: 0 }}
            animate={{
              opacity: 1,
              x: 0,
              height: props.small ? (expanded ? '100%' : '400px') : '100%',
            }}
            exit={{ opacity: 0, x: 0 }}
            transition={{ duration: 0.3 }}
            style={{ width: '100%' }}
          >
            <Card
              sx={{
                width: '100%',
                height: '100%',
                bgcolor: 'lightgray',
                position: 'relative',
              }}
            >
              <Box padding="10px">
                <Typography variant="h5" textAlign="center">
                  {t(selected)}
                </Typography>
                <Markdown>{t(selected + '_structure')}</Markdown>
              </Box>
              {props.small && (
                <Box width="100%" position="absolute" bottom="0">
                  <IconButton
                    onClick={() => {
                      setExpanded((p) => !p)
                    }}
                  >
                    {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                  </IconButton>
                </Box>
              )}
            </Card>
          </motion.div>
        </AnimatePresence>
      </Box>
    </Box>
  )
}

export default CalibrationBench
