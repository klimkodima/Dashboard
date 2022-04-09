import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import FormHelperText from '@mui/material/FormHelperText';
import OutlinedInput from '@mui/material/OutlinedInput';
import { useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAppSelector } from '../../../hooks/hooks';
import { useDispatch } from 'react-redux';

import { UIGuest, Feedback, FormField } from '../../../types';
import { formatName } from '../../../utils/formatName';
import { addFeedback } from '../../../reducers/partyReducer';
import AddedFields from './AddedFields';
import { useGuestContext } from '../../../contexts/GuestContext';


const initialValues = {
  phone: '',
  rating: 3,
  comment: ''
};

const phoneRegExp = /^[()+ 0-9]{3,10}$/g;

const validationSchema = Yup.object().shape({
  phone: Yup.string()
    .min(3, 'Phone should be of minimum 3 characters length')
    .max(10, 'Phone should be of maximum 10 characters length')
    .matches(phoneRegExp, {
      message: "Enter a valid phone",
      excludeEmptyString: false,
    }),
  comment: Yup.string()
    .required('Comment is required'),
});

const FeedBackForm = ({ guest, showFieldForm }: { guest: UIGuest, showFieldForm: () => void }) => {


  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { setGuest, } = useGuestContext();

  const formFields: FormField[] = useAppSelector(state => state.party.formFields);

  const handleSubmit = (values: Feedback) => {
    const feedBack = { ...values, rating: Number(values.rating) };
    dispatch(addFeedback(feedBack, guest.id));
    setGuest(guest);
  };

  const handleCancel = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    navigate('/');
  }


  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  const phoneError = Boolean(formik.errors.phone);
  const commentError = Boolean(formik.errors.comment);

  return (
    <Box sx={{ p: 4, minWidth: 275, maxWidth: 768, backgroundColor: "#f8f8f8" }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography component="h1" variant="h5" sx={{ textAlign: 'center', fontWeight: 'bold' }}>
          Add feedback
        </Typography>
        <Button
          variant="contained"
          sx={{
            mt: 3, mb: 2, textTransform: 'uppercase', background: 'orange',
            '&:hover': {
              opacity: '0.8',
              backgroundColor: 'orange',
            },
          }}
          onClick={() => showFieldForm()}>
          Add Field
        </Button>
        <Box component="form"
          onSubmit={formik.handleSubmit}
          noValidate
          autoComplete="off"
          sx={{
            display: 'flex',
            flexDirection: 'column'
          }} >
          <AddedFields formFields={formFields}  handleChange={formik.handleChange}/>
          <Typography variant="overline" color="text.primary" gutterBottom sx={{ fontWeight: "bold" }}>
            Name
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ fontSize: "20px" }}>
            {formatName(guest.name)}
          </Typography>
          <Rating size="large"
            sx={{ my: 1, backgroundColor: "white", width: "fit-content" }}
            name="rating"
            value={formik.values.rating}
            onChange={formik.handleChange}
          />
          <FormControl>
            <Typography component="label" variant="overline" color="text.primary" sx={{ fontWeight: 'bold' }}>
              Phone
            </Typography>
            <OutlinedInput id="phone" name="phone" error={phoneError}
              sx={{ backgroundColor: "white" }}
              value={formik.values.phone}
              onChange={formik.handleChange}
              placeholder=" Enter phone"
            />
            <FormHelperText error={phoneError} sx={{ height: '16px' }}>{formik.errors.phone}</FormHelperText>
          </FormControl>
          <FormControl>

            <Typography component="label" variant="overline" color="text.primary" sx={{ fontWeight: 'bold' }}>
              Comment
            </Typography>
            <OutlinedInput id="comment" name="comment" error={commentError} multiline minRows={3}
              sx={{ backgroundColor: "white" }}
              value={formik.values.comment}
              onChange={formik.handleChange}
              placeholder="Enter comment"
            />
            <FormHelperText error={commentError} sx={{ height: '16px' }}>{formik.errors.comment}</FormHelperText>
          </FormControl>
          {(phoneError || commentError || formik.values.phone === '' || formik.values.comment === '') ?
            <Button
              fullWidth
              variant="contained"
              sx={{
                mt: 3, mb: 2, textTransform: 'uppercase', background: 'green',
                '&:hover': {
                  opacity: '0.8',
                  backgroundColor: 'green',
                },
              }}
              onClick={(e) => handleCancel(e)}>
              Cancel
            </Button>
            :
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3, mb: 2, textTransform: 'uppercase', background: 'green',
                '&:hover': {
                  opacity: '0.8',
                  backgroundColor: 'green',
                },
              }}
            >
              Save
            </Button>
          }
        </Box>
      </Box>
    </Box>
  );
}
export default FeedBackForm;