import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
  useMediaQuery,
  IconButton,
  Drawer,
  Divider,
  SelectChangeEvent,
} from '@mui/material'

import LinkItem from './LinkItem'

import { useEffect, useState } from 'react'
import MedalsGroup from './MedalsGroup'
import { HashLink } from 'react-router-hash-link'
import { useTranslation } from 'react-i18next'
import { Select } from '@mui/material'
import { MenuItem } from '@mui/material'
import { FormControl } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

const NavBar = ({ currentSection }: props) => {
  const { t, i18n } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [lang, setLang] = useState(i18n.language)
  const small = useMediaQuery('(max-width: 900px)')
  const [open, setOpen] = useState(false)

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

  const langHandler = (e: SelectChangeEvent) => {
    setLang(e.target.value)
    i18n.changeLanguage(e.target.value)
    localStorage.setItem('lang', e.target.value)
  }

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
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {/* title and lang menu */}
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
                onChange={langHandler}
              >
                <MenuItem value="en">en</MenuItem>
                <MenuItem value="es">es</MenuItem>
                <MenuItem value="fr">fr</MenuItem>
              </Select>
            </FormControl>
          </Box>
          {/* links */}
          {!small && (
            <LinksContainer small={small} currentSection={currentSection} />
          )}
          {/* medals */}
          {!small && <Medals />}
          {/* link contact */}
          {!small && (
            <Box
              sx={{
                height: '100%',
                ml: '5px',
                mr: '5px',
              }}
            >
              {/* link to redirect to contact form */}
              <HashLink to="/#Contact">
                <Button
                  sx={{
                    fontSize: { xs: '0.9rem', sm: '0.9rem', md: '1.1rem' },
                    '&:hover': {
                      color: 'primary.light',
                      background: 'white',
                    },
                    whiteSpace: 'nowrap',
                    color: 'white',
                    textTransform: 'none',
                  }}
                  variant="text"
                >
                  {t('lets_talk')}
                </Button>
              </HashLink>
            </Box>
          )}
          {small && (
            <Box>
              <IconButton onClick={() => setOpen(true)}>
                <MenuIcon sx={{ color: 'white' }} />
              </IconButton>
            </Box>
          )}
        </Toolbar>
      </AppBar>
      {/* drawer */}
      <nav>
        <Drawer
          anchor="right"
          container={undefined}
          variant="temporary"
          open={open}
          onClose={() => setOpen(false)}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: small ? 'block' : 'none',
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: '200px',
              backgroundColor: (theme) => theme.palette.primary.main,
            },
          }}
        >
          <Box
            onClick={() => setOpen(false)}
            sx={{
              textAlign: 'center',
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              rowGap: '10px',
            }}
          >
            <Typography
              variant="body1"
              sx={{ my: '10px', color: 'white', fontWeight: '700' }}
            >
              {t('section')}
            </Typography>
            <Divider />
            <LinksContainer small={small} currentSection={currentSection} />
            <Divider />
            <Medals />
          </Box>
        </Drawer>
      </nav>
    </Box>
  )
}

type props = { currentSection: string }

const Medals = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* Section with links for linkedin and github */}
      <MedalsGroup />
    </Box>
  )
}

const LinksContainer = ({
  currentSection,
  small,
}: {
  currentSection: string
  small: boolean
}) => {
  const { t } = useTranslation()
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: small ? 'column' : 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 2,
        rowGap: '5px',
        columnGap: '7px',
      }}
    >
      <LinkItem
        small={small}
        to="/#Home"
        text={t('Home')}
        dir="Home"
        location={currentSection}
      />
      <LinkItem
        small={small}
        to="/#About"
        text={t('About')}
        dir="About"
        location={currentSection}
      />
      <LinkItem
        small={small}
        to="/#Skills"
        text={t('Skills')}
        dir="Skills"
        location={currentSection}
      />
      <LinkItem
        small={small}
        to="/#Projects"
        text={t('Projects')}
        dir="Projects"
        location={currentSection}
      />
    </Box>
  )
}

export default NavBar
