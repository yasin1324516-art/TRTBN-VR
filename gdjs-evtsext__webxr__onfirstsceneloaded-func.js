
if (typeof gdjs.evtsExt__WebXR__onFirstSceneLoaded !== "undefined") {
  gdjs.evtsExt__WebXR__onFirstSceneLoaded.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__WebXR__onFirstSceneLoaded = {};
gdjs.evtsExt__WebXR__onFirstSceneLoaded.idToCallbackMap = new Map();


gdjs.evtsExt__WebXR__onFirstSceneLoaded.userFunc0xf2e4b8 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
if (typeof gdjs !== 'undefined' && gdjs._WebXRVR_InitDone) {
    return;
}
gdjs._WebXRVR_InitDone = true;
gdjs._WebXRVRSupported = false;
gdjs._WebXRVR_WasPresenting = false;
gdjs._webxrVrXrBaseSpace = null;
gdjs._webxrVrWorldScale = 100;
gdjs._webxrVrFrame = null;
gdjs._webxrVrAnchor = null;
gdjs._webxrVrFrustumCullEnabled  = true;
gdjs._webxrVrCullRadiusScale     = 2.0;
gdjs._webxrVrCullMarginMeters    = 1.0;
gdjs._webxrVrCullNearKeepMeters  = 5.0;
gdjs._webxrVrCullSphere          = null;
gdjs._webxrVrHeadWorld           = null;
gdjs._webxrVrMirrorEnabled = true;
gdjs._webxrVrMirrorFovDeg = 75;
gdjs._webxrVrMirrorCam = null;
gdjs._webxrVrMirrorPos = null;
gdjs._webxrVrMirrorQuat = null;
gdjs._webxrVrMirrorAspect = 0;

gdjs._webxrVrDbg = function () {
    if (typeof window !== 'undefined' && window.__WEBXR_VR_DEBUG__ === false) {
        return;
    }
    var a = ['[WebXR_VR]'].concat(Array.prototype.slice.call(arguments));
    console.log.apply(console, a);
};

// Renders a mono 'desktop mirror' view of the base layer into the page canvas
// while a VR session is presenting. WebXR provides no automatic mirror: the
// stereo render goes straight to the XR compositor, so without this the
// desktop canvas simply keeps whatever was on it before the session started
// (this is invisible on-headset and in emulators that composite the XR
// framebuffer back into the page, but shows as a black canvas on a PC monitor
// driving a real tethered headset).
gdjs._webxrVrRenderDesktopMirror = function (runtimeScene) {
    if (!gdjs._webxrVrMirrorEnabled) {
        return;
    }
    var renderer = runtimeScene.getGame().getRenderer().getThreeRenderer();
    if (!renderer || !renderer.xr || !renderer.xr.isPresenting) {
        return;
    }
    var vrRig = gdjs._webxrVrRig;
    if (!vrRig) {
        return;
    }
    var lr3d = runtimeScene.getLayer('').getRenderer();
    var threeScene = lr3d._threeScene || lr3d.threeScene || (lr3d.getThreeScene ? lr3d.getThreeScene() : null);
    if (!threeScene) {
        return;
    }
    // Force a full rig matrix update unconditionally, exactly like the
    // validated reference implementation, rather than relying on the
    // VrHeadAnchor frame-token cache (gdjs._webxrVrEnsureRigCurrent) being
    // already warm by the time this runs.
    vrRig.updateWorldMatrix(true, true);
    var xrCam = renderer.xr.getCamera();
    if (!xrCam) {
        return;
    }
    xrCam.updateWorldMatrix(true, false);

    // Fixed 16:9 / 0.1-1000000 projection, matching the validated reference
    // implementation exactly: recomputing aspect/near/far from live layer state
    // here caused an intermittent black-sky flicker (see changelog). Only FOV
    // is adjustable, and only its own single field is ever touched.
    if (!gdjs._webxrVrMirrorCam) {
        var _initFov = gdjs._webxrVrMirrorFovDeg > 0 ? gdjs._webxrVrMirrorFovDeg : 75;
        gdjs._webxrVrMirrorCam = new THREE.PerspectiveCamera(_initFov, 1280 / 720, 0.1, 1000000);
        gdjs._webxrVrMirrorPos = new THREE.Vector3();
        gdjs._webxrVrMirrorQuat = new THREE.Quaternion();
    }
    var mirrorCam = gdjs._webxrVrMirrorCam;
    var fovDeg = gdjs._webxrVrMirrorFovDeg > 0 ? gdjs._webxrVrMirrorFovDeg : 75;
    if (mirrorCam.fov !== fovDeg) {
        mirrorCam.fov = fovDeg;
        mirrorCam.updateProjectionMatrix();
    }

    xrCam.getWorldPosition(gdjs._webxrVrMirrorPos);
    xrCam.getWorldQuaternion(gdjs._webxrVrMirrorQuat);
    mirrorCam.position.copy(gdjs._webxrVrMirrorPos);
    mirrorCam.quaternion.copy(gdjs._webxrVrMirrorQuat);
    mirrorCam.up.set(0, -1, 0);
    mirrorCam.updateMatrixWorld(true);

    var prevTarget = renderer.getRenderTarget();
    var prevAutoClear = renderer.autoClear;
    try {
        renderer.xr.enabled = false;
        renderer.setRenderTarget(null);
        renderer.autoClear = false;
        // Depth only, matching the reference implementation; the scene always
        // covers the full viewport so the colour buffer never needs clearing.
        renderer.clearDepth();
        renderer.render(threeScene, mirrorCam);
    } catch (e) {
        if (typeof gdjs._webxrVrDbg === 'function') {
            gdjs._webxrVrDbg('desktop mirror render failed, disabling', e);
        }
        gdjs._webxrVrMirrorEnabled = false;
    } finally {
        renderer.autoClear = prevAutoClear;
        renderer.setRenderTarget(prevTarget);
        renderer.xr.enabled = true;
    }
};

if (navigator.xr && navigator.xr.isSessionSupported) {
    navigator.xr.isSessionSupported('immersive-vr').then(function (ok) {
        gdjs._WebXRVRSupported = !!ok;
        if (typeof gdjs._webxrVrDbg === 'function') {
            gdjs._webxrVrDbg('isSessionSupported(immersive-vr) ->', ok);
        }
    }).catch(function (err) {
        gdjs._WebXRVRSupported = false;
        if (typeof gdjs._webxrVrDbg === 'function') {
            gdjs._webxrVrDbg('isSessionSupported rejected', err);
        }
    });
} else {
    gdjs._WebXRVRSupported = false;
    if (typeof gdjs._webxrVrDbg === 'function') {
        gdjs._webxrVrDbg('navigator.xr missing');
    }
}

var renderer = runtimeScene.getGame().getRenderer().getThreeRenderer();
if (renderer) {
    renderer.xr.enabled = true;
}

gdjs._webxrVrControllers = { left: { grip: null, ray: null, connected: false }, right: { grip: null, ray: null, connected: false } };

// === Shared per-hand controller ray (0.29.0 performance fix) ===
// Replaces the old per-consumer whole-scene Three.js raycasts (previously one
// in VrController's laser, one per VrGrabbable object for magnetic grab, and
// one per VrSelectable object for ray selection - all re-testing the same
// geometry against real render triangles every frame, with no acceleration
// structure) with a single ray computed once per hand per frame. Physics3D
// bodies are tested first through Jolt's broadphase (cost independent of
// visual triangle count); anything without a body falls back to a Three.js
// triangle test, matching pre-0.29 behavior. A VrRayHitMode behavior on an
// object always overrides this default (Triangle/Box/Ignore win over the
// physics shape too, or use "Physics" to opt back into the default).
gdjs._webxrHandRayCache = { left: [], right: [] };
gdjs._webxrHandRayCacheToken = { left: null, right: null };
gdjs._webxrRayHitModeRegistry = gdjs._webxrRayHitModeRegistry || new Map();

gdjs._webxrGetThreeSceneForRay = function (runtimeScene) {
    try {
        var lr = runtimeScene.getLayer('');
        var lr3d = lr.getRenderer ? lr.getRenderer() : null;
        if (lr3d) return lr3d._threeScene || lr3d.threeScene || (lr3d.getThreeScene ? lr3d.getThreeScene() : null);
    } catch (e) {}
    return null;
};

// Walks up from a raycast-hit Three.js node to the nearest ancestor tagged by
// GDevelop's own 3D renderer with a back-reference to its owning object, so a
// hit deep inside a GLB's node hierarchy resolves to the owning object without
// a per-frame subtree traversal.
gdjs._webxrOwnerFromThreeNode = function (node) {
    var cur = node;
    while (cur) {
        if (cur.gdjsRuntimeObject) return cur.gdjsRuntimeObject;
        cur = cur.parent;
    }
    return null;
};

gdjs._webxrIsHeldBySameHand = function (owner, hand) {
    var reg = gdjs._webxrVrGrabbableRegistry;
    if (!reg || !owner) return false;
    for (var i = 0; i < reg.length; i++) {
        if (reg[i].obj === owner) return !!(reg[i].beh && reg[i].beh._grabbingHand === hand);
    }
    return false;
};

gdjs._webxrShouldSkipOwner = function (owner, hand) {
    if (!owner) return true;
    var ctl = gdjs._webxrVrControllers;
    if (ctl && ((ctl.left && ctl.left.gdObject === owner) || (ctl.right && ctl.right.gdObject === owner))) return true;
    if (owner === gdjs._webxrVrAnchorObject) return true;
    if (gdjs._webxrIsHeldBySameHand(owner, hand)) return true;
    return false;
};

// Returns the VrRayHitMode override for owner's controller-ray hits, or null
// when there is none (no behavior, the behavior is deactivated, or it is set
// to "Physics": the default handling, i.e. the physics shape if a Physics3D
// body exists, otherwise exact render triangles). When not null, this always
// wins over the physics shape, so it can force exact/box/pass-through hits on
// an object that has a body, not just on objects without one.
gdjs._webxrGetRayHitMode = function (owner) {
    if (!owner) return null;
    var beh = gdjs._webxrRayHitModeRegistry.get(owner);
    if (!beh || !beh.activated()) return null;
    var mode = beh._getHitMode ? String(beh._getHitMode()) : 'Box';
    if (mode === 'Physics') return null;
    if (mode !== 'Triangle' && mode !== 'Ignore') return 'Box';
    return mode;
};

// Local-space box test used for VrRayHitMode "Box": the same shape check
// Three's own Mesh.raycast performs before it walks triangles, without the
// triangle loop itself.
gdjs._webxrBoxRaycastScratch = { inv: new THREE.Matrix4(), ray: new THREE.Ray(), local: new THREE.Vector3(), world: new THREE.Vector3() };
gdjs._webxrBoxRaycast = function (mesh, raycaster) {
    var geom = mesh.geometry;
    if (!geom) return null;
    if (!geom.boundingBox) geom.computeBoundingBox();
    var s = gdjs._webxrBoxRaycastScratch;
    s.inv.copy(mesh.matrixWorld).invert();
    s.ray.copy(raycaster.ray).applyMatrix4(s.inv);
    if (!s.ray.intersectBox(geom.boundingBox, s.local)) return null;
    s.world.copy(s.local).applyMatrix4(mesh.matrixWorld);
    var distance = raycaster.ray.origin.distanceTo(s.world);
    if (distance < raycaster.near || distance > raycaster.far) return null;
    return { distance: distance, point: s.world.clone() };
};

// Installs a self-adjusting raycast on every mesh of owner's render root, the
// first time a controller ray ever hits it. From then on the mesh skips its
// own triangle test whenever VrRayHitMode overrides it (Box/Ignore/Triangle,
// see _webxrGetRayHitMode), or whenever Physics3D is active on the object with
// no override (the physics ray pass already covers it, cheaply, regardless of
// polycount), instead of paying that cost every frame the beam happens to be
// aimed at it. Re-checks the live VrRayHitMode/Physics3D state on every call,
// so it stays correct if either changes at runtime.
gdjs._webxrInstallSmartRaycast = function (owner) {
    var root = owner.get3DRendererObject ? owner.get3DRendererObject() : null;
    if (!root || root.userData._webxrSmartRaycastDone) return;
    root.userData._webxrSmartRaycastDone = true;
    root.traverse(function (child) {
        if (!child.isMesh || child.userData.vrController || !child.raycast) return;
        var originalRaycast = child.raycast;
        child.raycast = function (raycaster, intersects) {
            var mode = gdjs._webxrGetRayHitMode(owner);
            if (mode === 'Ignore') return;
            if (mode === 'Box') {
                var boxHit = gdjs._webxrBoxRaycast(child, raycaster);
                if (boxHit) intersects.push({ distance: boxHit.distance, point: boxHit.point, object: child });
                return;
            }
            if (mode === 'Triangle') { originalRaycast.call(child, raycaster, intersects); return; }
            var phys = null;
            try { phys = owner.getBehavior('Physics3D'); } catch (e) {}
            if (phys && phys._body) return;
            originalRaycast.call(child, raycaster, intersects);
        };
    });
};

// Reusable Jolt ray-cast scratch objects: rebuilt only when the scene's
// physics3DSharedData instance changes (e.g. after a scene reload).
gdjs._webxrJoltRay = null;
gdjs._webxrEnsureJoltRay = function (sharedData) {
    var jr = gdjs._webxrJoltRay;
    if (jr && jr.sharedData === sharedData) return jr;
    var settings = new Jolt.RayCastSettings();
    settings.mTreatConvexAsSolid = false;
    var origin = new Jolt.RVec3(0, 0, 0);
    var direction = new Jolt.Vec3(0, 0, 0);
    jr = {
        sharedData: sharedData,
        origin: origin,
        direction: direction,
        ray: new Jolt.RRayCast(origin, direction),
        settings: settings,
        collector: new Jolt.CastRayAllHitCollisionCollector(),
        bpFilter: new Jolt.BroadPhaseLayerFilter(),
        olFilter: new Jolt.ObjectLayerFilter(),
        bodyFilter: new Jolt.BodyFilter(),
        shapeFilter: new Jolt.ShapeFilter()
    };
    gdjs._webxrJoltRay = jr;
    return jr;
};

// Casts the physics half of the shared ray. Returns hits sorted by distance:
// {distance, point (THREE.Vector3, world space), gdObject, threeObject, source}.
gdjs._webxrCastPhysicsRay = function (runtimeScene, hand, originThree, dirThree, length) {
    var sharedData = runtimeScene.physics3DSharedData;
    if (!sharedData || !(length > 0)) return [];
    var inv = sharedData.worldInvScale;
    var jr = gdjs._webxrEnsureJoltRay(sharedData);
    jr.origin.Set(originThree.x * inv, -originThree.y * inv, originThree.z * inv);
    jr.direction.Set(dirThree.x * length * inv, -dirThree.y * length * inv, dirThree.z * length * inv);
    jr.ray.mOrigin = jr.origin;
    jr.ray.mDirection = jr.direction;
    jr.collector.Reset();
    sharedData.physicsSystem.GetNarrowPhaseQuery().CastRay(jr.ray, jr.settings, jr.collector, jr.bpFilter, jr.olFilter, jr.bodyFilter, jr.shapeFilter);
    if (!jr.collector.HadHit()) return [];
    jr.collector.Sort();
    var hits = jr.collector.mHits;
    var count = hits.size();
    var out = [];
    var lockIface = sharedData.physicsSystem.GetBodyLockInterfaceNoLock();
    var scale = sharedData.worldScale;
    for (var i = 0; i < count; i++) {
        var r = hits.at(i);
        var body = lockIface.TryGetBody(r.mBodyID);
        if (!body || body.IsSensor()) { if (r.destroy) r.destroy(); continue; }
        var behAssoc = body.gdjsAssociatedBehavior;
        var owner = behAssoc ? behAssoc.owner : null;
        if (gdjs._webxrShouldSkipOwner(owner, hand)) { if (r.destroy) r.destroy(); continue; }
        if (gdjs._webxrGetRayHitMode(owner) !== null) { if (r.destroy) r.destroy(); continue; }
        var fraction = r.mFraction;
        var p = jr.ray.GetPointOnRay(fraction);
        var worldPoint = new THREE.Vector3(p.GetX() * scale, -p.GetY() * scale, p.GetZ() * scale);
        if (p.destroy) p.destroy();
        if (r.destroy) r.destroy();
        out.push({ distance: fraction * length, point: worldPoint, gdObject: owner, threeObject: null, source: 'physics' });
    }
    return out;
};

// Casts the non-physics half of the shared ray: a single reused Raycaster
// against the render scene. Any mesh whose owner has a VrRayHitMode override,
// or has an active Physics3D body with no override, gets its own .raycast
// replaced by _webxrInstallSmartRaycast the first time it is hit, so every
// frame after that first exposure this pass costs nothing extra for that
// object.
gdjs._webxrSharedRaycaster = new THREE.Raycaster();
gdjs._webxrSharedHitsBuffer = [];
gdjs._webxrCastTriangleRay = function (runtimeScene, hand, sceneRef, originThree, dirThree, length, clipDistance) {
    if (!sceneRef) return [];
    var rc = gdjs._webxrSharedRaycaster;
    rc.set(originThree, dirThree);
    rc.near = 0;
    rc.far = (clipDistance > 0 && clipDistance < length) ? clipDistance : length;
    gdjs._webxrSharedHitsBuffer.length = 0;
    var hits = rc.intersectObject(sceneRef, true, gdjs._webxrSharedHitsBuffer);
    var out = [];
    for (var i = 0; i < hits.length; i++) {
        var h = hits[i];
        var node = h.object;
        if (node.userData && node.userData.vrController) continue;
        var owner = gdjs._webxrOwnerFromThreeNode(node);
        if (gdjs._webxrShouldSkipOwner(owner, hand)) continue;
        var mode = gdjs._webxrGetRayHitMode(owner);
        if (mode !== null) {
            gdjs._webxrInstallSmartRaycast(owner);
            if (mode === 'Ignore') continue;
            if (mode === 'Box') {
                var boxHit = gdjs._webxrBoxRaycast(node, rc);
                if (!boxHit) continue;
                out.push({ distance: boxHit.distance, point: boxHit.point, gdObject: owner, threeObject: node, source: 'box' });
                continue;
            }
            out.push({ distance: h.distance, point: h.point.clone(), gdObject: owner, threeObject: node, source: 'triangle' });
            continue;
        }
        var phys = null;
        try { phys = owner ? owner.getBehavior('Physics3D') : null; } catch (e) {}
        if (phys && phys._body) {
            gdjs._webxrInstallSmartRaycast(owner);
            continue;
        }
        out.push({ distance: h.distance, point: h.point.clone(), gdObject: owner, threeObject: node, source: 'triangle' });
    }
    return out;
};

// Main entry point: one shared ray per hand, cached per XR frame so
// VrController's laser and VrGrabbable/VrSelectable/VrTargetable's checks all
// read the same result instead of each casting their own.
gdjs._webxrHandRayOrigin = new THREE.Vector3();
gdjs._webxrHandRayQuat = new THREE.Quaternion();
gdjs._webxrHandRayDir = new THREE.Vector3();
gdjs._webxrHandRayHits = function (runtimeScene, hand) {
    var token = gdjs._webxrVrFrame || runtimeScene.getTimeManager().getTimeFromStart();
    if (gdjs._webxrHandRayCacheToken[hand] === token) {
        return gdjs._webxrHandRayCache[hand];
    }
    gdjs._webxrHandRayCacheToken[hand] = token;
    var result = [];
    var controllers = gdjs._webxrVrControllers;
    var entry = controllers ? controllers[hand] : null;
    if (!entry || !entry.connected || !entry.grip) {
        gdjs._webxrHandRayCache[hand] = result;
        return result;
    }
    if (gdjs._webxrVrEnsureRigCurrent) gdjs._webxrVrEnsureRigCurrent();
    var raySrc = entry.ray || entry.grip;
    raySrc.getWorldPosition(gdjs._webxrHandRayOrigin);
    raySrc.getWorldQuaternion(gdjs._webxrHandRayQuat);
    var pitchDeg = Number(entry._laserPitchOffset) || 0;
    if (pitchDeg !== 0) {
        gdjs._webxrHandRayQuat.multiply(new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), pitchDeg * Math.PI / 180));
    }
    gdjs._webxrHandRayDir.set(0, 0, -1).applyQuaternion(gdjs._webxrHandRayQuat).normalize();

    var targetingLen = (entry._targetingRayLength > 0) ? entry._targetingRayLength : 5000;
    var magneticLen = (entry._magneticGrabActive && entry._magneticGrabLength > 0) ? entry._magneticGrabLength : 0;
    var length = Math.max(targetingLen, magneticLen, 1);

    var physicsHits = gdjs._webxrCastPhysicsRay(runtimeScene, hand, gdjs._webxrHandRayOrigin, gdjs._webxrHandRayDir, length);
    var nearestPhysicsDistance = physicsHits.length > 0 ? physicsHits[0].distance : -1;
    var sceneRef = gdjs._webxrGetThreeSceneForRay(runtimeScene);
    var triHits = gdjs._webxrCastTriangleRay(runtimeScene, hand, sceneRef, gdjs._webxrHandRayOrigin, gdjs._webxrHandRayDir, length, nearestPhysicsDistance);

    result = physicsHits.concat(triHits);
    result.sort(function (a, b) { return a.distance - b.distance; });
    gdjs._webxrHandRayCache[hand] = result;
    return result;
};

