'use client';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function StepCard({ step, icon: Icon, title, description }) {
  return (
    <Paper
      variant="outlined"
      sx={{
        p: 3,
        height: '100%',
        position: 'relative',
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 4,
        transition: 'transform 0.25s ease, box-shadow 0.25s ease',
        '&:hover': { transform: 'translateY(-6px)', boxShadow: 6 },
      }}
    >
      <Typography
        sx={{
          position: 'absolute',
          top: 12,
          right: 20,
          fontSize: '2.75rem',
          fontWeight: 800,
          color: 'rgba(255, 107, 107, 0.12)',
          lineHeight: 1,
        }}
      >
        {step}
      </Typography>
      <Stack spacing={2}>
        <Box
          sx={{
            width: 52,
            height: 52,
            borderRadius: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundImage: 'linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 100%)',
          }}
        >
          <Icon sx={{ color: '#fff', fontSize: '1.5rem' }} />
        </Box>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
          {description}
        </Typography>
      </Stack>
    </Paper>
  );
}
