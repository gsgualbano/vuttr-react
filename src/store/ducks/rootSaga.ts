import { all, takeLatest } from 'redux-saga/effects';

import { ToolsTypes } from './tools/types';
import {
 load, add, remove, searchGeneral, searchByTag,
} from './tools/sagas';

export default function* rootSaga() {
  return yield all([
    takeLatest(ToolsTypes.LOAD_REQUEST, load),
    takeLatest(ToolsTypes.ADD_TOOL, add),
    takeLatest(ToolsTypes.REMOVE_TOOL, remove),
    takeLatest(ToolsTypes.SEARCH_TOOLS_GENERAL, searchGeneral),
    takeLatest(ToolsTypes.SEARCH_TOOLS_TAG, searchByTag),
  ]);
}
