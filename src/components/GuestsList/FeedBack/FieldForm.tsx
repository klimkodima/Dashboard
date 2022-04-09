import React from 'react';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import OutlinedInput from '@mui/material/OutlinedInput';
import { useFormik } from 'formik';

import { FormField } from "../../../types";

interface Props {
  onClose: () => void;
  handleSubmit: (values: FormField) => void;
}

const initialValues = {
  id: '',
  type: 'text',
  name: ''
};

const FieldForm = ({ handleSubmit, onClose }: Props) => {

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  return (
    <Box sx={{ p: 4, minWidth: 275, maxWidth: 768, backgroundColor: "#f8f8f8" }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography component="h1" variant="h5" sx={{ textAlign: 'center', fontWeight: 'bold' }}>
          Add form field
        </Typography>
        <Box component="form"
          onSubmit={formik.handleSubmit}
          noValidate
          autoComplete="off"
          sx={{
            display: 'flex',
            flexDirection: 'column'
          }} >
          <FormControl>
            <Typography component="label" variant="overline" color="text.primary" sx={{ fontWeight: 'bold' }}>
              Id
            </Typography>
            <OutlinedInput id="inputId" name="id"
              sx={{ backgroundColor: "white" }}
              value={formik.values.id}
              onChange={formik.handleChange}
              placeholder=" Enter id"
            />
          </FormControl>
          <FormControl>
            <Typography component="label" variant="overline" color="text.primary" sx={{ fontWeight: 'bold' }}>
              Type
            </Typography>
            <OutlinedInput id="inputType" name="type"
              sx={{ backgroundColor: "white" }}
              value={formik.values.type}
              onChange={formik.handleChange}
              placeholder=" Enter type"
            />
          </FormControl>
          <FormControl>
            <Typography component="label" variant="overline" color="text.primary" sx={{ fontWeight: 'bold' }}>
              Name
            </Typography>
            <OutlinedInput id="inputName" name="name"
              sx={{ backgroundColor: "white" }}
              value={formik.values.name}
              onChange={formik.handleChange}
              placeholder=" Enter name"
            />
          </FormControl>
          <Button
            fullWidth
            variant="contained"
            sx={{
              mt: 3, mb: 2, textTransform: 'uppercase', background: 'orange',
              '&:hover': {
                opacity: '0.8',
                backgroundColor: 'orange',
              },
            }}
            onClick={onClose}>
            Cancel
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            data-testid="saveButton"
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
        </Box>
      </Box>
    </Box>
  );
}

export default FieldForm;