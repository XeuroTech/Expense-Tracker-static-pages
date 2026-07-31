import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import SectionHeading from '../common/SectionHeading';
import Reveal from '../common/Reveal';
import ScreenshotCard from './ScreenshotCard';
import screenshots from '../../data/screenshots';

export default function ScreenshotsSection() {
  return (
    <Box id="screenshots" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <SectionHeading
          eyebrow="Screenshots"
          title="A closer look inside the app"
          subtitle="Explore the core screens of ExpenseXT. Swap these placeholders for your own screenshots any time."
        />
        <Grid container spacing={3}>
          {screenshots.map((item, index) => (
            <Grid key={item.title} size={{ xs: 12, sm: 6, md: 4 }}>
              <Reveal delay={index * 60} sx={{ height: '100%' }}>
                <ScreenshotCard {...item} />
              </Reveal>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
