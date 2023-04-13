#include "JavaWrapperJSConfigManager.h"

namespace reanimated {

  JavaWrapperJSConfigManager::JavaWrapperJSConfigManager(
    jni::alias_ref<JavaWrapperJSConfigManager::javaobject> jThis)
    : javaPart_(jni::make_global(jThis)) {}

  jni::local_ref<JavaWrapperJSConfigManager::jhybriddata> JavaWrapperJSConfigManager::initHybrid(
    jni::alias_ref<jhybridobject> jThis) {
    return makeCxxInstance(jThis);
  }

  void JavaWrapperJSConfigManager::registerNatives() {
    registerHybrid({
      makeNativeMethod("initHybrid", JavaWrapperJSConfigManager::initHybrid),
      makeNativeMethod("getSharedTransitionConfig", JavaWrapperJSConfigManager::getSharedTransitionConfig),
    });
  }

  void JavaWrapperJSConfigManager::setJSConfigManager(
    std::shared_ptr<JSConfigManager> jsConfigManager
  ) {
    jsConfigManager_ = jsConfigManager;
  }

  int JavaWrapperJSConfigManager::getSharedTransitionConfig(const int viewTag) {
//    jsi::Runtime &runtime = *jsCallbacksManager_->getRuntimeHelper()->uiRuntime();
//    jsi::Value convertedValues = JNIHelper::convertJNIMapToJSIObject(
//      runtime, sharedAnimationWorkletData);
//    jsi::Value values = jsCallbacksManager_->executeSharedAnimationProgressCallback(
//      viewTag, progress, convertedValues);
//    return JNIHelper::convertJSIObjectToJNIMap(runtime, values.asObject(runtime));
    return 0;
  }

} // namespace reanimated