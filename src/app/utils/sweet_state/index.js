import { createStore, createSubscriber, createHook } from "react-sweet-state";

const pathname = window.location.pathname;

const initIsDark = () => {
  if (pathname === "/" || pathname === "/portfolio" || pathname === "/contact")
    return 0;

  return 1;
};

const Store = createStore({
  initialState: {
    isdark: initIsDark(),
  },
  actions: {
    setIsDark: (mode) => ({ setState, getState }) => {
      setState({
        isdark: mode,
      });
    },
  },
});

export const CounterSubscriber = createSubscriber(Store);
export const useCounter = createHook(Store);
