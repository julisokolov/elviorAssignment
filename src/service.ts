import axios from "axios";
import { Dayjs } from "dayjs";

type GetDateObjectsResponse = {
	data: Dayjs[];
};

export async function postDateObject(date : Dayjs) {
	try {
    const { data } = await axios.post<GetDateObjectsResponse>(
      'http://localhost:3001/dates',
			{date},
      {
        headers: {
          Accept: 'application/json',
        },
      },
    );
		console.log(JSON.stringify(data, null, 4));
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error message: ', error.message);
      return error.message;
    } else {
      console.log('unexpected error: ', error);
      return 'An unexpected error occurred';
    }
  }
}