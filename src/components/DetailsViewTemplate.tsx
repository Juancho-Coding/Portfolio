import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  alpha,
  AppBar,
  Box,
  Button,
  Chip,
  Divider,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
} from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import { useTranslation } from 'react-i18next'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { useNavigate } from 'react-router-dom'
import dinamicImport from '../utils/dynamicImport'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { ReactElement, ReactNode, useEffect, useState } from 'react'
import Carousel from '../components/Carousel'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { Fab } from '@mui/material'
import { useScrollTrigger } from '@mui/material'
import { Fade } from '@mui/material'
import { Tooltip } from '@mui/material'
import ScrollableAppBar from './ScrollableAppBar'
import VisibilityIcon from '@mui/icons-material/Visibility'

const DetailsViewTemplate = ({
  children,
  banner,
  title,
  subtitle,
  badges,
  links,
  heroText,
  status,
  challenge,
  architecture,
  keyDecision,
  impact,
  stack,
  gallery,
  roadmap,
}: props) => {
  const trigger = useScrollTrigger({ disableHysteresis: true })
  const navigate = useNavigate()
  const small = useMediaQuery('(max-width: 900px)')
  const width = small ? '95%' : '80%'
  const titleSize = small ? 'h5' : 'h3'
  const sectionTitleSize = small ? 'body1' : 'h5'

  const [opened, setOpened] = useState(
    new Array(keyDecision.items.length).fill(false)
  )
  const { t } = useTranslation(['dashboard_page', 'common'])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
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
          right={small ? undefined : '2rem'}
          left={small ? '50%' : undefined}
          sx={small ? { transform: 'translateX(-50%)' } : undefined}
          zIndex="1000"
        >
          {small && (
            <Button
              size="small"
              variant="contained"
              color="secondary"
              sx={{ textTransform: 'none' }}
              onClick={scrollToTop}
            >
              {t('back_top')}
            </Button>
          )}
          {!small && (
            <Tooltip title={t('back_top')} placement="left">
              <Fab
                size={small ? 'small' : 'medium'}
                color="secondary"
                onClick={scrollToTop}
              >
                <KeyboardArrowUpIcon />
              </Fab>
            </Tooltip>
          )}
        </Box>
      </Fade>
      {/* NavBar */}
      <ScrollableAppBar smallScreen={small}>
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
              {title}
            </Typography>
          </Toolbar>
        </AppBar>
      </ScrollableAppBar>

      <Toolbar />
      {/* Banner nad hero */}
      <Box
        sx={{
          mt: '20px',
          display: 'flex',
          flexDirection: small ? 'column' : 'row',
          columnGap: '20px',
          alignItems: 'flex-start',
        }}
      >
        {/* Banner */}
        <Box
          maxHeight={small ? '200px' : '400px'}
          overflow="hidden"
          sx={{
            flex: 1,
            borderRadius: small ? undefined : '0 10px 10px 0',
            boxShadow: '0 0 40px rgba(255, 255, 255, 0.59)',
          }}
        >
          <img
            style={{
              width: '100%',
            }}
            src={dinamicImport(banner)}
            alt="banner project calibration"
          />
        </Box>
        {/* Hero */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            rowGap: '20px',
            p: '10px',
            flex: 1,
          }}
        >
          <Box>
            <Chip
              label={status}
              sx={{
                backgroundColor: '#ff73002f',
                color: '#ff7300',
                border: '1px solid #ff7300a9',
              }}
            />
          </Box>
          <Typography
            variant={titleSize}
            fontFamily="Poppins"
            sx={{ fontWeight: '700' }}
          >
            {title}
          </Typography>
          <Typography variant="body1" fontFamily="Roboto Slab">
            {subtitle}
          </Typography>
          <Box>
            {badges.map((el) => (
              <Chip
                key={el}
                sx={{ mr: '5px', mb: '5px' }}
                label={el}
                color="secondary"
              />
            ))}
          </Box>
          <Box>
            {links.map((el) => {
              return (
                <ButtonLinks
                  key={el.link}
                  link={el.link}
                  type={el.type}
                  textButton={el.textButton}
                />
              )
            })}
          </Box>
        </Box>
      </Box>
      {/* Main content */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '20px',
          rowGap: small ? '30px' : '60px',
        }}
      >
        {/* hero text */}
        <Box width={width}>
          {heroText.split('&').map((el) => {
            return (
              <Typography
                key={el}
                variant="body1"
                sx={{ textAlign: 'justify', mb: '10px' }}
              >
                {el}
              </Typography>
            )
          })}
        </Box>
        <Box width={width} height="1px" borderBottom="1px solid gray"></Box>
        {/* challenge */}
        <Box
          mb="10px"
          sx={{
            display: 'flex',
            flexDirection: small ? 'column' : 'row',
            justifyContent: 'center',
            alignItems: 'center',
            rowGap: '20px',
            columnGap: '40px',
          }}
          width={width}
        >
          <Box flex="1">
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography
                variant="body1"
                mb="10px"
                sx={{ color: 'darkorange' }}
              >
                {t('title_problem')}
              </Typography>
              <Typography variant={sectionTitleSize} mb="10px" fontWeight="800">
                {challenge.title}
              </Typography>
              {challenge.content.split('&').map((el) => {
                return (
                  <Typography
                    key={el}
                    variant="body1"
                    mb="10px"
                    textAlign="justify"
                  >
                    {el}
                  </Typography>
                )
              })}
            </Box>
          </Box>
          <Box flex={1} p="20px" sx={{ height: '100%', width: '100%' }}>
            {challenge.component}
          </Box>
        </Box>
        {/* general info */}
        {challenge.generalInfo && (
          <Box
            width={width}
            sx={{
              borderTop: '1px solid #ffffff5d',
              borderBottom: '1px solid #ffffff5d',
            }}
          >
            <Box
              sx={{
                pt: '30px',
                pb: '30px',
                display: 'flex',
                flexDirection: small ? 'column' : 'row',
                justifyContent: 'space-between',
                columnGap: '20px',
              }}
            >
              {challenge.generalInfo.map((el) => {
                return (
                  <Box
                    key={el.title}
                    sx={{
                      display: 'flex',
                      flexDirection: small ? 'row' : 'column',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Typography variant="body2" sx={{ color: '#ffffff5d' }}>
                      {el.title}
                    </Typography>
                    <Typography>{el.content}</Typography>
                  </Box>
                )
              })}
            </Box>
          </Box>
        )}
        {/* architecture */}
        <Box
          id="architecture"
          mb="20px"
          sx={{
            scrollMarginTop: '80px',
            display: 'flex',
            flexDirection: small ? 'column' : 'row-reverse',
            justifyContent: 'center',
            alignItems: 'flex-start',
            rowGap: '20px',
            columnGap: '40px',
          }}
          width={width}
        >
          <Box flex={1}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography
                variant="body1"
                mb="10px"
                sx={{ color: 'darkorange' }}
              >
                {t('title_architecture')}
              </Typography>
              <Typography variant={sectionTitleSize} mb="10px" fontWeight="800">
                {architecture.title}
              </Typography>
              {architecture.content.split('&').map((el) => {
                return (
                  <Typography
                    key={el}
                    variant="body1"
                    mb="10px"
                    textAlign="justify"
                  >
                    {el}
                  </Typography>
                )
              })}
            </Box>
          </Box>
          <Box
            flex={architecture.component.flexPriority}
            sx={{ height: '100%', width: '100%' }}
          >
            {architecture.component.item}
          </Box>
        </Box>
        {children && children}
        <Box width={width} height="1px" borderBottom="1px solid gray"></Box>
        {/* Key decisions */}
        <Box
          id="key-decisions"
          sx={{
            scrollMarginTop: '80px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          width={width}
        >
          <Box sx={{ width: '100%', mb: '10px' }}>
            <Typography variant="body1" mb="10px" sx={{ color: 'darkorange' }}>
              {t('title_key_decisions')}
            </Typography>
            <Typography variant="body1" textAlign="justify">
              {keyDecision.title}
            </Typography>
          </Box>
          <Box>
            {keyDecision.items.map((el, index) => {
              return (
                <Accordion
                  key={index}
                  expanded={opened[index]}
                  onChange={(_event, expanded) => {
                    setOpened((prev) => {
                      const newArray = [...prev]
                      newArray[index] = expanded
                      return newArray
                    })
                  }}
                  sx={{
                    backgroundColor: opened[index] ? 'white' : 'primary.main',
                  }}
                >
                  <AccordionSummary
                    expandIcon={
                      <ExpandMoreIcon
                        sx={{ color: opened[index] ? 'inherit' : 'white' }}
                      />
                    }
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: small ? 'column' : 'row',
                        width: '100%',
                        columnGap: '5px',
                        rowGap: '2PX',
                      }}
                    >
                      <Typography
                        variant="body1"
                        color={opened[index] ? 'inherit' : 'white'}
                        sx={{ width: small ? '100%' : '50%', flexShrink: 0 }}
                        fontWeight="500"
                      >
                        {el.title}
                      </Typography>
                      {!opened[index] && (
                        <Typography
                          textAlign="left"
                          variant="body2"
                          color={opened[index] ? 'text.secondary' : 'white'}
                        >
                          {el.summary}
                        </Typography>
                      )}
                    </Box>
                  </AccordionSummary>
                  <Divider variant="fullWidth" sx={{ bgcolor: 'gray' }} />
                  <AccordionDetails>
                    {typeof el.content === 'string' && (
                      <Typography
                        color={opened[index] ? 'text.secondary' : 'white'}
                      >
                        {el.content}
                      </Typography>
                    )}
                    {typeof el.content !== 'string' && el.content}
                  </AccordionDetails>
                </Accordion>
              )
            })}
          </Box>
        </Box>
        <Box width={width} height="1px" borderBottom="1px solid gray"></Box>
        {/* impact */}
        {impact && (
          <Box mb="10px" width={width}>
            <Typography variant="body1" mb="10px" sx={{ color: 'darkorange' }}>
              {t('title_impact')}
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: small ? 'column' : 'row',
                justifyContent: 'center',
                alignItems: 'center',
                rowGap: '20px',
                columnGap: '40px',
              }}
            >
              <Box flex={1}>
                {impact.content.map((el) => {
                  return (
                    <Box key={el.title}>
                      <Typography
                        variant={sectionTitleSize}
                        mb="10px"
                        fontWeight="800"
                      >
                        {el.title}
                      </Typography>
                      {el.content.split('&').map((par) => {
                        return (
                          <Typography
                            key={par}
                            variant="body1"
                            mb="10px"
                            textAlign="justify"
                          >
                            {par}
                          </Typography>
                        )
                      })}
                    </Box>
                  )
                })}
              </Box>
              <Box
                flex={1}
                sx={{
                  p: '30px',
                  border: '1px solid gray',
                  borderRadius: '20px',
                  backgroundColor: (theme) =>
                    alpha(theme.palette.primary.dark, 0.8),
                }}
              >
                {impact.keypoints.map((el, index, arr) => {
                  return (
                    <Box
                      key={el.title}
                      sx={{
                        borderBottom:
                          index === arr.length - 1
                            ? undefined
                            : '1px solid #3f3f3f',
                      }}
                    >
                      <Typography
                        variant={small ? 'h5' : 'h3'}
                        mb="10px"
                        sx={{ color: 'darkorange', fontWeight: '700' }}
                      >
                        {el.value}
                      </Typography>
                      <Typography variant="body1" mb="10px" textAlign="justify">
                        {el.title}
                      </Typography>
                    </Box>
                  )
                })}
              </Box>
            </Box>
          </Box>
        )}
        {/* stack */}
        <Box mb="10px" width={width}>
          <Typography variant="body1" mb="10px" sx={{ color: 'darkorange' }}>
            {t('title_stack')}
          </Typography>
          <Typography variant={sectionTitleSize} mb="10px" fontWeight="800">
            {stack.title}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              rowGap: '10px',
              columnGap: '20px',
              flexWrap: 'wrap',
              justifyContent: small ? 'center' : undefined,
            }}
          >
            {stack.items.map((el) => {
              return (
                <Box
                  key={el.title}
                  sx={{
                    width: '200px',
                    maxWidth: '270px',
                    minHeight: '100px',
                    p: '20px',
                    border: '1px solid gray',
                    borderRadius: '20px',
                    backgroundColor: (theme) =>
                      alpha(theme.palette.primary.dark, 0.8),
                  }}
                >
                  <Typography
                    variant="body2"
                    mb="10px"
                    sx={{ color: 'darkorange', letterSpacing: '1px' }}
                  >
                    {el.title}
                  </Typography>
                  <Box>
                    {el.chips.map((chip) => (
                      <Chip
                        key={chip}
                        label={chip}
                        sx={{
                          color: 'white',
                          mr: '5px',
                          mb: '5px',
                          border: '1px solid #525252',
                          backgroundColor: (theme) =>
                            theme.palette.primary.main,
                        }}
                      />
                    ))}
                  </Box>
                </Box>
              )
            })}
          </Box>
        </Box>
        {/* Gallery */}
        {gallery && (
          <Box width="90%" height="400px">
            <Carousel
              images={gallery.images.map((el) => {
                return { ...el, label: t(el.label) }
              })}
              prefix={gallery.prefix}
            />
          </Box>
        )}
        {/* roadmap */}
        {roadmap && (
          <Box mb="10px" width={width}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography
                variant="body1"
                mb="10px"
                sx={{ color: 'darkorange' }}
              >
                {t('title_roadmap')}
              </Typography>
              <Typography variant={sectionTitleSize} mb="10px" fontWeight="800">
                {roadmap.title}
              </Typography>
              {roadmap.items.map((item) => {
                return (
                  <Box key={item.title} sx={{ mb: '25px' }}>
                    <Box display="flex" flexDirection="row" alignItems="center">
                      <span
                        style={{
                          display: 'inline-block',
                          width: '10px',
                          height: '10px',
                          backgroundColor: 'darkorange',
                          borderRadius: '50%',
                          marginRight: '10px',
                        }}
                      />
                      <Typography
                        variant="body1"
                        fontWeight="700"
                        fontFamily="sans-serif"
                      >
                        {item.title}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        ml="20px"
                        textAlign="justify"
                        sx={{ fontSize: '0.9rem', color: 'gray' }}
                      >
                        {item.content}
                      </Typography>
                    </Box>
                  </Box>
                )
              })}
            </Box>
          </Box>
        )}
        {/* links */}
        <Box
          mb="30px"
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {links.map((el) => {
            return (
              <ButtonLinks
                key={el.link}
                link={el.link}
                type={el.type}
                textButton={el.textButton}
              />
            )
          })}
        </Box>
      </Box>
    </Box>
  )
}

