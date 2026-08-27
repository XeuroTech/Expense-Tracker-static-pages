'use client';

import { useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import Reveal from '../common/Reveal';
import proFeatures from '../../data/proFeatures';

// Same hover-to-preview pattern as the home page's Features section, but
// styled with the Pro (orange) accent instead of the site's default red.
export default function ProFeaturesShowcase() {
  const [active, setActive] = useState(0);
  const activeFeature = proFeatures[active];

  const [openMobile, setOpenMobile] = useState(null);

  return (
    <Box>
      {/* Desktop / tablet: interactive list on the left, live screen
          preview on the right — hover a feature to see its screen. */}
      <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 5, alignItems: 'flex-start' }}>
        <Stack spacing={1.25} sx={{ flex: '0 0 44%' }}>
          {proFeatures.map((feature, index) => {
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
                    borderColor: isActive ? '#FFA502' : 'divider',
                    bgcolor: isActive ? 'rgba(255,165,2,0.08)' : 'transparent',
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
                      backgroundImage: isActive ? 'linear-gradient(135deg, #FFA502 0%, #FF6B6B 100%)' : 'none',
                      bgcolor: isActive ? undefined : 'background.paper',
                      transition: 'background-color 0.25s ease',
                    }}
                  >
                    <feature.icon sx={{ color: isActive ? '#fff' : '#FFA502', fontSize: '1.3rem' }} />
                  </Box>
                  <Box>
                    <Typography variant="h6" sx={{ fontSize: '1.02rem', mb: 0.4 }}>
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.88rem' }}>
                      {feature.description}
                    </Typography>
                  </Box>
                </Box>
              </Reveal>
            );
          })}
        </Stack>

        <Box sx={{ flex: 1, position: 'sticky', top: 96, alignSelf: 'flex-start', display: 'flex', justifyContent: 'center' }}>
          <Reveal delay={100}>
            <Box
              sx={{
                maxWidth: 300,
                mx: 'auto',
                borderRadius: 4,
                overflow: 'hidden',
                border: '1px solid',
                borderColor: 'rgba(255,165,2,0.25)',
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
                  // Real screenshots are 591x1280 — show the full screen
                  // uncropped instead of forcing it into a landscape box.
                  aspectRatio: '591 / 1280',
                  objectFit: 'contain',
                  bgcolor: '#0a0a0a',
                  animation: 'proFeatureFadeIn 0.35s ease',
                  '@keyframes proFeatureFadeIn': {
                    from: { opacity: 0.3 },
                    to: { opacity: 1 },
                  },
                }}
              />
            </Box>
          </Reveal>
        </Box>
      </Box>

      {/* Mobile: compact tap-to-expand list. */}
      <Stack spacing={1.5} sx={{ display: { xs: 'flex', md: 'none' } }}>
        {proFeatures.map((feature, index) => {
          const isOpen = openMobile === index;
          return (
            <Reveal key={feature.title} delay={index * 40}>
              <Box
                sx={{
                  border: '1px solid',
                  borderColor: isOpen ? '#FFA502' : 'divider',
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
                    bgcolor: isOpen ? 'rgba(255,165,2,0.08)' : 'transparent',
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
                      backgroundImage: isOpen ? 'linear-gradient(135deg, #FFA502 0%, #FF6B6B 100%)' : 'none',
                      bgcolor: isOpen ? undefined : 'background.paper',
                      transition: 'background-color 0.25s ease',
                    }}
                  >
                    <feature.icon sx={{ color: isOpen ? '#fff' : '#FFA502', fontSize: '1.15rem' }} />
                  </Box>
                  <Box sx={{ flex: 1, minWidth: 0 }}>
                    <Typography variant="h6" sx={{ fontSize: '0.95rem' }}>
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.82rem' }}>
                      {feature.description}
                    </Typography>
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
                  <Box sx={{ p: 2, pt: 0, display: 'flex', justifyContent: 'center' }}>
                    <Box
                      component="img"
                      src={feature.image}
                      alt={`${feature.title} screen preview`}
                      sx={{
                        width: '100%',
                        maxWidth: 220,
                        aspectRatio: '591 / 1280',
                        display: 'block',
                        objectFit: 'contain',
                        bgcolor: '#0a0a0a',
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
    </Box>
  );
}
