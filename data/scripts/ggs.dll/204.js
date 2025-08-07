module.exports = Type;
var i = require("./104.js");
((Type.prototype = Object.create(i.prototype)).constructor = Type).className = "Type";
var a = require("./46.js");
var s = require("./130.js");
var r = require("./69.js");
var o = require("./205.js");
var l = require("./206.js");
var u = require("./208.js");
var c = require("./203.js");
var _ = require("./202.js");
var d = require("./27.js");
var m = require("./511.js");
var h = require("./512.js");
var p = require("./513.js");
var g = require("./514.js");
var E = require("./515.js");
function Type(e, t) {
  i.call(this, e, t);
  this.fields = {};
  this.oneofs = undefined;
  this.extensions = undefined;
  this.reserved = undefined;
  this.group = undefined;
  this._fieldsById = null;
  this._fieldsArray = null;
  this._oneofsArray = null;
  this._ctor = null;
}
function clearCache(e) {
  e._fieldsById = e._fieldsArray = e._oneofsArray = null;
  delete e.encode;
  delete e.decode;
  delete e.verify;
  return e;
}
Object.defineProperties(Type.prototype, {
  fieldsById: {
    get: function () {
      if (this._fieldsById) {
        return this._fieldsById;
      }
      this._fieldsById = {};
      for (var e = Object.keys(this.fields), t = 0; t < e.length; ++t) {
        var n = this.fields[e[t]];
        var i = n.id;
        if (this._fieldsById[i]) {
          throw Error("duplicate id " + i + " in " + this);
        }
        this._fieldsById[i] = n;
      }
      return this._fieldsById;
    }
  },
  fieldsArray: {
    get: function () {
      return this._fieldsArray ||= d.toArray(this.fields);
    }
  },
  oneofsArray: {
    get: function () {
      return this._oneofsArray ||= d.toArray(this.oneofs);
    }
  },
  ctor: {
    get: function () {
      return this._ctor || (this.ctor = Type.generateConstructor(this)());
    },
    set: function (e) {
      var t = e.prototype;
      if (!(t instanceof u)) {
        (e.prototype = new u()).constructor = e;
        d.merge(e.prototype, t);
      }
      e.$type = e.prototype.$type = this;
      d.merge(e, u, true);
      this._ctor = e;
      for (var n = 0; n < this.fieldsArray.length; ++n) {
        this._fieldsArray[n].resolve();
      }
      var i = {};
      for (n = 0; n < this.oneofsArray.length; ++n) {
        i[this._oneofsArray[n].resolve().name] = {
          get: d.oneOfGetter(this._oneofsArray[n].oneof),
          set: d.oneOfSetter(this._oneofsArray[n].oneof)
        };
      }
      if (n) {
        Object.defineProperties(e.prototype, i);
      }
    }
  }
});
Type.generateConstructor = function generateConstructor(e) {
  var t;
  var n = d.codegen(["p"], e.name);
  for (var i = 0; i < e.fieldsArray.length; ++i) {
    if ((t = e._fieldsArray[i]).map) {
      n("this%s={}", d.safeProp(t.name));
    } else if (t.repeated) {
      n("this%s=[]", d.safeProp(t.name));
    }
  }
  return n("if(p)for(var ks=Object.keys(p),i=0;i<ks.length;++i)if(p[ks[i]]!=null)")("this[ks[i]]=p[ks[i]]");
};
Type.fromJSON = function fromJSON(e, t) {
  var n = new Type(e, t.options);
  n.extensions = t.extensions;
  n.reserved = t.reserved;
  for (var u = Object.keys(t.fields), c = 0; c < u.length; ++c) {
    n.add((t.fields[u[c]].keyType !== undefined ? o.fromJSON : r.fromJSON)(u[c], t.fields[u[c]]));
  }
  if (t.oneofs) {
    u = Object.keys(t.oneofs);
    c = 0;
    for (; c < u.length; ++c) {
      n.add(s.fromJSON(u[c], t.oneofs[u[c]]));
    }
  }
  if (t.nested) {
    u = Object.keys(t.nested);
    c = 0;
    for (; c < u.length; ++c) {
      var _ = t.nested[u[c]];
      n.add((_.id !== undefined ? r.fromJSON : _.fields !== undefined ? Type.fromJSON : _.values !== undefined ? a.fromJSON : _.methods !== undefined ? l.fromJSON : i.fromJSON)(u[c], _));
    }
  }
  if (t.extensions && t.extensions.length) {
    n.extensions = t.extensions;
  }
  if (t.reserved && t.reserved.length) {
    n.reserved = t.reserved;
  }
  if (t.group) {
    n.group = true;
  }
  if (t.comment) {
    n.comment = t.comment;
  }
  return n;
};
Type.prototype.toJSON = function toJSON(e) {
  var t = i.prototype.toJSON.call(this, e);
  var n = !!e && Boolean(e.keepComments);
  return d.toObject(["options", t && t.options || undefined, "oneofs", i.arrayToJSON(this.oneofsArray, e), "fields", i.arrayToJSON(this.fieldsArray.filter(function (e) {
    return !e.declaringField;
  }), e) || {}, "extensions", this.extensions && this.extensions.length ? this.extensions : undefined, "reserved", this.reserved && this.reserved.length ? this.reserved : undefined, "group", this.group || undefined, "nested", t && t.nested || undefined, "comment", n ? this.comment : undefined]);
};
Type.prototype.resolveAll = function resolveAll() {
  for (var e = this.fieldsArray, t = 0; t < e.length;) {
    e[t++].resolve();
  }
  var n = this.oneofsArray;
  for (t = 0; t < n.length;) {
    n[t++].resolve();
  }
  return i.prototype.resolveAll.call(this);
};
Type.prototype.get = function get(e) {
  return this.fields[e] || this.oneofs && this.oneofs[e] || this.nested && this.nested[e] || null;
};
Type.prototype.add = function add(e) {
  if (this.get(e.name)) {
    throw Error("duplicate name '" + e.name + "' in " + this);
  }
  if (e instanceof r && e.extend === undefined) {
    if (this._fieldsById ? this._fieldsById[e.id] : this.fieldsById[e.id]) {
      throw Error("duplicate id " + e.id + " in " + this);
    }
    if (this.isReservedId(e.id)) {
      throw Error("id " + e.id + " is reserved in " + this);
    }
    if (this.isReservedName(e.name)) {
      throw Error("name '" + e.name + "' is reserved in " + this);
    }
    if (e.parent) {
      e.parent.remove(e);
    }
    this.fields[e.name] = e;
    e.message = this;
    e.onAdd(this);
    return clearCache(this);
  }
  if (e instanceof s) {
    this.oneofs ||= {};
    this.oneofs[e.name] = e;
    e.onAdd(this);
    return clearCache(this);
  } else {
    return i.prototype.add.call(this, e);
  }
};
Type.prototype.remove = function remove(e) {
  if (e instanceof r && e.extend === undefined) {
    if (!this.fields || this.fields[e.name] !== e) {
      throw Error(e + " is not a member of " + this);
    }
    delete this.fields[e.name];
    e.parent = null;
    e.onRemove(this);
    return clearCache(this);
  }
  if (e instanceof s) {
    if (!this.oneofs || this.oneofs[e.name] !== e) {
      throw Error(e + " is not a member of " + this);
    }
    delete this.oneofs[e.name];
    e.parent = null;
    e.onRemove(this);
    return clearCache(this);
  }
  return i.prototype.remove.call(this, e);
};
Type.prototype.isReservedId = function isReservedId(e) {
  return i.isReservedId(this.reserved, e);
};
Type.prototype.isReservedName = function isReservedName(e) {
  return i.isReservedName(this.reserved, e);
};
Type.prototype.create = function create(e) {
  return new this.ctor(e);
};
Type.prototype.setup = function setup() {
  var e = this.fullName;
  var t = [];
  for (var n = 0; n < this.fieldsArray.length; ++n) {
    t.push(this._fieldsArray[n].resolve().resolvedType);
  }
  this.encode = m(this)({
    Writer: _,
    types: t,
    util: d
  });
  this.decode = h(this)({
    Reader: c,
    types: t,
    util: d
  });
  this.verify = p(this)({
    types: t,
    util: d
  });
  this.fromObject = g.fromObject(this)({
    types: t,
    util: d
  });
  this.toObject = g.toObject(this)({
    types: t,
    util: d
  });
  var i = E[e];
  if (i) {
    var a = Object.create(this);
    a.fromObject = this.fromObject;
    this.fromObject = i.fromObject.bind(a);
    a.toObject = this.toObject;
    this.toObject = i.toObject.bind(a);
  }
  return this;
};
Type.prototype.encode = function encode_setup(e, t) {
  return this.setup().encode(e, t);
};
Type.prototype.encodeDelimited = function encodeDelimited(e, t) {
  return this.encode(e, t && t.len ? t.fork() : t).ldelim();
};
Type.prototype.decode = function decode_setup(e, t) {
  return this.setup().decode(e, t);
};
Type.prototype.decodeDelimited = function decodeDelimited(e) {
  if (!(e instanceof c)) {
    e = c.create(e);
  }
  return this.decode(e, e.uint32());
};
Type.prototype.verify = function verify_setup(e) {
  return this.setup().verify(e);
};
Type.prototype.fromObject = function fromObject(e) {
  return this.setup().fromObject(e);
};
Type.prototype.toObject = function toObject(e, t) {
  return this.setup().toObject(e, t);
};
Type.d = function decorateType(e) {
  return function typeDecorator(t) {
    d.decorateType(t, e);
  };
};