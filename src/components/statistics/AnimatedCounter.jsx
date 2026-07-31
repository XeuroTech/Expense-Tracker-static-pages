import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import useScrollReveal from '../../hooks/useScrollReveal';
import useCountUp from '../../hooks/useCountUp';

export default function AnimatedCounter({ value, suffix = '', decimals = 0, label }) {
  const [ref, visible] = useScrollReveal({ threshold: 0.4 });
  const animated = useCountUp(value, { start: visible });

  return (
    <Box ref={ref} sx={{ textAlign: 'center' }}>
      <Typography
        variant="h3"
        sx={{
          color: '#fff',
          fontSize: { xs: '2rem', md: '2.75rem' },
          mb: 0.5,
        }}
      >
        {animated.toFixed(decimals)}
        {suffix}
      </Typography>
      <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.65)' }}>
        {label}
      </Typography>
    </Box>
  );
}
