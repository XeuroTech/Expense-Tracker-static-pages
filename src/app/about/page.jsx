import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import PageHeader from '../../components/common/PageHeader';
import SectionHeading from '../../components/common/SectionHeading';
import Reveal from '../../components/common/Reveal';
import values from '../../data/values';

export const metadata = {
  title: 'About Us',
  description: "Learn about AI Expense Tracker's mission and values, built by XeuroTech to make personal finance simpler for everyone.",
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="Helping people build better money habits"
        subtitle="XeuroTech is on a mission to make personal finance simple, transparent, and stress-free for everyone."
      />

      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} sx={{ alignItems: 'center' }}>
            <Grid size={{ xs: 12 }}>
              <Reveal>
                <Typography variant="h3" sx={{ fontSize: { xs: '1.75rem', md: '2.25rem' }, mb: 2 }}>
                  Our Story
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8, mb: 2, maxWidth: 720 }}>
                  AI Expense Tracker is built by XeuroTech to solve a simple problem: most expense
                  trackers are either too complicated or too limited. Our goal was to build the
                  app we always wanted — one that combines powerful budgeting tools with an
                  interface that's genuinely enjoyable to use.
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8, maxWidth: 720 }}>
                  AI Expense Tracker helps people track their spending, plan smarter budgets, and
                  reach their savings goals faster — with AI doing the heavy lifting on data entry
                  through Smart Add, backed by XeuroTech's commitment to privacy, security, and
                  great design.
                </Typography>
              </Reveal>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <SectionHeading eyebrow="Our Values" title="What we stand for" />
          <Grid container spacing={3}>
            {values.map((value, index) => (
              <Grid key={value.title} size={{ xs: 12, sm: 6, md: 3 }}>
                <Reveal delay={index * 60} sx={{ height: '100%' }}>
                  <Paper
                    variant="outlined"
                    sx={{
                      p: 3,
                      height: '100%',
                      textAlign: 'center',
                      border: '1px solid',
                      borderColor: 'divider',
                      borderRadius: 4,
                      transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                      '&:hover': { transform: 'translateY(-6px)', boxShadow: 6 },
                    }}
                  >
                    <Box
                      sx={{
                        width: 52,
                        height: 52,
                        mx: 'auto',
                        mb: 2,
                        borderRadius: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundImage: 'linear-gradient(135deg, rgba(255,107,107,0.12) 0%, rgba(78,205,196,0.12) 100%)',
                      }}
                    >
                      <value.icon sx={{ color: 'primary.main', fontSize: '1.6rem' }} />
                    </Box>
                    <Typography variant="h6" sx={{ mb: 1 }}>
                      {value.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                      {value.description}
                    </Typography>
                  </Paper>
                </Reveal>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}
