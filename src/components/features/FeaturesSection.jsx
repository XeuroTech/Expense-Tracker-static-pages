import { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import SectionHeading from '../common/SectionHeading';
import Reveal from '../common/Reveal';
import features from '../../data/features';

export default function FeaturesSection() {
  const [active, setActive] = useState(0);
  const activeFeature = features[active];

  // Mobile uses its own open/closed state (accordion), independent of the
  // hover-driven `active` state used by the desktop layout.
  const [openMobile, setOpenMobile] = useState(null);

  return (
    <Box id="features" sx={{ py: { xs: 8, md: 12 }, overflow: 'hidden' }}>
      <Container maxWidth="lg">
        <SectionHeading
          eyebrow="Features"
          title="Everything you need to manage your money"
          subtitle="Powerful, easy-to-use tools that help you track spending, plan budgets, and understand your finances at a glance."
        />

        {/* Desktop / tablet: interactive list on the left, live screen
            preview on the right — hover a feature to see its screen. */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 5, alignItems: 'flex-start' }}>
          <Stack spacing={1.25} sx={{ flex: '0 0 44%' }}>
            {features.map((feature, index) => {
              const isActive = index === active;
              return (
                <Reveal key={feature.title} delay={index * 40}>
                  <Box
                    onMouseEnter={() => setActive(index)}
                    role="button"
                    tabIndex={0}
                    onFocus={() => setActive(index)}
                    sx={{
                      p: 2,
                      borderRadius: 3,
                      cursor: 'pointer',
                      border: '1px solid',
                      borderColor: isActive ? 'primary.main' : 'divider',
                      bgcolor: isActive ? 'rgba(255,107,107,0.08)' : 'transparent',
                      transition: 'background-color 0.25s ease, border-color 0.25s ease',
                      display: 'flex',
                      gap: 2,
                      alignItems: 'flex-start',
                    }}
                  >
                    <Box
                      sx={{
                        width: 42,
                        height: 42,
                        flexShrink: 0,
                        borderRadius: '13px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        bgcolor: isActive ? 'primary.main' : 'background.paper',
                        transition: 'background-color 0.25s ease',
                      }}
                    >
                      <feature.icon sx={{ color: isActive ? '#fff' : 'primary.main', fontSize: '1.3rem' }} />
                    </Box>
                    <Box>
                      <Typography variant="h6" sx={{ fontSize: '1.02rem', mb: 0.4 }}>
                        {feature.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.88rem' }}>
                        {feature.description}
                      </Typography>
                      {feature.proNote && (
                        <Typography
                          variant="caption"
                          sx={{ display: 'block', mt: 0.5, color: '#FFA502', fontWeight: 600 }}
                        >
                          ✦ {feature.proNote}
                        </Typography>
                      )}
                    </Box>
                  </Box>
                </Reveal>
              );
            })}
          </Stack>

          <Box sx={{ flex: 1, position: 'sticky', top: 96, alignSelf: 'flex-start' }}>
            <Reveal delay={100}>
              <Box
                sx={{
                  borderRadius: 4,
                  overflow: 'hidden',
                  border: '1px solid',
                  borderColor: 'divider',
                  boxShadow: '0 24px 64px rgba(0,0,0,0.4)',
                }}
              >
                <Box
                  key={activeFeature.image}
                  component="img"
                  src={activeFeature.image}
                  alt={`${activeFeature.title} screen preview`}
                  sx={{
                    width: '100%',
                    display: 'block',
                    aspectRatio: '4 / 3',
                    objectFit: 'cover',
                    animation: 'featureFadeIn 0.35s ease',
                    '@keyframes featureFadeIn': {
                      from: { opacity: 0.3 },
                      to: { opacity: 1 },
                    },
                  }}
                />
              </Box>
            </Reveal>
          </Box>
        </Box>

        {/* Mobile: compact tap-to-expand list — tapping a feature pops its
            screenshot open right underneath it, instead of a long scroll of
            cards with every screenshot shown at once. */}
        <Stack spacing={1.5} sx={{ display: { xs: 'flex', md: 'none' } }}>
          {features.map((feature, index) => {
            const isOpen = openMobile === index;
            return (
              <Reveal key={feature.title} delay={index * 40}>
                <Box
                  sx={{
                    border: '1px solid',
                    borderColor: isOpen ? 'primary.main' : 'divider',
                    borderRadius: 3,
                    overflow: 'hidden',
                    transition: 'border-color 0.25s ease',
                  }}
                >
                  <Box
                    onClick={() => setOpenMobile(isOpen ? null : index)}
                    role="button"
                    tabIndex={0}
                    aria-expanded={isOpen}
                    sx={{
                      p: 2,
                      display: 'flex',
                      gap: 1.5,
                      alignItems: 'center',
                      cursor: 'pointer',
                      bgcolor: isOpen ? 'rgba(255,107,107,0.08)' : 'transparent',
                      transition: 'background-color 0.25s ease',
                    }}
                  >
                    <Box
                      sx={{
                        width: 38,
                        height: 38,
                        flexShrink: 0,
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        bgcolor: isOpen ? 'primary.main' : 'background.paper',
                        transition: 'background-color 0.25s ease',
                      }}
                    >
                      <feature.icon sx={{ color: isOpen ? '#fff' : 'primary.main', fontSize: '1.15rem' }} />
                    </Box>
                    <Box sx={{ flex: 1, minWidth: 0 }}>
                      <Typography variant="h6" sx={{ fontSize: '0.95rem' }}>
                        {feature.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.82rem' }}>
                        {feature.description}
                      </Typography>
                      {feature.proNote && (
                        <Typography
                          variant="caption"
                          sx={{ display: 'block', mt: 0.5, color: '#FFA502', fontWeight: 600, fontSize: '0.72rem' }}
                        >
                          ✦ {feature.proNote}
                        </Typography>
                      )}
                    </Box>
                    <ExpandMoreRoundedIcon
                      sx={{
                        flexShrink: 0,
                        color: 'text.secondary',
                        transform: isOpen ? 'rotate(180deg)' : 'none',
                        transition: 'transform 0.25s ease',
                      }}
                    />
                  </Box>
                  <Collapse in={isOpen} timeout={250} unmountOnExit>
                    <Box sx={{ p: 2, pt: 0 }}>
                      <Box
                        component="img"
                        src={feature.image}
                        alt={`${feature.title} screen preview`}
                        sx={{
                          width: '100%',
                          aspectRatio: '4 / 3',
                          display: 'block',
                          objectFit: 'cover',
                          borderRadius: 3,
                          border: '1px solid',
                          borderColor: 'divider',
                        }}
                      />
                    </Box>
                  </Collapse>
                </Box>
              </Reveal>
            );
          })}
        </Stack>
      </Container>
    </Box>
  );
}
