import React from 'react';
import PropTypes from 'prop-types';
import DogItem from '../DogItem/DogItem';
import styles from './DogsList.css';

export default function DogsList({ dogs, removeDog }) {

  const dogsArray = dogs.map((dog, i) => {
    return <DogItem removeDog={removeDog} key={i} dog={dog} />;
  });

  return (
    <ul className={styles.DogsList}>
      {dogsArray}
    </ul>
  );
}

DogsList.propTypes = {
  dogs: PropTypes.array.isRequired,
  removeDog: PropTypes.func.isRequired
};
