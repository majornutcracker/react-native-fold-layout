# Security Policy

## Supported versions

Only the latest published minor release of
`@majornutcracker/react-native-fold-layout` receives security fixes.

| Version | Supported |
| ------- | --------- |
| 0.1.x   | ✅        |

## Reporting a vulnerability

**Please do not open a public issue for security problems.**

Report privately through either channel:

1. **GitHub Security Advisories** (preferred) — use
   [Report a vulnerability](https://github.com/majornutcracker/react-native-fold-layout/security/advisories/new)
   on this repository. This keeps the report private until a fix is published.
2. **Email** — <joshiparsa@gmail.com> with `SECURITY` in the subject.

Please include:

- The affected version of this package (and of Expo / React Native).
- A description of the issue and its impact.
- A minimal reproduction, if you have one.

You can expect an acknowledgement within **7 days** and a status update within
**30 days**. Once a fix ships, you will be credited in the advisory and the
[CHANGELOG](./CHANGELOG.md) unless you prefer to stay anonymous.

## Scope notes

This module reads the device's fold and hinge state through platform APIs
(Jetpack WindowManager on Android, UIKit on iOS) and reports it to JavaScript.
It does not request permissions, touch the network, or store data. Reports are
especially welcome for:

- Anything that makes the native module crash or hang the app on a device or
  posture it does not expect.
- Ways for the module to expose more than fold geometry and posture.

Out of scope:

- Bugs in the platform APIs themselves — please report those to Google or
  Apple, though we do want to know so we can work around them.
