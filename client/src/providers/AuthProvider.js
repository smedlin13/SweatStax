import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export const AuthContext = React.createContext();
export const AuthConsumer = AuthContext.Consumer;

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  const navigate = useNavigate()

  const handleRegister = (user) => {
    axios.post("/api/auth", user)
      .then( res => {
        setUser(res.data.data);
        navigate("/");
      })
    .catch( res => {
      console.log(res);
    })
  }
  
  const handleLogin = (user) => {
    axios.post("/api/auth/sign_in", user)
      .then( res => {
        setUser(res.data.data);
        navigate("/");
      })
      .catch( res => {
        console.log(res);
      })
  }
  
  const handleLogout = () => {
    axios.delete("/api/auth/sign_out")
      .then( res => {
        setUser(null);
        navigate('/login');
      })
      .catch( res => {
        console.log(res);
      })
  }
  
  const updateUser = (id, user) => {
    let data = new FormData();
    data.append('fname', user.fname);
    data.append('lname', user.lname);
    data.append('username', user.username);
    data.append('caption', user.caption);
    data.append('email', user.email);
    data.append('password', user.password);
    data.append('file', user.image);
    axios.put(`/api/users/${id}`, data)
      .then( res => {
        setUser(res.data)
        navigate('/')
      })
      .catch( err => console.log(err) )
  }

    return (
      <AuthContext.Provider value={{
        user,
        handleRegister: handleRegister,
        handleLogin: handleLogin,
        handleLogout: handleLogout,
        authenticated: user !== null,
        setUser: (user) => setUser( user ),
        updateUser: updateUser,
      }}>
        { children }
      </AuthContext.Provider>
    )

};


export default AuthProvider;