import React, { Component, useReducer, useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { reducer } from "../reducers";
import axios from 'axios';
import { Link } from "react-router-dom";

function App() {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: null,
    error: null
  });

  // const fetchUsers = async () => {
  //   dispatch({ type: 'LOADING' });
  //   try {
  //     const response = await axios.get('https://jsonplaceholder.typicode.com/users');
  //     dispatch({ type: 'SUCCESS', data: response.data });
  //   } catch (e) {
  //     dispatch({ type: 'ERROR', error: e });
  //   }
  // };

  
  const [name, setName] = useState("초기 닉네임");
  const onClick = () => {
    setName("닉네임 변경");
  }
  useEffect(() => {
    // fetchUsers();
    return () => {

    };
  }, []);

  // const { loading, data: users, error } = state;

  // if (loading) return <div>로딩중..</div>;
  // if (error) return <div>에러가 발생했습니다</div>;
  // if (!users) return null;

  return (
    <>
      <p><a href='http://www.moyeo.org/season/'>http://www.moyeo.org/season/</a></p>
      <p><a href='http://www.moyeo.org/pickit/'>http://www.moyeo.org/pickit/</a></p>
      <p><a href='http://www.moyeo.org/kcook/'>http://www.moyeo.org/kcook/</a></p>
    </>
  );
}

export default App;
