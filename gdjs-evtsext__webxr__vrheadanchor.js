
gdjs.evtsExt__WebXR__VrHeadAnchor = gdjs.evtsExt__WebXR__VrHeadAnchor || {};

/**
 * Behavior generated from VR head anchor (WebXR)
 */
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor = class VrHeadAnchor extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.CrouchScale = behaviorData.CrouchScale !== undefined ? behaviorData.CrouchScale : Number("0.5") || 0;
    this._behaviorData.CrouchHeightFactor = behaviorData.CrouchHeightFactor !== undefined ? behaviorData.CrouchHeightFactor : Number("0.5") || 0;
    this._behaviorData.VirtualHeight = behaviorData.VirtualHeight !== undefined ? behaviorData.VirtualHeight : Number("0") || 0;
    this._behaviorData.MovementDirectionMode = behaviorData.MovementDirectionMode !== undefined ? behaviorData.MovementDirectionMode : "Head";
    this._behaviorData.BodyYawDeadzone = behaviorData.BodyYawDeadzone !== undefined ? behaviorData.BodyYawDeadzone : Number("30") || 0;
    this._behaviorData.BodyYawSmoothing = behaviorData.BodyYawSmoothing !== undefined ? behaviorData.BodyYawSmoothing : Number("0") || 0;
    this._behaviorData.MovementControllerHand = behaviorData.MovementControllerHand !== undefined ? behaviorData.MovementControllerHand : "left";
    this._behaviorData.SkyboxRight = behaviorData.SkyboxRight !== undefined ? behaviorData.SkyboxRight : "SkyboxRight.png";
    this._behaviorData.SkyboxLeft = behaviorData.SkyboxLeft !== undefined ? behaviorData.SkyboxLeft : "SkyboxLeft.png";
    this._behaviorData.SkyboxTop = behaviorData.SkyboxTop !== undefined ? behaviorData.SkyboxTop : "SkyboxTop.png";
    this._behaviorData.SkyboxBottom = behaviorData.SkyboxBottom !== undefined ? behaviorData.SkyboxBottom : "SkyboxBottom.png";
    this._behaviorData.SkyboxFront = behaviorData.SkyboxFront !== undefined ? behaviorData.SkyboxFront : "SkyboxFront.png";
    this._behaviorData.SkyboxBack = behaviorData.SkyboxBack !== undefined ? behaviorData.SkyboxBack : "SkyboxBack.png";
  }

  // Hot-reload:
  applyBehaviorOverriding(behaviorOverriding) {
    
    if (behaviorOverriding.CrouchScale !== undefined)
      this._behaviorData.CrouchScale = behaviorOverriding.CrouchScale;
    if (behaviorOverriding.CrouchHeightFactor !== undefined)
      this._behaviorData.CrouchHeightFactor = behaviorOverriding.CrouchHeightFactor;
    if (behaviorOverriding.VirtualHeight !== undefined)
      this._behaviorData.VirtualHeight = behaviorOverriding.VirtualHeight;
    if (behaviorOverriding.MovementDirectionMode !== undefined)
      this._behaviorData.MovementDirectionMode = behaviorOverriding.MovementDirectionMode;
    if (behaviorOverriding.BodyYawDeadzone !== undefined)
      this._behaviorData.BodyYawDeadzone = behaviorOverriding.BodyYawDeadzone;
    if (behaviorOverriding.BodyYawSmoothing !== undefined)
      this._behaviorData.BodyYawSmoothing = behaviorOverriding.BodyYawSmoothing;
    if (behaviorOverriding.MovementControllerHand !== undefined)
      this._behaviorData.MovementControllerHand = behaviorOverriding.MovementControllerHand;
    if (behaviorOverriding.SkyboxRight !== undefined)
      this._behaviorData.SkyboxRight = behaviorOverriding.SkyboxRight;
    if (behaviorOverriding.SkyboxLeft !== undefined)
      this._behaviorData.SkyboxLeft = behaviorOverriding.SkyboxLeft;
    if (behaviorOverriding.SkyboxTop !== undefined)
      this._behaviorData.SkyboxTop = behaviorOverriding.SkyboxTop;
    if (behaviorOverriding.SkyboxBottom !== undefined)
      this._behaviorData.SkyboxBottom = behaviorOverriding.SkyboxBottom;
    if (behaviorOverriding.SkyboxFront !== undefined)
      this._behaviorData.SkyboxFront = behaviorOverriding.SkyboxFront;
    if (behaviorOverriding.SkyboxBack !== undefined)
      this._behaviorData.SkyboxBack = behaviorOverriding.SkyboxBack;

    return true;
  }

  // Network sync:
  getNetworkSyncData(syncOptions) {
    return {
      ...super.getNetworkSyncData(syncOptions),
      props: {
        
    CrouchScale: this._behaviorData.CrouchScale,
    CrouchHeightFactor: this._behaviorData.CrouchHeightFactor,
    VirtualHeight: this._behaviorData.VirtualHeight,
    MovementDirectionMode: this._behaviorData.MovementDirectionMode,
    BodyYawDeadzone: this._behaviorData.BodyYawDeadzone,
    BodyYawSmoothing: this._behaviorData.BodyYawSmoothing,
    MovementControllerHand: this._behaviorData.MovementControllerHand,
    SkyboxRight: this._behaviorData.SkyboxRight,
    SkyboxLeft: this._behaviorData.SkyboxLeft,
    SkyboxTop: this._behaviorData.SkyboxTop,
    SkyboxBottom: this._behaviorData.SkyboxBottom,
    SkyboxFront: this._behaviorData.SkyboxFront,
    SkyboxBack: this._behaviorData.SkyboxBack,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData, options) {
    super.updateFromNetworkSyncData(networkSyncData, options);
    
    if (networkSyncData.props.CrouchScale !== undefined)
      this._behaviorData.CrouchScale = networkSyncData.props.CrouchScale;
    if (networkSyncData.props.CrouchHeightFactor !== undefined)
      this._behaviorData.CrouchHeightFactor = networkSyncData.props.CrouchHeightFactor;
    if (networkSyncData.props.VirtualHeight !== undefined)
      this._behaviorData.VirtualHeight = networkSyncData.props.VirtualHeight;
    if (networkSyncData.props.MovementDirectionMode !== undefined)
      this._behaviorData.MovementDirectionMode = networkSyncData.props.MovementDirectionMode;
    if (networkSyncData.props.BodyYawDeadzone !== undefined)
      this._behaviorData.BodyYawDeadzone = networkSyncData.props.BodyYawDeadzone;
    if (networkSyncData.props.BodyYawSmoothing !== undefined)
      this._behaviorData.BodyYawSmoothing = networkSyncData.props.BodyYawSmoothing;
    if (networkSyncData.props.MovementControllerHand !== undefined)
      this._behaviorData.MovementControllerHand = networkSyncData.props.MovementControllerHand;
    if (networkSyncData.props.SkyboxRight !== undefined)
      this._behaviorData.SkyboxRight = networkSyncData.props.SkyboxRight;
    if (networkSyncData.props.SkyboxLeft !== undefined)
      this._behaviorData.SkyboxLeft = networkSyncData.props.SkyboxLeft;
    if (networkSyncData.props.SkyboxTop !== undefined)
      this._behaviorData.SkyboxTop = networkSyncData.props.SkyboxTop;
    if (networkSyncData.props.SkyboxBottom !== undefined)
      this._behaviorData.SkyboxBottom = networkSyncData.props.SkyboxBottom;
    if (networkSyncData.props.SkyboxFront !== undefined)
      this._behaviorData.SkyboxFront = networkSyncData.props.SkyboxFront;
    if (networkSyncData.props.SkyboxBack !== undefined)
      this._behaviorData.SkyboxBack = networkSyncData.props.SkyboxBack;
  }

  // Properties:
  
  _getCrouchScale() {
    return this._behaviorData.CrouchScale !== undefined ? this._behaviorData.CrouchScale : Number("0.5") || 0;
  }
  _setCrouchScale(newValue) {
    this._behaviorData.CrouchScale = newValue;
  }
  _getCrouchHeightFactor() {
    return this._behaviorData.CrouchHeightFactor !== undefined ? this._behaviorData.CrouchHeightFactor : Number("0.5") || 0;
  }
  _setCrouchHeightFactor(newValue) {
    this._behaviorData.CrouchHeightFactor = newValue;
  }
  _getVirtualHeight() {
    return this._behaviorData.VirtualHeight !== undefined ? this._behaviorData.VirtualHeight : Number("0") || 0;
  }
  _setVirtualHeight(newValue) {
    this._behaviorData.VirtualHeight = newValue;
  }
  _getMovementDirectionMode() {
    return this._behaviorData.MovementDirectionMode !== undefined ? this._behaviorData.MovementDirectionMode : "Head";
  }
  _setMovementDirectionMode(newValue) {
    this._behaviorData.MovementDirectionMode = newValue;
  }
  _getBodyYawDeadzone() {
    return this._behaviorData.BodyYawDeadzone !== undefined ? this._behaviorData.BodyYawDeadzone : Number("30") || 0;
  }
  _setBodyYawDeadzone(newValue) {
    this._behaviorData.BodyYawDeadzone = newValue;
  }
  _getBodyYawSmoothing() {
    return this._behaviorData.BodyYawSmoothing !== undefined ? this._behaviorData.BodyYawSmoothing : Number("0") || 0;
  }
  _setBodyYawSmoothing(newValue) {
    this._behaviorData.BodyYawSmoothing = newValue;
  }
  _getMovementControllerHand() {
    return this._behaviorData.MovementControllerHand !== undefined ? this._behaviorData.MovementControllerHand : "left";
  }
  _setMovementControllerHand(newValue) {
    this._behaviorData.MovementControllerHand = newValue;
  }
  _getSkyboxRight() {
    return this._behaviorData.SkyboxRight !== undefined ? this._behaviorData.SkyboxRight : "SkyboxRight.png";
  }
  _setSkyboxRight(newValue) {
    this._behaviorData.SkyboxRight = newValue;
  }
  _getSkyboxLeft() {
    return this._behaviorData.SkyboxLeft !== undefined ? this._behaviorData.SkyboxLeft : "SkyboxLeft.png";
  }
  _setSkyboxLeft(newValue) {
    this._behaviorData.SkyboxLeft = newValue;
  }
  _getSkyboxTop() {
    return this._behaviorData.SkyboxTop !== undefined ? this._behaviorData.SkyboxTop : "SkyboxTop.png";
  }
  _setSkyboxTop(newValue) {
    this._behaviorData.SkyboxTop = newValue;
  }
  _getSkyboxBottom() {
    return this._behaviorData.SkyboxBottom !== undefined ? this._behaviorData.SkyboxBottom : "SkyboxBottom.png";
  }
  _setSkyboxBottom(newValue) {
    this._behaviorData.SkyboxBottom = newValue;
  }
  _getSkyboxFront() {
    return this._behaviorData.SkyboxFront !== undefined ? this._behaviorData.SkyboxFront : "SkyboxFront.png";
  }
  _setSkyboxFront(newValue) {
    this._behaviorData.SkyboxFront = newValue;
  }
  _getSkyboxBack() {
    return this._behaviorData.SkyboxBack !== undefined ? this._behaviorData.SkyboxBack : "SkyboxBack.png";
  }
  _setSkyboxBack(newValue) {
    this._behaviorData.SkyboxBack = newValue;
  }
}

/**
 * Shared data generated from VR head anchor (WebXR)
 */
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.SharedData = class VrHeadAnchorSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._WebXR_VrHeadAnchorSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._WebXR_VrHeadAnchorSharedData = new gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.SharedData(
      initialData
    );
  }
  return instanceContainer._WebXR_VrHeadAnchorSharedData;
}

