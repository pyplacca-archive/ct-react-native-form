import { AsyncStorage } from "react-native";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import { rootReducer } from "../store/reducers";


// configure the store to persist the data across app relaunches

const persistConfig = {
	key: "root",
	storage: AsyncStorage
};

const store = createStore(
	persistReducer(persistConfig, rootReducer),
	applyMiddleware(thunk)
);

const persistor = persistStore(store);

export {
	store,
	persistor
};
