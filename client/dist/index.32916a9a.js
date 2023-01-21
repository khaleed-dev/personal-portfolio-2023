// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"bILz1":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "e551076832916a9a";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"iCml8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _tagCloud = require("TagCloud");
var _tagCloudDefault = parcelHelpers.interopDefault(_tagCloud);
const myTags = [
    "JavaScript",
    "CSS",
    "HTML",
    "React",
    "SCSS",
    "Bootstrap",
    "NodeJS",
    "Git",
    "Parcel",
    "SQL",
    "MongoDB",
    "ExpressJS",
    "Figma",
    "JSON API",
    "JWT Auth"
];
let windoWidth = window.innerWidth > 1200 ? 250 : 200;
var tagCloud = (0, _tagCloudDefault.default)("#animation", myTags, {
    // radius in px
    radius: windoWidth,
    // animation speed
    // slow, normal, fast
    maxSpeed: "slow",
    initSpeed: "slow",
    // 0 = top
    // 90 = left
    // 135 = right-bottom
    direction: 135,
    // interact with cursor move on mouse out
    keep: true
});
//To change the color of text randomly
var colors = [
    "#34A853",
    "#FBBC05",
    "#4285F4",
    "#7FBC00",
    "FFBA01",
    "01A6F0"
];
var random_color = colors[Math.floor(Math.random() * colors.length)]; // document.querySelector('.content').style.color = random_color;

},{"TagCloud":"b2L52","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b2L52":[function(require,module,exports) {
/*!
 * TagCloud.js v2.3.0
 * Copyright (c) 2016-2022 @ Cong Min
 * MIT License - https://github.com/mcc108/TagCloud
 */ (function(global, factory) {
    module.exports = factory();
})(this, function() {
    "use strict";
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function _defineProperties(target, props) {
        for(var i = 0; i < props.length; i++){
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        return Constructor;
    }
    function _defineProperty(obj, key, value) {
        if (key in obj) Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
        else obj[key] = value;
        return obj;
    }
    function _extends() {
        _extends = Object.assign || function(target) {
            for(var i = 1; i < arguments.length; i++){
                var source = arguments[i];
                for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
            }
            return target;
        };
        return _extends.apply(this, arguments);
    }
    function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            if (enumerableOnly) symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
            keys.push.apply(keys, symbols);
        }
        return keys;
    }
    function _objectSpread2(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i] != null ? arguments[i] : {};
            if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
                _defineProperty(target, key, source[key]);
            });
            else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
            else ownKeys(Object(source)).forEach(function(key) {
                Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
        }
        return target;
    }
    /**
   * TagCloud.js (c) 2016-2019 @ Cong Min
   * MIT License - https://github.com/mcc108/TagCloud
   */ var TagCloud = /*#__PURE__*/ function() {
        /* constructor */ function TagCloud() {
            var container = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.body;
            var texts = arguments.length > 1 ? arguments[1] : undefined;
            var options = arguments.length > 2 ? arguments[2] : undefined;
            _classCallCheck(this, TagCloud);
            var self = this;
            if (!container || container.nodeType !== 1) return new Error("Incorrect element type"); // params
            self.$container = container;
            self.texts = texts || [];
            self.config = _objectSpread2(_objectSpread2({}, TagCloud._defaultConfig), options || {}); // calculate config
            self.radius = self.config.radius; // rolling radius
            self.depth = 2 * self.radius; // rolling depth
            self.size = 1.5 * self.radius; // rolling area size with mouse
            self.maxSpeed = TagCloud._getMaxSpeed(self.config.maxSpeed); // rolling max speed
            self.initSpeed = TagCloud._getInitSpeed(self.config.initSpeed); // rolling init speed
            self.direction = self.config.direction; // rolling init direction
            self.keep = self.config.keep; // whether to keep rolling after mouse out area
            self.paused = false; // keep state to pause the animation
            // create element
            self._createElment(); // init
            self._init(); // set elements and instances
            TagCloud.list.push({
                el: self.$el,
                container: container,
                instance: self
            });
        }
        /* static method */ // all TagCloud list
        _createClass(TagCloud, [
            {
                key: "_createElment",
                /* instance property method */ // create elment
                value: function _createElment() {
                    var self = this; // create container
                    var $el = document.createElement("div");
                    $el.className = self.config.containerClass;
                    if (self.config.useContainerInlineStyles) {
                        $el.style.position = "relative";
                        $el.style.width = "".concat(2 * self.radius, "px");
                        $el.style.height = "".concat(2 * self.radius, "px");
                    } // create texts
                    self.items = [];
                    self.texts.forEach(function(text, index) {
                        var item = self._createTextItem(text, index);
                        $el.appendChild(item.el);
                        self.items.push(item);
                    });
                    self.$container.appendChild($el);
                    self.$el = $el;
                } // create a text
            },
            {
                key: "_createTextItem",
                value: function _createTextItem(text) {
                    var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                    var self = this;
                    var itemEl = document.createElement("span");
                    itemEl.className = self.config.itemClass;
                    if (self.config.useItemInlineStyles) {
                        itemEl.style.willChange = "transform, opacity, filter";
                        itemEl.style.position = "absolute";
                        itemEl.style.top = "50%";
                        itemEl.style.left = "50%";
                        itemEl.style.zIndex = index + 1;
                        itemEl.style.filter = "alpha(opacity=0)";
                        itemEl.style.opacity = 0;
                        var transformOrigin = "50% 50%";
                        itemEl.style.WebkitTransformOrigin = transformOrigin;
                        itemEl.style.MozTransformOrigin = transformOrigin;
                        itemEl.style.OTransformOrigin = transformOrigin;
                        itemEl.style.transformOrigin = transformOrigin;
                        var transform = "translate3d(-50%, -50%, 0) scale(1)";
                        itemEl.style.WebkitTransform = transform;
                        itemEl.style.MozTransform = transform;
                        itemEl.style.OTransform = transform;
                        itemEl.style.transform = transform;
                    }
                    itemEl.innerText = text;
                    return _objectSpread2({
                        el: itemEl
                    }, self._computePosition(index));
                } // calculate appropriate place
            },
            {
                key: "_computePosition",
                value: function _computePosition(index) {
                    var random = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                    var self = this;
                    var textsLength = self.texts.length; // if random `true`, It means that a random appropriate place is generated, and the position will be independent of `index`
                    if (random) index = Math.floor(Math.random() * (textsLength + 1));
                    var phi = Math.acos(-1 + (2 * index + 1) / textsLength);
                    var theta = Math.sqrt((textsLength + 1) * Math.PI) * phi;
                    return {
                        x: self.size * Math.cos(theta) * Math.sin(phi) / 2,
                        y: self.size * Math.sin(theta) * Math.sin(phi) / 2,
                        z: self.size * Math.cos(phi) / 2
                    };
                }
            },
            {
                key: "_requestInterval",
                value: function _requestInterval(fn, delay) {
                    var requestAnimFrame = function() {
                        return window.requestAnimationFrame;
                    }();
                    var start = new Date().getTime();
                    var handle = {};
                    function loop() {
                        handle.value = requestAnimFrame(loop);
                        var current = new Date().getTime(), delta = current - start;
                        if (delta >= delay) {
                            fn.call();
                            start = new Date().getTime();
                        }
                    }
                    handle.value = requestAnimFrame(loop);
                    return handle;
                } // init
            },
            {
                key: "_init",
                value: function _init() {
                    var self = this;
                    self.active = false; // whether the mouse is activated
                    self.mouseX0 = self.initSpeed * Math.sin(self.direction * (Math.PI / 180)); // init distance between the mouse and rolling center x axis
                    self.mouseY0 = -self.initSpeed * Math.cos(self.direction * (Math.PI / 180)); // init distance between the mouse and rolling center y axis
                    self.mouseX = self.mouseX0; // current distance between the mouse and rolling center x axis
                    self.mouseY = self.mouseY0; // current distance between the mouse and rolling center y axis
                    var isTouchDevice = window.matchMedia("(hover: hover)");
                    if (!isTouchDevice || isTouchDevice.matches) {
                        // mouseover
                        TagCloud._on(self.$el, "mouseover", function() {
                            self.active = true;
                        }); // mouseout
                        TagCloud._on(self.$el, "mouseout", function() {
                            self.active = false;
                        }); // mousemove
                        TagCloud._on(self.keep ? window : self.$el, "mousemove", function(ev) {
                            ev = ev || window.event;
                            var rect = self.$el.getBoundingClientRect();
                            self.mouseX = (ev.clientX - (rect.left + rect.width / 2)) / 5;
                            self.mouseY = (ev.clientY - (rect.top + rect.height / 2)) / 5;
                        });
                    } // update state regularly
                    self._next(); // init update state
                    self.interval = self._requestInterval(function() {
                        self._next.call(self);
                    }, 10);
                } // calculate the next state
            },
            {
                key: "_next",
                value: function _next() {
                    var self = this;
                    if (self.paused) return;
                     // if keep `false`, pause rolling after moving mouse out area
                    if (!self.keep && !self.active) {
                        self.mouseX = Math.abs(self.mouseX - self.mouseX0) < 1 ? self.mouseX0 : (self.mouseX + self.mouseX0) / 2; // reset distance between the mouse and rolling center x axis
                        self.mouseY = Math.abs(self.mouseY - self.mouseY0) < 1 ? self.mouseY0 : (self.mouseY + self.mouseY0) / 2; // reset distance between the mouse and rolling center y axis
                    }
                    var a = -(Math.min(Math.max(-self.mouseY, -self.size), self.size) / self.radius) * self.maxSpeed;
                    var b = Math.min(Math.max(-self.mouseX, -self.size), self.size) / self.radius * self.maxSpeed;
                    if (Math.abs(a) <= 0.01 && Math.abs(b) <= 0.01) return; // pause
                    // calculate offset
                    var l = Math.PI / 180;
                    var sc = [
                        Math.sin(a * l),
                        Math.cos(a * l),
                        Math.sin(b * l),
                        Math.cos(b * l)
                    ];
                    self.items.forEach(function(item) {
                        var rx1 = item.x;
                        var ry1 = item.y * sc[1] + item.z * -sc[0];
                        var rz1 = item.y * sc[0] + item.z * sc[1];
                        var rx2 = rx1 * sc[3] + rz1 * sc[2];
                        var ry2 = ry1;
                        var rz2 = rz1 * sc[3] - rx1 * sc[2];
                        var per = 2 * self.depth / (2 * self.depth + rz2); // todo
                        item.x = rx2;
                        item.y = ry2;
                        item.z = rz2;
                        item.scale = per.toFixed(3);
                        var alpha = per * per - 0.25;
                        alpha = (alpha > 1 ? 1 : alpha).toFixed(3);
                        var itemEl = item.el;
                        var left = (item.x - itemEl.offsetWidth / 2).toFixed(2);
                        var top = (item.y - itemEl.offsetHeight / 2).toFixed(2);
                        var transform = "translate3d(".concat(left, "px, ").concat(top, "px, 0) scale(").concat(item.scale, ")");
                        itemEl.style.WebkitTransform = transform;
                        itemEl.style.MozTransform = transform;
                        itemEl.style.OTransform = transform;
                        itemEl.style.transform = transform;
                        itemEl.style.filter = "alpha(opacity=".concat(100 * alpha, ")");
                        itemEl.style.opacity = alpha;
                    });
                }
            },
            {
                key: "update",
                value: function update(texts) {
                    var self = this; // params
                    self.texts = texts || []; // judging and processing items based on texts
                    self.texts.forEach(function(text, index) {
                        var item = self.items[index];
                        if (!item) {
                            // if not had, then create
                            item = self._createTextItem(text, index);
                            _extends(item, self._computePosition(index, true)); // random place
                            self.$el.appendChild(item.el);
                            self.items.push(item);
                        } // if had, replace text
                        item.el.innerText = text;
                    }); // remove redundant self.items
                    var textsLength = self.texts.length;
                    var itemsLength = self.items.length;
                    if (textsLength < itemsLength) {
                        var removeList = self.items.splice(textsLength, itemsLength - textsLength);
                        removeList.forEach(function(item) {
                            self.$el.removeChild(item.el);
                        });
                    }
                } // destroy
            },
            {
                key: "destroy",
                value: function destroy() {
                    var self = this;
                    self.interval = null; // clear in TagCloud.list
                    var index = TagCloud.list.findIndex(function(e) {
                        return e.el === self.$el;
                    });
                    if (index !== -1) TagCloud.list.splice(index, 1); // clear element
                    if (self.$container && self.$el) self.$container.removeChild(self.$el);
                }
            },
            {
                key: "pause",
                value: function pause() {
                    var self = this;
                    self.paused = true;
                }
            },
            {
                key: "resume",
                value: function resume() {
                    var self = this;
                    self.paused = false;
                }
            }
        ], [
            {
                key: "_on",
                // event listener
                value: function _on(el, ev, handler, cap) {
                    if (el.addEventListener) el.addEventListener(ev, handler, cap);
                    else if (el.attachEvent) el.attachEvent("on".concat(ev), handler);
                    else el["on".concat(ev)] = handler;
                }
            }
        ]);
        return TagCloud;
    }();
    TagCloud.list = [];
    TagCloud._defaultConfig = {
        radius: 100,
        // rolling radius, unit `px`
        maxSpeed: "normal",
        // rolling max speed, optional: `slow`, `normal`(default), `fast`
        initSpeed: "normal",
        // rolling init speed, optional: `slow`, `normal`(default), `fast`
        direction: 135,
        // rolling init direction, unit clockwise `deg`, optional: `0`(top) , `90`(left), `135`(right-bottom)(default)...
        keep: true,
        // whether to keep rolling after mouse out area, optional: `false`, `true`(default)(decelerate to rolling init speed, and keep rolling with mouse)
        useContainerInlineStyles: true,
        useItemInlineStyles: true,
        containerClass: "tagcloud",
        itemClass: "tagcloud--item"
    };
    TagCloud._getMaxSpeed = function(name) {
        return ({
            slow: 0.5,
            normal: 1,
            fast: 2
        })[name] || 1;
    };
    TagCloud._getInitSpeed = function(name) {
        return ({
            slow: 16,
            normal: 32,
            fast: 80
        })[name] || 32;
    };
    var index = function(els, texts, options) {
        if (typeof els === "string") els = document.querySelectorAll(els);
        if (!els.forEach) els = [
            els
        ];
        var instances = [];
        els.forEach(function(el) {
            if (el) instances.push(new TagCloud(el, texts, options));
        });
        return instances.length <= 1 ? instances[0] : instances;
    };
    return index;
});

},{}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["bILz1","iCml8"], "iCml8", "parcelRequire8aba")

//# sourceMappingURL=index.32916a9a.js.map
