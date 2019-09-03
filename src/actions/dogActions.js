import { getDogs, postDog, deleteDog } from '../services/dogsApi';

export const FETCH_DOGS = 'FETCH_DOGS';
export const fetchDogs = () => ({
  type: FETCH_DOGS,
  payload: getDogs()
});

export const CREATE_DOG = 'CREATE_DOG';
export const createDog = dog => {
  return { type: CREATE_DOG, payload: postDog(dog) };
};

export const REMOVE_DOG = 'REMOVE_DOG';
export const removeDog = id => {
  return { type: REMOVE_DOG, payload: deleteDog(id) };
};
