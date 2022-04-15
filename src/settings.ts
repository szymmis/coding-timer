import * as vscode from "vscode";

export enum PersistenceType {
  NONE = "none",
  DAY_TO_DAY = "day",
  PERMAMENT = "permament",
}

export const Settings = {
  getTimeout: (): number =>
    vscode.workspace.getConfiguration("coding-timer").get("timeout") ?? 5,
  getPersistance: (): PersistenceType =>
    vscode.workspace.getConfiguration("coding-timer").get("persistance") ??
    PersistenceType.DAY_TO_DAY,
};
