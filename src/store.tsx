import { JSX, createContext, useContext } from "solid-js";
import { SetStoreFunction, Store, createStore } from "solid-js/store";
import { User } from "~/data/interface";

interface AppState {
  currentUser: User | null;
}

const StateContext =
  createContext<[Store<AppState>, SetStoreFunction<AppState>]>();

interface StateProviderProps {
  children: JSX.Element;
}

export const StateProvider = (props: StateProviderProps) => {
  const storage = localStorage.getItem("state");

  let initialState;

  if (storage === null) {
    // default state
    initialState = { currentUser: null };
  } else {
    initialState = JSON.parse(storage);
  }

  const [state, setState] = createStore<AppState>(initialState);

  // shit AnyScript :)
  const setStorage = (...props: any[]) => {
    (setState as any)(...props);
    localStorage.setItem("state", JSON.stringify(state));
  };

  return (
    <StateContext.Provider value={[state, setStorage]}>
      {props.children}
    </StateContext.Provider>
  );
};

export const useState = () => {
  const state = useContext(StateContext);

  if (typeof state === "undefined") {
    throw new Error("`useState` can only be used in `StateProvider`");
  }

  return state;
};
