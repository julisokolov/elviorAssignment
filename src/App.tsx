import DateTime from  "./dateTime";
import Calendar from "./calendar";
import Stack from '@mui/material/Stack';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import * as React from 'react';
import { Alert } from "@mui/material";
import Button from '@mui/material/Button';
import { postDateObject } from "./service";
import dayjs, { Dayjs } from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc)

dayjs().utc().format()

function App() {
  const [dateObject, setDateObject] = React.useState<Dayjs>(dayjs(new Date()));
  const [success, setSuccess] = React.useState<Boolean>(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    postDateObject(dateObject)
    setDateObject(dayjs(new Date()))
    setSuccess(true)
    setTimeout(() => {
      setSuccess(false)
    }, 5000)
  }

  function validateDate() : boolean {
    return dateObject > dayjs().startOf('month') && dateObject < dayjs().endOf('month') && dateObject.isValid();
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack alignItems="center" spacing={3} mt={12}>
        <form onSubmit={e => onSubmit(e)}>
          <DateTime dateObject={dateObject} setDateObject={setDateObject}/>
          {success ? <Alert severity="success">Date has been submitted successfully!</Alert> : <></>}
          {validateDate() ? <></> : <Alert severity="error">Invalid date/time</Alert>}
          <Calendar dateObject={dateObject} setDateObject={setDateObject}/>
          <Button type="submit" style={{float: "right"}} disabled={!validateDate()} variant="contained">Submit</Button>
        </form>
      </Stack>
    </LocalizationProvider>
  );
}

export default App;
