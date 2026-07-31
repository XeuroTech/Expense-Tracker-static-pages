import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import AnimatedCounter from './AnimatedCounter';
import statistics from '../../data/statistics';

export default function StatisticsSection() {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 10 },
        backgroundImage: 'linear-gradient(135deg, #0B0B1E 0%, #232370 100%)',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {statistics.map((stat) => (
            <Grid key={stat.label} size={{ xs: 6, md: 3 }}>
              <AnimatedCounter {...stat} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
