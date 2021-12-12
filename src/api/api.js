import axios from 'axios';

const BASE_URL = 'http://2d9b-2a00-7c40-c490-12-e0e8-a21b-9a4e-cadc.ngrok.io';

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