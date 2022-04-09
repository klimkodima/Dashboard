import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const LinearProgressWithLabel = ({ value }: { value: number }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${value && Math.round(
          value,
        )}%`}</Typography>
      </Box>
    </Box>
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