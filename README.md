# SparxPlus

A browser (chromium based / firefox based) extension for [Sparx-Learning](https://sparx-learning.com) web apps to improve QoL (without sacrificing learning!)  
  
Compatible with:

* <img width=14 src="assets/icon/sparx/mathss.png"> [SparxMaths](https://maths.sparx-learning.com).
* <img width=14 src="assets/icon/sparx/sciencee.png"> [SparxScience](https://science.sparx-learning.com). (Planned, not yet supported)
* <img width=14 src="assets/icon/sparx/readerr.png"> [SparxReader](https://reader.sparx-learning.com). (Planned, not yet supported)

> [!WARNING]
> This is not officially supported by Sparx, and can be removed, banned or stop working whenever.  
> This is considered an experimental extension, so you may encounter issues while using SparxPlus. Please make sure to report these issues in the issues tab.

> [!NOTE]
> This is NOT intended to be a browser extension that does your Sparx homework for you, but to make the experience better.
> Features considered cheating (eg. autosolving) are not planned and will never happen.

This extension is not affiliated with Sparx, otherwise known as [Sparx-Learning](https://sparx-learning.com).  

## Features

* Supports SparxMaths
  * Fully configurable settings, available in the settings tab
  * A native (albeit experimental) dark mode
  * Progressive Disclosure, a feature which hides tasks that you aren't currently doing, and the amount of tasks
  * Whiteboard (To do working out)

## Why is this code open-source?

Due to the nature of Sparx, it requires a login. These logins require you to be a part of an academy which pays Sparx-Learning for accounts, and you must be provided a login to properly test this extension. This means that, especially for the Chrome Web Store (sorry guys im not giving you my account details), it's harder to test the extension.

In order to make sure that people feel comfortable using this extension, I have made the source code of this extension fully open source, under GPL-3.0 (meaning forks must also have the same license), so the code can be audited and checked for the skeptical like me.

It's also open-source, because I like open-source code :)

## Instructions on how to build from source

* Clone this repository eg. `git clone https://github.com/deadfry42/SparxPlus.git`
* (Make sure you have npm installed)
* run `npm i` # to get the npm packages installed
* once done, run `npm run build` # to build release
* once done, the finished extension is placed in the dist folder.
* you can load the extension in chromium in chrome://extensions -> developer mode -> load unpacked
* you can load the extension in firefox (temporarily) in about:debugging -> This (Firefox) -> Load Temporary Add-on

## How to download

Visit `https://nikodem.co.uk/` and check the "Sparx Plus" Tab.  
> Available for Chrome & Firefox, with Safari planned in the future.

## Discord

Join the discord server, see some more information about it!  
`https://discord.gg/uKbdBa4M5B`
