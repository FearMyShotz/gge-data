Object.defineProperty(Object.prototype, "bindFunction", {
  enumerable: false,
  writable: true,
  value: function (e) {
    if (e === null || e === undefined) {
      return e;
    }
    if (typeof e != "function") {
      throw new Error("Parameter \"func\" is not a funciton");
    }
    this._bindFunction_boundFunctions ||= new WeakMap();
    if (!this._bindFunction_boundFunctions.has(e)) {
      this._bindFunction_boundFunctions.set(e, e.bind(this));
    }
    var t = this._bindFunction_boundFunctions.get(e);
    t.functionIsBound = true;
    return t;
  }
});