import * as vscode from "vscode";

export const Settings = {
  getTimeout: (): number =>
    vscode.workspace.getConfiguration("coding-timer").get("timeout") ?? 5,
};
