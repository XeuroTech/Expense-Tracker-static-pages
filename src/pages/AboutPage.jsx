import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import Seo from '../components/common/Seo';
import PageHeader from '../components/common/PageHeader';
import SectionHeading from '../components/common/SectionHeading';
import Reveal from '../components/common/Reveal';
import PlaceholderImage from '../components/common/PlaceholderImage';
import values from '../data/values';
import team from '../data/team';

export default function AboutPage() {
  return (
    <>
      <Seo
        title="About Us"
        description="Learn about ExpenseXT's mission, values, and the team building a simpler way to manage personal finances."
        path="/about"
      />
      <PageHeader
        eyebrow="About Us"
        title="Helping people build better money habits"
        subtitle="We're on a mission to make personal finance simple, transparent, and stress-free for everyone."
      />

      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} sx={{ alignItems: 'center' }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Reveal>
                <Typography variant="h3" sx={{ fontSize: { xs: '1.75rem', md: '2.25rem' }, mb: 2 }}>
                  Our Story
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8, mb: 2 }}>
                  ExpenseXT started with a simple frustration: every expense tracker we tried
                  was either too complicated or too limited. So we set out to build the app
                  we always wanted — one that combines powerful budgeting tools with an
                  interface that's genuinely enjoyable to use.
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                  Today, ExpenseXT helps thousands of people track their spending, plan
                  smarter budgets, and reach their savings goals faster — all backed by a
                  team that cares deeply about privacy, security, and great design.
                </Typography>
              </Reveal>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Reveal delay={150}>
                <PlaceholderImage label="About Us Illustration" ratio="4 / 3" />
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
                        backgroundImage: 'linear-gradient(135deg, rgba(91,91,246,0.12) 0%, rgba(16,185,129,0.12) 100%)',
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

      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <SectionHeading
            eyebrow="Our Team"
            title="Meet the people behind ExpenseXT"
            subtitle="A small, focused team dedicated to building the best personal finance experience."
          />
          <Grid container spacing={3}>
            {team.map((member, index) => (
              <Grid key={member.name} size={{ xs: 12, sm: 6, md: 3 }}>
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
                    }}
                  >
                    <Stack spacing={1.5} sx={{ alignItems: 'center' }}>
                      <Avatar sx={{ width: 72, height: 72, bgcolor: 'primary.main', fontSize: '1.5rem', fontWeight: 700 }}>
                        {member.initials}
                      </Avatar>
                      <Typography variant="h6">{member.name}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {member.role}
                      </Typography>
                    </Stack>
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
