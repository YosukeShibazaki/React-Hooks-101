const events = ( state = [] , action ) => { // state = 【】とすると、stateの値を初期化することができる
  switch (action.type) {
    case 'CREATE_EVENT':
      const event = { title:action.title , body:action.body };
      const length = state.length;
      const id = length === 0 ? 1 : state[length - 1].id + 1; // 渡ってきたstateの要素が0ならidに1を、そうじゃない場合は最後のstateの配列の最後の要素のid + 1の値を代入する
      return [...state, {id, ...event}]; // id:idを省略するとidのみで書ける。定義した配列をオブジェクトとして展開。
    case 'DELETE_EVENT':
      return state;
    case 'DELETE_ALL_EVENTS':
      return [];
    default:
      return state;
  }
}

export default events;
