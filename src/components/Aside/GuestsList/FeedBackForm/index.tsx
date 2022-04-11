import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import FormHelperText from '@mui/material/FormHelperText';
import OutlinedInput from '@mui/material/OutlinedInput';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';

import AddedFields from '../AddedFields/AddedFields';
import { formatName } from '../../../../utils/formatName';
import { useAppSelector } from '../../../../hooks/hooks';
import { useGuestContext } from '../../../../contexts/GuestContext';
import { addFeedback } from '../../../../reducers/partyReducer';
import { I18_EN } from '../../../../i18_en';
import { Feedback, FormField } from '../../../../types';



const initialValues = {
  phone: '',
  rating: 3,
  comment: '',
  date: String(new Date())
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

const FeedBackForm = ({ showFieldForm }: { showFieldForm: () => void }) => {

  const dispatch = useDispatch();
  const { guest, setGuest, setIsFeedBackModalOpen } = useGuestContext();

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  const formFields: FormField[] = useAppSelector(state => state.party.formFields);

  if (!guest) return null;

  const handleSubmit = (values: Feedback) => {
    const feedBack: Feedback = { ...values, rating: Number(values.rating) };
    dispatch(addFeedback(feedBack, guest.id));
    setGuest(undefined);
    setIsFeedBackModalOpen(false);
  };

  const handleCancel = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    setGuest(undefined);
    setIsFeedBackModalOpen(false);
  }

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
        <Typography component="h3" variant="h5" sx={{ textAlign: 'center', fontWeight: 'bold' }}>
         {I18_EN.TITLE}
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
          <AddedFields formFields={formFields} handleChange={formik.handleChange} />
          <Typography variant="overline" color="text.primary" gutterBottom sx={{ fontWeight: "bold" }}>
            {I18_EN.NAME_LABEL}
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
            {I18_EN.PHONE_LABEL}
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
            {I18_EN.COMMENT_LABEL}
            </Typography>
            <OutlinedInput id="comment" name="comment" error={commentError} multiline minRows={3}
              sx={{ backgroundColor: "white" }}
              value={formik.values.comment}
              onChange={formik.handleChange}
              placeholder="Enter comment"
            />
            <FormHelperText error={commentError} sx={{ height: '16px' }}>{formik.errors.comment}</FormHelperText>
          </FormControl>
          <FormControl>
            <Typography component="label" variant="overline" color="text.primary" sx={{ fontWeight: 'bold' }}>
            {I18_EN.DATE_LABEL}
            </Typography>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <TextField
                id="date"
                label="Select date"
                type="date"
                defaultValue={formik.values.date}
                sx={{ width: 220, backgroundColor: "white"  }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </LocalizationProvider>
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
              {I18_EN.CANCEL_BUTTON}
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
              {I18_EN.SAVE_BUTTON}
            </Button>
          }
        </Box>
      </Box>
    </Box>
  );
}
export default FeedBackForm;