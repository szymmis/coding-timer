import * as vscode from "vscode";
import { Timeout, Timer } from "./timer";
import { StatusBarItem } from "./status-bar";
import { Storage } from "./storage";

export function activate(context: vscode.ExtensionContext) {
  StatusBarItem.init();
  Storage.init(context);
  const storage = Storage.get(context);
  Timer.init(storage.value);

  vscode.workspace.onDidChangeTextDocument(Timeout.reset);
  context.subscriptions.push(
    vscode.commands.registerCommand("coding-timer.reset", () =>
      resetTimer(context)
    )
  );

  setInterval(() => {
    tick(context);
  }, 1000);
}

function tick(context: vscode.ExtensionContext) {
  if (Timeout.descrement()) {
    Timer.increment();
    Storage.update(context);
  }
  StatusBarItem.update(Timer.getValue());
}

function resetTimer(context: vscode.ExtensionContext) {
  Storage.reset(context);
  Timeout.reset();
  Timer.init(0);
}

// this method is called when your extension is deactivated
export function deactivate() {}
