'use client';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import plans from '../../data/plans';

// Three side-by-side plan cards mirroring the app's real Subscription
// screen — Free, Pro Monthly, Pro Yearly — each with its own price and
// feature list, instead of a single free-vs-pro comparison grid.
export default function PlanCards() {
  return (
    <Grid container spacing={3}>
      {plans.map((plan) => {
        const isPro = plan.name !== 'Free';
        return (
          <Grid key={plan.name} size={{ xs: 12, sm: 6, md: 4 }}>
            <Card
              variant="outlined"
              sx={{
                height: '100%',
                p: 3,
                border: '1px solid',
                borderColor: isPro ? 'rgba(255,165,2,0.3)' : 'divider',
                bgcolor: 'background.paper',
              }}
            >
              <Typography variant="h6" sx={{ fontSize: '1.1rem', mb: 0.5 }}>
                {plan.name}
              </Typography>
              <Stack direction="row" sx={{ alignItems: 'baseline', mb: 2.5 }}>
                <Typography
                  variant="h4"
                  sx={{ fontWeight: 700, color: isPro ? '#FFA502' : 'text.primary', fontSize: '1.9rem' }}
                >
                  {plan.price}
                </Typography>
                {plan.period && (
                  <Typography variant="body2" color="text.secondary" sx={{ ml: 0.5 }}>
                    {plan.period}
                  </Typography>
                )}
              </Stack>
              <Stack spacing={1.25}>
                {plan.features.map((feature) => (
                  <Box key={feature} sx={{ display: 'flex', gap: 1, alignItems: 'flex-start' }}>
                    <CheckCircleRoundedIcon
                      sx={{ fontSize: '1.1rem', mt: '2px', color: isPro ? '#FFA502' : 'primary.main', flexShrink: 0 }}
                    />
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.5 }}>
                      {feature}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}
