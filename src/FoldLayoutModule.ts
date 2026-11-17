import { NativeModule, requireOptionalNativeModule } from "expo";

declare class MajornutcrackerReactNativeFoldLayoutModule extends NativeModule {
  version: string;
}

// Optional so the package still loads where the native module is not in the
// binary — Expo Go and Snack. The hooks fall back to an inert "no fold" layout
// there, the same answer a regular phone gives.
export default requireOptionalNativeModule<MajornutcrackerReactNativeFoldLayoutModule>(
  "MajornutcrackerReactNativeFoldLayout"
);
