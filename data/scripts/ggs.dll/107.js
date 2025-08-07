export var AttrPlugin = require("./1.js")._gsScope._gsDefine.plugin({
  propName: "attr",
  API: 2,
  version: "0.6.1",
  init: function (e, t, n, i) {
    var a;
    var s;
    if (typeof e.setAttribute != "function") {
      return false;
    }
    for (a in t) {
      if (typeof (s = t[a]) == "function") {
        s = s(i, e);
      }
      this._addTween(e, "setAttribute", e.getAttribute(a) + "", s + "", a, false, a);
      this._overwriteProps.push(a);
    }
    return true;
  }
});
/*!
 * VERSION: 0.6.1
 * DATE: 2018-08-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */