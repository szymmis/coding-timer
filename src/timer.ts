let timer = 0;
export const Timer = {
  getValue: () => timer,
  increment: () => ++timer,
  init: (timerValue: number) => {
    timer = timerValue;
  },
};

let timeout = 5;
export const Timeout = {
  reset: () => {
    timeout = 5;
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
