import { Slide, useScrollTrigger } from '@mui/material'
import { ReactElement } from 'react'

const ScrollableAppBar = ({ children, smallScreen }: props) => {
  const trigger = useScrollTrigger()
  if (smallScreen) {
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    )
  } else {
    return <>{children}</>
  }
}

type props = {
  children: ReactElement
  smallScreen: boolean
}

export default ScrollableAppBar
