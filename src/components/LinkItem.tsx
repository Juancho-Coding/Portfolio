import { Box, Typography } from '@mui/material'
import { HashLink } from 'react-router-hash-link'

import classes from './LinkItem.module.css'

const LinkItem = ({ to, dir, text, location, small }: LinkItemProps) => {
  // if the link is clicked change its color
  const selected = location.includes(dir)
  const className = small
    ? `${classes.text_small} ${selected ? classes['text_small-selected'] : ''}`
    : `${classes.text} ${selected ? classes['text-selected'] : ''}`

  return (
    <Box width={small ? '100%' : undefined}>
      <HashLink to={to} className={classes.link}>
        <Typography
          sx={{
            fontSize: small ? '0.9rem' : '1.1rem',
            '&:hover': { color: '#9c9c9c' },
          }}
          className={className}
        >
          {text}
        </Typography>
      </HashLink>
    </Box>
  )
}
type LinkItemProps = {
  to: string
  dir: string
  text: string
  location: string
  small: boolean
}

export default LinkItem
