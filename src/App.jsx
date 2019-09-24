import React from 'react';
import {API_DATA, API_DATA_ADD_DATA} from './API_DATA'
import { Spring, Transition, animated } from 'react-spring/renderprops';
import './App.css';

class App extends React.Component {
  state = { 
    levelOfFoodsAndAddData: [],
  }
  
  componentDidMount() {
    const levelOfFoodsAndAddData = API_DATA.map(item1 => ({
      ...item1,
      addData: API_DATA_ADD_DATA.find(item2 => item1.id === item2.dataId),
    }));

    this.setState({
      levelOfFoodsAndAddData: levelOfFoodsAndAddData,
    });
  }

  render() {
    return (

    <Spring
      from={{ marginTop: -5000 }}
      to={{ marginTop: 0 }}
      config={{tension: 100}}
    >
      {props => (
        <div style={props}>
          <div className="App">
            <div className="App_list">
              <div className="App_list-lvl App_list-lvl-sign ">
                СПИСОК ПРОДУКТОВ
              </div>
                <ItemList item={this.state.levelOfFoodsAndAddData}/>
            </div>
          </div>
        </div>
      )}
    </Spring>
      
    )
  }
}

const ItemList = ({item}) => (
  <div>
    {item.map(item => (
      <div 
        key={item.key}
        style={{backgroundColor: item.color}}
        className="App_list-lvl"
      >
        <ListItem item={item} />
      </div>
    ))}
  </div>
)

class ListItem extends React.Component {
  state = {
    clicked: false,
  }

  handleClick = () => {
    this.setState(state => ({
      clicked: !state.clicked,
    }))
  }

  render() {
    const { item } = this.props
    return (
      <div
        onClick={() => {this.handleClick()}}
      > 
        <b className="App_list-lvl-number">{item.id}й список</b> <br/>
        {item.lvl} <br/> 
        <p className="App_list-lvl-show-info">
          Нажмите для более детальной информации
        </p>
        <Transition
          native
          items={this.state.clicked}
          from={{ opacity: 0, duration: 3000 }}
          enter={{ opacity: 1, duration: 3000 }}
          leave={{ opacity: 0, duration: 3000 }}
        >
          {show =>
            show &&
            (props => (
              <animated.div style={props}>
                <div className="App_list-lvl-add-info">
                  {item.addData.addData} 
                </div>
              </animated.div>
            ))
          }
        </Transition>
      </div>
    )
  }
}


export default App;
