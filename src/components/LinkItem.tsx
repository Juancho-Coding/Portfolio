import { Typography } from '@mui/material'
import { HashLink } from 'react-router-hash-link'

import classes from './LinkItem.module.css'

const LinkItem = ({ to, dir, text, location }: LinkItemProps) => {
  // if the link is clicked change its color
  const selected = location.includes(dir)
  return (
    <HashLink to={to} className={classes.link}>
      <Typography
        sx={{
          fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1.1rem' },
          '&:hover': { color: '#9c9c9c' },
        }}
        className={`${classes.text} ${
          selected ? classes['text-selected'] : ''
        }`}
      >
        {text}
      </Typography>
    </HashLink>
  )
}
type LinkItemProps = { to: string; dir: string; text: string; location: string }

export default LinkItem
