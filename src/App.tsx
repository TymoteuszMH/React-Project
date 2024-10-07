import React, { useState } from 'react';
import './App.scss';
import AddColorForm from './components/add-color-form/add-color-form';
import { ColorFormProps } from './interfaces/ColorFormProps';

const App:React.FC = () => {

  const [hex, addColor] = useState('')

  const handleAdd = () =>{
  
  }

  return (
    <div className="App">
      <header className="data-header">
        <AddColorForm hex={hex} addColor={addColor} handleAdd={handleAdd}></AddColorForm>
        <hr/>
        <button className='data-form2'>Filter</button>
      </header>
    </div>
  );
}

export default App;
