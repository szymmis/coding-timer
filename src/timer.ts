import { Settings } from "./settings";

let timer = 0;
export const Timer = {
  getValue: () => timer,
  increment: () => ++timer,
  init: (timerValue: number) => {
    timer = timerValue;
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
  isCounting: () => timeout > 0,
};
