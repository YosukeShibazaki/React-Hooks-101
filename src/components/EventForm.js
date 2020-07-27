import React, {useState,useContext} from 'react';
import {
  CREATE_EVENT,
  DELETE_ALL_EVENTS,
  ADD_OPERATION_LOG,
  DELETE_ALL_OPERATION_LOGS
} from '../actions';
import AppContext from '../contexts/AppContext';
import { timeCurrentIso8601 } from '../utils';

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

    dispatch({
      type:ADD_OPERATION_LOG,
      description:'イベントを作成しました。',
      operatedAt:timeCurrentIso8601()
    })

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

      dispatch({
        type:ADD_OPERATION_LOG,
        description:'全てのイベントを削除しました。',
        operatedAt:timeCurrentIso8601()
      })
    }
  }

  // 全ての操作ログを削除する処理
  const deleteAllOperationLogs = e => {
    e.preventDefault();
    const result = window.confirm('全ての操作ログを本当に削除しても良いですか？');

    if (result){
      dispatch({
        type:DELETE_ALL_OPERATION_LOGS
      })
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
        <button className="btn btn-danger" onClick={deleteAllOperationLogs} disabled={state.operationLogs.length === 0}>全ての操作ログを削除する</button>
      </form>
    </>
  )
}

export default EventForm;
