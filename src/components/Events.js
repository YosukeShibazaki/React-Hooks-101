import React from 'react';
import Event from './Event';

const Events = ({state,dispatch}) => {
  return (
    <>
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
