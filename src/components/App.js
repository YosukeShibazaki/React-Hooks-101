import React,{useState, useReducer} from 'react';
import reducer from '../reducers'; // jsファイルまで指定しなくてもimportができる
//import './App.css';

const App = () => {
  const [state,dispatch] = useReducer(reducer,[]); // reducerの定義する。dispatchにはactionのtypeを渡す。useReducerの第一引数にはimportしたreducerを、第二引数にはstateの初期値を渡す。
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

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
    console.log({state});
  }



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
            <textarea className="form-control" id="formEventBody" onChange={e => setBody(e.target.value)} />
          </div>

          <button className="btn btn-primary" onClick={addEvent}>イベントを作成する</button>
          <button className="btn btn-danger">全てのイベントを削除する</button>
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
          <tbody></tbody>
        </table>
      </div>
    </>
  );
}

export default App;
