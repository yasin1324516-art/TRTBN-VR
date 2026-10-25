
if (typeof gdjs.evtsExt__WebXR__setVrFrustumCulling !== "undefined") {
  gdjs.evtsExt__WebXR__setVrFrustumCulling.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__WebXR__setVrFrustumCulling = {};
gdjs.evtsExt__WebXR__setVrFrustumCulling.idToCallbackMap = new Map();


gdjs.evtsExt__WebXR__setVrFrustumCulling.userFunc0x1153d38 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
gdjs._webxrVrFrustumCullEnabled = !!eventsFunctionContext.getArgument("Enabled");
};
gdjs.evtsExt__WebXR__setVrFrustumCulling.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WebXR__setVrFrustumCulling.userFunc0x1153d38(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__setVrFrustumCulling.func = function(runtimeScene, Enabled, parentEventsFunctionContext) {
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
if (argName === "Enabled") return Enabled;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__WebXR__setVrFrustumCulling.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__WebXR__setVrFrustumCulling.registeredGdjsCallbacks = [];