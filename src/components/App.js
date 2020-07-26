import React,{useReducer} from 'react';
import reducer from '../reducers'; // jsファイルまで指定しなくてもimportができる
//import './App.css';
import EventForm from './EventForm';
import Events from './Events';
import AppContext from '../contexts/AppContext';
// createContextのProviderでretrun内をラッピングする。valueを指定する。(Provider側のコーディング)

const App = () => {
  const [state,dispatch] = useReducer(reducer,[]); // reducerの定義する。dispatchにはactionのtypeを渡

  return (
    <AppContext.Provider value={{ state,dispatch }}>
      <div className="container-fluid">
        <EventForm />
        <Events />
      </div>
    </AppContext.Provider>
  );
}

export default App;