// Methods:
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.doStepPostEventsContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.doStepPostEventsContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.doStepPostEventsContext.userFunc0x1770870 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var objs = eventsFunctionContext.getObjects("Object");
var tr = runtimeScene.getGame().getRenderer().getThreeRenderer();
if (!tr || !tr.xr || !tr.xr.isPresenting) {
    return;
}
var rig = gdjs._webxrVrRig;
if (!rig) return;

// Define (once) a lightweight rig-current helper so VrGrabbable/VrHolster/VrBodyZones
// postEvents can sync the rig before reading grip world positions, even if VrHeadAnchor
// hasn't run yet for this frame. Guarded by a per-XRFrame token.
if (!gdjs._webxrVrEnsureRigCurrent) {
    gdjs._webxrVrEnsureRigCurrent = function() {
        if (gdjs._webxrVrRigFrame === gdjs._webxrVrFrame) return;
        var _erRig = gdjs._webxrVrRig;
        var _erObj = gdjs._webxrVrAnchorObject;
        if (!_erRig || !_erObj) return;
        var _erWs = gdjs._webxrVrWorldScale || 100;
        var _erAng = -_erObj.getAngle();
        var _erHA = _erAng * Math.PI / 360;
        var _erSz = Math.sin(_erHA), _erCz = Math.cos(_erHA);
        _erRig.position.set(_erObj.getX(), -_erObj.getY(), _erObj.getZ());
        _erRig.quaternion.set(0.5*(_erCz+_erSz), 0.5*(_erSz-_erCz), 0.5*(_erSz-_erCz), 0.5*(_erCz+_erSz));
        _erRig.scale.set(_erWs, _erWs, _erWs);
        var _erVO = gdjs._webxrVrAnchor ? (gdjs._webxrVrAnchor._verticalOffset || 0) : 0;
        if (_erVO) _erRig.position.z = _erObj.getZ() + _erVO;
        _erRig.updateMatrixWorld(true);
        gdjs._webxrVrRigFrame = gdjs._webxrVrFrame;
    };
}

// Enforce correct XR near/far every frame before render().
// GDevelop may reset camera.near to scene-unit values each frame;
// this counteracts that so Three.js and the XR session see the right depth range.
if (gdjs._webxrVrXrNear !== undefined) {
    var _nf = gdjs._webxrVrXrNear;
    var _ff = gdjs._webxrVrXrFar;
    try {
        var _lhNF = runtimeScene._layers;
        if (_lhNF && _lhNF.items) {
            Object.keys(_lhNF.items).forEach(function(n) {
                try {
                    var _lcNF = runtimeScene.getLayer(n).getRenderer().getThreeCamera();
                    if (_lcNF && typeof _lcNF.near === 'number' && _lcNF.near !== _nf) {
                        _lcNF.near = _nf;
                        _lcNF.far  = _ff;
                        _lcNF.updateProjectionMatrix();
                    }
                } catch(e) {}
            });
        }
    } catch(e) {}
    try {
        var _xrSNF = tr.xr.getSession ? tr.xr.getSession() : null;
        if (_xrSNF) _xrSNF.updateRenderState({ depthNear: _nf, depthFar: _ff });
    } catch(e) {}
}

