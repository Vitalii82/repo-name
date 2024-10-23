export const ADD_MEMBER = 'ADD_MEMBER';
export const UPDATE_MEMBER = 'UPDATE_MEMBER';
export const DELETE_MEMBER = 'DELETE_MEMBER';
export const FETCH_MEMBERS = 'FETCH_MEMBERS';
export const SET_MEMBERS = 'SET_MEMBERS';

export const addMember = (member) => ({ type: ADD_MEMBER, payload: member });
export const updateMember = (member) => ({ type: UPDATE_MEMBER, payload: member });
export const deleteMember = (id) => ({ type: DELETE_MEMBER, payload: id });
export const fetchMembers = () => ({ type: FETCH_MEMBERS });