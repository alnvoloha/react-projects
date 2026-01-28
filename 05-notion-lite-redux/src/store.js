import { createStore, combineReducers } from "redux";

const initialAuthState = { user: null };
const authReducer = (state = initialAuthState, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };
    case "LOGOUT":
      return { ...state, user: null };
    default:
      return state;
  }
};

const initialNotesState = { notes: [] };
const notesReducer = (state = initialNotesState, action) => {
  switch (action.type) {
    case "SET_NOTES":
      return { ...state, notes: action.payload };
    case "ADD_NOTE":
      return { ...state, notes: [...state.notes, action.payload] };
    case "UPDATE_NOTE":
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === action.payload.id ? action.payload : note
        ),
      };
    case "DELETE_NOTE":
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.payload),
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  auth: authReducer,
  notes: notesReducer,
});

export const store = createStore(rootReducer);
