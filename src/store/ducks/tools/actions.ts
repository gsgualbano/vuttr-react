import { action } from 'typesafe-actions';
import { ToolsTypes, Tool, FormData } from './types';
import toast from '~/toast';

/**
 * Load actions
 */
export const loadRequest = () => action(ToolsTypes.LOAD_REQUEST);
export const loadSuccess = (data: Tool[]) => action(ToolsTypes.LOAD_SUCCESS, { data });
export const loadFailure = () => action(ToolsTypes.LOAD_FAILURE);

/**
 * Add Actions
 * @param data Tool
 */
export const addTool = (data: FormData) => action(ToolsTypes.ADD_TOOL, { data });

export const addToolSuccess = (data: Tool) => {
  toast.success('SUCCESS! tool added');
  return action(ToolsTypes.ADD_TOOL_SUCCESS, { data });
};

export const addToolFailure = () => {
  toast.error('ERROR! not possible to add tool');
  return action(ToolsTypes.ADD_TOOL_FAILURE);
};

/**
 * Delete Actions
 * @param data number
 */
export const removeTool = (data: number) => action(ToolsTypes.REMOVE_TOOL, { data });

export const removeToolSuccess = () => {
  toast.success('SUCCESS! tool removed');
  return action(ToolsTypes.REMOVE_TOOL_SUCCESS);
};

export const removeToolFailure = () => {
  toast.error('ERROR! not possible to remove');
  return action(ToolsTypes.REMOVE_TOOL_FAILURE);
};

/**
 * Search Actions
 */
export const searchToolGeneral = (data: string) => action(ToolsTypes.SEARCH_TOOLS_GENERAL, { data });
export const searchToolTag = (data: string) => action(ToolsTypes.SEARCH_TOOLS_TAG, { data });
export const searchToolSuccess = (data: Tool[]) => action(ToolsTypes.SEARCH_TOOLS_SUCCESS, { data });
export const searchToolFailure = () => action(ToolsTypes.SEARCH_TOOLS_FAILURE);
