import TextField from '@mui/material/TextField';
import { StaticDatePicker } from '@mui/x-date-pickers-pro';
import dayjs from 'dayjs';
import { DateTimeProps } from './types';

export default function Calendar(props: DateTimeProps) {
  return (
    <StaticDatePicker
      displayStaticWrapperAs="desktop"
      openTo="day"
      value={props.dateObject}
      minDate={dayjs().startOf('month')}
      maxDate={dayjs().endOf('month')}
      onChange={(newValue) => {
        if (newValue) {
          props.setDateObject(newValue)
        }
      }}
      renderInput={(params) => <TextField {...params} />}
    />
  );
}