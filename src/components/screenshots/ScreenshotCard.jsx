'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PhoneFrame from './PhoneFrame';

export default function ScreenshotCard({ image, title, description }) {
  return (
    <Box
      sx={{
        flexShrink: 0,
        width: { xs: 200, sm: 220, md: 240 },
        scrollSnapAlign: 'start',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <PhoneFrame src={image} alt={`${title} screen preview`} />
      <Typography variant="h6" sx={{ mt: 2.5, fontSize: '1rem' }}>
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
        {description}
      </Typography>
    </Box>
  );
}