// Fixed model-space correction applied to every tracked controller frame: the
// design-time mesh orientation (captured once per controller from the loaded GLB,
// independent of any runtime pose) composed with the optional user RotationOffset
// property. This never depends on where/how the controller was posed when it
// connected, so orientation is correct whether the session starts with controllers
// already in hand or with hand tracking followed by a later pickup from the table.
gdjs._webxrControllerCorrection = function (beh) {
    var rx = beh._getRotationOffsetX ? Number(beh._getRotationOffsetX()) || 0 : 0;
    var ry = beh._getRotationOffsetY ? Number(beh._getRotationOffsetY()) || 0 : 0;
    var rz = beh._getRotationOffsetZ ? Number(beh._getRotationOffsetZ()) || 0 : 0;
    var qBase = beh._qMeshInit ? beh._qMeshInit.clone() : new THREE.Quaternion();
    if (!rx && !ry && !rz) return qBase;
    var qUser = new THREE.Quaternion().setFromEuler(new THREE.Euler(rx * Math.PI / 180, ry * Math.PI / 180, rz * Math.PI / 180, 'ZYX'));
    return qBase.multiply(qUser);
};

// Shared by the CalibrateRotation action and the CalibrationPreview expression: solves
// for the RotationOffset that would make the model reproduce its design-time orientation
// exactly at the controller's current physical pose - i.e. treats the pose the controller
// is held in right now as the correct/aligned reference. Returns null if the controller
// isn't currently tracked (no grip yet, or the mesh orientation hasn't been captured).
gdjs._webxrSolveRotationOffsetDegrees = function (beh) {
    if (!beh || !beh._vrGrip || !beh._qMeshInit) return null;
    var wq = new THREE.Quaternion();
    beh._vrGrip.getWorldQuaternion(wq);
    var wqLocal = new THREE.Quaternion(-wq.x, wq.y, -wq.z, wq.w);
    var qUser = beh._qMeshInit.clone().invert().multiply(wqLocal.clone().invert()).multiply(beh._qMeshInit);
    var eu = new THREE.Euler().setFromQuaternion(qUser, 'ZYX');
    return { x: eu.x * 180 / Math.PI, y: eu.y * 180 / Math.PI, z: eu.z * 180 / Math.PI };
};

