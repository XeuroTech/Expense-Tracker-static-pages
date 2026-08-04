import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import planComparison from '../../data/planComparison';

function Cell({ value, accent }) {
  if (value === true) {
    return <CheckCircleRoundedIcon sx={{ color: accent, fontSize: '1.15rem' }} />;
  }
  if (value === false) {
    return <RemoveRoundedIcon sx={{ color: 'text.secondary', opacity: 0.4, fontSize: '1.15rem' }} />;
  }
  return (
    <Typography
      variant="body2"
      sx={{ fontWeight: 600, color: accent || 'text.primary', fontSize: { xs: '0.78rem', sm: '0.875rem' } }}
    >
      {value}
    </Typography>
  );
}

export default function PlanComparisonTable() {
  return (
    <TableContainer
      sx={{
        borderRadius: 3,
        border: '1px solid',
        borderColor: 'divider',
        overflowX: 'auto',
      }}
    >
      <Table size="small" sx={{ minWidth: 360 }}>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 700, borderColor: 'divider', fontSize: { xs: '0.78rem', sm: '0.9rem' } }}>
              Feature
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: 700, borderColor: 'divider', fontSize: { xs: '0.78rem', sm: '0.9rem' } }}>
              Free
            </TableCell>
            <TableCell
              align="center"
              sx={{
                fontWeight: 700,
                borderColor: 'divider',
                fontSize: { xs: '0.78rem', sm: '0.9rem' },
                bgcolor: 'rgba(255,165,2,0.1)',
                color: '#FFA502',
              }}
            >
              Pro
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {planComparison.map((row) => (
            <TableRow key={row.feature} sx={{ '&:last-child td': { borderBottom: 0 } }}>
              <TableCell sx={{ borderColor: 'divider', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>
                {row.feature}
              </TableCell>
              <TableCell align="center" sx={{ borderColor: 'divider' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Cell value={row.free} />
                </Box>
              </TableCell>
              <TableCell align="center" sx={{ borderColor: 'divider', bgcolor: 'rgba(255,165,2,0.04)' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Cell value={row.pro} accent="#FFA502" />
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
