# ⏳ Coding timer [`extension`](https://marketplace.visualstudio.com/items?itemName=szymmis.coding-timer) for [_`vscode`_](https://github.com/microsoft/vscode)

![marketplace-installs](https://img.shields.io/visual-studio-marketplace/i/szymmis.coding-timer)
![marketplace-version](https://img.shields.io/visual-studio-marketplace/v/szymmis.coding-timer)

## 💬 Introduction

Have you ever wondered how much time you spend **_actually_** coding?\
This extension counts time spent on doing your actual job instead of checking out Reddit or Instagram.

![Extension preview](images/video.gif)

## ⚙️ How does it work?

Any modification of a file results in starting the timer, which counts as long as you are active.\
The delay after the counting is frozen can be set in configuration.
There is also an option to control how the data is persisted. By default, the counter keeps track of time for a day, and it is cleaned up
the next day. There are also options to either keep it continuously or to not persist the timer value between sessions at all.

1. Install the extension in `vscode`
2. Set up a delay in configuration or leave it as default `5s`
3. Specify persistence settings
   - Keep data between coding session
   - Clear persisted data on a day-to-day basis
   - Do not persist data at all
4. Every time you modify a document timer is resumed and keeps counting.
5. When idle for enough time or tabbed out, the timer stops counting.

## 📝 Documentation

### Commands

| Name                   | Description                                               |
| ---------------------- | --------------------------------------------------------- |
| `Clear Persisted Data` | When invoked, all persisted extension data will be purged |

### Configuration

| Name          | Values                     | Description                                                        |
| ------------- | -------------------------- | ------------------------------------------------------------------ |
| `Timeout`     | number                     | After how many seconds, following last modification, timer freezes |
| `Persistence` | _none_, _day_, _permament_ | How long should timer data be persisted in memory                  |

## 🏦 License

[MIT](LICENSE)

## 🖥️ Credits

[@szymmis](https://github.com/szymmis)
