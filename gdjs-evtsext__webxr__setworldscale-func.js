
if (typeof gdjs.evtsExt__WebXR__setWorldScale !== "undefined") {
  gdjs.evtsExt__WebXR__setWorldScale.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__WebXR__setWorldScale = {};
gdjs.evtsExt__WebXR__setWorldScale.idToCallbackMap = new Map();


gdjs.evtsExt__WebXR__setWorldScale.userFunc0xe241a8 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
var val = eventsFunctionContext.getArgument("WorldScale");
gdjs._webxrVrWorldScale = (typeof val === 'number' && val > 0) ? val : 100;
};
gdjs.evtsExt__WebXR__setWorldScale.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WebXR__setWorldScale.userFunc0xe241a8(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__setWorldScale.func = function(runtimeScene, WorldScale, parentEventsFunctionContext) {
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
if (argName === "WorldScale") return WorldScale;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__WebXR__setWorldScale.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__WebXR__setWorldScale.registeredGdjsCallbacks = [];