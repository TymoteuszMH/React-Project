import React, { useState } from 'react';
import './App.scss';
import AddColorForm from './components/add-color-form/add-color-form';
import Colors from './components/colors/colors';
import { IColor } from './interfaces/IColor';
import Filter from './components/filter/filter';

const App:React.FC = () => {

  const [hex, addColor] = useState<string>('')
  const [colors, setColors] = useState<IColor[]>([]);
  const [filteredColors, setFilteredColors] = useState<IColor[]>([])

  const handleAdd = (color: IColor):void =>{
    setColors([...colors, color]);
    setFilteredColors([...colors, color]);
    addColor("");
  }

  const handleFilter = (fColors: IColor[]) =>{
    setFilteredColors(fColors);
  }


  return (
    <div className="App">
      <header className="data-header">
        <AddColorForm hex={hex} addColor={addColor} handleAdd={handleAdd}></AddColorForm>
        <hr/>
        <Filter colors={colors} setFilteredColors={setFilteredColors} handleFilter={handleFilter}></Filter>
      </header>
      <Colors colors={filteredColors} setColors={setColors}></Colors>
    </div>
  );
}

export default App;
