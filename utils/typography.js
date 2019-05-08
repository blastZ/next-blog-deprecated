import Typography from 'typography';
import AltonTheme from 'typography-theme-alton';

const typography = new Typography({
  ...AltonTheme,
  baseFontSize: '19px',
  baseLineHeight: 1.65
});

export default typography;
