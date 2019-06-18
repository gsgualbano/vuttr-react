import { toast } from 'react-toastify';
import { css } from 'glamor';

export default {
  // Keep the signature of the original toast object
  // Doing so you can pass additionnal options
  success(msg: string, options = {}) {
    return toast.success(msg, {
      // Merge additionals options
      ...options,
      className: css({
        fontFamily: "'Source Sans Pro', sans-serif !important",
        color: '#170C3A !important',
        minHeight: '60px !important',
        borderRadius: '5px !important',
        background: '#12DB89 !important',
        boxShadow: '2px 2px 20px 2px rgba(0,0,0,0.3) !important',
      }),
      progressClassName: css({
        background: '#007aff',
      }),
    });
  },
  error(msg: string, options = {}) {
    return toast.error(msg, {
      ...options,
      className: css({
        fontFamily: "'Source Sans Pro', sans-serif !important",
        color: '#170C3A !important',
        background: '#F95E5A !important',
        minHeight: '60px !important',
        borderRadius: '5px !important',
        boxShadow: '2px 2px 20px 2px rgba(0,0,0,0.3) !important',
      }),
      progressClassName: css({
        background: '#007aff',
      }),
    });
  },
};
