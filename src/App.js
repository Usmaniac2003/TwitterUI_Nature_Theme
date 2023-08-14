import React from 'react';
import axios from "axios";
import { Button, Typography } from '@mui/material';
import { MyStates } from './StateManage';
function App() {
  let { state } = MyStates();
  return (
    <>
      <Typography className='mt-5'>Hello World {state}</Typography>
    </>
  )
}

export default App;