type LinkType = 'github' | 'link' | 'internal_link'

type props = {
  children?: ReactNode
  status: string
  banner: string
  title: string
  subtitle: string
  badges: string[]
  links: Array<{
    type: LinkType
    link: string
    textButton: string
  }>
  heroText: string
  challenge: {
    title: string
    content: string
    generalInfo: Array<{ title: string; content: string }> | undefined
    component: ReactNode
  }
  architecture: {
    title: string
    content: string
    component: { item: ReactNode; flexPriority: number }
  }
  keyDecision: {
    title: string
    items: Array<{
      title: string
      summary: string
      content: string | ReactElement
    }>
  }
  impact:
    | {
        keypoints: Array<{ title: string; value: string | number }>
        content: Array<{ title: string; content: string }>
      }
    | undefined
  stack: {
    title: string
    items: Array<{ title: string; chips: Array<string> }>
  }
  gallery:
    | { images: Array<{ img: string; label: string }>; prefix: string }
    | undefined
  roadmap:
    | { title: string; items: Array<{ title: string; content: string }> }
    | undefined
}

export default DetailsViewTemplate

const ButtonLinks = ({
  type,
  link,
  textButton,
}: {
  type: LinkType
  link: string
  textButton: string
}) => {
  const icon =
    type === 'github' ? (
      <GitHubIcon />
    ) : type === 'link' ? (
      <OpenInNewIcon />
    ) : (
      <VisibilityIcon />
    )
  return (
    <Button
      key={link}
      variant="contained"
      startIcon={icon}
      sx={{
        mr: '5px',
        mb: '5px',
        textTransform: 'none',
        backgroundColor: type === 'link' ? 'darkorange' : undefined,
        '&:hover': {
          backgroundColor: type === 'link' ? 'orange' : undefined,
        },
      }}
      onClick={() => {
        if (type === 'internal_link') {
          const id = link.split('#').pop()
          document
            .getElementById(id ?? '')
            ?.scrollIntoView({ behavior: 'smooth' })
        } else {
          window.open(link, '_blank')
        }
      }}
    >
      {textButton}
    </Button>
  )
}
