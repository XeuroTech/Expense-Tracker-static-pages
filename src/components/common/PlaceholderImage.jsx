import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';

/**
 * Stand-in for a real screenshot/image asset.
 *
 * Usage: once you have real screenshots, replace the <PlaceholderImage />
 * call with a plain <Box component="img" src="/screenshots/dashboard.png" />
 * — every call site is isolated to one component per section, so swapping
 * assets never requires touching layout code.
 */
export default function PlaceholderImage({
  label = 'Image placeholder',
  ratio = '16 / 10',
  icon: Icon = ImageOutlinedIcon,
  rounded = 20,
  fontSize = '0.95rem',
  ...rest
}) {
  return (
    <Box
      sx={{
        width: '100%',
        aspectRatio: ratio,
        borderRadius: `${rounded}px`,
        border: '1.5px dashed rgba(255, 107, 107, 0.35)',
        background:
          'linear-gradient(135deg, rgba(255, 107, 107, 0.08) 0%, rgba(78, 205, 196, 0.08) 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
      {...rest}
    >
      <Stack spacing={1} sx={{ px: 2, textAlign: 'center', alignItems: 'center' }}>
        <Icon sx={{ fontSize: '2.25rem', color: 'primary.main', opacity: 0.6 }} />
        <Typography variant="body2" sx={{ color: 'primary.main', opacity: 0.7, fontWeight: 600, fontSize }}>
          {label}
        </Typography>
      </Stack>
    </Box>
  );
}
