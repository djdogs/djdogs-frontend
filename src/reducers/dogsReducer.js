import { FETCH_DOGS, CREATE_DOG, REMOVE_DOG } from '../actions/dogActions';

const initialState = {
  list: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_DOGS:
      return { list: [...state.list, ...action.payload] };
    case CREATE_DOG:
      return { list: [...state.list, action.payload] };
    case REMOVE_DOG:
      return { list: [...state.list.filter(dog => dog._id !== action.payload._id)] };
    default:
      return state;
  }
}
