import React from 'react';
import { MyStates } from './StateManage';
import HomePage from './pages/HomePage';
import MobilePage from './pages/MobilePage';
import { useMediaQuery } from '@mui/material';
function App() {
  let IsMobile = useMediaQuery("(min-width:805px)")
  let { Background } = MyStates();
  return (
    <div style={{ background: `${Background}`, minHeight: "100vh" }}>
      {
        IsMobile ? <HomePage /> : <MobilePage />
      }
    </div>
  )
}

export default App;