# @majornutcracker/react-native-fold-layout

[![npm](https://img.shields.io/npm/v/@majornutcracker/react-native-fold-layout.svg)](https://www.npmjs.com/package/@majornutcracker/react-native-fold-layout)
[![license](https://img.shields.io/npm/l/@majornutcracker/react-native-fold-layout.svg)](./LICENSE)
![platforms](https://img.shields.io/badge/platforms-iOS%20%7C%20Android-lightgrey.svg)

> **Work in progress.** Nothing is published yet; the API below is the plan,
> not something you can install today.

Expo module for **iOS and Android** that tells your layout where the fold is.
It reports the fold and hinge regions in React Native coordinates and gives you
components that keep content off them — on Android foldables (Jetpack
WindowManager) and on iPhone Duo (the iOS 27.1 reserved-region APIs).

Web is not supported.

## Is this the right library?

| You need                                                  | This module                                                               |
| --------------------------------------------------------- | ------------------------------------------------------------------------- |
| Where the fold is, in dp, relative to your window         | **Yes** — one model for both platforms                                    |
| To keep a view, a modal or a sheet off the fold           | **Yes** — fold-safe views and region-aware placement                      |
| Two-pane, tabletop or book layouts that follow the device | **Yes** — split components with a single-column fallback                  |
| To know whether a given view crosses the fold             | **Yes** — per-view intersection                                           |
| The continuous hinge angle for animations and effects     | No — use [`expo-hinge`](https://docs.expo.dev/versions/latest/sdk/hinge/) |
| Web (CSS viewport segments)                               | Not yet                                                                   |

## Planned API

```tsx
const { regions, posture, isSeparating } = useFoldLayout();
const { intersects, side } = useFoldIntersection(viewRef);

<FoldSafeView avoid="division">…</FoldSafeView>

<FoldSplit
  primary={<List />}
  secondary={<Detail />}
  tabletop={{ top: <Video />, bottom: <Controls /> }}
  fallback="stack"
/>
```

## Installation

Not published yet. Once it is, in an Expo project:

```sh
npx expo install @majornutcracker/react-native-fold-layout
```

This is an Expo module. In bare React Native projects,
[install and configure `expo`](https://docs.expo.dev/bare/installing-expo-modules/)
first, then run `npx pod-install`.

**Requirements:** Android 11 (API 30) or later for fold data on Android. On iOS,
fold data needs iOS 27.1 and an app built with the iOS 27.1 SDK (Xcode 27.1);
older systems and devices without a fold get the inert, no-fold layout.

## Documentation

- **[API reference](./docs/REFERENCE.md)** — filled in as the API lands.
- **[`example/`](https://github.com/majornutcracker/react-native-fold-layout/tree/main/example)** — a runnable test bed.
  Open the native projects with `yarn open:ios` / `yarn open:android`.

## Contributing

Contributions are welcome! See [CONTRIBUTING.md](https://github.com/majornutcracker/react-native-fold-layout/blob/main/CONTRIBUTING.md) for setup,
workflow, and commit conventions.

## License

MIT — see [LICENSE](./LICENSE).
