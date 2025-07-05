# SparxPlus

A browser (chromium based / firefox based) extension for [Sparx-Learning](https://sparx-learning.com) web apps to improve QoL (without sacrificing learning!)  
  
Compatible with:

* <img width=14 src="assets/icon/sparx/maths.svg"> [SparxMaths](https://maths.sparx-learning.com).
* <img width=14 src="assets/icon/sparx/science.svg"> [SparxScience](https://science.sparx-learning.com). (Planned, not yet supported)

> [!WARNING]
> This is not officially supported by Sparx, and can be removed, banned or stop working whenever.  
> Issues you may encounter while using Sparx may be caused by this extension, as it modifies the html page heavily.  
> This is considered an experimental extension.  
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
