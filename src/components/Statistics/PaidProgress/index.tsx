import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { decorateProgress } from '../../../utils/decorateProgress';

function CircularProgressWithLabel(props: any) {

  const color = decorateProgress(props.value);

  return (
    <Box sx={{
      m: 4, display: 'flex', height: "250px", width: "150px", flexDirection: "column",
      border: "2px solid lightgrey", justifyContent: "center", alignItems: "center", borderRadius: "20px"
    }}>
      <Typography component="h5" variant="h6" sx={{ textAlign: 'center', fontWeight: 'bold' }}>
        Feedback statistics
      </Typography>
      <Box sx={{
        display: 'flex', height: "150px", width: "150px", justifyContent: "center",
        alignItems: "center"
      }}>
        <Box sx={{ position: 'relative', display: 'inline-flex' }}>
          <CircularProgress size={80} variant="determinate" color={color} {...props} />
          <Box
            sx={{
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              position: 'absolute',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              size: 'xl'
            }}
          >
            <Typography variant="caption" component="div" color="text.secondary">
              {`${props.value && Math.round(props.value)}%`}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default function PaidCheck({ paidProgress }: any) {

  return <CircularProgressWithLabel value={paidProgress} />;
}