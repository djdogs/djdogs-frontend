import React from 'react';
import PropTypes from 'prop-types';
import styles from './DogItem.css';

export default function DogItem({ dog, removeDog }) {
  return (
    <li className={styles.DogItem}>
      <img src={dog.image} />
      <p><b>ID:</b> {dog._id}</p>
      <p><b>Name:</b> {dog.name}</p>
      <p><b>Age:</b> {dog.age}</p>
      <p><b>Weight:</b> {dog.weight}</p>
      <p><b>Color:</b> {dog.color}</p>
      <p><b>Breed:</b> {dog.breed}</p>
      <button onClick={() => { removeDog(dog._id); }}>x</button>
    </li>
  );
}

DogItem.propTypes = {
  dog: PropTypes.object.isRequired,
  removeDog: PropTypes.func.isRequired
};
