import * as vscode from "vscode";
import { Timeout, Timer } from "./timer";
import { StatusBarItem } from "./status-bar";
import { Storage } from "./storage";
import { Settings } from "./settings";

export function activate(context: vscode.ExtensionContext) {
  StatusBarItem.init();
  Storage.init(context);
  const storage = Storage.get(context);
  Timer.init(storage.value);

  vscode.workspace.onDidChangeTextDocument(() => {
    Timeout.reset();
  });
  vscode.window.onDidChangeWindowState((e) => {
    if ( Settings.getFreezeOnWindowBlur() && !e.focused) {
      Timer.freeze();
    }
  });

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
}

function resetTimer(context: vscode.ExtensionContext) {
  Storage.reset(context);
  Timer.init(0);
  Timer.freeze();
}

// this method is called when your extension is deactivated
export function deactivate() {}
