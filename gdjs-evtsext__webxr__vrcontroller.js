
gdjs.evtsExt__WebXR__VrController = gdjs.evtsExt__WebXR__VrController || {};

/**
 * Behavior generated from VR controller tracker (WebXR)
 */
gdjs.evtsExt__WebXR__VrController.VrController = class VrController extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__WebXR__VrController.VrController.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.Handedness = behaviorData.Handedness !== undefined ? behaviorData.Handedness : "right";
    this._behaviorData.OffsetX = behaviorData.OffsetX !== undefined ? behaviorData.OffsetX : Number("0") || 0;
    this._behaviorData.OffsetY = behaviorData.OffsetY !== undefined ? behaviorData.OffsetY : Number("0") || 0;
    this._behaviorData.OffsetZ = behaviorData.OffsetZ !== undefined ? behaviorData.OffsetZ : Number("0") || 0;
    this._behaviorData.RotationOffsetX = behaviorData.RotationOffsetX !== undefined ? behaviorData.RotationOffsetX : Number("90.85") || 0;
    this._behaviorData.RotationOffsetY = behaviorData.RotationOffsetY !== undefined ? behaviorData.RotationOffsetY : Number("-42.2") || 0;
    this._behaviorData.RotationOffsetZ = behaviorData.RotationOffsetZ !== undefined ? behaviorData.RotationOffsetZ : Number("169.05") || 0;
    this._behaviorData.LaserEnabled = behaviorData.LaserEnabled !== undefined ? behaviorData.LaserEnabled : false;
    this._behaviorData.LaserColor = behaviorData.LaserColor !== undefined ? behaviorData.LaserColor : "255;0;0";
    this._behaviorData.LaserLength = behaviorData.LaserLength !== undefined ? behaviorData.LaserLength : Number("5000") || 0;
    this._behaviorData.TargetingRayLength = behaviorData.TargetingRayLength !== undefined ? behaviorData.TargetingRayLength : Number("0") || 0;
    this._behaviorData.LaserPitchOffset = behaviorData.LaserPitchOffset !== undefined ? behaviorData.LaserPitchOffset : Number("0") || 0;
    this._behaviorData.LaserStopAtGeometry = behaviorData.LaserStopAtGeometry !== undefined ? behaviorData.LaserStopAtGeometry : true;
    this._behaviorData.LaserHitMarkerEnabled = behaviorData.LaserHitMarkerEnabled !== undefined ? behaviorData.LaserHitMarkerEnabled : true;
    this._behaviorData.LaserHitMarkerSize = behaviorData.LaserHitMarkerSize !== undefined ? behaviorData.LaserHitMarkerSize : Number("5") || 0;
    this._behaviorData.MagneticGrabEnabled = behaviorData.MagneticGrabEnabled !== undefined ? behaviorData.MagneticGrabEnabled : false;
    this._behaviorData.MagneticGrabLength = behaviorData.MagneticGrabLength !== undefined ? behaviorData.MagneticGrabLength : Number("1000") || 0;
    this._behaviorData.MagneticGrabErrorTolerance = behaviorData.MagneticGrabErrorTolerance !== undefined ? behaviorData.MagneticGrabErrorTolerance : Number("5") || 0;
  }

  // Hot-reload:
  applyBehaviorOverriding(behaviorOverriding) {
    
    if (behaviorOverriding.Handedness !== undefined)
      this._behaviorData.Handedness = behaviorOverriding.Handedness;
    if (behaviorOverriding.OffsetX !== undefined)
      this._behaviorData.OffsetX = behaviorOverriding.OffsetX;
    if (behaviorOverriding.OffsetY !== undefined)
      this._behaviorData.OffsetY = behaviorOverriding.OffsetY;
    if (behaviorOverriding.OffsetZ !== undefined)
      this._behaviorData.OffsetZ = behaviorOverriding.OffsetZ;
    if (behaviorOverriding.RotationOffsetX !== undefined)
      this._behaviorData.RotationOffsetX = behaviorOverriding.RotationOffsetX;
    if (behaviorOverriding.RotationOffsetY !== undefined)
      this._behaviorData.RotationOffsetY = behaviorOverriding.RotationOffsetY;
    if (behaviorOverriding.RotationOffsetZ !== undefined)
      this._behaviorData.RotationOffsetZ = behaviorOverriding.RotationOffsetZ;
    if (behaviorOverriding.LaserEnabled !== undefined)
      this._behaviorData.LaserEnabled = behaviorOverriding.LaserEnabled;
    if (behaviorOverriding.LaserColor !== undefined)
      this._behaviorData.LaserColor = behaviorOverriding.LaserColor;
    if (behaviorOverriding.LaserLength !== undefined)
      this._behaviorData.LaserLength = behaviorOverriding.LaserLength;
    if (behaviorOverriding.TargetingRayLength !== undefined)
      this._behaviorData.TargetingRayLength = behaviorOverriding.TargetingRayLength;
    if (behaviorOverriding.LaserPitchOffset !== undefined)
      this._behaviorData.LaserPitchOffset = behaviorOverriding.LaserPitchOffset;
    if (behaviorOverriding.LaserStopAtGeometry !== undefined)
      this._behaviorData.LaserStopAtGeometry = behaviorOverriding.LaserStopAtGeometry;
    if (behaviorOverriding.LaserHitMarkerEnabled !== undefined)
      this._behaviorData.LaserHitMarkerEnabled = behaviorOverriding.LaserHitMarkerEnabled;
    if (behaviorOverriding.LaserHitMarkerSize !== undefined)
      this._behaviorData.LaserHitMarkerSize = behaviorOverriding.LaserHitMarkerSize;
    if (behaviorOverriding.MagneticGrabEnabled !== undefined)
      this._behaviorData.MagneticGrabEnabled = behaviorOverriding.MagneticGrabEnabled;
    if (behaviorOverriding.MagneticGrabLength !== undefined)
      this._behaviorData.MagneticGrabLength = behaviorOverriding.MagneticGrabLength;
    if (behaviorOverriding.MagneticGrabErrorTolerance !== undefined)
      this._behaviorData.MagneticGrabErrorTolerance = behaviorOverriding.MagneticGrabErrorTolerance;

    return true;
  }

  // Network sync:
  getNetworkSyncData(syncOptions) {
    return {
      ...super.getNetworkSyncData(syncOptions),
      props: {
        
    Handedness: this._behaviorData.Handedness,
    OffsetX: this._behaviorData.OffsetX,
    OffsetY: this._behaviorData.OffsetY,
    OffsetZ: this._behaviorData.OffsetZ,
    RotationOffsetX: this._behaviorData.RotationOffsetX,
    RotationOffsetY: this._behaviorData.RotationOffsetY,
    RotationOffsetZ: this._behaviorData.RotationOffsetZ,
    LaserEnabled: this._behaviorData.LaserEnabled,
    LaserColor: this._behaviorData.LaserColor,
    LaserLength: this._behaviorData.LaserLength,
    TargetingRayLength: this._behaviorData.TargetingRayLength,
    LaserPitchOffset: this._behaviorData.LaserPitchOffset,
    LaserStopAtGeometry: this._behaviorData.LaserStopAtGeometry,
    LaserHitMarkerEnabled: this._behaviorData.LaserHitMarkerEnabled,
    LaserHitMarkerSize: this._behaviorData.LaserHitMarkerSize,
    MagneticGrabEnabled: this._behaviorData.MagneticGrabEnabled,
    MagneticGrabLength: this._behaviorData.MagneticGrabLength,
    MagneticGrabErrorTolerance: this._behaviorData.MagneticGrabErrorTolerance,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData, options) {
    super.updateFromNetworkSyncData(networkSyncData, options);
    
    if (networkSyncData.props.Handedness !== undefined)
      this._behaviorData.Handedness = networkSyncData.props.Handedness;
    if (networkSyncData.props.OffsetX !== undefined)
      this._behaviorData.OffsetX = networkSyncData.props.OffsetX;
    if (networkSyncData.props.OffsetY !== undefined)
      this._behaviorData.OffsetY = networkSyncData.props.OffsetY;
    if (networkSyncData.props.OffsetZ !== undefined)
      this._behaviorData.OffsetZ = networkSyncData.props.OffsetZ;
    if (networkSyncData.props.RotationOffsetX !== undefined)
      this._behaviorData.RotationOffsetX = networkSyncData.props.RotationOffsetX;
    if (networkSyncData.props.RotationOffsetY !== undefined)
      this._behaviorData.RotationOffsetY = networkSyncData.props.RotationOffsetY;
    if (networkSyncData.props.RotationOffsetZ !== undefined)
      this._behaviorData.RotationOffsetZ = networkSyncData.props.RotationOffsetZ;
    if (networkSyncData.props.LaserEnabled !== undefined)
      this._behaviorData.LaserEnabled = networkSyncData.props.LaserEnabled;
    if (networkSyncData.props.LaserColor !== undefined)
      this._behaviorData.LaserColor = networkSyncData.props.LaserColor;
    if (networkSyncData.props.LaserLength !== undefined)
      this._behaviorData.LaserLength = networkSyncData.props.LaserLength;
    if (networkSyncData.props.TargetingRayLength !== undefined)
      this._behaviorData.TargetingRayLength = networkSyncData.props.TargetingRayLength;
    if (networkSyncData.props.LaserPitchOffset !== undefined)
      this._behaviorData.LaserPitchOffset = networkSyncData.props.LaserPitchOffset;
    if (networkSyncData.props.LaserStopAtGeometry !== undefined)
      this._behaviorData.LaserStopAtGeometry = networkSyncData.props.LaserStopAtGeometry;
    if (networkSyncData.props.LaserHitMarkerEnabled !== undefined)
      this._behaviorData.LaserHitMarkerEnabled = networkSyncData.props.LaserHitMarkerEnabled;
    if (networkSyncData.props.LaserHitMarkerSize !== undefined)
      this._behaviorData.LaserHitMarkerSize = networkSyncData.props.LaserHitMarkerSize;
    if (networkSyncData.props.MagneticGrabEnabled !== undefined)
      this._behaviorData.MagneticGrabEnabled = networkSyncData.props.MagneticGrabEnabled;
    if (networkSyncData.props.MagneticGrabLength !== undefined)
      this._behaviorData.MagneticGrabLength = networkSyncData.props.MagneticGrabLength;
    if (networkSyncData.props.MagneticGrabErrorTolerance !== undefined)
      this._behaviorData.MagneticGrabErrorTolerance = networkSyncData.props.MagneticGrabErrorTolerance;
  }

  // Properties:
  
  _getHandedness() {
    return this._behaviorData.Handedness !== undefined ? this._behaviorData.Handedness : "right";
  }
  _setHandedness(newValue) {
    this._behaviorData.Handedness = newValue;
  }
  _getOffsetX() {
    return this._behaviorData.OffsetX !== undefined ? this._behaviorData.OffsetX : Number("0") || 0;
  }
  _setOffsetX(newValue) {
    this._behaviorData.OffsetX = newValue;
  }
  _getOffsetY() {
    return this._behaviorData.OffsetY !== undefined ? this._behaviorData.OffsetY : Number("0") || 0;
  }
  _setOffsetY(newValue) {
    this._behaviorData.OffsetY = newValue;
  }
  _getOffsetZ() {
    return this._behaviorData.OffsetZ !== undefined ? this._behaviorData.OffsetZ : Number("0") || 0;
  }
  _setOffsetZ(newValue) {
    this._behaviorData.OffsetZ = newValue;
  }
  _getRotationOffsetX() {
    return this._behaviorData.RotationOffsetX !== undefined ? this._behaviorData.RotationOffsetX : Number("90.85") || 0;
  }
  _setRotationOffsetX(newValue) {
    this._behaviorData.RotationOffsetX = newValue;
  }
  _getRotationOffsetY() {
    return this._behaviorData.RotationOffsetY !== undefined ? this._behaviorData.RotationOffsetY : Number("-42.2") || 0;
  }
  _setRotationOffsetY(newValue) {
    this._behaviorData.RotationOffsetY = newValue;
  }
  _getRotationOffsetZ() {
    return this._behaviorData.RotationOffsetZ !== undefined ? this._behaviorData.RotationOffsetZ : Number("169.05") || 0;
  }
  _setRotationOffsetZ(newValue) {
    this._behaviorData.RotationOffsetZ = newValue;
  }
  _getLaserEnabled() {
    return this._behaviorData.LaserEnabled !== undefined ? this._behaviorData.LaserEnabled : false;
  }
  _setLaserEnabled(newValue) {
    this._behaviorData.LaserEnabled = newValue;
  }
  _toggleLaserEnabled() {
    this._setLaserEnabled(!this._getLaserEnabled());
  }
  _getLaserColor() {
    return this._behaviorData.LaserColor !== undefined ? this._behaviorData.LaserColor : "255;0;0";
  }
  _setLaserColor(newValue) {
    this._behaviorData.LaserColor = newValue;
  }
  _getLaserLength() {
    return this._behaviorData.LaserLength !== undefined ? this._behaviorData.LaserLength : Number("5000") || 0;
  }
  _setLaserLength(newValue) {
    this._behaviorData.LaserLength = newValue;
  }
  _getTargetingRayLength() {
    return this._behaviorData.TargetingRayLength !== undefined ? this._behaviorData.TargetingRayLength : Number("0") || 0;
  }
  _setTargetingRayLength(newValue) {
    this._behaviorData.TargetingRayLength = newValue;
  }
  _getLaserPitchOffset() {
    return this._behaviorData.LaserPitchOffset !== undefined ? this._behaviorData.LaserPitchOffset : Number("0") || 0;
  }
  _setLaserPitchOffset(newValue) {
    this._behaviorData.LaserPitchOffset = newValue;
  }
  _getLaserStopAtGeometry() {
    return this._behaviorData.LaserStopAtGeometry !== undefined ? this._behaviorData.LaserStopAtGeometry : true;
  }
  _setLaserStopAtGeometry(newValue) {
    this._behaviorData.LaserStopAtGeometry = newValue;
  }
  _toggleLaserStopAtGeometry() {
    this._setLaserStopAtGeometry(!this._getLaserStopAtGeometry());
  }
  _getLaserHitMarkerEnabled() {
    return this._behaviorData.LaserHitMarkerEnabled !== undefined ? this._behaviorData.LaserHitMarkerEnabled : true;
  }
  _setLaserHitMarkerEnabled(newValue) {
    this._behaviorData.LaserHitMarkerEnabled = newValue;
  }
  _toggleLaserHitMarkerEnabled() {
    this._setLaserHitMarkerEnabled(!this._getLaserHitMarkerEnabled());
  }
  _getLaserHitMarkerSize() {
    return this._behaviorData.LaserHitMarkerSize !== undefined ? this._behaviorData.LaserHitMarkerSize : Number("5") || 0;
  }
  _setLaserHitMarkerSize(newValue) {
    this._behaviorData.LaserHitMarkerSize = newValue;
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
  _getMagneticGrabLength() {
    return this._behaviorData.MagneticGrabLength !== undefined ? this._behaviorData.MagneticGrabLength : Number("1000") || 0;
  }
  _setMagneticGrabLength(newValue) {
    this._behaviorData.MagneticGrabLength = newValue;
  }
  _getMagneticGrabErrorTolerance() {
    return this._behaviorData.MagneticGrabErrorTolerance !== undefined ? this._behaviorData.MagneticGrabErrorTolerance : Number("5") || 0;
  }
  _setMagneticGrabErrorTolerance(newValue) {
    this._behaviorData.MagneticGrabErrorTolerance = newValue;
  }
}

/**
 * Shared data generated from VR controller tracker (WebXR)
 */
gdjs.evtsExt__WebXR__VrController.VrController.SharedData = class VrControllerSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__WebXR__VrController.VrController.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._WebXR_VrControllerSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._WebXR_VrControllerSharedData = new gdjs.evtsExt__WebXR__VrController.VrController.SharedData(
      initialData
    );
  }
  return instanceContainer._WebXR_VrControllerSharedData;
}

