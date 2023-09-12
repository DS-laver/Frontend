// reducers/index.js
import { combineReducers } from 'redux';
import userReducer from './userReducer'; // 사용자 데이터 관련 리듀서

const rootReducer = combineReducers({
  user: userReducer, // 사용자 데이터 관련 상태
  // 다른 리듀서들 추가
});

export default rootReducer;
