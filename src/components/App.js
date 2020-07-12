import React,{useState, useReducer} from 'react';
import reducer from '../reducers'; // jsファイルまで指定しなくてもimportができる
//import './App.css';
import Event from './Event'

const App = () => {
  const [state,dispatch] = useReducer(reducer,[]); // reducerの定義する。dispatchにはactionのtypeを渡す。useReducerの第一引数にはimportしたreducerを、第二引数にはstateの初期値を渡す。
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  // イベントをテーブルに追加する処理。useReducerを使用している。
  const addEvent = e => {
    e.preventDefault();
    dispatch({
      type:'CREATE_EVENT',
      title,
      body
    });

    // イベントを作成した後の入力フォームの値を空にしています。
    setTitle('');
    setBody('');
  }

  // 全てのイベントを削除する関数。
  const deleteAllEvents = e => {
    e.preventDefault();
    // window.confirm(メッセージ)でアラート表示してOKボタン⇒true、キャンセルボタン⇒falseを返す。
    const result = window.confirm('全てのイベントを本当に削除しますか？');
    if(result){
      dispatch({type:'DELETE_ALL_EVENTS'})
    }
  }

  // イベント作成ボタンの活性・非活性を切り替えるための定数。真偽値を代入。
  const unCreatable = body === '' || title === '';

  return (
    <> {/* React.Fragmentの略 */}
      <div className="container-fluid">
        <h4>イベント作成フォーム</h4>
        <form>
          <div className="from-group">
            <label htmlFor="formEventTitle">タイトル</label>
            <input className="form-control" id="formEventTitle" value={title} onChange={e => setTitle(e.target.value)} />
          </div>

          <div className="from-group">
            <label htmlFor="formEventBody">ボディ</label>
            <textarea className="form-control" id="formEventBody" value={body} onChange={e => setBody(e.target.value)} />
          </div>

          <button className="btn btn-primary" onClick={addEvent} disabled={unCreatable}>イベントを作成する</button>
          <button className="btn btn-danger" onClick={deleteAllEvents} disabled={state.length === 0}>全てのイベントを削除する</button>
        </form>

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
      </div>
    </>
  );
}

export default App;