var vrRig = new THREE.Group();
gdjs._webxrVrRig = vrRig;
if (renderer) {
    for (var _ci = 0; _ci < 2; _ci++) {
        (function(grip) {
            grip.addEventListener('connected', function(event) {
                var h = event.data.handedness;
                if (h === 'left' || h === 'right') {
                    var handAnchor = new THREE.Group();
                    handAnchor.name = 'webxrHandAnchor_' + h;
                    grip.add(handAnchor);
                    gdjs._webxrVrControllers[h].grip = grip;
                    gdjs._webxrVrControllers[h].handAnchor = handAnchor;
                    gdjs._webxrVrControllers[h].connected = true;
                    vrRig.add(grip);
                    if (typeof gdjs._webxrVrDbg === 'function') {
                        gdjs._webxrVrDbg('controller connected:', h, 'grip added to vrRig');
                    }
                }
            });
            grip.addEventListener('disconnected', function() {
                var keys = ['left', 'right'];
                for (var k = 0; k < keys.length; k++) {
                    if (gdjs._webxrVrControllers[keys[k]].grip === grip) {
                        gdjs._webxrVrControllers[keys[k]].grip = null;
                        gdjs._webxrVrControllers[keys[k]].handAnchor = null;
                        gdjs._webxrVrControllers[keys[k]].connected = false;
                        grip.removeFromParent();
                        if (typeof gdjs._webxrVrDbg === 'function') {
                            gdjs._webxrVrDbg('controller disconnected:', keys[k]);
                        }
                    }
                }
            });
        })(renderer.xr.getControllerGrip(_ci));
        (function(ray) {
            ray.addEventListener('connected', function(event) {
                var h = event.data.handedness;
                if (h === 'left' || h === 'right') {
                    gdjs._webxrVrControllers[h].ray = ray;
                    vrRig.add(ray);
                }
            });
            ray.addEventListener('disconnected', function() {
                var keys = ['left', 'right'];
                for (var k = 0; k < keys.length; k++) {
                    if (gdjs._webxrVrControllers[keys[k]].ray === ray) {
                        gdjs._webxrVrControllers[keys[k]].ray = null;
                        ray.removeFromParent();
                    }
                }
            });
        })(renderer.xr.getController(_ci));
    }
}

