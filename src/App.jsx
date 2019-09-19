import React from 'react';
import API_DATA from './API_DATA'
import './App.css';

function App() {
  const levelOfFoods = API_DATA;

  return (
    <div className="App">
      <ul className="App_list">
        <li className="App_list-lvl App_list-lvl-sign ">
          СПИСОК ПРОДУКТОВ
        </li>
        <li className="App_list-lvl App_list-lvl-0">
          <b>Первый список:</b> <br/>
          {levelOfFoods.zeroLevel}
        </li>
        <li className="App_list-lvl App_list-lvl-1">
          <b>Второй список:</b> <br/>
          {levelOfFoods.firstLevel}
        </li>
        <li className="App_list-lvl App_list-lvl-2">
          <b>Третий список:</b> <br/>
          {levelOfFoods.secondLevel}
        </li>
        <li className="App_list-lvl App_list-lvl-3">
          <b>Четвертый список:</b> <br/>
          {levelOfFoods.thirdLevel}
        </li>
        <li className="App_list-lvl App_list-lvl-4">
          <b>Пятый список:</b> <br/>
          {levelOfFoods.fourthLevel}
        </li>
      </ul>
    </div>
  );
}

export default App;
