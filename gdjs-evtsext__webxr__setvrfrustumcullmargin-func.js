
if (typeof gdjs.evtsExt__WebXR__setVrFrustumCullMargin !== "undefined") {
  gdjs.evtsExt__WebXR__setVrFrustumCullMargin.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__WebXR__setVrFrustumCullMargin = {};
gdjs.evtsExt__WebXR__setVrFrustumCullMargin.idToCallbackMap = new Map();


gdjs.evtsExt__WebXR__setVrFrustumCullMargin.userFunc0xa92478 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
var sc = eventsFunctionContext.getArgument("RadiusScale");
var mm = eventsFunctionContext.getArgument("MarginMeters");
gdjs._webxrVrCullRadiusScale  = (typeof sc === 'number' && sc > 0) ? sc : 1.2;
gdjs._webxrVrCullMarginMeters = (typeof mm === 'number' && mm >= 0) ? mm : 0.5;
};
gdjs.evtsExt__WebXR__setVrFrustumCullMargin.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WebXR__setVrFrustumCullMargin.userFunc0xa92478(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__setVrFrustumCullMargin.func = function(runtimeScene, RadiusScale, MarginMeters, parentEventsFunctionContext) {
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
if (argName === "RadiusScale") return RadiusScale;
if (argName === "MarginMeters") return MarginMeters;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__WebXR__setVrFrustumCullMargin.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__WebXR__setVrFrustumCullMargin.registeredGdjsCallbacks = [];