// GDevelop's own VR render path unconditionally overwrites every 3D layer's
// threeScene.background each frame (a flat color on the first layer processed,
// null on the rest), destroying any Scene3D::Skybox effect's cube texture as
// soon as a VR session starts - RuntimeScenePixiRenderer.renderForVR() lacks
// the 'if (!threeScene.background)' guard that its flat-preview render() path
// has. Rather than invent an independent skybox mechanism (mirroring/handedness/
// up-axis assumptions each fixed one thing and revealed another across several
// rounds), this rebuilds GDevelop's OWN Scene3D::Skybox cube-texture algorithm
// exactly (Extensions/3D/Skybox.ts + pixi-image-manager.ts's getThreeCubeTexture),
// reusing the same SkyboxRight/Left/Top/Bottom/Front/Back.png images already
// proven correct for flat-preview rendering - no code-side mirroring needed,
// they are already pre-mirrored for exactly this algorithm - then protects the
// result from being clobbered every frame via a get/set trap on
// threeScene.background/environment.
// This project's VR rig already runs in a genuine three.js Z-up space (Three.js
// Z = GDevelop Z, see the rig position-mapping comment a few dozen lines below).
// Property convention: Front/Back = GDevelop +X/-X (the direction faced at
// Angle=0), Right/Left = GDevelop +Y/-Y, Top/Bottom = GDevelop +Z/-Z (zenith/
// nadir). A raw CubeTexture's six array slots are not rotation-agnostic (found
// the hard way over several rounds): the Y-slot pair (now Right/Left) samples
// with its vertical texture axis mapped to world Z, with opposite sign between
// the two faces (one reads upside-down relative to the other), while the X-slot
// and Z-slot pairs (now Front/Back and Top/Bottom) share a different convention
// where the vertical texture axis maps to world Y instead - so a horizon image's
// 'up' gets reinterpreted as a rotation. Confirmed empirically with a labeled
// debug skybox (word label + up-arrow + 4 colored corners per face, tested in VR
// across several passes) and confirmed correct on-device: every one of the three
// slot pairs has its own opposite-sign (180-degree) relationship between its two
// member faces - Front(+90)/Back(+270), Right(0)/Left(+180), Top(0)/Bottom(+180).
// Bottom isn't directly visible from the floor in this demo scene so it wasn't
// independently confirmed, but its real (radially-symmetric) image makes any
// residual error invisible either way.
// Applied below via gdjs._webxrSkyFaceCanvas(img, rotateDeg, flipV), isolated to
// this VR cube texture only - flat preview is untouched.
if (!gdjs._webxrSkyFaceCanvas) {
    gdjs._webxrSkyFaceCanvas = function (img, rotateDeg, flipV) {
        if (!img || (!rotateDeg && !flipV)) return img;
        var _w = img.width || img.naturalWidth || 512;
        var _h = img.height || img.naturalHeight || 512;
        var _rot90 = Math.abs(rotateDeg % 180) === 90;
        var _cv = document.createElement('canvas');
        _cv.width = _rot90 ? _h : _w;
        _cv.height = _rot90 ? _w : _h;
        var _ctx = _cv.getContext('2d');
        _ctx.save();
        _ctx.translate(_cv.width / 2, _cv.height / 2);
        _ctx.rotate(rotateDeg * Math.PI / 180);
        if (flipV) _ctx.scale(1, -1);
        _ctx.drawImage(img, -_w / 2, -_h / 2);
        _ctx.restore();
        return _cv;
    };
}
if (!gdjs._webxrVrSkyCubeTexture) {
    try {
        var _skyBeh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
        var _imgMgr = runtimeScene.getGame().getImageManager();
        if (_skyBeh && _imgMgr) {
            var _skyRight  = _skyBeh._getSkyboxRight  ? _skyBeh._getSkyboxRight()  : '';
            var _skyLeft   = _skyBeh._getSkyboxLeft   ? _skyBeh._getSkyboxLeft()   : '';
            var _skyTop    = _skyBeh._getSkyboxTop    ? _skyBeh._getSkyboxTop()    : '';
            var _skyBottom = _skyBeh._getSkyboxBottom ? _skyBeh._getSkyboxBottom() : '';
            var _skyFront  = _skyBeh._getSkyboxFront  ? _skyBeh._getSkyboxFront()  : '';
            var _skyBack   = _skyBeh._getSkyboxBack   ? _skyBeh._getSkyboxBack()   : '';
            var _getImg = function (name) {
                var _t = name ? _imgMgr.getThreeTexture(name) : null;
                return _t ? _t.image : null;
            };
            // Front/Back -> xPos/xNeg (GDevelop Angle=0 faces +X = Front, Three.js X
            // = GDevelop X, no inversion). Right/Left -> yNeg/yPos (GDevelop +Y =
            // Right, but Three.js Y = -GDevelop Y, so these invert). Top/Bottom ->
            // zPos/zNeg (Three.js Z = GDevelop Z = up, no inversion). Per-face
            // rotation corrections confirmed empirically (see comment above).
            var _imgXPos = gdjs._webxrSkyFaceCanvas(_getImg(_skyFront), 90, false);
            var _imgXNeg = gdjs._webxrSkyFaceCanvas(_getImg(_skyBack), 270, false);
            var _imgYPos = gdjs._webxrSkyFaceCanvas(_getImg(_skyLeft), 180, false);
            var _imgYNeg = gdjs._webxrSkyFaceCanvas(_getImg(_skyRight), 0, false);
            var _imgZPos = gdjs._webxrSkyFaceCanvas(_getImg(_skyTop), 0, false);
            var _imgZNeg = gdjs._webxrSkyFaceCanvas(_getImg(_skyBottom), 180, false);
            if (_imgXPos && _imgXNeg && _imgYPos && _imgYNeg && _imgZPos && _imgZNeg) {
                var _cubeTex = new THREE.CubeTexture();
                // Faces on X axis need to be swapped - matches GDevelop's own algorithm exactly.
                _cubeTex.images[0] = _imgXNeg;
                _cubeTex.images[1] = _imgXPos;
                _cubeTex.images[2] = _imgYPos;
                _cubeTex.images[3] = _imgYNeg;
                _cubeTex.images[4] = _imgZPos;
                _cubeTex.images[5] = _imgZNeg;
                _cubeTex.magFilter = THREE.LinearFilter;
                _cubeTex.minFilter = THREE.LinearFilter;
                _cubeTex.colorSpace = THREE.SRGBColorSpace;
                _cubeTex.needsUpdate = true;
                gdjs._webxrVrSkyCubeTexture = _cubeTex;
                if (typeof gdjs._webxrVrDbg === 'function') gdjs._webxrVrDbg('VR skybox cube texture built');
            }
        }
    } catch (e7) {
        if (typeof gdjs._webxrVrDbg === 'function') gdjs._webxrVrDbg('VR skybox build failed', e7 && e7.message);
    }
}
if (gdjs._webxrVrSkyCubeTexture) {
    try {
        if (!gdjs._webxrVrSkyTrappedScenes) gdjs._webxrVrSkyTrappedScenes = new WeakSet();
        var _skyThreeScene = runtimeScene.getLayer('').getRenderer().getThreeScene();
        if (_skyThreeScene && !gdjs._webxrVrSkyTrappedScenes.has(_skyThreeScene)) {
            Object.defineProperty(_skyThreeScene, 'background', {
                configurable: true,
                get: function () { return gdjs._webxrVrSkyCubeTexture; },
                set: function () {}
            });
            Object.defineProperty(_skyThreeScene, 'environment', {
                configurable: true,
                get: function () { return gdjs._webxrVrSkyCubeTexture; },
                set: function () {}
            });
            gdjs._webxrVrSkyTrappedScenes.add(_skyThreeScene);
            if (typeof gdjs._webxrVrDbg === 'function') gdjs._webxrVrDbg('VR skybox scene trapped');
        }
    } catch (e8) {
        if (typeof gdjs._webxrVrDbg === 'function') gdjs._webxrVrDbg('VR skybox trap failed', e8 && e8.message);
    }
}

gdjs._webxrDebugThrow = false;

var cam = runtimeScene.getLayer('').getRenderer().getThreeCamera();
var _camJustAdded = false;
if (cam && cam.parent !== rig) {
    try {
        rig.add(cam);
        rig._vrCamAdded = true;
        _camJustAdded = true;
        if (typeof gdjs._webxrVrDbg === 'function') {
            gdjs._webxrVrDbg('camera parented to vrRig');
        }
    } catch(e) {}
}

var ws = gdjs._webxrVrWorldScale || 100;

