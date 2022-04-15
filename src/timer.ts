import { Settings } from "./settings";
import { StatusBarItem } from "./status-bar";

let timer = 0;
export const Timer = {
  init: (timerValue: number) => {
    timer = timerValue;
  },
  get: () => timer,
  set: (value: number) => {
    timer = value;
    StatusBarItem.update(value);
    return timer;
  },
  increment: () => Timer.set(timer + 1),
  freeze: () => {
    Timeout.set(0);
  },
  isCounting: () => timeout > 0,
};

let timeout = 0;
export const Timeout = {
  set: (value: number) => {
    timeout = value;
    StatusBarItem.update(Timer.get());
    return timeout;
  },
  reset: () => {
    Timeout.set(Settings.getTimeout());
  },
  descrement: () => {
    if (timeout > 0) {
      Timeout.set(timeout - 1);
      return true;
    }
    return false;
  },
};