// Methods:
gdjs.evtsExt__WebXR__VrController.VrController.prototype.onCreatedContext = {};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.onCreatedContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrController.VrController.prototype.onCreatedContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrController.VrController.prototype.onCreatedContext.userFunc0x18719c0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
for (var i = 0; i < objs.length; i++) {
    var obj = objs[i];
    var beh = obj.getBehavior(behaviorName);
    if (!beh) continue;
    var controllers = gdjs._webxrVrControllers;
    if (!controllers) { beh._vrGrip = null; continue; }
    var handedness = beh._getHandedness();
    var entry = controllers[handedness];
    if (entry && entry.grip) {
        beh._vrGrip = entry.grip;
    } else {
        beh._vrGrip = null;
    }
    if (entry) entry.gdObject = obj;
    if (entry) entry.vrBeh = beh;
    beh._magneticGrabActive = (beh._getMagneticGrabEnabled && (beh._getMagneticGrabEnabled() === 'true' || beh._getMagneticGrabEnabled() === true));
    // The model-space correction is derived only from the design-time mesh orientation
    // (captured below, deferred until the GLB has finished loading) plus the
    // RotationOffset property, so it is deterministic and needs no cross-scene
    // persistence - it is simply recomputed fresh every scene.
    beh._qMeshInit = null;
    beh._qMeshInitCaptured = false;
}
};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrController.VrController.prototype.onCreatedContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrController.VrController.prototype.onCreatedContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrController.VrController.prototype.onCreatedContext.userFunc0x18719c0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrController.VrController.prototype.onCreated = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrController.VrController.prototype.onCreatedContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrController.VrController.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrController.VrController.prototype.onCreatedContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrController.VrController.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.doStepPreEventsContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrController.VrController.prototype.doStepPreEventsContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrController.VrController.prototype.doStepPreEventsContext.userFunc0x1790c90 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var tr = runtimeScene.getGame().getRenderer().getThreeRenderer();
if (!tr || !tr.xr || !tr.xr.isPresenting) return;
var controllers = gdjs._webxrVrControllers;
if (!controllers) return;
var anchor = gdjs._webxrVrAnchor;
if (!anchor) return;
if (anchor.runtimeScene !== runtimeScene) return;

