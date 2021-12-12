import './App.scss';
import React from 'react';
import Table from "./components/main/Table/Table"
import ControlBar from "./components/main/ControlBar/ControlBar"
import UserModal from './components/main/UserModal/UserModal';

const App = () => {


  return (
    <div className="App">
      <>
      <ControlBar showRightSide tableId="table1"/>
      <Table showRightSide tableId="table1" />
      </>
      <>
      <ControlBar showRightSide ={false} tableId="table2"/>
      <Table showRightSide ={false} tableId="table2" />
      </>
      <UserModal/>
    </div>
  );
}

export default App;
