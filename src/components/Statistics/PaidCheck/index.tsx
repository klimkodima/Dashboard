import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function CircularProgressWithLabel(props: any) {
  return (
    <Box sx={{ m: 2, position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" {...props} />
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
        }}
      >
        <Typography variant="caption" component="div" color="text.secondary">
          {`${props.value && Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

export default function PaidCheck({ payProgress }: any) {

  return <CircularProgressWithLabel value={payProgress} />;
}