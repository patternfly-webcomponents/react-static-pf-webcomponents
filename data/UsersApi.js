import constants from '../core/constants';

//a simple es6 singleton pattern can be used in place of Redux if desired
class UsersApi {
  constructor() {
    this.users = [];
  }

  getUsers() {
    //if users are already in cache, return them
    if(this.users.length){
      return Promise.resolve(this.users);
    } else {
      //fetch returns a promise which resolves the data after users come back asynchronously
      return fetch(constants.get_users_url).then(r => r.json())
        .then(data => {
          this.users = data;
          return this.users;
        })
        .catch(e => console.log(e));
    }
  }

  saveUsers(users) {
    return fetch(constants.post_users_post_url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: '1',
        name: 'Erlich',
      })
    }).then(r => r.json())
      .then(response => {
        //ensure response is successful then set the users in cache for future
        this.users = users;
        return this.users;
      })
      .catch(e => console.log(e));
  }
}

export default new UsersApi();