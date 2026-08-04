import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';

export default function PageHeader({ eyebrow, title, subtitle }) {
  return (
    <Box
      sx={{
        backgroundImage: 'linear-gradient(160deg, #0A0A0A 0%, #170D0D 55%, #241414 100%)',
        pt: { xs: 12, md: 16 },
        pb: { xs: 7, md: 9 },
        textAlign: 'center',
      }}
    >
      <Container maxWidth="md">
        {eyebrow && (
          <Chip
            label={eyebrow}
            size="small"
            sx={{
              mb: 2.5,
              bgcolor: 'rgba(255,255,255,0.08)',
              color: '#FFC2C2',
              fontWeight: 600,
              border: '1px solid rgba(255,255,255,0.15)',
            }}
          />
        )}
        <Typography variant="h2" sx={{ color: '#fff', fontSize: { xs: '2rem', md: '2.75rem' }, mb: subtitle ? 2 : 0 }}>
          {title}
        </Typography>
        {subtitle && (
          <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.7)', maxWidth: 620, mx: 'auto' }}>
            {subtitle}
          </Typography>
        )}
      </Container>
    </Box>
  );
}
