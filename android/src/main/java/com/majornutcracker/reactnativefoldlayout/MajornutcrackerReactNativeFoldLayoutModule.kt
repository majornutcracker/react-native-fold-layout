package com.majornutcracker.reactnativefoldlayout

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class MajornutcrackerReactNativeFoldLayoutModule : Module() {
  override fun definition() = ModuleDefinition {
    Name("MajornutcrackerReactNativeFoldLayout")

    Constant("version") {
      "0.1.0"
    }
  }
}
