# Qwitter - Dependencies & Libraries

This document lists all libraries and dependencies used by the Qwitter codebase.

## Production Dependencies

### Core Framework & UI
- **[Quasar Framework](https://quasar.dev/)** (`^1.0.0`) - A Vue.js framework for building cross-platform applications (web, mobile, desktop)
- **[Vue.js](https://vuejs.org/)** - Progressive JavaScript framework (included with Quasar)
- **[@quasar/extras](https://quasar.dev/options/quasar-conf-js#Property%3A-extras)** (`^1.0.0`) - Quasar extras package containing icon sets and fonts

### Utilities
- **[core-js](https://github.com/zloirock/core-js)** (`^3.6.5`) - Modular standard library for JavaScript with polyfills
- **[date-fns](https://date-fns.org/)** (`^2.16.1`) - Modern JavaScript date utility library

### Backend & Database
- **[Firebase](https://firebase.google.com/)** (`^8.2.4`) - Google's platform for building web and mobile applications with real-time database, authentication, and hosting

## Development Dependencies

### Build Tools & CLI
- **[@quasar/app](https://quasar.dev/quasar-cli/quasar-conf-js)** (`^2.0.0`) - Quasar CLI application build tool
- **[Babel](https://babeljs.io/)** - JavaScript compiler (via @quasar/babel-preset-app)
- **[@quasar/babel-preset-app](https://quasar.dev/)** - Babel preset for Quasar applications

### Desktop Application (Electron)
- **[Electron](https://www.electronjs.org/)** (`^9.4.1`) - Framework for building cross-platform desktop applications
- **[electron-debug](https://github.com/sindresorhus/electron-debug)** (`^3.2.0`) - Useful debugging utilities for Electron
- **[electron-devtools-installer](https://github.com/MarshallOfSound/electron-devtools-installer)** (`^3.1.1`) - Utility to install DevTools extensions in Electron
- **[electron-packager](https://github.com/electron-userland/electron-packager)** (`^14.2.1`) - Package Electron applications into platform-specific bundles
- **[devtron](https://github.com/electron-userland/devtron)** (`^1.4.0`) - DevTools extension for Electron

### CSS Processing
- **[PostCSS](https://postcss.org/)** - Tool for transforming CSS with JavaScript plugins
- **[Autoprefixer](https://github.com/postcss/autoprefixer)** - PostCSS plugin to parse CSS and add vendor prefixes

### Icon Sets & Fonts (via Quasar Extras)
- **Font Awesome 5** - Icon library
- **Material Icons** - Google's Material Design icon set
- **Roboto Font** - Google's Roboto typeface

## Build & Runtime Environment

### Node.js & Package Management
- **Node.js** (>= 10.18.1) - JavaScript runtime
- **npm** (>= 6.13.4) - Node package manager
- **yarn** (>= 1.21.1) - Alternative package manager (optional)

## Platform Support

The application is built to support multiple platforms:
- **Web** - Modern browsers (Chrome, Firefox, Edge, Safari, Opera)
- **Desktop** - Windows, macOS, Linux (via Electron)
- **Mobile** - iOS and Android (via Cordova)

## Browser Support

As defined in `package.json` browserslist:
- Last 10 Chrome versions
- Last 10 Firefox versions
- Last 4 Edge versions
- Last 7 Safari versions
- Last 8 Android versions
- Last 8 ChromeAndroid versions
- Last 8 FirefoxAndroid versions
- Last 10 iOS versions
- Last 5 Opera versions

## Configuration Files

The following configuration files manage dependencies and build settings:
- `package.json` - Project metadata and dependency declarations
- `package-lock.json` - Locked versions of all dependencies
- `quasar.conf.js` - Quasar framework configuration
- `babel.config.js` - Babel transpiler configuration
- `.postcssrc.js` - PostCSS configuration
- `jsconfig.json` - JavaScript configuration for IDE support
- `.editorconfig` - Editor configuration for consistent code style

## Notes

- The project uses Quasar's auto-import strategy for components and directives
- Firebase is configured via `src/boot/firebase.js` and requires manual setup with Firebase project credentials
- The application supports multiple build targets (web, Electron, Cordova) through Quasar's multi-mode build system
