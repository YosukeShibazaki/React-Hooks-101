import React,{useReducer} from 'react';
import reducer from '../reducers'; // jsファイルまで指定しなくてもimportができる
//import './App.css';
import EventForm from './EventForm';
import Events from './Events';

const App = () => {
  const [state,dispatch] = useReducer(reducer,[]); // reducerの定義する。dispatchにはactionのtypeを渡

  return (
    <> {/* React.Fragmentの略 */}
      <div className="container-fluid">
        <EventForm state={state} dispatch={dispatch} />
        <Events state={state} dispatch={dispatch} />
      </div>
    </>
  );
}

export default App;