for (var i = 0; i < objs.length; i++) {
    var obj = objs[i];
    var beh = obj.getBehavior(behaviorName);
    if (!beh || !beh.activated()) continue;

    var handedness = beh._getHandedness();

    var entry = controllers[handedness];
    if (entry && entry.connected) {
        beh._vrGrip = entry.grip;
        beh._vrRay  = entry.ray;
    } else {
        beh._vrGrip = null;
        beh._vrRay  = null;
    }
    // Deferred _qMeshInit capture: read from actual Three.js mesh once it's ready.
    if (!beh._qMeshInitCaptured) {
        var threeObjInit = obj.get3DRendererObject ? obj.get3DRendererObject() : null;
        if (threeObjInit && threeObjInit.quaternion) {
            var _qiPre = threeObjInit.quaternion;
            if (Math.abs(_qiPre.x) + Math.abs(_qiPre.y) + Math.abs(_qiPre.z) > 0.001) {
                beh._qMeshInit = _qiPre.clone();
                beh._qMeshInitCaptured = true;
            }
            if (!gdjs._webxrVrControllerMeshes) gdjs._webxrVrControllerMeshes = new Set();
            gdjs._webxrVrControllerMeshes.add(threeObjInit);
            beh._qMesh = threeObjInit;
            if (!gdjs._webxrHitIsController) {
                gdjs._webxrHitIsController = function(hit) {
                    return !!(hit && hit.object && hit.object.userData && hit.object.userData.vrController);
                };
            }
        }
    }
    // Mark every descendant of the controller model so raycasts reliably skip them.
    // Belt-and-suspenders: disable the raycast method (prevents hit detection) AND
    // set userData.vrController (checked in hit loops, independent of parent chain).
    // Re-runs each frame until mesh count stabilises to handle async GLB loading.
    if (beh._qMesh && !beh._controllerRaycastReady) {
        var _noRcFn = function(){};
        var _prevMc = beh._controllerMeshCount || 0;
        var _mc = 0;
        beh._qMesh.frustumCulled = false;
        beh._qMesh.traverse(function(ch) {
            ch.userData.vrController = true;
            ch.frustumCulled = false;
            if (ch.isMesh) { ch.raycast = _noRcFn; _mc++; }
        });
        beh._controllerMeshCount = _mc;
        if (_mc > 0 && _mc === _prevMc) beh._controllerRaycastReady = true;
    }

    beh._prevButtons = beh._curButtons || {};
    var gamepad = null;
    var _sess = tr.xr.getSession ? tr.xr.getSession() : null;
    if (_sess && _sess.inputSources) {
        for (var _si = 0; _si < _sess.inputSources.length; _si++) {
            var _src = _sess.inputSources[_si];
            if (_src.handedness === handedness && _src.gamepad) {
                gamepad = _src.gamepad;
                break;
            }
        }
    }
    if (gamepad) {
        var btns = gamepad.buttons;
        beh._curButtons = {
            trigger:    btns[0] ? btns[0].value > 0.5 : false,
            grip:       btns[1] ? btns[1].value > 0.5 : false,
            thumbstick: btns[3] ? btns[3].pressed : false,
            primary:    btns[4] ? btns[4].pressed : false,
            secondary:  btns[5] ? btns[5].pressed : false,
            menu:       btns[6] ? btns[6].pressed : false
        };
        beh._triggerValue = btns[0] ? btns[0].value : 0;
        beh._gripValue    = btns[1] ? btns[1].value : 0;
        beh._joyX = (gamepad.axes.length > 2) ? gamepad.axes[2] : 0;
        beh._joyY = (gamepad.axes.length > 3) ? gamepad.axes[3] : 0;
        beh._connected = true;
    } else {
        beh._curButtons = {};
        beh._triggerValue = 0;
        beh._gripValue = 0;
        beh._joyX = 0;
        beh._joyY = 0;
        beh._connected = false;
    }

    var entry2 = controllers[handedness];
    if (entry2) entry2.vrBeh = beh;
    // Re-read property each frame (getter may not be ready at onCreated time)
    if (beh._getMagneticGrabEnabled) {
        beh._magneticGrabActive = (beh._getMagneticGrabEnabled() === 'true' || beh._getMagneticGrabEnabled() === true);
    }
    if (entry2) { entry2._magneticGrabActive = beh._magneticGrabActive; entry2._magneticGrabLength = beh._getMagneticGrabLength ? Number(beh._getMagneticGrabLength()) : 1000; entry2._laserPitchOffset = beh._getLaserPitchOffset ? Number(beh._getLaserPitchOffset()) || 0 : 0; entry2._magneticGrabErrorTolerance = beh._getMagneticGrabErrorTolerance ? Number(beh._getMagneticGrabErrorTolerance()) || 0 : 0;
        var _tlRaw = beh._getTargetingRayLength ? Number(beh._getTargetingRayLength()) : 0;
        var _tlLaser = beh._getLaserLength ? Number(beh._getLaserLength()) : 5000;
        if (!(_tlLaser > 0)) _tlLaser = 5000;
        entry2._targetingRayLength = (_tlRaw > 0) ? _tlRaw : _tlLaser;
    }
}
};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrController.VrController.prototype.doStepPreEventsContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrController.VrController.prototype.doStepPreEventsContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrController.VrController.prototype.doStepPreEventsContext.userFunc0x1790c90(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrController.VrController.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
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

gdjs.evtsExt__WebXR__VrController.VrController.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrController.VrController.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrController.VrController.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrController.VrController.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.doStepPostEventsContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrController.VrController.prototype.doStepPostEventsContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrController.VrController.prototype.doStepPostEventsContext.userFunc0x16415d8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var tr = runtimeScene.getGame().getRenderer().getThreeRenderer();
if (!tr || !tr.xr || !tr.xr.isPresenting) return;
var controllers = gdjs._webxrVrControllers;
if (!controllers) return;
var anchor = gdjs._webxrVrAnchor;
if (!anchor) return;
if (anchor.runtimeScene !== runtimeScene) return;

for (var i = 0; i < objs.length; i++) {
    var obj = objs[i];
    var beh = obj.getBehavior(behaviorName);
    if (!beh || !beh.activated()) continue;

    var handedness = beh._getHandedness();

    var entry = controllers[handedness];
    if (entry && entry.connected) {
        beh._vrGrip = entry.grip;
        beh._vrRay  = entry.ray;
    } else {
        beh._vrGrip = null;
        beh._vrRay  = null;
    }

    // Deferred _qMeshInit capture: read from actual Three.js mesh once it's ready.
    if (!beh._qMeshInitCaptured) {
        var threeObjInit = obj.get3DRendererObject ? obj.get3DRendererObject() : null;
        if (threeObjInit && threeObjInit.quaternion) {
            var _qiPost = threeObjInit.quaternion;
            if (Math.abs(_qiPost.x) + Math.abs(_qiPost.y) + Math.abs(_qiPost.z) > 0.001) {
                beh._qMeshInit = _qiPost.clone();
                beh._qMeshInitCaptured = true;
            }
        }
    }

    // Position update: done here (postEvents) so the rig is already updated for this frame.
    if (beh._vrGrip) {
        var wp = new THREE.Vector3();
        beh._vrGrip.getWorldPosition(wp);
        // Apply controller-local offset (for model alignment fine-tuning)
        var offX = beh._getOffsetX ? Number(beh._getOffsetX()) : 0;
        var offY = beh._getOffsetY ? Number(beh._getOffsetY()) : 0;
        var offZ = beh._getOffsetZ ? Number(beh._getOffsetZ()) : 0;
        if (offX !== 0 || offY !== 0 || offZ !== 0) {
            var localOff = new THREE.Vector3(offX, offY, -offZ);
            var wqOff = new THREE.Quaternion();
            beh._vrGrip.getWorldQuaternion(wqOff);
            localOff.applyQuaternion(wqOff);
            wp.add(localOff);
        }
        // Keep hand anchor at the adjusted position so VrGrabbable/VrClimbable/VrInteractable
        // share the same reference point as the visual model.
        var entry2pre = controllers[handedness];
        var ha = entry2pre && entry2pre.handAnchor;
        if (ha) {
            var _haWs = gdjs._webxrVrWorldScale || 100;
            ha.position.set(offX / _haWs, offY / _haWs, -offZ / _haWs);
        }
        // Publish adjusted position for other behaviors (VrGrabbable, VrInteractable, VrClimbable)
        if (entry2pre) { entry2pre._adjustedWP = wp.clone(); }
        var dx = wp.x - anchor.threeX;
        var dy = wp.y - anchor.threeY;
        var dz = wp.z - anchor.threeZ;
        obj.setX(anchor.x + dx);
        obj.setY(anchor.y - dy);
        obj.setZ(anchor.z + dz);
    }

    // === Throw/launch debug (gated by gdjs._webxrDebugThrow) ===
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
    // === Velocity tracking (time-stamped, units/sec, 200ms window) ===
    var dt = runtimeScene.getTimeManager().getElapsedTime() / 1000;
    if (dt <= 0) dt = 1/72;
    var curGdX = obj.getX(), curGdY = obj.getY(), curGdZ = obj.getZ();
    if (!beh._prevGdPos) beh._prevGdPos = {x: curGdX, y: curGdY, z: curGdZ};
    var dvx = (curGdX - beh._prevGdPos.x) / dt;
    var dvy = (curGdY - beh._prevGdPos.y) / dt;
    var dvz = (curGdZ - beh._prevGdPos.z) / dt;
    beh._prevGdPos = {x: curGdX, y: curGdY, z: curGdZ};
    if (!beh._velHistory) beh._velHistory = [];
    var now = performance.now();
    var _avx = 0, _avy = 0, _avz = 0;
    if (beh._vrGrip) {
        var _wqC = new THREE.Quaternion();
        beh._vrGrip.getWorldQuaternion(_wqC);
        if (!beh._prevGripQ) beh._prevGripQ = _wqC.clone();
        var _qd = _wqC.clone().multiply(beh._prevGripQ.clone().invert());
        var _qw = Math.max(-1, Math.min(1, _qd.w));
        var _ang = 2 * Math.acos(_qw);
        if (_ang > Math.PI) _ang -= 2 * Math.PI;
        var _sh = Math.sqrt(1 - _qw * _qw);
        if (_sh > 1e-5 && Math.abs(_ang) > 1e-5) {
            _avx = (_qd.x / _sh) * _ang / dt;
            _avy = (_qd.y / _sh) * _ang / dt;
            _avz = (_qd.z / _sh) * _ang / dt;
        }
        beh._prevGripQ = _wqC.clone();
    }
    var _spdSq = dvx*dvx + dvy*dvy + dvz*dvz;
    var _ok = isFinite(dvx) && isFinite(dvy) && isFinite(dvz) && dt >= 0.002 && _spdSq <= 4000*4000;
    if (_ok) beh._velHistory.push({vx: dvx, vy: dvy, vz: dvz, avx: _avx, avy: _avy, avz: _avz, t: now});
    // Prune samples older than 200ms; cap at 20 entries
    while (beh._velHistory.length > 0 && beh._velHistory[0].t < now - 200) beh._velHistory.shift();
    if (beh._velHistory.length > 20) beh._velHistory.shift();
    // Time-weighted average (linear decay over 200ms window) for publishing
    var wSumX = 0, wSumY = 0, wSumZ = 0, wSumAX = 0, wSumAY = 0, wSumAZ = 0, wTotal = 0;
    for (var vi = 0; vi < beh._velHistory.length; vi++) {
        var w = Math.max(0, 1 - (now - beh._velHistory[vi].t) / 200);
        wSumX += beh._velHistory[vi].vx * w; wSumY += beh._velHistory[vi].vy * w; wSumZ += beh._velHistory[vi].vz * w;
        wSumAX += beh._velHistory[vi].avx * w; wSumAY += beh._velHistory[vi].avy * w; wSumAZ += beh._velHistory[vi].avz * w;
        wTotal += w;
    }
    beh._velX = wTotal > 0 ? wSumX / wTotal : 0;
    beh._velY = wTotal > 0 ? wSumY / wTotal : 0;
    beh._velZ = wTotal > 0 ? wSumZ / wTotal : 0;
    beh._angVelX = wTotal > 0 ? wSumAX / wTotal : 0;
    beh._angVelY = wTotal > 0 ? -(wSumAY / wTotal) : 0;
    beh._angVelZ = wTotal > 0 ? wSumAZ / wTotal : 0;
    var entry2 = controllers[handedness];
    if (entry2) { entry2._velX = beh._velX; entry2._velY = beh._velY; entry2._velZ = beh._velZ; entry2._velHistory = beh._velHistory; entry2._angVelX = beh._angVelX; entry2._angVelY = beh._angVelY; entry2._angVelZ = beh._angVelZ; }
    beh._dbgCounter = (beh._dbgCounter || 0) + 1;
    if (beh._dbgCounter % 30 === 0) {
        gdjs._webxrDbgFn('track.' + (handedness === 'left' ? 'L' : 'R'),
            'T' + (handedness === 'left' ? 'L' : 'R') +
            ' inst=' + dvx.toFixed(0) + ',' + dvy.toFixed(0) + ',' + dvz.toFixed(0) +
            ' avg=' + beh._velX.toFixed(0) + ',' + beh._velY.toFixed(0) + ',' + beh._velZ.toFixed(0) +
            ' n=' + beh._velHistory.length);
    }

    // === Quaternion / rotation / ray direction ===
    if (beh._vrGrip) {
        var wq = new THREE.Quaternion();
        beh._vrGrip.getWorldQuaternion(wq);
        beh._worldQuat = wq;
        // Apply the fixed model-space correction, then decompose in GDevelop's ZYX convention.
        // Y-conjugate wq to match the mesh's Y-flipped local frame (fixes inverted yaw/roll).
        var wqLocal = new THREE.Quaternion(-wq.x, wq.y, -wq.z, wq.w);
        var q_final = wqLocal.clone().multiply(gdjs._webxrControllerCorrection(beh));
        // Back-fill GDevelop API state first (setAngle etc. may internally update the mesh).
        var euler = new THREE.Euler().setFromQuaternion(q_final, 'ZYX');
        beh._rotX = euler.x * 180 / Math.PI;
        beh._rotY = euler.y * 180 / Math.PI;
        beh._rotZ = euler.z * 180 / Math.PI;
        obj.setAngle(euler.z * 180 / Math.PI);
        if (obj.setRotationX) obj.setRotationX(euler.x * 180 / Math.PI);
        if (obj.setRotationY) obj.setRotationY(euler.y * 180 / Math.PI);
        // Override the Three.js mesh quaternion directly to bypass any Euler round-trip errors.
        var threeObj = obj.get3DRendererObject ? obj.get3DRendererObject() : null;
        if (threeObj) { threeObj.quaternion.copy(q_final); threeObj.updateMatrix(); }
        var rayQuat = new THREE.Quaternion();
        var raySrc = beh._vrRay || beh._vrGrip;
        raySrc.getWorldQuaternion(rayQuat);
        var pitchDeg = beh._getLaserPitchOffset ? Number(beh._getLaserPitchOffset()) || 0 : 0;
        if (pitchDeg !== 0) {
            rayQuat.multiply(new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), pitchDeg * Math.PI / 180));
        }
        var fwd = new THREE.Vector3(0, 0, -1).applyQuaternion(rayQuat);
        beh._rayDirX = fwd.x; beh._rayDirY = -fwd.y; beh._rayDirZ = fwd.z;
        if (entry2) { entry2._worldQuat = wq; entry2._rayFwdDir = {x: fwd.x, y: fwd.y, z: fwd.z}; }
    } else {
        beh._rotX = beh._rotY = beh._rotZ = 0;
        beh._rayDirX = 0; beh._rayDirY = 0; beh._rayDirZ = -1;
    }
    if (entry2) { entry2._magneticGrabActive = beh._magneticGrabActive; entry2._magneticGrabLength = beh._getMagneticGrabLength ? Number(beh._getMagneticGrabLength()) : 1000; entry2._laserPitchOffset = beh._getLaserPitchOffset ? Number(beh._getLaserPitchOffset()) || 0 : 0; entry2._magneticGrabErrorTolerance = beh._getMagneticGrabErrorTolerance ? Number(beh._getMagneticGrabErrorTolerance()) || 0 : 0;
        var _tlRaw = beh._getTargetingRayLength ? Number(beh._getTargetingRayLength()) : 0;
        var _tlLaser = beh._getLaserLength ? Number(beh._getLaserLength()) : 5000;
        if (!(_tlLaser > 0)) _tlLaser = 5000;
        entry2._targetingRayLength = (_tlRaw > 0) ? _tlRaw : _tlLaser;
    }
    // === Targeting ray + laser beam ===
    var laserEnabled = beh._getLaserEnabled ? (beh._getLaserEnabled() === 'true' || beh._getLaserEnabled() === true) : false;
    var suppressed = (gdjs._webxrSuppressLaserUntil && gdjs._webxrSuppressLaserUntil[handedness] > performance.now());
    if (suppressed) laserEnabled = false;
    var stopAtGeom = beh._getLaserStopAtGeometry ? (beh._getLaserStopAtGeometry() === 'true' || beh._getLaserStopAtGeometry() === true) : true;
    var llen = beh._getLaserLength ? Number(beh._getLaserLength()) : 5000;
    if (!(llen > 0)) llen = 5000;
    var tlenRaw = beh._getTargetingRayLength ? Number(beh._getTargetingRayLength()) : 0;
    var tlen = (tlenRaw > 0) ? tlenRaw : llen;
    var drawVisual = laserEnabled && beh._vrGrip;
    var castRay = !!beh._vrGrip;
    if (drawVisual || castRay) {
        // (1) origin + orientation, computed independently of the laser line
        var lwp = new THREE.Vector3();
        (beh._vrRay || beh._vrGrip).getWorldPosition(lwp);
        var lwq = new THREE.Quaternion();
        (beh._vrRay || beh._vrGrip).getWorldQuaternion(lwq);
        var pitch = beh._getLaserPitchOffset ? Number(beh._getLaserPitchOffset()) : 0;
        if (pitch !== 0) {
            lwq.multiply(new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), pitch * Math.PI / 180));
        }
        // reset hit data every active frame
        beh._laserHitDistance = -1;
        beh._laserHitPointThree = null;
        beh._laserHitThreeObject = null;
        beh._laserHitGdObject = null;
        // (2) scene reference, cached independently of the laser line
        var sceneRef = beh._laserScene;
        if (!sceneRef) {
            try {
                var llr = runtimeScene.getLayer('');
                var llr3d = llr.getRenderer ? llr.getRenderer() : null;
                if (llr3d) sceneRef = llr3d._threeScene || llr3d.threeScene || (llr3d.getThreeScene ? llr3d.getThreeScene() : null);
            } catch(e) {}
            beh._laserScene = sceneRef;
        }
        // (3) shared per-hand ray - feeds VrTargetable and all laser-hit expressions;
        // always runs when grip is present. See gdjs._webxrHandRayHits (onFirstSceneLoaded).
        if (castRay) {
            var _wsLaser = gdjs._webxrVrWorldScale || 100;
            var _laserNear = _wsLaser * 0.10;
            var _handHits = gdjs._webxrHandRayHits(runtimeScene, handedness);
            for (var hi = 0; hi < _handHits.length; hi++) {
                var _hh = _handHits[hi];
                if (_hh.distance < _laserNear || _hh.distance > tlen) continue;
                beh._laserHitDistance = _hh.distance;
                beh._laserHitPointThree = _hh.point;
                beh._laserHitThreeObject = _hh.threeObject;
                beh._laserHitGdObject = _hh.gdObject;
                break;
            }
        }
        // (4) visual beam + marker - only when laser is enabled and not suppressed
        if (drawVisual) {
            var _lc = (beh._getLaserColor ? String(beh._getLaserColor()) : '255;0;0').split(';');
            var lr2 = Math.max(0,Math.min(255,+_lc[0]||0))/255;
            var lg2 = Math.max(0,Math.min(255,+_lc[1]||0))/255;
            var lb2 = Math.max(0,Math.min(255,+_lc[2]||0))/255;
            var markerOn = beh._getLaserHitMarkerEnabled ? (beh._getLaserHitMarkerEnabled() === 'true' || beh._getLaserHitMarkerEnabled() === true) : true;
            var markerRad = beh._getLaserHitMarkerSize ? Number(beh._getLaserHitMarkerSize()) : 5;
            if (!(markerRad > 0)) markerRad = 5;
            if (!beh._laserLine) {
                var laserGeom = new THREE.BufferGeometry().setFromPoints([
                    new THREE.Vector3(0, 0, 0),
                    new THREE.Vector3(0, 0, -llen)
                ]);
                var laserMat = new THREE.LineBasicMaterial({ color: new THREE.Color(lr2, lg2, lb2) });
                beh._laserLine = new THREE.Line(laserGeom, laserMat);
                beh._laserLine.raycast = function() {};
                beh._laserLine.frustumCulled = false;
                if (sceneRef) { sceneRef.add(beh._laserLine); }
            }
            if (markerOn && !beh._laserHitMarker && beh._laserLine) {
                var mkGeom = new THREE.SphereGeometry(markerRad, 12, 12);
                var mkMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(lr2, lg2, lb2), transparent: true, opacity: 0.5 });
                beh._laserHitMarker = new THREE.Mesh(mkGeom, mkMat);
                beh._laserHitMarker.raycast = function() {};
                beh._laserHitMarker.frustumCulled = false;
                beh._laserHitMarker.visible = false;
                beh._laserHitMarker._builtRadius = markerRad;
                beh._laserLine.add(beh._laserHitMarker);
            }
            if (beh._laserLine) {
                beh._laserLine.visible = true;
                if (beh._laserHitMarker) beh._laserHitMarker.visible = false;
                beh._laserLine.position.set(lwp.x, -lwp.y, lwp.z);
                beh._laserLine.quaternion.set(-lwq.x, lwq.y, -lwq.z, lwq.w);
                beh._laserLine.material.color.setRGB(lr2, lg2, lb2);
                var drawLen = (stopAtGeom && beh._laserHitDistance > 0 && beh._laserHitDistance <= llen) ? beh._laserHitDistance : llen;
                var posAttr = beh._laserLine.geometry.attributes.position;
                if (posAttr && posAttr.getZ(1) !== -drawLen) {
                    posAttr.setZ(1, -drawLen);
                    posAttr.needsUpdate = true;
                }
                if (beh._laserHitMarker) {
                    if (beh._laserHitMarker._builtRadius !== markerRad) {
                        beh._laserHitMarker.geometry.dispose();
                        beh._laserHitMarker.geometry = new THREE.SphereGeometry(markerRad, 12, 12);
                        beh._laserHitMarker._builtRadius = markerRad;
                    }
                    beh._laserHitMarker.material.color.setRGB(lr2, lg2, lb2);
                    beh._laserHitMarker.visible = markerOn && stopAtGeom && (beh._laserHitDistance > 0) && (beh._laserHitDistance <= llen);
                    if (beh._laserHitMarker.visible) beh._laserHitMarker.position.set(0, 0, -drawLen);
                }
                if (!markerOn && beh._laserHitMarker) {
                    beh._laserLine.remove(beh._laserHitMarker);
                    beh._laserHitMarker.geometry.dispose();
                    beh._laserHitMarker.material.dispose();
                    beh._laserHitMarker = null;
                }
            }
        } else if (beh._laserLine) {
            // laser off (or suppressed) but targeting ray still active - hide the visual only
            beh._laserLine.visible = false;
            if (beh._laserHitMarker) beh._laserHitMarker.visible = false;
        }
    } else {
        // no grip - clear hit data and tear down the laser line
        beh._laserHitDistance = -1;
        beh._laserHitPointThree = null;
        beh._laserHitThreeObject = null;
        if (beh._laserLine) {
            if (beh._laserHitMarker) {
                beh._laserHitMarker.geometry.dispose();
                beh._laserHitMarker.material.dispose();
                beh._laserHitMarker = null;
            }
            if (beh._laserScene) beh._laserScene.remove(beh._laserLine);
            beh._laserLine.geometry.dispose();
            beh._laserLine.material.dispose();
            beh._laserLine = null;
            beh._laserScene = null;
        }
    }
}
};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrController.VrController.prototype.doStepPostEventsContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrController.VrController.prototype.doStepPostEventsContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrController.VrController.prototype.doStepPostEventsContext.userFunc0x16415d8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrController.VrController.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrController.VrController.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrController.VrController.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrController.VrController.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrController.VrController.prototype.onDestroyContext = {};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.onDestroyContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrController.VrController.prototype.onDestroyContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrController.VrController.prototype.onDestroyContext.userFunc0x1641550 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
for (var i = 0; i < objs.length; i++) {
    var obj = objs[i];
    var beh = obj.getBehavior(behaviorName);
    if (beh) {
        if (beh._laserLine) {
            if (beh._laserHitMarker) {
                beh._laserHitMarker.geometry.dispose();
                beh._laserHitMarker.material.dispose();
                beh._laserHitMarker = null;
            }
            if (beh._laserScene) beh._laserScene.remove(beh._laserLine);
            beh._laserLine.geometry.dispose();
            beh._laserLine.material.dispose();
            beh._laserLine = null;
            beh._laserScene = null;
        }
        if (beh._qMesh && gdjs._webxrVrControllerMeshes) {
            gdjs._webxrVrControllerMeshes.delete(beh._qMesh);
        }
        beh._qMesh = null;
        beh._vrGrip = null;
        if (gdjs._webxrVrControllers) {
            var _dh = beh._getHandedness ? beh._getHandedness() : null;
            var _de = _dh ? gdjs._webxrVrControllers[_dh] : null;
            if (_de && _de.gdObject === obj) _de.gdObject = null;
            if (_de && _de.vrBeh === beh) _de.vrBeh = null;
        }
    }
}
};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.onDestroyContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrController.VrController.prototype.onDestroyContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrController.VrController.prototype.onDestroyContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrController.VrController.prototype.onDestroyContext.userFunc0x1641550(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrController.VrController.prototype.onDestroy = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrController.VrController.prototype.onDestroyContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrController.VrController.prototype.onDestroyContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrController.VrController.prototype.onDestroyContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsConnectedContext = {};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsConnectedContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsConnectedContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsConnectedContext.userFunc0x16415e0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = !!(beh && beh._connected);
};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsConnectedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsConnectedContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsConnectedContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsConnectedContext.userFunc0x16415e0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsConnected = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsConnectedContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsConnectedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsConnectedContext.GDObjectObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsTriggerPressedContext = {};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsTriggerPressedContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsTriggerPressedContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsTriggerPressedContext.userFunc0x1641610 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = !!(beh && beh._curButtons && beh._curButtons.trigger);
};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsTriggerPressedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsTriggerPressedContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsTriggerPressedContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsTriggerPressedContext.userFunc0x1641610(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsTriggerPressed = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsTriggerPressedContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsTriggerPressedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsTriggerPressedContext.GDObjectObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsTriggerJustPressedContext = {};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsTriggerJustPressedContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsTriggerJustPressedContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsTriggerJustPressedContext.userFunc0x1641610 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = !!(beh && beh._curButtons && beh._curButtons.trigger && beh._prevButtons && !beh._prevButtons.trigger);
};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsTriggerJustPressedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsTriggerJustPressedContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsTriggerJustPressedContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsTriggerJustPressedContext.userFunc0x1641610(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsTriggerJustPressed = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsTriggerJustPressedContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsTriggerJustPressedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsTriggerJustPressedContext.GDObjectObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsTriggerJustReleasedContext = {};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsTriggerJustReleasedContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsTriggerJustReleasedContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsTriggerJustReleasedContext.userFunc0x1641610 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = !!(beh && beh._curButtons && !beh._curButtons.trigger && beh._prevButtons && beh._prevButtons.trigger);
};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsTriggerJustReleasedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsTriggerJustReleasedContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsTriggerJustReleasedContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsTriggerJustReleasedContext.userFunc0x1641610(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsTriggerJustReleased = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsTriggerJustReleasedContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsTriggerJustReleasedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsTriggerJustReleasedContext.GDObjectObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsGripPressedContext = {};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsGripPressedContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsGripPressedContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsGripPressedContext.userFunc0x16415e0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = !!(beh && beh._curButtons && beh._curButtons.grip);
};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsGripPressedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsGripPressedContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsGripPressedContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsGripPressedContext.userFunc0x16415e0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsGripPressed = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsGripPressedContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsGripPressedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsGripPressedContext.GDObjectObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsGripJustPressedContext = {};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsGripJustPressedContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsGripJustPressedContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsGripJustPressedContext.userFunc0x1641610 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = !!(beh && beh._curButtons && beh._curButtons.grip && beh._prevButtons && !beh._prevButtons.grip);
};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsGripJustPressedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsGripJustPressedContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsGripJustPressedContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsGripJustPressedContext.userFunc0x1641610(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsGripJustPressed = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsGripJustPressedContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsGripJustPressedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsGripJustPressedContext.GDObjectObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsGripJustReleasedContext = {};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsGripJustReleasedContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsGripJustReleasedContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsGripJustReleasedContext.userFunc0x1641610 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = !!(beh && beh._curButtons && !beh._curButtons.grip && beh._prevButtons && beh._prevButtons.grip);
};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsGripJustReleasedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsGripJustReleasedContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsGripJustReleasedContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsGripJustReleasedContext.userFunc0x1641610(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsGripJustReleased = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsGripJustReleasedContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsGripJustReleasedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsGripJustReleasedContext.GDObjectObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsPrimaryButtonPressedContext = {};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsPrimaryButtonPressedContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsPrimaryButtonPressedContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsPrimaryButtonPressedContext.userFunc0x1641610 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = !!(beh && beh._curButtons && beh._curButtons.primary);
};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsPrimaryButtonPressedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsPrimaryButtonPressedContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsPrimaryButtonPressedContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsPrimaryButtonPressedContext.userFunc0x1641610(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsPrimaryButtonPressed = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsPrimaryButtonPressedContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsPrimaryButtonPressedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsPrimaryButtonPressedContext.GDObjectObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsPrimaryButtonJustPressedContext = {};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsPrimaryButtonJustPressedContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsPrimaryButtonJustPressedContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsPrimaryButtonJustPressedContext.userFunc0x1641678 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = !!(beh && beh._curButtons && beh._curButtons.primary && beh._prevButtons && !beh._prevButtons.primary);
};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsPrimaryButtonJustPressedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsPrimaryButtonJustPressedContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsPrimaryButtonJustPressedContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsPrimaryButtonJustPressedContext.userFunc0x1641678(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsPrimaryButtonJustPressed = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsPrimaryButtonJustPressedContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsPrimaryButtonJustPressedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsPrimaryButtonJustPressedContext.GDObjectObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsPrimaryButtonJustReleasedContext = {};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsPrimaryButtonJustReleasedContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsPrimaryButtonJustReleasedContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsPrimaryButtonJustReleasedContext.userFunc0x1641678 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = !!(beh && beh._curButtons && !beh._curButtons.primary && beh._prevButtons && beh._prevButtons.primary);
};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsPrimaryButtonJustReleasedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsPrimaryButtonJustReleasedContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsPrimaryButtonJustReleasedContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsPrimaryButtonJustReleasedContext.userFunc0x1641678(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsPrimaryButtonJustReleased = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsPrimaryButtonJustReleasedContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsPrimaryButtonJustReleasedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsPrimaryButtonJustReleasedContext.GDObjectObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsSecondaryButtonPressedContext = {};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsSecondaryButtonPressedContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsSecondaryButtonPressedContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsSecondaryButtonPressedContext.userFunc0x1641678 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = !!(beh && beh._curButtons && beh._curButtons.secondary);
};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsSecondaryButtonPressedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsSecondaryButtonPressedContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsSecondaryButtonPressedContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsSecondaryButtonPressedContext.userFunc0x1641678(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsSecondaryButtonPressed = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsSecondaryButtonPressedContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsSecondaryButtonPressedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsSecondaryButtonPressedContext.GDObjectObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsSecondaryButtonJustPressedContext = {};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsSecondaryButtonJustPressedContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsSecondaryButtonJustPressedContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsSecondaryButtonJustPressedContext.userFunc0x1641678 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = !!(beh && beh._curButtons && beh._curButtons.secondary && beh._prevButtons && !beh._prevButtons.secondary);
};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsSecondaryButtonJustPressedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsSecondaryButtonJustPressedContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsSecondaryButtonJustPressedContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsSecondaryButtonJustPressedContext.userFunc0x1641678(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsSecondaryButtonJustPressed = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsSecondaryButtonJustPressedContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsSecondaryButtonJustPressedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsSecondaryButtonJustPressedContext.GDObjectObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsSecondaryButtonJustReleasedContext = {};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsSecondaryButtonJustReleasedContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsSecondaryButtonJustReleasedContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsSecondaryButtonJustReleasedContext.userFunc0x1641678 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = !!(beh && beh._curButtons && !beh._curButtons.secondary && beh._prevButtons && beh._prevButtons.secondary);
};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsSecondaryButtonJustReleasedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsSecondaryButtonJustReleasedContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsSecondaryButtonJustReleasedContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsSecondaryButtonJustReleasedContext.userFunc0x1641678(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsSecondaryButtonJustReleased = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsSecondaryButtonJustReleasedContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsSecondaryButtonJustReleasedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsSecondaryButtonJustReleasedContext.GDObjectObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsMenuButtonPressedContext = {};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsMenuButtonPressedContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsMenuButtonPressedContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsMenuButtonPressedContext.userFunc0x1641610 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = !!(beh && beh._curButtons && beh._curButtons.menu);
};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsMenuButtonPressedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsMenuButtonPressedContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsMenuButtonPressedContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsMenuButtonPressedContext.userFunc0x1641610(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsMenuButtonPressed = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsMenuButtonPressedContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsMenuButtonPressedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsMenuButtonPressedContext.GDObjectObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsMenuButtonJustPressedContext = {};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsMenuButtonJustPressedContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsMenuButtonJustPressedContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsMenuButtonJustPressedContext.userFunc0x1641678 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = !!(beh && beh._curButtons && beh._curButtons.menu && beh._prevButtons && !beh._prevButtons.menu);
};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsMenuButtonJustPressedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsMenuButtonJustPressedContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsMenuButtonJustPressedContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsMenuButtonJustPressedContext.userFunc0x1641678(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsMenuButtonJustPressed = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsMenuButtonJustPressedContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsMenuButtonJustPressedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsMenuButtonJustPressedContext.GDObjectObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsThumbstickPressedContext = {};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsThumbstickPressedContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsThumbstickPressedContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsThumbstickPressedContext.userFunc0x1641610 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = !!(beh && beh._curButtons && beh._curButtons.thumbstick);
};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsThumbstickPressedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsThumbstickPressedContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsThumbstickPressedContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsThumbstickPressedContext.userFunc0x1641610(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsThumbstickPressed = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsThumbstickPressedContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsThumbstickPressedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsThumbstickPressedContext.GDObjectObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsThumbstickJustPressedContext = {};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsThumbstickJustPressedContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsThumbstickJustPressedContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsThumbstickJustPressedContext.userFunc0x1641678 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = !!(beh && beh._curButtons && beh._curButtons.thumbstick && beh._prevButtons && !beh._prevButtons.thumbstick);
};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsThumbstickJustPressedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsThumbstickJustPressedContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsThumbstickJustPressedContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsThumbstickJustPressedContext.userFunc0x1641678(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsThumbstickJustPressed = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsThumbstickJustPressedContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsThumbstickJustPressedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsThumbstickJustPressedContext.GDObjectObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsThumbstickJustReleasedContext = {};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsThumbstickJustReleasedContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsThumbstickJustReleasedContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsThumbstickJustReleasedContext.userFunc0x1641678 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = !!(beh && beh._curButtons && !beh._curButtons.thumbstick && beh._prevButtons && beh._prevButtons.thumbstick);
};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsThumbstickJustReleasedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsThumbstickJustReleasedContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsThumbstickJustReleasedContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsThumbstickJustReleasedContext.userFunc0x1641678(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsThumbstickJustReleased = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsThumbstickJustReleasedContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsThumbstickJustReleasedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsThumbstickJustReleasedContext.GDObjectObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR__VrController.VrController.prototype.JoyXContext = {};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.JoyXContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrController.VrController.prototype.JoyXContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrController.VrController.prototype.JoyXContext.userFunc0x16414f8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh ? (beh._joyX || 0) : 0;
};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.JoyXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrController.VrController.prototype.JoyXContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrController.VrController.prototype.JoyXContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrController.VrController.prototype.JoyXContext.userFunc0x16414f8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrController.VrController.prototype.JoyX = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrController.VrController.prototype.JoyXContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrController.VrController.prototype.JoyXContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrController.VrController.prototype.JoyXContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR__VrController.VrController.prototype.JoyYContext = {};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.JoyYContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrController.VrController.prototype.JoyYContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrController.VrController.prototype.JoyYContext.userFunc0x16414f8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh ? (beh._joyY || 0) : 0;
};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.JoyYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrController.VrController.prototype.JoyYContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrController.VrController.prototype.JoyYContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrController.VrController.prototype.JoyYContext.userFunc0x16414f8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrController.VrController.prototype.JoyY = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrController.VrController.prototype.JoyYContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrController.VrController.prototype.JoyYContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrController.VrController.prototype.JoyYContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR__VrController.VrController.prototype.TriggerValueContext = {};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.TriggerValueContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrController.VrController.prototype.TriggerValueContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrController.VrController.prototype.TriggerValueContext.userFunc0x16415a8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh ? (beh._triggerValue || 0) : 0;
};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.TriggerValueContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrController.VrController.prototype.TriggerValueContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrController.VrController.prototype.TriggerValueContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrController.VrController.prototype.TriggerValueContext.userFunc0x16415a8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrController.VrController.prototype.TriggerValue = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrController.VrController.prototype.TriggerValueContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrController.VrController.prototype.TriggerValueContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrController.VrController.prototype.TriggerValueContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR__VrController.VrController.prototype.GripValueContext = {};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.GripValueContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrController.VrController.prototype.GripValueContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrController.VrController.prototype.GripValueContext.userFunc0x1641550 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh ? (beh._gripValue || 0) : 0;
};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.GripValueContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrController.VrController.prototype.GripValueContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrController.VrController.prototype.GripValueContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrController.VrController.prototype.GripValueContext.userFunc0x1641550(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrController.VrController.prototype.GripValue = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrController.VrController.prototype.GripValueContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrController.VrController.prototype.GripValueContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrController.VrController.prototype.GripValueContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR__VrController.VrController.prototype.VelocityXContext = {};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.VelocityXContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrController.VrController.prototype.VelocityXContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrController.VrController.prototype.VelocityXContext.userFunc0x1641550 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh ? (beh._velX || 0) : 0;
};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.VelocityXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrController.VrController.prototype.VelocityXContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrController.VrController.prototype.VelocityXContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrController.VrController.prototype.VelocityXContext.userFunc0x1641550(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrController.VrController.prototype.VelocityX = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrController.VrController.prototype.VelocityXContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrController.VrController.prototype.VelocityXContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrController.VrController.prototype.VelocityXContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR__VrController.VrController.prototype.VelocityYContext = {};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.VelocityYContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrController.VrController.prototype.VelocityYContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrController.VrController.prototype.VelocityYContext.userFunc0x1641550 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh ? (beh._velY || 0) : 0;
};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.VelocityYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrController.VrController.prototype.VelocityYContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrController.VrController.prototype.VelocityYContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrController.VrController.prototype.VelocityYContext.userFunc0x1641550(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrController.VrController.prototype.VelocityY = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrController.VrController.prototype.VelocityYContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrController.VrController.prototype.VelocityYContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrController.VrController.prototype.VelocityYContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR__VrController.VrController.prototype.VelocityZContext = {};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.VelocityZContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrController.VrController.prototype.VelocityZContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrController.VrController.prototype.VelocityZContext.userFunc0x1641550 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh ? (beh._velZ || 0) : 0;
};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.VelocityZContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrController.VrController.prototype.VelocityZContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrController.VrController.prototype.VelocityZContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrController.VrController.prototype.VelocityZContext.userFunc0x1641550(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrController.VrController.prototype.VelocityZ = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrController.VrController.prototype.VelocityZContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrController.VrController.prototype.VelocityZContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrController.VrController.prototype.VelocityZContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR__VrController.VrController.prototype.AngularVelocityXContext = {};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.AngularVelocityXContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrController.VrController.prototype.AngularVelocityXContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrController.VrController.prototype.AngularVelocityXContext.userFunc0x16415d8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh ? (beh._angVelX || 0) : 0;
};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.AngularVelocityXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrController.VrController.prototype.AngularVelocityXContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrController.VrController.prototype.AngularVelocityXContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrController.VrController.prototype.AngularVelocityXContext.userFunc0x16415d8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrController.VrController.prototype.AngularVelocityX = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrController.VrController.prototype.AngularVelocityXContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrController.VrController.prototype.AngularVelocityXContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrController.VrController.prototype.AngularVelocityXContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR__VrController.VrController.prototype.AngularVelocityYContext = {};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.AngularVelocityYContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrController.VrController.prototype.AngularVelocityYContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrController.VrController.prototype.AngularVelocityYContext.userFunc0x16415d8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh ? (beh._angVelY || 0) : 0;
};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.AngularVelocityYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrController.VrController.prototype.AngularVelocityYContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrController.VrController.prototype.AngularVelocityYContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrController.VrController.prototype.AngularVelocityYContext.userFunc0x16415d8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrController.VrController.prototype.AngularVelocityY = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrController.VrController.prototype.AngularVelocityYContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrController.VrController.prototype.AngularVelocityYContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrController.VrController.prototype.AngularVelocityYContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR__VrController.VrController.prototype.AngularVelocityZContext = {};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.AngularVelocityZContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrController.VrController.prototype.AngularVelocityZContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrController.VrController.prototype.AngularVelocityZContext.userFunc0x16415d8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh ? (beh._angVelZ || 0) : 0;
};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.AngularVelocityZContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrController.VrController.prototype.AngularVelocityZContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrController.VrController.prototype.AngularVelocityZContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrController.VrController.prototype.AngularVelocityZContext.userFunc0x16415d8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrController.VrController.prototype.AngularVelocityZ = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrController.VrController.prototype.AngularVelocityZContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrController.VrController.prototype.AngularVelocityZContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrController.VrController.prototype.AngularVelocityZContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR__VrController.VrController.prototype.SwingSpeedContext = {};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.SwingSpeedContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrController.VrController.prototype.SwingSpeedContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrController.VrController.prototype.SwingSpeedContext.userFunc0x1641550 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
if (!beh) { eventsFunctionContext.returnValue = 0; } else {
    var x = beh._angVelX || 0, y = beh._angVelY || 0, z = beh._angVelZ || 0;
    eventsFunctionContext.returnValue = Math.sqrt(x*x + y*y + z*z);
}
};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.SwingSpeedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrController.VrController.prototype.SwingSpeedContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrController.VrController.prototype.SwingSpeedContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrController.VrController.prototype.SwingSpeedContext.userFunc0x1641550(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrController.VrController.prototype.SwingSpeed = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrController.VrController.prototype.SwingSpeedContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrController.VrController.prototype.SwingSpeedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrController.VrController.prototype.SwingSpeedContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR__VrController.VrController.prototype.StabSpeedContext = {};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.StabSpeedContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrController.VrController.prototype.StabSpeedContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrController.VrController.prototype.StabSpeedContext.userFunc0x1641550 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
if (!beh) { eventsFunctionContext.returnValue = 0; } else {
    var x = beh._velX || 0, y = beh._velY || 0, z = beh._velZ || 0;
    eventsFunctionContext.returnValue = Math.sqrt(x*x + y*y + z*z);
}
};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.StabSpeedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrController.VrController.prototype.StabSpeedContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrController.VrController.prototype.StabSpeedContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrController.VrController.prototype.StabSpeedContext.userFunc0x1641550(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrController.VrController.prototype.StabSpeed = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrController.VrController.prototype.StabSpeedContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrController.VrController.prototype.StabSpeedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrController.VrController.prototype.StabSpeedContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR__VrController.VrController.prototype.RotationXContext = {};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.RotationXContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrController.VrController.prototype.RotationXContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrController.VrController.prototype.RotationXContext.userFunc0x1641550 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh ? (beh._rotX || 0) : 0;
};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.RotationXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrController.VrController.prototype.RotationXContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrController.VrController.prototype.RotationXContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrController.VrController.prototype.RotationXContext.userFunc0x1641550(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrController.VrController.prototype.RotationX = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrController.VrController.prototype.RotationXContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrController.VrController.prototype.RotationXContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrController.VrController.prototype.RotationXContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR__VrController.VrController.prototype.RotationYContext = {};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.RotationYContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrController.VrController.prototype.RotationYContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrController.VrController.prototype.RotationYContext.userFunc0x1641550 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh ? (beh._rotY || 0) : 0;
};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.RotationYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrController.VrController.prototype.RotationYContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrController.VrController.prototype.RotationYContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrController.VrController.prototype.RotationYContext.userFunc0x1641550(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrController.VrController.prototype.RotationY = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrController.VrController.prototype.RotationYContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrController.VrController.prototype.RotationYContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrController.VrController.prototype.RotationYContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR__VrController.VrController.prototype.RotationZContext = {};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.RotationZContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrController.VrController.prototype.RotationZContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrController.VrController.prototype.RotationZContext.userFunc0x1641550 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh ? (beh._rotZ || 0) : 0;
};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.RotationZContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrController.VrController.prototype.RotationZContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrController.VrController.prototype.RotationZContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrController.VrController.prototype.RotationZContext.userFunc0x1641550(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrController.VrController.prototype.RotationZ = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrController.VrController.prototype.RotationZContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrController.VrController.prototype.RotationZContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrController.VrController.prototype.RotationZContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR__VrController.VrController.prototype.RayDirXContext = {};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.RayDirXContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrController.VrController.prototype.RayDirXContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrController.VrController.prototype.RayDirXContext.userFunc0x1641550 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh ? (beh._rayDirX || 0) : 0;
};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.RayDirXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrController.VrController.prototype.RayDirXContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrController.VrController.prototype.RayDirXContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrController.VrController.prototype.RayDirXContext.userFunc0x1641550(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrController.VrController.prototype.RayDirX = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrController.VrController.prototype.RayDirXContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrController.VrController.prototype.RayDirXContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrController.VrController.prototype.RayDirXContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR__VrController.VrController.prototype.RayDirYContext = {};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.RayDirYContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrController.VrController.prototype.RayDirYContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrController.VrController.prototype.RayDirYContext.userFunc0x1641550 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh ? (beh._rayDirY || 0) : 0;
};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.RayDirYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrController.VrController.prototype.RayDirYContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrController.VrController.prototype.RayDirYContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrController.VrController.prototype.RayDirYContext.userFunc0x1641550(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrController.VrController.prototype.RayDirY = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrController.VrController.prototype.RayDirYContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrController.VrController.prototype.RayDirYContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrController.VrController.prototype.RayDirYContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR__VrController.VrController.prototype.RayDirZContext = {};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.RayDirZContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrController.VrController.prototype.RayDirZContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrController.VrController.prototype.RayDirZContext.userFunc0x1641550 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh ? (beh._rayDirZ || 0) : 0;
};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.RayDirZContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrController.VrController.prototype.RayDirZContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrController.VrController.prototype.RayDirZContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrController.VrController.prototype.RayDirZContext.userFunc0x1641550(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrController.VrController.prototype.RayDirZ = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrController.VrController.prototype.RayDirZContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrController.VrController.prototype.RayDirZContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrController.VrController.prototype.RayDirZContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR__VrController.VrController.prototype.EnableMagneticGrabContext = {};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.EnableMagneticGrabContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrController.VrController.prototype.EnableMagneticGrabContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrController.VrController.prototype.EnableMagneticGrabContext.userFunc0x16415d8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh) { if (beh._setMagneticGrabEnabled) beh._setMagneticGrabEnabled('true'); beh._magneticGrabActive = true; }
}
};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.EnableMagneticGrabContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrController.VrController.prototype.EnableMagneticGrabContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrController.VrController.prototype.EnableMagneticGrabContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrController.VrController.prototype.EnableMagneticGrabContext.userFunc0x16415d8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrController.VrController.prototype.EnableMagneticGrab = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrController.VrController.prototype.EnableMagneticGrabContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrController.VrController.prototype.EnableMagneticGrabContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrController.VrController.prototype.EnableMagneticGrabContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrController.VrController.prototype.DisableMagneticGrabContext = {};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.DisableMagneticGrabContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrController.VrController.prototype.DisableMagneticGrabContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrController.VrController.prototype.DisableMagneticGrabContext.userFunc0x16415d8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh) { if (beh._setMagneticGrabEnabled) beh._setMagneticGrabEnabled('false'); beh._magneticGrabActive = false; }
}
};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.DisableMagneticGrabContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrController.VrController.prototype.DisableMagneticGrabContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrController.VrController.prototype.DisableMagneticGrabContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrController.VrController.prototype.DisableMagneticGrabContext.userFunc0x16415d8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrController.VrController.prototype.DisableMagneticGrab = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrController.VrController.prototype.DisableMagneticGrabContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrController.VrController.prototype.DisableMagneticGrabContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrController.VrController.prototype.DisableMagneticGrabContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrController.VrController.prototype.EnableLaserPointerContext = {};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.EnableLaserPointerContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrController.VrController.prototype.EnableLaserPointerContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrController.VrController.prototype.EnableLaserPointerContext.userFunc0x16415d8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh && beh._setLaserEnabled) beh._setLaserEnabled('true');
}
};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.EnableLaserPointerContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrController.VrController.prototype.EnableLaserPointerContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrController.VrController.prototype.EnableLaserPointerContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrController.VrController.prototype.EnableLaserPointerContext.userFunc0x16415d8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrController.VrController.prototype.EnableLaserPointer = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrController.VrController.prototype.EnableLaserPointerContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrController.VrController.prototype.EnableLaserPointerContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrController.VrController.prototype.EnableLaserPointerContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrController.VrController.prototype.DisableLaserPointerContext = {};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.DisableLaserPointerContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrController.VrController.prototype.DisableLaserPointerContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrController.VrController.prototype.DisableLaserPointerContext.userFunc0x16415d8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh && beh._setLaserEnabled) beh._setLaserEnabled('false');
}
};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.DisableLaserPointerContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrController.VrController.prototype.DisableLaserPointerContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrController.VrController.prototype.DisableLaserPointerContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrController.VrController.prototype.DisableLaserPointerContext.userFunc0x16415d8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrController.VrController.prototype.DisableLaserPointer = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrController.VrController.prototype.DisableLaserPointerContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrController.VrController.prototype.DisableLaserPointerContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrController.VrController.prototype.DisableLaserPointerContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetLaserColorContext = {};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetLaserColorContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetLaserColorContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetLaserColorContext.userFunc0x1641628 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var s = String(eventsFunctionContext.getArgument('Color') || '').trim();
var r = 255, g = 0, b = 0;
var parts = s.split(';');
if (parts.length >= 3) {
    r = Math.max(0, Math.min(255, Math.round(Number(parts[0]))));
    g = Math.max(0, Math.min(255, Math.round(Number(parts[1]))));
    b = Math.max(0, Math.min(255, Math.round(Number(parts[2]))));
}
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (!beh) continue;
    if (beh._setLaserColor) beh._setLaserColor(r + ';' + g + ';' + b);
}
};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetLaserColorContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetLaserColorContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetLaserColorContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetLaserColorContext.userFunc0x1641628(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetLaserColor = function(Color, parentEventsFunctionContext) {

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
if (argName === "Color") return Color;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetLaserColorContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetLaserColorContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetLaserColorContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserColorContext = {};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserColorContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserColorContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserColorContext.userFunc0x1641608 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh && beh._getLaserColor ? String(beh._getLaserColor()) : '255;0;0';
};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserColorContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserColorContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserColorContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserColorContext.userFunc0x1641608(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserColor = function(Color, parentEventsFunctionContext) {

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
if (argName === "Color") return Color;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserColorContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserColorContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserColorContext.GDObjectObjects1.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetLaserLengthContext = {};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetLaserLengthContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetLaserLengthContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetLaserLengthContext.userFunc0x1641628 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var len = Number(eventsFunctionContext.getArgument('Length'));
if (!(len > 0)) len = 5000;
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (!beh) continue;
    if (beh._setLaserLength) beh._setLaserLength(String(len));
    if (beh._laserLine) {
        beh._laserLine.geometry.dispose();
        beh._laserLine.geometry = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, -len)]);
        beh._laserHitDistance = -1;
    }
}
};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetLaserLengthContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetLaserLengthContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetLaserLengthContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetLaserLengthContext.userFunc0x1641628(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetLaserLength = function(Length, parentEventsFunctionContext) {

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
if (argName === "Length") return Length;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetLaserLengthContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetLaserLengthContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetLaserLengthContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserLengthContext = {};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserLengthContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserLengthContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserLengthContext.userFunc0x16415a8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh && beh._getLaserLength ? Number(beh._getLaserLength()) || 5000 : 5000;
};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserLengthContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserLengthContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserLengthContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserLengthContext.userFunc0x16415a8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserLength = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserLengthContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserLengthContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserLengthContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetTargetingRayLengthContext = {};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetTargetingRayLengthContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetTargetingRayLengthContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetTargetingRayLengthContext.userFunc0x1641658 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var len = Number(eventsFunctionContext.getArgument('Length'));
if (len < 0) len = 0;
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (!beh) continue;
    if (beh._setTargetingRayLength) beh._setTargetingRayLength(String(len));
}
};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetTargetingRayLengthContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetTargetingRayLengthContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetTargetingRayLengthContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetTargetingRayLengthContext.userFunc0x1641658(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetTargetingRayLength = function(Length, parentEventsFunctionContext) {

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
if (argName === "Length") return Length;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetTargetingRayLengthContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetTargetingRayLengthContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetTargetingRayLengthContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrController.VrController.prototype.TargetingRayLengthContext = {};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.TargetingRayLengthContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrController.VrController.prototype.TargetingRayLengthContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrController.VrController.prototype.TargetingRayLengthContext.userFunc0x16415d8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh && beh._getTargetingRayLength ? Number(beh._getTargetingRayLength()) || 0 : 0;
};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.TargetingRayLengthContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrController.VrController.prototype.TargetingRayLengthContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrController.VrController.prototype.TargetingRayLengthContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrController.VrController.prototype.TargetingRayLengthContext.userFunc0x16415d8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrController.VrController.prototype.TargetingRayLength = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrController.VrController.prototype.TargetingRayLengthContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrController.VrController.prototype.TargetingRayLengthContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrController.VrController.prototype.TargetingRayLengthContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetLaserPitchOffsetContext = {};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetLaserPitchOffsetContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetLaserPitchOffsetContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetLaserPitchOffsetContext.userFunc0x1641658 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var pitch = Number(eventsFunctionContext.getArgument('Pitch'));
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (!beh) continue;
    if (beh._setLaserPitchOffset) beh._setLaserPitchOffset(String(pitch));
}
};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetLaserPitchOffsetContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetLaserPitchOffsetContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetLaserPitchOffsetContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetLaserPitchOffsetContext.userFunc0x1641658(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetLaserPitchOffset = function(Pitch, parentEventsFunctionContext) {

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
if (argName === "Pitch") return Pitch;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetLaserPitchOffsetContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetLaserPitchOffsetContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetLaserPitchOffsetContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserPitchOffsetContext = {};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserPitchOffsetContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserPitchOffsetContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserPitchOffsetContext.userFunc0x16415d8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh && beh._getLaserPitchOffset ? Number(beh._getLaserPitchOffset()) || 0 : 0;
};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserPitchOffsetContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserPitchOffsetContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserPitchOffsetContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserPitchOffsetContext.userFunc0x16415d8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserPitchOffset = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserPitchOffsetContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserPitchOffsetContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserPitchOffsetContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR__VrController.VrController.prototype.EnableLaserStopAtGeometryContext = {};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.EnableLaserStopAtGeometryContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrController.VrController.prototype.EnableLaserStopAtGeometryContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrController.VrController.prototype.EnableLaserStopAtGeometryContext.userFunc0x1641640 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh && beh._setLaserStopAtGeometry) beh._setLaserStopAtGeometry('true');
}
};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.EnableLaserStopAtGeometryContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrController.VrController.prototype.EnableLaserStopAtGeometryContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrController.VrController.prototype.EnableLaserStopAtGeometryContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrController.VrController.prototype.EnableLaserStopAtGeometryContext.userFunc0x1641640(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrController.VrController.prototype.EnableLaserStopAtGeometry = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrController.VrController.prototype.EnableLaserStopAtGeometryContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrController.VrController.prototype.EnableLaserStopAtGeometryContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrController.VrController.prototype.EnableLaserStopAtGeometryContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrController.VrController.prototype.DisableLaserStopAtGeometryContext = {};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.DisableLaserStopAtGeometryContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrController.VrController.prototype.DisableLaserStopAtGeometryContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrController.VrController.prototype.DisableLaserStopAtGeometryContext.userFunc0x1641640 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh && beh._setLaserStopAtGeometry) beh._setLaserStopAtGeometry('false');
}
};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.DisableLaserStopAtGeometryContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrController.VrController.prototype.DisableLaserStopAtGeometryContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrController.VrController.prototype.DisableLaserStopAtGeometryContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrController.VrController.prototype.DisableLaserStopAtGeometryContext.userFunc0x1641640(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrController.VrController.prototype.DisableLaserStopAtGeometry = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrController.VrController.prototype.DisableLaserStopAtGeometryContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrController.VrController.prototype.DisableLaserStopAtGeometryContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrController.VrController.prototype.DisableLaserStopAtGeometryContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserStopAtGeometryContext = {};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserStopAtGeometryContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserStopAtGeometryContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserStopAtGeometryContext.userFunc0x16415d8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
var v = beh && beh._getLaserStopAtGeometry ? beh._getLaserStopAtGeometry() : 'true';
eventsFunctionContext.returnValue = (v === 'true' || v === true) ? 1 : 0;
};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserStopAtGeometryContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserStopAtGeometryContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserStopAtGeometryContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserStopAtGeometryContext.userFunc0x16415d8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserStopAtGeometry = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserStopAtGeometryContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserStopAtGeometryContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserStopAtGeometryContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR__VrController.VrController.prototype.EnableLaserHitMarkerContext = {};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.EnableLaserHitMarkerContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrController.VrController.prototype.EnableLaserHitMarkerContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrController.VrController.prototype.EnableLaserHitMarkerContext.userFunc0x16415d8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh && beh._setLaserHitMarkerEnabled) beh._setLaserHitMarkerEnabled('true');
}
};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.EnableLaserHitMarkerContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrController.VrController.prototype.EnableLaserHitMarkerContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrController.VrController.prototype.EnableLaserHitMarkerContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrController.VrController.prototype.EnableLaserHitMarkerContext.userFunc0x16415d8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrController.VrController.prototype.EnableLaserHitMarker = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrController.VrController.prototype.EnableLaserHitMarkerContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrController.VrController.prototype.EnableLaserHitMarkerContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrController.VrController.prototype.EnableLaserHitMarkerContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrController.VrController.prototype.DisableLaserHitMarkerContext = {};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.DisableLaserHitMarkerContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrController.VrController.prototype.DisableLaserHitMarkerContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrController.VrController.prototype.DisableLaserHitMarkerContext.userFunc0x16415d8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh && beh._setLaserHitMarkerEnabled) beh._setLaserHitMarkerEnabled('false');
}
};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.DisableLaserHitMarkerContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrController.VrController.prototype.DisableLaserHitMarkerContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrController.VrController.prototype.DisableLaserHitMarkerContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrController.VrController.prototype.DisableLaserHitMarkerContext.userFunc0x16415d8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrController.VrController.prototype.DisableLaserHitMarker = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrController.VrController.prototype.DisableLaserHitMarkerContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrController.VrController.prototype.DisableLaserHitMarkerContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrController.VrController.prototype.DisableLaserHitMarkerContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserHitMarkerEnabledContext = {};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserHitMarkerEnabledContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserHitMarkerEnabledContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserHitMarkerEnabledContext.userFunc0x16415d8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
var v = beh && beh._getLaserHitMarkerEnabled ? beh._getLaserHitMarkerEnabled() : 'true';
eventsFunctionContext.returnValue = (v === 'true' || v === true) ? 1 : 0;
};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserHitMarkerEnabledContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserHitMarkerEnabledContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserHitMarkerEnabledContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserHitMarkerEnabledContext.userFunc0x16415d8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserHitMarkerEnabled = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserHitMarkerEnabledContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserHitMarkerEnabledContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserHitMarkerEnabledContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetLaserHitMarkerSizeContext = {};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetLaserHitMarkerSizeContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetLaserHitMarkerSizeContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetLaserHitMarkerSizeContext.userFunc0x1641658 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var size = Number(eventsFunctionContext.getArgument('Size'));
if (!(size > 0)) size = 5;
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (!beh) continue;
    if (beh._setLaserHitMarkerSize) beh._setLaserHitMarkerSize(String(size));
    if (beh._laserHitMarker && beh._laserHitMarker._builtRadius !== size) {
        beh._laserHitMarker.geometry.dispose();
        beh._laserHitMarker.geometry = new THREE.SphereGeometry(size, 12, 12);
        beh._laserHitMarker._builtRadius = size;
    }
}
};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetLaserHitMarkerSizeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetLaserHitMarkerSizeContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetLaserHitMarkerSizeContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetLaserHitMarkerSizeContext.userFunc0x1641658(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetLaserHitMarkerSize = function(Size, parentEventsFunctionContext) {

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
if (argName === "Size") return Size;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetLaserHitMarkerSizeContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetLaserHitMarkerSizeContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetLaserHitMarkerSizeContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserHitMarkerSizeContext = {};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserHitMarkerSizeContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserHitMarkerSizeContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserHitMarkerSizeContext.userFunc0x16415d8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh && beh._getLaserHitMarkerSize ? Number(beh._getLaserHitMarkerSize()) || 5 : 5;
};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserHitMarkerSizeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserHitMarkerSizeContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserHitMarkerSizeContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserHitMarkerSizeContext.userFunc0x16415d8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserHitMarkerSize = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserHitMarkerSizeContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserHitMarkerSizeContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserHitMarkerSizeContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsLaserHittingGeometryContext = {};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsLaserHittingGeometryContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsLaserHittingGeometryContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsLaserHittingGeometryContext.userFunc0x1641610 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = !!(beh && beh._laserHitDistance > 0);
};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsLaserHittingGeometryContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsLaserHittingGeometryContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsLaserHittingGeometryContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsLaserHittingGeometryContext.userFunc0x1641610(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsLaserHittingGeometry = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsLaserHittingGeometryContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsLaserHittingGeometryContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsLaserHittingGeometryContext.GDObjectObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserHitDistanceContext = {};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserHitDistanceContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserHitDistanceContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserHitDistanceContext.userFunc0x16415d8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = (beh && typeof beh._laserHitDistance === 'number') ? beh._laserHitDistance : -1;
};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserHitDistanceContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserHitDistanceContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserHitDistanceContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserHitDistanceContext.userFunc0x16415d8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserHitDistance = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserHitDistanceContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserHitDistanceContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserHitDistanceContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserHitPointXContext = {};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserHitPointXContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserHitPointXContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserHitPointXContext.userFunc0x16415a8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
var hp = beh ? beh._laserHitPointThree : null;
if (hp && gdjs._webxrVrAnchor) {
    var anchor = gdjs._webxrVrAnchor;
    eventsFunctionContext.returnValue = anchor.x + (hp.x - anchor.threeX);
} else {
    eventsFunctionContext.returnValue = 0;
}
};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserHitPointXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserHitPointXContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserHitPointXContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserHitPointXContext.userFunc0x16415a8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserHitPointX = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserHitPointXContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserHitPointXContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserHitPointXContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserHitPointYContext = {};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserHitPointYContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserHitPointYContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserHitPointYContext.userFunc0x16415a8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
var hp = beh ? beh._laserHitPointThree : null;
if (hp && gdjs._webxrVrAnchor) {
    var anchor = gdjs._webxrVrAnchor;
    eventsFunctionContext.returnValue = anchor.y - (hp.y - anchor.threeY);
} else {
    eventsFunctionContext.returnValue = 0;
}
};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserHitPointYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserHitPointYContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserHitPointYContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserHitPointYContext.userFunc0x16415a8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserHitPointY = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserHitPointYContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserHitPointYContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserHitPointYContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserHitPointZContext = {};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserHitPointZContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserHitPointZContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserHitPointZContext.userFunc0x16415a8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
var hp = beh ? beh._laserHitPointThree : null;
if (hp && gdjs._webxrVrAnchor) {
    var anchor = gdjs._webxrVrAnchor;
    eventsFunctionContext.returnValue = anchor.z + (hp.z - anchor.threeZ);
} else {
    eventsFunctionContext.returnValue = 0;
}
};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserHitPointZContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserHitPointZContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserHitPointZContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserHitPointZContext.userFunc0x16415a8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserHitPointZ = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserHitPointZContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserHitPointZContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserHitPointZContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsMagneticGrabActiveContext = {};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsMagneticGrabActiveContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsMagneticGrabActiveContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsMagneticGrabActiveContext.userFunc0x1641610 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = !!(beh && beh._magneticGrabActive);
};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsMagneticGrabActiveContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsMagneticGrabActiveContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsMagneticGrabActiveContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsMagneticGrabActiveContext.userFunc0x1641610(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsMagneticGrabActive = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsMagneticGrabActiveContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsMagneticGrabActiveContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrController.VrController.prototype.IsMagneticGrabActiveContext.GDObjectObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR__VrController.VrController.prototype.VibrateJoystickContext = {};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.VibrateJoystickContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrController.VrController.prototype.VibrateJoystickContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrController.VrController.prototype.VibrateJoystickContext.userFunc0x1641640 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var tr = runtimeScene.getGame().getRenderer().getThreeRenderer();
if (!tr || !tr.xr || !tr.xr.isPresenting) return;
var sess = tr.xr.getSession ? tr.xr.getSession() : null;
if (!sess || !sess.inputSources) return;
var value = Number(eventsFunctionContext.getArgument('Value') || 0);
var duration = Number(eventsFunctionContext.getArgument('Duration') || 0);
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (!beh) continue;
    var hand = beh._getHandedness();
    for (var si = 0; si < sess.inputSources.length; si++) {
        var src = sess.inputSources[si];
        if (src.handedness === hand && src.gamepad &&
            src.gamepad.hapticActuators && src.gamepad.hapticActuators.length > 0) {
            src.gamepad.hapticActuators[0].pulse(value, duration);
            break;
        }
    }
}
};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.VibrateJoystickContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrController.VrController.prototype.VibrateJoystickContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrController.VrController.prototype.VibrateJoystickContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrController.VrController.prototype.VibrateJoystickContext.userFunc0x1641640(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrController.VrController.prototype.VibrateJoystick = function(Value, Duration, parentEventsFunctionContext) {

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
if (argName === "Duration") return Duration;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebXR__VrController.VrController.prototype.VibrateJoystickContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrController.VrController.prototype.VibrateJoystickContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrController.VrController.prototype.VibrateJoystickContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetMagneticGrabLengthContext = {};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetMagneticGrabLengthContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetMagneticGrabLengthContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetMagneticGrabLengthContext.userFunc0x1641658 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var len = Number(eventsFunctionContext.getArgument('Length'));
if (!(len > 0)) len = 1000;
var controllers = gdjs._webxrVrControllers || {};
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (!beh) continue;
    if (beh._setMagneticGrabLength) beh._setMagneticGrabLength(String(len));
    var hand = beh._getHandedness ? beh._getHandedness() : null;
    var entry = hand ? controllers[hand] : null;
    if (entry) entry._magneticGrabLength = len;
}
};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetMagneticGrabLengthContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetMagneticGrabLengthContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetMagneticGrabLengthContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetMagneticGrabLengthContext.userFunc0x1641658(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetMagneticGrabLength = function(Length, parentEventsFunctionContext) {

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
if (argName === "Length") return Length;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetMagneticGrabLengthContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetMagneticGrabLengthContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetMagneticGrabLengthContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrController.VrController.prototype.MagneticGrabLengthContext = {};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.MagneticGrabLengthContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrController.VrController.prototype.MagneticGrabLengthContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrController.VrController.prototype.MagneticGrabLengthContext.userFunc0x16415d8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh && beh._getMagneticGrabLength ? Number(beh._getMagneticGrabLength()) || 1000 : 1000;
};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.MagneticGrabLengthContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrController.VrController.prototype.MagneticGrabLengthContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrController.VrController.prototype.MagneticGrabLengthContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrController.VrController.prototype.MagneticGrabLengthContext.userFunc0x16415d8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrController.VrController.prototype.MagneticGrabLength = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrController.VrController.prototype.MagneticGrabLengthContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrController.VrController.prototype.MagneticGrabLengthContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrController.VrController.prototype.MagneticGrabLengthContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetMagneticGrabErrorToleranceContext = {};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetMagneticGrabErrorToleranceContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetMagneticGrabErrorToleranceContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetMagneticGrabErrorToleranceContext.userFunc0x16416c0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var tol = Number(eventsFunctionContext.getArgument('Tolerance'));
if (tol < 0) tol = 0;
var controllers = gdjs._webxrVrControllers || {};
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (!beh) continue;
    if (beh._setMagneticGrabErrorTolerance) beh._setMagneticGrabErrorTolerance(String(tol));
    var hand = beh._getHandedness ? beh._getHandedness() : null;
    var entry = hand ? controllers[hand] : null;
    if (entry) entry._magneticGrabErrorTolerance = tol;
}
};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetMagneticGrabErrorToleranceContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetMagneticGrabErrorToleranceContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetMagneticGrabErrorToleranceContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetMagneticGrabErrorToleranceContext.userFunc0x16416c0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetMagneticGrabErrorTolerance = function(Tolerance, parentEventsFunctionContext) {

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
if (argName === "Tolerance") return Tolerance;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetMagneticGrabErrorToleranceContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetMagneticGrabErrorToleranceContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetMagneticGrabErrorToleranceContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrController.VrController.prototype.MagneticGrabErrorToleranceContext = {};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.MagneticGrabErrorToleranceContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrController.VrController.prototype.MagneticGrabErrorToleranceContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrController.VrController.prototype.MagneticGrabErrorToleranceContext.userFunc0x1641640 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh && beh._getMagneticGrabErrorTolerance ? Number(beh._getMagneticGrabErrorTolerance()) || 0 : 0;
};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.MagneticGrabErrorToleranceContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrController.VrController.prototype.MagneticGrabErrorToleranceContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrController.VrController.prototype.MagneticGrabErrorToleranceContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrController.VrController.prototype.MagneticGrabErrorToleranceContext.userFunc0x1641640(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrController.VrController.prototype.MagneticGrabErrorTolerance = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrController.VrController.prototype.MagneticGrabErrorToleranceContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrController.VrController.prototype.MagneticGrabErrorToleranceContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrController.VrController.prototype.MagneticGrabErrorToleranceContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR__VrController.VrController.prototype.HandednessContext = {};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.HandednessContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrController.VrController.prototype.HandednessContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrController.VrController.prototype.HandednessContext.userFunc0x1641588 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh && beh._getHandedness ? String(beh._getHandedness()) : 'right';
};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.HandednessContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrController.VrController.prototype.HandednessContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrController.VrController.prototype.HandednessContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrController.VrController.prototype.HandednessContext.userFunc0x1641588(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrController.VrController.prototype.Handedness = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrController.VrController.prototype.HandednessContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrController.VrController.prototype.HandednessContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrController.VrController.prototype.HandednessContext.GDObjectObjects1.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetOffsetXContext = {};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetOffsetXContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetOffsetXContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetOffsetXContext.userFunc0x16415d0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var v = Number(eventsFunctionContext.getArgument("Value"));
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh && beh._setOffsetX) beh._setOffsetX(String(v));
}
};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetOffsetXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetOffsetXContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetOffsetXContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetOffsetXContext.userFunc0x16415d0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetOffsetX = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetOffsetXContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetOffsetXContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetOffsetXContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrController.VrController.prototype.OffsetXContext = {};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.OffsetXContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrController.VrController.prototype.OffsetXContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrController.VrController.prototype.OffsetXContext.userFunc0x1641550 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh && beh._getOffsetX ? Number(beh._getOffsetX()) : 0;
};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.OffsetXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrController.VrController.prototype.OffsetXContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrController.VrController.prototype.OffsetXContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrController.VrController.prototype.OffsetXContext.userFunc0x1641550(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrController.VrController.prototype.OffsetX = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrController.VrController.prototype.OffsetXContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrController.VrController.prototype.OffsetXContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrController.VrController.prototype.OffsetXContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetOffsetYContext = {};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetOffsetYContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetOffsetYContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetOffsetYContext.userFunc0x16415d0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var v = Number(eventsFunctionContext.getArgument("Value"));
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh && beh._setOffsetY) beh._setOffsetY(String(v));
}
};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetOffsetYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetOffsetYContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetOffsetYContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetOffsetYContext.userFunc0x16415d0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetOffsetY = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetOffsetYContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetOffsetYContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetOffsetYContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrController.VrController.prototype.OffsetYContext = {};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.OffsetYContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrController.VrController.prototype.OffsetYContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrController.VrController.prototype.OffsetYContext.userFunc0x1641550 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh && beh._getOffsetY ? Number(beh._getOffsetY()) : 0;
};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.OffsetYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrController.VrController.prototype.OffsetYContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrController.VrController.prototype.OffsetYContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrController.VrController.prototype.OffsetYContext.userFunc0x1641550(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrController.VrController.prototype.OffsetY = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrController.VrController.prototype.OffsetYContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrController.VrController.prototype.OffsetYContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrController.VrController.prototype.OffsetYContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetOffsetZContext = {};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetOffsetZContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetOffsetZContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetOffsetZContext.userFunc0x16415d0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var v = Number(eventsFunctionContext.getArgument("Value"));
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh && beh._setOffsetZ) beh._setOffsetZ(String(v));
}
};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetOffsetZContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetOffsetZContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetOffsetZContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetOffsetZContext.userFunc0x16415d0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetOffsetZ = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetOffsetZContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetOffsetZContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetOffsetZContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrController.VrController.prototype.OffsetZContext = {};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.OffsetZContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrController.VrController.prototype.OffsetZContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrController.VrController.prototype.OffsetZContext.userFunc0x1641550 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh && beh._getOffsetZ ? Number(beh._getOffsetZ()) : 0;
};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.OffsetZContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrController.VrController.prototype.OffsetZContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrController.VrController.prototype.OffsetZContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrController.VrController.prototype.OffsetZContext.userFunc0x1641550(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrController.VrController.prototype.OffsetZ = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrController.VrController.prototype.OffsetZContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrController.VrController.prototype.OffsetZContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrController.VrController.prototype.OffsetZContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetRotationOffsetXContext = {};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetRotationOffsetXContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetRotationOffsetXContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetRotationOffsetXContext.userFunc0x1641658 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var v = Number(eventsFunctionContext.getArgument("Value"));
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh && beh._setRotationOffsetX) beh._setRotationOffsetX(String(v));
}
};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetRotationOffsetXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetRotationOffsetXContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetRotationOffsetXContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetRotationOffsetXContext.userFunc0x1641658(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetRotationOffsetX = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetRotationOffsetXContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetRotationOffsetXContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetRotationOffsetXContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrController.VrController.prototype.RotationOffsetXContext = {};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.RotationOffsetXContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrController.VrController.prototype.RotationOffsetXContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrController.VrController.prototype.RotationOffsetXContext.userFunc0x16415a8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh && beh._getRotationOffsetX ? Number(beh._getRotationOffsetX()) : 0;
};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.RotationOffsetXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrController.VrController.prototype.RotationOffsetXContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrController.VrController.prototype.RotationOffsetXContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrController.VrController.prototype.RotationOffsetXContext.userFunc0x16415a8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrController.VrController.prototype.RotationOffsetX = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrController.VrController.prototype.RotationOffsetXContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrController.VrController.prototype.RotationOffsetXContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrController.VrController.prototype.RotationOffsetXContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetRotationOffsetYContext = {};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetRotationOffsetYContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetRotationOffsetYContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetRotationOffsetYContext.userFunc0x1641658 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var v = Number(eventsFunctionContext.getArgument("Value"));
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh && beh._setRotationOffsetY) beh._setRotationOffsetY(String(v));
}
};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetRotationOffsetYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetRotationOffsetYContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetRotationOffsetYContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetRotationOffsetYContext.userFunc0x1641658(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetRotationOffsetY = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetRotationOffsetYContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetRotationOffsetYContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetRotationOffsetYContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrController.VrController.prototype.RotationOffsetYContext = {};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.RotationOffsetYContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrController.VrController.prototype.RotationOffsetYContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrController.VrController.prototype.RotationOffsetYContext.userFunc0x16415a8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh && beh._getRotationOffsetY ? Number(beh._getRotationOffsetY()) : 0;
};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.RotationOffsetYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrController.VrController.prototype.RotationOffsetYContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrController.VrController.prototype.RotationOffsetYContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrController.VrController.prototype.RotationOffsetYContext.userFunc0x16415a8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrController.VrController.prototype.RotationOffsetY = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrController.VrController.prototype.RotationOffsetYContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrController.VrController.prototype.RotationOffsetYContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrController.VrController.prototype.RotationOffsetYContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetRotationOffsetZContext = {};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetRotationOffsetZContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetRotationOffsetZContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetRotationOffsetZContext.userFunc0x1641658 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var v = Number(eventsFunctionContext.getArgument("Value"));
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh && beh._setRotationOffsetZ) beh._setRotationOffsetZ(String(v));
}
};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetRotationOffsetZContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetRotationOffsetZContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetRotationOffsetZContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetRotationOffsetZContext.userFunc0x1641658(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetRotationOffsetZ = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetRotationOffsetZContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetRotationOffsetZContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrController.VrController.prototype.SetRotationOffsetZContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrController.VrController.prototype.RotationOffsetZContext = {};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.RotationOffsetZContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrController.VrController.prototype.RotationOffsetZContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrController.VrController.prototype.RotationOffsetZContext.userFunc0x16415a8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh && beh._getRotationOffsetZ ? Number(beh._getRotationOffsetZ()) : 0;
};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.RotationOffsetZContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrController.VrController.prototype.RotationOffsetZContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrController.VrController.prototype.RotationOffsetZContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrController.VrController.prototype.RotationOffsetZContext.userFunc0x16415a8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrController.VrController.prototype.RotationOffsetZ = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrController.VrController.prototype.RotationOffsetZContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrController.VrController.prototype.RotationOffsetZContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrController.VrController.prototype.RotationOffsetZContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR__VrController.VrController.prototype.CalibrateRotationContext = {};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.CalibrateRotationContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrController.VrController.prototype.CalibrateRotationContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrController.VrController.prototype.CalibrateRotationContext.userFunc0x16415d8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    var deg = gdjs._webxrSolveRotationOffsetDegrees ? gdjs._webxrSolveRotationOffsetDegrees(beh) : null;
    if (!deg) continue;
    if (beh._setRotationOffsetX) beh._setRotationOffsetX(String(deg.x));
    if (beh._setRotationOffsetY) beh._setRotationOffsetY(String(deg.y));
    if (beh._setRotationOffsetZ) beh._setRotationOffsetZ(String(deg.z));
    gdjs._webxrVrDbg('CalibrateRotation', beh._getHandedness ? beh._getHandedness() : '?', 'RotationOffsetX/Y/Z =', deg.x.toFixed(2), deg.y.toFixed(2), deg.z.toFixed(2));
}
};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.CalibrateRotationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrController.VrController.prototype.CalibrateRotationContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrController.VrController.prototype.CalibrateRotationContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrController.VrController.prototype.CalibrateRotationContext.userFunc0x16415d8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrController.VrController.prototype.CalibrateRotation = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrController.VrController.prototype.CalibrateRotationContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrController.VrController.prototype.CalibrateRotationContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrController.VrController.prototype.CalibrateRotationContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrController.VrController.prototype.CalibrationPreviewContext = {};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.CalibrationPreviewContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrController.VrController.prototype.CalibrationPreviewContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrController.VrController.prototype.CalibrationPreviewContext.userFunc0x1641610 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
var deg = (beh && gdjs._webxrSolveRotationOffsetDegrees) ? gdjs._webxrSolveRotationOffsetDegrees(beh) : null;
if (!deg) {
    eventsFunctionContext.returnValue = 'not tracked';
} else {
    var h = beh._getHandedness ? beh._getHandedness() : '?';
    var hc = h === 'left' ? 'L' : (h === 'right' ? 'R' : '?');
    eventsFunctionContext.returnValue = hc + ' ' + deg.x.toFixed(1) + ',' + deg.y.toFixed(1) + ',' + deg.z.toFixed(1);
}
};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.CalibrationPreviewContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrController.VrController.prototype.CalibrationPreviewContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrController.VrController.prototype.CalibrationPreviewContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrController.VrController.prototype.CalibrationPreviewContext.userFunc0x1641610(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrController.VrController.prototype.CalibrationPreview = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrController.VrController.prototype.CalibrationPreviewContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrController.VrController.prototype.CalibrationPreviewContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrController.VrController.prototype.CalibrationPreviewContext.GDObjectObjects1.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserEnabledContext = {};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserEnabledContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserEnabledContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserEnabledContext.userFunc0x16415a8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
var v = beh && beh._getLaserEnabled ? beh._getLaserEnabled() : 'false';
eventsFunctionContext.returnValue = (v === 'true' || v === true) ? 1 : 0;
};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserEnabledContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserEnabledContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserEnabledContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserEnabledContext.userFunc0x16415a8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserEnabled = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserEnabledContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserEnabledContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrController.VrController.prototype.LaserEnabledContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR__VrController.VrController.prototype.MagneticGrabEnabledContext = {};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.MagneticGrabEnabledContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrController.VrController.prototype.MagneticGrabEnabledContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrController.VrController.prototype.MagneticGrabEnabledContext.userFunc0x16415d8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
var v = beh && beh._getMagneticGrabEnabled ? beh._getMagneticGrabEnabled() : 'false';
eventsFunctionContext.returnValue = (v === 'true' || v === true) ? 1 : 0;
};
gdjs.evtsExt__WebXR__VrController.VrController.prototype.MagneticGrabEnabledContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrController.VrController.prototype.MagneticGrabEnabledContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrController.VrController.prototype.MagneticGrabEnabledContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrController.VrController.prototype.MagneticGrabEnabledContext.userFunc0x16415d8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrController.VrController.prototype.MagneticGrabEnabled = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrController.VrController.prototype.MagneticGrabEnabledContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrController.VrController.prototype.MagneticGrabEnabledContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrController.VrController.prototype.MagneticGrabEnabledContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}


gdjs.registerBehavior("WebXR::VrController", gdjs.evtsExt__WebXR__VrController.VrController);
