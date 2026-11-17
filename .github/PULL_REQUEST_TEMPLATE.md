# Summary

<!-- What does this change, and why? Link the issue it closes: "Closes #123". -->

## Type of change

<!-- Match the Conventional Commit type used in your commit messages. -->

- [ ] `fix` — bug fix (no public API change)
- [ ] `feat` — new backward-compatible API
- [ ] Breaking change to the public API or the native ↔ JS event contract
- [ ] `docs` / `chore` / `ci` / `test` — no runtime change

## How was this tested?

<!--
Describe what you ran. For a native change, say which platform(s) and which
device or emulator you verified in the example app (foldable, iPhone Duo,
regular phone), and in which postures — native code is not unit-tested.
-->

- [ ] iOS (example app)
- [ ] Android (example app)

## Checklist

- [ ] `yarn lint`, `yarn typecheck`, and `yarn test` all pass.
- [ ] Public API changes are documented (JSDoc in `types.ts` **and** the README table).
- [ ] Native event changes keep all three sides in sync: the types in `types.ts`,
      the Swift module (`ios/`), and the Kotlin module (`android/`).
- [ ] `CHANGELOG.md` updated under `## [Unreleased]`.
- [ ] I did **not** bump the version — releases are cut separately
      (see [docs/VERSION-UPDATE.md](../docs/VERSION-UPDATE.md)).
