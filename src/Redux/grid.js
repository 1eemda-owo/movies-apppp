// 액션
const GRID_LIST = "grid/GRID_LIST";

// 액션 생성 함수
export const setGridList = gridkey => ({ type : GRID_LIST, gridkey });

// 초기값
const initialState = {
  g_key: 'grid_3'
};

// 리덕스 스토어값 변경
export default function grid(state = initialState, action) {
  switch(action.type) {
    case GRID_LIST :
      return {
        ...state,
        g_key: action.gridkey,
      };

    default:
      return state;
  }
}