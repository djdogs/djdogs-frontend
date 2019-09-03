import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DogsList from '../../components/DogsList/DogsList';
import { connect } from 'react-redux';
import { DogForm } from '../../components/forms/DogForm/DogForm';
import { fetchDogs, createDog, removeDog } from '../../actions/dogActions';
import { getDogsList } from '../../selectors/dogSelectors';

class Dogs extends Component {

  static propTypes = {
    dogs: PropTypes.array,
    fetch: PropTypes.func,
    createDog: PropTypes.func,
    removeDog: PropTypes.func
  };

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const { dogs, createDog, removeDog } = this.props;
    return (
      <>
        <DogForm createDog={createDog} />
        <DogsList dogs={dogs} removeDog={removeDog}/>
      </>
    );
  }
}

const mapStateToProps = state => ({
  dogs: getDogsList(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchDogs());
  },
  createDog(dog) {
    dispatch(createDog(dog));
  },
  removeDog(id) {
    dispatch(removeDog(id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dogs);
