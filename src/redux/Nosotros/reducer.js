import { GET_ABOUT, USABOUTUS_ERROR } from './types';
import Swal from 'sweetalert2';

const initialState = {
  organization: [],
  loading: false,
};

const usReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ABOUT:
      return action.payload;

    // case types.USABOUTUS_UPDATE:
    //   return {
    //     ...state,
    //     loading: false,
    //     text: action.payload,
    //   };
    case USABOUTUS_ERROR: {
      return Swal.fire(action.payload);
    }

    default:
      return state;
  }
};
export default usReducer;