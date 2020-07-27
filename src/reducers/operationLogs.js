import {
  ADD_OPERATION_LOG,
  DELETE_ALL_OPERATION_LOGS
} from '../actions/index';

const operationLogs = (state = [],action) => {
  switch (action.type) {
    case ADD_OPERATION_LOG:
      const operationLog = { // description⇒操作内容、operatedAt⇒操作日時
        description:action.description,
        operatedAt:action.operatedAt
      }
      return [operationLog,...state];

    case DELETE_ALL_OPERATION_LOGS:
      return [];

    default:
      return state;
  }
}

export default operationLogs;
