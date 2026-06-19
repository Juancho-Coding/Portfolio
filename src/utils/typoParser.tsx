import { Typography } from '@mui/material'

export function parseBoldText(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      const clean = part.slice(2, -2)
      return (
        <Typography
          key={index}
          component="span"
          fontWeight="800"
          fontSize="1.4rem"
          display="inline"
        >
          {clean}
        </Typography>
      )
    }
    return <span key={index}>{part}</span>
  })
}
