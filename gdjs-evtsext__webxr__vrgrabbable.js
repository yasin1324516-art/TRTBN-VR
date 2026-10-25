
gdjs.evtsExt__WebXR__VrGrabbable = gdjs.evtsExt__WebXR__VrGrabbable || {};

/**
 * Behavior generated from VR Grabbable (WebXR)
 */
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable = class VrGrabbable extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.GrabRange = behaviorData.GrabRange !== undefined ? behaviorData.GrabRange : Number("10") || 0;
    this._behaviorData.ThrowScale = behaviorData.ThrowScale !== undefined ? behaviorData.ThrowScale : Number("1.5") || 0;
    this._behaviorData.MagneticGrabEnabled = behaviorData.MagneticGrabEnabled !== undefined ? behaviorData.MagneticGrabEnabled : false;
    this._behaviorData.StickyGrab = behaviorData.StickyGrab !== undefined ? behaviorData.StickyGrab : false;
    this._behaviorData.GrabMode = behaviorData.GrabMode !== undefined ? behaviorData.GrabMode : "AABB";
    this._behaviorData.HoldOffsetX = behaviorData.HoldOffsetX !== undefined ? behaviorData.HoldOffsetX : Number("0") || 0;
    this._behaviorData.HoldOffsetY = behaviorData.HoldOffsetY !== undefined ? behaviorData.HoldOffsetY : Number("0") || 0;
    this._behaviorData.HoldOffsetZ = behaviorData.HoldOffsetZ !== undefined ? behaviorData.HoldOffsetZ : Number("0") || 0;
    this._behaviorData.HoldRotationX = behaviorData.HoldRotationX !== undefined ? behaviorData.HoldRotationX : Number("0") || 0;
    this._behaviorData.HoldRotationY = behaviorData.HoldRotationY !== undefined ? behaviorData.HoldRotationY : Number("0") || 0;
    this._behaviorData.HoldRotationZ = behaviorData.HoldRotationZ !== undefined ? behaviorData.HoldRotationZ : Number("0") || 0;
    this._behaviorData.HolsterTag = behaviorData.HolsterTag !== undefined ? behaviorData.HolsterTag : "";
    this._behaviorData.HangOffsetX = behaviorData.HangOffsetX !== undefined ? behaviorData.HangOffsetX : Number("0") || 0;
    this._behaviorData.HangOffsetY = behaviorData.HangOffsetY !== undefined ? behaviorData.HangOffsetY : Number("0") || 0;
    this._behaviorData.HangOffsetZ = behaviorData.HangOffsetZ !== undefined ? behaviorData.HangOffsetZ : Number("0") || 0;
    this._behaviorData.HangRotationX = behaviorData.HangRotationX !== undefined ? behaviorData.HangRotationX : Number("0") || 0;
    this._behaviorData.HangRotationY = behaviorData.HangRotationY !== undefined ? behaviorData.HangRotationY : Number("0") || 0;
    this._behaviorData.HangRotationZ = behaviorData.HangRotationZ !== undefined ? behaviorData.HangRotationZ : Number("0") || 0;
  }

  // Hot-reload:
  applyBehaviorOverriding(behaviorOverriding) {
    
    if (behaviorOverriding.GrabRange !== undefined)
      this._behaviorData.GrabRange = behaviorOverriding.GrabRange;
    if (behaviorOverriding.ThrowScale !== undefined)
      this._behaviorData.ThrowScale = behaviorOverriding.ThrowScale;
    if (behaviorOverriding.MagneticGrabEnabled !== undefined)
      this._behaviorData.MagneticGrabEnabled = behaviorOverriding.MagneticGrabEnabled;
    if (behaviorOverriding.StickyGrab !== undefined)
      this._behaviorData.StickyGrab = behaviorOverriding.StickyGrab;
    if (behaviorOverriding.GrabMode !== undefined)
      this._behaviorData.GrabMode = behaviorOverriding.GrabMode;
    if (behaviorOverriding.HoldOffsetX !== undefined)
      this._behaviorData.HoldOffsetX = behaviorOverriding.HoldOffsetX;
    if (behaviorOverriding.HoldOffsetY !== undefined)
      this._behaviorData.HoldOffsetY = behaviorOverriding.HoldOffsetY;
    if (behaviorOverriding.HoldOffsetZ !== undefined)
      this._behaviorData.HoldOffsetZ = behaviorOverriding.HoldOffsetZ;
    if (behaviorOverriding.HoldRotationX !== undefined)
      this._behaviorData.HoldRotationX = behaviorOverriding.HoldRotationX;
    if (behaviorOverriding.HoldRotationY !== undefined)
      this._behaviorData.HoldRotationY = behaviorOverriding.HoldRotationY;
    if (behaviorOverriding.HoldRotationZ !== undefined)
      this._behaviorData.HoldRotationZ = behaviorOverriding.HoldRotationZ;
    if (behaviorOverriding.HolsterTag !== undefined)
      this._behaviorData.HolsterTag = behaviorOverriding.HolsterTag;
    if (behaviorOverriding.HangOffsetX !== undefined)
      this._behaviorData.HangOffsetX = behaviorOverriding.HangOffsetX;
    if (behaviorOverriding.HangOffsetY !== undefined)
      this._behaviorData.HangOffsetY = behaviorOverriding.HangOffsetY;
    if (behaviorOverriding.HangOffsetZ !== undefined)
      this._behaviorData.HangOffsetZ = behaviorOverriding.HangOffsetZ;
    if (behaviorOverriding.HangRotationX !== undefined)
      this._behaviorData.HangRotationX = behaviorOverriding.HangRotationX;
    if (behaviorOverriding.HangRotationY !== undefined)
      this._behaviorData.HangRotationY = behaviorOverriding.HangRotationY;
    if (behaviorOverriding.HangRotationZ !== undefined)
      this._behaviorData.HangRotationZ = behaviorOverriding.HangRotationZ;

    return true;
  }

  // Network sync:
  getNetworkSyncData(syncOptions) {
    return {
      ...super.getNetworkSyncData(syncOptions),
      props: {
        
    GrabRange: this._behaviorData.GrabRange,
    ThrowScale: this._behaviorData.ThrowScale,
    MagneticGrabEnabled: this._behaviorData.MagneticGrabEnabled,
    StickyGrab: this._behaviorData.StickyGrab,
    GrabMode: this._behaviorData.GrabMode,
    HoldOffsetX: this._behaviorData.HoldOffsetX,
    HoldOffsetY: this._behaviorData.HoldOffsetY,
    HoldOffsetZ: this._behaviorData.HoldOffsetZ,
    HoldRotationX: this._behaviorData.HoldRotationX,
    HoldRotationY: this._behaviorData.HoldRotationY,
    HoldRotationZ: this._behaviorData.HoldRotationZ,
    HolsterTag: this._behaviorData.HolsterTag,
    HangOffsetX: this._behaviorData.HangOffsetX,
    HangOffsetY: this._behaviorData.HangOffsetY,
    HangOffsetZ: this._behaviorData.HangOffsetZ,
    HangRotationX: this._behaviorData.HangRotationX,
    HangRotationY: this._behaviorData.HangRotationY,
    HangRotationZ: this._behaviorData.HangRotationZ,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData, options) {
    super.updateFromNetworkSyncData(networkSyncData, options);
    
    if (networkSyncData.props.GrabRange !== undefined)
      this._behaviorData.GrabRange = networkSyncData.props.GrabRange;
    if (networkSyncData.props.ThrowScale !== undefined)
      this._behaviorData.ThrowScale = networkSyncData.props.ThrowScale;
    if (networkSyncData.props.MagneticGrabEnabled !== undefined)
      this._behaviorData.MagneticGrabEnabled = networkSyncData.props.MagneticGrabEnabled;
    if (networkSyncData.props.StickyGrab !== undefined)
      this._behaviorData.StickyGrab = networkSyncData.props.StickyGrab;
    if (networkSyncData.props.GrabMode !== undefined)
      this._behaviorData.GrabMode = networkSyncData.props.GrabMode;
    if (networkSyncData.props.HoldOffsetX !== undefined)
      this._behaviorData.HoldOffsetX = networkSyncData.props.HoldOffsetX;
    if (networkSyncData.props.HoldOffsetY !== undefined)
      this._behaviorData.HoldOffsetY = networkSyncData.props.HoldOffsetY;
    if (networkSyncData.props.HoldOffsetZ !== undefined)
      this._behaviorData.HoldOffsetZ = networkSyncData.props.HoldOffsetZ;
    if (networkSyncData.props.HoldRotationX !== undefined)
      this._behaviorData.HoldRotationX = networkSyncData.props.HoldRotationX;
    if (networkSyncData.props.HoldRotationY !== undefined)
      this._behaviorData.HoldRotationY = networkSyncData.props.HoldRotationY;
    if (networkSyncData.props.HoldRotationZ !== undefined)
      this._behaviorData.HoldRotationZ = networkSyncData.props.HoldRotationZ;
    if (networkSyncData.props.HolsterTag !== undefined)
      this._behaviorData.HolsterTag = networkSyncData.props.HolsterTag;
    if (networkSyncData.props.HangOffsetX !== undefined)
      this._behaviorData.HangOffsetX = networkSyncData.props.HangOffsetX;
    if (networkSyncData.props.HangOffsetY !== undefined)
      this._behaviorData.HangOffsetY = networkSyncData.props.HangOffsetY;
    if (networkSyncData.props.HangOffsetZ !== undefined)
      this._behaviorData.HangOffsetZ = networkSyncData.props.HangOffsetZ;
    if (networkSyncData.props.HangRotationX !== undefined)
      this._behaviorData.HangRotationX = networkSyncData.props.HangRotationX;
    if (networkSyncData.props.HangRotationY !== undefined)
      this._behaviorData.HangRotationY = networkSyncData.props.HangRotationY;
    if (networkSyncData.props.HangRotationZ !== undefined)
      this._behaviorData.HangRotationZ = networkSyncData.props.HangRotationZ;
  }

  // Properties:
  
  _getGrabRange() {
    return this._behaviorData.GrabRange !== undefined ? this._behaviorData.GrabRange : Number("10") || 0;
  }
  _setGrabRange(newValue) {
    this._behaviorData.GrabRange = newValue;
  }
  _getThrowScale() {
    return this._behaviorData.ThrowScale !== undefined ? this._behaviorData.ThrowScale : Number("1.5") || 0;
  }
  _setThrowScale(newValue) {
    this._behaviorData.ThrowScale = newValue;
  }
  _getMagneticGrabEnabled() {
    return this._behaviorData.MagneticGrabEnabled !== undefined ? this._behaviorData.MagneticGrabEnabled : false;
  }
  _setMagneticGrabEnabled(newValue) {
    this._behaviorData.MagneticGrabEnabled = newValue;
  }
  _toggleMagneticGrabEnabled() {
    this._setMagneticGrabEnabled(!this._getMagneticGrabEnabled());
  }
  _getStickyGrab() {
    return this._behaviorData.StickyGrab !== undefined ? this._behaviorData.StickyGrab : false;
  }
  _setStickyGrab(newValue) {
    this._behaviorData.StickyGrab = newValue;
  }
  _toggleStickyGrab() {
    this._setStickyGrab(!this._getStickyGrab());
  }
  _getGrabMode() {
    return this._behaviorData.GrabMode !== undefined ? this._behaviorData.GrabMode : "AABB";
  }
  _setGrabMode(newValue) {
    this._behaviorData.GrabMode = newValue;
  }
  _getHoldOffsetX() {
    return this._behaviorData.HoldOffsetX !== undefined ? this._behaviorData.HoldOffsetX : Number("0") || 0;
  }
  _setHoldOffsetX(newValue) {
    this._behaviorData.HoldOffsetX = newValue;
  }
  _getHoldOffsetY() {
    return this._behaviorData.HoldOffsetY !== undefined ? this._behaviorData.HoldOffsetY : Number("0") || 0;
  }
  _setHoldOffsetY(newValue) {
    this._behaviorData.HoldOffsetY = newValue;
  }
  _getHoldOffsetZ() {
    return this._behaviorData.HoldOffsetZ !== undefined ? this._behaviorData.HoldOffsetZ : Number("0") || 0;
  }
  _setHoldOffsetZ(newValue) {
    this._behaviorData.HoldOffsetZ = newValue;
  }
  _getHoldRotationX() {
    return this._behaviorData.HoldRotationX !== undefined ? this._behaviorData.HoldRotationX : Number("0") || 0;
  }
  _setHoldRotationX(newValue) {
    this._behaviorData.HoldRotationX = newValue;
  }
  _getHoldRotationY() {
    return this._behaviorData.HoldRotationY !== undefined ? this._behaviorData.HoldRotationY : Number("0") || 0;
  }
  _setHoldRotationY(newValue) {
    this._behaviorData.HoldRotationY = newValue;
  }
  _getHoldRotationZ() {
    return this._behaviorData.HoldRotationZ !== undefined ? this._behaviorData.HoldRotationZ : Number("0") || 0;
  }
  _setHoldRotationZ(newValue) {
    this._behaviorData.HoldRotationZ = newValue;
  }
  _getHolsterTag() {
    return this._behaviorData.HolsterTag !== undefined ? this._behaviorData.HolsterTag : "";
  }
  _setHolsterTag(newValue) {
    this._behaviorData.HolsterTag = newValue;
  }
  _getHangOffsetX() {
    return this._behaviorData.HangOffsetX !== undefined ? this._behaviorData.HangOffsetX : Number("0") || 0;
  }
  _setHangOffsetX(newValue) {
    this._behaviorData.HangOffsetX = newValue;
  }
  _getHangOffsetY() {
    return this._behaviorData.HangOffsetY !== undefined ? this._behaviorData.HangOffsetY : Number("0") || 0;
  }
  _setHangOffsetY(newValue) {
    this._behaviorData.HangOffsetY = newValue;
  }
  _getHangOffsetZ() {
    return this._behaviorData.HangOffsetZ !== undefined ? this._behaviorData.HangOffsetZ : Number("0") || 0;
  }
  _setHangOffsetZ(newValue) {
    this._behaviorData.HangOffsetZ = newValue;
  }
  _getHangRotationX() {
    return this._behaviorData.HangRotationX !== undefined ? this._behaviorData.HangRotationX : Number("0") || 0;
  }
  _setHangRotationX(newValue) {
    this._behaviorData.HangRotationX = newValue;
  }
  _getHangRotationY() {
    return this._behaviorData.HangRotationY !== undefined ? this._behaviorData.HangRotationY : Number("0") || 0;
  }
  _setHangRotationY(newValue) {
    this._behaviorData.HangRotationY = newValue;
  }
  _getHangRotationZ() {
    return this._behaviorData.HangRotationZ !== undefined ? this._behaviorData.HangRotationZ : Number("0") || 0;
  }
  _setHangRotationZ(newValue) {
    this._behaviorData.HangRotationZ = newValue;
  }
}

/**
 * Shared data generated from VR Grabbable (WebXR)
 */
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.SharedData = class VrGrabbableSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._WebXR_VrGrabbableSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._WebXR_VrGrabbableSharedData = new gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.SharedData(
      initialData
    );
  }
  return instanceContainer._WebXR_VrGrabbableSharedData;
}

