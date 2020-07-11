import React,{useState} from 'react';
//import './App.css';

const App = () => {
  return (
    <> {/* React.Fragmentの略 */}
      <div className="container-fluid">
        <h4>イベント作成フォーム</h4>
        <form>
          <div className="from-group">
            <label htmlFor="formEventTitle">タイトル</label>
            <input className="form-control" id="formEventTitle" />
          </div>

          <div className="from-group">
            <label htmlFor="formEventBody">ボディ</label>
            <textarea className="form-control" id="formEventBody" />
          </div>

          <button className="btn btn-primary">イベントを作成する</button>
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
