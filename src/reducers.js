import { ADD_MEMBER, UPDATE_MEMBER, DELETE_MEMBER, SET_MEMBERS } from './actions';

const initialState = { members: [] };

const familyReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MEMBERS:
            return { ...state, members: action.payload };
        case ADD_MEMBER:
            return { ...state, members: [...state.members, action.payload] };
        case UPDATE_MEMBER:
            return {
                ...state,
                members: state.members.map(member => member._id === action.payload._id ? action.payload : member),
            };
        case DELETE_MEMBER:
            return {
                ...state,
                members: state.members.filter(member => member._id !== action.payload),
            };
        default:
            return state;
    }
};

export default familyReducer;