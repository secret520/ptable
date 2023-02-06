(function (sttc) {
  /* 
 
 Copyright The Closure Library Authors. 
 SPDX-License-Identifier: Apache-2.0 
*/
  var n, aa;
  function ba(a) {
    var b = 0;
    return function () {
      return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
    };
  }
  var ca =
    "function" == typeof Object.defineProperties
      ? Object.defineProperty
      : function (a, b, c) {
          if (a == Array.prototype || a == Object.prototype) return a;
          a[b] = c.value;
          return a;
        };
  function da(a) {
    a = [
      "object" == typeof globalThis && globalThis,
      a,
      "object" == typeof window && window,
      "object" == typeof self && self,
      "object" == typeof global && global,
    ];
    for (var b = 0; b < a.length; ++b) {
      var c = a[b];
      if (c && c.Math == Math) return c;
    }
    throw Error("Cannot find global object");
  }
  var ea = da(this),
    fa = "function" === typeof Symbol && "symbol" === typeof Symbol("x"),
    q = {},
    ha = {};
  function r(a, b) {
    var c = ha[b];
    if (null == c) return a[b];
    c = a[c];
    return void 0 !== c ? c : a[b];
  }
  function u(a, b, c) {
    if (b)
      a: {
        var d = a.split(".");
        a = 1 === d.length;
        var e = d[0],
          f;
        !a && e in q ? (f = q) : (f = ea);
        for (e = 0; e < d.length - 1; e++) {
          var g = d[e];
          if (!(g in f)) break a;
          f = f[g];
        }
        d = d[d.length - 1];
        c = fa && "es6" === c ? f[d] : null;
        b = b(c);
        null != b &&
          (a
            ? ca(q, d, { configurable: !0, writable: !0, value: b })
            : b !== c &&
              (void 0 === ha[d] &&
                ((a = (1e9 * Math.random()) >>> 0),
                (ha[d] = fa ? ea.Symbol(d) : "$jscp$" + a + "$" + d)),
              ca(f, ha[d], { configurable: !0, writable: !0, value: b })));
      }
  }
  u(
    "Symbol",
    function (a) {
      function b(f) {
        if (this instanceof b)
          throw new TypeError("Symbol is not a constructor");
        return new c(d + (f || "") + "_" + e++, f);
      }
      function c(f, g) {
        this.h = f;
        ca(this, "description", { configurable: !0, writable: !0, value: g });
      }
      if (a) return a;
      c.prototype.toString = function () {
        return this.h;
      };
      var d = "jscomp_symbol_" + ((1e9 * Math.random()) >>> 0) + "_",
        e = 0;
      return b;
    },
    "es6"
  );
  u(
    "Symbol.iterator",
    function (a) {
      if (a) return a;
      a = (0, q.Symbol)("Symbol.iterator");
      for (
        var b =
            "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(
              " "
            ),
          c = 0;
        c < b.length;
        c++
      ) {
        var d = ea[b[c]];
        "function" === typeof d &&
          "function" != typeof d.prototype[a] &&
          ca(d.prototype, a, {
            configurable: !0,
            writable: !0,
            value: function () {
              return ia(ba(this));
            },
          });
      }
      return a;
    },
    "es6"
  );
  function ia(a) {
    a = { next: a };
    a[r(q.Symbol, "iterator")] = function () {
      return this;
    };
    return a;
  }
  function ja(a) {
    return (a.raw = a);
  }
  function v(a) {
    var b =
      "undefined" != typeof q.Symbol &&
      r(q.Symbol, "iterator") &&
      a[r(q.Symbol, "iterator")];
    return b ? b.call(a) : { next: ba(a) };
  }
  function ka(a) {
    if (!(a instanceof Array)) {
      a = v(a);
      for (var b, c = []; !(b = a.next()).done; ) c.push(b.value);
      a = c;
    }
    return a;
  }
  function la(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
  }
  var ma =
    fa && "function" == typeof r(Object, "assign")
      ? r(Object, "assign")
      : function (a, b) {
          for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d) for (var e in d) la(d, e) && (a[e] = d[e]);
          }
          return a;
        };
  u(
    "Object.assign",
    function (a) {
      return a || ma;
    },
    "es6"
  );
  var na =
      "function" == typeof Object.create
        ? Object.create
        : function (a) {
            function b() {}
            b.prototype = a;
            return new b();
          },
    oa;
  if (fa && "function" == typeof Object.setPrototypeOf)
    oa = Object.setPrototypeOf;
  else {
    var pa;
    a: {
      var qa = { a: !0 },
        ra = {};
      try {
        ra.__proto__ = qa;
        pa = ra.a;
        break a;
      } catch (a) {}
      pa = !1;
    }
    oa = pa
      ? function (a, b) {
          a.__proto__ = b;
          if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
          return a;
        }
      : null;
  }
  var sa = oa;
  function w(a, b) {
    a.prototype = na(b.prototype);
    a.prototype.constructor = a;
    if (sa) sa(a, b);
    else
      for (var c in b)
        if ("prototype" != c)
          if (Object.defineProperties) {
            var d = Object.getOwnPropertyDescriptor(b, c);
            d && Object.defineProperty(a, c, d);
          } else a[c] = b[c];
    a.rc = b.prototype;
  }
  function ta() {
    this.l = !1;
    this.i = null;
    this.u = void 0;
    this.h = 1;
    this.A = 0;
    this.j = null;
  }
  function ua(a) {
    if (a.l) throw new TypeError("Generator is already running");
    a.l = !0;
  }
  ta.prototype.m = function (a) {
    this.u = a;
  };
  function va(a, b) {
    a.j = { exception: b, vb: !0 };
    a.h = a.A;
  }
  ta.prototype.return = function (a) {
    this.j = { return: a };
    this.h = this.A;
  };
  function wa(a, b, c) {
    a.h = c;
    return { value: b };
  }
  function xa(a) {
    this.h = new ta();
    this.i = a;
  }
  function ya(a, b) {
    ua(a.h);
    var c = a.h.i;
    if (c)
      return za(
        a,
        "return" in c
          ? c["return"]
          : function (d) {
              return { value: d, done: !0 };
            },
        b,
        a.h.return
      );
    a.h.return(b);
    return Aa(a);
  }
  function za(a, b, c, d) {
    try {
      var e = b.call(a.h.i, c);
      if (!(e instanceof Object))
        throw new TypeError("Iterator result " + e + " is not an object");
      if (!e.done) return (a.h.l = !1), e;
      var f = e.value;
    } catch (g) {
      return (a.h.i = null), va(a.h, g), Aa(a);
    }
    a.h.i = null;
    d.call(a.h, f);
    return Aa(a);
  }
  function Aa(a) {
    for (; a.h.h; )
      try {
        var b = a.i(a.h);
        if (b) return (a.h.l = !1), { value: b.value, done: !1 };
      } catch (c) {
        (a.h.u = void 0), va(a.h, c);
      }
    a.h.l = !1;
    if (a.h.j) {
      b = a.h.j;
      a.h.j = null;
      if (b.vb) throw b.exception;
      return { value: b.return, done: !0 };
    }
    return { value: void 0, done: !0 };
  }
  function Ba(a) {
    this.next = function (b) {
      ua(a.h);
      a.h.i ? (b = za(a, a.h.i.next, b, a.h.m)) : (a.h.m(b), (b = Aa(a)));
      return b;
    };
    this.throw = function (b) {
      ua(a.h);
      a.h.i ? (b = za(a, a.h.i["throw"], b, a.h.m)) : (va(a.h, b), (b = Aa(a)));
      return b;
    };
    this.return = function (b) {
      return ya(a, b);
    };
    this[r(q.Symbol, "iterator")] = function () {
      return this;
    };
  }
  function Ca(a) {
    function b(d) {
      return a.next(d);
    }
    function c(d) {
      return a.throw(d);
    }
    return new q.Promise(function (d, e) {
      function f(g) {
        g.done ? d(g.value) : q.Promise.resolve(g.value).then(b, c).then(f, e);
      }
      f(a.next());
    });
  }
  function Da(a) {
    return Ca(new Ba(new xa(a)));
  }
  function Ea() {
    for (var a = Number(this), b = [], c = a; c < arguments.length; c++)
      b[c - a] = arguments[c];
    return b;
  }
  u(
    "Promise",
    function (a) {
      function b(g) {
        this.h = 0;
        this.j = void 0;
        this.i = [];
        this.u = !1;
        var h = this.l();
        try {
          g(h.resolve, h.reject);
        } catch (k) {
          h.reject(k);
        }
      }
      function c() {
        this.h = null;
      }
      function d(g) {
        return g instanceof b
          ? g
          : new b(function (h) {
              h(g);
            });
      }
      if (a) return a;
      c.prototype.i = function (g) {
        if (null == this.h) {
          this.h = [];
          var h = this;
          this.j(function () {
            h.m();
          });
        }
        this.h.push(g);
      };
      var e = ea.setTimeout;
      c.prototype.j = function (g) {
        e(g, 0);
      };
      c.prototype.m = function () {
        for (; this.h && this.h.length; ) {
          var g = this.h;
          this.h = [];
          for (var h = 0; h < g.length; ++h) {
            var k = g[h];
            g[h] = null;
            try {
              k();
            } catch (l) {
              this.l(l);
            }
          }
        }
        this.h = null;
      };
      c.prototype.l = function (g) {
        this.j(function () {
          throw g;
        });
      };
      b.prototype.l = function () {
        function g(l) {
          return function (m) {
            k || ((k = !0), l.call(h, m));
          };
        }
        var h = this,
          k = !1;
        return { resolve: g(this.M), reject: g(this.m) };
      };
      b.prototype.M = function (g) {
        if (g === this)
          this.m(new TypeError("A Promise cannot resolve to itself"));
        else if (g instanceof b) this.X(g);
        else {
          a: switch (typeof g) {
            case "object":
              var h = null != g;
              break a;
            case "function":
              h = !0;
              break a;
            default:
              h = !1;
          }
          h ? this.L(g) : this.A(g);
        }
      };
      b.prototype.L = function (g) {
        var h = void 0;
        try {
          h = g.then;
        } catch (k) {
          this.m(k);
          return;
        }
        "function" == typeof h ? this.ka(h, g) : this.A(g);
      };
      b.prototype.m = function (g) {
        this.B(2, g);
      };
      b.prototype.A = function (g) {
        this.B(1, g);
      };
      b.prototype.B = function (g, h) {
        if (0 != this.h)
          throw Error(
            "Cannot settle(" +
              g +
              ", " +
              h +
              "): Promise already settled in state" +
              this.h
          );
        this.h = g;
        this.j = h;
        2 === this.h && this.N();
        this.C();
      };
      b.prototype.N = function () {
        var g = this;
        e(function () {
          if (g.I()) {
            var h = ea.console;
            "undefined" !== typeof h && h.error(g.j);
          }
        }, 1);
      };
      b.prototype.I = function () {
        if (this.u) return !1;
        var g = ea.CustomEvent,
          h = ea.Event,
          k = ea.dispatchEvent;
        if ("undefined" === typeof k) return !0;
        "function" === typeof g
          ? (g = new g("unhandledrejection", { cancelable: !0 }))
          : "function" === typeof h
          ? (g = new h("unhandledrejection", { cancelable: !0 }))
          : ((g = ea.document.createEvent("CustomEvent")),
            g.initCustomEvent("unhandledrejection", !1, !0, g));
        g.promise = this;
        g.reason = this.j;
        return k(g);
      };
      b.prototype.C = function () {
        if (null != this.i) {
          for (var g = 0; g < this.i.length; ++g) f.i(this.i[g]);
          this.i = null;
        }
      };
      var f = new c();
      b.prototype.X = function (g) {
        var h = this.l();
        g.ma(h.resolve, h.reject);
      };
      b.prototype.ka = function (g, h) {
        var k = this.l();
        try {
          g.call(h, k.resolve, k.reject);
        } catch (l) {
          k.reject(l);
        }
      };
      b.prototype.then = function (g, h) {
        function k(t, y) {
          return "function" == typeof t
            ? function (D) {
                try {
                  l(t(D));
                } catch (z) {
                  m(z);
                }
              }
            : y;
        }
        var l,
          m,
          p = new b(function (t, y) {
            l = t;
            m = y;
          });
        this.ma(k(g, l), k(h, m));
        return p;
      };
      b.prototype.catch = function (g) {
        return this.then(void 0, g);
      };
      b.prototype.ma = function (g, h) {
        function k() {
          switch (l.h) {
            case 1:
              g(l.j);
              break;
            case 2:
              h(l.j);
              break;
            default:
              throw Error("Unexpected state: " + l.h);
          }
        }
        var l = this;
        null == this.i ? f.i(k) : this.i.push(k);
        this.u = !0;
      };
      b.resolve = d;
      b.reject = function (g) {
        return new b(function (h, k) {
          k(g);
        });
      };
      b.race = function (g) {
        return new b(function (h, k) {
          for (var l = v(g), m = l.next(); !m.done; m = l.next())
            d(m.value).ma(h, k);
        });
      };
      b.all = function (g) {
        var h = v(g),
          k = h.next();
        return k.done
          ? d([])
          : new b(function (l, m) {
              function p(D) {
                return function (z) {
                  t[D] = z;
                  y--;
                  0 == y && l(t);
                };
              }
              var t = [],
                y = 0;
              do
                t.push(void 0),
                  y++,
                  d(k.value).ma(p(t.length - 1), m),
                  (k = h.next());
              while (!k.done);
            });
      };
      return b;
    },
    "es6"
  );
  u(
    "Array.prototype.find",
    function (a) {
      return a
        ? a
        : function (b, c) {
            a: {
              var d = this;
              d instanceof String && (d = String(d));
              for (var e = d.length, f = 0; f < e; f++) {
                var g = d[f];
                if (b.call(c, g, f, d)) {
                  b = g;
                  break a;
                }
              }
              b = void 0;
            }
            return b;
          };
    },
    "es6"
  );
  u(
    "WeakMap",
    function (a) {
      function b(g) {
        this.h = (f += Math.random() + 1).toString();
        if (g) {
          g = v(g);
          for (var h; !(h = g.next()).done; )
            (h = h.value), this.set(h[0], h[1]);
        }
      }
      function c() {}
      function d(g) {
        var h = typeof g;
        return ("object" === h && null !== g) || "function" === h;
      }
      if (
        (function () {
          if (!a || !Object.seal) return !1;
          try {
            var g = Object.seal({}),
              h = Object.seal({}),
              k = new a([
                [g, 2],
                [h, 3],
              ]);
            if (2 != k.get(g) || 3 != k.get(h)) return !1;
            k.delete(g);
            k.set(h, 4);
            return !k.has(g) && 4 == k.get(h);
          } catch (l) {
            return !1;
          }
        })()
      )
        return a;
      var e = "$jscomp_hidden_" + Math.random(),
        f = 0;
      b.prototype.set = function (g, h) {
        if (!d(g)) throw Error("Invalid WeakMap key");
        if (!la(g, e)) {
          var k = new c();
          ca(g, e, { value: k });
        }
        if (!la(g, e)) throw Error("WeakMap key fail: " + g);
        g[e][this.h] = h;
        return this;
      };
      b.prototype.get = function (g) {
        return d(g) && la(g, e) ? g[e][this.h] : void 0;
      };
      b.prototype.has = function (g) {
        return d(g) && la(g, e) && la(g[e], this.h);
      };
      b.prototype.delete = function (g) {
        return d(g) && la(g, e) && la(g[e], this.h) ? delete g[e][this.h] : !1;
      };
      return b;
    },
    "es6"
  );
  u(
    "Map",
    function (a) {
      function b() {
        var h = {};
        return (h.U = h.next = h.head = h);
      }
      function c(h, k) {
        var l = h.h;
        return ia(function () {
          if (l) {
            for (; l.head != h.h; ) l = l.U;
            for (; l.next != l.head; )
              return (l = l.next), { done: !1, value: k(l) };
            l = null;
          }
          return { done: !0, value: void 0 };
        });
      }
      function d(h, k) {
        var l = k && typeof k;
        "object" == l || "function" == l
          ? f.has(k)
            ? (l = f.get(k))
            : ((l = "" + ++g), f.set(k, l))
          : (l = "p_" + k);
        var m = h.i[l];
        if (m && la(h.i, l))
          for (h = 0; h < m.length; h++) {
            var p = m[h];
            if ((k !== k && p.key !== p.key) || k === p.key)
              return { id: l, list: m, index: h, D: p };
          }
        return { id: l, list: m, index: -1, D: void 0 };
      }
      function e(h) {
        this.i = {};
        this.h = b();
        this.size = 0;
        if (h) {
          h = v(h);
          for (var k; !(k = h.next()).done; )
            (k = k.value), this.set(k[0], k[1]);
        }
      }
      if (
        (function () {
          if (
            !a ||
            "function" != typeof a ||
            !a.prototype.entries ||
            "function" != typeof Object.seal
          )
            return !1;
          try {
            var h = Object.seal({ x: 4 }),
              k = new a(v([[h, "s"]]));
            if (
              "s" != k.get(h) ||
              1 != k.size ||
              k.get({ x: 4 }) ||
              k.set({ x: 4 }, "t") != k ||
              2 != k.size
            )
              return !1;
            var l = k.entries(),
              m = l.next();
            if (m.done || m.value[0] != h || "s" != m.value[1]) return !1;
            m = l.next();
            return m.done ||
              4 != m.value[0].x ||
              "t" != m.value[1] ||
              !l.next().done
              ? !1
              : !0;
          } catch (p) {
            return !1;
          }
        })()
      )
        return a;
      var f = new q.WeakMap();
      e.prototype.set = function (h, k) {
        h = 0 === h ? 0 : h;
        var l = d(this, h);
        l.list || (l.list = this.i[l.id] = []);
        l.D
          ? (l.D.value = k)
          : ((l.D = {
              next: this.h,
              U: this.h.U,
              head: this.h,
              key: h,
              value: k,
            }),
            l.list.push(l.D),
            (this.h.U.next = l.D),
            (this.h.U = l.D),
            this.size++);
        return this;
      };
      e.prototype.delete = function (h) {
        h = d(this, h);
        return h.D && h.list
          ? (h.list.splice(h.index, 1),
            h.list.length || delete this.i[h.id],
            (h.D.U.next = h.D.next),
            (h.D.next.U = h.D.U),
            (h.D.head = null),
            this.size--,
            !0)
          : !1;
      };
      e.prototype.clear = function () {
        this.i = {};
        this.h = this.h.U = b();
        this.size = 0;
      };
      e.prototype.has = function (h) {
        return !!d(this, h).D;
      };
      e.prototype.get = function (h) {
        return (h = d(this, h).D) && h.value;
      };
      e.prototype.entries = function () {
        return c(this, function (h) {
          return [h.key, h.value];
        });
      };
      e.prototype.keys = function () {
        return c(this, function (h) {
          return h.key;
        });
      };
      e.prototype.values = function () {
        return c(this, function (h) {
          return h.value;
        });
      };
      e.prototype.forEach = function (h, k) {
        for (var l = this.entries(), m; !(m = l.next()).done; )
          (m = m.value), h.call(k, m[1], m[0], this);
      };
      e.prototype[r(q.Symbol, "iterator")] = e.prototype.entries;
      var g = 0;
      return e;
    },
    "es6"
  );
  u(
    "Number.isNaN",
    function (a) {
      return a
        ? a
        : function (b) {
            return "number" === typeof b && isNaN(b);
          };
    },
    "es6"
  );
  function Fa(a, b) {
    a instanceof String && (a += "");
    var c = 0,
      d = !1,
      e = {
        next: function () {
          if (!d && c < a.length) {
            var f = c++;
            return { value: b(f, a[f]), done: !1 };
          }
          d = !0;
          return { done: !0, value: void 0 };
        },
      };
    e[r(q.Symbol, "iterator")] = function () {
      return e;
    };
    return e;
  }
  u(
    "Array.prototype.keys",
    function (a) {
      return a
        ? a
        : function () {
            return Fa(this, function (b) {
              return b;
            });
          };
    },
    "es6"
  );
  u(
    "Array.prototype.values",
    function (a) {
      return a
        ? a
        : function () {
            return Fa(this, function (b, c) {
              return c;
            });
          };
    },
    "es8"
  );
  u(
    "Array.prototype.fill",
    function (a) {
      return a
        ? a
        : function (b, c, d) {
            var e = this.length || 0;
            0 > c && (c = Math.max(0, e + c));
            if (null == d || d > e) d = e;
            d = Number(d);
            0 > d && (d = Math.max(0, e + d));
            for (c = Number(c || 0); c < d; c++) this[c] = b;
            return this;
          };
    },
    "es6"
  );
  function Ga(a) {
    return a ? a : r(Array.prototype, "fill");
  }
  u("Int8Array.prototype.fill", Ga, "es6");
  u("Uint8Array.prototype.fill", Ga, "es6");
  u("Uint8ClampedArray.prototype.fill", Ga, "es6");
  u("Int16Array.prototype.fill", Ga, "es6");
  u("Uint16Array.prototype.fill", Ga, "es6");
  u("Int32Array.prototype.fill", Ga, "es6");
  u("Uint32Array.prototype.fill", Ga, "es6");
  u("Float32Array.prototype.fill", Ga, "es6");
  u("Float64Array.prototype.fill", Ga, "es6");
  u(
    "Set",
    function (a) {
      function b(c) {
        this.h = new q.Map();
        if (c) {
          c = v(c);
          for (var d; !(d = c.next()).done; ) this.add(d.value);
        }
        this.size = this.h.size;
      }
      if (
        (function () {
          if (
            !a ||
            "function" != typeof a ||
            !a.prototype.entries ||
            "function" != typeof Object.seal
          )
            return !1;
          try {
            var c = Object.seal({ x: 4 }),
              d = new a(v([c]));
            if (
              !d.has(c) ||
              1 != d.size ||
              d.add(c) != d ||
              1 != d.size ||
              d.add({ x: 4 }) != d ||
              2 != d.size
            )
              return !1;
            var e = d.entries(),
              f = e.next();
            if (f.done || f.value[0] != c || f.value[1] != c) return !1;
            f = e.next();
            return f.done ||
              f.value[0] == c ||
              4 != f.value[0].x ||
              f.value[1] != f.value[0]
              ? !1
              : e.next().done;
          } catch (g) {
            return !1;
          }
        })()
      )
        return a;
      b.prototype.add = function (c) {
        c = 0 === c ? 0 : c;
        this.h.set(c, c);
        this.size = this.h.size;
        return this;
      };
      b.prototype.delete = function (c) {
        c = this.h.delete(c);
        this.size = this.h.size;
        return c;
      };
      b.prototype.clear = function () {
        this.h.clear();
        this.size = 0;
      };
      b.prototype.has = function (c) {
        return this.h.has(c);
      };
      b.prototype.entries = function () {
        return this.h.entries();
      };
      b.prototype.values = function () {
        return r(this.h, "values").call(this.h);
      };
      b.prototype.keys = r(b.prototype, "values");
      b.prototype[r(q.Symbol, "iterator")] = r(b.prototype, "values");
      b.prototype.forEach = function (c, d) {
        var e = this;
        this.h.forEach(function (f) {
          return c.call(d, f, f, e);
        });
      };
      return b;
    },
    "es6"
  );
  function Ha(a, b, c) {
    if (null == a)
      throw new TypeError(
        "The 'this' value for String.prototype." +
          c +
          " must not be null or undefined"
      );
    if (b instanceof RegExp)
      throw new TypeError(
        "First argument to String.prototype." +
          c +
          " must not be a regular expression"
      );
    return a + "";
  }
  u(
    "String.prototype.startsWith",
    function (a) {
      return a
        ? a
        : function (b, c) {
            var d = Ha(this, b, "startsWith"),
              e = d.length,
              f = b.length;
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var g = 0; g < f && c < e; ) if (d[c++] != b[g++]) return !1;
            return g >= f;
          };
    },
    "es6"
  );
  u(
    "String.prototype.repeat",
    function (a) {
      return a
        ? a
        : function (b) {
            var c = Ha(this, null, "repeat");
            if (0 > b || 1342177279 < b)
              throw new RangeError("Invalid count value");
            b |= 0;
            for (var d = ""; b; ) if ((b & 1 && (d += c), (b >>>= 1))) c += c;
            return d;
          };
    },
    "es6"
  );
  u(
    "globalThis",
    function (a) {
      return a || ea;
    },
    "es_2020"
  );
  u(
    "Object.is",
    function (a) {
      return a
        ? a
        : function (b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c;
          };
    },
    "es6"
  );
  u(
    "Array.prototype.includes",
    function (a) {
      return a
        ? a
        : function (b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
              var f = d[c];
              if (f === b || r(Object, "is").call(Object, f, b)) return !0;
            }
            return !1;
          };
    },
    "es7"
  );
  u(
    "String.prototype.includes",
    function (a) {
      return a
        ? a
        : function (b, c) {
            return -1 !== Ha(this, b, "includes").indexOf(b, c || 0);
          };
    },
    "es6"
  );
  u(
    "String.prototype.padStart",
    function (a) {
      return a
        ? a
        : function (b, c) {
            var d = Ha(this, null, "padStart");
            b -= d.length;
            c = void 0 !== c ? String(c) : " ";
            return (
              (0 < b && c
                ? r(c, "repeat")
                    .call(c, Math.ceil(b / c.length))
                    .substring(0, b)
                : "") + d
            );
          };
    },
    "es8"
  );
  u(
    "Promise.prototype.finally",
    function (a) {
      return a
        ? a
        : function (b) {
            return this.then(
              function (c) {
                return q.Promise.resolve(b()).then(function () {
                  return c;
                });
              },
              function (c) {
                return q.Promise.resolve(b()).then(function () {
                  throw c;
                });
              }
            );
          };
    },
    "es9"
  );
  var x = this || self;
  function Ia(a) {
    a = a.split(".");
    for (var b = x, c = 0; c < a.length; c++)
      if (((b = b[a[c]]), null == b)) return null;
    return b;
  }
  function Ja(a) {
    var b = typeof a;
    b = "object" != b ? b : a ? (Array.isArray(a) ? "array" : b) : "null";
    return "array" == b || ("object" == b && "number" == typeof a.length);
  }
  function Ka(a) {
    var b = typeof a;
    return ("object" == b && null != a) || "function" == b;
  }
  function La(a) {
    return (
      (Object.prototype.hasOwnProperty.call(a, Ma) && a[Ma]) || (a[Ma] = ++Na)
    );
  }
  var Ma = "closure_uid_" + ((1e9 * Math.random()) >>> 0),
    Na = 0;
  function Oa(a, b, c) {
    return a.call.apply(a.bind, arguments);
  }
  function Pa(a, b, c) {
    if (!a) throw Error();
    if (2 < arguments.length) {
      var d = Array.prototype.slice.call(arguments, 2);
      return function () {
        var e = Array.prototype.slice.call(arguments);
        Array.prototype.unshift.apply(e, d);
        return a.apply(b, e);
      };
    }
    return function () {
      return a.apply(b, arguments);
    };
  }
  function Qa(a, b, c) {
    Function.prototype.bind &&
    -1 != Function.prototype.bind.toString().indexOf("native code")
      ? (Qa = Oa)
      : (Qa = Pa);
    return Qa.apply(null, arguments);
  }
  function Ra(a, b) {
    var c = Array.prototype.slice.call(arguments, 1);
    return function () {
      var d = c.slice();
      d.push.apply(d, arguments);
      return a.apply(this, d);
    };
  }
  function Sa(a, b) {
    a = a.split(".");
    var c = x;
    a[0] in c ||
      "undefined" == typeof c.execScript ||
      c.execScript("var " + a[0]);
    for (var d; a.length && (d = a.shift()); )
      a.length || void 0 === b
        ? c[d] && c[d] !== Object.prototype[d]
          ? (c = c[d])
          : (c = c[d] = {})
        : (c[d] = b);
  }
  function Ta(a) {
    return a;
  }
  var Ua = new Date().getTime();
  function Va(a) {
    return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
  }
  function Wa(a, b) {
    var c = 0;
    a = Va(String(a)).split(".");
    b = Va(String(b)).split(".");
    for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
      var f = a[e] || "",
        g = b[e] || "";
      do {
        f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
        g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
        if (0 == f[0].length && 0 == g[0].length) break;
        c =
          Xa(
            0 == f[1].length ? 0 : parseInt(f[1], 10),
            0 == g[1].length ? 0 : parseInt(g[1], 10)
          ) ||
          Xa(0 == f[2].length, 0 == g[2].length) ||
          Xa(f[2], g[2]);
        f = f[3];
        g = g[3];
      } while (0 == c);
    }
    return c;
  }
  function Xa(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
  }
  function Ya() {
    var a = x.navigator;
    return a && (a = a.userAgent) ? a : "";
  }
  function A(a) {
    return -1 != Ya().indexOf(a);
  }
  function Za() {
    return A("Trident") || A("MSIE");
  }
  function $a() {
    return ((A("Chrome") || A("CriOS")) && !A("Edge")) || A("Silk");
  }
  function ab(a) {
    var b = {};
    a.forEach(function (c) {
      b[c[0]] = c[1];
    });
    return function (c) {
      return (
        b[
          r(c, "find").call(c, function (d) {
            return d in b;
          })
        ] || ""
      );
    };
  }
  function bb() {
    var a = Ya();
    if (Za()) {
      var b = /rv: *([\d\.]*)/.exec(a);
      if (b && b[1]) a = b[1];
      else {
        b = "";
        var c = /MSIE +([\d\.]+)/.exec(a);
        if (c && c[1])
          if (((a = /Trident\/(\d.\d)/.exec(a)), "7.0" == c[1]))
            if (a && a[1])
              switch (a[1]) {
                case "4.0":
                  b = "8.0";
                  break;
                case "5.0":
                  b = "9.0";
                  break;
                case "6.0":
                  b = "10.0";
                  break;
                case "7.0":
                  b = "11.0";
              }
            else b = "7.0";
          else b = c[1];
        a = b;
      }
      return a;
    }
    c = RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?", "g");
    b = [];
    for (var d; (d = c.exec(a)); ) b.push([d[1], d[2], d[3] || void 0]);
    a = ab(b);
    return A("Opera")
      ? a(["Version", "Opera"])
      : A("Edge")
      ? a(["Edge"])
      : A("Edg/")
      ? a(["Edg"])
      : A("Silk")
      ? a(["Silk"])
      : $a()
      ? a(["Chrome", "CriOS", "HeadlessChrome"])
      : ((a = b[2]) && a[1]) || "";
  }
  function cb(a, b) {
    if ("string" === typeof a)
      return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
    for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
    return -1;
  }
  function db(a, b) {
    for (
      var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0;
      e < c;
      e++
    )
      e in d && b.call(void 0, d[e], e, a);
  }
  function eb(a, b) {
    for (
      var c = a.length,
        d = [],
        e = 0,
        f = "string" === typeof a ? a.split("") : a,
        g = 0;
      g < c;
      g++
    )
      if (g in f) {
        var h = f[g];
        b.call(void 0, h, g, a) && (d[e++] = h);
      }
    return d;
  }
  function fb(a, b) {
    for (
      var c = a.length,
        d = Array(c),
        e = "string" === typeof a ? a.split("") : a,
        f = 0;
      f < c;
      f++
    )
      f in e && (d[f] = b.call(void 0, e[f], f, a));
    return d;
  }
  function gb(a, b) {
    for (
      var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0;
      e < c;
      e++
    )
      if (e in d && b.call(void 0, d[e], e, a)) return !0;
    return !1;
  }
  function hb(a, b) {
    a: {
      for (
        var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0;
        e < c;
        e++
      )
        if (e in d && b.call(void 0, d[e], e, a)) {
          b = e;
          break a;
        }
      b = -1;
    }
    return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b];
  }
  function ib(a, b) {
    a: {
      for (
        var c = "string" === typeof a ? a.split("") : a, d = a.length - 1;
        0 <= d;
        d--
      )
        if (d in c && b.call(void 0, c[d], d, a)) {
          b = d;
          break a;
        }
      b = -1;
    }
    return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b];
  }
  function jb(a, b) {
    return 0 <= cb(a, b);
  }
  function kb(a) {
    var b = a.length;
    if (0 < b) {
      for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
      return c;
    }
    return [];
  }
  function lb(a) {
    lb[" "](a);
    return a;
  }
  lb[" "] = function () {};
  var mb = Za();
  !A("Android") || $a();
  $a();
  !A("Safari") || $a();
  var nb = {},
    ob = null;
  function pb(a) {
    var b;
    void 0 === b && (b = 0);
    qb();
    b = nb[b];
    for (
      var c = Array(Math.floor(a.length / 3)), d = b[64] || "", e = 0, f = 0;
      e < a.length - 2;
      e += 3
    ) {
      var g = a[e],
        h = a[e + 1],
        k = a[e + 2],
        l = b[g >> 2];
      g = b[((g & 3) << 4) | (h >> 4)];
      h = b[((h & 15) << 2) | (k >> 6)];
      k = b[k & 63];
      c[f++] = l + g + h + k;
    }
    l = 0;
    k = d;
    switch (a.length - e) {
      case 2:
        (l = a[e + 1]), (k = b[(l & 15) << 2] || d);
      case 1:
        (a = a[e]), (c[f] = b[a >> 2] + b[((a & 3) << 4) | (l >> 4)] + k + d);
    }
    return c.join("");
  }
  function rb(a) {
    var b = [];
    sb(a, function (c) {
      b.push(c);
    });
    return b;
  }
  function sb(a, b) {
    function c(k) {
      for (; d < a.length; ) {
        var l = a.charAt(d++),
          m = ob[l];
        if (null != m) return m;
        if (!/^[\s\xa0]*$/.test(l))
          throw Error("Unknown base64 encoding at char: " + l);
      }
      return k;
    }
    qb();
    for (var d = 0; ; ) {
      var e = c(-1),
        f = c(0),
        g = c(64),
        h = c(64);
      if (64 === h && -1 === e) break;
      b((e << 2) | (f >> 4));
      64 != g &&
        (b(((f << 4) & 240) | (g >> 2)), 64 != h && b(((g << 6) & 192) | h));
    }
  }
  function qb() {
    if (!ob) {
      ob = {};
      for (
        var a =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(
              ""
            ),
          b = ["+/=", "+/", "-_=", "-_.", "-_"],
          c = 0;
        5 > c;
        c++
      ) {
        var d = a.concat(b[c].split(""));
        nb[c] = d;
        for (var e = 0; e < d.length; e++) {
          var f = d[e];
          void 0 === ob[f] && (ob[f] = e);
        }
      }
    }
  }
  var tb = "undefined" !== typeof Uint8Array,
    ub = {};
  var vb;
  function wb(a) {
    if (ub !== ub) throw Error("illegal external caller");
    this.Aa = a;
    if (null != a && 0 === a.length)
      throw Error("ByteString should be constructed with non-empty values");
  }
  wb.prototype.isEmpty = function () {
    return null == this.Aa;
  };
  var xb =
    "function" === typeof q.Symbol && "symbol" === typeof (0, q.Symbol)()
      ? (0, q.Symbol)()
      : void 0;
  function yb(a, b) {
    if (xb) return (a[xb] |= b);
    if (void 0 !== a.O) return (a.O |= b);
    Object.defineProperties(a, {
      O: { value: b, configurable: !0, writable: !0, enumerable: !1 },
    });
    return b;
  }
  function zb(a, b) {
    var c = Ab(a);
    (c & b) !== b &&
      (Object.isFrozen(a) && (a = Array.prototype.slice.call(a)), Bb(a, c | b));
    return a;
  }
  function Cb(a, b) {
    xb ? a[xb] && (a[xb] &= ~b) : void 0 !== a.O && (a.O &= ~b);
  }
  function Ab(a) {
    var b;
    xb ? (b = a[xb]) : (b = a.O);
    return null == b ? 0 : b;
  }
  function Bb(a, b) {
    xb
      ? (a[xb] = b)
      : void 0 !== a.O
      ? (a.O = b)
      : Object.defineProperties(a, {
          O: { value: b, configurable: !0, writable: !0, enumerable: !1 },
        });
  }
  function Db(a) {
    yb(a, 1);
    return a;
  }
  function Eb(a) {
    return !!(Ab(a) & 2);
  }
  function Fb(a) {
    yb(a, 16);
    return a;
  }
  function Gb(a, b) {
    Bb(b, (a | 0) & -51);
  }
  function Hb(a, b) {
    Bb(b, (a | 18) & -41);
  }
  var Ib = {};
  function Jb(a) {
    return (
      null !== a &&
      "object" === typeof a &&
      !Array.isArray(a) &&
      a.constructor === Object
    );
  }
  var Kb,
    Lb,
    Mb = [];
  Bb(Mb, 23);
  Lb = Object.freeze(Mb);
  function Nb(a) {
    if (Eb(a.v)) throw Error("Cannot mutate an immutable Message");
  }
  function Ob(a) {
    var b = a.length;
    (b = b ? a[b - 1] : void 0) && Jb(b)
      ? (b.g = 1)
      : ((b = {}), a.push(((b.g = 1), b)));
  }
  function Pb(a) {
    var b = a.i + a.Y;
    return a.J || (a.J = a.v[b] = {});
  }
  function B(a, b, c) {
    return -1 === b
      ? null
      : b >= a.i
      ? a.J
        ? a.J[b]
        : void 0
      : c && a.J && ((c = a.J[b]), null != c)
      ? c
      : a.v[b + a.Y];
  }
  function C(a, b, c, d) {
    Nb(a);
    return Qb(a, b, c, d);
  }
  function Qb(a, b, c, d) {
    a.j && (a.j = void 0);
    if (b >= a.i || d) return (Pb(a)[b] = c), a;
    a.v[b + a.Y] = c;
    (c = a.J) && b in c && delete c[b];
    return a;
  }
  function Rb(a, b, c) {
    return void 0 !== Sb(a, b, Tb(a, Ub, c));
  }
  function Vb(a, b, c, d, e) {
    var f = B(a, b, d);
    Array.isArray(f) || (f = Lb);
    var g = Ab(f);
    g & 1 || Db(f);
    if (e) g & 2 || yb(f, 2), c & 1 || Object.freeze(f);
    else {
      e = !(c & 2);
      var h = g & 2;
      c & 1 || !h
        ? e && g & 16 && !h && Cb(f, 16)
        : ((f = Db(Array.prototype.slice.call(f))), Qb(a, b, f, d));
    }
    return f;
  }
  function Wb(a, b, c) {
    return Vb(a, b, 0, void 0 === c ? !1 : c, Eb(a.v));
  }
  function Xb(a, b) {
    a = B(a, b);
    return null == a ? a : !!a;
  }
  function Yb(a, b) {
    var c = Eb(a.v),
      d = Vb(a, b, 1, !1, c),
      e = Ab(d);
    if (!(e & 4)) {
      Object.isFrozen(d) && ((d = Db(d.slice())), Qb(a, b, d, !1));
      for (var f = 0, g = 0; f < d.length; f++) {
        var h = d[f];
        null != h && (d[g++] = h);
      }
      g < f && (d.length = g);
      yb(d, 5);
      c && (yb(d, 2), Object.freeze(d));
    }
    !c &&
      (e & 2 || Object.isFrozen(d)) &&
      ((d = Array.prototype.slice.call(d)), yb(d, 5), Zb(a, b, d, !1));
    return d;
  }
  function Zb(a, b, c, d) {
    c = null == c ? Lb : zb(c, 1);
    return C(a, b, c, d);
  }
  function $b(a, b, c, d) {
    Nb(a);
    c !== d ? Qb(a, b, c) : Qb(a, b, void 0, !1);
    return a;
  }
  function ac(a, b, c, d) {
    Nb(a);
    (c = bc(a, c)) && c !== b && null != d && Qb(a, c, void 0, !1);
    return Qb(a, b, d);
  }
  function Tb(a, b, c) {
    return bc(a, b) === c ? c : -1;
  }
  function bc(a, b) {
    for (var c = 0, d = 0; d < b.length; d++) {
      var e = b[d];
      null != B(a, e) && (0 !== c && Qb(a, c, void 0, !1), (c = e));
    }
    return c;
  }
  function Sb(a, b, c, d) {
    var e = B(a, c, d);
    var f = !1;
    var g =
      null == e ||
      "object" !== typeof e ||
      (f = Array.isArray(e)) ||
      e.wa !== Ib
        ? f
          ? new b(e)
          : void 0
        : e;
    g !== e && null != g && (Qb(a, c, g, d), yb(g.v, Ab(a.v) & 18));
    return g;
  }
  function E(a, b, c) {
    var d = void 0 === d ? !1 : d;
    b = Sb(a, b, c, d);
    if (null == b) return b;
    if (!Eb(a.v)) {
      var e = cc(b);
      e !== b && ((b = e), Qb(a, c, b, d));
    }
    return b;
  }
  function dc(a, b, c, d, e) {
    a.h || (a.h = {});
    var f = a.h[c],
      g = Vb(a, c, 3, void 0, e);
    if (!f) {
      var h = g;
      f = [];
      var k = !!(Ab(a.v) & 16);
      g = Eb(h);
      var l = h;
      !e && g && (h = Array.prototype.slice.call(h));
      for (var m = g, p = 0; p < h.length; p++) {
        var t = h[p];
        var y = b,
          D = !1;
        D = void 0 === D ? !1 : D;
        t = Array.isArray(t) ? new y(t) : D ? new y() : void 0;
        if (void 0 !== t) {
          y = t.v;
          var z = (D = Ab(y));
          g && (z |= 2);
          k && (z |= 16);
          z != D && Bb(y, z);
          y = z;
          m = m || !!(2 & y);
          f.push(t);
        }
      }
      a.h[c] = f;
      k = Ab(h);
      b = k | 33;
      b = m ? b & -9 : b | 8;
      k != b &&
        ((m = h),
        Object.isFrozen(m) && (m = Array.prototype.slice.call(m)),
        Bb(m, b),
        (h = m));
      l !== h && Qb(a, c, h);
      (e || (d && g)) && yb(f, 2);
      d && Object.freeze(f);
      return f;
    }
    e ||
      ((e = Object.isFrozen(f)),
      d && !e
        ? Object.freeze(f)
        : !d && e && ((f = Array.prototype.slice.call(f)), (a.h[c] = f)));
    return f;
  }
  function G(a, b, c) {
    var d = Eb(a.v);
    b = dc(a, b, c, d, d);
    a = Vb(a, c, 3, void 0, d);
    if (!(d || Ab(a) & 8)) {
      for (d = 0; d < b.length; d++) {
        c = b[d];
        var e = cc(c);
        c !== e && ((b[d] = e), (a[d] = e.v));
      }
      yb(a, 8);
    }
    return b;
  }
  function ec(a, b, c) {
    Nb(a);
    null == c && (c = void 0);
    return Qb(a, b, c);
  }
  function fc(a, b, c, d) {
    Nb(a);
    null == d && (d = void 0);
    return ac(a, b, c, d);
  }
  function gc(a, b, c, d) {
    Nb(a);
    var e = null == c ? Lb : Db([]);
    if (null != c) {
      for (var f = !!c.length, g = 0; g < c.length; g++) {
        var h = c[g];
        f = f && !Eb(h.v);
        e[g] = h.v;
      }
      e = zb(e, (f ? 8 : 0) | 1);
      a.h || (a.h = {});
      a.h[b] = c;
    } else a.h && (a.h[b] = void 0);
    return Qb(a, b, e, d);
  }
  function hc(a, b) {
    a = B(a, b);
    return null == a ? 0 : a;
  }
  function ic(a, b) {
    a = B(a, b);
    return null == a ? 0 : a;
  }
  function jc(a, b) {
    return null == a ? b : a;
  }
  function kc(a, b) {
    return jc(B(a, b), "");
  }
  function H(a, b, c) {
    return jc(Xb(a, b), void 0 === c ? !1 : c);
  }
  function lc(a, b) {
    var c = void 0 === c ? 0 : c;
    var d = B(a, b);
    var e =
      null == d
        ? d
        : "number" === typeof d ||
          "NaN" === d ||
          "Infinity" === d ||
          "-Infinity" === d
        ? Number(d)
        : void 0;
    null != e && e !== d && Qb(a, b, e);
    return jc(e, c);
  }
  function I(a, b) {
    return jc(B(a, b), 0);
  }
  function mc(a, b, c, d) {
    return E(a, b, Tb(a, d, c));
  }
  var nc;
  function oc(a, b) {
    nc = b;
    a = new a(b);
    nc = void 0;
    return a;
  }
  function pc(a) {
    switch (typeof a) {
      case "number":
        return isFinite(a) ? a : String(a);
      case "object":
        if (a)
          if (Array.isArray(a)) {
            if (0 !== (Ab(a) & 128))
              return (a = Array.prototype.slice.call(a)), Ob(a), a;
          } else {
            if (tb && null != a && a instanceof Uint8Array) return pb(a);
            if (a instanceof wb) {
              var b = a.Aa;
              return null == b
                ? ""
                : "string" === typeof b
                ? b
                : (a.Aa = pb(b));
            }
          }
    }
    return a;
  }
  function qc(a, b, c, d) {
    if (null != a) {
      if (Array.isArray(a)) a = rc(a, b, c, void 0 !== d);
      else if (Jb(a)) {
        var e = {},
          f;
        for (f in a)
          Object.prototype.hasOwnProperty.call(a, f) &&
            (e[f] = qc(a[f], b, c, d));
        a = e;
      } else a = b(a, d);
      return a;
    }
  }
  function rc(a, b, c, d) {
    var e = Ab(a);
    d = d ? !!(e & 16) : void 0;
    a = Array.prototype.slice.call(a);
    for (var f = 0; f < a.length; f++) a[f] = qc(a[f], b, c, d);
    c(e, a);
    return a;
  }
  function sc(a) {
    return a.wa === Ib ? a.toJSON() : pc(a);
  }
  function tc(a, b) {
    a & 128 && Ob(b);
  }
  function uc(a, b, c) {
    c = void 0 === c ? Hb : c;
    if (null != a) {
      if (tb && a instanceof Uint8Array)
        return a.length ? new wb(new Uint8Array(a)) : vb || (vb = new wb(null));
      if (Array.isArray(a)) {
        var d = Ab(a);
        if (d & 2) return a;
        if (b && !(d & 32) && (d & 16 || 0 === d)) return Bb(a, d | 2), a;
        a = rc(a, uc, d & 4 ? Hb : c, !0);
        b = Ab(a);
        b & 4 && b & 2 && Object.freeze(a);
        return a;
      }
      return a.wa === Ib ? vc(a) : a;
    }
  }
  function wc(a, b, c, d, e, f, g) {
    (a = a.h && a.h[c])
      ? ((d = Ab(a)),
        d & 2
          ? (d = a)
          : ((f = fb(a, vc)), Hb(d, f), Object.freeze(f), (d = f)),
        gc(b, c, d, e))
      : C(b, c, uc(d, f, g), e);
  }
  function vc(a) {
    if (Eb(a.v)) return a;
    a = xc(a, !0);
    yb(a.v, 2);
    return a;
  }
  function xc(a, b) {
    var c = a.v,
      d = Fb([]),
      e = a.constructor.messageId;
    e && d.push(e);
    e = a.J;
    if (e) {
      d.length = c.length;
      r(d, "fill").call(d, void 0, d.length, c.length);
      var f = {};
      d[d.length - 1] = f;
    }
    0 !== (Ab(c) & 128) && Ob(d);
    b = b || Eb(a.v) ? Hb : Gb;
    d = oc(a.constructor, d);
    a.Ta && (d.Ta = a.Ta.slice());
    f = !!(Ab(c) & 16);
    for (var g = e ? c.length - 1 : c.length, h = 0; h < g; h++)
      wc(a, d, h - a.Y, c[h], !1, f, b);
    if (e) for (var k in e) wc(a, d, +k, e[k], !0, f, b);
    return d;
  }
  function cc(a) {
    if (!Eb(a.v)) return a;
    var b = xc(a, !1);
    b.j = a;
    return b;
  }
  function J(a, b, c) {
    null == a && (a = nc);
    nc = void 0;
    var d = this.constructor.h || 0,
      e = 0 < d,
      f = this.constructor.messageId,
      g = !1;
    if (null == a) {
      a = f ? [f] : [];
      var h = 48;
      var k = !0;
      e && ((d = 0), (h |= 128));
      Bb(a, h);
    } else {
      if (!Array.isArray(a)) throw Error();
      if (f && f !== a[0]) throw Error();
      var l = (h = yb(a, 0));
      if ((k = 0 !== (16 & l))) (g = 0 !== (32 & l)) || (l |= 32);
      if (e)
        if (128 & l) d = 0;
        else {
          if (0 < a.length) {
            var m = a[a.length - 1];
            if (Jb(m) && "g" in m) {
              d = 0;
              l |= 128;
              delete m.g;
              var p = !0,
                t;
              for (t in m) {
                p = !1;
                break;
              }
              p && a.pop();
            }
          }
        }
      else if (128 & l) throw Error();
      h !== l && Bb(a, l);
    }
    this.Y = (f ? 0 : -1) - d;
    this.h = void 0;
    this.v = a;
    a: {
      f = this.v.length;
      d = f - 1;
      if (f && ((f = this.v[d]), Jb(f))) {
        this.J = f;
        this.i = d - this.Y;
        break a;
      }
      void 0 !== b && -1 < b
        ? ((this.i = Math.max(b, d + 1 - this.Y)), (this.J = void 0))
        : (this.i = Number.MAX_VALUE);
    }
    if (!e && this.J && "g" in this.J)
      throw Error(
        'Unexpected "g" flag in sparse object of message that is not a group type.'
      );
    if (c) {
      b = k && !g && !0;
      e = this.i;
      var y;
      for (k = 0; k < c.length; k++)
        (g = c[k]),
          g < e
            ? ((g += this.Y), (d = a[g]) ? yc(d, b) : (a[g] = Lb))
            : (y || (y = Pb(this)), (d = y[g]) ? yc(d, b) : (y[g] = Lb));
    }
  }
  J.prototype.toJSON = function () {
    var a = this.v;
    return Kb ? a : rc(a, sc, tc);
  };
  function zc(a, b) {
    if (null == b || "" == b) return new a();
    b = JSON.parse(b);
    if (!Array.isArray(b)) throw Error(void 0);
    return oc(a, Fb(b));
  }
  function yc(a, b) {
    if (Array.isArray(a)) {
      var c = Ab(a),
        d = 1;
      !b || c & 2 || (d |= 16);
      (c & d) !== d && Bb(a, c | d);
    }
  }
  J.prototype.wa = Ib;
  function Ac(a, b) {
    return pc(b);
  }
  function Bc(a) {
    return null !== a && void 0 !== a;
  }
  var Cc = void 0;
  function Dc(a, b) {
    var c = Cc;
    Cc = void 0;
    if (!b(a)) throw ((b = c ? c() + "\n" : ""), Error(b + String(a)));
  }
  function Ec(a) {
    J.call(this, a, -1, Fc);
  }
  w(Ec, J);
  function Gc(a) {
    J.call(this, a);
  }
  w(Gc, J);
  var Fc = [2, 3];
  function Hc(a, b) {
    this.i = (a === Ic && b) || "";
    this.h = Jc;
  }
  var Jc = {},
    Ic = {};
  function Kc(a) {
    return function () {
      return !a.apply(this, arguments);
    };
  }
  function Lc(a) {
    var b = !1,
      c;
    return function () {
      b || ((c = a()), (b = !0));
      return c;
    };
  }
  function Mc(a) {
    var b = a;
    return function () {
      if (b) {
        var c = b;
        b = null;
        c();
      }
    };
  }
  function Nc(a, b, c) {
    a.addEventListener && a.addEventListener(b, c, !1);
  }
  function Oc(a, b, c) {
    return a.removeEventListener ? (a.removeEventListener(b, c, !1), !0) : !1;
  }
  function Pc(a, b) {
    var c = {},
      d;
    for (d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
    return c;
  }
  function Qc(a, b) {
    for (var c in a) if (b.call(void 0, a[c], c, a)) return !0;
    return !1;
  }
  function Rc(a) {
    var b = [],
      c = 0,
      d;
    for (d in a) b[c++] = a[d];
    return b;
  }
  function Sc(a) {
    var b = {},
      c;
    for (c in a) b[c] = a[c];
    return b;
  }
  var Tc;
  function Uc() {
    if (void 0 === Tc) {
      var a = null,
        b = x.trustedTypes;
      if (b && b.createPolicy) {
        try {
          a = b.createPolicy("goog#html", {
            createHTML: Ta,
            createScript: Ta,
            createScriptURL: Ta,
          });
        } catch (c) {
          x.console && x.console.error(c.message);
        }
        Tc = a;
      } else Tc = a;
    }
    return Tc;
  }
  var Vc = {};
  function Wc(a, b) {
    this.h = b === Vc ? a : "";
  }
  Wc.prototype.toString = function () {
    return this.h.toString();
  };
  function Xc(a, b) {
    this.h = b === Zc ? a : "";
  }
  Xc.prototype.toString = function () {
    return this.h + "";
  };
  function $c(a, b) {
    a = ad.exec(bd(a).toString());
    var c = a[3] || "";
    return cd(a[1] + dd("?", a[2] || "", b) + dd("#", c));
  }
  function bd(a) {
    return a instanceof Xc && a.constructor === Xc
      ? a.h
      : "type_error:TrustedResourceUrl";
  }
  var ad = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
    Zc = {};
  function cd(a) {
    var b = Uc();
    a = b ? b.createScriptURL(a) : a;
    return new Xc(a, Zc);
  }
  function dd(a, b, c) {
    if (null == c) return b;
    if ("string" === typeof c) return c ? a + encodeURIComponent(c) : "";
    for (var d in c)
      if (Object.prototype.hasOwnProperty.call(c, d)) {
        var e = c[d];
        e = Array.isArray(e) ? e : [e];
        for (var f = 0; f < e.length; f++) {
          var g = e[f];
          null != g &&
            (b || (b = a),
            (b +=
              (b.length > a.length ? "&" : "") +
              encodeURIComponent(d) +
              "=" +
              encodeURIComponent(String(g))));
        }
      }
    return b;
  }
  function ed(a) {
    return String(a).replace(/\-([a-z])/g, function (b, c) {
      return c.toUpperCase();
    });
  }
  function fd(a, b, c) {
    function d(h) {
      h && b.appendChild("string" === typeof h ? a.createTextNode(h) : h);
    }
    for (var e = 1; e < c.length; e++) {
      var f = c[e];
      if (!Ja(f) || (Ka(f) && 0 < f.nodeType)) d(f);
      else {
        a: {
          if (f && "number" == typeof f.length) {
            if (Ka(f)) {
              var g = "function" == typeof f.item || "string" == typeof f.item;
              break a;
            }
            if ("function" === typeof f) {
              g = "function" == typeof f.item;
              break a;
            }
          }
          g = !1;
        }
        db(g ? kb(f) : f, d);
      }
    }
  }
  function gd(a) {
    this.h = a || x.document || document;
  }
  n = gd.prototype;
  n.getElementsByTagName = function (a, b) {
    return (b || this.h).getElementsByTagName(String(a));
  };
  n.createElement = function (a) {
    var b = this.h;
    a = String(a);
    "application/xhtml+xml" === b.contentType && (a = a.toLowerCase());
    return b.createElement(a);
  };
  n.createTextNode = function (a) {
    return this.h.createTextNode(String(a));
  };
  n.append = function (a, b) {
    fd(9 == a.nodeType ? a : a.ownerDocument || a.document, a, arguments);
  };
  n.contains = function (a, b) {
    if (!a || !b) return !1;
    if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
    if ("undefined" != typeof a.compareDocumentPosition)
      return a == b || !!(a.compareDocumentPosition(b) & 16);
    for (; b && a != b; ) b = b.parentNode;
    return b == a;
  };
  function hd() {
    return !id() && (A("iPod") || A("iPhone") || A("Android") || A("IEMobile"));
  }
  function id() {
    return A("iPad") || (A("Android") && !A("Mobile")) || A("Silk");
  }
  var jd = RegExp(
      "^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"
    ),
    kd = /#|$/;
  function ld(a, b) {
    var c = a.search(kd);
    a: {
      var d = 0;
      for (var e = b.length; 0 <= (d = a.indexOf(b, d)) && d < c; ) {
        var f = a.charCodeAt(d - 1);
        if (38 == f || 63 == f)
          if (((f = a.charCodeAt(d + e)), !f || 61 == f || 38 == f || 35 == f))
            break a;
        d += e + 1;
      }
      d = -1;
    }
    if (0 > d) return null;
    e = a.indexOf("&", d);
    if (0 > e || e > c) e = c;
    d += b.length + 1;
    return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " "));
  } /* 
 
 SPDX-License-Identifier: Apache-2.0 
*/
  function md(a) {
    try {
      var b;
      if ((b = !!a && null != a.location.href))
        a: {
          try {
            lb(a.foo);
            b = !0;
            break a;
          } catch (c) {}
          b = !1;
        }
      return b;
    } catch (c) {
      return !1;
    }
  }
  function nd(a) {
    return md(a.top) ? a.top : null;
  }
  function od(a, b) {
    var c = pd("SCRIPT", a);
    c.src = bd(b);
    var d, e;
    (d = (b =
      null ==
      (e = (d = ((c.ownerDocument && c.ownerDocument.defaultView) || window)
        .document).querySelector)
        ? void 0
        : e.call(d, "script[nonce]"))
      ? b.nonce || b.getAttribute("nonce") || ""
      : "") && c.setAttribute("nonce", d);
    return (a = a.getElementsByTagName("script")[0]) && a.parentNode
      ? (a.parentNode.insertBefore(c, a), c)
      : null;
  }
  function qd(a, b) {
    return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle;
  }
  function rd(a, b) {
    if (!sd() && !td()) {
      var c = Math.random();
      if (c < b) return (c = ud()), a[Math.floor(c * a.length)];
    }
    return null;
  }
  function ud() {
    if (!q.globalThis.crypto) return Math.random();
    try {
      var a = new Uint32Array(1);
      q.globalThis.crypto.getRandomValues(a);
      return a[0] / 65536 / 65536;
    } catch (b) {
      return Math.random();
    }
  }
  function vd(a, b) {
    if (a)
      for (var c in a)
        Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a);
  }
  function wd(a) {
    var b = a.length;
    if (0 == b) return 0;
    for (var c = 305419896, d = 0; d < b; d++)
      c ^= ((c << 5) + (c >> 2) + a.charCodeAt(d)) & 4294967295;
    return 0 < c ? c : 4294967296 + c;
  }
  var td = Lc(function () {
      return (
        gb(
          [
            "Google Web Preview",
            "Mediapartners-Google",
            "Google-Read-Aloud",
            "Google-Adwords",
          ],
          xd
        ) || 1e-4 > Math.random()
      );
    }),
    sd = Lc(function () {
      return xd("MSIE");
    });
  function xd(a) {
    return -1 != Ya().indexOf(a);
  }
  var yd = /^([0-9.]+)px$/,
    zd = /^(-?[0-9.]{1,30})$/;
  function Ad(a) {
    if (!zd.test(a)) return null;
    a = Number(a);
    return isNaN(a) ? null : a;
  }
  function K(a) {
    return (a = yd.exec(a)) ? +a[1] : null;
  }
  function Bd(a, b) {
    for (var c = 0; 50 > c; ++c) {
      try {
        var d = !(!a.frames || !a.frames[b]);
      } catch (g) {
        d = !1;
      }
      if (d) return a;
      a: {
        try {
          var e = a.parent;
          if (e && e != a) {
            var f = e;
            break a;
          }
        } catch (g) {}
        f = null;
      }
      if (!(a = f)) break;
    }
    return null;
  }
  var Cd = Lc(function () {
    return hd() ? 2 : id() ? 1 : 0;
  });
  function Dd(a, b) {
    vd(b, function (c, d) {
      a.style.setProperty(d, c, "important");
    });
  }
  var Ed = [];
  function Fd() {
    var a = Ed;
    Ed = [];
    a = v(a);
    for (var b = a.next(); !b.done; b = a.next()) {
      b = b.value;
      try {
        b();
      } catch (c) {}
    }
  }
  function Gd(a, b) {
    if (a.length && b.head) {
      a = v(a);
      for (var c = a.next(); !c.done; c = a.next())
        if ((c = c.value) && b.head) {
          var d = pd("META");
          b.head.appendChild(d);
          d.httpEquiv = "origin-trial";
          d.content = c;
        }
    }
  }
  function Hd(a) {
    if ("number" !== typeof a.goog_pvsid)
      try {
        Object.defineProperty(a, "goog_pvsid", {
          value: Math.floor(Math.random() * Math.pow(2, 52)),
          configurable: !1,
        });
      } catch (b) {}
    return Number(a.goog_pvsid) || -1;
  }
  function Id(a) {
    var b = Jd;
    "complete" === b.readyState || "interactive" === b.readyState
      ? (Ed.push(a),
        1 == Ed.length &&
          (q.Promise
            ? q.Promise.resolve().then(Fd)
            : window.setImmediate
            ? setImmediate(Fd)
            : setTimeout(Fd, 0)))
      : b.addEventListener("DOMContentLoaded", a);
  }
  function pd(a, b) {
    b = void 0 === b ? document : b;
    return b.createElement(String(a).toLowerCase());
  }
  function Kd(a, b, c, d) {
    d = void 0 === d ? !1 : d;
    a.google_image_requests || (a.google_image_requests = []);
    var e = pd("IMG", a.document);
    if (c) {
      var f = function () {
        if (c) {
          var g = a.google_image_requests,
            h = cb(g, e);
          0 <= h && Array.prototype.splice.call(g, h, 1);
        }
        Oc(e, "load", f);
        Oc(e, "error", f);
      };
      Nc(e, "load", f);
      Nc(e, "error", f);
    }
    d && (e.attributionsrc = "");
    e.src = b;
    a.google_image_requests.push(e);
  }
  function Ld(a, b) {
    var c = void 0 === c ? !1 : c;
    var d = "https://pagead2.googlesyndication.com/pagead/gen_204?id=" + b;
    vd(a, function (e, f) {
      e && (d += "&" + f + "=" + encodeURIComponent(e));
    });
    Md(d, c);
  }
  function Md(a, b) {
    var c = window;
    b = void 0 === b ? !1 : b;
    var d = void 0 === d ? !1 : d;
    c.fetch
      ? ((b = {
          keepalive: !0,
          credentials: "include",
          redirect: "follow",
          method: "get",
          mode: "no-cors",
        }),
        d &&
          ((b.mode = "cors"),
          (b.headers = { "Attribution-Reporting-Eligible": "event-source" })),
        c.fetch(a, b))
      : Kd(c, a, void 0 === b ? !1 : b, void 0 === d ? !1 : d);
  }
  var Nd = null;
  var Jd = document,
    L = window;
  var Od = null;
  function Pd(a, b) {
    b = void 0 === b ? [] : b;
    var c = !1;
    x.google_logging_queue || ((c = !0), (x.google_logging_queue = []));
    x.google_logging_queue.push([a, b]);
    if ((a = c)) {
      if (null == Od) {
        Od = !1;
        try {
          var d = nd(x);
          d && -1 !== d.location.hash.indexOf("google_logging") && (Od = !0);
          x.localStorage.getItem("google_logging") && (Od = !0);
        } catch (e) {}
      }
      a = Od;
    }
    a &&
      ((d = x.document),
      (a = new Hc(
        Ic,
        "https://pagead2.googlesyndication.com/pagead/js/logging_library.js"
      )),
      (a = cd(
        a instanceof Hc && a.constructor === Hc && a.h === Jc
          ? a.i
          : "type_error:Const"
      )),
      od(d, a));
  }
  function Qd(a) {
    a = void 0 === a ? x : a;
    var b = a.context || a.AMP_CONTEXT_DATA;
    if (!b)
      try {
        b = a.parent.context || a.parent.AMP_CONTEXT_DATA;
      } catch (e) {}
    var c, d;
    return (null == (c = b) ? 0 : c.pageViewId) &&
      (null == (d = b) ? 0 : d.canonicalUrl)
      ? b
      : null;
  }
  function Rd(a) {
    return (a = void 0 === a ? Qd() : a)
      ? md(a.master)
        ? a.master
        : null
      : null;
  }
  function Sd(a) {
    var b = Ea.apply(1, arguments);
    if (0 === b.length) return cd(a[0]);
    for (var c = [a[0]], d = 0; d < b.length; d++)
      c.push(encodeURIComponent(b[d])), c.push(a[d + 1]);
    return cd(c.join(""));
  }
  function Td(a) {
    var b = void 0 === b ? 1 : b;
    a = Rd(Qd(a)) || a;
    a.google_unique_id = (a.google_unique_id || 0) + b;
    return a.google_unique_id;
  }
  function Ud(a) {
    a = a.google_unique_id;
    return "number" === typeof a ? a : 0;
  }
  function Vd() {
    var a = void 0 === a ? L : a;
    if (!a) return !1;
    try {
      return !(!a.navigator.standalone && !a.top.navigator.standalone);
    } catch (b) {
      return !1;
    }
  }
  function Wd(a) {
    if (!a) return "";
    a = a.toLowerCase();
    "ca-" != a.substring(0, 3) && (a = "ca-" + a);
    return a;
  }
  function Xd(a, b) {
    var c = void 0 === c ? {} : c;
    this.error = a;
    this.context = b.context;
    this.msg = b.message || "";
    this.id = b.id || "jserror";
    this.meta = c;
  }
  function Yd(a) {
    return !!(a.error && a.meta && a.id);
  }
  var Zd = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");
  function $d(a, b) {
    this.h = a;
    this.i = b;
  }
  function ae(a, b, c) {
    this.url = a;
    this.s = b;
    this.Ua = !!c;
    this.depth = null;
  }
  function be() {
    this.j = "&";
    this.i = {};
    this.l = 0;
    this.h = [];
  }
  function ce(a, b) {
    var c = {};
    c[a] = b;
    return [c];
  }
  function de(a, b, c, d, e) {
    var f = [];
    vd(a, function (g, h) {
      (g = ee(g, b, c, d, e)) && f.push(h + "=" + g);
    });
    return f.join(b);
  }
  function ee(a, b, c, d, e) {
    if (null == a) return "";
    b = b || "&";
    c = c || ",$";
    "string" == typeof c && (c = c.split(""));
    if (a instanceof Array) {
      if (((d = d || 0), d < c.length)) {
        for (var f = [], g = 0; g < a.length; g++)
          f.push(ee(a[g], b, c, d + 1, e));
        return f.join(c[d]);
      }
    } else if ("object" == typeof a)
      return (
        (e = e || 0), 2 > e ? encodeURIComponent(de(a, b, c, d, e + 1)) : "..."
      );
    return encodeURIComponent(String(a));
  }
  function fe(a, b) {
    var c = "https://pagead2.googlesyndication.com" + b,
      d = ge(a) - b.length;
    if (0 > d) return "";
    a.h.sort(function (m, p) {
      return m - p;
    });
    b = null;
    for (var e = "", f = 0; f < a.h.length; f++)
      for (var g = a.h[f], h = a.i[g], k = 0; k < h.length; k++) {
        if (!d) {
          b = null == b ? g : b;
          break;
        }
        var l = de(h[k], a.j, ",$");
        if (l) {
          l = e + l;
          if (d >= l.length) {
            d -= l.length;
            c += l;
            e = a.j;
            break;
          }
          b = null == b ? g : b;
        }
      }
    a = "";
    null != b && (a = e + "trn=" + b);
    return c + a;
  }
  function ge(a) {
    var b = 1,
      c;
    for (c in a.i) b = c.length > b ? c.length : b;
    return 3997 - b - a.j.length - 1;
  }
  function he() {
    this.h = Math.random();
  }
  function ie(a, b) {
    0 <= b && 1 >= b && (a.h = b);
  }
  function je(a, b, c, d, e) {
    if (((void 0 === d ? 0 : d) ? a.h : Math.random()) < (e || 0.01))
      try {
        if (c instanceof be) var f = c;
        else
          (f = new be()),
            vd(c, function (h, k) {
              var l = f,
                m = l.l++;
              h = ce(k, h);
              l.h.push(m);
              l.i[m] = h;
            });
        var g = fe(f, "/pagead/gen_204?id=" + b + "&");
        g && Kd(x, g, !1, !1);
      } catch (h) {}
  }
  var ke = null;
  function le() {
    if (null === ke) {
      ke = "";
      try {
        var a = "";
        try {
          a = x.top.location.hash;
        } catch (c) {
          a = x.location.hash;
        }
        if (a) {
          var b = a.match(/\bdeid=([\d,]+)/);
          ke = b ? b[1] : "";
        }
      } catch (c) {}
    }
    return ke;
  }
  function me() {
    var a = void 0 === a ? x : a;
    return (a = a.performance) && a.now && a.timing
      ? Math.floor(a.now() + a.timing.navigationStart)
      : Date.now();
  }
  function ne() {
    var a = void 0 === a ? x : a;
    return (a = a.performance) && a.now ? a.now() : null;
  }
  function oe(a, b) {
    var c = ne() || me();
    this.label = a;
    this.type = b;
    this.value = c;
    this.duration = 0;
    this.uniqueId = Math.random();
    this.taskId = this.slotId = void 0;
  }
  var pe = x.performance,
    se = !!(pe && pe.mark && pe.measure && pe.clearMarks),
    te = Lc(function () {
      var a;
      if ((a = se)) (a = le()), (a = !!a.indexOf && 0 <= a.indexOf("1337"));
      return a;
    });
  function ue(a) {
    this.i = [];
    this.j = a || x;
    var b = null;
    a &&
      ((a.google_js_reporting_queue = a.google_js_reporting_queue || []),
      (this.i = a.google_js_reporting_queue),
      (b = a.google_measure_js_timing));
    this.h = te() || (null != b ? b : 1 > Math.random());
  }
  function ve(a) {
    a.h = !1;
    a.i != a.j.google_js_reporting_queue &&
      (te() && db(a.i, we), (a.i.length = 0));
  }
  function we(a) {
    a &&
      pe &&
      te() &&
      (pe.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"),
      pe.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"));
  }
  ue.prototype.start = function (a, b) {
    if (!this.h) return null;
    a = new oe(a, b);
    b = "goog_" + a.label + "_" + a.uniqueId + "_start";
    pe && te() && pe.mark(b);
    return a;
  };
  ue.prototype.end = function (a) {
    if (this.h && "number" === typeof a.value) {
      a.duration = (ne() || me()) - a.value;
      var b = "goog_" + a.label + "_" + a.uniqueId + "_end";
      pe && te() && pe.mark(b);
      !this.h || 2048 < this.i.length || this.i.push(a);
    }
  };
  function xe(a, b) {
    this.m = a;
    this.h = null;
    this.l = this.K;
    this.i = void 0 === b ? null : b;
    this.j = !1;
  }
  n = xe.prototype;
  n.bb = function (a) {
    this.l = a;
  };
  n.ya = function (a) {
    this.h = a;
  };
  n.za = function (a) {
    this.j = a;
  };
  n.ra = function (a, b, c) {
    try {
      if (this.i && this.i.h) {
        var d = this.i.start(a.toString(), 3);
        var e = b();
        this.i.end(d);
      } else e = b();
    } catch (h) {
      b = !0;
      try {
        we(d), (b = this.l(a, new Xd(h, { message: ye(h) }), void 0, c));
      } catch (k) {
        this.K(217, k);
      }
      if (b) {
        var f, g;
        null == (f = window.console) || null == (g = f.error) || g.call(f, h);
      } else throw h;
    }
    return e;
  };
  n.Xa = function (a, b) {
    var c = this;
    return function () {
      var d = Ea.apply(0, arguments);
      return c.ra(a, function () {
        return b.apply(void 0, d);
      });
    };
  };
  n.K = function (a, b, c, d, e) {
    e = e || "jserror";
    try {
      var f = new be();
      f.h.push(1);
      f.i[1] = ce("context", a);
      Yd(b) || (b = new Xd(b, { message: ye(b) }));
      if (b.msg) {
        var g = b.msg.substring(0, 512);
        f.h.push(2);
        f.i[2] = ce("msg", g);
      }
      var h = b.meta || {};
      if (this.h)
        try {
          this.h(h);
        } catch (Yc) {}
      if (d)
        try {
          d(h);
        } catch (Yc) {}
      b = [h];
      f.h.push(3);
      f.i[3] = b;
      d = x;
      b = [];
      g = null;
      do {
        var k = d;
        if (md(k)) {
          var l = k.location.href;
          g = (k.document && k.document.referrer) || null;
        } else (l = g), (g = null);
        b.push(new ae(l || "", k));
        try {
          d = k.parent;
        } catch (Yc) {
          d = null;
        }
      } while (d && k != d);
      l = 0;
      for (var m = b.length - 1; l <= m; ++l) b[l].depth = m - l;
      k = x;
      if (
        k.location &&
        k.location.ancestorOrigins &&
        k.location.ancestorOrigins.length == b.length - 1
      )
        for (m = 1; m < b.length; ++m) {
          var p = b[m];
          p.url ||
            ((p.url = k.location.ancestorOrigins[m - 1] || ""), (p.Ua = !0));
        }
      var t = new ae(x.location.href, x, !1);
      k = null;
      var y = b.length - 1;
      for (p = y; 0 <= p; --p) {
        var D = b[p];
        !k && Zd.test(D.url) && (k = D);
        if (D.url && !D.Ua) {
          t = D;
          break;
        }
      }
      D = null;
      var z = b.length && b[y].url;
      0 != t.depth && z && (D = b[y]);
      var F = new $d(t, D);
      if (F.i) {
        var Y = F.i.url || "";
        f.h.push(4);
        f.i[4] = ce("top", Y);
      }
      var qe = { url: F.h.url || "" };
      if (F.h.url) {
        var re = F.h.url.match(jd),
          Yg = re[1],
          Zg = re[3],
          $g = re[4];
        t = "";
        Yg && (t += Yg + ":");
        Zg && ((t += "//"), (t += Zg), $g && (t += ":" + $g));
        var ah = t;
      } else ah = "";
      qe = [qe, { url: ah }];
      f.h.push(5);
      f.i[5] = qe;
      je(this.m, e, f, this.j, c);
    } catch (Yc) {
      try {
        je(
          this.m,
          e,
          { context: "ecmserr", rctx: a, msg: ye(Yc), url: F && F.h.url },
          this.j,
          c
        );
      } catch (kr) {}
    }
    return !0;
  };
  n.xa = function (a, b) {
    var c = this;
    b.catch(function (d) {
      d = d ? d : "unknown rejection";
      c.K(a, d instanceof Error ? d : Error(d), void 0, c.h || void 0);
    });
  };
  function ye(a) {
    var b = a.toString();
    a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
    a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
    if (a.stack) {
      a = a.stack;
      var c = b;
      try {
        -1 == a.indexOf(c) && (a = c + "\n" + a);
        for (var d; a != d; )
          (d = a),
            (a = a.replace(
              RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"),
              "$1"
            ));
        b = a.replace(RegExp("\n *", "g"), "\n");
      } catch (e) {
        b = c;
      }
    }
    return b;
  }
  function ze(a) {
    return "string" === typeof a;
  }
  function Ae(a) {
    return void 0 === a;
  }
  function Be(a) {
    J.call(this, a, -1, Ce);
  }
  w(Be, J);
  var Ce = [2, 8],
    De = [3, 4, 5],
    Ee = [6, 7];
  var Fe;
  Fe = { cc: 0, gb: 3, hb: 4, ib: 5 };
  var Ge = Fe.gb,
    He = Fe.hb,
    Ie = Fe.ib;
  function Je(a) {
    return null != a ? !a : a;
  }
  function Ke(a, b) {
    for (var c = !1, d = 0; d < a.length; d++) {
      var e = a[d]();
      if (e === b) return e;
      null == e && (c = !0);
    }
    if (!c) return !b;
  }
  function Le(a, b) {
    var c = G(a, Be, 2);
    if (!c.length) return Me(a, b);
    a = I(a, 1);
    if (1 === a) return Je(Le(c[0], b));
    c = fb(c, function (d) {
      return function () {
        return Le(d, b);
      };
    });
    switch (a) {
      case 2:
        return Ke(c, !1);
      case 3:
        return Ke(c, !0);
    }
  }
  function Me(a, b) {
    var c = bc(a, De);
    a: {
      switch (c) {
        case Ge:
          var d = I(a, Tb(a, De, 3));
          break a;
        case He:
          d = I(a, Tb(a, De, 4));
          break a;
        case Ie:
          d = I(a, Tb(a, De, 5));
          break a;
      }
      d = void 0;
    }
    if (d && (b = (b = b[c]) && b[d])) {
      try {
        var e = b.apply(null, ka(Yb(a, 8)));
      } catch (f) {
        return;
      }
      b = I(a, 1);
      if (4 === b) return !!e;
      d = null != e;
      if (5 === b) return d;
      if (12 === b) a = kc(a, Tb(a, Ee, 7));
      else
        a: {
          switch (c) {
            case He:
              a = lc(a, Tb(a, Ee, 6));
              break a;
            case Ie:
              a = kc(a, Tb(a, Ee, 7));
              break a;
          }
          a = void 0;
        }
      if (null != a) {
        if (6 === b) return e === a;
        if (9 === b) return null != e && 0 === Wa(String(e), a);
        if (d)
          switch (b) {
            case 7:
              return e < a;
            case 8:
              return e > a;
            case 12:
              return ze(a) && ze(e) && new RegExp(a).test(e);
            case 10:
              return null != e && -1 === Wa(String(e), a);
            case 11:
              return null != e && 1 === Wa(String(e), a);
          }
      }
    }
  }
  function Ne(a, b) {
    return !a || !(!b || !Le(a, b));
  }
  function Oe(a) {
    J.call(this, a, -1, Pe);
  }
  w(Oe, J);
  var Pe = [4];
  function Qe(a) {
    J.call(this, a);
  }
  w(Qe, J);
  function Re(a) {
    J.call(this, a, -1, Se);
  }
  w(Re, J);
  var Se = [5],
    Te = [1, 2, 3, 6, 7];
  function Ue(a) {
    J.call(this, a, -1, Ve);
  }
  w(Ue, J);
  var Ve = [2];
  function We(a) {
    J.call(this, a);
  }
  w(We, J);
  function Xe(a) {
    var b = new We();
    return C(b, 1, a);
  }
  function Ye(a) {
    J.call(this, a);
  }
  w(Ye, J);
  Ye.prototype.getWidth = function () {
    return jc(B(this, 1), 0);
  };
  function Ze(a, b) {
    return $b(a, 1, b, 0);
  }
  Ye.prototype.getHeight = function () {
    return jc(B(this, 2), 0);
  };
  function $e(a, b) {
    return $b(a, 2, b, 0);
  }
  function af(a) {
    J.call(this, a);
  }
  w(af, J);
  function bf(a, b) {
    return ec(a, 1, b);
  }
  function cf(a, b) {
    return ec(a, 2, b);
  }
  function df(a, b) {
    ec(a, 3, b);
  }
  function ef(a) {
    J.call(this, a);
  }
  w(ef, J);
  function ff(a) {
    J.call(this, a);
  }
  w(ff, J);
  function gf(a, b) {
    return fc(a, 4, hf, b);
  }
  var hf = [4, 8, 5, 6, 9];
  function jf(a) {
    J.call(this, a, -1, kf);
  }
  w(jf, J);
  function lf(a, b) {
    return ec(a, 1, b);
  }
  function mf(a, b) {
    return gc(a, 2, b);
  }
  function nf(a, b) {
    return Zb(a, 4, b);
  }
  function of(a, b) {
    return gc(a, 5, b);
  }
  function pf(a, b) {
    return $b(a, 6, b, 0);
  }
  function qf(a) {
    J.call(this, a);
  }
  w(qf, J);
  function rf(a, b) {
    return $b(a, 1, b, 0);
  }
  function sf(a, b) {
    return $b(a, 2, b, 0);
  }
  function tf(a) {
    J.call(this, a);
  }
  w(tf, J);
  var kf = [2, 4, 5],
    uf = [1, 2];
  function vf(a) {
    J.call(this, a, -1, wf);
  }
  w(vf, J);
  function xf(a) {
    J.call(this, a, -1, yf);
  }
  w(xf, J);
  var wf = [2, 3],
    yf = [5],
    zf = [1, 2, 3, 4];
  function Af(a) {
    J.call(this, a);
  }
  w(Af, J);
  Af.prototype.getTagSessionCorrelator = function () {
    return jc(B(this, 2), 0);
  };
  function Bf(a) {
    var b = new Af();
    return fc(b, 4, Cf, a);
  }
  var Cf = [4, 5, 7];
  function Df(a) {
    a.ab.apply(
      a,
      ka(
        Ea.apply(1, arguments).map(function (b) {
          return { fb: 4, message: b };
        })
      )
    );
  }
  function Ef(a) {
    a.ab.apply(
      a,
      ka(
        Ea.apply(1, arguments).map(function (b) {
          return { fb: 7, message: b };
        })
      )
    );
  }
  function Ff(a) {
    return JSON.stringify([
      a.map(function (b) {
        var c = {};
        return [((c[b.fb] = b.message.toJSON()), c)];
      }),
    ]);
  }
  function Gf(a, b) {
    if (q.globalThis.fetch)
      q.globalThis
        .fetch(a, {
          method: "POST",
          body: b,
          keepalive: 65536 > b.length,
          credentials: "omit",
          mode: "no-cors",
          redirect: "follow",
        })
        .catch(function () {});
    else {
      var c = new XMLHttpRequest();
      c.open("POST", a, !0);
      c.send(b);
    }
  }
  function M() {
    this.A = this.A;
    this.j = this.j;
  }
  M.prototype.A = !1;
  function Hf(a) {
    a.A || ((a.A = !0), a.h());
  }
  function If(a, b) {
    a.A ? b() : (a.j || (a.j = []), a.j.push(b));
  }
  M.prototype.h = function () {
    if (this.j) for (; this.j.length; ) this.j.shift()();
  };
  function Jf(a) {
    M.call(this);
    this.s = a;
    this.state = 0;
    this.callback = null;
  }
  w(Jf, M);
  function Kf(a) {
    a.s.document.visibilityState
      ? Lf(a, a.s.document, "visibilitychange", function (b) {
          "hidden" === a.s.document.visibilityState && Mf(a, b);
          "visible" === a.s.document.visibilityState && (a.state = 0);
        })
      : "onpagehide" in a.s
      ? (Lf(a, a.s, "pagehide", function (b) {
          Mf(a, b);
        }),
        Lf(a, a.s, "pageshow", function () {
          a.state = 0;
        }))
      : Lf(a, a.s, "beforeunload", function (b) {
          Mf(a, b);
        });
  }
  function Nf(a, b) {
    a.callback || Kf(a);
    a.callback = b;
  }
  function Mf(a, b) {
    1 !== a.state && ((a.state = 1), a.callback && a.callback(b));
  }
  function Lf(a, b, c, d) {
    Nc(b, c, d);
    If(a, function () {
      return Oc(b, c, d);
    });
  }
  function Of(a, b, c, d, e) {
    this.B = a;
    this.u = b;
    this.C = c;
    this.m = d;
    this.A = e;
    this.l = [];
    this.h = [];
    this.i = null;
  }
  function Pf(a, b, c, d) {
    a.j ||
      ((a.j = new Jf(b)),
      Nf(a.j, function () {
        for (var e = v(a.l), f = e.next(); !f.done; f = e.next())
          (f = f.value), f();
        c();
      }));
    d && 1 !== a.j.state && a.l.push(d);
  }
  function Qf(a) {
    null !== a.i && (clearTimeout(a.i), (a.i = null));
    if (a.h.length) {
      var b = Ff(a.h);
      a.u(a.B + "?e=1", b);
      a.h = [];
    }
  }
  Of.prototype.ab = function () {
    var a = Ea.apply(0, arguments),
      b = this;
    this.A && 65536 <= Ff(this.h.concat(a)).length && Qf(this);
    this.h.push.apply(this.h, ka(a));
    this.h.length >= this.m && Qf(this);
    this.h.length &&
      null === this.i &&
      (this.i = setTimeout(function () {
        Qf(b);
      }, this.C));
  };
  function Rf(a, b, c) {
    Pf(
      a,
      b,
      function () {
        Qf(a);
      },
      c
    );
  }
  function Sf(a, b, c) {
    Of.call(
      this,
      "https://pagead2.googlesyndication.com/pagead/ping",
      Gf,
      void 0 === a ? 1e3 : a,
      void 0 === b ? 100 : b,
      (void 0 === c ? !1 : c) && !!q.globalThis.fetch
    );
  }
  w(Sf, Of);
  function Tf(a, b, c) {
    var d = void 0 === d ? new Sf(b) : d;
    this.m = a;
    this.l = c;
    this.i = d;
    this.h = [];
    this.j = 0 < a && ud() < 1 / a;
  }
  function Uf(a, b, c, d, e, f) {
    if (a.j) {
      var g = sf(rf(new qf(), b), c);
      b = pf(mf(lf(of(nf(new jf(), d), e), g), a.h.slice()), f);
      b = Bf(b);
      Df(a.i, Vf(a, b));
      if (
        1 === f ||
        3 === f ||
        (4 === f &&
          !a.h.some(function (h) {
            return I(h, 1) === I(g, 1) && I(h, 2) === c;
          }))
      )
        a.h.push(g), 100 < a.h.length && a.h.shift();
    }
  }
  function Wf(a, b, c, d) {
    if (a.j && a.l) {
      var e = new vf();
      b = gc(e, 2, b);
      c = gc(b, 3, c);
      d && $b(c, 1, d, 0);
      d = new Af();
      d = fc(d, 7, Cf, c);
      Df(a.i, Vf(a, d));
    }
  }
  function Vf(a, b) {
    b = $b(b, 1, Date.now(), 0);
    var c = Hd(window);
    b = $b(b, 2, c, 0);
    return $b(b, 6, a.m, 0);
  }
  function N(a) {
    var b = "va";
    if (a.va && a.hasOwnProperty(b)) return a.va;
    b = new a();
    return (a.va = b);
  }
  function Xf() {
    var a = {};
    this.H = ((a[Ge] = {}), (a[He] = {}), (a[Ie] = {}), a);
  }
  var Yf = /^true$/.test("false");
  function Zf(a, b) {
    switch (b) {
      case 1:
        return I(a, Tb(a, Te, 1));
      case 2:
        return I(a, Tb(a, Te, 2));
      case 3:
        return I(a, Tb(a, Te, 3));
      case 6:
        return I(a, Tb(a, Te, 6));
      default:
        return null;
    }
  }
  function $f(a, b) {
    if (!a) return null;
    switch (b) {
      case 1:
        return H(a, 1);
      case 7:
        return kc(a, 3);
      case 2:
        return lc(a, 2);
      case 3:
        return kc(a, 3);
      case 6:
        return Yb(a, 4);
      default:
        return null;
    }
  }
  var ag = Lc(function () {
    if (!Yf) return {};
    try {
      var a = window.sessionStorage && window.sessionStorage.getItem("GGDFSSK");
      if (a) return JSON.parse(a);
    } catch (b) {}
    return {};
  });
  function bg(a, b, c, d) {
    var e = (d = void 0 === d ? 0 : d),
      f,
      g;
    N(cg).j[e] =
      null != (g = null == (f = N(cg).j[e]) ? void 0 : f.add(b))
        ? g
        : new q.Set().add(b);
    e = ag();
    if (null != e[b]) return e[b];
    b = dg(d)[b];
    if (!b) return c;
    b = JSON.stringify(b);
    b = zc(Re, b);
    b = eg(b);
    a = $f(b, a);
    return null != a ? a : c;
  }
  function eg(a) {
    var b = N(Xf).H;
    if (b) {
      var c = ib(G(a, Qe, 5), function (f) {
        return Ne(E(f, Be, 1), b);
      });
      if (c) {
        var d;
        return null != (d = E(c, Oe, 2)) ? d : null;
      }
    }
    var e;
    return null != (e = E(a, Oe, 4)) ? e : null;
  }
  function cg() {
    this.i = {};
    this.l = [];
    this.j = {};
    this.h = new q.Map();
  }
  function fg(a, b, c) {
    return !!bg(1, a, void 0 === b ? !1 : b, c);
  }
  function gg(a, b, c) {
    b = void 0 === b ? 0 : b;
    a = Number(bg(2, a, b, c));
    return isNaN(a) ? b : a;
  }
  function hg(a, b, c) {
    b = void 0 === b ? "" : b;
    a = bg(3, a, b, c);
    return "string" === typeof a ? a : b;
  }
  function ig(a, b, c) {
    b = void 0 === b ? [] : b;
    a = bg(6, a, b, c);
    return Array.isArray(a) ? a : b;
  }
  function dg(a) {
    return N(cg).i[a] || (N(cg).i[a] = {});
  }
  function jg(a, b) {
    var c = dg(b);
    vd(a, function (d, e) {
      return (c[e] = d);
    });
  }
  function kg(a, b, c, d, e) {
    e = void 0 === e ? !1 : e;
    var f = [],
      g = [];
    db(b, function (h) {
      var k = dg(h);
      db(a, function (l) {
        var m = bc(l, Te),
          p = Zf(l, m);
        if (p) {
          var t, y, D;
          var z =
            null !=
            (D =
              null == (t = N(cg).h.get(h))
                ? void 0
                : null == (y = t.get(p))
                ? void 0
                : y.slice(0))
              ? D
              : [];
          a: {
            t = new xf();
            switch (m) {
              case 1:
                ac(t, 1, zf, p);
                break;
              case 2:
                ac(t, 2, zf, p);
                break;
              case 3:
                ac(t, 3, zf, p);
                break;
              case 6:
                ac(t, 4, zf, p);
                break;
              default:
                m = void 0;
                break a;
            }
            Zb(t, 5, z);
            m = t;
          }
          if ((z = m)) {
            var F;
            z = !(null == (F = N(cg).j[h]) || !F.has(p));
          }
          z && f.push(m);
          if ((F = m)) {
            var Y;
            F = !(null == (Y = N(cg).h.get(h)) || !Y.has(p));
          }
          F && g.push(m);
          e ||
            ((Y = N(cg)),
            Y.h.has(h) || Y.h.set(h, new q.Map()),
            Y.h.get(h).has(p) || Y.h.get(h).set(p, []),
            d && Y.h.get(h).get(p).push(d));
          k[p] = l.toJSON();
        }
      });
    });
    (f.length || g.length) && Wf(c, f, g, null != d ? d : void 0);
  }
  function lg(a, b) {
    var c = dg(b);
    db(a, function (d) {
      var e = JSON.stringify(d);
      e = zc(Re, e);
      var f = bc(e, Te);
      (e = Zf(e, f)) && (c[e] || (c[e] = d));
    });
  }
  function mg() {
    return fb(r(Object, "keys").call(Object, N(cg).i), function (a) {
      return Number(a);
    });
  }
  function ng(a) {
    jb(N(cg).l, a) || jg(dg(4), a);
  }
  function og(a, b, c) {
    c.hasOwnProperty(a) || Object.defineProperty(c, String(a), { value: b });
  }
  function pg(a, b, c) {
    return b[a] || c;
  }
  function qg(a) {
    og(5, fg, a);
    og(6, gg, a);
    og(7, hg, a);
    og(8, ig, a);
    og(13, lg, a);
    og(15, ng, a);
  }
  function rg(a) {
    og(
      4,
      function (b) {
        N(Xf).H = b;
      },
      a
    );
    og(
      9,
      function (b, c) {
        var d = N(Xf);
        d.H[Ge][b] || (d.H[Ge][b] = c);
      },
      a
    );
    og(
      10,
      function (b, c) {
        var d = N(Xf);
        d.H[He][b] || (d.H[He][b] = c);
      },
      a
    );
    og(
      11,
      function (b, c) {
        var d = N(Xf);
        d.H[Ie][b] || (d.H[Ie][b] = c);
      },
      a
    );
    og(
      14,
      function (b) {
        for (
          var c = N(Xf), d = v([Ge, He, Ie]), e = d.next();
          !e.done;
          e = d.next()
        )
          (e = e.value), r(Object, "assign").call(Object, c.H[e], b[e]);
      },
      a
    );
  }
  function sg(a) {
    a.hasOwnProperty("init-done") ||
      Object.defineProperty(a, "init-done", { value: !0 });
  }
  function tg() {}
  tg.prototype.j = function () {};
  tg.prototype.h = function () {};
  tg.prototype.l = function () {
    return [];
  };
  tg.prototype.i = function () {
    return [];
  };
  function ug(a, b, c) {
    a.j = pg(1, b, function () {});
    a.l = function (d) {
      return pg(2, b, function () {
        return [];
      })(d, c);
    };
    a.i = function () {
      return pg(3, b, function () {
        return [];
      })(c);
    };
    a.h = function (d) {
      pg(16, b, function () {})(d, c);
    };
  }
  var vg,
    wg,
    xg = new ue(window);
  (function (a) {
    vg = null != a ? a : new he();
    "number" !== typeof window.google_srt &&
      (window.google_srt = Math.random());
    ie(vg, window.google_srt);
    wg = new xe(vg, xg);
    wg.ya(function () {});
    wg.za(!0);
    "complete" == window.document.readyState
      ? window.google_measure_js_timing || ve(xg)
      : xg.h &&
        Nc(window, "load", function () {
          window.google_measure_js_timing || ve(xg);
        });
  })();
  var yg = {
    Yb: 0,
    Xb: 1,
    Ub: 2,
    Pb: 3,
    Vb: 4,
    Qb: 5,
    Wb: 6,
    Sb: 7,
    Tb: 8,
    Ob: 9,
    Rb: 10,
  };
  var zg = { ac: 0, bc: 1, Zb: 2 };
  function Ag() {
    this.i = new Bg(this);
    this.h = 0;
  }
  Ag.prototype.resolve = function (a) {
    Cg(this);
    this.h = 1;
    this.l = a;
    Dg(this.i);
  };
  Ag.prototype.reject = function (a) {
    Cg(this);
    this.h = 2;
    this.j = a;
    Dg(this.i);
  };
  function Cg(a) {
    if (0 != a.h) throw Error("Already resolved/rejected.");
  }
  function Bg(a) {
    this.h = a;
  }
  Bg.prototype.then = function (a, b) {
    if (this.i) throw Error("Then functions already set.");
    this.i = a;
    this.j = b;
    Dg(this);
  };
  function Dg(a) {
    switch (a.h.h) {
      case 0:
        break;
      case 1:
        a.i && a.i(a.h.l);
        break;
      case 2:
        a.j && a.j(a.h.j);
        break;
      default:
        throw Error("Unhandled deferred state.");
    }
  }
  function Eg(a) {
    this.h = a.slice(0);
  }
  n = Eg.prototype;
  n.forEach = function (a) {
    var b = this;
    this.h.forEach(function (c, d) {
      return void a(c, d, b);
    });
  };
  n.filter = function (a) {
    return new Eg(eb(this.h, a));
  };
  n.apply = function (a) {
    return new Eg(a(this.h.slice(0)));
  };
  n.sort = function (a) {
    return new Eg(this.h.slice(0).sort(a));
  };
  n.get = function (a) {
    return this.h[a];
  };
  n.add = function (a) {
    var b = this.h.slice(0);
    b.push(a);
    return new Eg(b);
  };
  function Fg(a, b) {
    for (var c = [], d = a.length, e = 0; e < d; e++) c.push(a[e]);
    c.forEach(b, void 0);
  }
  function Gg() {
    this.h = {};
    this.i = {};
  }
  Gg.prototype.set = function (a, b) {
    var c = Hg(a);
    this.h[c] = b;
    this.i[c] = a;
  };
  Gg.prototype.get = function (a, b) {
    a = Hg(a);
    return void 0 !== this.h[a] ? this.h[a] : b;
  };
  Gg.prototype.clear = function () {
    this.h = {};
    this.i = {};
  };
  function Hg(a) {
    return a instanceof Object ? String(La(a)) : a + "";
  }
  function Ig(a, b) {
    this.h = a;
    this.i = b;
  }
  function Jg(a) {
    return null != a.h ? a.h.value : null;
  }
  function Kg(a, b) {
    null != a.h && b(a.h.value);
    return a;
  }
  Ig.prototype.map = function (a) {
    return null != this.h
      ? ((a = a(this.h.value)), a instanceof Ig ? a : Lg(a))
      : this;
  };
  function Mg(a, b) {
    null != a.h || b(a.i);
    return a;
  }
  function Lg(a) {
    return new Ig({ value: a }, null);
  }
  function Ng(a) {
    return new Ig(null, a);
  }
  function Og(a) {
    try {
      return Lg(a());
    } catch (b) {
      return Ng(b);
    }
  }
  function Pg(a) {
    this.h = new Gg();
    if (a) for (var b = 0; b < a.length; ++b) this.add(a[b]);
  }
  Pg.prototype.add = function (a) {
    this.h.set(a, !0);
  };
  Pg.prototype.contains = function (a) {
    return void 0 !== this.h.h[Hg(a)];
  };
  function Qg() {
    this.h = new Gg();
  }
  Qg.prototype.set = function (a, b) {
    var c = this.h.get(a);
    c || ((c = new Pg()), this.h.set(a, c));
    c.add(b);
  };
  function O(a) {
    J.call(this, a, -1, Rg);
  }
  w(O, J);
  O.prototype.getId = function () {
    return B(this, 3);
  };
  var Rg = [4];
  function Sg(a) {
    var b = void 0 === a.Na ? void 0 : a.Na,
      c = void 0 === a.tb ? void 0 : a.tb,
      d = void 0 === a.Za ? void 0 : a.Za;
    this.h = void 0 === a.kb ? void 0 : a.kb;
    this.l = new Eg(b || []);
    this.j = d;
    this.i = c;
  }
  function Tg(a) {
    var b = [],
      c = a.l;
    c && c.h.length && b.push({ aa: "a", fa: Ug(c) });
    null != a.h && b.push({ aa: "as", fa: a.h });
    null != a.i && b.push({ aa: "i", fa: String(a.i) });
    null != a.j && b.push({ aa: "rp", fa: String(a.j) });
    b.sort(function (d, e) {
      return d.aa.localeCompare(e.aa);
    });
    b.unshift({ aa: "t", fa: "aa" });
    return b;
  }
  function Ug(a) {
    a = a.h.slice(0).map(Vg);
    a = JSON.stringify(a);
    return wd(a);
  }
  function Vg(a) {
    var b = {};
    null != B(a, 7) && (b.q = B(a, 7));
    null != B(a, 2) && (b.o = B(a, 2));
    null != B(a, 5) && (b.p = B(a, 5));
    return b;
  }
  function Wg(a) {
    J.call(this, a);
  }
  w(Wg, J);
  Wg.prototype.setLocation = function (a) {
    return C(this, 1, a);
  };
  function Xg(a, b) {
    this.Ra = a;
    this.Ya = b;
  }
  function bh(a) {
    var b = [].slice.call(arguments).filter(
      Kc(function (e) {
        return null === e;
      })
    );
    if (!b.length) return null;
    var c = [],
      d = {};
    b.forEach(function (e) {
      c = c.concat(e.Ra || []);
      d = r(Object, "assign").call(Object, d, e.Ya);
    });
    return new Xg(c, d);
  }
  function ch(a) {
    switch (a) {
      case 1:
        return new Xg(null, { google_ad_semantic_area: "mc" });
      case 2:
        return new Xg(null, { google_ad_semantic_area: "h" });
      case 3:
        return new Xg(null, { google_ad_semantic_area: "f" });
      case 4:
        return new Xg(null, { google_ad_semantic_area: "s" });
      default:
        return null;
    }
  }
  function dh(a) {
    if (null == a) a = null;
    else {
      var b = Tg(a);
      a = [];
      b = v(b);
      for (var c = b.next(); !c.done; c = b.next()) {
        c = c.value;
        var d = String(c.fa);
        a.push(c.aa + "." + (20 >= d.length ? d : d.slice(0, 19) + "_"));
      }
      a = new Xg(null, { google_placement_id: a.join("~") });
    }
    return a;
  }
  var eh = {},
    fh = new Xg(
      ["google-auto-placed"],
      ((eh.google_reactive_ad_format = 40), (eh.google_tag_origin = "qs"), eh)
    );
  var gh = {
    overlays: 1,
    interstitials: 2,
    vignettes: 2,
    inserts: 3,
    immersives: 4,
    list_view: 5,
    full_page: 6,
    side_rails: 7,
  };
  function hh() {
    this.wasPlaTagProcessed = !1;
    this.wasReactiveAdConfigReceived = {};
    this.adCount = {};
    this.wasReactiveAdVisible = {};
    this.stateForType = {};
    this.reactiveTypeEnabledInAsfe = {};
    this.wasReactiveTagRequestSent = !1;
    this.reactiveTypeDisabledByPublisher = {};
    this.tagSpecificState = {};
    this.messageValidationEnabled = !1;
    this.floatingAdsStacking = new ih();
    this.sideRailProcessedFixedElements = new q.Set();
    this.sideRailAvailableSpace = new q.Map();
  }
  function jh(a) {
    a.google_reactive_ads_global_state
      ? (null ==
          a.google_reactive_ads_global_state.sideRailProcessedFixedElements &&
          (a.google_reactive_ads_global_state.sideRailProcessedFixedElements =
            new q.Set()),
        null == a.google_reactive_ads_global_state.sideRailAvailableSpace &&
          (a.google_reactive_ads_global_state.sideRailAvailableSpace =
            new q.Map()))
      : (a.google_reactive_ads_global_state = new hh());
    return a.google_reactive_ads_global_state;
  }
  function ih() {
    this.maxZIndexRestrictions = {};
    this.nextRestrictionId = 0;
    this.maxZIndexListeners = [];
  }
  function kh(a) {
    a = a.document;
    var b = {};
    a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
    return b || {};
  }
  function lh(a) {
    return kh(a).clientWidth;
  }
  function mh(a) {
    a = a.getBoundingClientRect();
    return 0 < a.width && 0 < a.height;
  }
  function nh(a) {
    var b = 0;
    a.forEach(function (c) {
      return (b = Math.max(b, c.getBoundingClientRect().width));
    });
    return function (c) {
      return c.getBoundingClientRect().width > 0.5 * b;
    };
  }
  function oh(a) {
    var b = kh(a).clientHeight || 0;
    return function (c) {
      return c.getBoundingClientRect().height >= 0.75 * b;
    };
  }
  function ph(a, b) {
    return a.getBoundingClientRect().top - b.getBoundingClientRect().top;
  }
  function qh(a) {
    J.call(this, a);
  }
  w(qh, J);
  function rh(a) {
    J.call(this, a);
  }
  w(rh, J);
  function sh(a) {
    J.call(this, a, -1, th);
  }
  w(sh, J);
  function uh(a) {
    J.call(this, a);
  }
  w(uh, J);
  function vh(a) {
    J.call(this, a);
  }
  w(vh, J);
  var th = [1];
  function wh(a) {
    J.call(this, a, -1, xh);
  }
  w(wh, J);
  function yh(a) {
    J.call(this, a);
  }
  w(yh, J);
  var xh = [1];
  function zh(a) {
    J.call(this, a);
  }
  w(zh, J);
  function Ah(a) {
    J.call(this, a);
  }
  w(Ah, J);
  function Bh(a) {
    J.call(this, a, -1, Ch);
  }
  w(Bh, J);
  var Ch = [6, 7, 9, 10, 11];
  function Dh(a, b, c, d) {
    this.l = a;
    this.i = b;
    this.j = c;
    this.h = d;
  }
  Dh.prototype.query = function (a) {
    var b = [];
    try {
      b = a.querySelectorAll(this.l);
    } catch (f) {}
    if (!b.length) return [];
    a = kb(b);
    a = Eh(this, a);
    "number" === typeof this.i &&
      ((b = this.i),
      0 > b && (b += a.length),
      (a = 0 <= b && b < a.length ? [a[b]] : []));
    if ("number" === typeof this.j) {
      b = [];
      for (var c = 0; c < a.length; c++) {
        var d = Fh(a[c]),
          e = this.j;
        0 > e && (e += d.length);
        0 <= e && e < d.length && b.push(d[e]);
      }
      a = b;
    }
    return a;
  };
  Dh.prototype.toString = function () {
    return JSON.stringify({
      nativeQuery: this.l,
      occurrenceIndex: this.i,
      paragraphIndex: this.j,
      ignoreMode: this.h,
    });
  };
  function Eh(a, b) {
    if (null == a.h) return b;
    switch (a.h) {
      case 1:
        return b.slice(1);
      case 2:
        return b.slice(0, b.length - 1);
      case 3:
        return b.slice(1, b.length - 1);
      case 0:
        return b;
      default:
        throw Error("Unknown ignore mode: " + a.h);
    }
  }
  function Fh(a) {
    var b = [];
    Fg(a.getElementsByTagName("p"), function (c) {
      100 <= Gh(c) && b.push(c);
    });
    return b;
  }
  function Gh(a) {
    if (3 == a.nodeType) return a.length;
    if (1 != a.nodeType || "SCRIPT" == a.tagName) return 0;
    var b = 0;
    Fg(a.childNodes, function (c) {
      b += Gh(c);
    });
    return b;
  }
  function Hh(a) {
    return 0 == a.length || isNaN(a[0])
      ? a
      : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1);
  }
  function Ih(a) {
    if (1 != a.nodeType) var b = !1;
    else if ((b = "INS" == a.tagName))
      a: {
        b = ["adsbygoogle-placeholder"];
        a = a.className ? a.className.split(/\s+/) : [];
        for (var c = {}, d = 0; d < a.length; ++d) c[a[d]] = !0;
        for (d = 0; d < b.length; ++d)
          if (!c[b[d]]) {
            b = !1;
            break a;
          }
        b = !0;
      }
    return b;
  }
  function P(a, b) {
    this.h = a;
    this.defaultValue = void 0 === b ? !1 : b;
  }
  function Jh(a, b) {
    this.h = a;
    this.defaultValue = void 0 === b ? 0 : b;
  }
  function Kh(a, b) {
    b = void 0 === b ? [] : b;
    this.h = a;
    this.defaultValue = b;
  }
  var Lh = new P(1082, !0),
    Mh = new P(1214),
    Nh = new Jh(1130, 100),
    Oh = new (function (a, b) {
      this.h = a;
      this.defaultValue = void 0 === b ? "" : b;
    })(14),
    Ph = new P(316),
    Qh = new P(1207, !0),
    Rh = new P(313),
    Sh = new P(369),
    Th = new P(1171, !0),
    Uh = new P(1201, !0),
    Vh = new P(217),
    Wh = new P(1216),
    Xh = new P(1215),
    Yh = new P(1086, !0),
    Zh = new Jh(1079, 5),
    $h = new Kh(1934, [
      "Az6AfRvI8mo7yiW5fLfj04W21t0ig6aMsGYpIqMTaX60H+b0DkO1uDr+7BrzMcimWzv/X7SXR8jI+uvbV0IJlwYAAACFeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjgwNjUyNzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==",
      "A+USTya+tNvDPaxUgJooz+LaVk5hPoAxpLvSxjogX4Mk8awCTQ9iop6zJ9d5ldgU7WmHqBlnQB41LHHRFxoaBwoAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjgwNjUyNzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==",
      "A7FovoGr67TUBYbnY+Z0IKoJbbmRmB8fCyirUGHavNDtD91CiGyHHSA2hDG9r9T3NjUKFi6egL3RbgTwhhcVDwUAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjgwNjUyNzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==",
    ]),
    ai = new P(203),
    bi = new P(84),
    ci = new P(1975),
    di = new P(1974),
    ei = new P(1162),
    fi = new P(1120),
    gi = new Jh(501545963, 1),
    hi = new P(501545960),
    ii = new P(501545961),
    ji = new P(45388034),
    ki = new Jh(501545962, 1),
    li = new Jh(45388309, -1),
    mi = new Jh(1114, 1),
    ni = new Jh(1110, 5),
    oi = new Jh(1111, 5),
    pi = new Jh(1112, 5),
    qi = new Jh(1113, 5),
    ri = new Jh(1104),
    si = new Jh(1108),
    ti = new Jh(1106),
    ui = new Jh(1107),
    vi = new Jh(1105),
    wi = new P(491815314),
    xi = new Jh(1115, -1),
    yi = new P(1121),
    zi = new P(501545959, !0),
    Ai = new P(1928),
    Bi = new P(1941),
    Ci = new P(370946349),
    Di = new P(392736476),
    Ei = new Jh(406149835),
    Fi = new Kh(1932),
    Gi = new Jh(1935);
  function Hi() {
    var a = {};
    this.i = function (b, c) {
      return null != a[b] ? a[b] : c;
    };
    this.j = function (b, c) {
      return null != a[b] ? a[b] : c;
    };
    this.l = function (b, c) {
      return null != a[b] ? a[b] : c;
    };
    this.h = function (b, c) {
      return null != a[b] ? a[b] : c;
    };
    this.m = function () {};
  }
  function Q(a) {
    return N(Hi).i(a.h, a.defaultValue);
  }
  function R(a) {
    return N(Hi).j(a.h, a.defaultValue);
  }
  function Ii() {
    return N(Hi).l(Oh.h, Oh.defaultValue);
  }
  function Ji(a, b, c) {
    switch (c) {
      case 0:
        b.parentNode && b.parentNode.insertBefore(a, b);
        break;
      case 3:
        if ((c = b.parentNode)) {
          var d = b.nextSibling;
          if (d && d.parentNode != c)
            for (; d && 8 == d.nodeType; ) d = d.nextSibling;
          c.insertBefore(a, d);
        }
        break;
      case 1:
        b.insertBefore(a, b.firstChild);
        break;
      case 2:
        b.appendChild(a);
    }
    Ih(b) &&
      (b.setAttribute("data-init-display", b.style.display),
      (b.style.display = "block"));
  }
  function Ki(a, b, c) {
    function d(f) {
      f = Li(f);
      return null == f ? !1 : c > f;
    }
    function e(f) {
      f = Li(f);
      return null == f ? !1 : c < f;
    }
    switch (b) {
      case 0:
        return {
          init: Mi(a.previousSibling, e),
          na: function (f) {
            return Mi(f.previousSibling, e);
          },
          qa: 0,
        };
      case 2:
        return {
          init: Mi(a.lastChild, e),
          na: function (f) {
            return Mi(f.previousSibling, e);
          },
          qa: 0,
        };
      case 3:
        return {
          init: Mi(a.nextSibling, d),
          na: function (f) {
            return Mi(f.nextSibling, d);
          },
          qa: 3,
        };
      case 1:
        return {
          init: Mi(a.firstChild, d),
          na: function (f) {
            return Mi(f.nextSibling, d);
          },
          qa: 3,
        };
    }
    throw Error("Un-handled RelativePosition: " + b);
  }
  function Li(a) {
    return a.hasOwnProperty("google-ama-order-assurance")
      ? a["google-ama-order-assurance"]
      : null;
  }
  function Mi(a, b) {
    return a && b(a) ? a : null;
  }
  var Ni = { rectangle: 1, horizontal: 2, vertical: 4 };
  function Oi(a) {
    if (a == a.top) return 0;
    for (; a && a != a.top && md(a); a = a.parent) {
      if (a.sf_) return 2;
      if (a.$sf) return 3;
      if (a.inGptIF) return 4;
      if (a.inDapIF) return 5;
    }
    return 1;
  }
  function Pi(a, b) {
    do {
      var c = qd(a, b);
      if (c && "fixed" == c.position) return !1;
    } while ((a = a.parentElement));
    return !0;
  }
  function Qi(a, b) {
    for (var c = ["width", "height"], d = 0; d < c.length; d++) {
      var e = "google_ad_" + c[d];
      if (!b.hasOwnProperty(e)) {
        var f = K(a[c[d]]);
        f = null === f ? null : Math.round(f);
        null != f && (b[e] = f);
      }
    }
  }
  function Ri(a, b) {
    return !(
      (zd.test(b.google_ad_width) || yd.test(a.style.width)) &&
      (zd.test(b.google_ad_height) || yd.test(a.style.height))
    );
  }
  function Si(a, b) {
    return (a = Ti(a, b)) ? a.y : 0;
  }
  function Ti(a, b) {
    try {
      var c = b.document.documentElement.getBoundingClientRect(),
        d = a.getBoundingClientRect();
      return { x: d.left - c.left, y: d.top - c.top };
    } catch (e) {
      return null;
    }
  }
  function Ui(a) {
    var b = 0,
      c;
    for (c in Ni) -1 != a.indexOf(c) && (b |= Ni[c]);
    return b;
  }
  function Vi(a, b, c, d, e) {
    if (a !== a.top) return nd(a) ? 3 : 16;
    if (!(488 > lh(a))) return 4;
    if (!(a.innerHeight >= a.innerWidth)) return 5;
    var f = lh(a);
    if (!f || (f - c) / f > d) a = 6;
    else {
      if ((c = "true" != e.google_full_width_responsive))
        a: {
          c = lh(a);
          for (b = b.parentElement; b; b = b.parentElement)
            if (
              (d = qd(b, a)) &&
              (e = K(d.width)) &&
              !(e >= c) &&
              "visible" != d.overflow
            ) {
              c = !0;
              break a;
            }
          c = !1;
        }
      a = c ? 7 : !0;
    }
    return a;
  }
  function Wi(a, b, c, d) {
    var e = Vi(b, c, a, 0.3, d);
    !0 !== e
      ? (a = e)
      : "true" == d.google_full_width_responsive || Pi(c, b)
      ? ((b = lh(b)),
        (a = b - a),
        (a = b && 0 <= a ? !0 : b ? (-10 > a ? 11 : 0 > a ? 14 : 12) : 10))
      : (a = 9);
    return a;
  }
  function Xi(a, b, c) {
    a = a.style;
    "rtl" == b ? (a.marginRight = c) : (a.marginLeft = c);
  }
  function Yi(a, b) {
    if (3 == b.nodeType) return /\S/.test(b.data);
    if (1 == b.nodeType) {
      if (/^(script|style)$/i.test(b.nodeName)) return !1;
      try {
        var c = qd(b, a);
      } catch (d) {}
      return (
        !c ||
        ("none" != c.display &&
          !(
            "absolute" == c.position &&
            ("hidden" == c.visibility || "collapse" == c.visibility)
          ))
      );
    }
    return !1;
  }
  function Zi(a, b, c) {
    a = Ti(b, a);
    return "rtl" == c ? -a.x : a.x;
  }
  function $i(a, b) {
    var c;
    c = (c = b.parentElement) ? ((c = qd(c, a)) ? c.direction : "") : "";
    if (c) {
      b.style.border =
        b.style.borderStyle =
        b.style.outline =
        b.style.outlineStyle =
        b.style.transition =
          "none";
      b.style.borderSpacing = b.style.padding = "0";
      Xi(b, c, "0px");
      b.style.width = lh(a) + "px";
      if (0 !== Zi(a, b, c)) {
        Xi(b, c, "0px");
        var d = Zi(a, b, c);
        Xi(b, c, -1 * d + "px");
        a = Zi(a, b, c);
        0 !== a && a !== d && Xi(b, c, (d / (a - d)) * d + "px");
      }
      b.style.zIndex = 30;
    }
  }
  function aj(a, b) {
    this.P = a;
    this.j = b;
  }
  aj.prototype.height = function () {
    return this.j;
  };
  aj.prototype.h = function (a) {
    return 300 < a && 300 < this.j ? this.P : Math.min(1200, Math.round(a));
  };
  aj.prototype.i = function () {};
  function bj(a, b, c, d) {
    d =
      void 0 === d
        ? function (f) {
            return f;
          }
        : d;
    var e;
    return (
      (a.style && a.style[c] && d(a.style[c])) ||
      ((e = qd(a, b)) && e[c] && d(e[c])) ||
      null
    );
  }
  function cj(a) {
    return function (b) {
      return b.P <= a;
    };
  }
  function dj(a, b, c, d) {
    var e = a && ej(c, b),
      f = fj(b, d);
    return function (g) {
      return !(e && g.height() >= f);
    };
  }
  function gj(a) {
    return function (b) {
      return b.height() <= a;
    };
  }
  function ej(a, b) {
    return Si(a, b) < kh(b).clientHeight - 100;
  }
  function hj(a, b) {
    var c = bj(b, a, "height", K);
    if (c) return c;
    var d = b.style.height;
    b.style.height = "inherit";
    c = bj(b, a, "height", K);
    b.style.height = d;
    if (c) return c;
    c = Infinity;
    do
      (d = b.style && K(b.style.height)) && (c = Math.min(c, d)),
        (d = bj(b, a, "maxHeight", K)) && (c = Math.min(c, d));
    while ((b = b.parentElement) && "HTML" != b.tagName);
    return c;
  }
  function fj(a, b) {
    var c = 0 == Ud(a);
    return b && c ? Math.max(250, (2 * kh(a).clientHeight) / 3) : 250;
  }
  var S = {},
    ij =
      ((S.google_ad_channel = !0),
      (S.google_ad_client = !0),
      (S.google_ad_host = !0),
      (S.google_ad_host_channel = !0),
      (S.google_adtest = !0),
      (S.google_tag_for_child_directed_treatment = !0),
      (S.google_tag_for_under_age_of_consent = !0),
      (S.google_tag_partner = !0),
      (S.google_restrict_data_processing = !0),
      (S.google_page_url = !0),
      (S.google_debug_params = !0),
      (S.google_shadow_mode = !0),
      (S.google_adbreak_test = !0),
      (S.google_ad_frequency_hint = !0),
      (S.google_admob_interstitial_slot = !0),
      (S.google_admob_rewarded_slot = !0),
      (S.google_admob_ads_only = !0),
      (S.google_max_ad_content_rating = !0),
      (S.google_traffic_source = !0),
      S),
    jj = RegExp("(^| )adsbygoogle($| )");
  function kj(a, b) {
    for (var c = 0; c < b.length; c++) {
      var d = b[c],
        e = ed(d.mc);
      a[e] = d.value;
    }
  }
  var lj = ja(["https://pagead2.googlesyndication.com/pagead/js/err_rep.js"]);
  function mj() {
    var a = void 0 === a ? "jserror" : a;
    var b = void 0 === b ? 0.01 : b;
    var c = void 0 === c ? Sd(lj) : c;
    this.j = a;
    this.h = null;
    this.l = !1;
    this.A = Math.random();
    this.m = b;
    this.i = this.K;
    this.u = c;
  }
  n = mj.prototype;
  n.ya = function (a) {
    this.h = a;
  };
  n.za = function (a) {
    this.l = a;
  };
  n.bb = function (a) {
    this.i = a;
  };
  n.K = function (a, b, c, d, e) {
    c = void 0 === c ? this.m : c;
    e = void 0 === e ? this.j : e;
    if ((this.l ? this.A : Math.random()) > c) return !1;
    Yd(b) || (b = new Xd(b, { context: a, id: e }));
    if (d || this.h) (b.meta = {}), this.h && this.h(b.meta), d && d(b.meta);
    x.google_js_errors = x.google_js_errors || [];
    x.google_js_errors.push(b);
    x.error_rep_loaded || (od(x.document, this.u), (x.error_rep_loaded = !0));
    return !1;
  };
  n.ra = function (a, b, c) {
    try {
      return b();
    } catch (d) {
      if (!this.i(a, d, this.m, c, this.j)) throw d;
    }
  };
  n.Xa = function (a, b) {
    var c = this;
    return function () {
      var d = Ea.apply(0, arguments);
      return c.ra(a, function () {
        return b.apply(void 0, d);
      });
    };
  };
  n.xa = function (a, b) {
    var c = this;
    b.catch(function (d) {
      d = d ? d : "unknown rejection";
      c.K(a, d instanceof Error ? d : Error(d), void 0, c.h || void 0);
    });
  };
  function nj(a, b) {
    b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
    2048 > b.length && b.push(a);
  }
  function oj(a, b, c, d, e) {
    e = void 0 === e ? !1 : e;
    var f = d || window,
      g = "undefined" !== typeof queueMicrotask;
    return function () {
      e &&
        g &&
        queueMicrotask(function () {
          f.google_rum_task_id_counter = f.google_rum_task_id_counter || 1;
          f.google_rum_task_id_counter += 1;
        });
      var h = ne(),
        k = 3;
      try {
        var l = b.apply(this, arguments);
      } catch (m) {
        k = 13;
        if (!c) throw m;
        c(a, m);
      } finally {
        f.google_measure_js_timing &&
          h &&
          nj(
            r(Object, "assign").call(
              Object,
              {},
              {
                label: a.toString(),
                value: h,
                duration: (ne() || 0) - h,
                type: k,
              },
              e &&
                g && {
                  taskId: (f.google_rum_task_id_counter =
                    f.google_rum_task_id_counter || 1),
                }
            ),
            f
          );
      }
      return l;
    };
  }
  function pj(a, b) {
    return oj(
      a,
      b,
      function (c, d) {
        new mj().K(c, d);
      },
      void 0,
      !1
    );
  }
  function qj(a, b, c) {
    return oj(a, b, void 0, c, !0).apply();
  }
  function rj(a) {
    if (!a) return null;
    var b = B(a, 7);
    if (B(a, 1) || a.getId() || 0 < Yb(a, 4).length) {
      b = Yb(a, 4);
      var c = B(a, 3),
        d = B(a, 1),
        e = "";
      d && (e += d);
      c && (e += "#" + Hh(c));
      if (b) for (c = 0; c < b.length; c++) e += "." + Hh(b[c]);
      a = (b = e) ? new Dh(b, B(a, 2), B(a, 5), sj(B(a, 6))) : null;
    } else a = b ? new Dh(b, B(a, 2), B(a, 5), sj(B(a, 6))) : null;
    return a;
  }
  var tj = { 1: 1, 2: 2, 3: 3, 0: 0 };
  function sj(a) {
    return null == a ? a : tj[a];
  }
  var uj = { 1: 0, 2: 1, 3: 2, 4: 3 };
  function vj(a) {
    return (a.google_ama_state = a.google_ama_state || {});
  }
  function wj(a) {
    a = vj(a);
    return (a.optimization = a.optimization || {});
  }
  function xj(a) {
    J.call(this, a);
  }
  w(xj, J);
  xj.prototype.getName = function () {
    return B(this, 4);
  };
  function yj(a) {
    J.call(this, a);
  }
  w(yj, J);
  function zj(a) {
    J.call(this, a);
  }
  w(zj, J);
  function Aj(a) {
    J.call(this, a);
  }
  w(Aj, J);
  var Bj = [1, 2, 3];
  function Cj(a) {
    J.call(this, a, -1, Dj);
  }
  w(Cj, J);
  function Ej(a) {
    J.call(this, a);
  }
  w(Ej, J);
  function Fj(a) {
    J.call(this, a);
  }
  w(Fj, J);
  var Dj = [1, 4],
    Gj = [1, 2];
  function Hj(a) {
    J.call(this, a, -1, Ij);
  }
  w(Hj, J);
  function Jj(a) {
    J.call(this, a);
  }
  w(Jj, J);
  function Kj(a) {
    J.call(this, a, -1, Lj);
  }
  w(Kj, J);
  function Mj(a) {
    J.call(this, a);
  }
  w(Mj, J);
  function Nj(a) {
    J.call(this, a);
  }
  w(Nj, J);
  function Oj(a) {
    J.call(this, a);
  }
  w(Oj, J);
  function Pj(a) {
    J.call(this, a);
  }
  w(Pj, J);
  var Ij = [1, 2, 5, 7],
    Lj = [2, 5, 6, 11];
  function Qj(a) {
    J.call(this, a);
  }
  w(Qj, J);
  function Rj(a) {
    switch (B(a, 8)) {
      case 1:
      case 2:
        if (null == a) var b = null;
        else
          (b = E(a, O, 1)),
            null == b
              ? (b = null)
              : ((a = B(a, 2)),
                (b = null == a ? null : new Sg({ Na: [b], Za: a })));
        return null != b
          ? Lg(b)
          : Ng(Error("Missing dimension when creating placement id"));
      case 3:
        return Ng(Error("Missing dimension when creating placement id"));
      default:
        return Ng(Error("Invalid type: " + B(a, 8)));
    }
  }
  function Sj(a, b) {
    function c() {
      d.push({ anchor: e.anchor, position: e.position });
      return e.anchor == b.anchor && e.position == b.position;
    }
    for (var d = [], e = a; e; ) {
      switch (e.position) {
        case 1:
          if (c()) return d;
          e.position = 2;
        case 2:
          if (c()) return d;
          if (e.anchor.firstChild) {
            e = { anchor: e.anchor.firstChild, position: 1 };
            continue;
          } else e.position = 3;
        case 3:
          if (c()) return d;
          e.position = 4;
        case 4:
          if (c()) return d;
      }
      for (
        ;
        e &&
        !e.anchor.nextSibling &&
        e.anchor.parentNode != e.anchor.ownerDocument.body;

      ) {
        e = { anchor: e.anchor.parentNode, position: 3 };
        if (c()) return d;
        e.position = 4;
        if (c()) return d;
      }
      e && e.anchor.nextSibling
        ? (e = { anchor: e.anchor.nextSibling, position: 1 })
        : (e = null);
    }
    return d;
  }
  function Tj(a, b) {
    this.i = a;
    this.h = b;
  }
  function Uj(a, b) {
    var c = new Qg(),
      d = new Pg();
    b.forEach(function (e) {
      if (mc(e, yj, 1, Bj)) {
        e = mc(e, yj, 1, Bj);
        if (
          E(e, zh, 1) &&
          E(E(e, zh, 1), O, 1) &&
          E(e, zh, 2) &&
          E(E(e, zh, 2), O, 1)
        ) {
          var f = Vj(a, E(E(e, zh, 1), O, 1)),
            g = Vj(a, E(E(e, zh, 2), O, 1));
          if (f && g)
            for (
              f = v(
                Sj(
                  { anchor: f, position: B(E(e, zh, 1), 2) },
                  { anchor: g, position: B(E(e, zh, 2), 2) }
                )
              ),
                g = f.next();
              !g.done;
              g = f.next()
            )
              (g = g.value), c.set(La(g.anchor), g.position);
        }
        E(e, zh, 3) &&
          E(E(e, zh, 3), O, 1) &&
          (f = Vj(a, E(E(e, zh, 3), O, 1))) &&
          c.set(La(f), B(E(e, zh, 3), 2));
      } else mc(e, zj, 2, Bj) ? Wj(a, mc(e, zj, 2, Bj), c) : mc(e, Aj, 3, Bj) && Xj(a, mc(e, Aj, 3, Bj), d);
    });
    return new Tj(c, d);
  }
  function Wj(a, b, c) {
    E(b, zh, 2)
      ? ((b = E(b, zh, 2)), (a = Vj(a, E(b, O, 1))) && c.set(La(a), B(b, 2)))
      : E(b, O, 1) &&
        (a = Yj(a, E(b, O, 1))) &&
        a.forEach(function (d) {
          d = La(d);
          c.set(d, 1);
          c.set(d, 4);
          c.set(d, 2);
          c.set(d, 3);
        });
  }
  function Xj(a, b, c) {
    E(b, O, 1) &&
      (a = Yj(a, E(b, O, 1))) &&
      a.forEach(function (d) {
        c.add(La(d));
      });
  }
  function Vj(a, b) {
    return (a = Yj(a, b)) && 0 < a.length ? a[0] : null;
  }
  function Yj(a, b) {
    return (b = rj(b)) ? b.query(a) : null;
  }
  function Zj() {
    this.h = new q.Set();
  }
  function ak(a) {
    a = bk(a);
    return a.has("all") || a.has("after");
  }
  function ck(a) {
    a = bk(a);
    return a.has("all") || a.has("before");
  }
  function dk(a, b, c) {
    switch (c) {
      case 2:
      case 3:
        break;
      case 1:
      case 4:
        b = b.parentElement;
        break;
      default:
        throw Error("Unknown RelativePosition: " + c);
    }
    for (c = []; b; ) {
      if (ek(b)) return !0;
      if (a.h.has(b)) break;
      c.push(b);
      b = b.parentElement;
    }
    c.forEach(function (d) {
      return a.h.add(d);
    });
    return !1;
  }
  function ek(a) {
    var b = bk(a);
    return (
      a &&
      ("AUTO-ADS-EXCLUSION-AREA" === a.tagName ||
        b.has("inside") ||
        b.has("all"))
    );
  }
  function bk(a) {
    return (a = a && a.getAttribute("data-no-auto-ads"))
      ? new q.Set(a.split("|"))
      : new q.Set();
  }
  function fk(a, b) {
    if (!a) return !1;
    a = qd(a, b);
    if (!a) return !1;
    a = a.cssFloat || a.styleFloat;
    return "left" == a || "right" == a;
  }
  function gk(a) {
    for (a = a.previousSibling; a && 1 != a.nodeType; ) a = a.previousSibling;
    return a ? a : null;
  }
  function hk(a) {
    return !!a.nextSibling || (!!a.parentNode && hk(a.parentNode));
  }
  function ik(a, b) {
    if (!a) return !1;
    a = a.hash;
    if (!a || !a.indexOf) return !1;
    if (-1 != a.indexOf(b)) return !0;
    b = jk(b);
    return "go" != b && -1 != a.indexOf(b) ? !0 : !1;
  }
  function jk(a) {
    var b = "";
    vd(a.split("_"), function (c) {
      b += c.substr(0, 2);
    });
    return b;
  }
  function kk(a) {
    a = void 0 === a ? window : a;
    a = a.googletag;
    return (null == a ? 0 : a.apiReady) ? a : void 0;
  }
  function lk(a) {
    var b = kk(a);
    return b
      ? eb(
          fb(b.pubads().getSlots(), function (c) {
            return a.document.getElementById(c.getSlotElementId());
          }),
          function (c) {
            return null != c;
          }
        )
      : null;
  }
  function mk(a, b) {
    return kb(a.document.querySelectorAll(b));
  }
  function nk(a) {
    var b = [];
    a = v(a);
    for (var c = a.next(); !c.done; c = a.next()) {
      c = c.value;
      for (var d = !0, e = 0; e < b.length; e++) {
        var f = b[e];
        if (f.contains(c)) {
          d = !1;
          break;
        }
        if (c.contains(f)) {
          d = !1;
          b[e] = c;
          break;
        }
      }
      d && b.push(c);
    }
    return b;
  }
  function ok(a, b, c, d, e) {
    this.h = a;
    this.C = b;
    this.i = c;
    this.m = e || null;
    this.A = (this.B = d) ? Uj(a.document, G(d, xj, 5)) : Uj(a.document, []);
    this.u = new Zj();
    this.j = 0;
    this.l = !1;
  }
  function pk(a, b) {
    if (a.l) return !0;
    a.l = !0;
    var c = G(a.i, Bh, 1);
    a.j = 0;
    var d = qk(a.B);
    if (ik(a.h.location, "google_audio_sense")) {
      var e = new qh();
      e = C(e, 1, 1);
      var f = new rh();
      f = C(f, 2, !0);
      e = ec(e, 2, f);
      f = new sh();
      var g = new uh();
      var h = C(g, 1, 1);
      Nb(f);
      g = dc(f, uh, 1, !1, !1);
      h = null != h ? h : new uh();
      var k = Vb(f, 1, 2, void 0, !1);
      g.push(h);
      k.push(h.v);
      Eb(h.v) && Cb(k, 8);
      g = new vh();
      g = C(g, 1, !0);
      f = ec(f, 2, g);
      e = ec(e, 3, f);
    } else e = E(a.i, qh, 27);
    if ((f = e)) {
      var l;
      e = (null == (l = E(a.i, wh, 6)) ? void 0 : G(l, yh, 1)) || [];
      l = a.h;
      var m;
      if (
        1 == I(f, 1) &&
        null != (m = E(f, rh, 2)) &&
        H(m, 2) &&
        0 != e.length
      ) {
        m = [];
        e = v(e);
        for (f = e.next(); !f.done; f = e.next())
          if ((f = rj(E(f.value, O, 1) || null)))
            (f = f.query(l.document)), 0 < f.length && m.push(f[0]);
        m = m.filter(mh).filter(nh(m)).filter(oh(l));
        m.sort(ph);
        if ((m = m[0] || null))
          (e = l.document.createElement("div")),
            (e.id = "google-auto-placed-read-aloud-player-reserved"),
            Dd(e, { width: "100%", height: "65px" }),
            m.insertBefore(e, m.firstChild),
            (vj(l).audioSenseSpaceReserved = !0);
      }
    }
    m = a.h;
    var p;
    try {
      var t = (p = m.localStorage.getItem("google_ama_settings"))
        ? zc(Qj, p)
        : null;
    } catch (Y) {
      t = null;
    }
    p = null !== t && H(t, 2, !1);
    t = vj(m);
    p && ((t.eatf = !0), Pd(7, [!0, 0, !1]));
    b: {
      e = { rb: !1, sb: !1 };
      f = mk(m, ".google-auto-placed");
      g = mk(
        m,
        "ins.adsbygoogle[data-anchor-shown],ins.adsbygoogle[data-anchor-status]"
      );
      h = mk(m, "ins.adsbygoogle[data-ad-format=autorelaxed]");
      k = (lk(m) || mk(m, "div[id^=div-gpt-ad]")).concat(
        mk(m, "iframe[id^=google_ads_iframe]")
      );
      var y = mk(
          m,
          "div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]"
        ),
        D = mk(m, "ins.adsbygoogle-ablated-ad-slot"),
        z = mk(m, "div.googlepublisherpluginad"),
        F = mk(m, "html > ins.adsbygoogle");
      l = [].concat(
        mk(m, "iframe[id^=aswift_],iframe[id^=google_ads_frame]"),
        mk(m, "body ins.adsbygoogle")
      );
      p = [];
      e = v([
        [e.hc, f],
        [e.rb, g],
        [e.kc, h],
        [e.ic, k],
        [e.lc, y],
        [e.ec, D],
        [e.jc, z],
        [e.sb, F],
      ]);
      for (f = e.next(); !f.done; f = e.next())
        (g = v(f.value)),
          (f = g.next().value),
          (g = g.next().value),
          !1 === f ? (p = p.concat(g)) : (l = l.concat(g));
      l = nk(l);
      e = nk(p);
      p = l.slice(0);
      l = v(e);
      for (e = l.next(); !e.done; e = l.next())
        for (e = e.value, f = 0; f < p.length; f++)
          (e.contains(p[f]) || p[f].contains(e)) && p.splice(f, 1);
      m = kh(m).clientHeight;
      for (l = 0; l < p.length; l++)
        if (!(p[l].getBoundingClientRect().top > m)) {
          p = !0;
          break b;
        }
      p = !1;
    }
    t = p ? (t.eatfAbg = !0) : !1;
    if (t) return !0;
    t = new Pg([2]);
    for (p = 0; p < c.length; p++) {
      m = a;
      e = c[p];
      l = p;
      f = b;
      if (
        E(e, Wg, 4) &&
        t.contains(B(E(e, Wg, 4), 1)) &&
        1 === B(e, 8) &&
        rk(e, d)
      ) {
        m.j++;
        if ((f = sk(m, e, f, d)))
          (g = vj(m.h)),
            g.numAutoAdsPlaced || (g.numAutoAdsPlaced = 0),
            E(e, O, 1) &&
              null != B(E(e, O, 1), 5) &&
              (g.numPostPlacementsPlaced
                ? g.numPostPlacementsPlaced++
                : (g.numPostPlacementsPlaced = 1)),
            null == g.placed && (g.placed = []),
            g.numAutoAdsPlaced++,
            g.placed.push({ index: l, element: f.la }),
            Pd(7, [!1, m.j, !0]);
        m = f;
      } else m = null;
      if (m) return !0;
    }
    Pd(7, [!1, a.j, !1]);
    return !1;
  }
  function sk(a, b, c, d) {
    if (!rk(b, d) || 1 != B(b, 8)) return null;
    d = E(b, O, 1);
    if (!d) return null;
    d = rj(d);
    if (!d) return null;
    d = d.query(a.h.document);
    if (0 == d.length) return null;
    d = d[0];
    var e = uj[B(b, 2)];
    e = void 0 === e ? null : e;
    var f;
    if (!(f = null == e)) {
      a: {
        f = a.h;
        switch (e) {
          case 0:
            f = fk(gk(d), f);
            break a;
          case 3:
            f = fk(d, f);
            break a;
          case 2:
            var g = d.lastChild;
            f = fk(g ? (1 == g.nodeType ? g : gk(g)) : null, f);
            break a;
        }
        f = !1;
      }
      if ((c = !f && !(!c && 2 == e && !hk(d))))
        (c = 1 == e || 2 == e ? d : d.parentNode),
          (c = !(c && !Ih(c) && 0 >= c.offsetWidth));
      f = !c;
    }
    if (!(c = f)) {
      c = a.A;
      f = B(b, 2);
      g = La(d);
      g = c.i.h.get(g);
      if (!(g = g ? g.contains(f) : !1))
        a: {
          if (c.h.contains(La(d)))
            switch (f) {
              case 2:
              case 3:
                g = !0;
                break a;
              default:
                g = !1;
                break a;
            }
          for (f = d.parentElement; f; ) {
            if (c.h.contains(La(f))) {
              g = !0;
              break a;
            }
            f = f.parentElement;
          }
          g = !1;
        }
      c = g;
    }
    if (!c) {
      c = a.u;
      f = B(b, 2);
      a: switch (f) {
        case 1:
          g = ak(d.previousElementSibling) || ck(d);
          break a;
        case 4:
          g = ak(d) || ck(d.nextElementSibling);
          break a;
        case 2:
          g = ck(d.firstElementChild);
          break a;
        case 3:
          g = ak(d.lastElementChild);
          break a;
        default:
          throw Error("Unknown RelativePosition: " + f);
      }
      c = g || dk(c, d, f);
    }
    if (c) return null;
    c = E(b, Ah, 3);
    f = {};
    c && ((f.eb = B(c, 1)), (f.Qa = B(c, 2)), (f.lb = !!Xb(c, 3)));
    c = E(b, Wg, 4) && B(E(b, Wg, 4), 2) ? B(E(b, Wg, 4), 2) : null;
    c = ch(c);
    g = null != B(b, 12) ? B(b, 12) : null;
    g = null == g ? null : new Xg(null, { google_ml_rank: g });
    b = tk(a, b);
    b = bh(a.m, c, g, b);
    c = a.h;
    a = a.C;
    var h = c.document,
      k = f.lb || !1;
    g = new gd(h).createElement("DIV");
    var l = g.style;
    l.width = "100%";
    l.height = "auto";
    l.clear = k ? "both" : "none";
    k = g.style;
    k.textAlign = "center";
    f.Cb && kj(k, f.Cb);
    h = new gd(h).createElement("INS");
    k = h.style;
    k.display = "block";
    k.margin = "auto";
    k.backgroundColor = "transparent";
    f.eb && (k.marginTop = f.eb);
    f.Qa && (k.marginBottom = f.Qa);
    f.jb && kj(k, f.jb);
    g.appendChild(h);
    f = { ua: g, la: h };
    f.la.setAttribute("data-ad-format", "auto");
    g = [];
    if ((h = b && b.Ra)) f.ua.className = h.join(" ");
    h = f.la;
    h.className = "adsbygoogle";
    h.setAttribute("data-ad-client", a);
    g.length && h.setAttribute("data-ad-channel", g.join("+"));
    a: {
      try {
        var m = f.ua;
        var p = void 0 === p ? 0 : p;
        if (Q(Rh)) {
          p = void 0 === p ? 0 : p;
          var t = Ki(d, e, p);
          if (t.init) {
            var y = t.init;
            for (d = y; (d = t.na(d)); ) y = d;
            var D = { anchor: y, position: t.qa };
          } else D = { anchor: d, position: e };
          m["google-ama-order-assurance"] = p;
          Ji(m, D.anchor, D.position);
        } else Ji(m, d, e);
        b: {
          var z = f.la;
          z.dataset.adsbygoogleStatus = "reserved";
          z.className += " adsbygoogle-noablate";
          m = { element: z };
          var F = b && b.Ya;
          if (z.hasAttribute("data-pub-vars")) {
            try {
              F = JSON.parse(z.getAttribute("data-pub-vars"));
            } catch (Y) {
              break b;
            }
            z.removeAttribute("data-pub-vars");
          }
          F && (m.params = F);
          (c.adsbygoogle = c.adsbygoogle || []).push(m);
        }
      } catch (Y) {
        (z = f.ua) &&
          z.parentNode &&
          ((F = z.parentNode),
          F.removeChild(z),
          Ih(F) &&
            (F.style.display = F.getAttribute("data-init-display") || "none"));
        z = !1;
        break a;
      }
      z = !0;
    }
    return z ? f : null;
  }
  function tk(a, b) {
    return Jg(
      Mg(Rj(b).map(dh), function (c) {
        vj(a.h).exception = c;
      })
    );
  }
  function qk(a) {
    var b = {};
    a &&
      Wb(a, 6, !1).forEach(function (c) {
        b[c] = !0;
      });
    return b;
  }
  function rk(a, b) {
    return a && void 0 !== Sb(a, Wg, 4, !1) && b[B(E(a, Wg, 4), 2)] ? !1 : !0;
  }
  function uk(a) {
    J.call(this, a);
  }
  w(uk, J);
  function T(a) {
    a = void 0 === a ? "" : a;
    var b = Error.call(this);
    this.message = b.message;
    "stack" in b && (this.stack = b.stack);
    this.name = "TagError";
    this.message = a ? "adsbygoogle.push() error: " + a : "";
    Error.captureStackTrace
      ? Error.captureStackTrace(this, T)
      : (this.stack = Error().stack || "");
  }
  w(T, Error);
  var vk,
    wk,
    xk = new ue(x);
  function yk(a) {
    null != a && (x.google_measure_js_timing = a);
    x.google_measure_js_timing || ve(xk);
  }
  (function (a) {
    vk = a || new he();
    "number" !== typeof x.google_srt && (x.google_srt = Math.random());
    ie(vk, x.google_srt);
    wk = new xe(vk, xk);
    wk.za(!0);
    "complete" == x.document.readyState
      ? yk()
      : xk.h &&
        Nc(x, "load", function () {
          yk();
        });
  })();
  function zk(a, b, c) {
    return wk.ra(a, b, c);
  }
  function Ak(a, b) {
    return wk.Xa(a, b);
  }
  function Bk(a, b, c) {
    var d = N(tg).i();
    !b.eid && d.length && (b.eid = d.toString());
    je(vk, a, b, !0, c);
  }
  function Ck(a, b) {
    wk.xa(a, b);
  }
  function Dk(a, b, c, d) {
    var e;
    Yd(b) ? (e = b.msg || ye(b.error)) : (e = ye(b));
    return 0 == e.indexOf("TagError")
      ? ((c = b instanceof Xd ? b.error : b),
        c.pbr || ((c.pbr = !0), wk.K(a, b, 0.1, d, "puberror")),
        !1)
      : wk.K(a, b, c, d);
  }
  function Ek(a) {
    try {
      var b = a.localStorage.getItem("google_auto_fc_cmp_setting") || null;
    } catch (d) {
      b = null;
    }
    var c = b;
    return c
      ? Og(function () {
          return zc(uk, c);
        })
      : Lg(null);
  }
  function Fk() {
    this.S = {};
  }
  function Gk() {
    if (Hk) return Hk;
    var a = Rd() || window,
      b = a.google_persistent_state_async;
    return null != b &&
      "object" == typeof b &&
      null != b.S &&
      "object" == typeof b.S
      ? (Hk = b)
      : (a.google_persistent_state_async = Hk = new Fk());
  }
  function Ik(a) {
    return Jk[a] || "google_ps_" + a;
  }
  function Kk(a, b, c) {
    b = Ik(b);
    a = a.S;
    var d = a[b];
    return void 0 === d ? ((a[b] = c()), a[b]) : d;
  }
  function Lk(a, b, c) {
    return Kk(a, b, function () {
      return c;
    });
  }
  function Mk(a) {
    return !!Lk(Gk(), 30, a);
  }
  var Hk = null,
    Nk = {},
    Jk =
      ((Nk[8] = "google_prev_ad_formats_by_region"),
      (Nk[9] = "google_prev_ad_slotnames_by_region"),
      Nk);
  function Ok(a) {
    this.h = a || { cookie: "" };
  }
  Ok.prototype.set = function (a, b, c) {
    var d = !1;
    if ("object" === typeof c) {
      var e = c.nc;
      d = c.oc || !1;
      var f = c.domain || void 0;
      var g = c.path || void 0;
      var h = c.zb;
    }
    if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
    if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
    void 0 === h && (h = -1);
    this.h.cookie =
      a +
      "=" +
      b +
      (f ? ";domain=" + f : "") +
      (g ? ";path=" + g : "") +
      (0 > h
        ? ""
        : 0 == h
        ? ";expires=" + new Date(1970, 1, 1).toUTCString()
        : ";expires=" + new Date(Date.now() + 1e3 * h).toUTCString()) +
      (d ? ";secure" : "") +
      (null != e ? ";samesite=" + e : "");
  };
  Ok.prototype.get = function (a, b) {
    for (
      var c = a + "=", d = (this.h.cookie || "").split(";"), e = 0, f;
      e < d.length;
      e++
    ) {
      f = Va(d[e]);
      if (0 == f.lastIndexOf(c, 0)) return f.slice(c.length);
      if (f == a) return "";
    }
    return b;
  };
  Ok.prototype.isEmpty = function () {
    return !this.h.cookie;
  };
  Ok.prototype.clear = function () {
    for (
      var a = (this.h.cookie || "").split(";"), b = [], c = [], d, e, f = 0;
      f < a.length;
      f++
    )
      (e = Va(a[f])),
        (d = e.indexOf("=")),
        -1 == d
          ? (b.push(""), c.push(e))
          : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
    for (a = b.length - 1; 0 <= a; a--)
      (c = b[a]),
        this.get(c),
        this.set(c, "", { zb: 0, path: void 0, domain: void 0 });
  };
  function Pk(a) {
    J.call(this, a);
  }
  w(Pk, J);
  function Qk(a) {
    var b = new Pk();
    return C(b, 5, a);
  }
  function Rk(a) {
    void 0 !== a.addtlConsent &&
      "string" !== typeof a.addtlConsent &&
      (a.addtlConsent = void 0);
    void 0 !== a.gdprApplies &&
      "boolean" !== typeof a.gdprApplies &&
      (a.gdprApplies = void 0);
    return (void 0 !== a.tcString && "string" !== typeof a.tcString) ||
      (void 0 !== a.listenerId && "number" !== typeof a.listenerId)
      ? 2
      : a.cmpStatus && "error" !== a.cmpStatus
      ? 0
      : 3;
  }
  function Sk(a, b) {
    b = void 0 === b ? {} : b;
    M.call(this);
    this.l = a;
    this.i = null;
    this.u = {};
    this.I = 0;
    var c;
    this.C = null != (c = b.cb) ? c : 500;
    var d;
    this.B = null != (d = b.dc) ? d : !1;
    this.m = null;
  }
  w(Sk, M);
  Sk.prototype.h = function () {
    this.u = {};
    this.m && (Oc(this.l, "message", this.m), delete this.m);
    delete this.u;
    delete this.l;
    delete this.i;
    M.prototype.h.call(this);
  };
  function Tk(a) {
    return "function" === typeof a.l.__tcfapi || null != Uk(a);
  }
  Sk.prototype.addEventListener = function (a) {
    function b(g, h) {
      clearTimeout(f);
      g
        ? ((d = g),
          (d.internalErrorState = Rk(d)),
          (d.internalBlockOnErrors = c.B),
          (h && 0 === d.internalErrorState) ||
            ((d.tcString = "tcunavailable"), h || (d.internalErrorState = 3)))
        : ((d.tcString = "tcunavailable"), (d.internalErrorState = 3));
      a(d);
    }
    var c = this,
      d = { internalBlockOnErrors: this.B },
      e = Mc(function () {
        return a(d);
      }),
      f = 0;
    -1 !== this.C &&
      (f = setTimeout(function () {
        d.tcString = "tcunavailable";
        d.internalErrorState = 1;
        e();
      }, this.C));
    try {
      Vk(this, "addEventListener", b);
    } catch (g) {
      (d.tcString = "tcunavailable"),
        (d.internalErrorState = 3),
        f && (clearTimeout(f), (f = 0)),
        e();
    }
  };
  Sk.prototype.removeEventListener = function (a) {
    a && a.listenerId && Vk(this, "removeEventListener", null, a.listenerId);
  };
  function Vk(a, b, c, d) {
    c || (c = function () {});
    if ("function" === typeof a.l.__tcfapi) (a = a.l.__tcfapi), a(b, 2, c, d);
    else if (Uk(a)) {
      Wk(a);
      var e = ++a.I;
      a.u[e] = c;
      a.i &&
        ((c = {}),
        a.i.postMessage(
          ((c.__tcfapiCall = {
            command: b,
            version: 2,
            callId: e,
            parameter: d,
          }),
          c),
          "*"
        ));
    } else c({}, !1);
  }
  function Uk(a) {
    if (a.i) return a.i;
    a.i = Bd(a.l, "__tcfapiLocator");
    return a.i;
  }
  function Wk(a) {
    a.m ||
      ((a.m = function (b) {
        try {
          var c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data)
            .__tcfapiReturn;
          a.u[c.callId](c.returnValue, c.success);
        } catch (d) {}
      }),
      Nc(a.l, "message", a.m));
  }
  function Xk(a) {
    if (!1 === a.gdprApplies) return !0;
    void 0 === a.internalErrorState && (a.internalErrorState = Rk(a));
    return "error" === a.cmpStatus || 0 !== a.internalErrorState
      ? a.internalBlockOnErrors
        ? (Ld({ e: String(a.internalErrorState) }, "tcfe"), !1)
        : !0
      : "loaded" !== a.cmpStatus ||
        ("tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus)
      ? !1
      : !0;
  }
  function Yk(a) {
    var b = a.s,
      c = a.cb,
      d = a.callback;
    a = Zk({
      s: b,
      ga: a.ga,
      oa: void 0 === a.oa ? !1 : a.oa,
      pa: void 0 === a.pa ? !1 : a.pa,
    });
    null != a.h || "tcunav" != a.i.message
      ? d(a)
      : $k(b, c)
          .then(function (e) {
            return e.map(al);
          })
          .then(function (e) {
            return e.map(function (f) {
              return bl(b, f);
            });
          })
          .then(d);
  }
  function Zk(a) {
    var b = a.s,
      c = a.ga,
      d = void 0 === a.oa ? !1 : a.oa;
    if ((a = (void 0 === a.pa ? 0 : a.pa) || !Tk(new Sk(b)))) {
      if (!d) {
        if (!(c = !c))
          if (((c = Ek(b)), null == c.h))
            wk.K(806, c.i, void 0, void 0), (c = !1);
          else if ((c = c.h.value) && null != B(c, 1))
            b: switch (((c = B(c, 1)), c)) {
              case 1:
                c = !0;
                break b;
              default:
                throw Error("Unhandled AutoGdprFeatureStatus: " + c);
            }
          else c = !1;
        d = c;
      }
      a = d;
    }
    if (a) return bl(b, Qk(!0));
    c = Gk();
    return (c = Lk(c, 24)) ? bl(b, al(c)) : Ng(Error("tcunav"));
  }
  function $k(a, b) {
    return q.Promise.race([cl(), dl(a, b)]);
  }
  function cl() {
    return new q.Promise(function (a) {
      var b = Gk();
      a = { resolve: a };
      var c = Lk(b, 25, []);
      c.push(a);
      b.S[Ik(25)] = c;
    }).then(el);
  }
  function dl(a, b) {
    return new q.Promise(function (c) {
      a.setTimeout(c, b, Ng(Error("tcto")));
    });
  }
  function el(a) {
    return a ? Lg(a) : Ng(Error("tcnull"));
  }
  function al(a) {
    var b = void 0 === b ? !1 : b;
    if (Xk(a))
      if (
        !1 === a.gdprApplies ||
        "tcunavailable" === a.tcString ||
        (void 0 === a.gdprApplies && !b) ||
        "string" !== typeof a.tcString ||
        !a.tcString.length
      )
        a = !0;
      else {
        var c = void 0 === c ? "755" : c;
        b: {
          if (
            a.publisher &&
            a.publisher.restrictions &&
            ((b = a.publisher.restrictions["1"]), void 0 !== b)
          ) {
            b = b[void 0 === c ? "755" : c];
            break b;
          }
          b = void 0;
        }
        0 === b
          ? (a = !1)
          : a.purpose && a.vendor
          ? ((b = a.vendor.consents),
            (c = !(!b || !b[void 0 === c ? "755" : c])) &&
            a.purposeOneTreatment &&
            "CH" === a.publisherCC
              ? (a = !0)
              : (c && ((a = a.purpose.consents), (c = !(!a || !a["1"]))),
                (a = c)))
          : (a = !0);
      }
    else a = !1;
    return Qk(a);
  }
  function bl(a, b) {
    a: {
      a = void 0 === a ? window : a;
      if (Xb(b, 5))
        try {
          var c = a.localStorage;
          break a;
        } catch (d) {}
      c = null;
    }
    return (b = c) ? Lg(b) : Ng(Error("unav"));
  }
  function fl(a) {
    J.call(this, a);
  }
  w(fl, J);
  function gl(a) {
    J.call(this, a, -1, hl);
  }
  w(gl, J);
  var hl = [1, 2, 3];
  function il(a) {
    this.exception = a;
  }
  function jl(a, b, c) {
    this.j = a;
    this.h = b;
    this.i = c;
  }
  jl.prototype.start = function () {
    this.l();
  };
  jl.prototype.l = function () {
    try {
      switch (this.j.document.readyState) {
        case "complete":
        case "interactive":
          pk(this.h, !0);
          kl(this);
          break;
        default:
          pk(this.h, !1) ? kl(this) : this.j.setTimeout(Qa(this.l, this), 100);
      }
    } catch (a) {
      kl(this, a);
    }
  };
  function kl(a, b) {
    try {
      var c = a.i,
        d = c.resolve,
        e = a.h;
      vj(e.h);
      G(e.i, Bh, 1);
      d.call(c, new il(b));
    } catch (f) {
      a.i.reject(f);
    }
  }
  var ll = "a".charCodeAt(),
    ml = Rc(yg),
    nl = Rc(zg);
  function ol(a) {
    if (/[^01]/.test(a)) throw Error("Input bitstring " + a + " is malformed!");
    this.i = a;
    this.h = 0;
  }
  function pl(a) {
    var b = ql(a, 16);
    return !0 === !!ql(a, 1)
      ? ((a = rl(a)),
        a.forEach(function (c) {
          if (c > b) throw Error("ID " + c + " is past MaxVendorId " + b + "!");
        }),
        a)
      : sl(a, b);
  }
  function rl(a) {
    for (var b = ql(a, 12), c = []; b--; ) {
      var d = !0 === !!ql(a, 1),
        e = ql(a, 16);
      if (d) for (d = ql(a, 16); e <= d; e++) c.push(e);
      else c.push(e);
    }
    c.sort(function (f, g) {
      return f - g;
    });
    return c;
  }
  function sl(a, b, c) {
    for (var d = [], e = 0; e < b; e++)
      if (ql(a, 1)) {
        var f = e + 1;
        if (c && -1 === c.indexOf(f))
          throw Error("ID: " + f + " is outside of allowed values!");
        d.push(f);
      }
    return d;
  }
  function ql(a, b) {
    if (a.h + b > a.i.length)
      throw Error("Requested length " + b + " is past end of string.");
    var c = a.i.substring(a.h, a.h + b);
    a.h += b;
    return parseInt(c, 2);
  }
  function tl(a, b) {
    try {
      var c = rb(a.split(".")[0])
          .map(function (e) {
            return ((aa = e.toString(2)), r(aa, "padStart")).call(aa, 8, "0");
          })
          .join(""),
        d = new ol(c);
      c = {};
      c.tcString = a;
      c.gdprApplies = !0;
      d.h += 78;
      c.cmpId = ql(d, 12);
      c.cmpVersion = ql(d, 12);
      d.h += 30;
      c.tcfPolicyVersion = ql(d, 6);
      c.isServiceSpecific = !!ql(d, 1);
      c.useNonStandardStacks = !!ql(d, 1);
      c.specialFeatureOptins = ul(sl(d, 12, nl), nl);
      c.purpose = {
        consents: ul(sl(d, 24, ml), ml),
        legitimateInterests: ul(sl(d, 24, ml), ml),
      };
      c.purposeOneTreatment = !!ql(d, 1);
      c.publisherCC =
        String.fromCharCode(ll + ql(d, 6)) + String.fromCharCode(ll + ql(d, 6));
      c.vendor = { consents: ul(pl(d), b), legitimateInterests: ul(pl(d), b) };
      return c;
    } catch (e) {
      return null;
    }
  }
  function ul(a, b) {
    var c = {};
    if (Array.isArray(b) && 0 !== b.length) {
      b = v(b);
      for (var d = b.next(); !d.done; d = b.next())
        (d = d.value), (c[d] = -1 !== a.indexOf(d));
    } else for (a = v(a), d = a.next(); !d.done; d = a.next()) c[d.value] = !0;
    delete c[0];
    return c;
  }
  function vl() {
    this.h = {};
  }
  function wl(a) {
    J.call(this, a);
  }
  w(wl, J);
  function xl(a) {
    J.call(this, a);
  }
  w(xl, J);
  function yl(a) {
    J.call(this, a);
  }
  w(yl, J);
  var zl = [11, 8, 12, 13, 15, 17, 19, 18, 20, 21, 22, 25, 26];
  function Al() {}
  function Bl(a) {
    J.call(this, a, -1, Cl);
  }
  w(Bl, J);
  function Dl(a) {
    J.call(this, a);
  }
  w(Dl, J);
  function El(a) {
    J.call(this, a);
  }
  w(El, J);
  var Cl = [7];
  var Fl = new (function (a, b) {
    this.key = a;
    this.defaultValue = void 0 === b ? !1 : b;
    this.valueType = "boolean";
  })("45369554");
  function Gl() {
    this.h = {};
    var a = x.__fcexpdef || "";
    try {
      var b = JSON.parse(a)[0];
      a = "";
      for (var c = 0; c < b.length; c++)
        a += String.fromCharCode(
          b.charCodeAt(c) ^
            "\u0003\u0007\u0003\u0007\b\u0004\u0004\u0006\u0005\u0003".charCodeAt(
              c % 10
            )
        );
      this.h = JSON.parse(a);
    } catch (d) {}
  }
  var Hl;
  w(Gl, vl);
  function Il(a) {
    return (a = Jl(a)) ? E(a, Dl, 4) : null;
  }
  function Jl(a) {
    if ((a = new Ok(a).get("FCCDCF", "")))
      if (r(a, "startsWith").call(a, "%"))
        try {
          var b = decodeURIComponent(a);
        } catch (c) {
          Kl(1), (b = null);
        }
      else b = a;
    else b = null;
    try {
      return b ? zc(Bl, b) : null;
    } catch (c) {
      return Kl(2), null;
    }
  }
  function Kl(a) {
    new Al();
    var b = new xl();
    a = C(b, 7, a);
    b = new wl();
    a = ec(b, 1, a);
    b = new yl();
    fc(b, 22, zl, a);
    Hl || (Hl = new Gl());
    a = Hl.h[Fl.key];
    if ("proto" === Fl.valueType)
      try {
        JSON.parse(a);
      } catch (c) {}
  }
  Rc(yg).map(function (a) {
    return Number(a);
  });
  Rc(zg).map(function (a) {
    return Number(a);
  });
  function Ll(a) {
    this.h = a;
    this.i = null;
  }
  function Ml(a) {
    a.__tcfapiPostMessageReady || Nl(new Ll(a));
  }
  function Nl(a) {
    a.i = function (b) {
      var c = "string" == typeof b.data;
      try {
        var d = c ? JSON.parse(b.data) : b.data;
      } catch (f) {
        return;
      }
      var e = d.__tcfapiCall;
      !e ||
        ("ping" !== e.command &&
          "getTCData" !== e.command &&
          "addEventListener" !== e.command &&
          "removeEventListener" !== e.command) ||
        a.h.__tcfapi(
          e.command,
          e.version,
          function (f, g) {
            var h = {};
            h.__tcfapiReturn =
              "removeEventListener" === e.command
                ? { success: f, callId: e.callId }
                : { returnValue: f, success: g, callId: e.callId };
            f = c ? JSON.stringify(h) : h;
            b.source &&
              "function" === typeof b.source.postMessage &&
              b.source.postMessage(f, b.origin);
            return f;
          },
          e.parameter
        );
    };
    a.h.addEventListener("message", a.i);
    a.h.__tcfapiPostMessageReady = !0;
  }
  function Ol(a, b) {
    function c() {
      if (!a.frames[b])
        if (d.body) {
          var e = pd("IFRAME", d);
          e.style.display = "none";
          e.style.width = "0px";
          e.style.height = "0px";
          e.style.border = "none";
          e.style.zIndex = "-1000";
          e.style.left = "-1000px";
          e.style.top = "-1000px";
          e.name = b;
          d.body.appendChild(e);
        } else a.setTimeout(c, 5);
    }
    var d = a.document;
    c();
  }
  function Pl(a) {
    this.h = a;
    this.i = a.document;
    this.m = (a = (a = Jl(this.i)) ? E(a, El, 5) || null : null)
      ? B(a, 2)
      : null;
    this.j = (a = Il(this.i)) && null != B(a, 1) ? B(a, 1) : null;
    this.l = (a = Il(this.i)) && null != B(a, 2) ? B(a, 2) : null;
  }
  function Ql() {
    var a = window,
      b = Q(Th);
    a.__uspapi ||
      a.frames.__uspapiLocator ||
      ((a = new Pl(a)), Rl(a), b && Sl(a));
  }
  function Rl(a) {
    !a.m ||
      a.h.__uspapi ||
      a.h.frames.__uspapiLocator ||
      ((a.h.__uspapiManager = "fc"),
      Ol(a.h, "__uspapiLocator"),
      Sa("__uspapi", function () {
        return a.u.apply(a, ka(Ea.apply(0, arguments)));
      }));
  }
  Pl.prototype.u = function (a, b, c) {
    "function" === typeof c &&
      "getUSPData" === a &&
      c({ version: 1, uspString: this.m }, !0);
  };
  function Sl(a) {
    !a.j ||
      a.h.__tcfapi ||
      a.h.frames.__tcfapiLocator ||
      ((a.h.__tcfapiManager = "fc"),
      Ol(a.h, "__tcfapiLocator"),
      (a.h.__tcfapiEventListeners = a.h.__tcfapiEventListeners || []),
      Sa("__tcfapi", function () {
        return a.A.apply(a, ka(Ea.apply(0, arguments)));
      }),
      Ml(a.h));
  }
  Pl.prototype.A = function (a, b, c, d) {
    d = void 0 === d ? null : d;
    if ("function" === typeof c)
      if (b && 2 !== b) c(null, !1);
      else
        switch (((b = this.h.__tcfapiEventListeners), a)) {
          case "getTCData":
            !d ||
            (Array.isArray(d) &&
              d.every(function (e) {
                return "number" === typeof e;
              }))
              ? c(Tl(this, d, null), !0)
              : c(null, !1);
            break;
          case "ping":
            c({
              gdprApplies: !0,
              cmpLoaded: !0,
              cmpStatus: "loaded",
              displayStatus: "disabled",
              apiVersion: "2.0",
              cmpVersion: 1,
              cmpId: 300,
            });
            break;
          case "addEventListener":
            a = b.push(c);
            c(Tl(this, null, a - 1), !0);
            break;
          case "removeEventListener":
            b[d] ? ((b[d] = null), c(!0)) : c(!1);
            break;
          case "getInAppTCData":
          case "getVendorList":
            c(null, !1);
        }
  };
  function Tl(a, b, c) {
    if (!a.j) return null;
    b = tl(a.j, b);
    b.addtlConsent = null != a.l ? a.l : void 0;
    b.cmpStatus = "loaded";
    b.eventStatus = "tcloaded";
    null != c && (b.listenerId = c);
    return b;
  }
  function Ul(a) {
    var b = /[a-zA-Z0-9._~-]/,
      c = /%[89a-zA-Z]./;
    return a.replace(/(%[a-zA-Z0-9]{2})/g, function (d) {
      if (!d.match(c)) {
        var e = decodeURIComponent(d);
        if (e.match(b)) return e;
      }
      return d.toUpperCase();
    });
  }
  function Vl(a) {
    for (var b = "", c = /[/%?&=]/, d = 0; d < a.length; ++d) {
      var e = a[d];
      b = e.match(c) ? b + e : b + encodeURIComponent(e);
    }
    return b;
  }
  function Wl(a) {
    a = Wb(a, 2, !1);
    if (!a) return !1;
    for (var b = 0; b < a.length; b++) if (1 == a[b]) return !0;
    return !1;
  }
  function Xl(a, b) {
    a = Vl(Ul(a.location.pathname)).replace(/(^\/)|(\/$)/g, "");
    var c = wd(a),
      d = Yl(a);
    return (
      r(b, "find").call(b, function (e) {
        var f = void 0 !== Sb(e, Mj, 7, !1) ? B(E(e, Mj, 7), 1) : B(e, 1);
        e = void 0 !== Sb(e, Mj, 7, !1) ? B(E(e, Mj, 7), 2) : 2;
        if ("number" !== typeof f) return !1;
        switch (e) {
          case 1:
            return f == c;
          case 2:
            return d[f] || !1;
        }
        return !1;
      }) || null
    );
  }
  function Yl(a) {
    for (var b = {}; ; ) {
      b[wd(a)] = !0;
      if (!a) return b;
      a = a.substring(0, a.lastIndexOf("/"));
    }
  }
  var Zl = {},
    $l = ((Zl.google_ad_channel = !0), (Zl.google_ad_host = !0), Zl);
  function am(a, b) {
    a.location.href &&
      a.location.href.substring &&
      (b.url = a.location.href.substring(0, 200));
    Bk("ama", b, 0.01);
  }
  function bm(a) {
    var b = {};
    vd($l, function (c, d) {
      d in a && (b[d] = a[d]);
    });
    return b;
  }
  function cm(a) {
    a = E(a, Jj, 3);
    return !a || B(a, 1) <= Date.now() ? !1 : !0;
  }
  function dm(a) {
    if (Q(Ph)) var b = null;
    else
      try {
        b = a.getItem("google_ama_config");
      } catch (d) {
        b = null;
      }
    try {
      var c = b ? zc(Hj, b) : null;
    } catch (d) {
      c = null;
    }
    return c;
  }
  function em(a) {
    J.call(this, a);
  }
  w(em, J);
  function fm(a) {
    J.call(this, a, -1, gm);
  }
  w(fm, J);
  var gm = [1];
  function hm(a) {
    J.call(this, a, -1, im);
  }
  w(hm, J);
  hm.prototype.getId = function () {
    return hc(this, 1);
  };
  var im = [2];
  function jm(a) {
    J.call(this, a, -1, km);
  }
  w(jm, J);
  var km = [2];
  function lm(a) {
    J.call(this, a, -1, mm);
  }
  w(lm, J);
  function nm(a) {
    J.call(this, a, -1, om);
  }
  w(nm, J);
  function pm(a) {
    J.call(this, a);
  }
  w(pm, J);
  var mm = [1, 4, 2, 3],
    om = [2];
  function qm(a) {
    J.call(this, a, -1, rm);
  }
  w(qm, J);
  function sm(a) {
    return mc(a, fm, 14, Ub);
  }
  var rm = [19],
    Ub = [13, 14];
  var tm = void 0;
  function um() {
    Dc(tm, Bc);
    return tm;
  }
  function vm(a) {
    Dc(tm, Ae);
    tm = a;
  }
  function wm(a, b, c, d) {
    c = void 0 === c ? "" : c;
    return 1 === b && xm(c, void 0 === d ? null : d)
      ? !0
      : ym(a, c, function (e) {
          return gb(G(e, Gc, 2), function (f) {
            return B(f, 1) === b;
          });
        });
  }
  function xm(a, b) {
    return !b || (H(b, 22) && !Q(Xh))
      ? !1
      : Rb(b, em, 13)
      ? H(mc(b, em, 13, Ub), 1)
      : Rb(b, fm, 14) &&
        "" !== a &&
        1 === Yb(sm(b), 1).length &&
        Yb(sm(b), 1)[0] === a
      ? H(E(sm(b), em, 2), 1)
      : !1;
  }
  function zm(a, b) {
    b = hc(b, 18);
    -1 !== b && (a.tmod = b);
  }
  function Am(a) {
    var b = void 0 === b ? "" : b;
    var c = nd(L) || L;
    return Bm(c, a)
      ? !0
      : ym(L, b, function (d) {
          return gb(Wb(d, 3, !1), function (e) {
            return e === a;
          });
        });
  }
  function Bm(a, b) {
    a =
      (a =
        (a = a.location && a.location.hash) &&
        a.match(/forced_clientside_labs=([\d,]+)/)) && a[1];
    return !!a && jb(a.split(","), b.toString());
  }
  function ym(a, b, c) {
    a = nd(a) || a;
    var d = Cm(a);
    b && (b = Wd(String(b)));
    return Qc(d, function (e, f) {
      return (
        Object.prototype.hasOwnProperty.call(d, f) && (!b || b === f) && c(e)
      );
    });
  }
  function Cm(a) {
    a = Dm(a);
    var b = {};
    vd(a, function (c, d) {
      try {
        var e = new Ec(c);
        b[d] = e;
      } catch (f) {}
    });
    return b;
  }
  function Dm(a) {
    return Q(Lh)
      ? ((a = Zk({ s: a, ga: um() })), null != a.h ? Em(a.h.value) : {})
      : Em(a.localStorage);
  }
  function Em(a) {
    try {
      var b = a.getItem("google_adsense_settings");
      if (!b) return {};
      var c = JSON.parse(b);
      return c !== Object(c)
        ? {}
        : Pc(c, function (d, e) {
            return (
              Object.prototype.hasOwnProperty.call(c, e) &&
              "string" === typeof e &&
              Array.isArray(d)
            );
          });
    } catch (d) {
      return {};
    }
  }
  function Fm(a) {
    Q(Uh) && Bk("atf_ad_settings_from_ppabg", { p_s: a }, 0.01);
  }
  function Gm(a) {
    return !!a && (0 < G(a, Bh, 1).length || (Q(Qh) && 0 < G(a, yh, 3).length));
  }
  function U(a) {
    a.google_ad_modifications || (a.google_ad_modifications = {});
    return a.google_ad_modifications;
  }
  function Hm(a) {
    a = U(a);
    var b = a.space_collapsing || "none";
    return a.remove_ads_by_default
      ? { Ma: !0, Kb: b, ta: a.ablation_viewport_offset }
      : null;
  }
  function Im(a, b) {
    a = U(a);
    a.had_ads_ablation = !0;
    a.remove_ads_by_default = !0;
    a.space_collapsing = "slot";
    a.ablation_viewport_offset = b;
  }
  function Jm(a) {
    U(L).allow_second_reactive_tag = a;
  }
  function Km() {
    var a = U(window);
    a.afg_slotcar_vars || (a.afg_slotcar_vars = {});
    return a.afg_slotcar_vars;
  }
  function Lm(a) {
    var b, c;
    return null !=
      (c =
        null ==
        (b = a.document.querySelector(
          'meta[name="google-adsense-platform-account"]'
        ))
          ? void 0
          : b.getAttribute("content"))
      ? c
      : null;
  }
  function Mm(a, b, c, d) {
    Nm(new Om(a, b, c, d));
  }
  function Om(a, b, c, d) {
    this.s = a;
    this.i = b;
    this.j = c;
    this.h = d;
  }
  function Nm(a) {
    Mg(
      Kg(Zk({ s: a.s, ga: H(a.i, 6) }), function (b) {
        Pm(a, b, !0);
      }),
      function () {
        Qm(a);
      }
    );
  }
  function Pm(a, b, c) {
    Mg(
      Kg(Rm(b), function (d) {
        Sm("ok");
        a.h(d, { fromLocalStorage: !0 });
      }),
      function () {
        var d = a.s;
        try {
          b.removeItem("google_ama_config");
        } catch (e) {
          am(d, { lserr: 1 });
        }
        c ? Qm(a) : a.h(null, null);
      }
    );
  }
  function Qm(a) {
    Mg(
      Kg(Tm(a), function (b) {
        a.h(b, { fromPABGSettings: !0 });
      }),
      function () {
        Um(a);
      }
    );
  }
  function Um(a) {
    Yk({
      s: a.s,
      ga: H(a.i, 6),
      cb: 50,
      callback: function (b) {
        Vm(a, b);
      },
    });
  }
  function Rm(a) {
    return (a = (a = dm(a)) ? (cm(a) ? a : null) : null)
      ? Lg(a)
      : Ng(Error("invlocst"));
  }
  function Tm(a) {
    var b = a.s,
      c,
      d,
      e;
    if (
      (null !=
      (e =
        null == (c = U(b))
          ? void 0
          : null == (d = c.head_tag_slot_vars)
          ? void 0
          : d.google_ad_host)
        ? e
        : Lm(b)) &&
      (!H(a.i, 22) || !Q(Wh))
    )
      return Ng(Error("invtag"));
    a: if (((b = a.s), (c = a.j), (a = a.i), null == a ? 0 : Rb(a, em, 13))) {
      var f, g;
      var h =
        null == a
          ? void 0
          : null == (f = mc(a, em, 13, Ub))
          ? void 0
          : null == (g = E(f, fl, 2))
          ? void 0
          : E(g, gl, 2);
      Gm(h) ? Fm(!1) : (h = null);
    } else {
      if (null == a ? 0 : Rb(a, fm, 14)) {
        var k;
        f = null == a ? void 0 : null == (k = sm(a)) ? void 0 : Yb(k, 1);
        var l, m;
        g =
          null == a
            ? void 0
            : null == (h = sm(a))
            ? void 0
            : null == (l = E(h, em, 2))
            ? void 0
            : null == (m = E(l, fl, 2))
            ? void 0
            : E(m, gl, 2);
        if (
          f &&
          1 === f.length &&
          f[0] === c &&
          Gm(g) &&
          kc(a, 17) === b.location.host
        ) {
          Fm(!0);
          h = g;
          break a;
        }
      }
      h = null;
    }
    h
      ? ((l = new Hj()),
        (m = G(h, Bh, 1)),
        (l = gc(l, 1, m)),
        (m = G(h, Kj, 2)),
        (l = gc(l, 7, m)),
        Q(Qh) &&
          0 < G(h, yh, 3).length &&
          ((m = new wh()), (h = G(h, yh, 3)), (h = gc(m, 1, h)), ec(l, 6, h)),
        (h = Lg(l)))
      : (h = Ng(Error("invtag")));
    return h;
  }
  function Vm(a, b) {
    Mg(
      Kg(b, function (c) {
        Pm(a, c, !1);
      }),
      function (c) {
        Sm(c.message);
        a.h(null, null);
      }
    );
  }
  function Sm(a) {
    Bk(
      "abg::amalserr",
      { status: a, guarding: "true", timeout: 50, rate: 0.01 },
      0.01
    );
  }
  function Wm(a, b, c, d) {
    try {
      var e = Xl(a, G(c, Kj, 7));
      if (e && Wl(e)) {
        if (B(e, 4)) {
          var f = {},
            g = new Xg(null, ((f.google_package = B(e, 4)), f));
          d = bh(d, g);
        }
        var h = new ok(a, b, c, e, d);
        qj(
          1e3,
          function () {
            var k = new Ag();
            new jl(a, h, k).start();
            return k.i;
          },
          a
        ).then(Ra(Xm, a), Ra(Ym, a));
      }
    } catch (k) {
      am(a, { atf: -1 });
    }
  }
  function Xm(a) {
    am(a, { atf: 1 });
  }
  function Ym(a, b) {
    (a.google_ama_state = a.google_ama_state || {}).exception = b;
    am(a, { atf: 0 });
  }
  function Zm(a) {
    if (Q(fi)) {
      a.easpi = Q(fi);
      Q(ei) && (a.easpa = !0);
      a.asntp = R(ri);
      a.asntpv = R(vi);
      a.asntpl = R(ti);
      a.asntpm = R(ui);
      a.asntpc = R(si);
      a.asna = R(ni);
      a.asnd = R(oi);
      a.asnp = R(pi);
      a.asns = R(qi);
      a.asmat = R(mi);
      a.asptt = R(xi);
      a.aspe = !0;
      a.asro = Q(yi);
      Q(wi) && (a.ascet = !0);
      Q(ji) && (a.asgr = !0);
      Q(zi) || (a.asrc = !1);
      Q(hi) && (a.asbu = !0);
      Q(ii) && (a.aseb = !0);
      1 > R(ki) && (a.asla = R(ki));
      1 > R(gi) && (a.asaa = R(gi));
      var b = R(li);
      0 < b && (a.asmrc = b);
    }
  }
  mb || !A("Safari") || $a();
  function $m() {
    var a = this;
    this.promise = new q.Promise(function (b, c) {
      a.resolve = b;
      a.reject = c;
    });
  }
  function an() {
    var a = new $m();
    return { promise: a.promise, resolve: a.resolve };
  }
  function bn(a) {
    a = void 0 === a ? function () {} : a;
    x.google_llp || (x.google_llp = {});
    var b = x.google_llp,
      c = b[7];
    if (c) return c;
    c = an();
    b[7] = c;
    a();
    return c;
  }
  function cn(a) {
    return bn(function () {
      od(x.document, a);
    }).promise;
  }
  function dn(a) {
    var b = {};
    return { enable_page_level_ads: ((b.pltais = !0), b), google_ad_client: a };
  }
  function en(a) {
    if (x.google_apltlad || x !== x.top || !a.google_ad_client) return null;
    x.google_apltlad = !0;
    var b = dn(a.google_ad_client),
      c = b.enable_page_level_ads;
    vd(a, function (d, e) {
      ij[e] && "google_ad_client" !== e && (c[e] = d);
    });
    c.google_pgb_reactive = 7;
    Zm(c);
    if ("google_ad_section" in a || "google_ad_region" in a)
      c.google_ad_section = a.google_ad_section || a.google_ad_region;
    return b;
  }
  function fn(a) {
    return (
      Ka(a.enable_page_level_ads) &&
      7 === a.enable_page_level_ads.google_pgb_reactive
    );
  }
  function gn(a, b) {
    U(L).ama_ran_on_page ||
      qj(
        1001,
        function () {
          return hn(new jn(a, b));
        },
        x
      );
  }
  function jn(a, b) {
    this.h = x;
    this.i = a;
    this.j = b;
  }
  function hn(a) {
    Mm(a.h, a.j, a.i.google_ad_client || "", function (b, c) {
      var d = a.h,
        e = a.i;
      U(L).ama_ran_on_page || (b && kn(d, e, b, c));
    });
  }
  function kn(a, b, c, d) {
    d && (vj(a).configSourceInAbg = d);
    if (void 0 !== Sb(c, Cj, 24, !1)) {
      d = wj(a);
      d.availableAbg = !0;
      var e, f;
      d.ablationFromStorage = !!(null == (e = E(c, Cj, 24))
        ? 0
        : null == (f = E(e, Ej, 3))
        ? 0
        : mc(f, Fj, 2, Gj));
    }
    if (fn(b) && ((e = Xl(a, G(c, Kj, 7))), !e || !Xb(e, 8))) return;
    U(L).ama_ran_on_page = !0;
    var g;
    if (null == (g = E(c, Pj, 15)) ? 0 : Xb(g, 23))
      U(a).enable_overlap_observer = !0;
    if ((g = E(c, Nj, 13)) && 1 === B(g, 1)) {
      var h = 0,
        k = E(g, Oj, 6);
      k && B(k, 3) && (h = B(k, 3) || 0);
      Im(a, h);
    } else if (
      null == (h = E(c, Cj, 24))
        ? 0
        : null == (k = E(h, Ej, 3))
        ? 0
        : mc(k, Fj, 2, Gj)
    )
      (wj(a).ablatingThisPageview = !0), Im(a, 1);
    Pd(3, [c.toJSON()]);
    var l = b.google_ad_client || "";
    b = bm(Ka(b.enable_page_level_ads) ? b.enable_page_level_ads : {});
    var m = bh(fh, new Xg(null, b));
    zk(782, function () {
      Wm(a, l, c, m);
    });
  }
  var ln = {},
    mn =
      ((ln.google_ad_modifications = !0),
      (ln.google_analytics_domain_name = !0),
      (ln.google_analytics_uacct = !0),
      (ln.google_pause_ad_requests = !0),
      (ln.google_user_agent_client_hint = !0),
      ln);
  function nn(a) {
    return (a = a.innerText || a.innerHTML) &&
      (a = a
        .replace(/^\s+/, "")
        .split(/\r?\n/, 1)[0]
        .match(/^\x3c!--+(.*?)(?:--+>)?\s*$/)) &&
      RegExp("google_ad_client").test(a[1])
      ? a[1]
      : null;
  }
  function on(a) {
    if ((a = a.innerText || a.innerHTML))
      if (
        ((a = a.replace(/^\s+|\s+$/g, "").replace(/\s*(\r?\n)+\s*/g, ";")),
        (a =
          a.match(/^\x3c!--+(.*?)(?:--+>)?$/) ||
          a.match(/^\/*\s*<!\[CDATA\[(.*?)(?:\/*\s*\]\]>)?$/i)) &&
          RegExp("google_ad_client").test(a[1]))
      )
        return a[1];
    return null;
  }
  function pn(a) {
    switch (a) {
      case "true":
        return !0;
      case "false":
        return !1;
      case "null":
        return null;
      case "undefined":
        break;
      default:
        try {
          var b = a.match(/^(?:'(.*)'|"(.*)")$/);
          if (b) return b[1] || b[2] || "";
          if (/^[-+]?\d*(\.\d+)?$/.test(a)) {
            var c = parseFloat(a);
            return c === c ? c : void 0;
          }
        } catch (d) {}
    }
  }
  function qn(a) {
    if (a.google_ad_client) return String(a.google_ad_client);
    var b, c, d, e, f;
    if (
      null !=
      (e =
        null !=
        (d =
          null == (b = U(a).head_tag_slot_vars) ? void 0 : b.google_ad_client)
          ? d
          : null ==
            (c = a.document.querySelector(".adsbygoogle[data-ad-client]"))
          ? void 0
          : c.getAttribute("data-ad-client"))
    )
      b = e;
    else {
      b: {
        b = a.document.getElementsByTagName("script");
        a = (a.navigator && a.navigator.userAgent) || "";
        a =
          RegExp(
            "appbankapppuzdradb|daumapps|fban|fbios|fbav|fb_iab|gsa/|messengerforios|naver|niftyappmobile|nonavigation|pinterest|twitter|ucbrowser|yjnewsapp|youtube",
            "i"
          ).test(a) ||
          (/i(phone|pad|pod)/i.test(a) &&
            /applewebkit/i.test(a) &&
            !/version|safari/i.test(a) &&
            !Vd())
            ? nn
            : on;
        for (c = b.length - 1; 0 <= c; c--)
          if (
            ((d = b[c]),
            !d.google_parsed_script_for_pub_code &&
              ((d.google_parsed_script_for_pub_code = !0), (d = a(d))))
          ) {
            b = d;
            break b;
          }
        b = null;
      }
      if (b) {
        a = /(google_\w+) *= *(['"]?[\w.-]+['"]?) *(?:;|$)/gm;
        for (c = {}; (d = a.exec(b)); ) c[d[1]] = pn(d[2]);
        b = c.google_ad_client ? c.google_ad_client : "";
      } else b = "";
    }
    return null != (f = b) ? f : "";
  }
  function rn(a, b) {
    var c = 10;
    return Da(function (d) {
      return 0 >= c
        ? d.return(q.Promise.reject())
        : b()
        ? d.return(q.Promise.resolve())
        : d.return(
            new q.Promise(function (e, f) {
              var g = a.setInterval(function () {
                --c
                  ? b() && (a.clearInterval(g), e())
                  : (a.clearInterval(g), f());
              }, 200);
            })
          );
    });
  }
  function sn(a) {
    this.s = Rd() || window;
    this.h = null != a ? a : new Sf(100, 100, !0);
    if (Q(Mh))
      this.state = Kk(Gk(), 33, function () {
        var c = R(Nh);
        return {
          sd: c,
          ssp: 0 < c && ud() < 1 / c,
          pc: null,
          wpc: null,
          le: [],
          lgdp: [],
        };
      });
    else {
      a = R(Nh);
      var b = Mk(0 < a && ud() < 1 / a);
      this.state = { sd: a, ssp: b, pc: null, wpc: null, le: [], lgdp: [] };
    }
  }
  function tn(a, b) {
    var c = new ff();
    var d = un(a);
    c = $b(c, 1, d, 0);
    d = vn(a);
    c = $b(c, 2, d, "");
    c = $b(c, 3, a.state.sd, 0);
    return $b(c, 7, Math.round(b || a.s.performance.now()), 0);
  }
  function un(a) {
    var b = a.state.pc;
    return null !== b && 0 !== b ? b : (a.state.pc = Hd(a.s));
  }
  function vn(a) {
    var b = a.state.wpc;
    return null !== b && "" !== b ? b : (a.state.wpc = qn(a.s));
  }
  function wn(a) {
    return Da(function (b) {
      return wa(
        b,
        rn(a.s, function () {
          return !(!un(a) || !vn(a));
        }),
        0
      );
    });
  }
  function xn() {
    var a = N(sn),
      b,
      c,
      d;
    return Da(function (e) {
      if (1 == e.h) {
        if (!a.i || r(a.state.le, "includes").call(a.state.le, 1))
          return e.return();
        a.state.le.push(1);
        b = a.s.performance.now();
        return wa(e, wn(a), 2);
      }
      c = bf(
        cf(
          new af(),
          $e(Ze(new Ye(), kh(a.s).scrollWidth), kh(a.s).scrollHeight)
        ),
        $e(Ze(new Ye(), lh(a.s)), kh(a.s).clientHeight)
      );
      d = Oi(a.s);
      0 !== d && df(c, Xe(d));
      Ef(a.h, gf(tn(a, b), c));
      Rf(a.h, a.s, function () {
        var f = a.h;
        var g = tn(a);
        var h = new ef();
        g = fc(g, 8, hf, h);
        Ef(f, g);
      });
      e.h = 0;
    });
  }
  function yn(a, b, c) {
    var d;
    return Da(function (e) {
      if (1 == e.h) {
        if (
          !a.i ||
          !c.length ||
          r(a.state.lgdp, "includes").call(a.state.lgdp, Number(b))
        )
          return e.return();
        a.state.lgdp.push(Number(b));
        d = a.s.performance.now();
        return wa(e, wn(a), 2);
      }
      var f = a.h,
        g = tn(a, d);
      var h = new Ue();
      h = $b(h, 1, b, 0);
      h = Zb(h, 2, c);
      g = fc(g, 9, hf, h);
      Ef(f, g);
      e.h = 0;
    });
  }
  ea.Object.defineProperties(sn.prototype, {
    i: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return this.state.ssp;
      },
    },
  });
  function zn(a, b) {
    return a instanceof HTMLScriptElement && b.test(a.src) ? 0 : 1;
  }
  function An(a) {
    var b = L.document;
    if (b.currentScript) return zn(b.currentScript, a);
    b = v(b.scripts);
    for (var c = b.next(); !c.done; c = b.next())
      if (0 === zn(c.value, a)) return 0;
    return 1;
  }
  function Bn(a, b) {
    var c = {},
      d = {},
      e = {},
      f = {};
    return (
      (f[Ge] =
        ((c[55] = function () {
          return 0 === a;
        }),
        (c[23] = function (g) {
          return wm(L, Number(g));
        }),
        (c[24] = function (g) {
          return Am(Number(g));
        }),
        (c[61] = function () {
          return H(b, 6);
        }),
        (c[63] = function () {
          return H(b, 6) || ".google.ch" === kc(b, 8);
        }),
        c)),
      (f[He] =
        ((d[7] = function (g) {
          try {
            var h = window.localStorage;
          } catch (p) {
            h = null;
          }
          g = Number(g);
          g = 0 !== g ? "google_experiment_mod" + g : "google_experiment_mod";
          a: {
            var k = -1;
            try {
              h && (k = parseInt(h.getItem(g), 10));
            } catch (p) {
              k = null;
              break a;
            }
            k = 0 <= k && 1e3 > k ? k : null;
          }
          if (null === k) {
            k = td() ? null : Math.floor(1e3 * ud());
            var l;
            if ((l = null != k && h))
              a: {
                var m = String(k);
                try {
                  if (h) {
                    h.setItem(g, m);
                    l = m;
                    break a;
                  }
                } catch (p) {}
                l = null;
              }
            h = l ? k : null;
          } else h = k;
          return null != h ? h : void 0;
        }),
        d)),
      (f[Ie] =
        ((e[6] = function () {
          return kc(b, 15);
        }),
        e)),
      f
    );
  }
  function Cn(a) {
    a = void 0 === a ? x : a;
    return a.ggeac || (a.ggeac = {});
  }
  function Dn() {
    var a = N(Hi).h($h.h, $h.defaultValue);
    Gd(a, L.document);
  }
  function En(a, b) {
    try {
      var c = a.split(".");
      a = x;
      for (var d = 0, e; null != a && d < c.length; d++)
        (e = a), (a = a[c[d]]), "function" === typeof a && (a = e[c[d]]());
      var f = a;
      if (typeof f === b) return f;
    } catch (g) {}
  }
  var Fn = {},
    Gn = {},
    Hn = {},
    In = {},
    Jn =
      ((In[Ge] =
        ((Fn[8] = function (a) {
          try {
            return null != Ia(a);
          } catch (b) {}
        }),
        (Fn[9] = function (a) {
          try {
            var b = Ia(a);
          } catch (c) {
            return;
          }
          if ((a = "function" === typeof b))
            (b = b && b.toString && b.toString()),
              (a = "string" === typeof b && -1 != b.indexOf("[native code]"));
          return a;
        }),
        (Fn[10] = function () {
          return window === window.top;
        }),
        (Fn[6] = function (a) {
          return jb(N(tg).i(), Number(a));
        }),
        (Fn[27] = function (a) {
          a = En(a, "boolean");
          return void 0 !== a ? a : void 0;
        }),
        (Fn[60] = function (a) {
          try {
            return !!x.document.querySelector(a);
          } catch (b) {}
        }),
        (Fn[69] = function (a) {
          var b = x.document;
          b = void 0 === b ? document : b;
          var c;
          return !(
            null == (c = b.featurePolicy) ||
            !((aa = c.features()), r(aa, "includes")).call(aa, a)
          );
        }),
        (Fn[70] = function (a) {
          var b = x.document;
          b = void 0 === b ? document : b;
          var c;
          return !(
            null == (c = b.featurePolicy) ||
            !((aa = c.allowedFeatures()), r(aa, "includes")).call(aa, a)
          );
        }),
        Fn)),
      (In[He] =
        ((Gn[3] = function () {
          return Cd();
        }),
        (Gn[6] = function (a) {
          a = En(a, "number");
          return void 0 !== a ? a : void 0;
        }),
        (Gn[11] = function (a) {
          a = void 0 === a ? "" : a;
          var b;
          a = (b = (b = x.location.href.match(jd)[3] || null)
            ? decodeURI(b)
            : b)
            ? wd(b + a)
            : null;
          return null == a ? void 0 : a % 1e3;
        }),
        Gn)),
      (In[Ie] =
        ((Hn[2] = function () {
          return window.location.href;
        }),
        (Hn[3] = function () {
          try {
            return window.top.location.hash;
          } catch (a) {
            return "";
          }
        }),
        (Hn[4] = function (a) {
          a = En(a, "string");
          return void 0 !== a ? a : void 0;
        }),
        (Hn[10] = function () {
          try {
            var a = x.document;
            return (
              a.visibilityState ||
              a.webkitVisibilityState ||
              a.mozVisibilityState ||
              ""
            );
          } catch (b) {
            return "";
          }
        }),
        Hn)),
      In);
  var Kn = [12, 13, 20];
  function Ln() {}
  Ln.prototype.init = function (a, b, c, d) {
    var e = this;
    d = void 0 === d ? {} : d;
    var f = void 0 === d.Sa ? !1 : d.Sa,
      g = void 0 === d.Ab ? {} : d.Ab;
    d = void 0 === d.Eb ? [] : d.Eb;
    this.l = a;
    this.A = {};
    this.u = f;
    this.m = g;
    a = {};
    this.i = ((a[b] = []), (a[4] = []), a);
    this.j = {};
    (b = le()) &&
      db(b.split(",") || [], function (h) {
        (h = parseInt(h, 10)) && (e.j[h] = !0);
      });
    db(d, function (h) {
      e.j[h] = !0;
    });
    this.h = c;
    return this;
  };
  function Mn(a, b, c) {
    var d = [],
      e = Nn(a.l, b),
      f;
    if ((f = 9 !== b)) a.A[b] ? (f = !0) : ((a.A[b] = !0), (f = !1));
    if (f) return Uf(a.h, b, c, d, [], 4), d;
    if (!e.length) return Uf(a.h, b, c, d, [], 3), d;
    var g = jb(Kn, b),
      h = [];
    db(e, function (k) {
      var l = new tf();
      if ((k = On(a, k, c, l)))
        0 !== bc(l, uf) && h.push(l),
          (l = k.getId()),
          d.push(l),
          Pn(a, l, g ? 4 : c),
          (k = G(k, Re, 2)) && (g ? kg(k, mg(), a.h, l) : kg(k, [c], a.h, l));
    });
    Uf(a.h, b, c, d, h, 1);
    return d;
  }
  function Pn(a, b, c) {
    a.i[c] || (a.i[c] = []);
    a = a.i[c];
    jb(a, b) || a.push(b);
  }
  function Qn(a, b) {
    a.l.push.apply(
      a.l,
      ka(
        eb(
          fb(b, function (c) {
            return new nm(c);
          }),
          function (c) {
            return !jb(Kn, I(c, 1));
          }
        )
      )
    );
  }
  function On(a, b, c, d) {
    var e = N(Xf).H;
    if (!Ne(E(b, Be, 3), e)) return null;
    var f = G(b, hm, 2),
      g = I(b, 6);
    if (g) {
      ac(d, 1, uf, g);
      f = e[He];
      switch (c) {
        case 2:
          var h = f[8];
          break;
        case 1:
          h = f[7];
      }
      c = void 0;
      if (h)
        try {
          (c = h(g)), $b(d, 3, c, 0);
        } catch (k) {}
      return (b = Rn(b, c)) ? Sn(a, [b], 1) : null;
    }
    if ((g = I(b, 10))) {
      ac(d, 2, uf, g);
      h = null;
      switch (c) {
        case 1:
          h = e[He][9];
          break;
        case 2:
          h = e[He][10];
          break;
        default:
          return null;
      }
      c = h ? h(String(g)) : void 0;
      if (void 0 === c && 1 === I(b, 11)) return null;
      void 0 !== c && $b(d, 3, c, 0);
      return (b = Rn(b, c)) ? Sn(a, [b], 1) : null;
    }
    d = e
      ? eb(f, function (k) {
          return Ne(E(k, Be, 3), e);
        })
      : f;
    if (!d.length) return null;
    c = d.length * ic(b, 1);
    return (b = I(b, 4)) ? Tn(a, b, c, d) : Sn(a, d, c / 1e3);
  }
  function Tn(a, b, c, d) {
    var e = null != a.m[b] ? a.m[b] : 1e3;
    if (0 >= e) return null;
    d = Sn(a, d, c / e);
    a.m[b] = d ? 0 : e - c;
    return d;
  }
  function Sn(a, b, c) {
    var d = a.j,
      e = hb(b, function (f) {
        return !!d[f.getId()];
      });
    return e ? e : a.u ? null : rd(b, c);
  }
  function Un(a, b) {
    og(
      1,
      function (c) {
        a.j[c] = !0;
      },
      b
    );
    og(
      2,
      function (c, d) {
        return Mn(a, c, d);
      },
      b
    );
    og(
      3,
      function (c) {
        return (a.i[c] || []).concat(a.i[4]);
      },
      b
    );
    og(
      12,
      function (c) {
        return void Qn(a, c);
      },
      b
    );
    og(
      16,
      function (c, d) {
        return void Pn(a, c, d);
      },
      b
    );
  }
  function Nn(a, b) {
    return (
      ((a = hb(a, function (c) {
        return I(c, 1) == b;
      })) &&
        G(a, jm, 2)) ||
      []
    );
  }
  function Rn(a, b) {
    var c = G(a, hm, 2),
      d = c.length,
      e = ic(a, 8);
    a = d * ic(a, 1) - 1;
    b = void 0 !== b ? b : Math.floor(1e3 * ud());
    d = (b - e) % d;
    if (b < e || b - e - d >= a) return null;
    c = c[d];
    e = N(Xf).H;
    return !c || (e && !Ne(E(c, Be, 3), e)) ? null : c;
  }
  function Vn() {
    this.h = function () {};
  }
  function Wn(a, b) {
    a.h = pg(14, b, function () {});
  }
  function Xn(a) {
    N(Vn).h(a);
  }
  var Yn, Zn, $n, ao, bo, co;
  function eo(a) {
    var b = a.pb,
      c = a.H,
      d = a.nb,
      e = void 0 === a.Oa ? Cn() : a.Oa,
      f = void 0 === a.Pa ? 0 : a.Pa;
    a =
      void 0 === a.ha
        ? new Tf(
            null != (ao = null == (Yn = E(b, pm, 5)) ? void 0 : jc(B(Yn, 2), 0))
              ? ao
              : 0,
            null != (bo = null == (Zn = E(b, pm, 5)) ? void 0 : jc(B(Zn, 4), 0))
              ? bo
              : 0,
            null != (co = null == ($n = E(b, pm, 5)) ? void 0 : H($n, 3))
              ? co
              : !1
          )
        : a.ha;
    e.hasOwnProperty("init-done")
      ? (pg(12, e, function () {})(
          fb(G(b, nm, 2), function (g) {
            return g.toJSON();
          })
        ),
        pg(13, e, function () {})(
          fb(G(b, Re, 1), function (g) {
            return g.toJSON();
          }),
          f
        ),
        c && pg(14, e, function () {})(c),
        fo(f, e))
      : (Un(N(Ln).init(G(b, nm, 2), f, a, d), e),
        qg(e),
        rg(e),
        sg(e),
        fo(f, e),
        kg(G(b, Re, 1), [f], a, void 0, !0),
        (Yf = Yf || !(!d || !d.ub)),
        Xn(Jn),
        c && Xn(c));
  }
  function fo(a, b) {
    var c = (b = void 0 === b ? Cn() : b);
    ug(N(tg), c, a);
    go(b, a);
    a = b;
    Wn(N(Vn), a);
    N(Hi).m();
  }
  function go(a, b) {
    var c = N(Hi);
    c.i = function (d, e) {
      return pg(5, a, function () {
        return !1;
      })(d, e, b);
    };
    c.j = function (d, e) {
      return pg(6, a, function () {
        return 0;
      })(d, e, b);
    };
    c.l = function (d, e) {
      return pg(7, a, function () {
        return "";
      })(d, e, b);
    };
    c.h = function (d, e) {
      return pg(8, a, function () {
        return [];
      })(d, e, b);
    };
    c.m = function () {
      pg(15, a, function () {})(b);
    };
  }
  function ho(a) {
    var b = N(tg).l(a);
    a = yn(N(sn), a, b);
    wg.xa(1085, a);
  }
  function io(a, b, c) {
    var d = U(a);
    if (d.plle) fo(1, Cn(a));
    else {
      d.plle = !0;
      d = E(b, lm, 12);
      var e = H(b, 9);
      eo({
        pb: d,
        H: Bn(c, b),
        nb: { Sa: e && !!a.google_disable_experiments, ub: e },
        Oa: Cn(a),
        Pa: 1,
      });
      if ((c = kc(b, 15))) (c = Number(c)), N(tg).j(c);
      b = v(Wb(b, 19));
      for (c = b.next(); !c.done; c = b.next()) (c = c.value), N(tg).h(c);
      ho(12);
      ho(10);
      a = nd(a) || a;
      ik(a.location, "google_mc_lab") && N(tg).h(44738307);
      ik(a.location, "google_auto_storify_swipeable") && N(tg).h(44773747);
      ik(a.location, "google_auto_storify_scrollable") && N(tg).h(44773746);
      ik(a.location, "google_pga_monetization") && N(tg).h(44779794);
    }
  }
  var jo = {
    "120x90": !0,
    "160x90": !0,
    "180x90": !0,
    "200x90": !0,
    "468x15": !0,
    "728x15": !0,
  };
  function ko(a, b) {
    if (15 == b) {
      if (728 <= a) return 728;
      if (468 <= a) return 468;
    } else if (90 == b) {
      if (200 <= a) return 200;
      if (180 <= a) return 180;
      if (160 <= a) return 160;
      if (120 <= a) return 120;
    }
    return null;
  }
  function V(a, b, c, d) {
    d = void 0 === d ? !1 : d;
    aj.call(this, a, b);
    this.ia = c;
    this.wb = d;
  }
  w(V, aj);
  V.prototype.sa = function () {
    return this.ia;
  };
  V.prototype.i = function (a, b, c) {
    b.google_ad_resize ||
      ((c.style.height = this.height() + "px"), (b.rpe = !0));
  };
  function lo(a) {
    return function (b) {
      return !!(b.ia & a);
    };
  }
  var mo = {},
    no =
      ((mo.image_stacked = 1 / 1.91),
      (mo.image_sidebyside = 1 / 3.82),
      (mo.mobile_banner_image_sidebyside = 1 / 3.82),
      (mo.pub_control_image_stacked = 1 / 1.91),
      (mo.pub_control_image_sidebyside = 1 / 3.82),
      (mo.pub_control_image_card_stacked = 1 / 1.91),
      (mo.pub_control_image_card_sidebyside = 1 / 3.74),
      (mo.pub_control_text = 0),
      (mo.pub_control_text_card = 0),
      mo),
    oo = {},
    po =
      ((oo.image_stacked = 80),
      (oo.image_sidebyside = 0),
      (oo.mobile_banner_image_sidebyside = 0),
      (oo.pub_control_image_stacked = 80),
      (oo.pub_control_image_sidebyside = 0),
      (oo.pub_control_image_card_stacked = 85),
      (oo.pub_control_image_card_sidebyside = 0),
      (oo.pub_control_text = 80),
      (oo.pub_control_text_card = 80),
      oo),
    qo = {},
    ro =
      ((qo.pub_control_image_stacked = 100),
      (qo.pub_control_image_sidebyside = 200),
      (qo.pub_control_image_card_stacked = 150),
      (qo.pub_control_image_card_sidebyside = 250),
      (qo.pub_control_text = 100),
      (qo.pub_control_text_card = 150),
      qo);
  function so(a) {
    var b = 0;
    a.W && b++;
    a.R && b++;
    a.T && b++;
    if (3 > b)
      return {
        V: "Tags data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num should be set together.",
      };
    b = a.W.split(",");
    var c = a.T.split(",");
    a = a.R.split(",");
    if (b.length !== c.length || b.length !== a.length)
      return {
        V: 'Lengths of parameters data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num must match. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside"',
      };
    if (2 < b.length)
      return {
        V:
          "The parameter length of attribute data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num is too long. At most 2 parameters for each attribute are needed: one for mobile and one for desktop, while you are providing " +
          (b.length +
            ' parameters. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside".'),
      };
    for (var d = [], e = [], f = 0; f < b.length; f++) {
      var g = Number(c[f]);
      if (r(Number, "isNaN").call(Number, g) || 0 === g)
        return {
          V: "Wrong value '" + c[f] + "' for data-matched-content-rows-num.",
        };
      d.push(g);
      g = Number(a[f]);
      if (r(Number, "isNaN").call(Number, g) || 0 === g)
        return {
          V: "Wrong value '" + a[f] + "' for data-matched-content-columns-num.",
        };
      e.push(g);
    }
    return { T: d, R: e, Wa: b };
  }
  function to(a) {
    return 1200 <= a
      ? { width: 1200, height: 600 }
      : 850 <= a
      ? { width: a, height: Math.floor(0.5 * a) }
      : 550 <= a
      ? { width: a, height: Math.floor(0.6 * a) }
      : 468 <= a
      ? { width: a, height: Math.floor(0.7 * a) }
      : { width: a, height: Math.floor(3.44 * a) };
  }
  var uo = lb("script");
  function vo(a, b, c, d, e, f, g, h, k, l, m, p) {
    this.A = a;
    this.X = b;
    this.ia = void 0 === c ? null : c;
    this.h = void 0 === d ? null : d;
    this.M = void 0 === e ? null : e;
    this.i = void 0 === f ? null : f;
    this.j = void 0 === g ? null : g;
    this.C = void 0 === h ? null : h;
    this.I = void 0 === k ? null : k;
    this.l = void 0 === l ? null : l;
    this.m = void 0 === m ? null : m;
    this.L = void 0 === p ? null : p;
    this.N = this.B = this.u = null;
  }
  vo.prototype.size = function () {
    return this.X;
  };
  function wo(a, b, c) {
    null != a.ia && (c.google_responsive_formats = a.ia);
    null != a.M && (c.google_safe_for_responsive_override = a.M);
    null != a.i &&
      (!0 === a.i
        ? (c.google_full_width_responsive_allowed = !0)
        : ((c.google_full_width_responsive_allowed = !1), (c.gfwrnwer = a.i)));
    null != a.j && !0 !== a.j && (c.gfwrnher = a.j);
    var d = a.m || c.google_ad_width;
    null != d && (c.google_resizing_width = d);
    d = a.l || c.google_ad_height;
    null != d && (c.google_resizing_height = d);
    d = a.size().h(b);
    var e = a.size().height();
    if (!c.google_ad_resize) {
      c.google_ad_width = d;
      c.google_ad_height = e;
      var f = a.size();
      b = f.h(b) + "x" + f.height();
      c.google_ad_format = b;
      c.google_responsive_auto_format = a.A;
      null != a.h && (c.armr = a.h);
      c.google_ad_resizable = !0;
      c.google_override_format = 1;
      c.google_loader_features_used = 128;
      !0 === a.i && (c.gfwrnh = a.size().height() + "px");
    }
    null != a.C && (c.gfwroml = a.C);
    null != a.I && (c.gfwromr = a.I);
    null != a.l && (c.gfwroh = a.l);
    null != a.m && (c.gfwrow = a.m);
    null != a.L && (c.gfwroz = a.L);
    null != a.u && (c.gml = a.u);
    null != a.B && (c.gmr = a.B);
    null != a.N && (c.gzi = a.N);
    b = nd(window) || window;
    ik(b.location, "google_responsive_dummy_ad") &&
      (jb([1, 2, 3, 4, 5, 6, 7, 8], a.A) || 1 === a.h) &&
      2 !== a.h &&
      ((a = JSON.stringify({
        googMsgType: "adpnt",
        key_value: [{ key: "qid", value: "DUMMY_AD" }],
      })),
      (c.dash =
        "<" +
        uo +
        ">window.top.postMessage('" +
        a +
        "', '*');\n          </" +
        uo +
        '>\n          <div id="dummyAd" style="width:' +
        d +
        "px;height:" +
        e +
        'px;\n            background:#ddd;border:3px solid #f00;box-sizing:border-box;\n            color:#000;">\n            <p>Requested size:' +
        d +
        "x" +
        e +
        "</p>\n            <p>Rendered size:" +
        d +
        "x" +
        e +
        "</p>\n          </div>"));
  }
  var xo = [
    "google_content_recommendation_ui_type",
    "google_content_recommendation_columns_num",
    "google_content_recommendation_rows_num",
  ];
  function yo(a, b) {
    aj.call(this, a, b);
  }
  w(yo, aj);
  yo.prototype.h = function (a) {
    return Math.min(1200, Math.max(this.P, Math.round(a)));
  };
  function zo(a, b) {
    Ao(a, b);
    if ("pedestal" == b.google_content_recommendation_ui_type)
      return new vo(9, new yo(a, Math.floor(a * b.google_phwr)));
    var c = hd();
    468 > a
      ? c
        ? ((c = a - 8 - 8),
          (c =
            Math.floor(c / 1.91 + 70) +
            Math.floor(
              11 *
                (c * no.mobile_banner_image_sidebyside +
                  po.mobile_banner_image_sidebyside) +
                96
            )),
          (a = {
            da: a,
            ca: c,
            R: 1,
            T: 12,
            W: "mobile_banner_image_sidebyside",
          }))
        : ((a = to(a)),
          (a = {
            da: a.width,
            ca: a.height,
            R: 1,
            T: 13,
            W: "image_sidebyside",
          }))
      : ((a = to(a)),
        (a = { da: a.width, ca: a.height, R: 4, T: 2, W: "image_stacked" }));
    Bo(b, a);
    return new vo(9, new yo(a.da, a.ca));
  }
  function Co(a, b) {
    Ao(a, b);
    var c = so({
      T: b.google_content_recommendation_rows_num,
      R: b.google_content_recommendation_columns_num,
      W: b.google_content_recommendation_ui_type,
    });
    if (c.V) a = { da: 0, ca: 0, R: 0, T: 0, W: "image_stacked", V: c.V };
    else {
      var d = 2 === c.Wa.length && 468 <= a ? 1 : 0;
      var e = c.Wa[d];
      e = 0 === e.indexOf("pub_control_") ? e : "pub_control_" + e;
      var f = ro[e];
      for (var g = c.R[d]; a / g < f && 1 < g; ) g--;
      f = g;
      c = c.T[d];
      d = Math.floor((((a - 8 * f - 8) / f) * no[e] + po[e]) * c + 8 * c + 8);
      a =
        1500 < a
          ? {
              width: 0,
              height: 0,
              Ib: "Calculated slot width is too large: " + a,
            }
          : 1500 < d
          ? {
              width: 0,
              height: 0,
              Ib: "Calculated slot height is too large: " + d,
            }
          : { width: a, height: d };
      a = { da: a.width, ca: a.height, R: f, T: c, W: e };
    }
    if (a.V) throw new T(a.V);
    Bo(b, a);
    return new vo(9, new yo(a.da, a.ca));
  }
  function Ao(a, b) {
    if (0 >= a)
      throw new T(
        "Invalid responsive width from Matched Content slot " +
          b.google_ad_slot +
          ": " +
          a +
          ". Please ensure to put this Matched Content slot into a non-zero width div container."
      );
  }
  function Bo(a, b) {
    a.google_content_recommendation_ui_type = b.W;
    a.google_content_recommendation_columns_num = b.R;
    a.google_content_recommendation_rows_num = b.T;
  }
  function Do(a, b) {
    aj.call(this, a, b);
  }
  w(Do, aj);
  Do.prototype.h = function () {
    return this.P;
  };
  Do.prototype.i = function (a, b, c) {
    $i(a, c);
    b.google_ad_resize ||
      ((c.style.height = this.height() + "px"), (b.rpe = !0));
  };
  var Eo = {
    "image-top": function (a) {
      return 600 >= a ? 284 + 0.414 * (a - 250) : 429;
    },
    "image-middle": function (a) {
      return 500 >= a ? 196 - 0.13 * (a - 250) : 164 + 0.2 * (a - 500);
    },
    "image-side": function (a) {
      return 500 >= a ? 205 - 0.28 * (a - 250) : 134 + 0.21 * (a - 500);
    },
    "text-only": function (a) {
      return 500 >= a ? 187 - 0.228 * (a - 250) : 130;
    },
    "in-article": function (a) {
      return 420 >= a
        ? a / 1.2
        : 460 >= a
        ? a / 1.91 + 130
        : 800 >= a
        ? a / 4
        : 200;
    },
  };
  function Fo(a, b) {
    aj.call(this, a, b);
  }
  w(Fo, aj);
  Fo.prototype.h = function () {
    return Math.min(1200, this.P);
  };
  function Go(a, b, c, d, e) {
    var f = e.google_ad_layout || "image-top";
    if ("in-article" == f) {
      var g = a;
      if ("false" == e.google_full_width_responsive) a = g;
      else if (((a = Vi(b, c, g, 0.2, e)), !0 !== a)) (e.gfwrnwer = a), (a = g);
      else if ((a = lh(b)))
        if (((e.google_full_width_responsive_allowed = !0), c.parentElement)) {
          b: {
            g = c;
            for (var h = 0; 100 > h && g.parentElement; ++h) {
              for (
                var k = g.parentElement.childNodes, l = 0;
                l < k.length;
                ++l
              ) {
                var m = k[l];
                if (m != g && Yi(b, m)) break b;
              }
              g = g.parentElement;
              g.style.width = "100%";
              g.style.height = "auto";
            }
          }
          $i(b, c);
        } else a = g;
      else a = g;
    }
    if (250 > a)
      throw new T(
        "Fluid responsive ads must be at least 250px wide: availableWidth=" + a
      );
    a = Math.min(1200, Math.floor(a));
    if (d && "in-article" != f) {
      f = Math.ceil(d);
      if (50 > f)
        throw new T(
          "Fluid responsive ads must be at least 50px tall: height=" + f
        );
      return new vo(11, new aj(a, f));
    }
    if ("in-article" != f && (d = e.google_ad_layout_key)) {
      f = "" + d;
      b = Math.pow(10, 3);
      if ((d = (c = f.match(/([+-][0-9a-z]+)/g)) && c.length)) {
        e = [];
        for (g = 0; g < d; g++) e.push(parseInt(c[g], 36) / b);
        b = e;
      } else b = null;
      if (!b) throw new T("Invalid data-ad-layout-key value: " + f);
      f = (a + -725) / 1e3;
      c = 0;
      d = 1;
      e = b.length;
      for (g = 0; g < e; g++) (c += b[g] * d), (d *= f);
      f = Math.ceil(1e3 * c - -725 + 10);
      if (isNaN(f)) throw new T("Invalid height: height=" + f);
      if (50 > f)
        throw new T(
          "Fluid responsive ads must be at least 50px tall: height=" + f
        );
      if (1200 < f)
        throw new T(
          "Fluid responsive ads must be at most 1200px tall: height=" + f
        );
      return new vo(11, new aj(a, f));
    }
    d = Eo[f];
    if (!d) throw new T("Invalid data-ad-layout value: " + f);
    c = ej(c, b);
    b = lh(b);
    b =
      "in-article" !== f || c || a !== b
        ? Math.ceil(d(a))
        : Math.ceil(1.25 * d(a));
    return new vo(11, "in-article" == f ? new Fo(a, b) : new aj(a, b));
  }
  function Ho(a) {
    return function (b) {
      for (var c = a.length - 1; 0 <= c; --c) if (!a[c](b)) return !1;
      return !0;
    };
  }
  function Io(a, b) {
    for (var c = Jo.slice(0), d = c.length, e = null, f = 0; f < d; ++f) {
      var g = c[f];
      if (a(g)) {
        if (!b || b(g)) return g;
        null === e && (e = g);
      }
    }
    return e;
  }
  var Ko = [
      new V(970, 90, 2),
      new V(728, 90, 2),
      new V(468, 60, 2),
      new V(336, 280, 1),
      new V(320, 100, 2),
      new V(320, 50, 2),
      new V(300, 600, 4),
      new V(300, 250, 1),
      new V(250, 250, 1),
      new V(234, 60, 2),
      new V(200, 200, 1),
      new V(180, 150, 1),
      new V(160, 600, 4),
      new V(125, 125, 1),
      new V(120, 600, 4),
      new V(120, 240, 4),
      new V(120, 120, 1, !0),
    ],
    Jo = [
      Ko[6],
      Ko[12],
      Ko[3],
      Ko[0],
      Ko[7],
      Ko[14],
      Ko[1],
      Ko[8],
      Ko[10],
      Ko[4],
      Ko[15],
      Ko[2],
      Ko[11],
      Ko[5],
      Ko[13],
      Ko[9],
      Ko[16],
    ];
  function Lo(a, b, c, d, e) {
    "false" == e.google_full_width_responsive
      ? (c = { F: a, G: 1 })
      : ("autorelaxed" == b && e.google_full_width_responsive) ||
        Mo(b) ||
        e.google_ad_resize
      ? ((b = Wi(a, c, d, e)),
        (c = !0 !== b ? { F: a, G: b } : { F: lh(c) || a, G: !0 }))
      : (c = { F: a, G: 2 });
    b = c.G;
    return !0 !== b
      ? { F: a, G: b }
      : d.parentElement
      ? { F: c.F, G: b }
      : { F: a, G: b };
  }
  function No(a, b, c, d, e) {
    var f = zk(247, function () {
        return Lo(a, b, c, d, e);
      }),
      g = f.F;
    f = f.G;
    var h = !0 === f,
      k = K(d.style.width),
      l = K(d.style.height),
      m = Oo(g, b, c, d, e, h);
    g = m.ba;
    h = m.Z;
    var p = m.sa;
    m = m.Va;
    var t = Po(b, p),
      y,
      D = (y = bj(d, c, "marginLeft", K)) ? y + "px" : "",
      z = (y = bj(d, c, "marginRight", K)) ? y + "px" : "";
    y = bj(d, c, "zIndex") || "";
    return new vo(t, g, p, null, m, f, h, D, z, l, k, y);
  }
  function Mo(a) {
    return (
      "auto" == a || /^((^|,) *(horizontal|vertical|rectangle) *)+$/.test(a)
    );
  }
  function Oo(a, b, c, d, e, f) {
    b = "auto" == b ? (0.25 >= a / Math.min(1200, lh(c)) ? 4 : 3) : Ui(b);
    var g = !1,
      h = !1,
      k = 488 > lh(c);
    if (k) {
      var l = Pi(d, c);
      var m = ej(d, c);
      g = !m && l;
      h = m && l;
    }
    m = [cj(a), lo(b)];
    m.push(dj(k, c, d, h));
    null != e.google_max_responsive_height &&
      m.push(gj(e.google_max_responsive_height));
    k = [
      function (t) {
        return !t.wb;
      },
    ];
    if (g || h) (g = hj(c, d)), k.push(gj(g));
    var p = Io(Ho(m), Ho(k));
    if (!p) throw new T("No slot size for availableWidth=" + a);
    m = zk(248, function () {
      var t;
      a: if (f) {
        if (e.gfwrnh && (t = K(e.gfwrnh))) {
          t = { ba: new Do(a, t), Z: !0 };
          break a;
        }
        t = a / 1.2;
        var y = Math;
        var D = y.min;
        if (
          e.google_resizing_allowed ||
          "true" == e.google_full_width_responsive
        )
          var z = Infinity;
        else {
          z = d;
          var F = Infinity;
          do {
            var Y = bj(z, c, "height", K);
            Y && (F = Math.min(F, Y));
            (Y = bj(z, c, "maxHeight", K)) && (F = Math.min(F, Y));
          } while ((z = z.parentElement) && "HTML" != z.tagName);
          z = F;
        }
        y = D.call(y, t, z);
        if (y < 0.5 * t || 100 > y) y = t;
        t = { ba: new Do(a, Math.floor(y)), Z: y < t ? 102 : !0 };
      } else t = { ba: p, Z: 100 };
      return t;
    });
    g = m.ba;
    m = m.Z;
    return "in-article" === e.google_ad_layout &&
      c.location &&
      "#hffwroe2etoq" == c.location.hash
      ? { ba: Qo(a, c, d, g, e), Z: !1, sa: b, Va: l }
      : { ba: g, Z: m, sa: b, Va: l };
  }
  function Po(a, b) {
    if ("auto" == a) return 1;
    switch (b) {
      case 2:
        return 2;
      case 1:
        return 3;
      case 4:
        return 4;
      case 3:
        return 5;
      case 6:
        return 6;
      case 5:
        return 7;
      case 7:
        return 8;
    }
    throw Error("bad mask");
  }
  function Qo(a, b, c, d, e) {
    var f = e.google_ad_height || bj(c, b, "height", K);
    b = Go(a, b, c, f, e).size();
    return b.P * b.height() > a * d.height() ? new V(b.P, b.height(), 1) : d;
  }
  function Ro(a, b, c, d, e) {
    var f;
    (f = lh(b))
      ? 488 > lh(b)
        ? b.innerHeight >= b.innerWidth
          ? ((e.google_full_width_responsive_allowed = !0),
            $i(b, c),
            (f = { F: f, G: !0 }))
          : (f = { F: a, G: 5 })
        : (f = { F: a, G: 4 })
      : (f = { F: a, G: 10 });
    var g = f;
    f = g.F;
    g = g.G;
    if (!0 !== g || a == f)
      return new vo(12, new aj(a, d), null, null, !0, g, 100);
    a = Oo(f, "auto", b, c, e, !0);
    return new vo(1, a.ba, a.sa, 2, !0, g, a.Z);
  }
  function So(a, b) {
    var c = b.google_ad_format;
    if ("autorelaxed" == c) {
      a: {
        if ("pedestal" != b.google_content_recommendation_ui_type)
          for (a = v(xo), c = a.next(); !c.done; c = a.next())
            if (null != b[c.value]) {
              b = !0;
              break a;
            }
        b = !1;
      }
      return b ? 9 : 5;
    }
    if (Mo(c)) return 1;
    if ("link" === c) return 4;
    if ("fluid" == c)
      return "in-article" !== b.google_ad_layout ||
        !a.location ||
        ("#hffwroe2etop" != a.location.hash &&
          "#hffwroe2etoq" != a.location.hash)
        ? 8
        : (To(b), 1);
    if (27 === b.google_reactive_ad_format) return To(b), 1;
  }
  function Uo(a, b, c, d, e) {
    e =
      b.offsetWidth ||
      ((c.google_ad_resize || (void 0 === e ? !1 : e)) &&
        bj(b, d, "width", K)) ||
      c.google_ad_width ||
      0;
    4 === a && ((c.google_ad_format = "auto"), (a = 1));
    var f = (f = Vo(a, e, b, c, d)) ? f : No(e, c.google_ad_format, d, b, c);
    f.size().i(d, c, b);
    wo(f, e, c);
    1 != a && ((a = f.size().height()), (b.style.height = a + "px"));
  }
  function Vo(a, b, c, d, e) {
    var f = d.google_ad_height || bj(c, e, "height", K);
    switch (a) {
      case 5:
        return (
          (f = zk(247, function () {
            return Lo(b, d.google_ad_format, e, c, d);
          })),
          (a = f.F),
          (f = f.G),
          !0 === f && b != a && $i(e, c),
          !0 === f
            ? (d.google_full_width_responsive_allowed = !0)
            : ((d.google_full_width_responsive_allowed = !1), (d.gfwrnwer = f)),
          zo(a, d)
        );
      case 9:
        return Co(b, d);
      case 8:
        return Go(b, e, c, f, d);
      case 10:
        return Ro(b, e, c, f, d);
    }
  }
  function To(a) {
    a.google_ad_format = "auto";
    a.armr = 3;
  }
  function Wo(a, b) {
    var c = nd(b);
    if (c) {
      c = lh(c);
      var d = qd(a, b) || {},
        e = d.direction;
      if ("0px" === d.width && "none" !== d.cssFloat) return -1;
      if ("ltr" === e && c)
        return Math.floor(Math.min(1200, c - a.getBoundingClientRect().left));
      if ("rtl" === e && c)
        return (
          (a =
            b.document.body.getBoundingClientRect().right -
            a.getBoundingClientRect().right),
          Math.floor(
            Math.min(
              1200,
              c - a - Math.floor((c - b.document.body.clientWidth) / 2)
            )
          )
        );
    }
    return -1;
  }
  function Xo(a) {
    wk.ya(function (b) {
      b.shv = String(a);
      b.mjsv = "m202301170101";
      var c = N(tg).i(),
        d = U(x);
      d.eids || (d.eids = []);
      b.eid = c.concat(d.eids).join(",");
    });
  }
  function Yo(a) {
    var b = a.Fb;
    return a.mb || ("dev" === b ? "dev" : "");
  }
  var Zo = "undefined" === typeof sttc ? void 0 : sttc;
  function $o(a) {
    var b = wk;
    try {
      return Dc(a, ze), new qm(JSON.parse(a));
    } catch (c) {
      b.K(838, c instanceof Error ? c : Error(String(c)), void 0, function (d) {
        d.jspb = String(a);
      });
    }
    return new qm();
  }
  function ap(a, b) {
    return null == b ? "&" + a + "=null" : "&" + a + "=" + Math.floor(b);
  }
  function bp(a, b) {
    return "&" + a + "=" + b.toFixed(3);
  }
  function cp() {
    var a = new q.Set(),
      b = kk();
    try {
      if (!b) return a;
      for (
        var c = b.pubads(), d = v(c.getSlots()), e = d.next();
        !e.done;
        e = d.next()
      )
        a.add(e.value.getSlotId().getDomId());
    } catch (f) {}
    return a;
  }
  function dp(a) {
    a = a.id;
    return (
      null != a &&
      (cp().has(a) ||
        r(a, "startsWith").call(a, "google_ads_iframe_") ||
        r(a, "startsWith").call(a, "aswift"))
    );
  }
  function ep(a, b, c) {
    if (!a.sources) return !1;
    switch (fp(a)) {
      case 2:
        var d = gp(a);
        if (d)
          return c.some(function (f) {
            return hp(d, f);
          });
      case 1:
        var e = ip(a);
        if (e)
          return b.some(function (f) {
            return hp(e, f);
          });
    }
    return !1;
  }
  function fp(a) {
    if (!a.sources) return 0;
    a = a.sources.filter(function (b) {
      return b.previousRect && b.currentRect;
    });
    if (1 <= a.length) {
      a = a[0];
      if (a.previousRect.top < a.currentRect.top) return 2;
      if (a.previousRect.top > a.currentRect.top) return 1;
    }
    return 0;
  }
  function ip(a) {
    return jp(a, function (b) {
      return b.currentRect;
    });
  }
  function gp(a) {
    return jp(a, function (b) {
      return b.previousRect;
    });
  }
  function jp(a, b) {
    return a.sources.reduce(function (c, d) {
      d = b(d);
      return c
        ? d && 0 !== d.width * d.height
          ? d.top < c.top
            ? d
            : c
          : c
        : d;
    }, null);
  }
  function kp() {
    M.call(this);
    this.l = this.i = this.M = this.L = this.C = 0;
    this.Ia = this.Fa = Number.NEGATIVE_INFINITY;
    this.Ba =
      this.Da =
      this.Ea =
      this.Ga =
      this.La =
      this.u =
      this.Ka =
      this.X =
        0;
    this.Ca = !1;
    this.N = this.I = this.B = 0;
    var a = document.querySelector("[data-google-query-id]");
    this.Ja = a ? a.getAttribute("data-google-query-id") : null;
    this.m = null;
    this.Ha = !1;
    this.ka = function () {};
  }
  w(kp, M);
  function lp() {
    var a = new kp();
    if (Q(ai)) {
      var b = window;
      if (!b.google_plmetrics && window.PerformanceObserver) {
        b.google_plmetrics = !0;
        b = v([
          "layout-shift",
          "largest-contentful-paint",
          "first-input",
          "longtask",
        ]);
        for (var c = b.next(); !c.done; c = b.next())
          (c = c.value), a.ha().observe({ type: c, buffered: !0 });
        mp(a);
      }
    }
  }
  kp.prototype.ha = function () {
    var a = this;
    this.m ||
      (this.m = new PerformanceObserver(
        pj(640, function (b) {
          var c = np !== window.scrollX || op !== window.scrollY ? [] : pp,
            d = qp();
          b = v(b.getEntries());
          for (var e = b.next(); !e.done; e = b.next())
            switch (((e = e.value), e.entryType)) {
              case "layout-shift":
                if (!e.hadRecentInput) {
                  a.C += Number(e.value);
                  Number(e.value) > a.L && (a.L = Number(e.value));
                  a.M += 1;
                  var f = ep(e, c, d);
                  f && ((a.u += e.value), a.Ga++);
                  if (5e3 < e.startTime - a.Fa || 1e3 < e.startTime - a.Ia)
                    (a.Fa = e.startTime), (a.i = 0), (a.l = 0);
                  a.Ia = e.startTime;
                  a.i += e.value;
                  f && (a.l += e.value);
                  a.i > a.X &&
                    ((a.X = a.i),
                    (a.La = a.l),
                    (a.Ka = e.startTime + e.duration));
                }
                break;
              case "largest-contentful-paint":
                a.Ea = Math.floor(e.renderTime || e.loadTime);
                a.Da = e.size;
                break;
              case "first-input":
                a.Ba = Number((e.processingStart - e.startTime).toFixed(3));
                a.Ca = !0;
                break;
              case "longtask":
                (e = Math.max(0, e.duration - 50)),
                  (a.B += e),
                  (a.I = Math.max(a.I, e)),
                  (a.N += 1);
            }
        })
      ));
    return this.m;
  };
  function mp(a) {
    var b = pj(641, function () {
        var d = document;
        2 ==
          (d.prerendering
            ? 3
            : { visible: 1, hidden: 2, prerender: 3, preview: 4, unloaded: 5 }[
                d.visibilityState ||
                  d.webkitVisibilityState ||
                  d.mozVisibilityState ||
                  ""
              ] || 0) && rp(a);
      }),
      c = pj(641, function () {
        return void rp(a);
      });
    document.addEventListener("visibilitychange", b);
    document.addEventListener("pagehide", c);
    a.ka = function () {
      document.removeEventListener("visibilitychange", b);
      document.removeEventListener("pagehide", c);
      a.ha().disconnect();
    };
  }
  kp.prototype.h = function () {
    M.prototype.h.call(this);
    this.ka();
  };
  function rp(a) {
    if (!a.Ha) {
      a.Ha = !0;
      a.ha().takeRecords();
      var b =
        "https://pagead2.googlesyndication.com/pagead/gen_204?id=plmetrics";
      window.LayoutShift &&
        ((b += bp("cls", a.C)),
        (b += bp("mls", a.L)),
        (b += ap("nls", a.M)),
        window.LayoutShiftAttribution &&
          ((b += bp("cas", a.u)), (b += ap("nas", a.Ga))),
        (b += bp("wls", a.X)),
        (b += bp("tls", a.Ka)),
        window.LayoutShiftAttribution && (b += bp("was", a.La)));
      window.LargestContentfulPaint &&
        ((b += ap("lcp", a.Ea)), (b += ap("lcps", a.Da)));
      window.PerformanceEventTiming && a.Ca && (b += ap("fid", a.Ba));
      window.PerformanceLongTaskTiming &&
        ((b += ap("cbt", a.B)), (b += ap("mbt", a.I)), (b += ap("nlt", a.N)));
      for (
        var c = 0, d = v(document.getElementsByTagName("iframe")), e = d.next();
        !e.done;
        e = d.next()
      )
        dp(e.value) && c++;
      b += ap("nif", c);
      b += ap("ifi", Ud(window));
      c = N(tg).i();
      b += "&eid=" + encodeURIComponent(c.join());
      b += "&top=" + (x === x.top ? 1 : 0);
      b += a.Ja ? "&qqid=" + encodeURIComponent(a.Ja) : ap("pvsid", Hd(x));
      window.googletag && (b += "&gpt=1");
      window.fetch(b, {
        keepalive: !0,
        credentials: "include",
        redirect: "follow",
        method: "get",
        mode: "no-cors",
      });
      Hf(a);
    }
  }
  function hp(a, b) {
    var c = Math.min(a.right, b.right) - Math.max(a.left, b.left);
    a = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
    return 0 >= c || 0 >= a
      ? !1
      : 50 <= (100 * c * a) / ((b.right - b.left) * (b.bottom - b.top));
  }
  function qp() {
    var a = [].concat(ka(document.getElementsByTagName("iframe"))).filter(dp),
      b = []
        .concat(ka(cp()))
        .map(function (c) {
          return document.getElementById(c);
        })
        .filter(function (c) {
          return null !== c;
        });
    np = window.scrollX;
    op = window.scrollY;
    return (pp = [].concat(ka(a), ka(b)).map(function (c) {
      return c.getBoundingClientRect();
    }));
  }
  var np = void 0,
    op = void 0,
    pp = [];
  var W = {
      issuerOrigin: "https://attestation.android.com",
      issuancePath: "/att/i",
      redemptionPath: "/att/r",
    },
    X = {
      issuerOrigin: "https://pagead2.googlesyndication.com",
      issuancePath: "/dtt/i",
      redemptionPath: "/dtt/r",
      getStatePath: "/dtt/s",
    };
  function sp(a, b, c) {
    M.call(this);
    var d = this;
    this.l = a;
    this.i = [];
    b && tp() && this.i.push(W);
    c && this.i.push(X);
    if (document.hasTrustToken && !Q(Ci)) {
      var e = new q.Map();
      this.i.forEach(function (f) {
        e.set(f.issuerOrigin, {
          issuerOrigin: f.issuerOrigin,
          state: d.l ? 1 : 12,
          hasRedemptionRecord: !1,
        });
      });
      window.goog_tt_state_map =
        window.goog_tt_state_map && window.goog_tt_state_map instanceof q.Map
          ? new q.Map([].concat(ka(e), ka(window.goog_tt_state_map)))
          : e;
      (window.goog_tt_promise_map &&
        window.goog_tt_promise_map instanceof q.Map) ||
        (window.goog_tt_promise_map = new q.Map());
    }
  }
  w(sp, M);
  function tp() {
    var a = void 0 === a ? window : a;
    a = a.navigator.userAgent;
    var b = /Chrome/.test(a);
    return /Android/.test(a) && b;
  }
  function up() {
    var a = void 0 === a ? window.document : a;
    var b = N(Hi).h(Fi.h, Fi.defaultValue);
    Gd(b, a);
  }
  function vp(a, b) {
    return a || ".google.ch" === b || "function" === typeof L.__tcfapi;
  }
  function Z(a, b, c) {
    var d,
      e = null == (d = window.goog_tt_state_map) ? void 0 : d.get(a);
    e && ((e.state = b), void 0 != c && (e.hasRedemptionRecord = c));
  }
  function wp() {
    var a = W.issuerOrigin + W.redemptionPath,
      b = {
        keepalive: !0,
        trustToken: {
          type: "token-redemption",
          issuer: W.issuerOrigin,
          refreshPolicy: "none",
        },
      };
    Z(W.issuerOrigin, 2);
    return window
      .fetch(a, b)
      .then(function (c) {
        if (!c.ok) throw Error(c.status + ": Network response was not ok!");
        Z(W.issuerOrigin, 6, !0);
      })
      .catch(function (c) {
        c && "NoModificationAllowedError" === c.name
          ? Z(W.issuerOrigin, 6, !0)
          : Z(W.issuerOrigin, 5);
      });
  }
  function xp() {
    var a = W.issuerOrigin + W.issuancePath;
    Z(W.issuerOrigin, 8);
    return window
      .fetch(a, { keepalive: !0, trustToken: { type: "token-request" } })
      .then(function (b) {
        if (!b.ok) throw Error(b.status + ": Network response was not ok!");
        Z(W.issuerOrigin, 10);
        return wp();
      })
      .catch(function (b) {
        if (b && "NoModificationAllowedError" === b.name)
          return Z(W.issuerOrigin, 10), wp();
        Z(W.issuerOrigin, 9);
      });
  }
  function yp() {
    Z(W.issuerOrigin, 13);
    return document.hasTrustToken(W.issuerOrigin).then(function (a) {
      return a ? wp() : xp();
    });
  }
  function zp() {
    Z(X.issuerOrigin, 13);
    if (q.Promise) {
      var a = document
          .hasTrustToken(X.issuerOrigin)
          .then(function (e) {
            return e;
          })
          .catch(function (e) {
            return q.Promise.reject({ state: 19, error: e });
          }),
        b = X.issuerOrigin + X.redemptionPath,
        c = {
          keepalive: !0,
          trustToken: { type: "token-redemption", refreshPolicy: "none" },
        };
      Z(X.issuerOrigin, 16);
      a = a
        .then(function (e) {
          return window
            .fetch(b, c)
            .then(function (f) {
              if (!f.ok)
                throw Error(f.status + ": Network response was not ok!");
              Z(X.issuerOrigin, 18, !0);
            })
            .catch(function (f) {
              if (f && "NoModificationAllowedError" === f.name)
                Z(X.issuerOrigin, 18, !0);
              else {
                if (e) return q.Promise.reject({ state: 17, error: f });
                Z(X.issuerOrigin, 17);
              }
            });
        })
        .then(function () {
          return document
            .hasTrustToken(X.issuerOrigin)
            .then(function (e) {
              return e;
            })
            .catch(function (e) {
              return q.Promise.reject({ state: 19, error: e });
            });
        })
        .then(function (e) {
          var f = X.issuerOrigin + X.getStatePath;
          Z(X.issuerOrigin, 20);
          return window
            .fetch(f + "?ht=" + e, {
              trustToken: {
                type: "send-redemption-record",
                issuers: [X.issuerOrigin],
              },
            })
            .then(function (g) {
              if (!g.ok)
                throw Error(g.status + ": Network response was not ok!");
              Z(X.issuerOrigin, 22);
              return g.text().then(function (h) {
                return JSON.parse(h);
              });
            })
            .catch(function (g) {
              return q.Promise.reject({ state: 21, error: g });
            });
        });
      var d = Hd(window);
      return a
        .then(function (e) {
          var f = X.issuerOrigin + X.issuancePath;
          return e && e.srqt && e.cs
            ? (Z(X.issuerOrigin, 23),
              window
                .fetch(f + "?cs=" + e.cs + "&correlator=" + d, {
                  keepalive: !0,
                  trustToken: { type: "token-request" },
                })
                .then(function (g) {
                  if (!g.ok)
                    throw Error(g.status + ": Network response was not ok!");
                  Z(X.issuerOrigin, 25);
                  return e;
                })
                .catch(function (g) {
                  return q.Promise.reject({ state: 24, error: g });
                }))
            : e;
        })
        .then(function (e) {
          if (e && e.srdt && e.cs)
            return (
              Z(X.issuerOrigin, 26),
              window
                .fetch(b + "?cs=" + e.cs + "&correlator=" + d, {
                  keepalive: !0,
                  trustToken: {
                    type: "token-redemption",
                    refreshPolicy: "refresh",
                  },
                })
                .then(function (f) {
                  if (!f.ok)
                    throw Error(f.status + ": Network response was not ok!");
                  Z(X.issuerOrigin, 28, !0);
                })
                .catch(function (f) {
                  return q.Promise.reject({ state: 27, error: f });
                })
            );
        })
        .then(function () {
          Z(X.issuerOrigin, 29);
        })
        .catch(function (e) {
          if (
            e instanceof Object &&
            e.hasOwnProperty("state") &&
            e.hasOwnProperty("error")
          )
            if ("number" === typeof e.state && e.error instanceof Error) {
              Z(X.issuerOrigin, e.state);
              var f = R(Ei);
              Math.random() <= f &&
                Ld({ state: e.state, err: e.error.toString() }, "dtt_err");
            } else throw Error(e);
          else throw e;
        });
    }
  }
  function Ap(a) {
    if (document.hasTrustToken && !Q(Ci) && a.l) {
      var b = window.goog_tt_promise_map;
      if (b && b instanceof q.Map) {
        var c = [];
        if (
          a.i.some(function (e) {
            return e.issuerOrigin === W.issuerOrigin;
          })
        ) {
          var d = b.get(W.issuerOrigin);
          d || ((d = yp()), b.set(W.issuerOrigin, d));
          c.push(d);
        }
        a.i.some(function (e) {
          return e.issuerOrigin === X.issuerOrigin;
        }) &&
          ((a = b.get(X.issuerOrigin)),
          a || ((a = zp()), b.set(X.issuerOrigin, a)),
          c.push(a));
        if (0 < c.length && q.Promise && q.Promise.all) return q.Promise.all(c);
      }
    }
  }
  function Bp(a) {
    J.call(this, a, -1, Cp);
  }
  w(Bp, J);
  function Dp(a, b) {
    return C(a, 2, b);
  }
  function Ep(a, b) {
    return C(a, 3, b);
  }
  function Fp(a, b) {
    return C(a, 4, b);
  }
  function Gp(a, b) {
    return C(a, 5, b);
  }
  function Hp(a, b) {
    return C(a, 9, b);
  }
  function Ip(a, b) {
    return gc(a, 10, b);
  }
  function Jp(a, b) {
    return C(a, 11, b);
  }
  function Kp(a, b) {
    return C(a, 1, b);
  }
  function Lp(a, b) {
    return C(a, 7, b);
  }
  function Mp(a) {
    J.call(this, a);
  }
  w(Mp, J);
  Mp.prototype.getVersion = function () {
    return kc(this, 2);
  };
  var Cp = [10, 6];
  var Np =
    "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(
      " "
    );
  function Op() {
    var a;
    return null != (a = L.google_tag_data) ? a : (L.google_tag_data = {});
  }
  function Pp() {
    var a, b;
    return (
      "function" ===
      typeof (null == (a = L.navigator)
        ? void 0
        : null == (b = a.userAgentData)
        ? void 0
        : b.getHighEntropyValues)
    );
  }
  function Qp() {
    if (!Pp()) return null;
    var a = Op();
    if (a.uach_promise) return a.uach_promise;
    var b = L.navigator.userAgentData
      .getHighEntropyValues(Np)
      .then(function (c) {
        null != a.uach || (a.uach = c);
        return c;
      });
    return (a.uach_promise = b);
  }
  function Rp(a) {
    var b;
    return Jp(
      Ip(
        Gp(
          Dp(
            Kp(
              Fp(
                Lp(
                  Hp(Ep(new Bp(), a.architecture || ""), a.bitness || ""),
                  a.mobile || !1
                ),
                a.model || ""
              ),
              a.platform || ""
            ),
            a.platformVersion || ""
          ),
          a.uaFullVersion || ""
        ),
        (null == (b = a.fullVersionList)
          ? void 0
          : b.map(function (c) {
              var d = new Mp();
              d = C(d, 1, c.brand);
              return C(d, 2, c.version);
            })) || []
      ),
      a.wow64 || !1
    );
  }
  function Sp() {
    var a, b;
    return null !=
      (b =
        null == (a = Qp())
          ? void 0
          : a.then(function (c) {
              return Rp(c);
            }))
      ? b
      : null;
  }
  function Tp(a, b) {
    b.google_ad_host || ((a = Lm(a)) && (b.google_ad_host = a));
  }
  function Up(a, b, c) {
    c = void 0 === c ? "" : c;
    L.google_sa_impl &&
      !L.document.getElementById("google_shimpl") &&
      (delete L.google_sa_queue, delete L.google_sa_impl);
    L.google_sa_queue ||
      ((L.google_sa_queue = []),
      (L.google_process_slots = Ak(215, function () {
        return Vp(L.google_sa_queue);
      })),
      (a = Wp(c, a, b)),
      (od(L.document, a).id = "google_shimpl"));
  }
  function Vp(a) {
    var b = a.shift();
    "function" === typeof b && zk(216, b);
    a.length &&
      x.setTimeout(
        Ak(215, function () {
          return Vp(a);
        }),
        0
      );
  }
  function Xp(a, b, c) {
    a.google_sa_queue = a.google_sa_queue || [];
    a.google_sa_impl ? c(b) : a.google_sa_queue.push(b);
  }
  function Wp(a, b, c) {
    b = H(c, 4) ? b.Gb : b.Hb;
    var d = {};
    a: {
      if (H(c, 4)) {
        if ((a = a || qn(L))) {
          c = {};
          a = ((c.client = a), (c.plah = L.location.host), c);
          break a;
        }
        throw Error("PublisherCodeNotFoundForAma");
      }
      a = {};
    }
    Yp(a, d);
    Yp(Ii() ? { bust: Ii() } : {}, d);
    return $c(b, d);
  }
  function Yp(a, b) {
    vd(a, function (c, d) {
      void 0 === b[d] && (b[d] = c);
    });
  }
  function Zp(a) {
    a: {
      var b = void 0 === b ? !1 : b;
      for (var c = [x.top], d = [], e = 0, f; (f = c[e++]); ) {
        (b && !md(f)) || d.push(f);
        try {
          if (f.frames)
            for (var g = 0; g < f.frames.length && 1024 > c.length; ++g)
              c.push(f.frames[g]);
        } catch (k) {}
      }
      for (b = 0; b < d.length; b++)
        try {
          var h = d[b].frames.google_esf;
          if (h) {
            Nd = h;
            break a;
          }
        } catch (k) {}
      Nd = null;
    }
    if (Nd) return null;
    d = pd("IFRAME");
    d.id = "google_esf";
    d.name = "google_esf";
    d.src = bd(a.Nb).toString();
    d.style.display = "none";
    return d;
  }
  function $p(a, b, c, d) {
    aq(a, b, c, d, function (e, f) {
      e = e.document;
      for (var g = void 0, h = 0; !g || e.getElementById(g + "_host"); )
        g = "aswift_" + h++;
      e = g;
      g = Number(f.google_ad_width || 0);
      f = Number(f.google_ad_height || 0);
      h = pd("DIV");
      h.id = e + "_host";
      var k = h.style;
      k.border = "none";
      k.height = f + "px";
      k.width = g + "px";
      k.margin = "0px";
      k.padding = "0px";
      k.position = "relative";
      k.visibility = "visible";
      k.backgroundColor = "transparent";
      h.style.display = "inline-block";
      c.appendChild(h);
      return { qb: e, Mb: h };
    });
  }
  function aq(a, b, c, d, e) {
    var f = e(a, b);
    e = f.qb;
    bq(a, c, b);
    c = Ua;
    var g = new Date().getTime();
    b.google_lrv = kc(d, 2);
    b.google_async_iframe_id = e;
    b.google_start_time = c;
    b.google_bpp = g > c ? g - c : 1;
    a.google_sv_map = a.google_sv_map || {};
    a.google_sv_map[e] = b;
    d = a.document.getElementById(e + "_host")
      ? function (h) {
          return h();
        }
      : function (h) {
          return window.setTimeout(h, 0);
        };
    Xp(
      a,
      function () {
        var h = f.Mb;
        if (!h || !h.isConnected)
          if (
            ((h = a.document.getElementById(
              String(b.google_async_iframe_id) + "_host"
            )),
            null == h)
          )
            throw Error("no_div");
        (h = a.google_sa_impl({
          pubWin: a,
          vars: b,
          outerInsElement: h,
          innerInsElement: h,
        })) && Ck(911, h);
      },
      d
    );
  }
  function bq(a, b, c) {
    var d = c.google_ad_output,
      e = c.google_ad_format,
      f = c.google_ad_width || 0,
      g = c.google_ad_height || 0;
    e || ("html" !== d && null != d) || (e = f + "x" + g);
    d =
      !c.google_ad_slot ||
      c.google_override_format ||
      (!jo[c.google_ad_width + "x" + c.google_ad_height] &&
        "aa" === c.google_loader_used);
    e && d ? (e = e.toLowerCase()) : (e = "");
    c.google_ad_format = e;
    if (
      "number" !== typeof c.google_reactive_sra_index ||
      !c.google_ad_unit_key
    ) {
      e = [
        c.google_ad_slot,
        c.google_orig_ad_format || c.google_ad_format,
        c.google_ad_type,
        c.google_orig_ad_width || c.google_ad_width,
        c.google_orig_ad_height || c.google_ad_height,
      ];
      d = [];
      f = 0;
      for (g = b; g && 25 > f; g = g.parentNode, ++f)
        9 === g.nodeType ? d.push("") : d.push(g.id);
      (d = d.join()) && e.push(d);
      c.google_ad_unit_key = wd(e.join(":")).toString();
      var h = void 0 === h ? !1 : h;
      e = [];
      for (d = 0; b && 25 > d; ++d) {
        f = "";
        (void 0 !== h && h) ||
          (f = (f = 9 !== b.nodeType && b.id) ? "/" + f : "");
        a: {
          if (b && b.nodeName && b.parentElement) {
            g = b.nodeName.toString().toLowerCase();
            for (
              var k = b.parentElement.childNodes, l = 0, m = 0;
              m < k.length;
              ++m
            ) {
              var p = k[m];
              if (p.nodeName && p.nodeName.toString().toLowerCase() === g) {
                if (b === p) {
                  g = "." + l;
                  break a;
                }
                ++l;
              }
            }
          }
          g = "";
        }
        e.push((b.nodeName && b.nodeName.toString().toLowerCase()) + f + g);
        b = b.parentElement;
      }
      h = e.join() + ":";
      b = [];
      if (a)
        try {
          var t = a.parent;
          for (e = 0; t && t !== a && 25 > e; ++e) {
            var y = t.frames;
            for (d = 0; d < y.length; ++d)
              if (a === y[d]) {
                b.push(d);
                break;
              }
            a = t;
            t = a.parent;
          }
        } catch (D) {}
      c.google_ad_dom_fingerprint = wd(h + b.join()).toString();
    }
  }
  function cq() {
    var a = nd(x);
    a &&
      ((a = jh(a)),
      a.tagSpecificState[1] ||
        (a.tagSpecificState[1] = { debugCard: null, debugCardRequested: !1 }));
  }
  function dq(a) {
    up();
    vp(um(), kc(a, 8)) ||
      Ak(779, function () {
        var b = window;
        b = void 0 === b ? window : b;
        b = Q(b.PeriodicSyncManager ? Ai : Bi);
        var c = Q(Di);
        b = new sp(!0, b, c);
        0 < R(Gi) ? (L.google_trust_token_operation_promise = Ap(b)) : Ap(b);
      })();
    a = Sp();
    null != a &&
      a.then(function (b) {
        a: {
          Kb = !0;
          try {
            var c = JSON.stringify(b.toJSON(), Ac);
            break a;
          } finally {
            Kb = !1;
          }
          c = void 0;
        }
        L.google_user_agent_client_hint = c;
      });
    Dn();
  }
  function eq(a, b) {
    switch (a) {
      case "google_reactive_ad_format":
        return (a = parseInt(b, 10)), isNaN(a) ? 0 : a;
      case "google_allow_expandable_ads":
        return /^true$/.test(b);
      default:
        return b;
    }
  }
  function fq(a, b) {
    if (a.getAttribute("src")) {
      var c = a.getAttribute("src") || "",
        d = ld(c, "client");
      d && (b.google_ad_client = eq("google_ad_client", d));
      (c = ld(c, "host")) && (b.google_ad_host = eq("google_ad_host", c));
    }
    a = a.attributes;
    c = a.length;
    for (d = 0; d < c; d++) {
      var e = a[d];
      if (/data-/.test(e.name)) {
        var f = Va(
          e.name
            .replace("data-matched-content", "google_content_recommendation")
            .replace("data", "google")
            .replace(/-/g, "_")
        );
        b.hasOwnProperty(f) || ((e = eq(f, e.value)), null !== e && (b[f] = e));
      }
    }
  }
  function gq(a) {
    if ((a = Qd(a)))
      switch (a.data && a.data.autoFormat) {
        case "rspv":
          return 13;
        case "mcrspv":
          return 15;
        default:
          return 14;
      }
    else return 12;
  }
  function hq(a, b, c, d) {
    fq(a, b);
    if (
      c.document &&
      c.document.body &&
      !So(c, b) &&
      !b.google_reactive_ad_format
    ) {
      var e = parseInt(a.style.width, 10),
        f = Wo(a, c);
      if (0 < f && e > f) {
        var g = parseInt(a.style.height, 10);
        e = !!jo[e + "x" + g];
        var h = f;
        if (e) {
          var k = ko(f, g);
          if (k) (h = k), (b.google_ad_format = k + "x" + g + "_0ads_al");
          else throw new T("No slot size for availableWidth=" + f);
        }
        b.google_ad_resize = !0;
        b.google_ad_width = h;
        e || ((b.google_ad_format = null), (b.google_override_format = !0));
        f = h;
        a.style.width = f + "px";
        g = No(f, "auto", c, a, b);
        h = f;
        g.size().i(c, b, a);
        wo(g, h, b);
        g = g.size();
        b.google_responsive_formats = null;
        g.P > f &&
          !e &&
          ((b.google_ad_width = g.P), (a.style.width = g.P + "px"));
      }
    }
    e = a.offsetWidth || bj(a, c, "width", K) || b.google_ad_width || 0;
    if (488 > lh(c)) {
      f = nd(c) || c;
      g = b.google_ad_client;
      if (
        (d =
          ik(f.location, "google_responsive_slot_preview") ||
          Q(Vh) ||
          wm(f, 1, g, d))
      )
        b: if (
          b.google_reactive_ad_format ||
          b.google_ad_resize ||
          So(c, b) ||
          Ri(a, b)
        )
          d = !1;
        else {
          for (d = a; d; d = d.parentElement) {
            f = qd(d, c);
            if (!f) {
              b.gfwrnwer = 18;
              d = !1;
              break b;
            }
            if (!jb(["static", "relative"], f.position)) {
              b.gfwrnwer = 17;
              d = !1;
              break b;
            }
          }
          d = Vi(c, a, e, 0.3, b);
          !0 !== d ? ((b.gfwrnwer = d), (d = !1)) : (d = c === c.top ? !0 : !1);
        }
      d
        ? ((b.google_resizing_allowed = !0),
          (b.ovlp = !0),
          (b.google_ad_format = "auto"),
          (b.iaaso = !0),
          (b.armr = 1),
          (d = !0))
        : (d = !1);
    } else d = !1;
    if ((e = So(c, b))) Uo(e, a, b, c, d);
    else {
      if (Ri(a, b)) {
        if ((d = qd(a, c)))
          (a.style.width = d.width), (a.style.height = d.height), Qi(d, b);
        b.google_ad_width || (b.google_ad_width = a.offsetWidth);
        b.google_ad_height || (b.google_ad_height = a.offsetHeight);
        b.google_loader_features_used = 256;
        b.google_responsive_auto_format = gq(c);
      } else Qi(a.style, b);
      (c.location && "#gfwmrp" == c.location.hash) ||
      (12 == b.google_responsive_auto_format &&
        "true" == b.google_full_width_responsive)
        ? Uo(10, a, b, c, !1)
        : 0.01 > Math.random() &&
          12 === b.google_responsive_auto_format &&
          ((a = Wi(
            a.offsetWidth || parseInt(a.style.width, 10) || b.google_ad_width,
            c,
            a,
            b
          )),
          !0 !== a ? ((b.efwr = !1), (b.gfwrnwer = a)) : (b.efwr = !0));
    }
  }
  var iq = ja([
      "https://pagead2.googlesyndication.com/pagead/managed/js/adsense/",
      "/slotcar_library",
      ".js",
    ]),
    jq = ja([
      "https://googleads.g.doubleclick.net/pagead/html/",
      "/",
      "/zrt_lookup.html",
    ]),
    kq = ja([
      "https://pagead2.googlesyndication.com/pagead/managed/js/adsense/",
      "/show_ads_impl",
      ".js",
    ]),
    lq = ja([
      "https://pagead2.googlesyndication.com/pagead/managed/js/adsense/",
      "/show_ads_impl_with_ama",
      ".js",
    ]),
    mq = ja([
      "https://pagead2.googlesyndication.com/pagead/managed/js/adsense/",
      "/show_ads_impl_instrumented",
      ".js",
    ]);
  function nq(a, b, c, d) {
    M.call(this);
    this.I = b;
    this.C = c;
    this.L = d;
    this.B = new q.Map();
    this.u = new q.Map();
    this.N = new q.Map();
    this.M = new q.Map();
    this.m = void 0;
    this.l = a;
  }
  w(nq, M);
  nq.prototype.h = function () {
    delete this.i;
    this.B.clear();
    this.u.clear();
    this.N.clear();
    this.M.clear();
    this.m && (Oc(this.l, "message", this.m), delete this.m);
    delete this.l;
    delete this.L;
    M.prototype.h.call(this);
  };
  function oq(a) {
    if (a.i) return a.i;
    a.C && a.C(a.l) ? (a.i = a.l) : (a.i = Bd(a.l, a.I));
    var b;
    return null != (b = a.i) ? b : null;
  }
  function pq(a, b) {
    (0, a.__uspapi)("getUSPData", 1, function (c, d) {
      b.callback({ consentData: null != c ? c : void 0, ob: d ? void 0 : 2 });
    });
  }
  var qq = {
    xb: function (a) {
      return a.callback;
    },
    yb: function (a, b) {
      a = {};
      return (
        (a.__uspapiCall = { callId: b, command: "getUSPData", version: 1 }), a
      );
    },
    Bb: function (a, b) {
      b = b.__uspapiReturn;
      var c;
      a({
        consentData: null != (c = b.returnValue) ? c : void 0,
        ob: b.success ? void 0 : 2,
      });
    },
  };
  function rq(a) {
    var b = {};
    "string" === typeof a.data ? (b = JSON.parse(a.data)) : (b = a.data);
    return { payload: b, Db: b.__uspapiReturn.callId };
  }
  function sq(a) {
    M.call(this);
    this.caller = new nq(
      a,
      "__uspapiLocator",
      function (b) {
        return "function" === typeof b.__uspapi;
      },
      rq
    );
    this.caller.B.set("getDataWithCallback", pq);
    this.caller.u.set("getDataWithCallback", qq);
  }
  w(sq, M);
  sq.prototype.h = function () {
    Hf(this.caller);
    M.prototype.h.call(this);
  };
  sq.prototype.m = function () {
    return !!oq(this.caller);
  };
  function tq(a) {
    J.call(this, a);
  }
  w(tq, J);
  function uq(a, b) {
    a = a.googlefc || (a.googlefc = {});
    a.__fci = a.__fci || [];
    a.__fci.push(b.command, function (c) {
      c = zc(tq, c);
      b.callback({ consentData: c });
    });
  }
  var vq = {
    xb: function (a) {
      return a.callback;
    },
    yb: function (a, b) {
      var c = {};
      return (c.__fciCall = { callId: b, command: a.command }), c;
    },
    Bb: function (a, b) {
      a({ consentData: b });
    },
  };
  function wq(a) {
    a = zc(tq, a.data.__fciReturn);
    return { payload: a, Db: B(a, 1) };
  }
  function xq(a) {
    M.call(this);
    this.i = null;
    this.l = !1;
    this.caller = new nq(a, "googlefcPresent", void 0, wq);
    this.caller.B.set("getDataWithCallback", uq);
    this.caller.u.set("getDataWithCallback", vq);
  }
  w(xq, M);
  xq.prototype.h = function () {
    Hf(this.caller);
    M.prototype.h.call(this);
  };
  xq.prototype.m = function () {
    this.l || ((this.i = oq(this.caller)), (this.l = !0));
    return !!this.i;
  };
  var yq = ja(["(a=0)=>{let b;const c=class{};}"]);
  function zq() {
    var a = yq[0];
    var b = Uc();
    a = b ? b.createScript(a) : a;
    a = new Wc(a, Vc);
    try {
      b = window;
      var c =
        a instanceof Wc && a.constructor === Wc ? a.h : "type_error:SafeScript";
      b.eval(c) === c && b.eval(c.toString());
      return { supports: !0, error: "" };
    } catch (d) {
      return { supports: !1, error: String(d) };
    }
  }
  function Aq(a) {
    var b = window;
    var c = void 0 === c ? null : c;
    Nc(b, "message", function (d) {
      try {
        var e = JSON.parse(d.data);
      } catch (f) {
        return;
      }
      !e ||
        "sc-cnf" !== e.googMsgType ||
        (c && /[:|%3A]javascript\(/i.test(d.data) && !c(e, d)) ||
        a(e, d);
    });
  }
  function Bq(a) {
    M.call(this);
    this.l = a;
    this.i = null;
  }
  w(Bq, M);
  Bq.prototype.h = function () {
    M.prototype.h.call(this);
  };
  Bq.prototype.m = function () {
    var a, b;
    (b = "function" === typeof (null == (a = this.l) ? void 0 : a.__uspapi)) ||
      ((a = this.i ? this.i : (this.i = Bd(this.l, "__uspapiLocator"))),
      (b = null != a));
    return b;
  };
  function Cq(a) {
    M.call(this);
    this.u = a;
    this.i = null;
    this.l = !1;
  }
  w(Cq, M);
  Cq.prototype.m = function () {
    if (!this.l) {
      if (!this.i) {
        var a = Bd(this.u, "googlefcPresent");
        this.i = a ? a : null;
      }
      this.l = !0;
    }
    return !!this.i;
  };
  var Dq = null,
    Eq = [],
    Fq = new q.Map(),
    Gq = -1;
  function Hq(a) {
    return jj.test(a.className) && "done" !== a.dataset.adsbygoogleStatus;
  }
  function Iq(a, b, c) {
    a.dataset.adsbygoogleStatus = "done";
    Jq(a, b, c);
  }
  function Jq(a, b, c) {
    var d = window;
    d.google_spfd || (d.google_spfd = hq);
    var e = b.google_reactive_ads_config;
    e || hq(a, b, d, c);
    Tp(d, b);
    if (!Kq(a, b, d)) {
      e || (d.google_lpabyc = Si(a, d) + bj(a, d, "height", K));
      if (e) {
        e = e.page_level_pubvars || {};
        if (
          U(L).page_contains_reactive_tag &&
          !U(L).allow_second_reactive_tag
        ) {
          if (e.pltais) {
            Jm(!1);
            return;
          }
          throw new T("Only one 'enable_page_level_ads' allowed per page.");
        }
        U(L).page_contains_reactive_tag = !0;
        Jm(7 === e.google_pgb_reactive);
      }
      b.google_unique_id = Td(d);
      vd(mn, function (f, g) {
        b[g] = b[g] || d[g];
      });
      b.google_loader_used = "aa";
      b.google_reactive_tag_first = 1 === (U(L).first_tag_on_page || 0);
      zk(164, function () {
        $p(d, b, a, c);
      });
    }
  }
  function Kq(a, b, c) {
    var d = b.google_reactive_ads_config,
      e =
        "string" === typeof a.className &&
        RegExp("(\\W|^)adsbygoogle-noablate(\\W|$)").test(a.className),
      f = Hm(c);
    if (f && f.Ma && "on" !== b.google_adtest && !e) {
      e = Si(a, c);
      var g = kh(c).clientHeight;
      if (!f.ta || (f.ta && ((0 == g ? null : e / g) || 0) >= f.ta))
        return (
          (a.className += " adsbygoogle-ablated-ad-slot"),
          (c = c.google_sv_map = c.google_sv_map || {}),
          (d = La(a)),
          (b.google_element_uid = d),
          (c[b.google_element_uid] = b),
          a.setAttribute("google_element_uid", String(d)),
          "slot" === f.Kb &&
            (null !== Ad(a.getAttribute("width")) && a.setAttribute("width", 0),
            null !== Ad(a.getAttribute("height")) &&
              a.setAttribute("height", 0),
            (a.style.width = "0px"),
            (a.style.height = "0px")),
          !0
        );
    }
    if (
      (f = qd(a, c)) &&
      "none" === f.display &&
      !("on" === b.google_adtest || 0 < b.google_reactive_ad_format || d)
    )
      return (
        c.document.createComment &&
          a.appendChild(
            c.document.createComment(
              "No ad requested because of display:none on the adsbygoogle tag"
            )
          ),
        !0
      );
    a = null == b.google_pgb_reactive || 3 === b.google_pgb_reactive;
    return (1 !== b.google_reactive_ad_format &&
      8 !== b.google_reactive_ad_format) ||
      !a
      ? !1
      : (x.console &&
          x.console.warn(
            "Adsbygoogle tag with data-reactive-ad-format=" +
              String(b.google_reactive_ad_format) +
              " is deprecated. Check out page-level ads at https://www.google.com/adsense"
          ),
        !0);
  }
  function Lq(a) {
    var b = document.getElementsByTagName("INS");
    for (var c = 0, d = b[c]; c < b.length; d = b[++c]) {
      var e = d;
      if (
        Hq(e) &&
        "reserved" !== e.dataset.adsbygoogleStatus &&
        (!a || d.id === a)
      )
        return d;
    }
    return null;
  }
  function Mq(a, b, c) {
    if (a && a.shift)
      for (var d = 20; 0 < a.length && 0 < d; ) {
        try {
          Nq(a.shift(), b, c);
        } catch (e) {
          setTimeout(function () {
            throw e;
          });
        }
        --d;
      }
  }
  function Oq() {
    var a = pd("INS");
    a.className = "adsbygoogle";
    a.className += " adsbygoogle-noablate";
    Dd(a, { display: "none" });
    return a;
  }
  function Pq(a, b) {
    var c = {};
    vd(gh, function (f, g) {
      !1 === a.enable_page_level_ads
        ? (c[g] = !1)
        : a.hasOwnProperty(g) && (c[g] = a[g]);
    });
    Ka(a.enable_page_level_ads) &&
      (c.page_level_pubvars = a.enable_page_level_ads);
    var d = Oq();
    Jd.body.appendChild(d);
    var e = {};
    e =
      ((e.google_reactive_ads_config = c),
      (e.google_ad_client = a.google_ad_client),
      e);
    e.google_pause_ad_requests = !!U(L).pause_ad_requests;
    Iq(d, e, b);
  }
  function Qq(a, b) {
    function c() {
      return Pq(a, b);
    }
    jh(x).wasPlaTagProcessed = !0;
    var d = x.document;
    if (d.body || "complete" === d.readyState || "interactive" === d.readyState)
      c();
    else {
      var e = Mc(Ak(191, c));
      Nc(d, "DOMContentLoaded", e);
      new x.MutationObserver(function (f, g) {
        d.body && (e(), g.disconnect());
      }).observe(d, { childList: !0, subtree: !0 });
    }
  }
  function Nq(a, b, c) {
    var d = {};
    zk(
      165,
      function () {
        return Rq(a, d, b, c);
      },
      function (e) {
        e.client = e.client || d.google_ad_client || a.google_ad_client;
        e.slotname = e.slotname || d.google_ad_slot;
        e.tag_origin = e.tag_origin || d.google_tag_origin;
      }
    );
  }
  function Sq(a) {
    delete a.google_checked_head;
    vd(a, function (b, c) {
      ij[c] ||
        (delete a[c],
        x.console.warn(
          "AdSense head tag doesn't support " +
            c.replace("google", "data").replace(/_/g, "-") +
            " attribute."
        ));
    });
  }
  function Tq(a, b) {
    var c =
      L.document.querySelector(
        'script[src*="/pagead/js/adsbygoogle.js?client="]:not([data-checked-head])'
      ) ||
      L.document.querySelector(
        'script[src*="/pagead/js/adsbygoogle.js"][data-ad-client]:not([data-checked-head])'
      );
    if (c) {
      c.setAttribute("data-checked-head", "true");
      var d = U(window);
      if (d.head_tag_slot_vars) Uq(c);
      else {
        var e = {};
        fq(c, e);
        Sq(e);
        var f = Sc(e);
        d.head_tag_slot_vars = f;
        c = { google_ad_client: e.google_ad_client, enable_page_level_ads: e };
        L.adsbygoogle || (L.adsbygoogle = []);
        d = L.adsbygoogle;
        d.loaded ? d.push(c) : d.splice && d.splice(0, 0, c);
        var g;
        e.google_adbreak_test ||
        ((null == (g = mc(b, em, 13, Ub)) ? 0 : H(g, 3)) && Q(Yh))
          ? Vq(f, a)
          : Aq(function () {
              Vq(f, a);
            });
      }
    }
  }
  function Uq(a) {
    var b = U(window).head_tag_slot_vars,
      c = a.getAttribute("src") || "";
    if (
      (a = ld(c, "client") || a.getAttribute("data-ad-client") || "") &&
      a !== b.google_ad_client
    )
      throw new T(
        "Warning: Do not add multiple property codes with AdSense tag to avoid seeing unexpected behavior. These codes were found on the page " +
          a +
          ", " +
          b.google_ad_client
      );
  }
  function Wq(a) {
    if ("object" === typeof a && null != a) {
      if ("string" === typeof a.type) return 2;
      if ("string" === typeof a.sound || "string" === typeof a.preloadAdBreaks)
        return 3;
    }
    return 0;
  }
  function Rq(a, b, c, d) {
    if (null == a) throw new T("push() called with no parameters.");
    Rb(d, fm, 14) && Xq(a, Yb(sm(d), 1), kc(d, 2));
    var e = Wq(a);
    if (0 !== e)
      (d = Km()),
        d.first_slotcar_request_processing_time ||
          ((d.first_slotcar_request_processing_time = Date.now()),
          (d.adsbygoogle_execution_start_time = Ua)),
        null == Dq
          ? (Yq(a), Eq.push(a))
          : 3 === e
          ? zk(787, function () {
              Dq.handleAdConfig(a);
            })
          : Ck(730, Dq.handleAdBreak(a));
    else {
      Ua = new Date().getTime();
      Up(c, d, Zq(a));
      $q();
      a: {
        if (void 0 != a.enable_page_level_ads) {
          if ("string" === typeof a.google_ad_client) {
            e = !0;
            break a;
          }
          throw new T("'google_ad_client' is missing from the tag config.");
        }
        e = !1;
      }
      if (e) ar(a, d);
      else if (
        ((e = a.params) &&
          vd(e, function (g, h) {
            b[h] = g;
          }),
        "js" === b.google_ad_output)
      )
        console.warn(
          "Ads with google_ad_output='js' have been deprecated and no longer work. Contact your AdSense account manager or switch to standard AdSense ads."
        );
      else {
        e = br(a.element);
        fq(e, b);
        c = U(x).head_tag_slot_vars || {};
        vd(c, function (g, h) {
          b.hasOwnProperty(h) || (b[h] = g);
        });
        if (e.hasAttribute("data-require-head") && !U(x).head_tag_slot_vars)
          throw new T(
            "AdSense head tag is missing. AdSense body tags don't work without the head tag. You can copy the head tag from your account on https://adsense.com."
          );
        if (!b.google_ad_client)
          throw new T("Ad client is missing from the slot.");
        var f = (c = 0 === (U(L).first_tag_on_page || 0) && en(b)) && fn(c);
        c && (f || (ar(c, d), (U(L).skip_next_reactive_tag = !0)), f && cr(c));
        0 === (U(L).first_tag_on_page || 0) && (U(L).first_tag_on_page = 2);
        b.google_pause_ad_requests = !!U(L).pause_ad_requests;
        Iq(e, b, d);
      }
    }
  }
  var dr = !1;
  function Xq(a, b, c) {
    dr ||
      ((dr = !0),
      (a = Zq(a) || qn(L)),
      Bk("predictive_abg", { a_c: a, p_c: b.join(), b_v: c }, 0.01));
  }
  function Zq(a) {
    return a.google_ad_client
      ? a.google_ad_client
      : (a = a.params) && a.google_ad_client
      ? a.google_ad_client
      : "";
  }
  function $q() {
    if (Q(Sh)) {
      var a = Hm(L);
      if (!(a = a && a.Ma)) {
        try {
          var b = L.localStorage;
        } catch (c) {
          b = null;
        }
        b = b ? dm(b) : null;
        a = !(b && cm(b) && b);
      }
      a || Im(L, 1);
    }
  }
  function cr(a) {
    Id(function () {
      jh(x).wasPlaTagProcessed || (x.adsbygoogle && x.adsbygoogle.push(a));
    });
  }
  function ar(a, b) {
    if (U(L).skip_next_reactive_tag) U(L).skip_next_reactive_tag = !1;
    else {
      0 === (U(L).first_tag_on_page || 0) && (U(L).first_tag_on_page = 1);
      if (a.tag_partner) {
        var c = a.tag_partner,
          d = U(x);
        d.tag_partners = d.tag_partners || [];
        d.tag_partners.push(c);
      }
      gn(a, b);
      Qq(a, b);
    }
  }
  function br(a) {
    if (a) {
      if (!Hq(a) && (a.id ? (a = Lq(a.id)) : (a = null), !a))
        throw new T("'element' has already been filled.");
      if (!("innerHTML" in a))
        throw new T("'element' is not a good DOM element.");
    } else if (((a = Lq()), !a))
      throw new T(
        "All ins elements in the DOM with class=adsbygoogle already have ads in them."
      );
    return a;
  }
  function er() {
    var a = new Sk(L),
      b = Q(di) ? new sq(L) : new Bq(L),
      c = Q(ci) ? new xq(L) : new Cq(L);
    Bk(
      "cmpMet",
      {
        tcfv1: L.__cmp ? 1 : 0,
        tcfv2: Tk(a) ? 1 : 0,
        usp: b.m() ? 1 : 0,
        fc: c.m() ? 1 : 0,
        ptt: 9,
      },
      0.001
    );
  }
  function fr(a) {
    Gk().S[Ik(26)] = !!Number(a);
  }
  function gr(a) {
    Number(a)
      ? (U(L).pause_ad_requests = !0)
      : ((U(L).pause_ad_requests = !1),
        (a = function () {
          if (!U(L).pause_ad_requests) {
            var b = void 0 === b ? {} : b;
            if ("function" === typeof window.CustomEvent)
              var c = new CustomEvent(
                "adsbygoogle-pub-unpause-ad-requests-event",
                b
              );
            else
              (c = document.createEvent("CustomEvent")),
                c.initCustomEvent(
                  "adsbygoogle-pub-unpause-ad-requests-event",
                  !!b.bubbles,
                  !!b.cancelable,
                  b.detail
                );
            L.dispatchEvent(c);
          }
        }),
        x.setTimeout(a, 0),
        x.setTimeout(a, 1e3));
  }
  function hr(a) {
    Bk("adsenseGfpKnob", { value: a, ptt: 9 }, 0.1);
    switch (a) {
      case 0:
      case 2:
        a = !0;
        break;
      case 1:
        a = !1;
        break;
      default:
        throw Error("Illegal value of cookieOptions: " + a);
    }
    L._gfp_a_ = a;
  }
  function ir(a) {
    a && a.call && "function" === typeof a && window.setTimeout(a, 0);
  }
  function Vq(a, b) {
    b = cn($c(b.Jb, Ii() ? { bust: Ii() } : {})).then(function (c) {
      null == Dq && (c.init(a), (Dq = c), jr());
    });
    Ck(723, b);
    r(b, "finally").call(b, function () {
      Eq.length = 0;
      Bk("slotcar", {
        event: "api_ld",
        time: Date.now() - Ua,
        time_pr: Date.now() - Gq,
      });
    });
  }
  function jr() {
    for (var a = v(Fq), b = a.next(); !b.done; b = a.next()) {
      var c = v(b.value);
      b = c.next().value;
      c = c.next().value;
      -1 !== c && (x.clearTimeout(c), Fq.delete(b));
    }
    a = {};
    for (b = 0; b < Eq.length; a = { ja: a.ja, ea: a.ea }, b++)
      Fq.has(b) ||
        ((a.ea = Eq[b]),
        (a.ja = Wq(a.ea)),
        zk(
          723,
          (function (d) {
            return function () {
              3 === d.ja
                ? Dq.handleAdConfig(d.ea)
                : 2 === d.ja && Ck(730, Dq.handleAdBreakBeforeReady(d.ea));
            };
          })(a)
        ));
  }
  function Yq(a) {
    var b = Eq.length;
    if (2 === Wq(a) && "preroll" === a.type && null != a.adBreakDone) {
      -1 === Gq && (Gq = Date.now());
      var c = x.setTimeout(function () {
        try {
          (0, a.adBreakDone)({
            breakType: "preroll",
            breakName: a.name,
            breakFormat: "preroll",
            breakStatus: "timeout",
          }),
            Fq.set(b, -1),
            Bk("slotcar", { event: "pr_to", source: "adsbygoogle" });
        } catch (d) {
          console.error(
            "[Ad Placement API] adBreakDone callback threw an error:",
            d instanceof Error ? d : Error(String(d))
          );
        }
      }, 1e3 * R(Zh));
      Fq.set(b, c);
    }
  }
  (function (a, b, c, d) {
    d = void 0 === d ? function () {} : d;
    wk.bb(Dk);
    zk(166, function () {
      var e = $o(b);
      Xo(kc(e, 2));
      vm(H(e, 6));
      d();
      Pd(16, [1, e.toJSON()]);
      var f = Rd(Qd(L)) || L,
        g = c(Yo({ mb: a, Fb: kc(e, 2) }), e);
      zm(f, e);
      io(f, e, null === L.document.currentScript ? 1 : An(g.Lb));
      Ck(1086, xn());
      if (!Za() || 0 <= Wa(bb(), 11)) {
        yk(Q(bi));
        dq(e);
        Ql();
        try {
          lp();
        } catch (p) {}
        cq();
        Tq(g, e);
        f = window;
        var h = f.adsbygoogle;
        if (!h || !h.loaded) {
          Bk(
            "new_abg_tag",
            { value: "" + H(e, 16), host_v: "" + H(e, 22), frequency: 0.01 },
            0.01
          );
          er();
          var k = {
            push: function (p) {
              Nq(p, g, e);
            },
            loaded: !0,
          };
          try {
            Object.defineProperty(k, "requestNonPersonalizedAds", { set: fr }),
              Object.defineProperty(k, "pauseAdRequests", { set: gr }),
              Object.defineProperty(k, "cookieOptions", { set: hr }),
              Object.defineProperty(k, "onload", { set: ir });
          } catch (p) {}
          if (h)
            for (
              var l = v([
                  "requestNonPersonalizedAds",
                  "pauseAdRequests",
                  "cookieOptions",
                ]),
                m = l.next();
              !m.done;
              m = l.next()
            )
              (m = m.value), void 0 !== h[m] && (k[m] = h[m]);
          "_gfp_a_" in window || (window._gfp_a_ = !0);
          Mq(h, g, e);
          f.adsbygoogle = k;
          h && (k.onload = h.onload);
          (f = Zp(g)) && document.documentElement.appendChild(f);
          f = zq();
          Bk(
            "modern_js",
            { fy: hc(e, 1), supports: String(f.supports), c: 2012, e: f.error },
            0.01
          );
        }
      }
    });
  })("m202301170101", Zo, function (a, b) {
    var c = 2012 < hc(b, 1) ? "_fy" + hc(b, 1) : "",
      d = kc(b, 3),
      e = kc(b, 2);
    b = Sd(iq, a, c);
    d = Sd(jq, e, d);
    return {
      Jb: b,
      Hb: Sd(kq, a, c),
      Gb: Sd(lq, a, c),
      qc: Sd(mq, a, c),
      Nb: d,
      Lb: /^(?:https?:)?\/\/(?:pagead2\.googlesyndication\.com|securepubads\.g\.doubleclick\.net)\/pagead\/(?:js\/)?(?:show_ads|adsbygoogle)\.js(?:[?#].*)?$/,
    };
  });
}.call(
  this,
  '[2012,"r20230201","r20190131",null,null,null,null,".google.cn",null,null,null,[[[1082,null,null,[1]],[1214,null,null,[1]],[null,1130,null,[null,100]],[null,1126,null,[null,10000]],[null,1032,null,[null,200],[[[12,null,null,null,4,null,"Android",["navigator.userAgent"]],[null,500]]]],[null,1224,null,[null,0.01]],[null,1159,null,[null,500]],[1217,null,null,[1]],[1122,null,null,[1]],[1218,null,null,[1]],[1207,null,null,[1]],[null,66,null,[null,-1]],[null,65,null,[null,-1]],[1205,null,null,[1]],[1167,null,null,[1]],[1129,null,null,[1]],[null,1169,null,[null,61440]],[1171,null,null,[1]],[1201,null,null,[1]],[1199,null,null,[1]],[1161,null,null,[1]],[null,1072,null,[null,0.75]],[1101,null,null,[1]],[null,1168,null,[null,61440]],[1198,null,null,[1]],[1206,null,null,[1]],[1219,null,null,[1]],[1190,null,null,[1]],[null,1085,null,[null,5]],[null,63,null,[null,30]],[null,1080,null,[null,5]],[null,null,null,[null,null,null,["2"]],null,10003],[1086,null,null,[1]],[63682,null,null,[]],[null,1027,null,[null,10]],[null,57,null,[null,120]],[null,1079,null,[null,5]],[null,1050,null,[null,30]],[null,58,null,[null,120]],[1033,null,null,[1]],[10002,null,null,[1]],[null,null,null,[null,null,null,["Az6AfRvI8mo7yiW5fLfj04W21t0ig6aMsGYpIqMTaX60H+b0DkO1uDr+7BrzMcimWzv/X7SXR8jI+uvbV0IJlwYAAACFeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjgwNjUyNzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==","A+USTya+tNvDPaxUgJooz+LaVk5hPoAxpLvSxjogX4Mk8awCTQ9iop6zJ9d5ldgU7WmHqBlnQB41LHHRFxoaBwoAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjgwNjUyNzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==","A7FovoGr67TUBYbnY+Z0IKoJbbmRmB8fCyirUGHavNDtD91CiGyHHSA2hDG9r9T3NjUKFi6egL3RbgTwhhcVDwUAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjgwNjUyNzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ=="]],null,1934],[1957,null,null,[1]],[1971,null,null,[1]],[493422261,null,null,[1]],[null,1972,null,[]],[null,1142,null,[null,8]],[null,501545963,null,[null,1]],[null,1195,null,[null,1]],[null,1119,null,[null,300]],[null,1193,null,[null,100]],[505942137,null,null,[1]],[500657056,null,null,[1]],[null,501545962,null,[null,1]],[null,495583959,null,[null,-1]],[null,45388309,null,[null,-1]],[null,1114,null,[null,1]],[null,1116,null,[null,300]],[null,1117,null,[null,100]],[null,1110,null,[null,5]],[null,1111,null,[null,5]],[null,1112,null,[null,5]],[null,1113,null,[null,5]],[null,1108,null,[null,1000]],[1203,null,null,[1]],[45388146,null,null,[1]],[null,1115,null,[null,-1]],[501545959,null,null,[1]],[null,1194,null,[null,1]],[469675169,null,null,[1]],[null,469675170,null,[null,30000]],[392736476,null,null,[]],[null,null,null,[],null,1932],[432938498,null,null,[]]],[[10,[[null,[[31071642],[31071643,[[1216,null,null,[1]]]]],null,72],[1,[[42531513],[42531514,[[316,null,null,[1]]]]]],[1,[[42531644],[42531645,[[368,null,null,[1]]]],[42531646,[[369,null,null,[1]],[368,null,null,[1]]]]]],[10,[[42531705],[42531706]]],[1,[[44719338],[44719339,[[334,null,null,[1]],[null,54,null,[null,100]],[null,66,null,[null,10]],[null,65,null,[null,1000]]]]]],[10,[[44767166],[44767167]]],[1,[[44782466],[44782467,[[1160,null,null,[1]]]],[44782468,[[1226,null,null,[1]],[1160,null,null,[1]]]]]],[null,[[44755592],[44755593],[44755594],[44755653],[44777509,[[1200,null,null,[1]]]]],null,51],[null,[[31071869],[31071870,[[1215,null,null,[1]]]]],null,72],[10,[[31071258],[31071259]]],[1000,[[31071721,[[null,null,14,[null,null,"31071721"]]],[6,null,null,null,6,null,"31071721"]],[31071722,[[null,null,14,[null,null,"31071722"]]],[6,null,null,null,6,null,"31071722"]]],[4,null,55],63],[100,[[31071755],[31071756,[[1222,null,null,[1]]]]]],[1000,[[31071765,[[null,null,14,[null,null,"31071765"]]],[6,null,null,null,6,null,"31071765"]],[31071766,[[null,null,14,[null,null,"31071766"]]],[6,null,null,null,6,null,"31071766"]]],[4,null,55],63],[1000,[[31071811,[[null,null,14,[null,null,"31071811"]]],[6,null,null,null,6,null,"31071811"]],[31071812,[[null,null,14,[null,null,"31071812"]]],[6,null,null,null,6,null,"31071812"]]],[4,null,55],63],[1000,[[31071854,[[null,null,14,[null,null,"31071854"]]],[6,null,null,null,6,null,"31071854"]],[31071855,[[null,null,14,[null,null,"31071855"]]],[6,null,null,null,6,null,"31071855"]]],[4,null,55],63],[1000,[[31071886,[[null,null,14,[null,null,"31071886"]]],[6,null,null,null,6,null,"31071886"]],[31071887,[[null,null,14,[null,null,"31071887"]]],[6,null,null,null,6,null,"31071887"]]],[4,null,55],63],[1000,[[31071926,[[null,null,14,[null,null,"31071926"]]],[6,null,null,null,6,null,"31071926"]],[31071927,[[null,null,14,[null,null,"31071927"]]],[6,null,null,null,6,null,"31071927"]],[31071928,[[null,null,14,[null,null,"31071928"]]],[6,null,null,null,6,null,"31071928"]],[31071929,[[null,null,14,[null,null,"31071929"]]],[6,null,null,null,6,null,"31071929"]],[31071930,[[null,null,14,[null,null,"31071930"]]],[6,null,null,null,6,null,"31071930"]],[31071931,[[null,null,14,[null,null,"31071931"]]],[6,null,null,null,6,null,"31071931"]]],[4,null,55],63],[100,[[31071947],[31071948,[[1225,null,null,[1]]]]]],[1000,[[31072137,[[null,null,14,[null,null,"31072137"]]],[6,null,null,null,6,null,"31072137"]],[31072138,[[null,null,14,[null,null,"31072138"]]],[6,null,null,null,6,null,"31072138"]],[31072139,[[null,null,14,[null,null,"31072139"]]],[6,null,null,null,6,null,"31072139"]],[31072140,[[null,null,14,[null,null,"31072140"]]],[6,null,null,null,6,null,"31072140"]]],[4,null,55],63],[10,[[44772268],[44772269,[[1185,null,null,[1]]]]]],[50,[[44774292],[44774606,[[1147,null,null,[1]]]]],null,54],[1,[[44774293,[[1147,null,null,[1]]]],[44774605,[[1147,null,null,[1]]]],[44776415]],null,54],[1,[[44779343],[44779344,[[1147,null,null,[1]]]]],null,54],[200,[[44779793],[44779794,[[63682,null,null,[1]]]]],null,51],[50,[[31067422],[31067423,[[null,1032,null,[]]]],[44776074],[44776369],[44777421],[44779109],[44779906]],[3,[[4,null,8,null,null,null,null,["gmaSdk.getQueryInfo"]],[4,null,8,null,null,null,null,["webkit.messageHandlers.getGmaQueryInfo.postMessage"]],[4,null,8,null,null,null,null,["webkit.messageHandlers.getGmaSig.postMessage"]]]],69],[10,[[44776368],[44779257]],[3,[[4,null,8,null,null,null,null,["gmaSdk.getQueryInfo"]],[4,null,8,null,null,null,null,["webkit.messageHandlers.getGmaQueryInfo.postMessage"]],[4,null,8,null,null,null,null,["webkit.messageHandlers.getGmaSig.postMessage"]]]],69]]],[17,[[null,[[44773745],[44773746],[44773747]],null,null,null,null,31,null,null,113],[1,[[31071081,[[null,1103,null,[null,31071081]],[1121,null,null,[1]]]],[31071082,[[1120,null,null,[1]],[null,1103,null,[null,31071082]],[null,1114,null,[null,0.4]],[null,1108,null,[null,1000]],[1121,null,null,[1]]]]],[4,null,55],null,null,null,null,80,null,115,1],[10,[[31071260]]],[10,[[31071261],[31071262],[31071263],[31071264]],null,null,null,44,22],[10,[[31071265],[31071266]],null,null,null,44,null,500],[10,[[31071267]],null,null,null,44,null,900],[10,[[31071268],[31071269]],null,null,null,null,null,null,null,101],[10,[[31072013,[[null,1103,null,[null,31072013]]]],[31072014,[[1120,null,null,[1]],[null,1195,null,[null,5]],[null,1103,null,[null,31072014]],[null,1114,null,[null,0.4]],[null,1108,null,[null,1000]],[491815314,null,null,[1]],[null,1194,null,[null,2]]]],[31072015,[[1162,null,null,[1]],[1120,null,null,[1]],[null,1158,null,[null,45]],[null,1157,null,[null,400]],[null,1103,null,[null,31072015]],[null,1114,null,[null,-1]],[null,1116,null,[null,50]],[null,1108,null,[null,1000]],[491815314,null,null,[1]],[480632076,null,null,[1]],[472491850,null,null,[1]]]],[31072016,[[1162,null,null,[1]],[1120,null,null,[1]],[null,1158,null,[null,45]],[null,1157,null,[null,400]],[494741144,null,null,[1]],[null,1195,null,[null,5]],[null,1103,null,[null,31072016]],[null,1114,null,[null,0.4]],[null,1116,null,[null,300]],[null,1108,null,[null,1000]],[491815314,null,null,[1]],[480632076,null,null,[1]],[null,1194,null,[null,2]],[472491850,null,null,[1]]]]],[4,null,55],null,null,null,null,770,null,115,1],[1,[[31072068,[[1120,null,null,[1]],[null,1195,null,[null,5]],[null,1103,null,[null,31072068]],[null,1114,null,[null,0.4]],[null,1108,null,[null,1000]],[null,1194,null,[null,2]]]],[31072069,[[1120,null,null,[1]],[null,1195,null,[null,5]],[null,1103,null,[null,31072069]],[null,1114,null,[null,0.4]],[null,1108,null,[null,1000]],[null,1194,null,[null,2]],[471262996,null,null,[1]]]]],[4,null,55],null,null,null,null,810,null,115,1],[10,[[44778613,[[null,1103,null,[null,44778613]]]],[44778614,[[1162,null,null,[1]],[1120,null,null,[1]],[null,1158,null,[null,45]],[null,1157,null,[null,400]],[null,1103,null,[null,44778614]],[null,1114,null,[null,-1]],[null,1116,null,[null,50]],[null,1108,null,[null,1000]],[1203,null,null,[1]],[480632076,null,null,[1]],[469675169,null,null,[1]],[472491850,null,null,[1]]]]],[4,null,55],null,null,null,null,20,null,115,1],[40,[[44779076,[[null,1103,null,[null,44779076]]]],[44779077,[[1120,null,null,[1]],[null,1195,null,[null,5]],[null,1103,null,[null,44779077]],[null,1114,null,[null,0.4]],[null,1108,null,[null,1000]],[null,1194,null,[null,2]]]]],[4,null,55],null,null,null,null,430,null,115,1],[10,[[44781381,[[1162,null,null,[1]],[1120,null,null,[1]],[null,1158,null,[null,45]],[null,1157,null,[null,400]],[null,1103,null,[null,44781381]],[null,1114,null,[null,-1]],[null,1116,null,[null,50]],[null,1108,null,[null,1000]],[1203,null,null,[1]],[480632076,null,null,[1]],[469675169,null,null,[1]],[472491850,null,null,[1]]]],[44781382,[[1162,null,null,[1]],[1120,null,null,[1]],[null,1158,null,[null,45]],[null,1157,null,[null,400]],[null,1103,null,[null,44781382]],[45388034,null,null,[1]],[null,45388309,null,[null,400]],[null,1114,null,[null,-1]],[null,1116,null,[null,50]],[null,1108,null,[null,1000]],[1203,null,null,[1]],[480632076,null,null,[1]],[469675169,null,null,[1]],[472491850,null,null,[1]]]],[44781383,[[1162,null,null,[1]],[1120,null,null,[1]],[null,1158,null,[null,45]],[null,1157,null,[null,400]],[null,1103,null,[null,44781383]],[45388034,null,null,[1]],[null,45388309,null,[null,800]],[null,1114,null,[null,-1]],[null,1116,null,[null,50]],[null,1108,null,[null,1000]],[1203,null,null,[1]],[480632076,null,null,[1]],[469675169,null,null,[1]],[472491850,null,null,[1]]]]],[4,null,55],null,null,null,null,630,null,115,1],[10,[[44781930,[[1120,null,null,[1]],[null,1195,null,[null,5]],[null,1103,null,[null,44781930]],[null,1114,null,[null,0.4]],[null,1108,null,[null,1000]],[null,1194,null,[null,2]]]],[44781931,[[1120,null,null,[1]],[null,1195,null,[null,5]],[null,1103,null,[null,44781931]],[null,1114,null,[null,0.4]],[null,1108,null,[null,1000]],[null,1194,null,[null,2]],[500169372,null,null,[1]]]]],[4,null,55],null,null,null,null,750,null,115,1]]],[11,[[50,[[44782816],[44782817],[44782818]],null,48],[10,[[44783239],[44783240]],null,48],[1000,[[31071235,[[483374575,null,null,[1]]]]],[4,null,8,null,null,null,null,["sharedStorage"]]]]],[12,[[20,[[21065724],[21065725,[[203,null,null,[1]]]]],[4,null,9,null,null,null,null,["LayoutShift"]],71],[10,[[31061690],[31061691,[[83,null,null,[1]],[84,null,null,[1]]]]],null,61],[50,[[31071662],[31071663,[[1974,null,null,[1]]]]]],[10,[[44769661],[44769662,[[1973,null,null,[1]]]]]]]],[13,[[500,[[31061692],[31061693,[[77,null,null,[1]],[78,null,null,[1]],[85,null,null,[1]],[80,null,null,[1]],[76,null,null,[1]]]]],[4,null,6,null,null,null,null,["31061691"]]],[1000,[[31067146,null,[4,null,9,null,null,null,null,["document.browsingTopics"]]]],[12,null,null,null,4,null,"Chrome/((?!100)\\\\d{3,})",["navigator.userAgent"]]],[1000,[[31067147,null,[2,[[4,null,9,null,null,null,null,["navigator.runAdAuction"]],[4,null,9,null,null,null,null,["navigator.joinAdInterestGroup"]]]]]],[12,null,null,null,4,null,"Chrome/((?!100)\\\\d{3,})",["navigator.userAgent"]]],[1000,[[31067148,null,[4,null,69,null,null,null,null,["attribution-reporting"]]]],[12,null,null,null,4,null,"Chrome/((?!100)\\\\d{3,})",["navigator.userAgent"]]],[1000,[[31067672,null,[2,[[4,null,69,null,null,null,null,["browsing-topics"]],[1,[[4,null,70,null,null,null,null,["browsing-topics"]]]]]]]],[12,null,null,null,4,null,"Chrome/((?!100)\\\\d{3,})",["navigator.userAgent"]]],[1000,[[31067673,null,[2,[[4,null,69,null,null,null,null,["join-ad-interest-group"]],[1,[[4,null,70,null,null,null,null,["join-ad-interest-group"]]]]]]]],[12,null,null,null,4,null,"Chrome/((?!100)\\\\d{3,})",["navigator.userAgent"]]],[1000,[[31067674,null,[2,[[4,null,69,null,null,null,null,["run-ad-auction"]],[1,[[4,null,70,null,null,null,null,["run-ad-auction"]]]]]]]],[12,null,null,null,4,null,"Chrome/((?!100)\\\\d{3,})",["navigator.userAgent"]]],[1000,[[31067675,null,[2,[[4,null,69,null,null,null,null,["attribution-reporting"]],[1,[[4,null,70,null,null,null,null,["attribution-reporting"]]]]]]]],[12,null,null,null,4,null,"Chrome/((?!100)\\\\d{3,})",["navigator.userAgent"]]],[1000,[[31068556,null,[4,null,8,null,null,null,null,["sharedStorage"]]]],[12,null,null,null,4,null,"Chrome/((?!100)\\\\d{3,})",["navigator.userAgent"]]],[1000,[[31068557,null,[2,[[4,null,69,null,null,null,null,["shared-storage"]],[1,[[4,null,70,null,null,null,null,["shared-storage"]]]]]]]],[12,null,null,null,4,null,"Chrome/((?!100)\\\\d{3,})",["navigator.userAgent"]]],[null,[[31070383,null,[4,null,27,null,null,null,null,["crossOriginIsolated"]]],[31070384,[[null,null,null,[null,null,null,["A/6fvn8/Gtanoa1JImBxbvhuYBg6saTOvUwnxxrjfqYKVr6FhYuq735gNAS9yiA9eZCfxy6DNpj7b5RvVydt3AAAAACKeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiQW5vbnltb3VzSWZyYW1lT3JpZ2luVHJpYWwiLCJleHBpcnkiOjE2NzU4MTQzOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9","A+U9qN2zW5GTLxw8s2+dVNTkJno6E+N/ccDejxXyQWvhjPxM7ZW2kkup3QdRQA3PNcdJmf7fmSYjbhYI9IfoTwwAAACQeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiQW5vbnltb3VzSWZyYW1lT3JpZ2luVHJpYWwiLCJleHBpcnkiOjE2NzU4MTQzOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9","A/nrjb/iPi/6otfK9jaRrKeitC60ZEvSBV2LdZ9fK9wYY6avQ4BArkhirmauwsEv8oXTREo3giK6JoHNOyETTwsAAACQeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiQW5vbnltb3VzSWZyYW1lT3JpZ2luVHJpYWwiLCJleHBpcnkiOjE2NzU4MTQzOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9"]],null,472572701],[439828594,null,null,[1]]],[4,null,27,null,null,null,null,["crossOriginIsolated"]]]],[2,[[6,null,null,3,null,0],[12,null,null,null,4,null,"Chrome/((?!10[012345])\\\\d{3,})",["navigator.userAgent"]]]],70],[null,[[31070594],[31070595,[[null,null,null,[null,null,null,["A/6fvn8/Gtanoa1JImBxbvhuYBg6saTOvUwnxxrjfqYKVr6FhYuq735gNAS9yiA9eZCfxy6DNpj7b5RvVydt3AAAAACKeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiQW5vbnltb3VzSWZyYW1lT3JpZ2luVHJpYWwiLCJleHBpcnkiOjE2NzU4MTQzOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9","A+U9qN2zW5GTLxw8s2+dVNTkJno6E+N/ccDejxXyQWvhjPxM7ZW2kkup3QdRQA3PNcdJmf7fmSYjbhYI9IfoTwwAAACQeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiQW5vbnltb3VzSWZyYW1lT3JpZ2luVHJpYWwiLCJleHBpcnkiOjE2NzU4MTQzOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9","A/nrjb/iPi/6otfK9jaRrKeitC60ZEvSBV2LdZ9fK9wYY6avQ4BArkhirmauwsEv8oXTREo3giK6JoHNOyETTwsAAACQeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiQW5vbnltb3VzSWZyYW1lT3JpZ2luVHJpYWwiLCJleHBpcnkiOjE2NzU4MTQzOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9"]],null,472572701],[439828594,null,null,[1]],[483962503,null,null,[1]]]]],[2,[[6,null,null,3,null,0],[12,null,null,null,4,null,"Chrome/((?!10[012345])\\\\d{3,})",["navigator.userAgent"]]]],70],[null,[[44768158,null,[4,null,70,null,null,null,null,["attribution-reporting"]]],[44768159,null,[4,null,70,null,null,null,null,["attribution-reporting"]]]]],[50,[[44776500,null,[4,null,70,null,null,null,null,["attribution-reporting"]]],[44776501,null,[4,null,70,null,null,null,null,["attribution-reporting"]]]]],[50,[[44776502,null,[4,null,70,null,null,null,null,["attribution-reporting"]]],[44776503,null,[4,null,70,null,null,null,null,["attribution-reporting"]]]]]]],[20,[[1000,[[31070530,null,[4,null,27,null,null,null,null,["crossOriginIsolated"]]]],[2,[[6,null,null,3,null,0],[12,null,null,null,4,null,"Chrome/((?!10[012345])\\\\d{3,})",["navigator.userAgent"]]]]],[1000,[[31070531,null,[2,[[4,null,27,null,null,null,null,["crossOriginIsolated"]],[4,null,8,null,null,null,null,["credentialless"]]]]]],[2,[[6,null,null,3,null,0],[12,null,null,null,4,null,"Chrome/((?!10[012345])\\\\d{3,})",["navigator.userAgent"]]]]],[1000,[[31070532,null,[4,null,9,null,null,null,null,["SharedArrayBuffer"]]]],[2,[[6,null,null,3,null,0],[12,null,null,null,4,null,"Chrome/((?!10[012345])\\\\d{3,})",["navigator.userAgent"]]]]]]]],null,null,[null,"1000",1,"1000"]],[null,[]],null,"31071765",1,"ptable.com",405707100,[44759876,44759927,44759837]]'
));
