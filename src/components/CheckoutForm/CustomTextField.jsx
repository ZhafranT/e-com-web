import React from 'react';
import { TextField, Grid } from '@material-ui/core';
import { useFormContext, Controller } from 'react-hook-form';

function FormInput({ name, label }) {
  const { control } = useFormContext();

  return (
    <Grid item xs={12} sm={6} style={{ marginBottom: '15px' }}>
      <Controller defaultValue="" control={control} name={name} render={({ field }) => <TextField fullWidth label={label} required />} />
    </Grid>
  );
}

export default FormInput;
