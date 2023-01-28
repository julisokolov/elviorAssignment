import TextField from '@mui/material/TextField';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs from 'dayjs';
import { DateTimeProps } from './types';

export default function DateTimeSelection(props: DateTimeProps) {
  return (
    <DateTimePicker
      label="Enter date and time of the current month"
      ampm={false}
      disableOpenPicker={true}
      inputFormat="DD/MM/YYYY HH:mm"
      minDate={dayjs().startOf('month')}
      maxDate={dayjs().endOf('month')}
      value={props.dateObject}
      onChange={(newValue) => {
        if (newValue) {
          props.setDateObject(newValue)
        }
      }}
      renderInput={(params) => <TextField helperText="day/month/year hour:minute" sx={{width: '100%'}} {...params} />}
    />
  );
}