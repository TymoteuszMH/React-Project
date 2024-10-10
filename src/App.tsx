import React, { useState } from 'react';
import './App.scss';
import AddColorForm from './components/add-color-form/add-color-form';
import Colors from './components/colors/colors';
import { IColor, IOptions } from './interfaces/interfaces';
import Filter from './components/filter/filter';
import { defaultColors, defaultOptions } from './interfaces/defaults';
import { checkFilterOptions } from './interfaces/service';

const App:React.FC = () => {
  //state of hex for input
  const [hex, addColor] = useState<string>('')

  //state of colors with logic to get data from localStorage or defaults
  const [colors, setColors] = useState<IColor[]>(()=>{
    let savedColors:string|null = localStorage.getItem('colors'); //getting localstorage
    if(savedColors)
      return JSON.parse(savedColors) //parsing storage if exists
    return defaultColors; //else returning defaults
  });

  //state of filtered colors to show colors
  const [filteredColors, setFilteredColors] = useState<IColor[]>(colors)

  const [filterOptions, setFilterOptions] = useState<IOptions>(structuredClone(defaultOptions))

  //state for hidding filters
  const [hidden, setHidden] = useState<boolean>(true)

  //add handler
  const handleAdd = (color: IColor):void =>{
    saveColors([...colors, color], [...filteredColors, color])
  }

  //remove handler
  const handleRemove = (color: IColor) =>{
    saveColors(colors.filter(el => el !== color), filteredColors.filter(el => el !== color))
  }

  //reseting localstorage
  const resetStorage = () =>{
    saveColors(defaultColors, defaultColors)
    localStorage.clear();
  }

  //saving colors in states and localstorage
  const saveColors = (newColors: IColor[], newFilteredColors: IColor[])=>{
    setColors(newColors)
    setFilteredColors(newFilteredColors.filter(el => checkFilterOptions(filterOptions, el)))
    localStorage.setItem('colors', JSON.stringify(newColors));
  }

  return (
    <div className="App">
      <header className="data-header">
        <AddColorForm hex={hex} addColor={addColor} handleAdd={handleAdd}></AddColorForm>
        <button class-name="data-filter-btn" onClick={()=>{setHidden(!hidden)}}>Filter</button>
        <hr/>
        <div className={hidden ? 'data-filter hidden' : 'data-filter'}>
          <Filter colors={colors} filterOptions={filterOptions} setFilteredColors={setFilteredColors} setFilteredOptions={setFilterOptions}></Filter>
        </div>
      </header>
      <hr/>
      <div>
        <button className="data-reset" onClick={()=>{resetStorage()}}>Reset Local Storage</button>
      </div>
      <Colors colors={filteredColors} setColors={setColors} handleRemove={handleRemove}></Colors>
    </div>
  );
}

export default App;
