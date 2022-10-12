import * as React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import styled from 'styled-components'

const Progressstyled = styled.div`{
  .css-eglki6-MuiLinearProgress-root {
    height:15px;
    border-radius:10px;
    
  }
  .css-5xe99f-MuiLinearProgress-bar1 {
    background:linear-gradient(40deg,#FF4137 20%,#FDC800 51%,#FF4137 90%)
  }
  .css-r40f8v-MuiTypography-root {
    font-size:1.875rem;
    color:white
  }
  @media(max-width:1200px) {
    .css-mkmznn {
      width:100% !important
    }
  }
}`

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '80%', mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

export default function Progressbar() {
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 80 ? 80 : prevProgress + 10));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Progressstyled>
      <Box sx={{ width: '100%' }}>
        <LinearProgressWithLabel value={progress} />
      </Box>
    </Progressstyled>
  );
}
