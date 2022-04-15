import { Settings } from "./settings";

let timer = 0;
export const Timer = {
  init: (timerValue: number) => {
    timer = timerValue;
  },
  getValue: () => timer,
  increment: () => ++timer,
  isCounting: () => timeout > 0,
  freeze: () => {
    timeout = 0;
  },
};

let timeout = 0;
export const Timeout = {
  reset: () => {
    timeout = Settings.getTimeout();
  },
  descrement: () => {
    if (timeout > 0) {
      timeout--;
      return true;
    }
    return false;
  },
};
