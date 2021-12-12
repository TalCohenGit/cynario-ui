import axios from 'axios';

const BASE_URL = 'https://protected-lowlands-84769.herokuapp.com';

export const getUsers = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/users`,{headers:{"Access-Control-Allow-Origin": "*"}});

    const users = response.data;

    console.log(`GET: Here's the list of users`, users);

    return users;
  } catch (errors) {
    console.error(errors);
  }
};

export const insertUser = async (user) => {
    try {
      const response = await axios.post(`${BASE_URL}/user`, 
      {data: JSON.stringify(user),
      headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json"}
      },   
    );
  
      const newUser = response.data;

      console.log(`Added a new user!`, newUser);
  
      return newUser;
    } catch (errors) {
      console.error(errors);
    }
  };