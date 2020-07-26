import React, {useState,useContext} from 'react';
import {
  CREATE_EVENT,
  DELETE_ALL_EVENTS
} from '../actions';
import AppContext from '../contexts/AppContext';

const EventForm = () => {
  // App.jsからstateとdispatchを受け取っている
  const { state, dispatch } = useContext(AppContext);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  // イベントをテーブルに追加する処理。useReducerを使用している。
  const addEvent = e => {
    e.preventDefault();
    dispatch({
      type:CREATE_EVENT,
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
      dispatch({type:DELETE_ALL_EVENTS})
    }
  }

  // イベント作成ボタンの活性・非活性を切り替えるための定数。真偽値を代入。
  const unCreatable = body === '' || title === '';

  return (
    <>
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
        <button className="btn btn-danger" onClick={deleteAllEvents} disabled={state.events.length === 0}>全てのイベントを削除する</button>
      </form>
    </>
  )
}

export default EventForm;
