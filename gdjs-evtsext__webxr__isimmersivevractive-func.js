
if (typeof gdjs.evtsExt__WebXR__isImmersiveVRActive !== "undefined") {
  gdjs.evtsExt__WebXR__isImmersiveVRActive.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__WebXR__isImmersiveVRActive = {};
gdjs.evtsExt__WebXR__isImmersiveVRActive.idToCallbackMap = new Map();


gdjs.evtsExt__WebXR__isImmersiveVRActive.userFunc0x7d6d70 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
var tr = runtimeScene.getGame().getRenderer().getThreeRenderer();
eventsFunctionContext.returnValue = !!(tr && tr.xr && tr.xr.isPresenting);
};
gdjs.evtsExt__WebXR__isImmersiveVRActive.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WebXR__isImmersiveVRActive.userFunc0x7d6d70(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__isImmersiveVRActive.func = function(runtimeScene, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__WebXR__isImmersiveVRActive.eventsList0(runtimeScene, eventsFunctionContext);


return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__WebXR__isImmersiveVRActive.registeredGdjsCallbacks = [];