// Methods:
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.onCreatedContext = {};
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.onCreatedContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.onCreatedContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.onCreatedContext.userFunc0x162eed8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
if (!gdjs._webxrVrGrabbableRegistry) gdjs._webxrVrGrabbableRegistry = [];
for (var i = 0; i < objs.length; i++) {
    var obj = objs[i];
    var beh = obj.getBehavior(behaviorName);
    if (!beh) continue;
    beh._state = 'idle';
    beh._grabbingHand = null;
    beh._grabOffset = {x:0,y:0,z:0};
    beh._flyTimer = 0;
    beh._origGravScale = 1;
    beh._targetingHand = null;
    beh._otherHoldingHand = null;
    beh._holsterEntry = null;
    gdjs._webxrVrGrabbableRegistry.push({obj: obj, beh: beh});
}
};
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.onCreatedContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.onCreatedContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.onCreatedContext.userFunc0x162eed8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.onCreated = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.onCreatedContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.onCreatedContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.onDestroyContext = {};
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.onDestroyContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.onDestroyContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.onDestroyContext.userFunc0x162e7b8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
for (var i = 0; i < objs.length; i++) {
    var obj = objs[i];
    var beh = obj.getBehavior(behaviorName);
    if (!beh) continue;
    if (gdjs._webxrVrGrabbableRegistry) {
        gdjs._webxrVrGrabbableRegistry = gdjs._webxrVrGrabbableRegistry.filter(function(e){ return e.obj !== obj; });
    }
    if (beh._holsterEntry) { beh._holsterEntry.occupant = null; beh._holsterEntry = null; }
    if (beh._state === 'grabbed' || beh._state === 'targeted' || beh._state === 'flyingToCtrl') {
        var phys = null;
        try { phys = obj.getBehavior('Physics3D'); } catch(e) {}
        if (phys && typeof phys.gravityScale === 'number') {
            phys.setGravityScale(beh._origGravScale);
            if (phys._body && typeof Jolt !== 'undefined') {
                var _fBi = phys._sharedData.bodyInterface;
                var _fId = phys._body.GetID();
                var _fMt = (beh._origJoltMotionType !== undefined) ? beh._origJoltMotionType : Jolt.EMotionType_Dynamic;
                _fBi.SetMotionType(_fId, _fMt, Jolt.EActivation_Activate);
                beh._origJoltMotionType = undefined;
                _fBi.SetLinearVelocity(_fId, phys.getVec3(0, 0, 0));
                _fBi.SetAngularVelocity(_fId, phys.getVec3(0, 0, 0));
                _fBi.ActivateBody(_fId);
            }
        }
    }
}
};
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.onDestroyContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.onDestroyContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.onDestroyContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.onDestroyContext.userFunc0x162e7b8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.onDestroy = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.onDestroyContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.onDestroyContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.onDestroyContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.doStepPreEventsContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.doStepPreEventsContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.doStepPreEventsContext.userFunc0x1693848 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var tr = runtimeScene.getGame().getRenderer().getThreeRenderer();
if (!tr || !tr.xr || !tr.xr.isPresenting) return;
var controllers = gdjs._webxrVrControllers;
if (!controllers) return;
var anchor = gdjs._webxrVrAnchor;
if (!anchor) return;
var dt = runtimeScene.getTimeManager().getElapsedTime() / 1000;
gdjs._webxrRtSceneRef = runtimeScene;
if (typeof gdjs._webxrDebugThrow === 'undefined') gdjs._webxrDebugThrow = true;
if (!gdjs._webxrDebugLines) gdjs._webxrDebugLines = {};
if (!gdjs._webxrDbgFn) {
    gdjs._webxrDbgFn = function(key, text) {
        if (!gdjs._webxrDebugThrow || !gdjs._webxrRtSceneRef) return;
        gdjs._webxrDebugLines[key] = text;
        var _o=['track.L','track.R','throw.enter','throw.cond','throw','throw.hist','throw.rb','throw.post','launch','launch.rb'];
        var _s = [];
        for (var _i = 0; _i < _o.length; _i++) {
            if (gdjs._webxrDebugLines[_o[_i]]) _s.push(gdjs._webxrDebugLines[_o[_i]]);
        }
        try { gdjs._webxrRtSceneRef.getGame().getVariables().get('VrDebug').setString(_s.join('\n')); } catch(e) {}
    };
}
if (!gdjs._webxrThrowVelFromHistory) {
    gdjs._webxrThrowVelFromHistory = function(vh, now, windowMs) {
        if (!vh || vh.length === 0) return {x:0, y:0, z:0, n:0};
        var _pk = null, _pkSq = -1, _pkT = 0;
        for (var _ti = 0; _ti < vh.length; _ti++) {
            var _age = now - vh[_ti].t;
            if (_age < 20 || _age > windowMs) continue;
            var _s = vh[_ti].vx*vh[_ti].vx + vh[_ti].vy*vh[_ti].vy + vh[_ti].vz*vh[_ti].vz;
            if (_s > _pkSq) { _pkSq = _s; _pk = vh[_ti]; _pkT = vh[_ti].t; }
        }
        if (!_pk) {
            var _sx=0,_sy=0,_sz=0,_n=0;
            for (var _tj = vh.length - 1; _tj >= 0 && _n < 3; _tj--) {
                if (now - vh[_tj].t < 20) continue;
                _sx += vh[_tj].vx; _sy += vh[_tj].vy; _sz += vh[_tj].vz; _n++;
            }
            return _n > 0 ? {x:_sx/_n, y:_sy/_n, z:_sz/_n, n:_n} : {x:0, y:0, z:0, n:0};
        }
        var _half = 45;
        var _ax=0,_ay=0,_az=0,_an=0;
        for (var _tk = 0; _tk < vh.length; _tk++) {
            if (Math.abs(vh[_tk].t - _pkT) > _half) continue;
            if (now - vh[_tk].t < 20) continue;
            _ax += vh[_tk].vx; _ay += vh[_tk].vy; _az += vh[_tk].vz; _an++;
        }
        if (_an === 0) return {x:_pk.vx, y:_pk.vy, z:_pk.vz, n:1};
        return {x:_ax/_an, y:_ay/_an, z:_az/_an, n:_an};
    };
}

// Helper: get gamepad for a hand
function _getGamepad(hand) {
    var sess = tr.xr.getSession ? tr.xr.getSession() : null;
    if (!sess || !sess.inputSources) return null;
    for (var si = 0; si < sess.inputSources.length; si++) {
        var src = sess.inputSources[si];
        if (src.handedness === hand && src.gamepad) return src.gamepad;
    }
    return null;
}

// Helper: get controller GDevelop position (uses VrController offset if set)
function _ctrlPos(hand) {
    var entry = controllers[hand];
    if (!entry || !entry.grip || !entry.connected) return null;
    var wp = entry._adjustedWP ? entry._adjustedWP.clone() : new THREE.Vector3();
    if (!entry._adjustedWP) entry.grip.getWorldPosition(wp);
    return { x: anchor.x + (wp.x - anchor.threeX), y: anchor.y - (wp.y - anchor.threeY), z: anchor.z + (wp.z - anchor.threeZ) };
}

// True world-space AABB in GDevelop scene coords. Mirrors VrClimbable (webxr.json:9778):
// ensureUpToDate + Box3.setFromObject handles GLB pivot (ModelOrigin), fit-scale, and rotation.
// Y-flip: Three Y -> scene Y is negated. Falls back to getWidth box if model not yet loaded.
function _grabbableWorldAabb(obj) {
    var three = obj.get3DRendererObject ? obj.get3DRendererObject() : null;
    var rend  = obj.getRenderer ? obj.getRenderer() : null;
    if (rend && rend.ensureUpToDate) rend.ensureUpToDate();
    if (three && typeof THREE !== 'undefined') {
        var b = new THREE.Box3().setFromObject(three);
        if (!b.isEmpty() && isFinite(b.min.x) && isFinite(b.max.x)) {
            return { minX: b.min.x, maxX: b.max.x,
                     minY: -b.max.y, maxY: -b.min.y,
                     minZ: b.min.z, maxZ: b.max.z };
        }
    }
    var hw = (obj.getWidth  ? obj.getWidth()  : 0) / 2;
    var hh = (obj.getHeight ? obj.getHeight() : 0) / 2;
    var hd = (obj.getDepth  ? obj.getDepth()  : 0) / 2;
    return { minX: obj.getX()-hw, maxX: obj.getX()+hw,
             minY: obj.getY()-hh, maxY: obj.getY()+hh,
             minZ: obj.getZ()-hd, maxZ: obj.getZ()+hd };
}
// Nearest distance (scene units) from a scene-space point to the object's world AABB. 0 when inside.
function _grabbableAabbDist(obj, cp) {
    if (!cp) return Infinity;
    var a = _grabbableWorldAabb(obj);
    var qx = Math.max(a.minX, Math.min(cp.x, a.maxX));
    var qy = Math.max(a.minY, Math.min(cp.y, a.maxY));
    var qz = Math.max(a.minZ, Math.min(cp.z, a.maxZ));
    var dx = cp.x-qx, dy = cp.y-qy, dz = cp.z-qz;
    return Math.sqrt(dx*dx + dy*dy + dz*dz);
}

