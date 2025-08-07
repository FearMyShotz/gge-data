/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
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
function i(e, t) {
  return (i = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (e, t) {
    e.__proto__ = t;
  } || function (e, t) {
    for (var n in t) {
      if (t.hasOwnProperty(n)) {
        e[n] = t[n];
      }
    }
  })(e, t);
}
export function __extends(e, t) {
  function __() {
    this.constructor = e;
  }
  i(e, t);
  e.prototype = t === null ? Object.create(t) : (__.prototype = t.prototype, new __());
}
export function __assign() {
  return (__assign = Object.assign || function __assign(e) {
    var t;
    for (var n = 1, i = arguments.length; n < i; n++) {
      for (var a in t = arguments[n]) {
        if (Object.prototype.hasOwnProperty.call(t, a)) {
          e[a] = t[a];
        }
      }
    }
    return e;
  }).apply(this, arguments);
}
export function __rest(e, t) {
  var n = {};
  for (var i in e) {
    if (Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0) {
      n[i] = e[i];
    }
  }
  if (e != null && typeof Object.getOwnPropertySymbols == "function") {
    var a = 0;
    for (i = Object.getOwnPropertySymbols(e); a < i.length; a++) {
      if (t.indexOf(i[a]) < 0) {
        n[i[a]] = e[i[a]];
      }
    }
  }
  return n;
}
export function __decorate(e, t, n, i) {
  var a;
  var s = arguments.length;
  var r = s < 3 ? t : i === null ? i = Object.getOwnPropertyDescriptor(t, n) : i;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") {
    r = Reflect.decorate(e, t, n, i);
  } else {
    for (var o = e.length - 1; o >= 0; o--) {
      if (a = e[o]) {
        r = (s < 3 ? a(r) : s > 3 ? a(t, n, r) : a(t, n)) || r;
      }
    }
  }
  if (s > 3 && r) {
    Object.defineProperty(t, n, r);
  }
  return r;
}
export function __param(e, t) {
  return function (n, i) {
    t(n, i, e);
  };
}
export function __metadata(e, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function") {
    return Reflect.metadata(e, t);
  }
}
export function __awaiter(e, t, n, i) {
  return new (n ||= Promise)(function (a, s) {
    function fulfilled(e) {
      try {
        step(i.next(e));
      } catch (e) {
        s(e);
      }
    }
    function rejected(e) {
      try {
        step(i.throw(e));
      } catch (e) {
        s(e);
      }
    }
    function step(e) {
      if (e.done) {
        a(e.value);
      } else {
        new n(function (t) {
          t(e.value);
        }).then(fulfilled, rejected);
      }
    }
    step((i = i.apply(e, t || [])).next());
  });
}
export function __generator(e, t) {
  var n;
  var i;
  var a;
  var s;
  var r = {
    label: 0,
    sent: function () {
      if (a[0] & 1) {
        throw a[1];
      }
      return a[1];
    },
    trys: [],
    ops: []
  };
  s = {
    next: verb(0),
    throw: verb(1),
    return: verb(2)
  };
  if (typeof Symbol == "function") {
    s[Symbol.iterator] = function () {
      return this;
    };
  }
  return s;
  function verb(s) {
    return function (o) {
      return function step(s) {
        if (n) {
          throw new TypeError("Generator is already executing.");
        }
        while (r) {
          try {
            n = 1;
            if (i && (a = s[0] & 2 ? i.return : s[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, s[1])).done) {
              return a;
            }
            i = 0;
            if (a) {
              s = [s[0] & 2, a.value];
            }
            switch (s[0]) {
              case 0:
              case 1:
                a = s;
                break;
              case 4:
                r.label++;
                return {
                  value: s[1],
                  done: false
                };
              case 5:
                r.label++;
                i = s[1];
                s = [0];
                continue;
              case 7:
                s = r.ops.pop();
                r.trys.pop();
                continue;
              default:
                if (!(a = (a = r.trys).length > 0 && a[a.length - 1]) && (s[0] === 6 || s[0] === 2)) {
                  r = 0;
                  continue;
                }
                if (s[0] === 3 && (!a || s[1] > a[0] && s[1] < a[3])) {
                  r.label = s[1];
                  break;
                }
                if (s[0] === 6 && r.label < a[1]) {
                  r.label = a[1];
                  a = s;
                  break;
                }
                if (a && r.label < a[2]) {
                  r.label = a[2];
                  r.ops.push(s);
                  break;
                }
                if (a[2]) {
                  r.ops.pop();
                }
                r.trys.pop();
                continue;
            }
            s = t.call(e, r);
          } catch (e) {
            s = [6, e];
            i = 0;
          } finally {
            n = a = 0;
          }
        }
        if (s[0] & 5) {
          throw s[1];
        }
        return {
          value: s[0] ? s[1] : undefined,
          done: true
        };
      }([s, o]);
    };
  }
}
export function __exportStar(e, t) {
  for (var n in e) {
    if (!t.hasOwnProperty(n)) {
      t[n] = e[n];
    }
  }
}
export function __values(e) {
  var t = typeof Symbol == "function" && e[Symbol.iterator];
  var n = 0;
  if (t) {
    return t.call(e);
  } else {
    return {
      next: function () {
        if (e && n >= e.length) {
          e = undefined;
        }
        return {
          value: e && e[n++],
          done: !e
        };
      }
    };
  }
}
export function __read(e, t) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n) {
    return e;
  }
  var i;
  var a;
  var s = n.call(e);
  var r = [];
  try {
    while ((t === undefined || t-- > 0) && !(i = s.next()).done) {
      r.push(i.value);
    }
  } catch (e) {
    a = {
      error: e
    };
  } finally {
    try {
      if (i && !i.done && (n = s.return)) {
        n.call(s);
      }
    } finally {
      if (a) {
        throw a.error;
      }
    }
  }
  return r;
}
export function __spread() {
  var e = [];
  for (var t = 0; t < arguments.length; t++) {
    e = e.concat(__read(arguments[t]));
  }
  return e;
}
export function __await(e) {
  if (this instanceof __await) {
    this.v = e;
    return this;
  } else {
    return new __await(e);
  }
}
export function __asyncGenerator(e, t, n) {
  if (!Symbol.asyncIterator) {
    throw new TypeError("Symbol.asyncIterator is not defined.");
  }
  var i;
  var a = n.apply(e, t || []);
  var s = [];
  i = {};
  verb("next");
  verb("throw");
  verb("return");
  i[Symbol.asyncIterator] = function () {
    return this;
  };
  return i;
  function verb(e) {
    if (a[e]) {
      i[e] = function (t) {
        return new Promise(function (n, i) {
          if (!(s.push([e, t, n, i]) > 1)) {
            resume(e, t);
          }
        });
      };
    }
  }
  function resume(e, t) {
    try {
      (function step(e) {
        if (e.value instanceof __await) {
          Promise.resolve(e.value.v).then(fulfill, reject);
        } else {
          settle(s[0][2], e);
        }
      })(a[e](t));
    } catch (e) {
      settle(s[0][3], e);
    }
  }
  function fulfill(e) {
    resume("next", e);
  }
  function reject(e) {
    resume("throw", e);
  }
  function settle(e, t) {
    e(t);
    s.shift();
    if (s.length) {
      resume(s[0][0], s[0][1]);
    }
  }
}
export function __asyncDelegator(e) {
  var t;
  var n;
  t = {};
  verb("next");
  verb("throw", function (e) {
    throw e;
  });
  verb("return");
  t[Symbol.iterator] = function () {
    return this;
  };
  return t;
  function verb(i, a) {
    t[i] = e[i] ? function (t) {
      if (n = !n) {
        return {
          value: __await(e[i](t)),
          done: i === "return"
        };
      } else if (a) {
        return a(t);
      } else {
        return t;
      }
    } : a;
  }
}
export function __asyncValues(e) {
  if (!Symbol.asyncIterator) {
    throw new TypeError("Symbol.asyncIterator is not defined.");
  }
  var t;
  var n = e[Symbol.asyncIterator];
  if (n) {
    return n.call(e);
  } else {
    e = __values(e);
    t = {};
    verb("next");
    verb("throw");
    verb("return");
    t[Symbol.asyncIterator] = function () {
      return this;
    };
    return t;
  }
  function verb(n) {
    t[n] = e[n] && function (t) {
      return new Promise(function (i, a) {
        (function settle(e, t, n, i) {
          Promise.resolve(i).then(function (t) {
            e({
              value: t,
              done: n
            });
          }, t);
        })(i, a, (t = e[n](t)).done, t.value);
      });
    };
  }
}
export function __makeTemplateObject(e, t) {
  if (Object.defineProperty) {
    Object.defineProperty(e, "raw", {
      value: t
    });
  } else {
    e.raw = t;
  }
  return e;
}
export function __importStar(e) {
  if (e && e.__esModule) {
    return e;
  }
  var t = {};
  if (e != null) {
    for (var n in e) {
      if (Object.hasOwnProperty.call(e, n)) {
        t[n] = e[n];
      }
    }
  }
  t.default = e;
  return t;
}
export function __importDefault(e) {
  if (e && e.__esModule) {
    return e;
  } else {
    return {
      default: e
    };
  }
}