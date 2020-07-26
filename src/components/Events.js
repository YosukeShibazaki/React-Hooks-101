import React,{ useContext } from 'react';
import Event from './Event';
import AppContext from '../contexts/AppContext';

const Events = ({state,dispatch}) => {
  // useContextの引数にcreateContextの関数を入力。
  const value = useContext(AppContext);
  return (
    <>
      {/* createContextは古いやり方。かつHooksでもっと簡単に書ける。
        <AppContext.Consumer>
        { value => {return <div>{value}</div>}}
      </AppContext.Consumer>*/}
      <div>{value}</div>
      <h4>イベント一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>ボディ</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* App.jsの値をEvent.jsに渡す必要がある。 */}
          {state.map((event,index) => <Event key={index} event={event} dispatch={dispatch}/>)}
        </tbody>
      </table>
    </>
  )
}

export default Events;
