import React, { useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import dinamicImport from '../utils/dinamicImport'
import { Box } from '@mui/material'
import classes from './Carousel.module.css'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { Typography } from '@mui/material'

export type images = {
  img: string
  label: string
}

const Carousel = ({ images, prefix }: { images: images[]; prefix: string }) => {
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      mode: 'snap',
      initial: 0,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel)
      },
      created() {
        setLoaded(true)
      },
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 5000)
        }
        slider.on('created', () => {
          slider.container.addEventListener('mouseover', () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener('click', () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener('mouseout', () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on('dragStarted', clearNextTimeout)
        slider.on('animationEnded', nextTimeout)
        slider.on('updated', nextTimeout)
      },
    ]
  )

  return (
    <>
      <Box width="100%" height="100%" overflow="hidden" position="relative">
        <div ref={sliderRef} className="keen-slider" style={{ height: '100%' }}>
          {images.map((el) => {
            return (
              <Box
                className="keen-slider__slide"
                width="100%"
                height="100%"
                key={el.img}
                textAlign="center"
                position="relative"
                paddingTop="30px"
              >
                <img
                  style={{ height: '100%', objectFit: 'cover' }}
                  src={dinamicImport(`${prefix}/${el.img}`)}
                />
                <Typography
                  sx={{
                    position: 'absolute',
                    top: '0',
                    left: '50%',
                    transform: 'translatex(-50%)',
                    fontStyle: 'italic',
                    width: '100%',
                  }}
                >
                  {el.label}
                </Typography>
              </Box>
            )
          })}
        </div>

        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </Box>
    </>
  )
}

const Arrow = (props: {
  disabled: boolean
  left?: boolean
  onClick: (e: any) => void
}) => {
  const disabled = props.disabled ? classes['arrow--disabled'] : ''
  return props.left ? (
    <ArrowBackIosNewIcon
      className={`${classes.arrow} ${classes['arrow--left']} ${disabled}`}
      fontSize="large"
      color="warning"
      onClick={props.onClick}
    />
  ) : (
    <ArrowForwardIosIcon
      className={`${classes.arrow} ${classes['arrow--right']} ${disabled}`}
      fontSize="large"
      color="warning"
      onClick={props.onClick}
    />
  )
}

export default Carousel
