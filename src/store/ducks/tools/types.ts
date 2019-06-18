/**
 * Action Types
 */
export enum ToolsTypes {
  LOAD_REQUEST = '@tools/LOAD_REQUEST',
  LOAD_SUCCESS = '@tools/LOAD_SUCCESS',
  LOAD_FAILURE = '@tools/LOAD_FAILURE',
  ADD_TOOL = '@tools/ADD_TOOL',
  ADD_TOOL_SUCCESS = '@tools/ADD_TOOL_SUCCESS',
  ADD_TOOL_FAILURE = '@tools/ADD_TOOL_FAILURE',
  REMOVE_TOOL = '@tools/REMOVE_TOOL',
  REMOVE_TOOL_SUCCESS = '@tools/REMOVE_TOOL_SUCCESS',
  REMOVE_TOOL_FAILURE = '@tools/REMOVE_TOOL_FAILURE',
  SEARCH_TOOLS_GENERAL = '@tools/SEARCH_TOOLS_GENERAL',
  SEARCH_TOOLS_TAG = '@tools/SEARCH_TOOLS_TAG',
  SEARCH_TOOLS_SUCCESS = '@tools/SEARCH_TOOLS_SUCCESS',
  SEARCH_TOOLS_FAILURE = '@tools/SEARCH_TOOLS_FAILURE',
}

export interface Tool {
  description: string;
  id: number;
  link: string;
  tags: string[];
  title: string;
}

export interface FormData {
  title: string;
  description: string;
  tags: string[];
  link: string;
}


export interface ToolsState {
  readonly data: Tool[];
  readonly loadError: boolean;
  readonly addError: boolean;
  readonly removeError: boolean;
}

export interface AddToolAction {
  type: typeof ToolsTypes.ADD_TOOL;
  payload: {
    data: FormData;
  };
}

export interface RemoveToolAction {
  type: typeof ToolsTypes.ADD_TOOL;
  payload: {
    data: number;
  };
}

export interface SearchGeneralAction {
  type: typeof ToolsTypes.SEARCH_TOOLS_GENERAL;
  payload: {
    data: string;
  };
}

export interface SearchByTagAction {
  type: typeof ToolsTypes.SEARCH_TOOLS_TAG;
  payload: {
    data: string;
  };
}
