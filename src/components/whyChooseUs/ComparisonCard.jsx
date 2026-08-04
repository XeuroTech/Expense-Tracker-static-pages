import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

export default function ComparisonCard({ icon: Icon, title, description }) {
  return (
    <Paper
      variant="outlined"
      sx={{
        p: 3,
        height: '100%',
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 4,
        bgcolor: 'background.paper',
        transition: 'box-shadow 0.25s ease, border-color .25s ease',
        '&:hover': { boxShadow: 6, borderColor: 'secondary.main' },
      }}
    >
      <Stack direction="row" spacing={2} sx={{ alignItems: 'flex-start' }}>
        <Box
          sx={{
            width: 46,
            height: 46,
            flexShrink: 0,
            borderRadius: '14px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: 'rgba(78, 205, 196, 0.12)',
          }}
        >
          <Icon sx={{ color: 'secondary.main', fontSize: '1.4rem' }} />
        </Box>
        <Box>
          <Stack direction="row" spacing={0.75} sx={{ mb: 0.5, alignItems: 'center' }}>
            <Typography variant="h6">{title}</Typography>
            <CheckCircleRoundedIcon sx={{ color: 'secondary.main', fontSize: '1.1rem' }} />
          </Stack>
          <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
            {description}
          </Typography>
        </Box>
      </Stack>
    </Paper>
  );
}
