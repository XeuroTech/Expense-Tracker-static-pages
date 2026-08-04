import Box from '@mui/material/Box';

// A CSS phone bezel wrapping a portrait app-screen image, so screenshots
// read as "the app open on a phone" rather than a flat cropped picture.
export default function PhoneFrame({ src, alt }) {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        aspectRatio: '300 / 628',
        borderRadius: '44px',
        bgcolor: '#0a0a0a',
        border: '1px solid rgba(255,255,255,0.08)',
        boxShadow: '0 24px 60px rgba(0,0,0,0.5)',
        p: '14px 8px',
      }}
    >
      {/* Screen */}
      <Box
        component="img"
        src={src}
        alt={alt}
        sx={{
          width: '100%',
          height: '100%',
          display: 'block',
          borderRadius: '34px',
          objectFit: 'cover',
        }}
      />

      {/* Notch */}
      <Box
        sx={{
          position: 'absolute',
          top: 6,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 56,
          height: 14,
          borderRadius: '7px',
          bgcolor: '#000',
        }}
      />

      {/* Home indicator */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 6,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 74,
          height: 4,
          borderRadius: '2px',
          bgcolor: 'rgba(255,255,255,0.35)',
        }}
      />

      {/* Side buttons */}
      <Box sx={{ position: 'absolute', left: -2, top: '18%', width: 3, height: 26, borderRadius: '2px', bgcolor: 'rgba(255,255,255,0.15)' }} />
      <Box sx={{ position: 'absolute', left: -2, top: '28%', width: 3, height: 40, borderRadius: '2px', bgcolor: 'rgba(255,255,255,0.15)' }} />
      <Box sx={{ position: 'absolute', right: -2, top: '22%', width: 3, height: 46, borderRadius: '2px', bgcolor: 'rgba(255,255,255,0.15)' }} />
    </Box>
  );
}
