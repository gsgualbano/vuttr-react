import { Reducer } from 'redux';
import { ToolsState, ToolsTypes } from './types';

export const INITIAL_STATE: ToolsState = {
  data: [],
  loadError: false,
  addError: false,
  removeError: false,
};

export const reducer: Reducer<ToolsState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ToolsTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case ToolsTypes.LOAD_SUCCESS:
      return {
        ...state,
        loadError: false,
        data: action.payload.data,
      };
    case ToolsTypes.LOAD_FAILURE:
      return {
        ...state,
        loadError: true,
        data: [],
      };
    case ToolsTypes.ADD_TOOL_SUCCESS:
      return {
        ...state,
        addError: false,
        data: [...state.data, action.payload.data],
      };
    case ToolsTypes.ADD_TOOL_FAILURE:
      return {
        ...state,
        addError: true,
      };
    case ToolsTypes.REMOVE_TOOL_SUCCESS:
      return {
        ...state,
        removeError: false,
      };
    case ToolsTypes.REMOVE_TOOL_FAILURE:
      return {
        ...state,
        removeError: true,
      };
    case ToolsTypes.SEARCH_TOOLS_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
      };
    case ToolsTypes.SEARCH_TOOLS_FAILURE:
      return {
        ...state,
        loadError: true,
      };
    default:
      return state;
  }
};

export default reducer;
