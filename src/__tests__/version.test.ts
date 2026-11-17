import { readFileSync } from "fs";
import { join } from "path";

import { VERSION } from "../types";

const root = join(__dirname, "..", "..");
const read = (file: string) => readFileSync(join(root, file), "utf8");

describe("VERSION", () => {
  it("matches package.json", () => {
    expect(VERSION).toBe(JSON.parse(read("package.json")).version);
  });

  it("matches the native version constants", () => {
    expect(read("android/build.gradle")).toContain(`versionName "${VERSION}"`);
    expect(
      read(
        "android/src/main/java/com/majornutcracker/reactnativefoldlayout/MajornutcrackerReactNativeFoldLayoutModule.kt"
      )
    ).toContain(`"${VERSION}"`);
    expect(
      read("ios/MajornutcrackerReactNativeFoldLayoutModule.swift")
    ).toContain(`"${VERSION}"`);
  });
});
