# ⏳ Coding timer [`extension`](https://marketplace.visualstudio.com/items?itemName=szymmis.coding-timer) for [_`VSCode`_](https://github.com/microsoft/vscode)

![marketplace-installs](https://img.shields.io/visual-studio-marketplace/i/szymmis.coding-timer)
![marketplace-version](https://img.shields.io/visual-studio-marketplace/v/szymmis.coding-timer)

## 💬 Introduction

Have you ever wondered how much time do you spend **_actually_** coding?\
This extension counts time spending on doing your actual job instead of checking out reddit or instagram.

![Extension preview](./misc/video.gif)

## ⚙️ How does it works?

1. Install the extension in `vscode`
2. Set up a delay in configuration or leave it as default `(5s)`
   - This setting is responsible for the amount of time it takes to freeze your counter after last code change
3. Every time you modify any document in `vscode` delay is reset and the timer keeps increasing
4. When idle for enough time (haven't done any modification) the timer stops counting.
5. Specify persistance settings
   - Keep data between coding session
   - Clear persisted data on a day-to-day basis
   - Do not persist data at all

**_The goal of this tool is to show you how much time do you spend actually coding_** \
 The timer won't be resumed simply by using `vscode`\
You can resume it by

- Modifying any file
- Changing any character
- Copying and pasting
- Saving the file
- etc.

## 📝 Documentation

### Commands

| Name                   | Description                                               |
| ---------------------- | --------------------------------------------------------- |
| `Clear Persisted Data` | When invoked, all persisted extension data will be purged |

### Configuration

| Name          | Values                     | Description                                                        |
| ------------- | -------------------------- | ------------------------------------------------------------------ |
| `Timeout`     | number                     | After how many seconds, following last modification, timer freezes |
| `Persistance` | _none_, _day_, _permament_ | How long should timer data be persisted in memory                  |

## 🏦 License

[MIT](./LICENSE)

## 🖥️ Credits

[@szymmis](https://github.com/szymmis)
