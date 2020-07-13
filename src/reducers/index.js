import {
  CREATE_EVENT,
  DELETE_EVENT,
  DELETE_ALL_EVENTS
} from '../actions';

const events = ( state = [] , action ) => { // state = 【】とすると、stateの値を初期化することができる
  switch (action.type) {
    case CREATE_EVENT:
      const event = { title:action.title , body:action.body };
      const length = state.length;
      const id = length === 0 ? 1 : state[length - 1].id + 1;
      return [...state, {id, ...event}]; // id:idを省略するとidのみで書ける

    case DELETE_EVENT:
      return state.filter( event => event.id !== action.id);

    case DELETE_ALL_EVENTS:
      return [];

    default:
      return state;
  }
}

export default events;
