import { call, put } from 'redux-saga/effects';
import api from '~/services/api';

import {
  loadRequest,
  loadSuccess,
  loadFailure,
  addToolSuccess,
  addToolFailure,
  removeToolSuccess,
  removeToolFailure,
  searchToolSuccess,
  searchToolFailure,
} from './actions';
import {
  AddToolAction, RemoveToolAction, SearchGeneralAction, SearchByTagAction,
} from './types';

export function* load() {
  try {
    const response = yield call(api.get, '/tools');
    yield put(loadSuccess(response.data));
  } catch (err) {
    yield put(loadFailure());
  }
}

export function* add(action: AddToolAction) {
  try {
    const response = yield call(api.post, '/tools', action.payload.data, {
      headers: { 'Content-Type': 'application/json' },
    });
    yield put(addToolSuccess(response.data));
  } catch (err) {
    yield put(addToolFailure());
  }
}

export function* remove(action: RemoveToolAction) {
  try {
    yield call(api.delete, `/tools/${action.payload.data}`);
    yield put(removeToolSuccess());
    yield put(loadRequest());
  } catch (err) {
    yield put(removeToolFailure());
  }
}

export function* searchGeneral(action: SearchGeneralAction) {
  try {
    const response = yield call(api.get, `/tools?q=${action.payload.data}`);
    yield put(searchToolSuccess(response.data));
  } catch (err) {
    yield put(searchToolFailure());
  }
}

export function* searchByTag(action: SearchByTagAction) {
  try {
    const response = yield call(api.get, `/tools?tags_like=${action.payload.data}`);
    yield put(searchToolSuccess(response.data));
  } catch (err) {
    yield put(searchToolFailure());
  }
}
