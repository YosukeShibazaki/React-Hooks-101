import React,{ useReducer, useEffect } from 'react';
import reducer from '../reducers'; // jsファイルまで指定しなくてもimportができる
//import './App.css';
import EventForm from './EventForm';
import Events from './Events';
import AppContext from '../contexts/AppContext';
// createContextのProviderでretrun内をラッピングする。valueを指定する。(Provider側のコーディング)
import OperationLogs from './OperationLogs';

const APP_KEY = 'appWithRedux';

const App = () => {
  const appState = localStorage.getItem(APP_KEY);
  const initialState = appState ? JSON.parse(appState) : {
    events:[],
    operationLogs:[]
  }

  const [state,dispatch] = useReducer(reducer,initialState); // reducerの定義をする。dispatchにはactionのtypeを渡す。

  useEffect(() => {
    // localStorage.setItem(第一引数,第二引数)とすることで、第一引数をキーにして第二引数をローカルストレージに保存できる。
    // 詳細はMDNを参照
    localStorage.setItem(APP_KEY,JSON.stringify(state))
  },[state])

  return (
    <AppContext.Provider value={{ state,dispatch }}>
      <div className="container-fluid">
        <EventForm />
        <Events />
        <OperationLogs />
      </div>
    </AppContext.Provider>
  );
}

export default App;
