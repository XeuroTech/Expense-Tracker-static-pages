import Box from '@mui/material/Box';
import useScrollReveal from '../../hooks/useScrollReveal';

/**
 * Wraps children in a fade/slide-up animation that triggers once the
 * element enters the viewport. `delay` is in milliseconds.
 */
export default function Reveal({ children, delay = 0, sx = {}, ...rest }) {
  const [ref, visible] = useScrollReveal();

  return (
    <Box
      ref={ref}
      className={`reveal${visible ? ' reveal-visible' : ''}`}
      sx={{ transitionDelay: `${delay}ms`, ...sx }}
      {...rest}
    >
      {children}
    </Box>
  );
}
