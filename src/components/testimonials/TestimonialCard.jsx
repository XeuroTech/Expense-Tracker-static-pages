import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import FormatQuoteRoundedIcon from '@mui/icons-material/FormatQuoteRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';

export default function TestimonialCard({ name, role, initials, rating, quote }) {
  return (
    <Paper
      variant="outlined"
      sx={{
        p: 3.5,
        height: '100%',
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 4,
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease',
        '&:hover': { transform: 'translateY(-6px)', boxShadow: 6 },
      }}
    >
      <FormatQuoteRoundedIcon sx={{ color: 'primary.main', opacity: 0.25, fontSize: '2.5rem', mb: 1 }} />
      <Typography variant="body1" color="text.secondary" sx={{ flex: 1, lineHeight: 1.8, mb: 3 }}>
        “{quote}”
      </Typography>
      <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center' }}>
        <Avatar sx={{ bgcolor: 'primary.main', fontWeight: 700 }}>{initials}</Avatar>
        <Stack sx={{ flex: 1 }}>
          <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
            {name}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {role}
          </Typography>
        </Stack>
        <Stack direction="row" spacing={0.25}>
          {Array.from({ length: rating }).map((_, i) => (
            <StarRoundedIcon key={i} sx={{ color: '#FBBF24', fontSize: '1rem' }} />
          ))}
        </Stack>
      </Stack>
    </Paper>
  );
}