// Helper: disable physics gravity + zero velocity
function _disablePhysicsGravity(phys) {
    if (!phys || !phys._body || typeof Jolt === 'undefined') return;
    var bi = phys._sharedData.bodyInterface;
    var id = phys._body.GetID();
    phys.setGravityScale(0);
    bi.SetLinearVelocity(id, phys.getVec3(0, 0, 0));
    bi.SetAngularVelocity(id, phys.getVec3(0, 0, 0));
    bi.ActivateBody(id);
}

// Helper: restore physics gravity
function _restorePhysicsGravity(phys, gravScale) {
    if (!phys || !phys._body || typeof Jolt === 'undefined') return;
    phys.setGravityScale(gravScale);
    phys._sharedData.bodyInterface.ActivateBody(phys._body.GetID());
}

// Global helper: restore physics on a grabbed object (called from VrArrow fire path)
gdjs._webxrVrGrabbableRestorePhysics = function(obj) {
    var _rReg = gdjs._webxrVrGrabbableRegistry;
    if (!_rReg) return;
    for (var _rri = 0; _rri < _rReg.length; _rri++) {
        if (_rReg[_rri].obj !== obj) continue;
        var _rBeh = _rReg[_rri].beh;
        var _rPhys = null;
        try { _rPhys = obj.getBehavior('Physics3D'); } catch(e) {}
        if (_rPhys) {
            _restoreBodyMotionType(_rBeh, _rPhys);
            _restorePhysicsGravity(_rPhys, _rBeh._origGravScale != null ? _rBeh._origGravScale : 1);
        }
        break;
    }
};

// Helper: switch body to Kinematic while grabbed so Jolt never integrates the held pose
function _makeBodyKinematic(beh, phys) {
    if (!phys || !phys._body || typeof Jolt === 'undefined') return;
    var origType = phys.bodyType || 'Dynamic';
    beh._origJoltMotionType = origType === 'Kinematic' ? Jolt.EMotionType_Kinematic :
                             origType === 'Static'    ? Jolt.EMotionType_Static :
                                                        Jolt.EMotionType_Dynamic;
    phys._sharedData.bodyInterface.SetMotionType(phys._body.GetID(), Jolt.EMotionType_Kinematic, Jolt.EActivation_Activate);
}

// Helper: restore original motion type on release
function _restoreBodyMotionType(beh, phys) {
    if (!phys || !phys._body || typeof Jolt === 'undefined') return;
    var mt = (beh._origJoltMotionType !== undefined) ? beh._origJoltMotionType : Jolt.EMotionType_Dynamic;
    phys._sharedData.bodyInterface.SetMotionType(phys._body.GetID(), mt, Jolt.EActivation_Activate);
    beh._origJoltMotionType = undefined;
}

// MagneticGrabEnabled on this behavior: re-read via getter every frame. Missing getter => OFF (default since 0.29.0). Only explicit true-like values enable magnetic targeting.
function _webxrReadGrabbableMagneticEnabled(b) {
    if (!b || !b._getMagneticGrabEnabled) return false;
    var v = b._getMagneticGrabEnabled();
    if (v === false || v === 'false' || v === 'False' || v === 0 || v === '0') return false;
    return true;
}

function _webxrGrabbableHitDistanceToAabb(hits, obj, anchor) {
    if (!hits || hits.length === 0) return Infinity;
    var hp = hits[0].point;
    var cp = { x: anchor.x + (hp.x - anchor.threeX),
               y: anchor.y - (hp.y - anchor.threeY),
               z: anchor.z + (hp.z - anchor.threeZ) };
    return _grabbableAabbDist(obj, cp);
}
// Magnetic aim: each shared-ray hit already carries the GDevelop object that
// owns it (resolved once by the physics or triangle pass), so a direct hit is
// a plain identity check instead of a per-hit Three.js parent-chain walk.
function _webxrGrabbableMagneticRayHitsObject(hits, obj, anchor) {
    if (!hits || hits.length === 0) return false;
    for (var _hii = 0; _hii < hits.length; _hii++) {
        if (hits[_hii].gdObject === obj) return true;
    }
    return false;
}

// Debug: ray vs AABB metrics. Set gdjs._webxrDebugMagneticGrabProp = true (logs GrabbableMagneticCube by default). Set gdjs._webxrDebugMagneticGrabRay to an object name or 'all'.
function _webxrMagAabbDebugMetrics(hitGx, hitGy, hitGz, obj) {
    var cx = obj.getX();
    var cy = obj.getY();
    var cz = obj.getZ();
    var hw = (obj.getWidth ? obj.getWidth() : 0) / 2;
    var hh = (obj.getHeight ? obj.getHeight() : 0) / 2;
    var hd = (obj.getDepth ? obj.getDepth() : 0) / 2;
    var dxc = hitGx - cx, dyc = hitGy - cy, dzc = hitGz - cz;
    var distCenterToHit = Math.sqrt(dxc * dxc + dyc * dyc + dzc * dzc);
    var qx = Math.max(cx - hw, Math.min(hitGx, cx + hw));
    var qy = Math.max(cy - hh, Math.min(hitGy, cy + hh));
    var qz = Math.max(cz - hd, Math.min(hitGz, cz + hd));
    var distHitToClosestPointOnAabb = Math.sqrt((hitGx - qx) * (hitGx - qx) + (hitGy - qy) * (hitGy - qy) + (hitGz - qz) * (hitGz - qz));
    var inside = hitGx >= cx - hw && hitGx <= cx + hw && hitGy >= cy - hh && hitGy <= cy + hh && hitGz >= cz - hd && hitGz <= cz + hd;
    var marginInsideToNearestFace = inside ? Math.min(hitGx - (cx - hw), cx + hw - hitGx, hitGy - (cy - hh), cy + hh - hitGy, hitGz - (cz - hd), cz + hd - hitGz) : null;
    return {
        distCenterToHit: distCenterToHit,
        oldCenterDistanceRulePassLe20: distCenterToHit <= 20,
        insideObjectAABB: inside,
        distHitToClosestPointOnAabbVolume: distHitToClosestPointOnAabb,
        marginInsideToNearestFace: marginInsideToNearestFace,
        halfExtents: { x: hw, y: hh, z: hd },
        objCenter: { x: cx, y: cy, z: cz },
        hitGDevelop: { x: hitGx, y: hitGy, z: hitGz }
    };
}

function _captureGrabOffset(beh, obj, handEntry) {
    if (!handEntry || !handEntry.grip) return;
    var threeObj = obj.get3DRendererObject ? obj.get3DRendererObject() : null;
    if (!threeObj) return;
    var gWP = new THREE.Vector3();
    var gWQ = new THREE.Quaternion();
    var _capAnchor = handEntry.handAnchor || handEntry.grip;
    _capAnchor.getWorldPosition(gWP);
    _capAnchor.getWorldQuaternion(gWQ);
    var outerWP = new THREE.Vector3();
    threeObj.getWorldPosition(outerWP);
    beh._grabOuterDeltaX = threeObj.position.x - obj.getX();
    beh._grabOuterDeltaY = threeObj.position.y - obj.getY();
    beh._grabOuterDeltaZ = threeObj.position.z - obj.getZ();
    var oQ = threeObj.quaternion.clone();
    beh._grabWorldQuat = oQ.clone();
    var gWQInv = gWQ.clone().invert();
    beh._grabLocalPos = outerWP.clone().sub(gWP).applyQuaternion(gWQInv);
    var gWQYConj = new THREE.Quaternion(-gWQ.x, gWQ.y, -gWQ.z, gWQ.w);
    var mode = (beh._getGrabMode ? String(beh._getGrabMode()) : 'AABB');
    if (mode === 'Center') {
        var hx = beh._getHoldOffsetX ? Number(beh._getHoldOffsetX()) : 0;
        var hy = beh._getHoldOffsetY ? Number(beh._getHoldOffsetY()) : 0;
        var hz = beh._getHoldOffsetZ ? Number(beh._getHoldOffsetZ()) : 0;
        var rxDeg = beh._getHoldRotationX ? Number(beh._getHoldRotationX()) : 0;
        var ryDeg = beh._getHoldRotationY ? Number(beh._getHoldRotationY()) : 0;
        var rzDeg = beh._getHoldRotationZ ? Number(beh._getHoldRotationZ()) : 0;
        var D2R = Math.PI / 180;
        beh._grabLocalQuat = new THREE.Quaternion().setFromEuler(new THREE.Euler(rxDeg*D2R, ryDeg*D2R, rzDeg*D2R, 'ZYX'));
        // HoldOffset is specified relative to the raw grip. The per-frame update adds the
        // handAnchor's local offset on top, so subtract it back out to keep the final
        // sword position = grip + rotate(q, HoldOffset) as the user configured.
        var _capWs = gdjs._webxrVrWorldScale || 100;
        var _ancOff = (handEntry.handAnchor) ? handEntry.handAnchor.position : {x:0,y:0,z:0};
        beh._grabLocalPosTarget = new THREE.Vector3(
            hx - _ancOff.x * _capWs,
            hy - _ancOff.y * _capWs,
            hz - _ancOff.z * _capWs
        );
    } else {
        beh._grabLocalQuat = gWQYConj.clone().invert().multiply(oQ);
        if (beh._magneticHitWorld) {
            beh._grabLocalPosTarget = new THREE.Vector3(0, 0, 0);
        } else {
            beh._grabLocalPosTarget = beh._grabLocalPos.clone();
        }
    }
    beh._magneticHitWorld = null;
}

// Global helper: force-grab an idle grabbable into a hand (used by VrGrabbable.ForceRetrieveToHand,
// and also shared with holster-based force-retrieve after zone bookkeeping is done).
gdjs._webxrVrGrabbableBeginForcedGrab = function(obj, beh, handEntry, hand) {
    var phys = null;
    try { phys = obj.getBehavior('Physics3D'); } catch(e) {}
    if (!phys) return false;
    if (beh._origJoltMotionType === undefined) beh._origGravScale = (typeof phys.gravityScale === 'number') ? phys.gravityScale : 1;
    _disablePhysicsGravity(phys);
    _makeBodyKinematic(beh, phys);
    var grip = handEntry.handAnchor || handEntry.grip;
    if (!grip) return false;
    var gWP = new THREE.Vector3(), gWQ = new THREE.Quaternion();
    grip.getWorldPosition(gWP);
    grip.getWorldQuaternion(gWQ);
    var gWQInv = gWQ.clone().invert();
    var threeObj = obj.get3DRendererObject ? obj.get3DRendererObject() : null;
    if (threeObj) {
        beh._grabOuterDeltaX = threeObj.position.x - obj.getX();
        beh._grabOuterDeltaY = threeObj.position.y - obj.getY();
        beh._grabOuterDeltaZ = threeObj.position.z - obj.getZ();
    } else {
        beh._grabOuterDeltaX = beh._grabOuterDeltaY = beh._grabOuterDeltaZ = 0;
    }
    var _zMode = (beh._getGrabMode ? String(beh._getGrabMode()) : 'AABB');
    if (_zMode === 'Center') {
        var _zhx = beh._getHoldOffsetX ? Number(beh._getHoldOffsetX()) : 0;
        var _zhy = beh._getHoldOffsetY ? Number(beh._getHoldOffsetY()) : 0;
        var _zhz = beh._getHoldOffsetZ ? Number(beh._getHoldOffsetZ()) : 0;
        var _zrxD = beh._getHoldRotationX ? Number(beh._getHoldRotationX()) : 0;
        var _zryD = beh._getHoldRotationY ? Number(beh._getHoldRotationY()) : 0;
        var _zrzD = beh._getHoldRotationZ ? Number(beh._getHoldRotationZ()) : 0;
        var _D2R = Math.PI / 180;
        beh._grabLocalQuat = new THREE.Quaternion().setFromEuler(new THREE.Euler(_zrxD*_D2R, _zryD*_D2R, _zrzD*_D2R, 'ZYX'));
        var _zWs = gdjs._webxrVrWorldScale || 100;
        var _zAncOff = handEntry.handAnchor ? handEntry.handAnchor.position : {x:0,y:0,z:0};
        var _zHoldPos = new THREE.Vector3(_zhx - _zAncOff.x * _zWs, _zhy - _zAncOff.y * _zWs, _zhz - _zAncOff.z * _zWs);
        beh._grabLocalPos = _zHoldPos.clone();
        beh._grabLocalPosTarget = _zHoldPos.clone();
    } else {
        var oWP = new THREE.Vector3(), oWQ = new THREE.Quaternion();
        if (threeObj) { threeObj.getWorldPosition(oWP); threeObj.getWorldQuaternion(oWQ); }
        beh._grabLocalPos = threeObj ? oWP.clone().sub(gWP).applyQuaternion(gWQInv) : new THREE.Vector3();
        beh._grabLocalQuat = gWQInv.clone().multiply(oWQ);
        beh._grabLocalPosTarget = beh._grabLocalPos.clone();
    }
    beh._grabWorldQuat = gWQ.clone();
    beh._state = 'grabbed';
    beh._grabbingHand = hand;
    beh._otherHoldingHand = null;
    beh._noRedockUntil = performance.now() + 1000;
    handEntry._grabGripEdgeAvailable = false;
    beh._stickyGrabActive = !!(beh._getStickyGrab && (beh._getStickyGrab() === 'true' || beh._getStickyGrab() === true));
    if (!beh._stickyGrabActive) {
        var _fgGp = _getGamepad(hand);
        var _fgHeld = _fgGp && _fgGp.buttons[1] ? _fgGp.buttons[1].value > 0.5 : false;
        if (!_fgHeld) beh._suppressThrowVelocityOnNextRelease = true;
    }
    return true;
};

