
gdjs.evtsExt__WebXR__VrFollower = gdjs.evtsExt__WebXR__VrFollower || {};

/**
 * Behavior generated from VR Follower
 */
gdjs.evtsExt__WebXR__VrFollower.VrFollower = class VrFollower extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__WebXR__VrFollower.VrFollower.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.TargetObjectName = behaviorData.TargetObjectName !== undefined ? behaviorData.TargetObjectName : "";
    this._behaviorData.OffsetX = behaviorData.OffsetX !== undefined ? behaviorData.OffsetX : Number("0") || 0;
    this._behaviorData.OffsetY = behaviorData.OffsetY !== undefined ? behaviorData.OffsetY : Number("0") || 0;
    this._behaviorData.OffsetZ = behaviorData.OffsetZ !== undefined ? behaviorData.OffsetZ : Number("100") || 0;
    this._behaviorData.RotationX = behaviorData.RotationX !== undefined ? behaviorData.RotationX : Number("0") || 0;
    this._behaviorData.RotationY = behaviorData.RotationY !== undefined ? behaviorData.RotationY : Number("0") || 0;
    this._behaviorData.RotationZ = behaviorData.RotationZ !== undefined ? behaviorData.RotationZ : Number("0") || 0;
    this._behaviorData.FollowRotation = behaviorData.FollowRotation !== undefined ? behaviorData.FollowRotation : true;
    this._behaviorData.RotationSource = behaviorData.RotationSource !== undefined ? behaviorData.RotationSource : "TargetObject";
    this._behaviorData.Smoothing = behaviorData.Smoothing !== undefined ? behaviorData.Smoothing : Number("0") || 0;
  }

  // Hot-reload:
  applyBehaviorOverriding(behaviorOverriding) {
    
    if (behaviorOverriding.TargetObjectName !== undefined)
      this._behaviorData.TargetObjectName = behaviorOverriding.TargetObjectName;
    if (behaviorOverriding.OffsetX !== undefined)
      this._behaviorData.OffsetX = behaviorOverriding.OffsetX;
    if (behaviorOverriding.OffsetY !== undefined)
      this._behaviorData.OffsetY = behaviorOverriding.OffsetY;
    if (behaviorOverriding.OffsetZ !== undefined)
      this._behaviorData.OffsetZ = behaviorOverriding.OffsetZ;
    if (behaviorOverriding.RotationX !== undefined)
      this._behaviorData.RotationX = behaviorOverriding.RotationX;
    if (behaviorOverriding.RotationY !== undefined)
      this._behaviorData.RotationY = behaviorOverriding.RotationY;
    if (behaviorOverriding.RotationZ !== undefined)
      this._behaviorData.RotationZ = behaviorOverriding.RotationZ;
    if (behaviorOverriding.FollowRotation !== undefined)
      this._behaviorData.FollowRotation = behaviorOverriding.FollowRotation;
    if (behaviorOverriding.RotationSource !== undefined)
      this._behaviorData.RotationSource = behaviorOverriding.RotationSource;
    if (behaviorOverriding.Smoothing !== undefined)
      this._behaviorData.Smoothing = behaviorOverriding.Smoothing;

    return true;
  }

  // Network sync:
  getNetworkSyncData(syncOptions) {
    return {
      ...super.getNetworkSyncData(syncOptions),
      props: {
        
    TargetObjectName: this._behaviorData.TargetObjectName,
    OffsetX: this._behaviorData.OffsetX,
    OffsetY: this._behaviorData.OffsetY,
    OffsetZ: this._behaviorData.OffsetZ,
    RotationX: this._behaviorData.RotationX,
    RotationY: this._behaviorData.RotationY,
    RotationZ: this._behaviorData.RotationZ,
    FollowRotation: this._behaviorData.FollowRotation,
    RotationSource: this._behaviorData.RotationSource,
    Smoothing: this._behaviorData.Smoothing,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData, options) {
    super.updateFromNetworkSyncData(networkSyncData, options);
    
    if (networkSyncData.props.TargetObjectName !== undefined)
      this._behaviorData.TargetObjectName = networkSyncData.props.TargetObjectName;
    if (networkSyncData.props.OffsetX !== undefined)
      this._behaviorData.OffsetX = networkSyncData.props.OffsetX;
    if (networkSyncData.props.OffsetY !== undefined)
      this._behaviorData.OffsetY = networkSyncData.props.OffsetY;
    if (networkSyncData.props.OffsetZ !== undefined)
      this._behaviorData.OffsetZ = networkSyncData.props.OffsetZ;
    if (networkSyncData.props.RotationX !== undefined)
      this._behaviorData.RotationX = networkSyncData.props.RotationX;
    if (networkSyncData.props.RotationY !== undefined)
      this._behaviorData.RotationY = networkSyncData.props.RotationY;
    if (networkSyncData.props.RotationZ !== undefined)
      this._behaviorData.RotationZ = networkSyncData.props.RotationZ;
    if (networkSyncData.props.FollowRotation !== undefined)
      this._behaviorData.FollowRotation = networkSyncData.props.FollowRotation;
    if (networkSyncData.props.RotationSource !== undefined)
      this._behaviorData.RotationSource = networkSyncData.props.RotationSource;
    if (networkSyncData.props.Smoothing !== undefined)
      this._behaviorData.Smoothing = networkSyncData.props.Smoothing;
  }

  // Properties:
  
  _getTargetObjectName() {
    return this._behaviorData.TargetObjectName !== undefined ? this._behaviorData.TargetObjectName : "";
  }
  _setTargetObjectName(newValue) {
    this._behaviorData.TargetObjectName = newValue;
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
    return this._behaviorData.OffsetZ !== undefined ? this._behaviorData.OffsetZ : Number("100") || 0;
  }
  _setOffsetZ(newValue) {
    this._behaviorData.OffsetZ = newValue;
  }
  _getRotationX() {
    return this._behaviorData.RotationX !== undefined ? this._behaviorData.RotationX : Number("0") || 0;
  }
  _setRotationX(newValue) {
    this._behaviorData.RotationX = newValue;
  }
  _getRotationY() {
    return this._behaviorData.RotationY !== undefined ? this._behaviorData.RotationY : Number("0") || 0;
  }
  _setRotationY(newValue) {
    this._behaviorData.RotationY = newValue;
  }
  _getRotationZ() {
    return this._behaviorData.RotationZ !== undefined ? this._behaviorData.RotationZ : Number("0") || 0;
  }
  _setRotationZ(newValue) {
    this._behaviorData.RotationZ = newValue;
  }
  _getFollowRotation() {
    return this._behaviorData.FollowRotation !== undefined ? this._behaviorData.FollowRotation : true;
  }
  _setFollowRotation(newValue) {
    this._behaviorData.FollowRotation = newValue;
  }
  _toggleFollowRotation() {
    this._setFollowRotation(!this._getFollowRotation());
  }
  _getRotationSource() {
    return this._behaviorData.RotationSource !== undefined ? this._behaviorData.RotationSource : "TargetObject";
  }
  _setRotationSource(newValue) {
    this._behaviorData.RotationSource = newValue;
  }
  _getSmoothing() {
    return this._behaviorData.Smoothing !== undefined ? this._behaviorData.Smoothing : Number("0") || 0;
  }
  _setSmoothing(newValue) {
    this._behaviorData.Smoothing = newValue;
  }
}

/**
 * Shared data generated from VR Follower
 */
gdjs.evtsExt__WebXR__VrFollower.VrFollower.SharedData = class VrFollowerSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__WebXR__VrFollower.VrFollower.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._WebXR_VrFollowerSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._WebXR_VrFollowerSharedData = new gdjs.evtsExt__WebXR__VrFollower.VrFollower.SharedData(
      initialData
    );
  }
  return instanceContainer._WebXR_VrFollowerSharedData;
}

