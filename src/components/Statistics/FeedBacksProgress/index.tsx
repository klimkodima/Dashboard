import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { decorateProgress } from '../../../utils/decorateProgress';

const LinearProgressWithLabel = (props:any) => {

  const color = decorateProgress(props.value);

  return (
    <Box sx={{  display: 'flex', height: "250px", flexDirection: "column", mr: 2,
      border: "2px solid lightgrey", justifyContent: "center", alignItems: "center", borderRadius: "20px"
    }}>
      <Typography component="h5" variant="h6" sx={{ p: 4, textAlign: 'center', fontWeight: 'bold' }}>
        Paid statistics
      </Typography>
      <Box sx={{ p: 4,  width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Box sx={{ width: '90%', height: 'auto', mt: 4 }}>
          <LinearProgress thickness={6} variant="determinate" color={color} {...props}/>
        </Box>
        <Box sx={{ width: '5%', }}>
          <Typography variant="body2" color="text.secondary">{`${props.value && Math.round(
            props.value,
          )}%`}</Typography>
        </Box>
      </Box>
    </Box >
  );
}

const FillFeedBacks = ({ feedbackProgress }: { feedbackProgress: number }) => {

  return (
    <Box sx={{ m: 2, width: '80%' }}>
      <LinearProgressWithLabel value={feedbackProgress} />
    </Box>
  );
}

export default FillFeedBacks;