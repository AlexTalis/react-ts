import { Box, CssBaseline, StyledEngineProvider, TextField } from '@mui/material';
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { Moment } from 'moment';
import React, { useState } from 'react';
import './index.scss';

export const App: React.FC = () => {
  const [value, setValue] = useState<Moment | null>(null);
  return (
    <StyledEngineProvider injectFirst>
      <CssBaseline />
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'end',
            pb: '340px',
          }}
        >
          <DesktopDatePicker
            value={value}
            onChange={setValue}
            renderInput={(props) => <TextField {...props} size="small" />}
            open={true}
          />
        </Box>
      </LocalizationProvider>
    </StyledEngineProvider>
  );
};

export default App;
