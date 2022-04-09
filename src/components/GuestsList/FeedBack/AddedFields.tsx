import React from 'react';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';
import OutlinedInput from '@mui/material/OutlinedInput';

import { FormField } from '../../../types';

const AddedFields = ({ formFields, handleChange }: { formFields: any, handleChange: any }) => {

  if (!formFields) return null;

  return (
    <>
      {formFields.map((field: FormField) => {
        return (
          <FormControl key={field.name}>
            <Typography component="label" variant="overline" color="text.primary" sx={{ fontWeight: 'bold' }}>
              {field.name}
            </Typography>
            <OutlinedInput id={field.id} name={field.name}
              sx={{ backgroundColor: "white" }}
              value=''
              onChange={handleChange}
            />
          </FormControl>
        )
      })
      }
    </>
  )
}

export default AddedFields;