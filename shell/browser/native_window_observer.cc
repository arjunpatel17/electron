// Copyright (c) 2017 GitHub, Inc.
// Use of this source code is governed by the MIT license that can be
// found in the LICENSE file.

#include "shell/browser/native_window_observer.h"

namespace electron {

bool NativeWindowObserver::OnWindowQueryEndSession(
    bool isCritical,
    std::string* shutdownBlockReason) {
  return false;
}

}  // namespace electron
