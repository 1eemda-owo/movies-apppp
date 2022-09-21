// 액션
const SORT_API = "sort/SORT_API";

// 액션 생성 함수
export const setSortList = sortkey => ({ type : SORT_API, sortkey });

// 초기값
const initialState = {
  key:'rating'
};

// 리덕스 스토어값 변경
export default function sort(state = initialState, action) {
  switch(action.type) {
    case SORT_API :
      return {
        ...state,
        key: action.sortkey,
      };

    default:
      return state;
  }
}