// Methods:
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.onCreatedContext = {};
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.onCreatedContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.onCreatedContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.onCreatedContext.userFunc0x17127e0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (!beh) continue;
    beh._targetObj = null;
    beh._targetNameResolved = false;
    beh._smoothedPos = null;
    beh._smoothedQuat = null;
}
};
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.onCreatedContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.onCreatedContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.onCreatedContext.userFunc0x17127e0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.onCreated = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.onCreatedContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.onCreatedContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.onDestroyContext = {};
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.onDestroyContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.onDestroyContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.onDestroyContext.userFunc0x1715038 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (!beh) continue;
    beh._targetObj = null;
    beh._smoothedPos = null;
    beh._smoothedQuat = null;
}
};
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.onDestroyContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.onDestroyContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.onDestroyContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.onDestroyContext.userFunc0x1715038(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.onDestroy = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.onDestroyContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.onDestroyContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.onDestroyContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.doStepPostEventsContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.doStepPostEventsContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.doStepPostEventsContext.userFunc0x1711cd8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
for (var fi = 0; fi < objs.length; fi++) {
    var obj = objs[fi];
    var beh = obj.getBehavior(behaviorName);
    if (!beh) continue;
    if (!beh._targetObj && !beh._targetNameResolved) {
        var tName = beh._getTargetObjectName ? String(beh._getTargetObjectName()) : '';
        if (tName) {
            try { var tCands = runtimeScene.getObjects(tName); if (tCands && tCands.length > 0) beh._targetObj = tCands[0]; } catch(e) {}
        }
        beh._targetNameResolved = true;
    }
    if (!beh._targetObj || beh._targetObj === obj) continue;
    var rotSrc = beh._getRotationSource ? String(beh._getRotationSource()) : 'TargetObject';
    var tr = runtimeScene.getGame().getRenderer().getThreeRenderer();
    var isPresenting = !!(tr && tr.xr && tr.xr.isPresenting);
    var srcWP = new THREE.Vector3();
    var srcWQ = new THREE.Quaternion();
    beh._hcHeadHeight = null;
    if (!beh._meshCentered) {
        var _fixed = false;
        if (obj.setRotationCenter3D) { obj.setRotationCenter3D(0, 0, 0); _fixed = true; }
        if (obj.__text3DExtension && obj.__text3DExtension.threeText) {
            var _t = obj.__text3DExtension.threeText;
            _t.anchorX = 'center';
            _t.anchorY = 'middle';
            _t.textAlign = 'center';
            _t.sync();
            _fixed = true;
        }
        if (_fixed) beh._meshCentered = true;
    }
    if (rotSrc === 'HeadsetCamera' && isPresenting) {
        var cam = runtimeScene.getLayer('').getRenderer().getThreeCamera();
        var rig = gdjs._webxrVrRig;
        if (!cam || !rig) continue;
        var ws = (gdjs._webxrVrWorldScale != null) ? gdjs._webxrVrWorldScale : 100;
        srcWP.copy(cam.position).multiplyScalar(ws).applyQuaternion(rig.quaternion).add(rig.position);
        beh._hcHeadHeight = srcWP.z - rig.position.z;
        var _qfc = new THREE.Quaternion(0.5, -0.5, -0.5, 0.5);
        var _camGd = _qfc.clone().multiply(cam.quaternion).multiply(_qfc.clone().conjugate());
        var _hmdYaw = (gdjs._webxrVrAnchor ? gdjs._webxrVrAnchor.angle : 0) * Math.PI / 180;
        srcWQ.setFromAxisAngle(new THREE.Vector3(0, 0, 1), _hmdYaw).multiply(_camGd);
    } else if (rotSrc === 'AnchorYaw') {
        var tThree = null;
        try { tThree = beh._targetObj.get3DRendererObject ? beh._targetObj.get3DRendererObject() : null; } catch(e) { beh._targetObj = null; continue; }
        if (!tThree) continue;
        tThree.updateMatrixWorld(false);
        tThree.getWorldPosition(srcWP);
        var _aRef = gdjs._webxrVrAnchor;
        var yawRad = (_aRef ? (_aRef.bodyYaw != null ? _aRef.bodyYaw : _aRef.angle) : 0) * Math.PI / 180;
        srcWQ.setFromAxisAngle(new THREE.Vector3(0, 0, 1), yawRad);
    } else {
        var tThree2 = null;
        try { tThree2 = beh._targetObj.get3DRendererObject ? beh._targetObj.get3DRendererObject() : null; } catch(e) { beh._targetObj = null; continue; }
        if (!tThree2) continue;
        tThree2.updateMatrixWorld(false);
        tThree2.getWorldPosition(srcWP);
        var tRX = (beh._targetObj.getRotationX ? beh._targetObj.getRotationX() : 0) * Math.PI / 180;
        var tRY = (beh._targetObj.getRotationY ? beh._targetObj.getRotationY() : 0) * Math.PI / 180;
        var tAZ = (beh._targetObj.getAngle ? beh._targetObj.getAngle() : 0) * Math.PI / 180;
        var qGd = new THREE.Quaternion().setFromEuler(new THREE.Euler(tRX, tRY, tAZ, 'ZYX'));
        srcWQ.set(-qGd.x, qGd.y, -qGd.z, qGd.w);
    }
    // When following the player anchor, apply its vertical offset (crouch / seated mode).
    if (rotSrc !== 'HeadsetCamera' && gdjs._webxrVrAnchorObject && beh._targetObj === gdjs._webxrVrAnchorObject) {
        var _aVO = gdjs._webxrVrAnchor ? (gdjs._webxrVrAnchor._verticalOffset || 0) : 0;
        if (_aVO) srcWP.z += _aVO;
    }
    var offX = beh._getOffsetX ? Number(beh._getOffsetX()) : 0;
    var offY = beh._getOffsetY ? Number(beh._getOffsetY()) : 0;
    var offZ = beh._getOffsetZ ? Number(beh._getOffsetZ()) : 100;
    var rotX = beh._getRotationX ? Number(beh._getRotationX()) : 0;
    var rotY = beh._getRotationY ? Number(beh._getRotationY()) : 0;
    var rotZ = beh._getRotationZ ? Number(beh._getRotationZ()) : 0;
    var followRot = beh._getFollowRotation ? (String(beh._getFollowRotation()) !== 'false') : true;
    var smoothing = beh._getSmoothing ? Math.max(0, Math.min(0.99, Number(beh._getSmoothing()))) : 0;
    if (smoothing > 0) {
        var alpha = 1 - smoothing;
        if (!beh._smSrcWP) { beh._smSrcWP = srcWP.clone(); } else { beh._smSrcWP.lerp(srcWP, alpha); srcWP.copy(beh._smSrcWP); }
        if (!beh._smSrcWQ) { beh._smSrcWQ = srcWQ.clone(); } else { beh._smSrcWQ.slerp(srcWQ, alpha); srcWQ.copy(beh._smSrcWQ); }
    } else {
        beh._smSrcWP = null;
        beh._smSrcWQ = null;
    }
    var _hcH = (rotSrc === 'HeadsetCamera' && isPresenting && beh._hcHeadHeight != null) ? beh._hcHeadHeight : 0;
    var offsetVec = new THREE.Vector3(offX, -offY, offZ - _hcH);
    var srcWQGd = new THREE.Quaternion(-srcWQ.x, srcWQ.y, -srcWQ.z, srcWQ.w);
    var D2R = Math.PI / 180;
    var finalQ = srcWQGd.clone().multiply(new THREE.Quaternion().setFromEuler(new THREE.Euler(rotX * D2R, rotY * D2R, rotZ * D2R, 'ZYX')));
    var finalWP = srcWP.clone().add(offsetVec.applyQuaternion(srcWQ));
    // Keep physics body kinematic so it does not fight VrFollower position updates
    var _flwPhys = null; try { _flwPhys = obj.getBehavior('Physics3D'); } catch(e) {}
    if (_flwPhys && _flwPhys._body && typeof Jolt !== 'undefined') {
        var _flwMT = _flwPhys._body.GetMotionType ? _flwPhys._body.GetMotionType() : -1;
        if (_flwMT !== Jolt.EMotionType_Kinematic && _flwMT !== Jolt.EMotionType_Static) {
            _flwPhys._sharedData.bodyInterface.SetMotionType(_flwPhys._body.GetID(), Jolt.EMotionType_Kinematic, Jolt.EActivation_Activate);
        }
    }
    var anchor = gdjs._webxrVrAnchor;
    if (anchor) {
        obj.setX(anchor.x + (finalWP.x - anchor.threeX));
        obj.setY(anchor.y - (finalWP.y - anchor.threeY));
        obj.setZ(anchor.z + (finalWP.z - anchor.threeZ));
    } else {
        obj.setX(finalWP.x);
        obj.setY(-finalWP.y);
        obj.setZ(finalWP.z);
    }
    if (followRot) {
        var eu = new THREE.Euler().setFromQuaternion(finalQ, 'ZYX');
        obj.setAngle(eu.z * 180 / Math.PI);
        if (obj.setRotationX) obj.setRotationX(eu.x * 180 / Math.PI);
        if (obj.setRotationY) obj.setRotationY(eu.y * 180 / Math.PI);
    }
    var ownThree = obj.get3DRendererObject ? obj.get3DRendererObject() : null;
    if (ownThree) {
        var _rend = obj.getRenderer ? obj.getRenderer() : null;
        if (_rend && _rend.ensureUpToDate) _rend.ensureUpToDate();
        var _cx = finalWP.x - ownThree.position.x;
        var _cy = -finalWP.y - ownThree.position.y;
        var _cz = finalWP.z - ownThree.position.z;
        if (Math.abs(_cx) > 0.001 || Math.abs(_cy) > 0.001 || Math.abs(_cz) > 0.001) {
            obj.setX(obj.getX() + _cx);
            obj.setY(obj.getY() + _cy);
            obj.setZ(obj.getZ() + _cz);
        }
    }
    // Push VrHolster occupants that live on this same follower object so they move
    // in lockstep, e.g. arrows in a body-attached quiver tracking the player's back.
    var _fhReg = gdjs._webxrVrHolsterRegistry;
    if (_fhReg && gdjs._webxrVrHolsterApplyHangTransform && anchor) {
        for (var _fhi = 0; _fhi < _fhReg.length; _fhi++) {
            var _fhE = _fhReg[_fhi];
            if (!_fhE || _fhE.source !== 'manual' || _fhE.holsterObj !== obj) continue;
            // Re-sample worldPos/worldQuat from the Three.js renderer (synced via ensureUpToDate above).
            if (ownThree) {
                ownThree.getWorldPosition(_fhE.worldPos);
                ownThree.getWorldQuaternion(_fhE.worldQuat);
            }
            gdjs._webxrVrHolsterApplyHangTransform(_fhE);
        }
    }
}
};
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.doStepPostEventsContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.doStepPostEventsContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.doStepPostEventsContext.userFunc0x1711cd8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.StartFollowingContext = {};
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.StartFollowingContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.StartFollowingContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.StartFollowingContext.userFunc0x17127e0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var targetName = String(eventsFunctionContext.getArgument("TargetObjectName"));
var targetObjs = [];
try { targetObjs = runtimeScene.getObjects(targetName) || []; } catch(e) {}
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (!beh) continue;
    beh._targetObj = targetObjs.length > 0 ? targetObjs[0] : null;
    beh._targetNameResolved = true;
    beh._smoothedPos = null;
    beh._smoothedQuat = null;
}
};
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.StartFollowingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.StartFollowingContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.StartFollowingContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.StartFollowingContext.userFunc0x17127e0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.StartFollowing = function(TargetObjectName, parentEventsFunctionContext) {

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
if (argName === "TargetObjectName") return TargetObjectName;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.StartFollowingContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.StartFollowingContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.StartFollowingContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.StopFollowingContext = {};
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.StopFollowingContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.StopFollowingContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.StopFollowingContext.userFunc0x1712808 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (!beh) continue;
    beh._targetObj = null;
    beh._targetNameResolved = false;
    beh._smoothedPos = null;
    beh._smoothedQuat = null;
}
};
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.StopFollowingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.StopFollowingContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.StopFollowingContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.StopFollowingContext.userFunc0x1712808(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.StopFollowing = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.StopFollowingContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.StopFollowingContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.StopFollowingContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SetTargetObjectNameContext = {};
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SetTargetObjectNameContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SetTargetObjectNameContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SetTargetObjectNameContext.userFunc0x170fe38 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var name = String(eventsFunctionContext.getArgument("Name"));
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (!beh) continue;
    if (beh._setTargetObjectName) beh._setTargetObjectName(name);
    beh._targetObj = null;
    beh._targetNameResolved = false;
    beh._smoothedPos = null;
    beh._smoothedQuat = null;
}
};
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SetTargetObjectNameContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SetTargetObjectNameContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SetTargetObjectNameContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SetTargetObjectNameContext.userFunc0x170fe38(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SetTargetObjectName = function(Name, parentEventsFunctionContext) {

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
if (argName === "Name") return Name;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SetTargetObjectNameContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SetTargetObjectNameContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SetTargetObjectNameContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.TargetObjectNameContext = {};
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.TargetObjectNameContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.TargetObjectNameContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.TargetObjectNameContext.userFunc0x170fe60 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
if (beh && beh._targetObj) {
    eventsFunctionContext.returnValue = beh._targetObj.getName ? beh._targetObj.getName() : '';
} else if (beh && beh._getTargetObjectName) {
    eventsFunctionContext.returnValue = String(beh._getTargetObjectName());
} else {
    eventsFunctionContext.returnValue = '';
}
};
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.TargetObjectNameContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.TargetObjectNameContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.TargetObjectNameContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.TargetObjectNameContext.userFunc0x170fe60(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.TargetObjectName = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.TargetObjectNameContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.TargetObjectNameContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.TargetObjectNameContext.GDObjectObjects1.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.IsFollowingContext = {};
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.IsFollowingContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.IsFollowingContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.IsFollowingContext.userFunc0x170fe60 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = !!(beh && beh._targetObj);
};
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.IsFollowingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.IsFollowingContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.IsFollowingContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.IsFollowingContext.userFunc0x170fe60(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.IsFollowing = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.IsFollowingContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.IsFollowingContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.IsFollowingContext.GDObjectObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SetOffsetXContext = {};
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SetOffsetXContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SetOffsetXContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SetOffsetXContext.userFunc0x170fe38 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var v = Number(eventsFunctionContext.getArgument("Value"));
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh && beh._setOffsetX) beh._setOffsetX(String(v));
}
};
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SetOffsetXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SetOffsetXContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SetOffsetXContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SetOffsetXContext.userFunc0x170fe38(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SetOffsetX = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SetOffsetXContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SetOffsetXContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SetOffsetXContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.OffsetXContext = {};
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.OffsetXContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.OffsetXContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.OffsetXContext.userFunc0x1715038 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh && beh._getOffsetX ? Number(beh._getOffsetX()) : 0;
};
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.OffsetXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.OffsetXContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.OffsetXContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.OffsetXContext.userFunc0x1715038(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.OffsetX = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.OffsetXContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.OffsetXContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.OffsetXContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SetOffsetYContext = {};
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SetOffsetYContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SetOffsetYContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SetOffsetYContext.userFunc0x17127e0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var v = Number(eventsFunctionContext.getArgument("Value"));
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh && beh._setOffsetY) beh._setOffsetY(String(v));
}
};
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SetOffsetYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SetOffsetYContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SetOffsetYContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SetOffsetYContext.userFunc0x17127e0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SetOffsetY = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SetOffsetYContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SetOffsetYContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SetOffsetYContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.OffsetYContext = {};
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.OffsetYContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.OffsetYContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.OffsetYContext.userFunc0x1711cd8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh && beh._getOffsetY ? Number(beh._getOffsetY()) : 0;
};
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.OffsetYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.OffsetYContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.OffsetYContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.OffsetYContext.userFunc0x1711cd8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.OffsetY = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.OffsetYContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.OffsetYContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.OffsetYContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SetOffsetZContext = {};
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SetOffsetZContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SetOffsetZContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SetOffsetZContext.userFunc0x1715898 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var v = Number(eventsFunctionContext.getArgument("Value"));
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh && beh._setOffsetZ) beh._setOffsetZ(String(v));
}
};
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SetOffsetZContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SetOffsetZContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SetOffsetZContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SetOffsetZContext.userFunc0x1715898(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SetOffsetZ = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SetOffsetZContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SetOffsetZContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SetOffsetZContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.OffsetZContext = {};
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.OffsetZContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.OffsetZContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.OffsetZContext.userFunc0x170d998 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh && beh._getOffsetZ ? Number(beh._getOffsetZ()) : 100;
};
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.OffsetZContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.OffsetZContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.OffsetZContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.OffsetZContext.userFunc0x170d998(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.OffsetZ = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.OffsetZContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.OffsetZContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.OffsetZContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SetRotationXContext = {};
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SetRotationXContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SetRotationXContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SetRotationXContext.userFunc0x170fe38 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var v = Number(eventsFunctionContext.getArgument("Value"));
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh && beh._setRotationX) beh._setRotationX(String(v));
}
};
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SetRotationXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SetRotationXContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SetRotationXContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SetRotationXContext.userFunc0x170fe38(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SetRotationX = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SetRotationXContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SetRotationXContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SetRotationXContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.RotationXContext = {};
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.RotationXContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.RotationXContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.RotationXContext.userFunc0x17046c0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh && beh._getRotationX ? Number(beh._getRotationX()) : 0;
};
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.RotationXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.RotationXContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.RotationXContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.RotationXContext.userFunc0x17046c0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.RotationX = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.RotationXContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.RotationXContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.RotationXContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SetRotationYContext = {};
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SetRotationYContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SetRotationYContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SetRotationYContext.userFunc0x1770760 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var v = Number(eventsFunctionContext.getArgument("Value"));
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh && beh._setRotationY) beh._setRotationY(String(v));
}
};
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SetRotationYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SetRotationYContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SetRotationYContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SetRotationYContext.userFunc0x1770760(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SetRotationY = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SetRotationYContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SetRotationYContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SetRotationYContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.RotationYContext = {};
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.RotationYContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.RotationYContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.RotationYContext.userFunc0x1710938 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh && beh._getRotationY ? Number(beh._getRotationY()) : 0;
};
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.RotationYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.RotationYContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.RotationYContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.RotationYContext.userFunc0x1710938(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.RotationY = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.RotationYContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.RotationYContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.RotationYContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SetRotationZContext = {};
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SetRotationZContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SetRotationZContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SetRotationZContext.userFunc0x170fe38 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var v = Number(eventsFunctionContext.getArgument("Value"));
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh && beh._setRotationZ) beh._setRotationZ(String(v));
}
};
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SetRotationZContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SetRotationZContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SetRotationZContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SetRotationZContext.userFunc0x170fe38(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SetRotationZ = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SetRotationZContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SetRotationZContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SetRotationZContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.RotationZContext = {};
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.RotationZContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.RotationZContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.RotationZContext.userFunc0x1715cf8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh && beh._getRotationZ ? Number(beh._getRotationZ()) : 0;
};
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.RotationZContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.RotationZContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.RotationZContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.RotationZContext.userFunc0x1715cf8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.RotationZ = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.RotationZContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.RotationZContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.RotationZContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.EnableFollowRotationContext = {};
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.EnableFollowRotationContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.EnableFollowRotationContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.EnableFollowRotationContext.userFunc0x170fe38 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh && beh._setFollowRotation) beh._setFollowRotation('true');
}
};
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.EnableFollowRotationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.EnableFollowRotationContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.EnableFollowRotationContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.EnableFollowRotationContext.userFunc0x170fe38(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.EnableFollowRotation = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.EnableFollowRotationContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.EnableFollowRotationContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.EnableFollowRotationContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.DisableFollowRotationContext = {};
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.DisableFollowRotationContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.DisableFollowRotationContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.DisableFollowRotationContext.userFunc0x170fe60 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh && beh._setFollowRotation) beh._setFollowRotation('false');
}
};
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.DisableFollowRotationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.DisableFollowRotationContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.DisableFollowRotationContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.DisableFollowRotationContext.userFunc0x170fe60(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.DisableFollowRotation = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.DisableFollowRotationContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.DisableFollowRotationContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.DisableFollowRotationContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.FollowRotationContext = {};
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.FollowRotationContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.FollowRotationContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.FollowRotationContext.userFunc0x170fe60 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
var v = beh && beh._getFollowRotation ? beh._getFollowRotation() : 'true';
eventsFunctionContext.returnValue = (v === 'true' || v === true);
};
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.FollowRotationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.FollowRotationContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.FollowRotationContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.FollowRotationContext.userFunc0x170fe60(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.FollowRotation = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.FollowRotationContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.FollowRotationContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.FollowRotationContext.GDObjectObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SetRotationSourceContext = {};
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SetRotationSourceContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SetRotationSourceContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SetRotationSourceContext.userFunc0x17127e0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var mode = String(eventsFunctionContext.getArgument("Mode"));
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh && beh._setRotationSource) beh._setRotationSource(mode);
}
};
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SetRotationSourceContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SetRotationSourceContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SetRotationSourceContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SetRotationSourceContext.userFunc0x17127e0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SetRotationSource = function(Mode, parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SetRotationSourceContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SetRotationSourceContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SetRotationSourceContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.RotationSourceContext = {};
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.RotationSourceContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.RotationSourceContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.RotationSourceContext.userFunc0x1770788 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh && beh._getRotationSource ? String(beh._getRotationSource()) : 'TargetObject';
};
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.RotationSourceContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.RotationSourceContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.RotationSourceContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.RotationSourceContext.userFunc0x1770788(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.RotationSource = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.RotationSourceContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.RotationSourceContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.RotationSourceContext.GDObjectObjects1.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SetSmoothingContext = {};
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SetSmoothingContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SetSmoothingContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SetSmoothingContext.userFunc0x1715898 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var v = Number(eventsFunctionContext.getArgument("Value"));
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh && beh._setSmoothing) beh._setSmoothing(String(v));
}
};
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SetSmoothingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SetSmoothingContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SetSmoothingContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SetSmoothingContext.userFunc0x1715898(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SetSmoothing = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SetSmoothingContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SetSmoothingContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SetSmoothingContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SmoothingContext = {};
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SmoothingContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SmoothingContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SmoothingContext.userFunc0x1715cf8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh && beh._getSmoothing ? Number(beh._getSmoothing()) : 0;
};
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SmoothingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SmoothingContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SmoothingContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SmoothingContext.userFunc0x1715cf8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.Smoothing = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SmoothingContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SmoothingContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.SmoothingContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__WebXR__VrFollower.VrFollower.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("WebXR::VrFollower", gdjs.evtsExt__WebXR__VrFollower.VrFollower);
