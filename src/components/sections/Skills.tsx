import {
  Box,
  Fade,
  Slide,
  Typography,
  useMediaQuery,
  useTheme,
  Zoom,
} from '@mui/material'
import 'react-circular-progressbar/dist/styles.css'

import SkillCard from '../SkillCard'
import SkillCardHor from '../SkillCardHor'
import { useIntersection } from '../../hooks/useIntersection'
import { forwardRef, useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

const Skills = ({ onVisible }: props) => {
  const theme = useTheme()
  const matchesMd = useMediaQuery(theme.breakpoints.up('md'))
  const { t } = useTranslation(['skill', 'common'])
  const [animate, setAnimate] = useState(false)
  const refContainer = useRef<HTMLElement>(null)

  const ref = useRef<HTMLElement>(null)
  const isVisible = useIntersection(ref, '0px')

  useEffect(() => {
    if (isVisible) {
      onVisible('Skills')
      setAnimate(true)
    }
  }, [isVisible])

  return (
    <section style={{ width: '100%' }} id="Skills" ref={ref}>
      <Box
        sx={{
          flex: 1,
          background: 'linear-gradient(to bottom right, #32534c, black)',
          pt: '140px',
          pb: '140px',
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Fade in={animate} timeout={1000}>
          <Box
            sx={{
              width: '90%',
              background: '#3a3453',
              borderRadius: '30px',
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              alignItems: 'center',
              pb: '50px',
            }}
            ref={refContainer}
          >
            <Typography
              sx={{
                fontSize: !matchesMd ? '2rem' : '4rem',
                fontWeight: '800',
                fontFamily: 'Poppins',
                textAlign: 'center',
                position: 'relative',
                top: '0px',
              }}
            >
              {t('skill')}
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              {/* Section backend */}
              <SkillContaniner
                title="Backend"
                skills={skills_back}
                md={matchesMd}
                animate={animate}
                ref={refContainer}
              />
              {/* Section Frontend */}
              <SkillContaniner
                title="Frontend"
                skills={skills_front}
                md={matchesMd}
                animate={animate}
                ref={refContainer}
              />
              {/* Section db */}
              <SkillContaniner
                title={t('database')}
                skills={skills_db}
                md={matchesMd}
                animate={animate}
                ref={refContainer}
              />
              {/* Section others */}
              <SkillContaniner
                title={t('other')}
                skills={skills_other}
                md={matchesMd}
                animate={animate}
                ref={refContainer}
              />
            </Box>
          </Box>
        </Fade>
      </Box>
    </section>
  )
}

type props = {
  onVisible: React.Dispatch<React.SetStateAction<string>>
}

export default Skills

const SkillContaniner = forwardRef(function SkillContaniner(
  {
    title,
    skills,
    md,
    animate,
  }: {
    title: string
    skills: { title: string; body: string; image: string }[]
    md: boolean
    animate: boolean
  },
  ref
) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      p="15px"
    >
      <Typography variant="h6">{title}</Typography>
      <Box
        mt="10px"
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          rowGap: '10px',
          columnGap: '10px',
          flexWrap: 'wrap',
        }}
      >
        {skills.map((el, index) => {
          return md ? (
            <Slide
              key={el.title}
              container={(ref as React.RefObject<HTMLElement>).current}
              direction="right"
              in={animate}
              timeout={{ enter: 200 * index }}
            >
              <div>
                <SkillCard
                  image={el.image}
                  title={el.title}
                  body={el.body}
                  key={el.title}
                />
              </div>
            </Slide>
          ) : (
            <Zoom in={animate} timeout={{ enter: 150 * index }} key={el.title}>
              <div>
                <SkillCardHor
                  image={el.image}
                  title={el.title}
                  body={el.body}
                  key={el.title}
                />
              </div>
            </Zoom>
          )
        })}
      </Box>
    </Box>
  )
})

const skills_back = [
  { title: 'NodeJS', body: '', image: 'nodejs-icon.svg' },
  { title: 'ExpressJS', body: '', image: 'express.svg' },
  { title: 'JavaScript', body: '', image: 'logo-javascript.svg' },
  { title: 'TypeScript', body: '', image: 'typescript-2.svg' },
]

const skills_front = [
  { title: 'ReactJS', body: '', image: 'react.svg' },
  { title: 'HTML', body: '', image: 'html-1.svg' },
  { title: 'CSS', body: '', image: 'css-3.svg' },
]

const skills_db = [
  { title: 'PostgreSQL', body: '', image: 'postgres.svg' },
  { title: 'MongoDB', body: '', image: 'mongo.svg' },
]

const skills_other = [
  { title: 'Python', body: '', image: 'python.svg' },
  { title: 'Git', body: '', image: 'git.svg' },
  { title: 'LabVIEW', body: '', image: 'labview.svg' },
]
