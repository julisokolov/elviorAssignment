import { Dayjs } from 'dayjs';
import { Dispatch, SetStateAction } from 'react';

export interface DateTimeProps {
  dateObject: Dayjs;
  setDateObject: Dispatch<SetStateAction<Dayjs>>;
}