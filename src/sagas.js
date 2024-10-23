import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_MEMBERS, ADD_MEMBER, UPDATE_MEMBER, DELETE_MEMBER, SET_MEMBERS } from './actions';

function* fetchMembers() {
    const response = yield call(axios.get, 'http://localhost:5000/api/family');
    yield put({ type: SET_MEMBERS, payload: response.data });
}

function* addMember(action) {
    const response = yield call(axios.post, 'http://localhost:5000/api/family', action.payload);
    yield put({ type: ADD_MEMBER, payload: response.data });
}

function* updateMember(action) {
        const response = yield call(axios.put, http: //localhost:5000/api/family/${action.payload._id}, action.payload);
            yield put({ type: UPDATE_MEMBER, payload: response.data });
        }

        function* deleteMember(action) {
                yield call(axios.delete, http: //localhost:5000/api/family/${action.payload});
                    yield put({ type: DELETE_MEMBER, payload: action.payload });
                }

                // Root Saga
                export default function* rootSaga() {
                    yield takeEvery(FETCH_MEMBERS, fetchMembers);
                    yield takeEvery(ADD_MEMBER, addMember);
                    yield takeEvery(UPDATE_MEMBER, updateMember);
                    yield takeEvery(DELETE_MEMBER, deleteMember);
                }