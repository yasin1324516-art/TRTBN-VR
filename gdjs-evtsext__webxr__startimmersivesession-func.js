
if (typeof gdjs.evtsExt__WebXR__startImmersiveSession !== "undefined") {
  gdjs.evtsExt__WebXR__startImmersiveSession.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__WebXR__startImmersiveSession = {};
gdjs.evtsExt__WebXR__startImmersiveSession.idToCallbackMap = new Map();


gdjs.evtsExt__WebXR__startImmersiveSession.userFunc0xc5d4e0 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
var gameRenderer = runtimeScene.getGame().getRenderer();
var threeRenderer = gameRenderer && gameRenderer.getThreeRenderer ? gameRenderer.getThreeRenderer() : null;
if (typeof gdjs._webxrVrDbg === 'function') {
    gdjs._webxrVrDbg('startImmersiveSession: three', !!threeRenderer, 'xr', !!(navigator && navigator.xr));
}
if (!threeRenderer || !navigator.xr) {
    return;
}
threeRenderer.xr.enabled = true;
var sessionInit = { optionalFeatures: ['local-floor', 'bounded-floor', 'hand-tracking', 'layers'] };
var ws = gdjs._webxrVrWorldScale || 100;
var cam = runtimeScene.getLayer('').getRenderer().getThreeCamera();
// Fix near/far on ALL 3D layer cameras, not just the main one.
// Background/UI layers with near=3 scene units would make Quest pass
// depthNear=3 to session.updateRenderState, which WebXR interprets as
// 3 metres — clipping everything within 3 m (controllers, held objects, walls).
var _vrLayerNames = [''];
try {
    var _lh = runtimeScene._layers;
    if (_lh && _lh.items) {
        Object.keys(_lh.items).forEach(function(n) {
            if (_vrLayerNames.indexOf(n) < 0) _vrLayerNames.push(n);
        });
    }
} catch(e) {}
var _vrFixedLayerCams = [];
_vrLayerNames.forEach(function(n) {
    try {
        var _lc = runtimeScene.getLayer(n).getRenderer().getThreeCamera();
        if (_lc && typeof _lc.near === 'number' && _lc.updateProjectionMatrix) {
            _lc._vrOrigNear = _lc.near;
            _lc._vrOrigFar  = _lc.far;
            _lc.near = _lc.near / ws;
            _lc.far  = _lc.far  / ws;
            _lc.updateProjectionMatrix();
            _vrFixedLayerCams.push(n);
        }
    } catch(e) {}
});
gdjs._webxrVrFixedLayerCams = _vrFixedLayerCams;
// VR-safe frustum culling for the duration of the VR session.
// Three.js uses the binocular union frustum (ArrayCamera from xr.getCamera())
// during XR rendering, so the frustum already covers both eyes correctly.
// We patch intersectsObject/intersectsSprite to test the bounding sphere against
// that union frustum with a configurable safety margin, culling objects that are
// fully outside/behind the combined view while preventing the original edge/near
// disappearing bug (which happened with the mono scene-camera frustum).
// Set gdjs._webxrVrFrustumCullEnabled=false at runtime to revert to render-all.
if (typeof THREE !== 'undefined' && THREE.Frustum && !gdjs._webxrVrFrustumIntercepted) {
    gdjs._webxrVrOrigIntersectsObject = THREE.Frustum.prototype.intersectsObject;
    gdjs._webxrVrOrigIntersectsSprite  = THREE.Frustum.prototype.intersectsSprite;
    THREE.Frustum.prototype.intersectsObject = function(object) {
        if (gdjs._webxrVrFrustumCullEnabled === false) return true;
        var geometry = object.geometry;
        if (geometry === undefined) return true;
        if (geometry.boundingSphere === null) geometry.computeBoundingSphere();
        var s = gdjs._webxrVrCullSphere || (gdjs._webxrVrCullSphere = new THREE.Sphere());
        s.copy(geometry.boundingSphere).applyMatrix4(object.matrixWorld);
        var ws = gdjs._webxrVrWorldScale || 100;
        var hp = gdjs._webxrVrHeadWorld;
        if (hp) {
            var nk = (gdjs._webxrVrCullNearKeepMeters != null ? gdjs._webxrVrCullNearKeepMeters : 5) * ws;
            if (s.center.distanceTo(hp) <= nk + s.radius) return true;
        }
        s.radius = s.radius * (gdjs._webxrVrCullRadiusScale || 1)
                 + (gdjs._webxrVrCullMarginMeters || 0) * ws;
        return this.intersectsSphere(s);
    };
    THREE.Frustum.prototype.intersectsSprite = function(sprite) {
        if (gdjs._webxrVrFrustumCullEnabled === false) return true;
        var s = gdjs._webxrVrCullSphere || (gdjs._webxrVrCullSphere = new THREE.Sphere());
        s.center.set(0, 0, 0);
        s.radius = 0.7071067811865476;
        s.applyMatrix4(sprite.matrixWorld);
        var ws = gdjs._webxrVrWorldScale || 100;
        var hp = gdjs._webxrVrHeadWorld;
        if (hp) {
            var nk = (gdjs._webxrVrCullNearKeepMeters != null ? gdjs._webxrVrCullNearKeepMeters : 5) * ws;
            if (s.center.distanceTo(hp) <= nk + s.radius) return true;
        }
        s.radius = s.radius * (gdjs._webxrVrCullRadiusScale || 1)
                 + (gdjs._webxrVrCullMarginMeters || 0) * ws;
        return this.intersectsSphere(s);
    };
    gdjs._webxrVrFrustumIntercepted = true;
}
navigator.xr.requestSession('immersive-vr', sessionInit).then(function (session) {
    if (typeof gdjs._webxrVrDbg === 'function') {
        gdjs._webxrVrDbg('requestSession OK');
    }
    session.addEventListener('end', function () {
        gdjs._webxrVrXrBaseSpace = null;
        (gdjs._webxrVrFixedLayerCams || []).forEach(function(n) {
            try {
                var _lc = runtimeScene.getLayer(n).getRenderer().getThreeCamera();
                if (_lc && _lc._vrOrigNear !== undefined) {
                    _lc.near = _lc._vrOrigNear;
                    _lc.far  = _lc._vrOrigFar;
                    _lc.updateProjectionMatrix();
                }
            } catch(e) {}
        });
        gdjs._webxrVrFixedLayerCams = null;
        gdjs._webxrVrXrNear = undefined;
        gdjs._webxrVrXrFar  = undefined;
        if (gdjs._webxrVrOrigIntersectsObject) {
            THREE.Frustum.prototype.intersectsObject = gdjs._webxrVrOrigIntersectsObject;
            gdjs._webxrVrOrigIntersectsObject = null;
        }
        if (gdjs._webxrVrOrigIntersectsSprite) {
            THREE.Frustum.prototype.intersectsSprite = gdjs._webxrVrOrigIntersectsSprite;
            gdjs._webxrVrOrigIntersectsSprite = null;
        }
        gdjs._webxrVrFrustumIntercepted = false;
        try {
            runtimeScene.onGameResolutionResized();
        } catch (e2) {}
    });
    // Intercept updateRenderState to lock in the correct depth range.
    // Three.js syncs depthNear/depthFar from each layer camera every frame;
    // other layers (Background, UI) with near=3 scene units would pass
    // depthNear=3 to WebXR, which Quest 3S interprets as 3 metres and clips
    // everything closer than that. The intercept enforces the corrected value.
    var _ws2 = gdjs._webxrVrWorldScale || 100;
    var _xrNear = (cam && typeof cam.near === 'number') ? cam.near : (0.3 / _ws2);
    var _xrFar  = (cam && typeof cam.far  === 'number') ? cam.far  : (10000 / _ws2);
    gdjs._webxrVrXrNear = _xrNear;
    gdjs._webxrVrXrFar  = _xrFar;
    var _origURS = session.updateRenderState.bind(session);
    session.updateRenderState = function(init) {
        var p = (init && typeof init === 'object') ? Object.assign({}, init) : {};
        p.depthNear = _xrNear;
        p.depthFar  = _xrFar;
        return _origURS(p);
    };
    return threeRenderer.xr.setSession(session);
}).then(function () {
    // Explicitly seed the XR ArrayCamera near/far before the first render call.
    // Three.js may initialise it with stale defaults (0.1 / 1000) before the
    // per-frame updateCamera() sync runs.
    try {
        var xrC = threeRenderer.xr.getCamera();
        if (xrC && cam) {
            xrC.near = cam.near;
            xrC.far  = cam.far;
            if (xrC.cameras) {
                xrC.cameras.forEach(function(c) { c.near = cam.near; c.far = cam.far; });
            }
        }
        var xrSess = threeRenderer.xr.getSession ? threeRenderer.xr.getSession() : null;
        if (xrSess && cam) {
            xrSess.updateRenderState({ depthNear: cam.near, depthFar: cam.far });
        }
    } catch(e4) {}
    try {
        gdjs._webxrVrXrBaseSpace = threeRenderer.xr.getReferenceSpace();
    } catch (e3) {
        gdjs._webxrVrXrBaseSpace = null;
    }
    if (typeof gdjs._webxrVrDbg === 'function') {
        gdjs._webxrVrDbg('setSession done; isPresenting=', threeRenderer.xr.isPresenting);
    }
}).catch(function (err) {
    console.error('[WebXR_VR] startImmersiveSession failed', err);
});
};
gdjs.evtsExt__WebXR__startImmersiveSession.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WebXR__startImmersiveSession.userFunc0xc5d4e0(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__startImmersiveSession.func = function(runtimeScene, parentEventsFunctionContext) {
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


gdjs.evtsExt__WebXR__startImmersiveSession.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__WebXR__startImmersiveSession.registeredGdjsCallbacks = [];