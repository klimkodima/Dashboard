import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';

import { UIGuest } from "../../../types";
import { formatName } from '../../../utils/formatName';
import { deleteFeedback } from "../../../reducers/partyReducer";


const FeedBack = ({ guest }: { guest: UIGuest }) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleClick = () => {
    dispatch(deleteFeedback(guest.id));
    navigate(`/`);
  }

  return (
    <Card sx={{ minWidth: 275, maxWidth: 500, backgroundColor: "#f8f8f8" }}>
      <CardContent>
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <Typography variant="overline" color="text.primary" gutterBottom sx={{ fontWeight: 'bold' }}>
            Name
          </Typography>
          <CardActions sx={{ paddingTop: '0px' }}>
            <Button size="small" color="error" sx={{ textTransform: 'lowercase' }}
              onClick={handleClick}>delete</Button>
          </CardActions>
        </Box>
        <Typography variant="body1" color="text.secondary" sx={{ fontSize: '20px' }}>
          {formatName(guest.name)}
        </Typography>
        <Rating name="read-only" value={guest?.feedback?.rating} readOnly sx={{ my: 1, backgroundColor: "white" }} />
        <br />
        <Typography variant="overline" color="text.primary" sx={{ fontWeight: 'bold' }}>
          Phone
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ fontSize: '20px' }}>
          {guest?.feedback?.phone}
        </Typography>
        <Typography variant="overline" color="text.primary" sx={{ fontWeight: 'bold' }}>
          Comment
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ fontSize: '20px' }}>
          {guest?.feedback?.comment}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default FeedBack;