export const getDogs = () => {
  return fetch('https://djdogs.herokuapp.com/api/v1/dogs')
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Unable to get dogs.';
      return json;
    })
    .then(json => {
      return json;
    });
};

export const postDog = dog => {
  return fetch('https://djdogs.herokuapp.com/api/v1/dogs', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dog)
  })
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Unable to post dog';
      return json;
    });
};

export const deleteDog = id => {
  return fetch(`https://djdogs.herokuapp.com/api/v1/dogs/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }
  })
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Unable to delete dog';
      return json;
    });
};
