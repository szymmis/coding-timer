import * as vscode from "vscode";

let timer = 0;
let timeout = 5;

export function activate(context: vscode.ExtensionContext) {
  console.log("???");
  console.log(vscode.workspace.onDidChangeTextDocument(() => (timeout = 5)));

  const item = createStatusBarItem();
  item.show();
  setInterval(() => {
    updateTimer(item);
  }, 1000);
}

function createStatusBarItem() {
  const item = vscode.window.createStatusBarItem(
    vscode.StatusBarAlignment.Left,
    0
  );
  return item;
}

function updateTimer(item: vscode.StatusBarItem) {
  const timeString = formatTime(timer);

  if (timeout > 0) {
    timeout--;
    timer++;
    item.text = timeString;
    item.tooltip = `Total coding time: ${timeString}`;
  } else {
    item.text = `--PAUSED ${timeString}--`;
    item.tooltip = "Start coding again to resume counter";
  }
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

// this method is called when your extension is deactivated
export function deactivate() {}
