import { useEffect, useRef } from 'react';
import Typography from '@material-ui/core/Typography';

const ImageBar = ({ src, content, styles, children }) => {
  return (
    <div
      style={{
        width: '100%',
        height: 408,
        marginTop: 56,
        position: 'relative',
        overflow: 'hidden',
        ...styles
      }}>
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          background: `url('/static/bg.jpg')`,
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      />
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '0 64px'
        }}>
        <Typography
          style={{
            color: '#fff',
            filter: 'none'
          }}
          variant="h5">
          {content}
        </Typography>
        {children}
      </div>
    </div>
  );
};

export default ImageBar;
