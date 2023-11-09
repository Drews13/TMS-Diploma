import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
  searchQuery: '',
  pagination: 8,
  searchDisability: false,
  filtersVisibility: false,
  filters: {
    sort: "Year",
    years: {
      from: "",
      to: ""
    },
    rating: {
      from: "",
      to: ""
    }
  },
  isLoading: false,
  userData: null,
  modalVisibility: false,
};

export const rootReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "ON_SEARCH": {
      return {
        ...state,
        searchQuery: action.payload
      }
    }
    case "SHOW_MORE": {
      return {
        ...state,
        pagination: state.pagination + 8
      }
    }
    case "RESET_PAGINATION": {
      return {
        ...state,
        pagination: 8
      }
    }
    case "SET_FILTERS_VISIBILITY": {
      return {
        ...state,
        filtersVisibility: !state.filtersVisibility
      }
    }
    case "SET_FILTERS": {
      return {
        ...state,
        filters: action.payload
      }
    }
    case "CLEAR_FILTERS": {
      return {
        ...state,
        filters: {
          sort: "Year",
          years: {
            from: "",
            to: ""
          },
          rating: {
            from: "",
            to: ""
          }
        }
      }
    }
    case "SET_LOADER_VISIBILITY": {
      return {
        ...state,
        isLoading: !state.isLoading
      }
    }
    case "SET_USER_DATA": {
      return {
        ...state,
        userData: action.payload
      }
    }
    case "SET_MODAL_VISIBILITY": {
      return {
        ...state,
        modalVisibility: !state.modalVisibility
      }
    }
    default:
      return state;
  }
};

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['userData']
};
 
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;