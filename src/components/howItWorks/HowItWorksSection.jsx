import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import SectionHeading from '../common/SectionHeading';
import Reveal from '../common/Reveal';
import StepCard from './StepCard';
import steps from '../../data/steps';

export default function HowItWorksSection() {
  return (
    <Box id="how-it-works" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <SectionHeading
          eyebrow="How It Works"
          title="Get started in five simple steps"
          subtitle="From sign-up to your first report, ExpenseXT keeps the whole process quick and effortless."
        />
        <Grid container spacing={3}>
          {steps.map((item, index) => (
            <Grid key={item.step} size={{ xs: 12, sm: 6, md: 12 / 5 }}>
              <Reveal delay={index * 60} sx={{ height: '100%' }}>
                <StepCard {...item} />
              </Reveal>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