// Per-hand grip edge — runs once per frame per hand before the grabbable loop.
// _grabGripEdgeAvailable is true on the frame grip transitions 0→1, consumed on first successful grab.
var _tickTime = runtimeScene.getTimeManager().getTimeFromStart();
if (gdjs._webxrVrGrabbableGripTickTime !== _tickTime) {
    gdjs._webxrVrGrabbableGripTickTime = _tickTime;
    var _tickHands = ['left', 'right'];
    for (var _thi = 0; _thi < _tickHands.length; _thi++) {
        var _thHand = _tickHands[_thi];
        var _thEntry = controllers[_thHand];
        if (!_thEntry) continue;
        var _thGp = _getGamepad(_thHand);
        var _thCur = _thGp && _thGp.buttons[1] ? _thGp.buttons[1].value > 0.5 : false;
        var _thPrev = _thEntry._grabGripPrev === true;
        _thEntry._grabGripEdgeAvailable = (_thCur && !_thPrev);
        _thEntry._grabGripPrev = _thCur;
    }
}

for (var i = 0; i < objs.length; i++) {
    var obj = objs[i];
    var beh = obj.getBehavior(behaviorName);
    if (!beh || !beh.activated()) continue;

    // Get physics behavior (must exist; body type check removed - trust the user to add VrGrabbable to appropriate objects)
    var phys = null;
    try { phys = obj.getBehavior('Physics3D'); } catch(e) {}
    if (!phys) continue;
    if (gdjs._webxrDebugThrow && beh._postThrowDbgCounter > 0 && phys._body && typeof Jolt !== 'undefined') {
        try {
            var _rvp = phys._body.GetLinearVelocity();
            var _wsc = phys._sharedData.worldScale;
            gdjs._webxrDbgFn('throw.post', 'PT f' + beh._postThrowDbgCounter + ' v=' + (_rvp.GetX()*_wsc).toFixed(0) + ',' + (_rvp.GetY()*_wsc).toFixed(0) + ',' + (_rvp.GetZ()*_wsc).toFixed(0));
        } catch(e) {}
        beh._postThrowDbgCounter--;
    }

    if (gdjs._webxrDebugMagneticGrabProp) {
        if (!runtimeScene._webxrVrGrabbDbgRegOnce) {
            runtimeScene._webxrVrGrabbDbgRegOnce = true;
            var _reg0 = gdjs._webxrVrGrabbableRegistry || [];
            console.log('[WebXR VrGrabbable registry at first tick]', _reg0.map(function(e){ return { name: e.obj.getName ? e.obj.getName() : '', id: e.obj.id }; }));
        }
        var _rawDbg = beh._getMagneticGrabEnabled ? beh._getMagneticGrabEnabled() : '(no getter)';
        var _magOnDbg = _webxrReadGrabbableMagneticEnabled(beh);
        var _sigDbg = (obj.getName ? obj.getName() : '') + '|' + (obj.id !== undefined ? obj.id : '') + '|' + beh._state + '|' + String(_rawDbg) + '|' + _magOnDbg;
        if (beh._webxrDbgMagSig !== _sigDbg) {
            beh._webxrDbgMagSig = _sigDbg;
            console.log('[WebXR VrGrabbable MagneticGrabEnabled]', { object: obj.getName ? obj.getName() : '', instanceId: obj.id, state: beh._state, raw: _rawDbg, magneticTargetingOn: _magOnDbg, hasGetter: !!beh._getMagneticGrabEnabled });
        }
    }

    var state = beh._state;

    // ============ IDLE ============
    var _zAllowMag = !!(beh._holsterEntry && beh._holsterEntry.allowMagneticRetrieval);
    if (state === 'idle' && (!beh._holsterEntry || _zAllowMag)) {
        var hands = ['left', 'right'];
        for (var hi = 0; hi < hands.length; hi++) {
            var hand = hands[hi];
            var entry = controllers[hand];
            if (!entry || !entry.connected) continue;
            var gp = _getGamepad(hand);
            if (!gp) continue;
            if (!beh._holsterEntry) {
            // Proximity grab on just-pressed only - world AABB distance, closest idle wins, one per hand
            var grabRange = beh._getGrabRange ? Number(beh._getGrabRange()) : 50;
            var cp = _ctrlPos(hand);
            if (!cp) continue;
            var aabbDist = _grabbableAabbDist(obj, cp);
            if (entry._grabGripEdgeAvailable && aabbDist <= grabRange) {
                var handBusy = false;
                var isClosest = true;
                var reg = gdjs._webxrVrGrabbableRegistry || [];
                for (var ri = 0; ri < reg.length; ri++) {
                    var rEntry = reg[ri];
                    if (!rEntry || rEntry.obj === obj) continue;
                    var rBeh = rEntry.beh;
                    var rSt = rBeh._state;
                    if ((rSt === 'grabbed' || rSt === 'flyingToCtrl' || rSt === 'targeted') && rBeh._grabbingHand === hand) {
                        handBusy = true; break;
                    }
                    if (rSt === 'idle') {
                        var rObj = rEntry.obj;
                        var rDist = _grabbableAabbDist(rObj, cp);
                        var rRange = rBeh._getGrabRange ? Number(rBeh._getGrabRange()) : 50;
                        if (rDist < aabbDist && rDist <= rRange) { isClosest = false; break; }
                    }
                }
                if (!handBusy && isClosest) {
                    if (beh._origJoltMotionType === undefined) beh._origGravScale = (typeof phys.gravityScale === 'number') ? phys.gravityScale : 1;
                    _disablePhysicsGravity(phys);
                    _makeBodyKinematic(beh, phys);
                    beh._grabbingHand = hand;
                    _captureGrabOffset(beh, obj, entry);
                    if (beh._grabLocalPosTarget) beh._grabLocalPos = beh._grabLocalPosTarget.clone();
                    beh._state = 'grabbed';
                    beh._stickyGrabActive = !!(beh._getStickyGrab && (beh._getStickyGrab() === 'true' || beh._getStickyGrab() === true));
                    entry._grabGripEdgeAvailable = false;
                    break;
                }
            }
            }
            // Magnetic grab: check if this controller has magnetic active and ray hits us
            if (!entry._magneticGrabActive) continue;
            var magObjOn = _webxrReadGrabbableMagneticEnabled(beh);
            if (!magObjOn) continue;
            if (!entry.grip) continue;
            // Shared per-hand ray (gdjs._webxrHandRayHits, onFirstSceneLoaded), narrowed to
            // the magnetic-grab near/far window. Kept as a list (not just the first hit)
            // so an object behind a nearer one can still be reached, matching pre-0.29 behavior.
            var _wsMag = gdjs._webxrVrWorldScale || 100;
            var _magNear = _wsMag * 0.06;
            var _magFar = (entry._magneticGrabLength > 0 ? entry._magneticGrabLength : 1000);
            var _handHitsG = gdjs._webxrHandRayHits(runtimeScene, hand);
            var hits = [];
            for (var _hgi = 0; _hgi < _handHitsG.length; _hgi++) {
                var _hg = _handHitsG[_hgi];
                if (_hg.distance >= _magNear && _hg.distance <= _magFar) hits.push(_hg);
            }
            if (hits.length === 0) continue;
            var hp = hits[0].point;
            var hitGdX = anchor.x + (hp.x - anchor.threeX);
            var hitGdY = anchor.y - (hp.y - anchor.threeY);
            var hitGdZ = anchor.z + (hp.z - anchor.threeZ);
            var magneticRayHitsThisObject = _webxrGrabbableMagneticRayHitsObject(hits, obj, anchor);
            var _oname = obj.getName ? obj.getName() : '';
            var _rayF = gdjs._webxrDebugMagneticGrabRay;
            var _wantRayLog = !!gdjs._webxrDebugMagneticGrabProp && (_rayF === 'all' || (_rayF && _oname === _rayF) || (!_rayF && _oname === 'GrabbableMagneticCube'));
            if (_wantRayLog) {
                var h0 = hits[0];
                var mesh0 = h0 && h0.threeObject;
                var meshName = mesh0 && mesh0.name ? mesh0.name : (h0 && h0.gdObject && h0.gdObject.getName ? h0.gdObject.getName() : '(no name)');
                var meshUuid = mesh0 && mesh0.uuid ? mesh0.uuid : '';
                var _met = _webxrMagAabbDebugMetrics(hitGdX, hitGdY, hitGdZ, obj);
                var _passMesh = magneticRayHitsThisObject;
                var alreadyTargetedDbg = false;
                var regD = gdjs._webxrVrGrabbableRegistry || [];
                for (var _rdi = 0; _rdi < regD.length; _rdi++) {
                    var _ob = regD[_rdi].beh;
                    if (_ob._state === 'targeted' && _ob._targetingHand === hand && _webxrReadGrabbableMagneticEnabled(_ob)) { alreadyTargetedDbg = true; break; }
                }
                console.log('[WebXR VrGrabbable magnetic ray]', { hand: hand, object: _oname, firstHitMeshName: meshName, firstHitMeshUuid: meshUuid, hitDistanceAlongRay: h0 && h0.distance !== undefined ? h0.distance : null, magneticObjEnabled: magObjOn, controllerMagneticActive: !!entry._magneticGrabActive, alreadyTargetedForHand: alreadyTargetedDbg, aabbVsHit: _met, passesMeshOrFallbackTargeting: magneticRayHitsThisObject });
            }
            var magneticTolerance = Number(entry._magneticGrabErrorTolerance) || 0;
            if (magneticRayHitsThisObject) {
                // Direct hit - check no other object is already targeted for this hand
                var alreadyTargeted = false;
                var reg = gdjs._webxrVrGrabbableRegistry || [];
                for (var ri = 0; ri < reg.length; ri++) {
                    var oBeh = reg[ri].beh;
                    if (oBeh._state === 'targeted' && oBeh._targetingHand === hand) {
                        if (_webxrReadGrabbableMagneticEnabled(oBeh)) { alreadyTargeted = true; break; }
                    }
                    if ((oBeh._state === 'grabbed' || oBeh._state === 'flyingToCtrl') && oBeh._grabbingHand === hand) { alreadyTargeted = true; break; }
                }
                if (!alreadyTargeted) {
                    beh._targetingHand = hand;
                    beh._state = 'targeted';
                }
            } else if (magneticTolerance > 0) {
                // Tolerance-based near-miss: target this object if its AABB is within tolerance of the hit point,
                // no direct hit exists on any other grabbable, and we are the closest qualifying candidate.
                var dAabb = _webxrGrabbableHitDistanceToAabb(hits, obj, anchor);
                if (dAabb <= magneticTolerance) {
                    var skipTolerance = false;
                    var regT = gdjs._webxrVrGrabbableRegistry || [];
                    for (var rti = 0; rti < regT.length; rti++) {
                        var rTEntry = regT[rti];
                        if (!rTEntry || rTEntry.obj === obj) continue;
                        var rTBeh = rTEntry.beh;
                        if (!_webxrReadGrabbableMagneticEnabled(rTBeh)) continue;
                        // Already targeted by this hand → mutual exclusion
                        if (rTBeh._state === 'targeted' && rTBeh._targetingHand === hand) { skipTolerance = true; break; }
                        if ((rTBeh._state === 'grabbed' || rTBeh._state === 'flyingToCtrl') && rTBeh._grabbingHand === hand) { skipTolerance = true; break; }
                        // Another idle grabbable is a direct hit → it wins
                        if (rTBeh._state === 'idle' && _webxrGrabbableMagneticRayHitsObject(hits, rTEntry.obj, anchor)) { skipTolerance = true; break; }
                        // Another idle grabbable is closer within tolerance → it wins
                        if (rTBeh._state === 'idle') {
                            var rTDist = _webxrGrabbableHitDistanceToAabb(hits, rTEntry.obj, anchor);
                            var rTTol = Number(entry._magneticGrabErrorTolerance) || 0;
                            if (rTDist < dAabb && rTDist <= rTTol) { skipTolerance = true; break; }
                        }
                    }
                    if (!skipTolerance) {
                        beh._targetingHand = hand;
                        beh._state = 'targeted';
                    }
                }
            }
        }
    }

    // ============ TARGETED ============
    else if (state === 'targeted') {
        if (beh._holsterEntry && !beh._holsterEntry.allowMagneticRetrieval) {
            beh._state = 'idle';
            beh._targetingHand = null;
        } else {
        var magObjOnT = _webxrReadGrabbableMagneticEnabled(beh);
        if (!magObjOnT) {
            beh._state = 'idle';
            beh._targetingHand = null;
        } else {
        var tHand = beh._targetingHand;
        var tEntry = tHand ? controllers[tHand] : null;
        // Cancel if magnetic disabled or controller disconnected
        if (!tEntry || !tEntry.connected || !tEntry._magneticGrabActive) {
            beh._state = 'idle';
        } else {
            // Re-check ray is still near this object
            var stillTargeted = false;
            if (tEntry.grip) {
                var _wsMagT = gdjs._webxrVrWorldScale || 100;
                var _magNearT = _wsMagT * 0.06;
                var _magFarT = (tEntry._magneticGrabLength > 0 ? tEntry._magneticGrabLength : 1000);
                var _handHitsT = gdjs._webxrHandRayHits(runtimeScene, tHand);
                var tHits = [];
                for (var _hti = 0; _hti < _handHitsT.length; _hti++) {
                    var _ht = _handHitsT[_hti];
                    if (_ht.distance >= _magNearT && _ht.distance <= _magFarT) tHits.push(_ht);
                }
                if (tHits.length > 0) {
                    var tDirectHit = _webxrGrabbableMagneticRayHitsObject(tHits, obj, anchor);
                    var tTol = Number(tEntry._magneticGrabErrorTolerance) || 0;
                    var tDStill = (!tDirectHit && tTol > 0) ? _webxrGrabbableHitDistanceToAabb(tHits, obj, anchor) : 0;
                    stillTargeted = tDirectHit || (tTol > 0 && tDStill <= tTol);
                }
            }
            if (!stillTargeted) {
                beh._state = 'idle';
            } else {
            var tHandBusy = false;
            var tReg = gdjs._webxrVrGrabbableRegistry || [];
            for (var tri = 0; tri < tReg.length; tri++) {
                var trBeh = tReg[tri] && tReg[tri].beh;
                if (!trBeh || tReg[tri].obj === obj) continue;
                var trSt = trBeh._state;
                if ((trSt === 'grabbed' || trSt === 'flyingToCtrl') && trBeh._grabbingHand === tHand) { tHandBusy = true; break; }
            }
            if (tEntry._grabGripEdgeAvailable && !tHandBusy) {
                if (beh._origJoltMotionType === undefined) beh._origGravScale = (typeof phys.gravityScale === 'number') ? phys.gravityScale : 1;
                _disablePhysicsGravity(phys);
                _makeBodyKinematic(beh, phys);
                beh._flyTimer = 0;
                beh._grabbingHand = tHand;
                beh._magneticHitWorld = (tHits && tHits.length > 0) ? tHits[0].point.clone() : null;
                _captureGrabOffset(beh, obj, tEntry);
                if (beh._holsterEntry) { if (gdjs._webxrVrHolsterRemoveObj) gdjs._webxrVrHolsterRemoveObj(beh._holsterEntry, obj); beh._holsterEntry = null; }
                beh._state = 'flyingToCtrl';
                tEntry._grabGripEdgeAvailable = false;
            }
            }
        }
        }
        }
    }

    // ============ FLYING TO CONTROLLER ============
    else if (state === 'flyingToCtrl') {
        beh._flyTimer += dt;
        var flyDur = 0.3;
        var fHand = beh._grabbingHand;
        var fEntry = controllers[fHand];
        if (!fEntry || !fEntry.grip) { beh._state = 'idle'; continue; }
        var ft = Math.min(beh._flyTimer / flyDur, 1);
        // Position/rotation write moved to doStepPostEvents (rig is current there).
        _disablePhysicsGravity(phys);
        if (ft >= 1) {
            beh._grabLocalPos = (beh._grabLocalPosTarget || new THREE.Vector3(0, 0, 0)).clone();
            beh._state = 'grabbed';
            beh._stickyGrabActive = !!(beh._getStickyGrab && (beh._getStickyGrab() === 'true' || beh._getStickyGrab() === true));
        }
    }

    // ============ GRABBED ============
    else if (state === 'grabbed') {
        var gHand = beh._grabbingHand;
        var gEntry = controllers[gHand];
        var gGp = _getGamepad(gHand);
        var gCurGrip = gGp && gGp.buttons[1] ? gGp.buttons[1].value > 0.5 : false;
        // Co-hold: track other hand gripping near this object while primary hand holds it
        var oHand = (gHand === 'left') ? 'right' : 'left';
        var oEntry = controllers[oHand];
        var oGp = _getGamepad(oHand);
        var oCurGrip = oGp && oGp.buttons[1] ? oGp.buttons[1].value > 0.5 : false;
        var oGrabKey = '_grabPrevGrip_' + obj.id;
        var oPrevGrip = oEntry ? (oEntry[oGrabKey] || false) : false;
        if (oEntry) oEntry[oGrabKey] = oCurGrip;
        if (oCurGrip && !oPrevGrip && oEntry && oEntry.connected) {
            var oCP = _ctrlPos(oHand);
            if (oCP) {
                var oAabbDist = _grabbableAabbDist(obj, oCP);
                var grabRange = beh._getGrabRange ? Number(beh._getGrabRange()) : 50;
                if (oAabbDist <= grabRange) {
                    var oBusy = false;
                    var reg = gdjs._webxrVrGrabbableRegistry || [];
                    for (var ri = 0; ri < reg.length; ri++) {
                        var rEntry = reg[ri];
                        if (!rEntry || rEntry.obj === obj) continue;
                        var rSt = rEntry.beh._state;
                        if ((rSt === 'grabbed' || rSt === 'flyingToCtrl' || rSt === 'targeted') && rEntry.beh._grabbingHand === oHand) { oBusy = true; break; }
                    }
                    if (!oBusy) beh._otherHoldingHand = oHand;
                }
            }
        }
        if (!oCurGrip && beh._otherHoldingHand === oHand) beh._otherHoldingHand = null;
        var _shouldRelease;
        if (beh._stickyGrabActive) {
            if (gEntry && gEntry._grabGripEdgeAvailable) {
                gEntry._grabGripEdgeAvailable = false;
                _shouldRelease = true;
            } else {
                _shouldRelease = false;
            }
        } else {
            _shouldRelease = !gCurGrip;
        }
        if (_shouldRelease) {
            // Transfer to co-holding hand if it's still gripping
            if (beh._otherHoldingHand) {
                var tHand = beh._otherHoldingHand;
                var tEntry = controllers[tHand];
                var tGp = _getGamepad(tHand);
                var tGripDown = tGp && tGp.buttons[1] ? tGp.buttons[1].value > 0.5 : false;
                if (tGripDown && tEntry && tEntry.connected && tEntry.grip) {
                    var tOtherBusy = false;
                    var tTransferReg = gdjs._webxrVrGrabbableRegistry || [];
                    for (var ttri = 0; ttri < tTransferReg.length; ttri++) {
                        var ttRE = tTransferReg[ttri];
                        if (!ttRE || ttRE.obj === obj) continue;
                        var ttRS = ttRE.beh._state;
                        if ((ttRS === 'grabbed' || ttRS === 'flyingToCtrl') && ttRE.beh._grabbingHand === tHand) { tOtherBusy = true; break; }
                    }
                    if (!tOtherBusy) {
                        beh._grabbingHand = tHand;
                        beh._otherHoldingHand = null;
                        _captureGrabOffset(beh, obj, tEntry);
                        if (beh._grabLocalPosTarget) beh._grabLocalPos = beh._grabLocalPosTarget.clone();
                        continue;
                    }
                }
                beh._otherHoldingHand = null;
            }
            // Try to dock into a holster zone before applying throw
            if (gdjs._webxrVrHolsterTryDockOnRelease && gEntry &&
                gdjs._webxrVrHolsterTryDockOnRelease(obj, beh, beh._grabbingHand, gEntry)) {
                beh._state = 'idle';
                beh._grabbingHand = null;
                beh._grabLocalPos = null;
                beh._grabLocalQuat = null;
                beh._grabWorldQuat = null;
                beh._grabOuterDeltaX = beh._grabOuterDeltaY = beh._grabOuterDeltaZ = null;
                beh._otherHoldingHand = null;
                continue;
            }
            // Release: restore physics + apply throw velocity
            _restorePhysicsGravity(phys, beh._origGravScale);
            _restoreBodyMotionType(beh, phys);
            gdjs._webxrDbgFn('throw.enter', 'REL hand=' + beh._grabbingHand + ' b=' + (phys._body ? '1' : '0') + ' J=' + (typeof Jolt !== 'undefined' ? '1' : '0') + ' g=' + (gEntry ? '1' : '0'));
            if (phys._body && typeof Jolt !== 'undefined' && gEntry) {
                var throwScale = beh._getThrowScale ? Number(beh._getThrowScale()) : 1;
                var vh = gEntry._velHistory || [];
                var useCount = vh.length; // for debug log
                gdjs._webxrDbgFn('throw.cond', 'VH vh=' + vh.length + ' ts=' + throwScale.toFixed(2));
                // Peak-in-window: use fastest sample in last 200ms, skip final 20ms (grip-open decel)
                var _tv = gdjs._webxrThrowVelFromHistory ? gdjs._webxrThrowVelFromHistory(vh, performance.now(), 200) : {x:0, y:0, z:0};
                var tvx = _tv.x * throwScale, tvy = _tv.y * throwScale, tvz = _tv.z * throwScale;
                // Axis test override: set gdjs._webxrAxisTestVec = {x,y,z} from console before VR; consumed once
                if (gdjs._webxrAxisTestVec) {
                    tvx = gdjs._webxrAxisTestVec.x || 0;
                    tvy = gdjs._webxrAxisTestVec.y || 0;
                    tvz = gdjs._webxrAxisTestVec.z || 0;
                    gdjs._webxrDbgFn('throw.cond', 'VH vh=' + vh.length + ' AXIS_TEST ' + tvx + ',' + tvy + ',' + tvz);
                    gdjs._webxrAxisTestVec = null;
                }
                // Clamp to max plausible throw speed (2000 units/s = 20 m/s at worldScale 100)
                var spd = Math.sqrt(tvx*tvx + tvy*tvy + tvz*tvz);
                if (spd > 2000) { var sc = 2000/spd; tvx*=sc; tvy*=sc; tvz*=sc; }
                if (beh._suppressThrowVelocityOnNextRelease) { beh._suppressThrowVelocityOnNextRelease = false; tvx = 0; tvy = 0; tvz = 0; }
                var _tAx = Math.abs(tvx), _tAy = Math.abs(tvy), _tAz = Math.abs(tvz);
                var _tDom = (_tAx >= _tAy && _tAx >= _tAz) ? 'X' : (_tAy >= _tAz ? 'Y' : 'Z');
                var _tYaw = (gdjs._webxrVrAnchor && typeof gdjs._webxrVrAnchor.angle === 'number') ? gdjs._webxrVrAnchor.angle : 0;
                var _tN = (_tv && typeof _tv.n === 'number') ? _tv.n : 0;
                gdjs._webxrDbgFn('throw',
                    'THR ' + beh._grabbingHand +
                    ' vh=' + vh.length + '/' + useCount + ' n=' + _tN +
                    ' v=' + tvx.toFixed(0) + ',' + tvy.toFixed(0) + ',' + tvz.toFixed(0) +
                    ' dom=' + _tDom + ' spd=' + spd.toFixed(0) +
                    ' yaw=' + _tYaw.toFixed(0) +
                    ' x' + throwScale +
                    ' J=' + (typeof Jolt !== 'undefined' ? '1' : '0'));
                try {
                    var _hs = '';
                    for (var _hi = vh.length - 1, _hc = 0; _hi >= 0 && _hc < 3; _hi--, _hc++) {
                        var _hE = vh[_hi];
                        var _hAx = Math.abs(_hE.vx), _hAy = Math.abs(_hE.vy), _hAz = Math.abs(_hE.vz);
                        var _hD = (_hAx >= _hAy && _hAx >= _hAz) ? 'X' : (_hAy >= _hAz ? 'Y' : 'Z');
                        var _hSp = Math.sqrt(_hE.vx*_hE.vx + _hE.vy*_hE.vy + _hE.vz*_hE.vz);
                        _hs += (_hs ? '|' : '') + 'a' + Math.round(performance.now() - _hE.t) + _hD + _hSp.toFixed(0);
                    }
                    gdjs._webxrDbgFn('throw.hist', 'HST ' + _hs);
                } catch(_he) {}
                var _tBi = phys._sharedData.bodyInterface;
                var _tId = phys._body.GetID();
                var _tInv = phys._sharedData.worldInvScale;
                _tBi.SetLinearVelocity(_tId, phys.getVec3(tvx * _tInv, tvy * _tInv, tvz * _tInv));
                var _tavx=0, _tavy=0, _tavz=0, _an=0;
                for (var _ai=vh.length-1; _ai>=0 && _an<3; _ai--) {
                    if (!vh[_ai] || typeof vh[_ai].avx !== 'number') continue;
                    if ((performance.now() - vh[_ai].t) < 20) continue;
                    _tavx+=vh[_ai].avx; _tavy+=vh[_ai].avy; _tavz+=vh[_ai].avz; _an++;
                }
                if (_an > 0) { _tavx/=_an; _tavy/=_an; _tavz/=_an; }
                var _aspd = Math.sqrt(_tavx*_tavx + _tavy*_tavy + _tavz*_tavz);
                if (_aspd > 30) { var _asc = 30/_aspd; _tavx*=_asc; _tavy*=_asc; _tavz*=_asc; }
                _tBi.SetAngularVelocity(_tId, phys.getVec3(_tavx, _tavy, _tavz));
                _tBi.ActivateBody(_tId);
                try {
                    var _rv = phys._body.GetLinearVelocity();
                    gdjs._webxrDbgFn('throw.rb', 'RB set=' + tvx.toFixed(0) + ',' + tvy.toFixed(0) + ',' + tvz.toFixed(0) + ' got=' + (_rv.GetX()*phys._sharedData.worldScale).toFixed(0) + ',' + (_rv.GetY()*phys._sharedData.worldScale).toFixed(0) + ',' + (_rv.GetZ()*phys._sharedData.worldScale).toFixed(0));
                } catch(e) { gdjs._webxrDbgFn('throw.rb', 'RB err'); }
                if (gdjs._webxrDebugThrow) beh._postThrowDbgCounter = 3;
            }
            beh._otherHoldingHand = null;
            beh._state = 'idle';
            beh._grabbingHand = null;
            beh._grabLocalPos = null;
            beh._grabLocalQuat = null;
            beh._grabWorldQuat = null;
            beh._grabOuterDeltaX = null;
            beh._grabOuterDeltaY = null;
            beh._grabOuterDeltaZ = null;
        }
        // Position/rotation write and physics zeroing moved to doStepPostEvents (rig is current there).
    }
}
};
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.doStepPreEventsContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.doStepPreEventsContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.doStepPreEventsContext.userFunc0x1693848(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
this._onceTriggers.startNewFrame();
var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.doStepPostEventsContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.doStepPostEventsContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.doStepPostEventsContext.userFunc0x162e950 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var tr = runtimeScene.getGame().getRenderer().getThreeRenderer();
if (!tr || !tr.xr || !tr.xr.isPresenting) return;
var controllers = gdjs._webxrVrControllers;
if (!controllers) return;
var anchor = gdjs._webxrVrAnchor;
if (!anchor) return;

// Ensure rig world matrix reflects this frame's anchor position before reading grip poses.
if (gdjs._webxrVrEnsureRigCurrent) gdjs._webxrVrEnsureRigCurrent();

for (var i = 0; i < objs.length; i++) {
    var obj = objs[i];
    var beh = obj.getBehavior(behaviorName);
    if (!beh || !beh.activated()) continue;
    var state = beh._state;

    // ============ FLYING TO CONTROLLER - transform write ============
    if (state === 'flyingToCtrl') {
        var flyDur = 0.3;
        var fHand = beh._grabbingHand;
        var fEntry = controllers[fHand];
        if (!fEntry || !fEntry.grip) continue;
        var fGripWP = new THREE.Vector3();
        var fGripWQ = new THREE.Quaternion();
        var _flyAnchor = fEntry.handAnchor || fEntry.grip;
        _flyAnchor.getWorldPosition(fGripWP);
        _flyAnchor.getWorldQuaternion(fGripWQ);
        var ft = Math.min(beh._flyTimer / flyDur, 1);
        var fTgt = beh._grabLocalPosTarget || new THREE.Vector3(0, 0, 0);
        var fLerpedLocal = beh._grabLocalPos ? beh._grabLocalPos.clone().lerp(fTgt, ft) : fTgt.clone();
        var fWorldTgt = fLerpedLocal.applyQuaternion(fGripWQ).add(fGripWP);
        obj.setX(anchor.x + (fWorldTgt.x - anchor.threeX) - (beh._grabOuterDeltaX || 0));
        obj.setY(anchor.y - (fWorldTgt.y - anchor.threeY) - (beh._grabOuterDeltaY || 0));
        obj.setZ(anchor.z + (fWorldTgt.z - anchor.threeZ) - (beh._grabOuterDeltaZ || 0));
        // Slerp orientation from initial toward rigid-to-grip
        if (beh._grabWorldQuat && beh._grabLocalQuat) {
            var fGWQGd = new THREE.Quaternion(-fGripWQ.x, fGripWQ.y, -fGripWQ.z, fGripWQ.w);
            var fTargetQ = fGWQGd.clone().multiply(beh._grabLocalQuat);
            var fSlerpQ = beh._grabWorldQuat.clone().slerp(fTargetQ, ft);
            var fEu = new THREE.Euler().setFromQuaternion(fSlerpQ, 'ZYX');
            obj.setAngle(fEu.z * 180/Math.PI);
            if (obj.setRotationX) obj.setRotationX(fEu.x * 180/Math.PI);
            if (obj.setRotationY) obj.setRotationY(fEu.y * 180/Math.PI);
            var threeObjF = obj.get3DRendererObject ? obj.get3DRendererObject() : null;
            if (threeObjF) { threeObjF.quaternion.copy(fSlerpQ); threeObjF.updateMatrix(); }
        }
    }

    // ============ GRABBED - transform write + physics zeroing ============
    else if (state === 'grabbed') {
        var gHand = beh._grabbingHand;
        var gEntry = controllers[gHand];
        if (gEntry && gEntry.grip) {
            var gWP3 = new THREE.Vector3();
            var gWQ3 = new THREE.Quaternion();
            var _grabAnchor = gEntry.handAnchor || gEntry.grip;
            _grabAnchor.getWorldPosition(gWP3);
            _grabAnchor.getWorldQuaternion(gWQ3);
            var _liveMode = beh._getGrabMode ? String(beh._getGrabMode()) : 'AABB';
            if (_liveMode === 'Center') {
                var _lhx = beh._getHoldOffsetX ? Number(beh._getHoldOffsetX()) : 0;
                var _lhy = beh._getHoldOffsetY ? Number(beh._getHoldOffsetY()) : 0;
                var _lhz = beh._getHoldOffsetZ ? Number(beh._getHoldOffsetZ()) : 0;
                var _lrx = beh._getHoldRotationX ? Number(beh._getHoldRotationX()) : 0;
                var _lry = beh._getHoldRotationY ? Number(beh._getHoldRotationY()) : 0;
                var _lrz = beh._getHoldRotationZ ? Number(beh._getHoldRotationZ()) : 0;
                var _D2R = Math.PI / 180;
                beh._grabLocalQuat = new THREE.Quaternion().setFromEuler(new THREE.Euler(_lrx*_D2R, _lry*_D2R, _lrz*_D2R, 'ZYX'));
                var _liveWs = gdjs._webxrVrWorldScale || 100;
                var _liveAnc = gEntry.handAnchor ? gEntry.handAnchor.position : {x:0,y:0,z:0};
                beh._grabLocalPos = new THREE.Vector3(_lhx - _liveAnc.x * _liveWs, _lhy - _liveAnc.y * _liveWs, _lhz - _liveAnc.z * _liveWs);
            }
            if (beh._grabLocalPos) {
                var gWorldOff = beh._grabLocalPos.clone().applyQuaternion(gWQ3);
                var gFinalWP = gWP3.clone().add(gWorldOff);
                obj.setX(anchor.x + (gFinalWP.x - anchor.threeX) - (beh._grabOuterDeltaX || 0));
                obj.setY(anchor.y - (gFinalWP.y - anchor.threeY) - (beh._grabOuterDeltaY || 0));
                obj.setZ(anchor.z + (gFinalWP.z - anchor.threeZ) - (beh._grabOuterDeltaZ || 0));
            }
            var gWQ3Gd = new THREE.Quaternion(-gWQ3.x, gWQ3.y, -gWQ3.z, gWQ3.w);
            if (beh._grabLocalQuat) {
                var gFinalQ = gWQ3Gd.clone().multiply(beh._grabLocalQuat);
                var eu3 = new THREE.Euler().setFromQuaternion(gFinalQ, 'ZYX');
                obj.setAngle(eu3.z * 180/Math.PI);
                if (obj.setRotationX) obj.setRotationX(eu3.x * 180/Math.PI);
                if (obj.setRotationY) obj.setRotationY(eu3.y * 180/Math.PI);
                var threeObjG = obj.get3DRendererObject ? obj.get3DRendererObject() : null;
                if (threeObjG) { threeObjG.quaternion.copy(gFinalQ); threeObjG.updateMatrix(); }
            }
        }
        // Zero physics forces to prevent simulation fighting the kinematic position.
        var phys = null;
        try { phys = obj.getBehavior('Physics3D'); } catch(e) {}
        if (phys && phys._body && typeof Jolt !== 'undefined') {
            var _gBi = phys._sharedData.bodyInterface;
            var _gId = phys._body.GetID();
            _gBi.SetLinearVelocity(_gId, phys.getVec3(0, 0, 0));
            _gBi.SetAngularVelocity(_gId, phys.getVec3(0, 0, 0));
            _gBi.ActivateBody(_gId);
        }
    }
}
};
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.doStepPostEventsContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.doStepPostEventsContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.doStepPostEventsContext.userFunc0x162e950(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.IsGrabbedContext = {};
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.IsGrabbedContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.IsGrabbedContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.IsGrabbedContext.userFunc0x162ec70 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = !!(beh && beh._state === 'grabbed');
};
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.IsGrabbedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.IsGrabbedContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.IsGrabbedContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.IsGrabbedContext.userFunc0x162ec70(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.IsGrabbed = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.IsGrabbedContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.IsGrabbedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.IsGrabbedContext.GDObjectObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.IsTargetedContext = {};
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.IsTargetedContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.IsTargetedContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.IsTargetedContext.userFunc0x162e7b8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = !!(beh && beh._state === 'targeted');
};
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.IsTargetedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.IsTargetedContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.IsTargetedContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.IsTargetedContext.userFunc0x162e7b8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.IsTargeted = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.IsTargetedContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.IsTargetedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.IsTargetedContext.GDObjectObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.GrabbingHandContext = {};
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.GrabbingHandContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.GrabbingHandContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.GrabbingHandContext.userFunc0x1693488 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh ? (beh._grabbingHand || '') : '';
};
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.GrabbingHandContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.GrabbingHandContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.GrabbingHandContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.GrabbingHandContext.userFunc0x1693488(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.GrabbingHand = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.GrabbingHandContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.GrabbingHandContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.GrabbingHandContext.GDObjectObjects1.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.EnableMagneticGrabContext = {};
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.EnableMagneticGrabContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.EnableMagneticGrabContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.EnableMagneticGrabContext.userFunc0x1698150 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh && beh._setMagneticGrabEnabled) beh._setMagneticGrabEnabled('true');
}
};
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.EnableMagneticGrabContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.EnableMagneticGrabContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.EnableMagneticGrabContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.EnableMagneticGrabContext.userFunc0x1698150(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.EnableMagneticGrab = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.EnableMagneticGrabContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.EnableMagneticGrabContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.EnableMagneticGrabContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.DisableMagneticGrabContext = {};
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.DisableMagneticGrabContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.DisableMagneticGrabContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.DisableMagneticGrabContext.userFunc0x1693750 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh && beh._setMagneticGrabEnabled) beh._setMagneticGrabEnabled('false');
}
};
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.DisableMagneticGrabContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.DisableMagneticGrabContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.DisableMagneticGrabContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.DisableMagneticGrabContext.userFunc0x1693750(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.DisableMagneticGrab = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.DisableMagneticGrabContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.DisableMagneticGrabContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.DisableMagneticGrabContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetGrabModeContext = {};
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetGrabModeContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetGrabModeContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetGrabModeContext.userFunc0x1698b88 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var mode = eventsFunctionContext.getArgument("Mode");
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh && beh._setGrabMode) beh._setGrabMode(String(mode));
}
};
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetGrabModeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetGrabModeContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetGrabModeContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetGrabModeContext.userFunc0x1698b88(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetGrabMode = function(Mode, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
if (argName === "Mode") return Mode;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetGrabModeContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetGrabModeContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetGrabModeContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.GrabModeContext = {};
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.GrabModeContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.GrabModeContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.GrabModeContext.userFunc0x1693480 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh && beh._getGrabMode ? String(beh._getGrabMode()) : 'AABB';
};
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.GrabModeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.GrabModeContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.GrabModeContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.GrabModeContext.userFunc0x1693480(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.GrabMode = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.GrabModeContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.GrabModeContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.GrabModeContext.GDObjectObjects1.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetGrabRangeContext = {};
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetGrabRangeContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetGrabRangeContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetGrabRangeContext.userFunc0x1698b88 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var v = Number(eventsFunctionContext.getArgument("Value"));
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh && beh._setGrabRange) beh._setGrabRange(String(v));
}
};
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetGrabRangeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetGrabRangeContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetGrabRangeContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetGrabRangeContext.userFunc0x1698b88(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetGrabRange = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetGrabRangeContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetGrabRangeContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetGrabRangeContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.GrabRangeContext = {};
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.GrabRangeContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.GrabRangeContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.GrabRangeContext.userFunc0x1693480 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh && beh._getGrabRange ? Number(beh._getGrabRange()) || 50 : 50;
};
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.GrabRangeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.GrabRangeContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.GrabRangeContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.GrabRangeContext.userFunc0x1693480(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.GrabRange = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.GrabRangeContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.GrabRangeContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.GrabRangeContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetThrowScaleContext = {};
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetThrowScaleContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetThrowScaleContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetThrowScaleContext.userFunc0x1698b88 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var v = Number(eventsFunctionContext.getArgument("Value"));
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh && beh._setThrowScale) beh._setThrowScale(String(v));
}
};
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetThrowScaleContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetThrowScaleContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetThrowScaleContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetThrowScaleContext.userFunc0x1698b88(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetThrowScale = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetThrowScaleContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetThrowScaleContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetThrowScaleContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.ThrowScaleContext = {};
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.ThrowScaleContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.ThrowScaleContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.ThrowScaleContext.userFunc0x1693480 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh && beh._getThrowScale ? Number(beh._getThrowScale()) : 0;
};
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.ThrowScaleContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.ThrowScaleContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.ThrowScaleContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.ThrowScaleContext.userFunc0x1693480(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.ThrowScale = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.ThrowScaleContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.ThrowScaleContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.ThrowScaleContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHoldOffsetXContext = {};
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHoldOffsetXContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHoldOffsetXContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHoldOffsetXContext.userFunc0x1698b88 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var v = Number(eventsFunctionContext.getArgument("Value"));
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh && beh._setHoldOffsetX) beh._setHoldOffsetX(String(v));
}
};
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHoldOffsetXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHoldOffsetXContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHoldOffsetXContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHoldOffsetXContext.userFunc0x1698b88(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHoldOffsetX = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHoldOffsetXContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHoldOffsetXContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHoldOffsetXContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HoldOffsetXContext = {};
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HoldOffsetXContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HoldOffsetXContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HoldOffsetXContext.userFunc0x16936d8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh && beh._getHoldOffsetX ? Number(beh._getHoldOffsetX()) : 0;
};
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HoldOffsetXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HoldOffsetXContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HoldOffsetXContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HoldOffsetXContext.userFunc0x16936d8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HoldOffsetX = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HoldOffsetXContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HoldOffsetXContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HoldOffsetXContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHoldOffsetYContext = {};
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHoldOffsetYContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHoldOffsetYContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHoldOffsetYContext.userFunc0x1698b88 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var v = Number(eventsFunctionContext.getArgument("Value"));
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh && beh._setHoldOffsetY) beh._setHoldOffsetY(String(v));
}
};
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHoldOffsetYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHoldOffsetYContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHoldOffsetYContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHoldOffsetYContext.userFunc0x1698b88(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHoldOffsetY = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHoldOffsetYContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHoldOffsetYContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHoldOffsetYContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HoldOffsetYContext = {};
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HoldOffsetYContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HoldOffsetYContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HoldOffsetYContext.userFunc0x16935e8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh && beh._getHoldOffsetY ? Number(beh._getHoldOffsetY()) : 0;
};
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HoldOffsetYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HoldOffsetYContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HoldOffsetYContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HoldOffsetYContext.userFunc0x16935e8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HoldOffsetY = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HoldOffsetYContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HoldOffsetYContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HoldOffsetYContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHoldOffsetZContext = {};
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHoldOffsetZContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHoldOffsetZContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHoldOffsetZContext.userFunc0x1698b88 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var v = Number(eventsFunctionContext.getArgument("Value"));
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh && beh._setHoldOffsetZ) beh._setHoldOffsetZ(String(v));
}
};
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHoldOffsetZContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHoldOffsetZContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHoldOffsetZContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHoldOffsetZContext.userFunc0x1698b88(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHoldOffsetZ = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHoldOffsetZContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHoldOffsetZContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHoldOffsetZContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HoldOffsetZContext = {};
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HoldOffsetZContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HoldOffsetZContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HoldOffsetZContext.userFunc0x16936d8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh && beh._getHoldOffsetZ ? Number(beh._getHoldOffsetZ()) : 0;
};
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HoldOffsetZContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HoldOffsetZContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HoldOffsetZContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HoldOffsetZContext.userFunc0x16936d8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HoldOffsetZ = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HoldOffsetZContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HoldOffsetZContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HoldOffsetZContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHoldRotationXContext = {};
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHoldRotationXContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHoldRotationXContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHoldRotationXContext.userFunc0x1698b98 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var v = Number(eventsFunctionContext.getArgument("Value"));
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh && beh._setHoldRotationX) beh._setHoldRotationX(String(v));
}
};
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHoldRotationXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHoldRotationXContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHoldRotationXContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHoldRotationXContext.userFunc0x1698b98(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHoldRotationX = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHoldRotationXContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHoldRotationXContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHoldRotationXContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HoldRotationXContext = {};
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HoldRotationXContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HoldRotationXContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HoldRotationXContext.userFunc0x16936d8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh && beh._getHoldRotationX ? Number(beh._getHoldRotationX()) : 0;
};
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HoldRotationXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HoldRotationXContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HoldRotationXContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HoldRotationXContext.userFunc0x16936d8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HoldRotationX = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HoldRotationXContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HoldRotationXContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HoldRotationXContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHoldRotationYContext = {};
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHoldRotationYContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHoldRotationYContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHoldRotationYContext.userFunc0x1698b98 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var v = Number(eventsFunctionContext.getArgument("Value"));
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh && beh._setHoldRotationY) beh._setHoldRotationY(String(v));
}
};
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHoldRotationYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHoldRotationYContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHoldRotationYContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHoldRotationYContext.userFunc0x1698b98(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHoldRotationY = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHoldRotationYContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHoldRotationYContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHoldRotationYContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HoldRotationYContext = {};
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HoldRotationYContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HoldRotationYContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HoldRotationYContext.userFunc0x16936d8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh && beh._getHoldRotationY ? Number(beh._getHoldRotationY()) : 0;
};
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HoldRotationYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HoldRotationYContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HoldRotationYContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HoldRotationYContext.userFunc0x16936d8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HoldRotationY = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HoldRotationYContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HoldRotationYContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HoldRotationYContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHoldRotationZContext = {};
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHoldRotationZContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHoldRotationZContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHoldRotationZContext.userFunc0x1698b98 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var v = Number(eventsFunctionContext.getArgument("Value"));
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh && beh._setHoldRotationZ) beh._setHoldRotationZ(String(v));
}
};
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHoldRotationZContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHoldRotationZContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHoldRotationZContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHoldRotationZContext.userFunc0x1698b98(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHoldRotationZ = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHoldRotationZContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHoldRotationZContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHoldRotationZContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HoldRotationZContext = {};
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HoldRotationZContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HoldRotationZContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HoldRotationZContext.userFunc0x16936d8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh && beh._getHoldRotationZ ? Number(beh._getHoldRotationZ()) : 0;
};
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HoldRotationZContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HoldRotationZContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HoldRotationZContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HoldRotationZContext.userFunc0x16936d8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HoldRotationZ = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HoldRotationZContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HoldRotationZContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HoldRotationZContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.MagneticGrabEnabledContext = {};
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.MagneticGrabEnabledContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.MagneticGrabEnabledContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.MagneticGrabEnabledContext.userFunc0x1698150 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
var v = beh && beh._getMagneticGrabEnabled ? beh._getMagneticGrabEnabled() : 'false';
eventsFunctionContext.returnValue = (v === 'true' || v === true) ? 1 : 0;
};
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.MagneticGrabEnabledContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.MagneticGrabEnabledContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.MagneticGrabEnabledContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.MagneticGrabEnabledContext.userFunc0x1698150(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.MagneticGrabEnabled = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.MagneticGrabEnabledContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.MagneticGrabEnabledContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.MagneticGrabEnabledContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.EnableStickyGrabContext = {};
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.EnableStickyGrabContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.EnableStickyGrabContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.EnableStickyGrabContext.userFunc0x1693740 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh && beh._setStickyGrab) beh._setStickyGrab('true');
}
};
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.EnableStickyGrabContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.EnableStickyGrabContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.EnableStickyGrabContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.EnableStickyGrabContext.userFunc0x1693740(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.EnableStickyGrab = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.EnableStickyGrabContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.EnableStickyGrabContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.EnableStickyGrabContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.DisableStickyGrabContext = {};
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.DisableStickyGrabContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.DisableStickyGrabContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.DisableStickyGrabContext.userFunc0x162afd0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh && beh._setStickyGrab) beh._setStickyGrab('false');
}
};
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.DisableStickyGrabContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.DisableStickyGrabContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.DisableStickyGrabContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.DisableStickyGrabContext.userFunc0x162afd0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.DisableStickyGrab = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.DisableStickyGrabContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.DisableStickyGrabContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.DisableStickyGrabContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.StickyGrabEnabledContext = {};
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.StickyGrabEnabledContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.StickyGrabEnabledContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.StickyGrabEnabledContext.userFunc0x16935f8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
var v = beh && beh._getStickyGrab ? beh._getStickyGrab() : 'false';
eventsFunctionContext.returnValue = (v === 'true' || v === true) ? 1 : 0;
};
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.StickyGrabEnabledContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.StickyGrabEnabledContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.StickyGrabEnabledContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.StickyGrabEnabledContext.userFunc0x16935f8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.StickyGrabEnabled = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.StickyGrabEnabledContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.StickyGrabEnabledContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.StickyGrabEnabledContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.ForceRetrieveToHandContext = {};
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.ForceRetrieveToHandContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.ForceRetrieveToHandContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.ForceRetrieveToHandContext.userFunc0x1698108 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var handStr = String(eventsFunctionContext.getArgument("Hand")).toLowerCase();
if (handStr !== 'left' && handStr !== 'right') return;
if (objs.length === 0) return;
var obj = objs[0];
var beh = obj.getBehavior(behaviorName);
if (!beh) return;
if (beh._state && beh._state !== 'idle') return;
if (beh._holsterEntry) return;
var controllers = gdjs._webxrVrControllers;
if (!controllers) return;
var hEntry = controllers[handStr];
if (!hEntry || !hEntry.connected) return;
if (gdjs._webxrVrGrabbableBeginForcedGrab) {
    gdjs._webxrVrGrabbableBeginForcedGrab(obj, beh, hEntry, handStr);
}
};
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.ForceRetrieveToHandContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.ForceRetrieveToHandContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.ForceRetrieveToHandContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.ForceRetrieveToHandContext.userFunc0x1698108(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.ForceRetrieveToHand = function(Hand, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
if (argName === "Hand") return Hand;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.ForceRetrieveToHandContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.ForceRetrieveToHandContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.ForceRetrieveToHandContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.ForceReleaseContext = {};
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.ForceReleaseContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.ForceReleaseContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.ForceReleaseContext.userFunc0x162e950 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var _kk = eventsFunctionContext.getArgument("KeepKinematic");
var _keepK = _kk === true || _kk === 1 || String(_kk) === 'true';
for (var i = 0; i < objs.length; i++) {
    var obj = objs[i];
    var beh = obj.getBehavior(behaviorName);
    if (!beh) continue;
    if (!_keepK && beh._origJoltMotionType !== undefined) {
        var phys = null;
        try { phys = obj.getBehavior('Physics3D'); } catch(e) {}
        if (phys && phys._body && typeof Jolt !== 'undefined') {
            phys._sharedData.bodyInterface.SetMotionType(phys._body.GetID(), beh._origJoltMotionType, Jolt.EActivation_Activate);
            beh._origJoltMotionType = undefined;
            if (typeof beh._origGravScale === 'number') phys.setGravityScale(beh._origGravScale);
        }
    }
    beh._state = 'idle';
    beh._grabbingHand = null;
    beh._otherHoldingHand = null;
    beh._grabLocalPos = null;
    beh._grabLocalQuat = null;
    beh._grabWorldQuat = null;
    beh._grabOuterDeltaX = null;
    beh._grabOuterDeltaY = null;
    beh._grabOuterDeltaZ = null;
    beh._suppressThrowVelocityOnNextRelease = false;
    beh._noRedockUntil = 0;
}
};
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.ForceReleaseContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.ForceReleaseContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.ForceReleaseContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.ForceReleaseContext.userFunc0x162e950(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.ForceRelease = function(KeepKinematic, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
if (argName === "KeepKinematic") return KeepKinematic;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.ForceReleaseContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.ForceReleaseContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.ForceReleaseContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.IsHolsteredContext = {};
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.IsHolsteredContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.IsHolsteredContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.IsHolsteredContext.userFunc0x16935e8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = !!(beh && beh._holsterEntry && beh._holsterEntry.occupant);
};
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.IsHolsteredContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.IsHolsteredContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.IsHolsteredContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.IsHolsteredContext.userFunc0x16935e8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.IsHolstered = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.IsHolsteredContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.IsHolsteredContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.IsHolsteredContext.GDObjectObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHolsterTagContext = {};
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHolsterTagContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHolsterTagContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHolsterTagContext.userFunc0x162afd0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var v = String(eventsFunctionContext.getArgument("Value") || '');
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh && beh._setHolsterTag) beh._setHolsterTag(v);
}
};
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHolsterTagContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHolsterTagContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHolsterTagContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHolsterTagContext.userFunc0x162afd0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHolsterTag = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHolsterTagContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHolsterTagContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHolsterTagContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HolsterTagContext = {};
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HolsterTagContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HolsterTagContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HolsterTagContext.userFunc0x1693698 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh && beh._getHolsterTag ? String(beh._getHolsterTag()) : '';
};
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HolsterTagContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HolsterTagContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HolsterTagContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HolsterTagContext.userFunc0x1693698(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HolsterTag = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HolsterTagContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HolsterTagContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HolsterTagContext.GDObjectObjects1.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHangOffsetXContext = {};
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHangOffsetXContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHangOffsetXContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHangOffsetXContext.userFunc0x162afd0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var v = Number(eventsFunctionContext.getArgument("Value"));
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh && beh._setHangOffsetX) beh._setHangOffsetX(String(v));
}
};
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHangOffsetXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHangOffsetXContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHangOffsetXContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHangOffsetXContext.userFunc0x162afd0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHangOffsetX = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHangOffsetXContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHangOffsetXContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHangOffsetXContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HangOffsetXContext = {};
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HangOffsetXContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HangOffsetXContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HangOffsetXContext.userFunc0x16935e8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh && beh._getHangOffsetX ? Number(beh._getHangOffsetX()) : 0;
};
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HangOffsetXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HangOffsetXContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HangOffsetXContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HangOffsetXContext.userFunc0x16935e8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HangOffsetX = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HangOffsetXContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HangOffsetXContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HangOffsetXContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHangOffsetYContext = {};
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHangOffsetYContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHangOffsetYContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHangOffsetYContext.userFunc0x162afd0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var v = Number(eventsFunctionContext.getArgument("Value"));
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh && beh._setHangOffsetY) beh._setHangOffsetY(String(v));
}
};
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHangOffsetYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHangOffsetYContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHangOffsetYContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHangOffsetYContext.userFunc0x162afd0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHangOffsetY = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHangOffsetYContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHangOffsetYContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHangOffsetYContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HangOffsetYContext = {};
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HangOffsetYContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HangOffsetYContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HangOffsetYContext.userFunc0x16935e8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh && beh._getHangOffsetY ? Number(beh._getHangOffsetY()) : 0;
};
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HangOffsetYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HangOffsetYContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HangOffsetYContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HangOffsetYContext.userFunc0x16935e8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HangOffsetY = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HangOffsetYContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HangOffsetYContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HangOffsetYContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHangOffsetZContext = {};
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHangOffsetZContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHangOffsetZContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHangOffsetZContext.userFunc0x162afd0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var v = Number(eventsFunctionContext.getArgument("Value"));
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh && beh._setHangOffsetZ) beh._setHangOffsetZ(String(v));
}
};
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHangOffsetZContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHangOffsetZContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHangOffsetZContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHangOffsetZContext.userFunc0x162afd0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHangOffsetZ = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHangOffsetZContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHangOffsetZContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHangOffsetZContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HangOffsetZContext = {};
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HangOffsetZContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HangOffsetZContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HangOffsetZContext.userFunc0x16935e8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh && beh._getHangOffsetZ ? Number(beh._getHangOffsetZ()) : 0;
};
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HangOffsetZContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HangOffsetZContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HangOffsetZContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HangOffsetZContext.userFunc0x16935e8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HangOffsetZ = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HangOffsetZContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HangOffsetZContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HangOffsetZContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHangRotationXContext = {};
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHangRotationXContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHangRotationXContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHangRotationXContext.userFunc0x162afd0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var v = Number(eventsFunctionContext.getArgument("Value"));
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh && beh._setHangRotationX) beh._setHangRotationX(String(v));
}
};
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHangRotationXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHangRotationXContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHangRotationXContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHangRotationXContext.userFunc0x162afd0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHangRotationX = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHangRotationXContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHangRotationXContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHangRotationXContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HangRotationXContext = {};
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HangRotationXContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HangRotationXContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HangRotationXContext.userFunc0x16935e8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh && beh._getHangRotationX ? Number(beh._getHangRotationX()) : 0;
};
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HangRotationXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HangRotationXContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HangRotationXContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HangRotationXContext.userFunc0x16935e8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HangRotationX = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HangRotationXContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HangRotationXContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HangRotationXContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHangRotationYContext = {};
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHangRotationYContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHangRotationYContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHangRotationYContext.userFunc0x162afd0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var v = Number(eventsFunctionContext.getArgument("Value"));
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh && beh._setHangRotationY) beh._setHangRotationY(String(v));
}
};
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHangRotationYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHangRotationYContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHangRotationYContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHangRotationYContext.userFunc0x162afd0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHangRotationY = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHangRotationYContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHangRotationYContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHangRotationYContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HangRotationYContext = {};
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HangRotationYContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HangRotationYContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HangRotationYContext.userFunc0x16935e8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh && beh._getHangRotationY ? Number(beh._getHangRotationY()) : 0;
};
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HangRotationYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HangRotationYContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HangRotationYContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HangRotationYContext.userFunc0x16935e8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HangRotationY = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HangRotationYContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HangRotationYContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HangRotationYContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHangRotationZContext = {};
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHangRotationZContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHangRotationZContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHangRotationZContext.userFunc0x162afd0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var v = Number(eventsFunctionContext.getArgument("Value"));
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh && beh._setHangRotationZ) beh._setHangRotationZ(String(v));
}
};
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHangRotationZContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHangRotationZContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHangRotationZContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHangRotationZContext.userFunc0x162afd0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHangRotationZ = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHangRotationZContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHangRotationZContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.SetHangRotationZContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HangRotationZContext = {};
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HangRotationZContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HangRotationZContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HangRotationZContext.userFunc0x16935e8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh && beh._getHangRotationZ ? Number(beh._getHangRotationZ()) : 0;
};
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HangRotationZContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HangRotationZContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HangRotationZContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HangRotationZContext.userFunc0x16935e8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HangRotationZ = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HangRotationZContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HangRotationZContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable.prototype.HangRotationZContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}


gdjs.registerBehavior("WebXR::VrGrabbable", gdjs.evtsExt__WebXR__VrGrabbable.VrGrabbable);
