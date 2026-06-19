import { Box, AppBar, Toolbar, Typography, Button } from '@mui/material'

import LinkItem from './LinkItem'

import { useEffect, useState } from 'react'
import MedalsGroup from './MedalsGroup'
import { HashLink } from 'react-router-hash-link'
import { useTranslation } from 'react-i18next'
import { Select } from '@mui/material'
import { MenuItem } from '@mui/material'
import { FormControl } from '@mui/material'

const NavBar = ({ currentSection }: props) => {
  const { t, i18n } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [lang, setLang] = useState('en')

  // Effect to make the navbar transparent when scrolling
  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY > 30) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', scrollHandler)
    return () => {
      window.removeEventListener('scroll', scrollHandler)
    }
  }, [])

  return (
    <Box width="100%">
      <AppBar
        position="fixed"
        color={scrolled ? 'primary' : 'transparent'}
        sx={{
          boxShadow: scrolled
            ? '0px 15px linear-gradient(black, transparent)'
            : 'none',
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'stretch',
          }}
        >
          <Box display="flex" alignItems="flex-end">
            <Typography
              sx={{
                md: 'block',
                sm: 'none',
                xs: 'none',
                marginRight: '1px',
                fontWeight: '800',
                fontFamily: 'Poppins',
                fontSize: { xs: '1.2rem', sm: '2rem', md: '2.5rem' },
              }}
            >
              {scrolled ? ' Juan Pablo' : t('My_Portfolio')}
            </Typography>
            <FormControl size="small">
              <Select
                variant="standard"
                value={lang}
                sx={{
                  color: 'white',
                  fontSize: '0.8rem',
                  p: 0,
                  '& .MuiSelect-icon': {
                    color: 'white',
                  },
                }}
                onChange={(e) => {
                  setLang(e.target.value)
                  i18n.changeLanguage(e.target.value)
                }}
              >
                <MenuItem value="en">en</MenuItem>
                <MenuItem value="es">es</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flex: 2,
            }}
          >
            <LinkItem
              to="/#Home"
              text={t('Home')}
              dir="Home"
              location={currentSection}
            />
            <LinkItem
              to="/#About"
              text={t('About')}
              dir="About"
              location={currentSection}
            />
            <LinkItem
              to="/#Skills"
              text={t('Skills')}
              dir="Skills"
              location={currentSection}
            />
            <LinkItem
              to="/#Projects"
              text={t('Projects')}
              dir="Projects"
              location={currentSection}
            />
          </Box>
          <Box
            sx={{
              display: { xs: 'none', sm: 'none', md: 'flex' },
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {/* Section with links for linkedin and github */}
            <MedalsGroup />
          </Box>
          <Box
            sx={{
              display: { xs: 'none', sm: 'none', md: 'flex' },
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                ml: '5px',
                mr: '5px',
                width: '100%',
                flex: 3,
                display: { xs: 'none', sm: 'none', md: 'flex' },
                justifyContent: 'space-evenly',
              }}
            >
              {/* link to redirect to contact form */}
              <HashLink to="/#Contact">
                <Button
                  sx={{
                    fontSize: { xs: '0.9rem', sm: '0.9rem', md: '1.1rem' },
                    '&:hover': { color: 'primary.light', background: 'white' },
                    whiteSpace: 'nowrap',
                    width: '100%',
                    color: 'white',
                  }}
                  variant="text"
                >
                  {t('lets_talk')}
                </Button>
              </HashLink>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

type props = { currentSection: string }

export default NavBar
