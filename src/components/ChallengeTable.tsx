import { Box, Table, TableBody, TableCell, TableRow } from '@mui/material'

const ChallengeTable = ({ rows }: props) => {
  return (
    <Box
      sx={{
        minWidth: 200,
        background: '#02001ba1',
        color: 'white',
        border: '1px solid #ffffff44',
        borderRadius: '10px',
        p: '20px',
      }}
    >
      <Table>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={row.text1 + index}
              sx={{
                '& td, & th': { borderBottom: '1px solid #ffffff44' },
                '&:last-child td, &:last-child th': { borderBottom: 0 },
              }}
            >
              <TableCell sx={{ color: '#ffffff81', p: '5px' }}>
                {row.text1}
              </TableCell>
              <TableCell sx={{ color: 'white', p: '5px' }} align="right">
                {row.text2}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  )
}

type props = {
  rows: { text1: string; text2: string }[]
}

export default ChallengeTable
