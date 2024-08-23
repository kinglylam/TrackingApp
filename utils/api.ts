import axios, {
  AxiosError,
  AxiosRequestConfig,
} from 'axios';
import { ApiError } from '../types/global';
import { showMessage } from 'react-native-flash-message';

export const handleApiError = (
  err: AxiosError<ApiError>,
  tryAgain?: boolean,
  tryAgainFunc?: () => void,
  onDismiss?: () => void,
  tryAgainText = 'Try Again',
  title = '',
) => {
  const message = err.response?.data?.errors
    ? Object.values(err.response?.data?.errors)[0][0]
    : (err.response?.data?.message ??
      err.response?.data?.detail ??
      err.response?.data?.error ??
      err?.message);

  console.log(
    'api error',
    err?.config?.url,
    err.response?.data ?? err?.message,
  );
  showMessage({
    message: message,
    type: 'danger',
  });
};