var originalLoop = gdjs.RuntimeGamePixiRenderer.prototype.startGameLoop;
if (gdjs.RuntimeGamePixiRenderer.prototype._webxrVrLoopInstalled) {
    if (typeof gdjs._webxrVrDbg === 'function') {
        gdjs._webxrVrDbg('startGameLoop already patched by WebXR_VR; skip duplicate');
    }
} else {
    gdjs.RuntimeGamePixiRenderer.prototype._webxrVrLoopInstalled = true;
    gdjs.RuntimeGamePixiRenderer.prototype.startGameLoop = function startGameLoop(fn) {
        var oldTime = 0;
        var threeRenderer = this.getThreeRenderer();
        if (!threeRenderer) {
            gdjs.RuntimeGamePixiRenderer.prototype.startGameLoop = originalLoop;
            this.startGameLoop(fn);
            throw new Error('WebXR VR requires a 3D scene (place at least one 3D object).');
        }
        var start = Date.now();
        var game = this.getGame();
        var doStep = function () {
            var time = Date.now() - start;
            var dt = oldTime ? time - oldTime : 0;
            oldTime = time;
            if (!fn(dt)) {
                threeRenderer.setAnimationLoop(null);
            }
        };
        var gameLoop = function (timestamp, frame) {
            gdjs._webxrVrFrame = frame || null;
            if (threeRenderer.xr.isPresenting) {
                game.getSceneStack().getCurrentScene().getRenderer().renderForVR();
                queueMicrotask(doStep);
            } else {
                doStep();
            }
        };
        threeRenderer.setAnimationLoop(gameLoop);
    };
}

if (typeof gdjs._webxrVrDbg === 'function') {
    gdjs._webxrVrDbg('onFirstSceneLoaded: xr.enabled + startGameLoop hook installed, threeRenderer=', !!renderer);
}
};
gdjs.evtsExt__WebXR__onFirstSceneLoaded.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WebXR__onFirstSceneLoaded.userFunc0xf2e4b8(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__onFirstSceneLoaded.func = function(runtimeScene, parentEventsFunctionContext) {
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


gdjs.evtsExt__WebXR__onFirstSceneLoaded.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__WebXR__onFirstSceneLoaded.registeredGdjsCallbacks = [];
gdjs.evtsExt__WebXR__onFirstSceneLoaded.registeredGdjsCallbacks.push((runtimeScene) => {
    gdjs.evtsExt__WebXR__onFirstSceneLoaded.func(runtimeScene, runtimeScene);
})
gdjs.registerFirstRuntimeSceneLoadedCallback(gdjs.evtsExt__WebXR__onFirstSceneLoaded.registeredGdjsCallbacks[gdjs.evtsExt__WebXR__onFirstSceneLoaded.registeredGdjsCallbacks.length - 1]);
