var e = require("./47.js");
var t = require("./24.js");
/*! *****************************************************************************
Copyright (C) Microsoft. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var n;
(function (n) {
  (function (i) {
    var a = typeof t == "object" ? t : typeof self == "object" ? self : typeof this == "object" ? this : Function("return this;")();
    var s = makeExporter(n);
    function makeExporter(e, t) {
      return function (n, i) {
        if (typeof e[n] != "function") {
          Object.defineProperty(e, n, {
            configurable: true,
            writable: true,
            value: i
          });
        }
        if (t) {
          t(n, i);
        }
      };
    }
    if (a.Reflect === undefined) {
      a.Reflect = n;
    } else {
      s = makeExporter(a.Reflect, s);
    }
    (function (t) {
      var n = Object.prototype.hasOwnProperty;
      var i = typeof Symbol == "function";
      var a = i && Symbol.toPrimitive !== undefined ? Symbol.toPrimitive : "@@toPrimitive";
      var s = i && Symbol.iterator !== undefined ? Symbol.iterator : "@@iterator";
      var r = typeof Object.create == "function";
      var o = {
        __proto__: []
      } instanceof Array;
      var l = !r && !o;
      var u = {
        create: r ? function () {
          return MakeDictionary(Object.create(null));
        } : o ? function () {
          return MakeDictionary({
            __proto__: null
          });
        } : function () {
          return MakeDictionary({});
        },
        has: l ? function (e, t) {
          return n.call(e, t);
        } : function (e, t) {
          return t in e;
        },
        get: l ? function (e, t) {
          if (n.call(e, t)) {
            return e[t];
          } else {
            return undefined;
          }
        } : function (e, t) {
          return e[t];
        }
      };
      var c = Object.getPrototypeOf(Function);
      var _ = typeof e == "object" && e.env && e.env.REFLECT_METADATA_USE_MAP_POLYFILL === "true";
      var d = _ || typeof Map != "function" || typeof Map.prototype.entries != "function" ? function CreateMapPolyfill() {
        var e = {};
        var t = [];
        var n = function () {
          function MapIterator(e, t, n) {
            this._index = 0;
            this._keys = e;
            this._values = t;
            this._selector = n;
          }
          MapIterator.prototype["@@iterator"] = function () {
            return this;
          };
          MapIterator.prototype[s] = function () {
            return this;
          };
          MapIterator.prototype.next = function () {
            var e = this._index;
            if (e >= 0 && e < this._keys.length) {
              var n = this._selector(this._keys[e], this._values[e]);
              if (e + 1 >= this._keys.length) {
                this._index = -1;
                this._keys = t;
                this._values = t;
              } else {
                this._index++;
              }
              return {
                value: n,
                done: false
              };
            }
            return {
              value: undefined,
              done: true
            };
          };
          MapIterator.prototype.throw = function (e) {
            if (this._index >= 0) {
              this._index = -1;
              this._keys = t;
              this._values = t;
            }
            throw e;
          };
          MapIterator.prototype.return = function (e) {
            if (this._index >= 0) {
              this._index = -1;
              this._keys = t;
              this._values = t;
            }
            return {
              value: e,
              done: true
            };
          };
          return MapIterator;
        }();
        return function () {
          function Map() {
            this._keys = [];
            this._values = [];
            this._cacheKey = e;
            this._cacheIndex = -2;
          }
          Object.defineProperty(Map.prototype, "size", {
            get: function () {
              return this._keys.length;
            },
            enumerable: true,
            configurable: true
          });
          Map.prototype.has = function (e) {
            return this._find(e, false) >= 0;
          };
          Map.prototype.get = function (e) {
            var t = this._find(e, false);
            if (t >= 0) {
              return this._values[t];
            } else {
              return undefined;
            }
          };
          Map.prototype.set = function (e, t) {
            var n = this._find(e, true);
            this._values[n] = t;
            return this;
          };
          Map.prototype.delete = function (t) {
            var n = this._find(t, false);
            if (n >= 0) {
              for (var i = this._keys.length, a = n + 1; a < i; a++) {
                this._keys[a - 1] = this._keys[a];
                this._values[a - 1] = this._values[a];
              }
              this._keys.length--;
              this._values.length--;
              if (t === this._cacheKey) {
                this._cacheKey = e;
                this._cacheIndex = -2;
              }
              return true;
            }
            return false;
          };
          Map.prototype.clear = function () {
            this._keys.length = 0;
            this._values.length = 0;
            this._cacheKey = e;
            this._cacheIndex = -2;
          };
          Map.prototype.keys = function () {
            return new n(this._keys, this._values, getKey);
          };
          Map.prototype.values = function () {
            return new n(this._keys, this._values, getValue);
          };
          Map.prototype.entries = function () {
            return new n(this._keys, this._values, getEntry);
          };
          Map.prototype["@@iterator"] = function () {
            return this.entries();
          };
          Map.prototype[s] = function () {
            return this.entries();
          };
          Map.prototype._find = function (e, t) {
            if (this._cacheKey !== e) {
              this._cacheIndex = this._keys.indexOf(this._cacheKey = e);
            }
            if (this._cacheIndex < 0 && t) {
              this._cacheIndex = this._keys.length;
              this._keys.push(e);
              this._values.push(undefined);
            }
            return this._cacheIndex;
          };
          return Map;
        }();
        function getKey(e, t) {
          return e;
        }
        function getValue(e, t) {
          return t;
        }
        function getEntry(e, t) {
          return [e, t];
        }
      }() : Map;
      var m = _ || typeof Set != "function" || typeof Set.prototype.entries != "function" ? function CreateSetPolyfill() {
        return function () {
          function Set() {
            this._map = new d();
          }
          Object.defineProperty(Set.prototype, "size", {
            get: function () {
              return this._map.size;
            },
            enumerable: true,
            configurable: true
          });
          Set.prototype.has = function (e) {
            return this._map.has(e);
          };
          Set.prototype.add = function (e) {
            this._map.set(e, e);
            return this;
          };
          Set.prototype.delete = function (e) {
            return this._map.delete(e);
          };
          Set.prototype.clear = function () {
            this._map.clear();
          };
          Set.prototype.keys = function () {
            return this._map.keys();
          };
          Set.prototype.values = function () {
            return this._map.values();
          };
          Set.prototype.entries = function () {
            return this._map.entries();
          };
          Set.prototype["@@iterator"] = function () {
            return this.keys();
          };
          Set.prototype[s] = function () {
            return this.keys();
          };
          return Set;
        }();
      }() : Set;
      var h = new (_ || typeof WeakMap != "function" ? function CreateWeakMapPolyfill() {
        var e = 16;
        var t = u.create();
        var i = CreateUniqueKey();
        return function () {
          function WeakMap() {
            this._key = CreateUniqueKey();
          }
          WeakMap.prototype.has = function (e) {
            var t = GetOrCreateWeakMapTable(e, false);
            return t !== undefined && u.has(t, this._key);
          };
          WeakMap.prototype.get = function (e) {
            var t = GetOrCreateWeakMapTable(e, false);
            if (t !== undefined) {
              return u.get(t, this._key);
            } else {
              return undefined;
            }
          };
          WeakMap.prototype.set = function (e, t) {
            var n = GetOrCreateWeakMapTable(e, true);
            n[this._key] = t;
            return this;
          };
          WeakMap.prototype.delete = function (e) {
            var t = GetOrCreateWeakMapTable(e, false);
            return t !== undefined && delete t[this._key];
          };
          WeakMap.prototype.clear = function () {
            this._key = CreateUniqueKey();
          };
          return WeakMap;
        }();
        function CreateUniqueKey() {
          var e;
          do {
            e = "@@WeakMap@@" + CreateUUID();
          } while (u.has(t, e));
          t[e] = true;
          return e;
        }
        function GetOrCreateWeakMapTable(e, t) {
          if (!n.call(e, i)) {
            if (!t) {
              return;
            }
            Object.defineProperty(e, i, {
              value: u.create()
            });
          }
          return e[i];
        }
        function FillRandomBytes(e, t) {
          for (var n = 0; n < t; ++n) {
            e[n] = Math.random() * 255 | 0;
          }
          return e;
        }
        function CreateUUID() {
          var t = function GenRandomBytes(e) {
            if (typeof Uint8Array == "function") {
              if (typeof crypto != "undefined") {
                return crypto.getRandomValues(new Uint8Array(e));
              } else if (typeof msCrypto != "undefined") {
                return msCrypto.getRandomValues(new Uint8Array(e));
              } else {
                return FillRandomBytes(new Uint8Array(e), e);
              }
            }
            return FillRandomBytes(new Array(e), e);
          }(e);
          t[6] = t[6] & 79 | 64;
          t[8] = t[8] & 191 | 128;
          var n = "";
          for (var i = 0; i < e; ++i) {
            var a = t[i];
            if (i === 4 || i === 6 || i === 8) {
              n += "-";
            }
            if (a < 16) {
              n += "0";
            }
            n += a.toString(16).toLowerCase();
          }
          return n;
        }
      }() : WeakMap)();
      function GetOrCreateMetadataMap(e, t, n) {
        var i = h.get(e);
        if (IsUndefined(i)) {
          if (!n) {
            return;
          }
          i = new d();
          h.set(e, i);
        }
        var a = i.get(t);
        if (IsUndefined(a)) {
          if (!n) {
            return;
          }
          a = new d();
          i.set(t, a);
        }
        return a;
      }
      function OrdinaryHasOwnMetadata(e, t, n) {
        var i = GetOrCreateMetadataMap(t, n, false);
        return !IsUndefined(i) && function ToBoolean(e) {
          return !!e;
        }(i.has(e));
      }
      function OrdinaryGetOwnMetadata(e, t, n) {
        var i = GetOrCreateMetadataMap(t, n, false);
        if (!IsUndefined(i)) {
          return i.get(e);
        }
      }
      function OrdinaryDefineOwnMetadata(e, t, n, i) {
        var a = GetOrCreateMetadataMap(n, i, true);
        a.set(e, t);
      }
      function OrdinaryOwnMetadataKeys(e, t) {
        var n = [];
        var i = GetOrCreateMetadataMap(e, t, false);
        if (IsUndefined(i)) {
          return n;
        }
        var a = i.keys();
        var r = function GetIterator(e) {
          var t = GetMethod(e, s);
          if (!IsCallable(t)) {
            throw new TypeError();
          }
          var n = t.call(e);
          if (!IsObject(n)) {
            throw new TypeError();
          }
          return n;
        }(a);
        var o = 0;
        while (true) {
          var l = IteratorStep(r);
          if (!l) {
            n.length = o;
            return n;
          }
          var u = l.value;
          try {
            n[o] = u;
          } catch (e) {
            try {
              IteratorClose(r);
            } finally {
              throw e;
            }
          }
          o++;
        }
      }
      function Type(e) {
        if (e === null) {
          return 1;
        }
        switch (typeof e) {
          case "undefined":
            return 0;
          case "boolean":
            return 2;
          case "string":
            return 3;
          case "symbol":
            return 4;
          case "number":
            return 5;
          case "object":
            if (e === null) {
              return 1;
            } else {
              return 6;
            }
          default:
            return 6;
        }
      }
      function IsUndefined(e) {
        return e === undefined;
      }
      function IsNull(e) {
        return e === null;
      }
      function IsObject(e) {
        if (typeof e == "object") {
          return e !== null;
        } else {
          return typeof e == "function";
        }
      }
      function ToPrimitive(e, t) {
        switch (Type(e)) {
          case 0:
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            return e;
        }
        var n = t === 3 ? "string" : t === 5 ? "number" : "default";
        var i = GetMethod(e, a);
        if (i !== undefined) {
          var s = i.call(e, n);
          if (IsObject(s)) {
            throw new TypeError();
          }
          return s;
        }
        return function OrdinaryToPrimitive(e, t) {
          if (t === "string") {
            var n = e.toString;
            if (IsCallable(n)) {
              var i = n.call(e);
              if (!IsObject(i)) {
                return i;
              }
            }
            var a = e.valueOf;
            if (IsCallable(a)) {
              var i = a.call(e);
              if (!IsObject(i)) {
                return i;
              }
            }
          } else {
            var a = e.valueOf;
            if (IsCallable(a)) {
              var i = a.call(e);
              if (!IsObject(i)) {
                return i;
              }
            }
            var s = e.toString;
            if (IsCallable(s)) {
              var i = s.call(e);
              if (!IsObject(i)) {
                return i;
              }
            }
          }
          throw new TypeError();
        }(e, n === "default" ? "number" : n);
      }
      function ToPropertyKey(e) {
        var t = ToPrimitive(e, 3);
        if (function IsSymbol(e) {
          return typeof e == "symbol";
        }(t)) {
          return t;
        } else {
          return function ToString(e) {
            return "" + e;
          }(t);
        }
      }
      function IsArray(e) {
        if (Array.isArray) {
          return Array.isArray(e);
        } else if (e instanceof Object) {
          return e instanceof Array;
        } else {
          return Object.prototype.toString.call(e) === "[object Array]";
        }
      }
      function IsCallable(e) {
        return typeof e == "function";
      }
      function IsConstructor(e) {
        return typeof e == "function";
      }
      function GetMethod(e, t) {
        var n = e[t];
        if (n !== undefined && n !== null) {
          if (!IsCallable(n)) {
            throw new TypeError();
          }
          return n;
        }
      }
      function IteratorStep(e) {
        var t = e.next();
        return !t.done && t;
      }
      function IteratorClose(e) {
        var t = e.return;
        if (t) {
          t.call(e);
        }
      }
      function OrdinaryGetPrototypeOf(e) {
        var t = Object.getPrototypeOf(e);
        if (typeof e != "function" || e === c) {
          return t;
        }
        if (t !== c) {
          return t;
        }
        var n = e.prototype;
        var i = n && Object.getPrototypeOf(n);
        if (i == null || i === Object.prototype) {
          return t;
        }
        var a = i.constructor;
        if (typeof a != "function") {
          return t;
        } else if (a === e) {
          return t;
        } else {
          return a;
        }
      }
      function MakeDictionary(e) {
        e.__ = undefined;
        delete e.__;
        return e;
      }
      t("decorate", function decorate(e, t, n, i) {
        if (IsUndefined(n)) {
          if (!IsArray(e)) {
            throw new TypeError();
          }
          if (!IsConstructor(t)) {
            throw new TypeError();
          }
          return function DecorateConstructor(e, t) {
            for (var n = e.length - 1; n >= 0; --n) {
              var i = e[n];
              var a = i(t);
              if (!IsUndefined(a) && !IsNull(a)) {
                if (!IsConstructor(a)) {
                  throw new TypeError();
                }
                t = a;
              }
            }
            return t;
          }(e, t);
        }
        if (!IsArray(e)) {
          throw new TypeError();
        }
        if (!IsObject(t)) {
          throw new TypeError();
        }
        if (!IsObject(i) && !IsUndefined(i) && !IsNull(i)) {
          throw new TypeError();
        }
        if (IsNull(i)) {
          i = undefined;
        }
        n = ToPropertyKey(n);
        return function DecorateProperty(e, t, n, i) {
          for (var a = e.length - 1; a >= 0; --a) {
            var s = e[a];
            var r = s(t, n, i);
            if (!IsUndefined(r) && !IsNull(r)) {
              if (!IsObject(r)) {
                throw new TypeError();
              }
              i = r;
            }
          }
          return i;
        }(e, t, n, i);
      });
      t("metadata", function metadata(e, t) {
        return function decorator(n, i) {
          if (!IsObject(n)) {
            throw new TypeError();
          }
          if (!IsUndefined(i) && !function IsPropertyKey(e) {
            switch (Type(e)) {
              case 3:
              case 4:
                return true;
              default:
                return false;
            }
          }(i)) {
            throw new TypeError();
          }
          OrdinaryDefineOwnMetadata(e, t, n, i);
        };
      });
      t("defineMetadata", function defineMetadata(e, t, n, i) {
        if (!IsObject(n)) {
          throw new TypeError();
        }
        if (!IsUndefined(i)) {
          i = ToPropertyKey(i);
        }
        return OrdinaryDefineOwnMetadata(e, t, n, i);
      });
      t("hasMetadata", function hasMetadata(e, t, n) {
        if (!IsObject(t)) {
          throw new TypeError();
        }
        if (!IsUndefined(n)) {
          n = ToPropertyKey(n);
        }
        return function OrdinaryHasMetadata(e, t, n) {
          var i = OrdinaryHasOwnMetadata(e, t, n);
          if (i) {
            return true;
          }
          var a = OrdinaryGetPrototypeOf(t);
          if (!IsNull(a)) {
            return OrdinaryHasMetadata(e, a, n);
          }
          return false;
        }(e, t, n);
      });
      t("hasOwnMetadata", function hasOwnMetadata(e, t, n) {
        if (!IsObject(t)) {
          throw new TypeError();
        }
        if (!IsUndefined(n)) {
          n = ToPropertyKey(n);
        }
        return OrdinaryHasOwnMetadata(e, t, n);
      });
      t("getMetadata", function getMetadata(e, t, n) {
        if (!IsObject(t)) {
          throw new TypeError();
        }
        if (!IsUndefined(n)) {
          n = ToPropertyKey(n);
        }
        return function OrdinaryGetMetadata(e, t, n) {
          var i = OrdinaryHasOwnMetadata(e, t, n);
          if (i) {
            return OrdinaryGetOwnMetadata(e, t, n);
          }
          var a = OrdinaryGetPrototypeOf(t);
          if (!IsNull(a)) {
            return OrdinaryGetMetadata(e, a, n);
          }
          return;
        }(e, t, n);
      });
      t("getOwnMetadata", function getOwnMetadata(e, t, n) {
        if (!IsObject(t)) {
          throw new TypeError();
        }
        if (!IsUndefined(n)) {
          n = ToPropertyKey(n);
        }
        return OrdinaryGetOwnMetadata(e, t, n);
      });
      t("getMetadataKeys", function getMetadataKeys(e, t) {
        if (!IsObject(e)) {
          throw new TypeError();
        }
        if (!IsUndefined(t)) {
          t = ToPropertyKey(t);
        }
        return function OrdinaryMetadataKeys(e, t) {
          var n = OrdinaryOwnMetadataKeys(e, t);
          var i = OrdinaryGetPrototypeOf(e);
          if (i === null) {
            return n;
          }
          var a = OrdinaryMetadataKeys(i, t);
          if (a.length <= 0) {
            return n;
          }
          if (n.length <= 0) {
            return a;
          }
          var s = new m();
          var r = [];
          for (var o = 0, l = n; o < l.length; o++) {
            var u = l[o];
            var c = s.has(u);
            if (!c) {
              s.add(u);
              r.push(u);
            }
          }
          for (var _ = 0, d = a; _ < d.length; _++) {
            var u = d[_];
            var c = s.has(u);
            if (!c) {
              s.add(u);
              r.push(u);
            }
          }
          return r;
        }(e, t);
      });
      t("getOwnMetadataKeys", function getOwnMetadataKeys(e, t) {
        if (!IsObject(e)) {
          throw new TypeError();
        }
        if (!IsUndefined(t)) {
          t = ToPropertyKey(t);
        }
        return OrdinaryOwnMetadataKeys(e, t);
      });
      t("deleteMetadata", function deleteMetadata(e, t, n) {
        if (!IsObject(t)) {
          throw new TypeError();
        }
        if (!IsUndefined(n)) {
          n = ToPropertyKey(n);
        }
        var i = GetOrCreateMetadataMap(t, n, false);
        if (IsUndefined(i)) {
          return false;
        }
        if (!i.delete(e)) {
          return false;
        }
        if (i.size > 0) {
          return true;
        }
        var a = h.get(t);
        a.delete(n);
        return a.size > 0 || (h.delete(t), true);
      });
    })(s);
  })();
})(n ||= {});