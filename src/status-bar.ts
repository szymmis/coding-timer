import * as vscode from "vscode";
import { Timeout } from "./timer";

function create() {
  const item = vscode.window.createStatusBarItem(
    vscode.StatusBarAlignment.Left,
    0
  );
  return item;
}

function formatTime(time: number): string {
  const hours = Math.floor(time / 3600);
  const mins = Math.floor((time % 3600) / 60);
  const secs = time % 60;

  if (time > 3600) {
    return `${hours}h ${mins}min ${secs}s`;
  } else if (time > 60) {
    return `${mins}min ${secs}s`;
  }
  return `${time}s`;
}

const item = create();
export const StatusBarItem = {
  init: () => {
    item.show();
    return item;
  },
  update: (timer: number) => {
    const string = formatTime(timer);

    if (Timeout.isCounting()) {
      item.text = string;
      item.tooltip = `Total coding time: ${string}`;
    } else {
      item.text = `--PAUSED ${string}--`;
      item.tooltip = "Start coding again to resume counter";
    }
  },
};
