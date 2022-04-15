import * as vscode from "vscode";
import { PersistenceType, Settings } from "./settings";
import { Timer } from "./timer";
import { ExtensionData } from "./types";

const STORAGE_KEY = "coding-timer";

function isDifferentByDay(d1: Date, d2: Date) {
  return (
    d1.getDay() !== d2.getDay() ||
    d1.getTime() - d2.getTime() >= 1000 * 60 * 60 * 24
  );
}

export const Storage = {
  init: (context: vscode.ExtensionContext) => {
    const persistance = Settings.getPersistance();
    if (
      persistance === PersistenceType.NONE ||
      (persistance === PersistenceType.DAY_TO_DAY &&
        isDifferentByDay(new Date(), new Date(Storage.get(context).date)))
    ) {
      Storage.reset(context);
    }
  },
  get: (context: vscode.ExtensionContext): ExtensionData =>
    context.globalState.get("coding-timer") ?? {
      value: 0,
      date: new Date().toISOString(),
    },
  /** @internal Do not use this function directly */
  set: (context: vscode.ExtensionContext, data: ExtensionData) => {
    context.globalState.update(STORAGE_KEY, data);
  },
  update: (context: vscode.ExtensionContext) => {
    const storage = Storage.get(context);
    Storage.set(context, { date: storage.date, value: Timer.getValue() });
  },
  reset: (context: vscode.ExtensionContext) => {
    Storage.set(context, { date: new Date().toISOString(), value: 0 });
  },
};