for (var i = 0; i < objs.length; i++) {
    var obj = objs[i];
    var beh = obj.getBehavior(behaviorName);
    if (!beh || !beh.activated()) continue;
    if (!obj.get3DRendererObject) continue;

    var angle = -obj.getAngle();
    var halfA = angle * Math.PI / 360;
    var sz = Math.sin(halfA);
    var cz = Math.cos(halfA);
    var qx = 0.5 * (cz + sz);
    var qy = 0.5 * (sz - cz);
    var qz = 0.5 * (sz - cz);
    var qw = 0.5 * (cz + sz);

    // Compute rig position directly from GDevelop object coordinates.
    // Axis mapping: Three.js X = GDevelop X, Three.js Y = -GDevelop Y, Three.js Z = GDevelop Z.
    // For Model3D with originLocation='ModelOrigin', obj.getX/Y() already returns
    // the model's origin which is its geometric centre — no half-extent offset needed.
    var threeRigX = obj.getX();
    var threeRigY = -obj.getY();
    var threeRigZ = obj.getZ();

    // Pass 1: set rig at floor level to sample real headset height.
    rig.position.set(threeRigX, threeRigY, threeRigZ);
    rig.quaternion.set(qx, qy, qz, qw);
    rig.scale.set(ws, ws, ws);
    rig.updateMatrixWorld(true);

    // Headset height: camera world Z minus rig Z gives head height in game units.
    // The rig rotation always maps XR Y (up) to scene Z (GDevelop up), regardless of yaw.
    try {
        var _hCam = runtimeScene.getLayer('').getRenderer().getThreeCamera();
        if (_hCam) {
            var _hWP = new THREE.Vector3();
            _hCam.getWorldPosition(_hWP);
            beh._headsetHeight = _hWP.z - threeRigZ;
            gdjs._webxrVrHeadWorld = (gdjs._webxrVrHeadWorld || new THREE.Vector3()).copy(_hWP);
        }
    } catch(e) {}
    // Cache HMD orientation in GDevelop-space Euler angles (degrees).
    try {
        var _rCam = runtimeScene.getLayer('').getRenderer().getThreeCamera();
        if (_rCam) {
            var _qfc = new THREE.Quaternion(0.5, -0.5, -0.5, 0.5);
            var _camGd = _qfc.clone().multiply(_rCam.quaternion).multiply(_qfc.clone().conjugate());
            var _hmdYawRad = angle * Math.PI / 180;
            var _headQ = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 0, 1), _hmdYawRad).multiply(_camGd);
            var _headEu = new THREE.Euler().setFromQuaternion(_headQ, 'ZYX');
            beh._headYaw   = _headEu.z * 180 / Math.PI;
            beh._headPitch = _headEu.x * 180 / Math.PI;
            beh._headRoll  = _headEu.y * 180 / Math.PI;
        }
    } catch(e) {}
    // Virtual-torso yaw: head-driven, deadzone-leashed body heading that drives
    // holsters (VrBodyZones body zones), body-relative followers (VrFollower AnchorYaw),
    // and head-relative movement (MovementDirectionMode Head).
    // Always computed regardless of MovementDirectionMode so holsters follow physical
    // turning even during teleport or Off locomotion.
    try {
        if (!beh._torsoYawInit) {
            beh._torsoYaw = obj.getAngle();
            beh._torsoYawInit = true;
        }
        var _torsoTarget = -beh._headYaw;
        var _bodyDeadzone = beh._getBodyYawDeadzone ? Number(beh._getBodyYawDeadzone()) : 45;
        if (_bodyDeadzone <= 0) {
            beh._torsoYaw = _torsoTarget;
        } else {
            var _tDelta = ((_torsoTarget - beh._torsoYaw) % 360 + 540) % 360 - 180;
            var _tEdge;
            if (_tDelta > _bodyDeadzone) {
                _tEdge = _torsoTarget - _bodyDeadzone;
            } else if (_tDelta < -_bodyDeadzone) {
                _tEdge = _torsoTarget + _bodyDeadzone;
            } else {
                _tEdge = beh._torsoYaw;
            }
            var _bodySmoothing = beh._getBodyYawSmoothing ? Number(beh._getBodyYawSmoothing()) : 0;
            if (_bodySmoothing > 0) {
                var _tDt = runtimeScene.getGame().getElapsedTime() / 1000;
                var _tStepMax = _bodySmoothing * _tDt;
                var _tDiff = ((_tEdge - beh._torsoYaw) % 360 + 540) % 360 - 180;
                beh._torsoYaw = beh._torsoYaw + Math.sign(_tDiff) * Math.min(Math.abs(_tDiff), _tStepMax);
            } else {
                beh._torsoYaw = _tEdge;
            }
        }
        beh._torsoYaw = ((beh._torsoYaw % 360) + 360) % 360;
    } catch(e) {}


    // Pass 2: apply vertical offset (crouch + virtual height) to the rig.
    var _crouchF = Number(beh._getCrouchHeightFactor ? beh._getCrouchHeightFactor() : 0.5);
    var _crouchOff = beh._isCrouching ? -(beh._headsetHeight * (1 - _crouchF)) : 0;
    var _virtH = Number(beh._getVirtualHeight ? beh._getVirtualHeight() : 0);
    var _virtOff = (_virtH > 0 && beh._headsetHeight > 0) ? (_virtH - beh._headsetHeight) : 0;
    beh._verticalOffset = _crouchOff + _virtOff;
    if (beh._verticalOffset) {
        rig.position.z = threeRigZ + beh._verticalOffset;
        rig.updateMatrixWorld(true);
    }

    gdjs._webxrVrAnchor = {
        x: obj.getX(), y: obj.getY(), z: obj.getZ(),
        threeX: threeRigX, threeY: threeRigY, threeZ: threeRigZ,
        angle: angle,
        bodyYaw: beh._torsoYaw != null ? -beh._torsoYaw : angle,
        runtimeScene: runtimeScene,
        _verticalOffset: beh._verticalOffset || 0
    };
    gdjs._webxrVrAnchorObject = obj;

    // On scene-change frames (camera just re-parented): remove stale cameras from the rig
    // and re-sync controller position + rotation immediately, instead of waiting a frame
    // for VrController.doStepPostEvents. Rotation uses the same fixed model-space
    // correction as doStepPostEvents (design-time mesh orientation + RotationOffset);
    // it is skipped for one frame if the new scene's mesh hasn't finished loading yet,
    // since doStepPreEvents/doStepPostEvents will pick it up within a frame or two.
    if (_camJustAdded) {
        var _rigChildren = rig.children.slice();
        for (var _rci = 0; _rci < _rigChildren.length; _rci++) {
            if (_rigChildren[_rci] !== cam && _rigChildren[_rci].isCamera) { rig.remove(_rigChildren[_rci]); }
        }
        var _rssCtrls = gdjs._webxrVrControllers;
        if (_rssCtrls) {
            var _rssHands = ['left', 'right'];
            for (var _rssHi = 0; _rssHi < _rssHands.length; _rssHi++) {
                var _rssCe = _rssCtrls[_rssHands[_rssHi]];
                if (!_rssCe || !_rssCe.grip || !_rssCe.gdObject) continue;
                // Position re-sync.
                var _rssWp = new THREE.Vector3();
                _rssCe.grip.getWorldPosition(_rssWp);
                _rssCe.gdObject.setX(_rssWp.x);
                _rssCe.gdObject.setY(-_rssWp.y);
                _rssCe.gdObject.setZ(_rssWp.z);
                _rssCe.grip.updateMatrixWorld(true);
                // Rotation: skip until this scene's mesh orientation has been captured.
                if (!_rssCe.vrBeh || !_rssCe.vrBeh._qMeshInit) continue;
                var _rssWq = new THREE.Quaternion();
                _rssCe.grip.getWorldQuaternion(_rssWq);
                var _rssWqLocal = new THREE.Quaternion(-_rssWq.x, _rssWq.y, -_rssWq.z, _rssWq.w);
                var _rssQFinal = _rssWqLocal.clone().multiply(gdjs._webxrControllerCorrection(_rssCe.vrBeh));
                var _rssEu = new THREE.Euler().setFromQuaternion(_rssQFinal, 'ZYX');
                _rssCe.gdObject.setAngle(_rssEu.z * 180 / Math.PI);
                if (_rssCe.gdObject.setRotationX) _rssCe.gdObject.setRotationX(_rssEu.x * 180 / Math.PI);
                if (_rssCe.gdObject.setRotationY) _rssCe.gdObject.setRotationY(_rssEu.y * 180 / Math.PI);
                var _rssTObj = _rssCe.gdObject.get3DRendererObject ? _rssCe.gdObject.get3DRendererObject() : null;
                if (_rssTObj) { _rssTObj.quaternion.copy(_rssQFinal); _rssTObj.updateMatrix(); }
            }
        }
    }

    // Mark rig as current for this frame so _webxrVrEnsureRigCurrent is a no-op
    // when called by other postEvents behaviors this same frame.
    gdjs._webxrVrRigFrame = gdjs._webxrVrFrame;
    break;
}
};
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.doStepPostEventsContext.userFunc0x1770870(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.HeadsetHeightContext = {};
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.HeadsetHeightContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.HeadsetHeightContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.HeadsetHeightContext.userFunc0x1853380 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh ? (beh._headsetHeight || 0) : 0;
};
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.HeadsetHeightContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.HeadsetHeightContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.HeadsetHeightContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.HeadsetHeightContext.userFunc0x1853380(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.HeadsetHeight = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.HeadsetHeightContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.HeadsetHeightContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.HeadsetHeightContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.HeadYawContext = {};
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.HeadYawContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.HeadYawContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.HeadYawContext.userFunc0x18536a0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh ? (beh._headYaw || 0) : 0;
};
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.HeadYawContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.HeadYawContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.HeadYawContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.HeadYawContext.userFunc0x18536a0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.HeadYaw = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.HeadYawContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.HeadYawContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.HeadYawContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.HeadPitchContext = {};
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.HeadPitchContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.HeadPitchContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.HeadPitchContext.userFunc0x1770df0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh ? (beh._headPitch || 0) : 0;
};
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.HeadPitchContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.HeadPitchContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.HeadPitchContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.HeadPitchContext.userFunc0x1770df0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.HeadPitch = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.HeadPitchContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.HeadPitchContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.HeadPitchContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.HeadRollContext = {};
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.HeadRollContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.HeadRollContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.HeadRollContext.userFunc0x1793978 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh ? (beh._headRoll || 0) : 0;
};
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.HeadRollContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.HeadRollContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.HeadRollContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.HeadRollContext.userFunc0x1793978(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.HeadRoll = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.HeadRollContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.HeadRollContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.HeadRollContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.StartCrouchingContext = {};
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.StartCrouchingContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.StartCrouchingContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.StartCrouchingContext.userFunc0x15fcc40 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
for (var i = 0; i < objs.length; i++) {
    var obj = objs[i];
    var beh = obj.getBehavior(behaviorName);
    if (!beh || !beh.activated()) continue;
    if (beh._isCrouching) continue;
    beh._isCrouching = true;
    var phys = null;
    try { phys = obj.getBehavior('Physics3D'); } catch(e) {}
    if (phys && typeof phys.setShapeScale === 'function') {
        var _s = Number(beh._getCrouchScale ? beh._getCrouchScale() : 0.5);
        beh._savedShapeScale = Number(phys.shapeScale) || 1;
        phys.setShapeScale(beh._savedShapeScale * _s);
    }
}
};
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.StartCrouchingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.StartCrouchingContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.StartCrouchingContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.StartCrouchingContext.userFunc0x15fcc40(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.StartCrouching = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.StartCrouchingContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.StartCrouchingContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.StartCrouchingContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.StopCrouchingContext = {};
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.StopCrouchingContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.StopCrouchingContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.StopCrouchingContext.userFunc0x1770df0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
if (!gdjs._webxrCanStopCrouching) {
    gdjs._webxrCanStopCrouching = function(beh, scene) {
        if (!beh._isCrouching) return {canStop: true, hit: null};
        try {
            var cam = scene.getLayer('').getRenderer().getThreeCamera();
            if (!cam) return {canStop: true, hit: null};
            var crouchF = Number(beh._getCrouchHeightFactor ? beh._getCrouchHeightFactor() : 0.5);
            var gap = beh._headsetHeight * (1 - crouchF);
            if (gap <= 0) return {canStop: true, hit: null};
            var origin = cam.getWorldPosition(new THREE.Vector3());
            var rcUp = new THREE.Raycaster(origin, new THREE.Vector3(0, 0, 1), 0.001, gap);
            var _crLr = scene.getLayer('');
            var _crLr3d = _crLr && _crLr.getRenderer ? _crLr.getRenderer() : null;
            var _crScene = _crLr3d ? (_crLr3d._threeScene || _crLr3d.threeScene || (_crLr3d.getThreeScene ? _crLr3d.getThreeScene() : null)) : null;
            if (!_crScene) return {canStop: true, hit: null};
            var hits = rcUp.intersectObjects(_crScene.children, true);
            // Ignore objects currently holstered (VrBodyZones or VrHolster): they sit in the
            // head/body zone and would otherwise falsely block standing up. Mirrors the laser
            // raycast's skipMeshes pattern.
            var _crSkip = new Set();
            if (gdjs._webxrVrGrabbableRegistry) {
                for (var _cgi = 0; _cgi < gdjs._webxrVrGrabbableRegistry.length; _cgi++) {
                    var _cge = gdjs._webxrVrGrabbableRegistry[_cgi];
                    if (_cge.beh && _cge.beh._holsterEntry && _cge.beh._holsterEntry.occupant) {
                        var _cgm = _cge.obj.get3DRendererObject ? _cge.obj.get3DRendererObject() : null;
                        if (_cgm) _cgm.traverse(function(ch) { if (ch.isMesh) _crSkip.add(ch); });
                    }
                }
            }
            var firstHit = null;
            for (var _hi = 0; _hi < hits.length; _hi++) {
                if ((!gdjs._webxrHitIsController || !gdjs._webxrHitIsController(hits[_hi])) && !_crSkip.has(hits[_hi].object)) {
                    firstHit = hits[_hi]; break;
                }
            }
            return {canStop: !firstHit, hit: firstHit || null};
        } catch(e) { return {canStop: true, hit: null}; }
    };
}
for (var i = 0; i < objs.length; i++) {
    var obj = objs[i];
    var beh = obj.getBehavior(behaviorName);
    if (!beh || !beh.activated()) continue;
    if (!beh._isCrouching) continue;
    var _csc = gdjs._webxrCanStopCrouching(beh, runtimeScene);
    if (!_csc.canStop) {
        var _now = Date.now();
        if (!beh._lastStopBonkAt || _now - beh._lastStopBonkAt >= 250) {
            beh._lastStopBonkAt = _now;
            try {
                var tr = runtimeScene.getGame().getRenderer().getThreeRenderer();
                if (tr && tr.xr) {
                    var _sess = tr.xr.getSession ? tr.xr.getSession() : null;
                    if (_sess && _sess.inputSources) {
                        var _hands = ['left', 'right'];
                        for (var _h = 0; _h < _hands.length; _h++) {
                            for (var _si = 0; _si < _sess.inputSources.length; _si++) {
                                var _src = _sess.inputSources[_si];
                                if (_src.handedness === _hands[_h] && _src.gamepad &&
                                    _src.gamepad.hapticActuators && _src.gamepad.hapticActuators.length > 0) {
                                    _src.gamepad.hapticActuators[0].pulse(0.4, 80);
                                    break;
                                }
                            }
                        }
                    }
                }
            } catch(e) {}
        }
        continue;
    }
    beh._isCrouching = false;
    if (beh._savedShapeScale != null) {
        var phys = null;
        try { phys = obj.getBehavior('Physics3D'); } catch(e) {}
        if (phys && typeof phys.setShapeScale === 'function') {
            phys.setShapeScale(beh._savedShapeScale);
        }
        beh._savedShapeScale = null;
    }
}
};
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.StopCrouchingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.StopCrouchingContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.StopCrouchingContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.StopCrouchingContext.userFunc0x1770df0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.StopCrouching = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.StopCrouchingContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.StopCrouchingContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.StopCrouchingContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.IsCrouchingContext = {};
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.IsCrouchingContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.IsCrouchingContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.IsCrouchingContext.userFunc0x1770f08 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = !!(beh && beh._isCrouching);
};
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.IsCrouchingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.IsCrouchingContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.IsCrouchingContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.IsCrouchingContext.userFunc0x1770f08(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.IsCrouching = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.IsCrouchingContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.IsCrouchingContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.IsCrouchingContext.GDObjectObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.CanStopCrouchingContext = {};
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.CanStopCrouchingContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.CanStopCrouchingContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.CanStopCrouchingContext.userFunc0x18ff670 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
if (!gdjs._webxrCanStopCrouching) {
    gdjs._webxrCanStopCrouching = function(beh, scene) {
        if (!beh._isCrouching) return {canStop: true, hit: null};
        try {
            var cam = scene.getLayer('').getRenderer().getThreeCamera();
            if (!cam) return {canStop: true, hit: null};
            var crouchF = Number(beh._getCrouchHeightFactor ? beh._getCrouchHeightFactor() : 0.5);
            var gap = beh._headsetHeight * (1 - crouchF);
            if (gap <= 0) return {canStop: true, hit: null};
            var origin = cam.getWorldPosition(new THREE.Vector3());
            var rcUp = new THREE.Raycaster(origin, new THREE.Vector3(0, 0, 1), 0.001, gap);
            var _crLr = scene.getLayer('');
            var _crLr3d = _crLr && _crLr.getRenderer ? _crLr.getRenderer() : null;
            var _crScene = _crLr3d ? (_crLr3d._threeScene || _crLr3d.threeScene || (_crLr3d.getThreeScene ? _crLr3d.getThreeScene() : null)) : null;
            if (!_crScene) return {canStop: true, hit: null};
            var hits = rcUp.intersectObjects(_crScene.children, true);
            // Ignore objects currently holstered (VrBodyZones or VrHolster): they sit in the
            // head/body zone and would otherwise falsely block standing up. Mirrors the laser
            // raycast's skipMeshes pattern.
            var _crSkip = new Set();
            if (gdjs._webxrVrGrabbableRegistry) {
                for (var _cgi = 0; _cgi < gdjs._webxrVrGrabbableRegistry.length; _cgi++) {
                    var _cge = gdjs._webxrVrGrabbableRegistry[_cgi];
                    if (_cge.beh && _cge.beh._holsterEntry && _cge.beh._holsterEntry.occupant) {
                        var _cgm = _cge.obj.get3DRendererObject ? _cge.obj.get3DRendererObject() : null;
                        if (_cgm) _cgm.traverse(function(ch) { if (ch.isMesh) _crSkip.add(ch); });
                    }
                }
            }
            var firstHit = null;
            for (var _hi = 0; _hi < hits.length; _hi++) {
                if ((!gdjs._webxrHitIsController || !gdjs._webxrHitIsController(hits[_hi])) && !_crSkip.has(hits[_hi].object)) {
                    firstHit = hits[_hi]; break;
                }
            }
            return {canStop: !firstHit, hit: firstHit || null};
        } catch(e) { return {canStop: true, hit: null}; }
    };
}
eventsFunctionContext.returnValue = beh ? gdjs._webxrCanStopCrouching(beh, runtimeScene).canStop : true;
};
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.CanStopCrouchingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.CanStopCrouchingContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.CanStopCrouchingContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.CanStopCrouchingContext.userFunc0x18ff670(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.CanStopCrouching = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.CanStopCrouchingContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.CanStopCrouchingContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.CanStopCrouchingContext.GDObjectObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetCrouchScaleContext = {};
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetCrouchScaleContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetCrouchScaleContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetCrouchScaleContext.userFunc0x18535a0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var v = Number(eventsFunctionContext.getArgument("Scale"));
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh && beh._setCrouchScale) beh._setCrouchScale(String(v));
}
};
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetCrouchScaleContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetCrouchScaleContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetCrouchScaleContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetCrouchScaleContext.userFunc0x18535a0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetCrouchScale = function(Scale, parentEventsFunctionContext) {

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
if (argName === "Scale") return Scale;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetCrouchScaleContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetCrouchScaleContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetCrouchScaleContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.CrouchScaleContext = {};
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.CrouchScaleContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.CrouchScaleContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.CrouchScaleContext.userFunc0x17fc220 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh && beh._getCrouchScale ? Number(beh._getCrouchScale()) : 0.5;
};
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.CrouchScaleContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.CrouchScaleContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.CrouchScaleContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.CrouchScaleContext.userFunc0x17fc220(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.CrouchScale = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.CrouchScaleContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.CrouchScaleContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.CrouchScaleContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetCrouchHeightFactorContext = {};
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetCrouchHeightFactorContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetCrouchHeightFactorContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetCrouchHeightFactorContext.userFunc0x1853690 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var v = Number(eventsFunctionContext.getArgument("Factor"));
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh && beh._setCrouchHeightFactor) beh._setCrouchHeightFactor(String(v));
}
};
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetCrouchHeightFactorContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetCrouchHeightFactorContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetCrouchHeightFactorContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetCrouchHeightFactorContext.userFunc0x1853690(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetCrouchHeightFactor = function(Factor, parentEventsFunctionContext) {

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
if (argName === "Factor") return Factor;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetCrouchHeightFactorContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetCrouchHeightFactorContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetCrouchHeightFactorContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.CrouchHeightFactorContext = {};
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.CrouchHeightFactorContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.CrouchHeightFactorContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.CrouchHeightFactorContext.userFunc0x19009e8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh && beh._getCrouchHeightFactor ? Number(beh._getCrouchHeightFactor()) : 0.5;
};
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.CrouchHeightFactorContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.CrouchHeightFactorContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.CrouchHeightFactorContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.CrouchHeightFactorContext.userFunc0x19009e8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.CrouchHeightFactor = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.CrouchHeightFactorContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.CrouchHeightFactorContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.CrouchHeightFactorContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetVirtualHeightContext = {};
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetVirtualHeightContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetVirtualHeightContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetVirtualHeightContext.userFunc0x1853618 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var v = Number(eventsFunctionContext.getArgument("Height"));
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh && beh._setVirtualHeight) beh._setVirtualHeight(String(v));
}
};
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetVirtualHeightContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetVirtualHeightContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetVirtualHeightContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetVirtualHeightContext.userFunc0x1853618(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetVirtualHeight = function(Height, parentEventsFunctionContext) {

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
if (argName === "Height") return Height;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetVirtualHeightContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetVirtualHeightContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetVirtualHeightContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.IsVirtualHeightEnabledContext = {};
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.IsVirtualHeightEnabledContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.IsVirtualHeightEnabledContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.IsVirtualHeightEnabledContext.userFunc0x1853630 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
var h = beh && beh._getVirtualHeight ? Number(beh._getVirtualHeight()) : 0;
eventsFunctionContext.returnValue = h > 0;
};
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.IsVirtualHeightEnabledContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.IsVirtualHeightEnabledContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.IsVirtualHeightEnabledContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.IsVirtualHeightEnabledContext.userFunc0x1853630(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.IsVirtualHeightEnabled = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.IsVirtualHeightEnabledContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.IsVirtualHeightEnabledContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.IsVirtualHeightEnabledContext.GDObjectObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.VirtualHeightContext = {};
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.VirtualHeightContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.VirtualHeightContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.VirtualHeightContext.userFunc0x17ef330 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh && beh._getVirtualHeight ? Number(beh._getVirtualHeight()) : 0;
};
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.VirtualHeightContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.VirtualHeightContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.VirtualHeightContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.VirtualHeightContext.userFunc0x17ef330(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.VirtualHeight = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.VirtualHeightContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.VirtualHeightContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.VirtualHeightContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.EffectiveHeightContext = {};
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.EffectiveHeightContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.EffectiveHeightContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.EffectiveHeightContext.userFunc0x19008f0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
if (!beh) { eventsFunctionContext.returnValue = 0; } else {
    var h = beh._getVirtualHeight ? Number(beh._getVirtualHeight()) : 0;
    eventsFunctionContext.returnValue = h > 0 ? h : (beh._headsetHeight || 0);
}
};
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.EffectiveHeightContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.EffectiveHeightContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.EffectiveHeightContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.EffectiveHeightContext.userFunc0x19008f0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.EffectiveHeight = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.EffectiveHeightContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.EffectiveHeightContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.EffectiveHeightContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.MovementForwardAngleContext = {};
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.MovementForwardAngleContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.MovementForwardAngleContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.MovementForwardAngleContext.userFunc0x1853b38 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
if (!beh) { eventsFunctionContext.returnValue = 0; } else {
    var _mvMode = beh._getMovementDirectionMode ? beh._getMovementDirectionMode() : 'Head';
    if (_mvMode === 'Off') {
        eventsFunctionContext.returnValue = objs[0].getAngle();
    } else if (_mvMode === 'Controller') {
        var _mvHand = (beh._getMovementControllerHand ? beh._getMovementControllerHand() : 'left').toLowerCase();
        var _mvCtrl = gdjs._webxrVrControllers ? gdjs._webxrVrControllers[_mvHand] : null;
        eventsFunctionContext.returnValue = (_mvCtrl && _mvCtrl.gdObject) ? _mvCtrl.gdObject.getAngle() : (beh._torsoYaw != null ? beh._torsoYaw : objs[0].getAngle());
    } else {
        eventsFunctionContext.returnValue = beh._torsoYaw != null ? beh._torsoYaw : objs[0].getAngle();
    }
}
};
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.MovementForwardAngleContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.MovementForwardAngleContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.MovementForwardAngleContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.MovementForwardAngleContext.userFunc0x1853b38(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.MovementForwardAngle = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.MovementForwardAngleContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.MovementForwardAngleContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.MovementForwardAngleContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.HeadBodyYawOffsetContext = {};
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.HeadBodyYawOffsetContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.HeadBodyYawOffsetContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.HeadBodyYawOffsetContext.userFunc0x1900920 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
if (!beh) { eventsFunctionContext.returnValue = 0; } else {
    var _headPa = -(beh._headYaw || 0);
    var _mvYaw = beh._torsoYaw != null ? beh._torsoYaw : objs[0].getAngle();
    eventsFunctionContext.returnValue = ((_headPa - _mvYaw) % 360 + 540) % 360 - 180;
}
};
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.HeadBodyYawOffsetContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.HeadBodyYawOffsetContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.HeadBodyYawOffsetContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.HeadBodyYawOffsetContext.userFunc0x1900920(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.HeadBodyYawOffset = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.HeadBodyYawOffsetContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.HeadBodyYawOffsetContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.HeadBodyYawOffsetContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.BodyYawContext = {};
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.BodyYawContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.BodyYawContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.BodyYawContext.userFunc0x17ef1d8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
if (!beh) { eventsFunctionContext.returnValue = 0; } else {
    eventsFunctionContext.returnValue = beh._torsoYaw != null ? beh._torsoYaw : objs[0].getAngle();
}
};
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.BodyYawContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.BodyYawContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.BodyYawContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.BodyYawContext.userFunc0x17ef1d8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.BodyYaw = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.BodyYawContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.BodyYawContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.BodyYawContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetMovementDirectionModeContext = {};
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetMovementDirectionModeContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetMovementDirectionModeContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetMovementDirectionModeContext.userFunc0x19009b0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var v = eventsFunctionContext.getArgument("Mode");
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh && beh._setMovementDirectionMode) beh._setMovementDirectionMode(String(v));
}
};
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetMovementDirectionModeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetMovementDirectionModeContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetMovementDirectionModeContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetMovementDirectionModeContext.userFunc0x19009b0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetMovementDirectionMode = function(Mode, parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetMovementDirectionModeContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetMovementDirectionModeContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetMovementDirectionModeContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.MovementDirectionModeContext = {};
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.MovementDirectionModeContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.MovementDirectionModeContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.MovementDirectionModeContext.userFunc0x18536b0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh && beh._getMovementDirectionMode ? String(beh._getMovementDirectionMode()) : 'Head';
};
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.MovementDirectionModeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.MovementDirectionModeContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.MovementDirectionModeContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.MovementDirectionModeContext.userFunc0x18536b0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.MovementDirectionMode = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.MovementDirectionModeContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.MovementDirectionModeContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.MovementDirectionModeContext.GDObjectObjects1.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetBodyYawDeadzoneContext = {};
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetBodyYawDeadzoneContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetBodyYawDeadzoneContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetBodyYawDeadzoneContext.userFunc0x1851db0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var v = Number(eventsFunctionContext.getArgument("Deadzone"));
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh && beh._setBodyYawDeadzone) beh._setBodyYawDeadzone(String(v));
}
};
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetBodyYawDeadzoneContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetBodyYawDeadzoneContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetBodyYawDeadzoneContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetBodyYawDeadzoneContext.userFunc0x1851db0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetBodyYawDeadzone = function(Deadzone, parentEventsFunctionContext) {

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
if (argName === "Deadzone") return Deadzone;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetBodyYawDeadzoneContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetBodyYawDeadzoneContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetBodyYawDeadzoneContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.BodyYawDeadzoneContext = {};
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.BodyYawDeadzoneContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.BodyYawDeadzoneContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.BodyYawDeadzoneContext.userFunc0x15f30b8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh && beh._getBodyYawDeadzone ? Number(beh._getBodyYawDeadzone()) : 30;
};
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.BodyYawDeadzoneContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.BodyYawDeadzoneContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.BodyYawDeadzoneContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.BodyYawDeadzoneContext.userFunc0x15f30b8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.BodyYawDeadzone = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.BodyYawDeadzoneContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.BodyYawDeadzoneContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.BodyYawDeadzoneContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetBodyYawSmoothingContext = {};
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetBodyYawSmoothingContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetBodyYawSmoothingContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetBodyYawSmoothingContext.userFunc0x1853b68 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var v = Number(eventsFunctionContext.getArgument("Smoothing"));
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh && beh._setBodyYawSmoothing) beh._setBodyYawSmoothing(String(v));
}
};
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetBodyYawSmoothingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetBodyYawSmoothingContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetBodyYawSmoothingContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetBodyYawSmoothingContext.userFunc0x1853b68(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetBodyYawSmoothing = function(Smoothing, parentEventsFunctionContext) {

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
if (argName === "Smoothing") return Smoothing;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetBodyYawSmoothingContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetBodyYawSmoothingContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetBodyYawSmoothingContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.BodyYawSmoothingContext = {};
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.BodyYawSmoothingContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.BodyYawSmoothingContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.BodyYawSmoothingContext.userFunc0x15f47c8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh && beh._getBodyYawSmoothing ? Number(beh._getBodyYawSmoothing()) : 0;
};
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.BodyYawSmoothingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.BodyYawSmoothingContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.BodyYawSmoothingContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.BodyYawSmoothingContext.userFunc0x15f47c8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.BodyYawSmoothing = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.BodyYawSmoothingContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.BodyYawSmoothingContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.BodyYawSmoothingContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetMovementControllerHandContext = {};
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetMovementControllerHandContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetMovementControllerHandContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetMovementControllerHandContext.userFunc0x15f4858 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var v = eventsFunctionContext.getArgument("Hand");
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh && beh._setMovementControllerHand) beh._setMovementControllerHand(String(v));
}
};
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetMovementControllerHandContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetMovementControllerHandContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetMovementControllerHandContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetMovementControllerHandContext.userFunc0x15f4858(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetMovementControllerHand = function(Hand, parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetMovementControllerHandContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetMovementControllerHandContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetMovementControllerHandContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.MovementControllerHandContext = {};
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.MovementControllerHandContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.MovementControllerHandContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.MovementControllerHandContext.userFunc0x15f47c8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh && beh._getMovementControllerHand ? String(beh._getMovementControllerHand()) : 'left';
};
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.MovementControllerHandContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.MovementControllerHandContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.MovementControllerHandContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.MovementControllerHandContext.userFunc0x15f47c8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.MovementControllerHand = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.MovementControllerHandContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.MovementControllerHandContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.MovementControllerHandContext.GDObjectObjects1.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetSkyboxRightContext = {};
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetSkyboxRightContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetSkyboxRightContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetSkyboxRightContext.userFunc0x15f47c0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var v = String(eventsFunctionContext.getArgument("Value"));
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh && beh._setSkyboxRight) beh._setSkyboxRight(v);
}
// Invalidate the cached VR cube texture so the next VR frame rebuilds it
// from the updated property values (see VrHeadAnchor.doStepPostEvents).
gdjs._webxrVrSkyCubeTexture = null;
gdjs._webxrVrSkyTrappedScenes = null;
};
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetSkyboxRightContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetSkyboxRightContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetSkyboxRightContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetSkyboxRightContext.userFunc0x15f47c0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetSkyboxRight = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetSkyboxRightContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetSkyboxRightContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetSkyboxRightContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SkyboxRightContext = {};
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SkyboxRightContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SkyboxRightContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SkyboxRightContext.userFunc0x15f4798 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh && beh._getSkyboxRight ? String(beh._getSkyboxRight()) : '';
};
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SkyboxRightContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SkyboxRightContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SkyboxRightContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SkyboxRightContext.userFunc0x15f4798(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SkyboxRight = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SkyboxRightContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SkyboxRightContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SkyboxRightContext.GDObjectObjects1.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetSkyboxLeftContext = {};
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetSkyboxLeftContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetSkyboxLeftContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetSkyboxLeftContext.userFunc0x15f47c0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var v = String(eventsFunctionContext.getArgument("Value"));
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh && beh._setSkyboxLeft) beh._setSkyboxLeft(v);
}
// Invalidate the cached VR cube texture so the next VR frame rebuilds it
// from the updated property values (see VrHeadAnchor.doStepPostEvents).
gdjs._webxrVrSkyCubeTexture = null;
gdjs._webxrVrSkyTrappedScenes = null;
};
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetSkyboxLeftContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetSkyboxLeftContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetSkyboxLeftContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetSkyboxLeftContext.userFunc0x15f47c0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetSkyboxLeft = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetSkyboxLeftContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetSkyboxLeftContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetSkyboxLeftContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SkyboxLeftContext = {};
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SkyboxLeftContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SkyboxLeftContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SkyboxLeftContext.userFunc0x15f4740 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh && beh._getSkyboxLeft ? String(beh._getSkyboxLeft()) : '';
};
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SkyboxLeftContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SkyboxLeftContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SkyboxLeftContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SkyboxLeftContext.userFunc0x15f4740(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SkyboxLeft = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SkyboxLeftContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SkyboxLeftContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SkyboxLeftContext.GDObjectObjects1.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetSkyboxTopContext = {};
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetSkyboxTopContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetSkyboxTopContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetSkyboxTopContext.userFunc0x15f47c0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var v = String(eventsFunctionContext.getArgument("Value"));
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh && beh._setSkyboxTop) beh._setSkyboxTop(v);
}
// Invalidate the cached VR cube texture so the next VR frame rebuilds it
// from the updated property values (see VrHeadAnchor.doStepPostEvents).
gdjs._webxrVrSkyCubeTexture = null;
gdjs._webxrVrSkyTrappedScenes = null;
};
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetSkyboxTopContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetSkyboxTopContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetSkyboxTopContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetSkyboxTopContext.userFunc0x15f47c0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetSkyboxTop = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetSkyboxTopContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetSkyboxTopContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetSkyboxTopContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SkyboxTopContext = {};
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SkyboxTopContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SkyboxTopContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SkyboxTopContext.userFunc0x15f4740 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh && beh._getSkyboxTop ? String(beh._getSkyboxTop()) : '';
};
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SkyboxTopContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SkyboxTopContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SkyboxTopContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SkyboxTopContext.userFunc0x15f4740(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SkyboxTop = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SkyboxTopContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SkyboxTopContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SkyboxTopContext.GDObjectObjects1.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetSkyboxBottomContext = {};
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetSkyboxBottomContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetSkyboxBottomContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetSkyboxBottomContext.userFunc0x15f47c0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var v = String(eventsFunctionContext.getArgument("Value"));
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh && beh._setSkyboxBottom) beh._setSkyboxBottom(v);
}
// Invalidate the cached VR cube texture so the next VR frame rebuilds it
// from the updated property values (see VrHeadAnchor.doStepPostEvents).
gdjs._webxrVrSkyCubeTexture = null;
gdjs._webxrVrSkyTrappedScenes = null;
};
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetSkyboxBottomContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetSkyboxBottomContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetSkyboxBottomContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetSkyboxBottomContext.userFunc0x15f47c0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetSkyboxBottom = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetSkyboxBottomContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetSkyboxBottomContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetSkyboxBottomContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SkyboxBottomContext = {};
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SkyboxBottomContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SkyboxBottomContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SkyboxBottomContext.userFunc0x15f4798 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh && beh._getSkyboxBottom ? String(beh._getSkyboxBottom()) : '';
};
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SkyboxBottomContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SkyboxBottomContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SkyboxBottomContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SkyboxBottomContext.userFunc0x15f4798(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SkyboxBottom = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SkyboxBottomContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SkyboxBottomContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SkyboxBottomContext.GDObjectObjects1.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetSkyboxFrontContext = {};
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetSkyboxFrontContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetSkyboxFrontContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetSkyboxFrontContext.userFunc0x15f47c0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var v = String(eventsFunctionContext.getArgument("Value"));
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh && beh._setSkyboxFront) beh._setSkyboxFront(v);
}
// Invalidate the cached VR cube texture so the next VR frame rebuilds it
// from the updated property values (see VrHeadAnchor.doStepPostEvents).
gdjs._webxrVrSkyCubeTexture = null;
gdjs._webxrVrSkyTrappedScenes = null;
};
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetSkyboxFrontContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetSkyboxFrontContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetSkyboxFrontContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetSkyboxFrontContext.userFunc0x15f47c0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetSkyboxFront = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetSkyboxFrontContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetSkyboxFrontContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetSkyboxFrontContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SkyboxFrontContext = {};
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SkyboxFrontContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SkyboxFrontContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SkyboxFrontContext.userFunc0x15f4798 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh && beh._getSkyboxFront ? String(beh._getSkyboxFront()) : '';
};
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SkyboxFrontContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SkyboxFrontContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SkyboxFrontContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SkyboxFrontContext.userFunc0x15f4798(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SkyboxFront = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SkyboxFrontContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SkyboxFrontContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SkyboxFrontContext.GDObjectObjects1.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetSkyboxBackContext = {};
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetSkyboxBackContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetSkyboxBackContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetSkyboxBackContext.userFunc0x15f47c0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var v = String(eventsFunctionContext.getArgument("Value"));
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh && beh._setSkyboxBack) beh._setSkyboxBack(v);
}
// Invalidate the cached VR cube texture so the next VR frame rebuilds it
// from the updated property values (see VrHeadAnchor.doStepPostEvents).
gdjs._webxrVrSkyCubeTexture = null;
gdjs._webxrVrSkyTrappedScenes = null;
};
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetSkyboxBackContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetSkyboxBackContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetSkyboxBackContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetSkyboxBackContext.userFunc0x15f47c0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetSkyboxBack = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetSkyboxBackContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetSkyboxBackContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SetSkyboxBackContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SkyboxBackContext = {};
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SkyboxBackContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SkyboxBackContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SkyboxBackContext.userFunc0x15f4740 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh && beh._getSkyboxBack ? String(beh._getSkyboxBack()) : '';
};
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SkyboxBackContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SkyboxBackContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SkyboxBackContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SkyboxBackContext.userFunc0x15f4740(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SkyboxBack = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SkyboxBackContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SkyboxBackContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.SkyboxBackContext.GDObjectObjects1.length = 0;


return "" + eventsFunctionContext.returnValue;
}

gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("WebXR::VrHeadAnchor", gdjs.evtsExt__WebXR__VrHeadAnchor.VrHeadAnchor);
