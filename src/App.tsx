import React, { useState } from 'react';
import './App.scss';
import AddColorForm from './components/add-color-form/add-color-form';
import Colors from './components/colors/colors';
import { IColor } from './interfaces/IColor';
import Filter from './components/filter/filter';
import { defaultColors } from './interfaces/defaultColors';

const App:React.FC = () => {

  const [hex, addColor] = useState<string>('')
  const [colors, setColors] = useState<IColor[]>(()=>{
    let savedColors:string|null = localStorage.getItem('colors');
    if(savedColors)
      return JSON.parse(savedColors)
    return defaultColors;
  });
  const [filteredColors, setFilteredColors] = useState<IColor[]>(colors)

  const handleAdd = (color: IColor):void =>{
    setColors([...colors, color]);
    setFilteredColors([...colors, color]);
    localStorage.setItem('colors', JSON.stringify([...colors, color]))
  }

  return (
    <div className="App">
      <header className="data-header">
        <AddColorForm hex={hex} addColor={addColor} handleAdd={handleAdd}></AddColorForm>
        <hr/>
        <Filter colors={colors} setFilteredColors={setFilteredColors}></Filter>
      </header>
      <Colors colors={filteredColors} setColors={setColors}></Colors>
    </div>
  );
}

export default App;
