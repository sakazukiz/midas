(function() {
    "use strict";
    var te = {
            1281: function(_, m) {
                Object.defineProperty(m, "__esModule", {
                    value: !0
                });

                function l(y, b) {
                    var f = Object.prototype.toString.call(b).slice(8, -1);
                    return b != null && f === y
                }
                m.default = l
            },
            130: function(_, m, l) {
                var y;
                y = {
                    value: !0
                };
                var b = l(7504),
                    f = l(9166),
                    c = l(9667),
                    w = l(5279);

                function P(U, S) {
                    if (!(0, w.default)(U)) return S;
                    var O = (0, c.default)(U);
                    if (O.length === 0) return S;
                    S = (0, f.default)(O, S);
                    var C = (0, b.default)(U);
                    return S += /(\?|&)$/.test(S) ? "" + C : /\?/.test(S) ? "&" + C : "?" + C, S
                }
                m.Z = P
            },
            9667: function(_, m, l) {
                Object.defineProperty(m, "__esModule", {
                    value: !0
                });
                var y = l(8807),
                    b = l(5279);

                function f(c) {
                    if (!(0, b.default)(c)) return [];
                    var w = [];
                    return (0, y.default)(c, function(P, U) {
                        w.push(U)
                    }), w
                }
                m.default = f
            },
            4986: function(_, m) {
                var l;
                l = {
                    value: !0
                };
                var y = {
                    get: function(b) {
                        var f = document.cookie.match(new RegExp("(?:^|;\\s)" + b + "=(.*?)(?:;\\s|$)"));
                        return f ? f[1] : ""
                    },
                    set: function(b, f, c) {
                        c === void 0 && (c = {});
                        var w = new Date,
                            P = c.domain === "*" ? "" : c.domain || "pay.qq.com",
                            U = c.path || "/",
                            S = 31536e7,
                            O = c.time || S;
                        w.setTime(w.getTime() + O);
                        var C = b + "=" + f + "; path=" + U;
                        P && (C += "; domain=" + P), !c.ignoreTime && (C += "; expires=" + w.toUTCString()), document.cookie = C
                    },
                    del: function(b, f) {
                        f === void 0 && (f = {}), f.time = -new Date, y.set(b, "", f)
                    }
                };
                m.Z = y
            },
            9166: function(_, m, l) {
                Object.defineProperty(m, "__esModule", {
                    value: !0
                });
                var y = l(8807);

                function b(f, c) {
                    return c === void 0 && (c = location.href), f instanceof Array || (f = [f]), c = c.replace(/[\r\n]/g, ""), (0, y.default)(f, function(w) {
                        c = c.replace(new RegExp("(?:&" + w + "=[^&]*)", "g"), ""), c = c.replace(new RegExp("(?:\\?" + w + "=[^&]*&?)", "g"), "?")
                    }), c
                }
                m.default = b
            },
            8807: function(_, m, l) {
                Object.defineProperty(m, "__esModule", {
                    value: !0
                });
                var y = l(6961);

                function b(f, c) {
                    var w, P = 0;
                    if ((0, y.default)(f)) {
                        var U = f.length;
                        for (w = f[0]; P < U && c.call(w, w, P, f) !== !1; w = f[++P]);
                    } else
                        for (var S in f)
                            if (c.call(f[S], f[S], S, f) === !1) break;
                    return f
                }
                m.default = b
            },
            5974: function(_, m, l) {
                var y;
                y = {
                    value: !0
                };
                var b = l(7411);

                function f(c, w) {
                    return (0, b.default)(w)[c]
                }
                m.Z = f
            },
            7411: function(_, m) {
                Object.defineProperty(m, "__esModule", {
                    value: !0
                });
                var l = {};

                function y(b, f, c) {
                    b === void 0 && (b = location.href), f === void 0 && (f = "&"), c === void 0 && (c = "=");
                    var w = b.replace(/.+?\?/, "").replace(/#.*/, ""),
                        P = w.split(f);
                    return l[w] || (l[w] = P.reduce(function(U, S) {
                        var O = S.indexOf(c);
                        if (O > -1) {
                            var C = S.substr(0, O);
                            if (C) {
                                var F = S.substr(O + 1);
                                try {
                                    U[C] = decodeURIComponent(F)
                                } catch (A) {
                                    U[C] = F
                                }
                            }
                        }
                        return U
                    }, {})), l[w]
                }
                m.default = y
            },
            6961: function(_, m, l) {
                Object.defineProperty(m, "__esModule", {
                    value: !0
                });
                var y = l(1281);

                function b(f) {
                    return (0, y.default)("Array", f)
                }
                m.default = b
            },
            9837: function(_, m, l) {
                Object.defineProperty(m, "__esModule", {
                    value: !0
                });
                var y = l(1281);

                function b(f) {
                    return (0, y.default)("Function", f)
                }
                m.default = b
            },
            5279: function(_, m, l) {
                Object.defineProperty(m, "__esModule", {
                    value: !0
                });
                var y = l(1281);

                function b(f) {
                    return (0, y.default)("Object", f) && f !== null
                }
                m.default = b
            },
            5926: function(_, m, l) {
                var y;
                y = {
                    value: !0
                };
                var b = l(9345);

                function f(c, w, P, U) {
                    var S = document.getElementsByTagName("head")[0],
                        O = document.createElement("script"),
                        C = null,
                        F = function() {
                            N(), (0, b.default)(w, !0)
                        },
                        A = function() {
                            N(), (0, b.default)(w, !1)
                        },
                        N = function() {
                            if (!!O) {
                                try {
                                    O.src = ""
                                } catch (j) {}
                                O.removeEventListener("load", F), O.removeEventListener("error", A), S.removeChild(O), O = null, C && (clearTimeout(C), C = null)
                            }
                        };
                    return O.addEventListener("load", F), O.addEventListener("error", A), O.charset = P || "utf-8", O.src = c, S.insertBefore(O, S.firstChild), U && (C = window.setTimeout(function() {
                        N(), (0, b.default)(w, null)
                    }, U * 1e3)), O
                }
                m.Z = f
            },
            2564: function(_, m, l) {
                var y;
                y = {
                    value: !0
                };
                var b = l(8807),
                    f = l(5279);

                function c(w, P) {
                    if (!(0, f.default)(w)) return w;
                    var U = {};
                    return (0, b.default)(w, function(S, O) {
                        U[O] = P(S, O, w)
                    }), U
                }
                m.Z = c
            },
            9345: function(_, m, l) {
                Object.defineProperty(m, "__esModule", {
                    value: !0
                });
                var y = l(655),
                    b = l(6961),
                    f = l(9837);

                function c(w) {
                    for (var P = [], U = 1; U < arguments.length; U++) P[U - 1] = arguments[U];
                    return (0, f.default)(w) ? (0, b.default)(P[0]) ? w.call.apply(w, (0, y.__spreadArray)([null], P[0], !1)) : w.call.apply(w, (0, y.__spreadArray)([null], P, !1)) : null
                }
                m.default = c
            },
            7504: function(_, m, l) {
                Object.defineProperty(m, "__esModule", {
                    value: !0
                });
                var y = l(5279);

                function b(f, c) {
                    if (c === void 0 && (c = !0), !(0, y.default)(f)) return "";
                    var w = [];
                    for (var P in f)
                        if (Object.prototype.hasOwnProperty.call(f, P) && typeof f[P] != "undefined" && f[P] !== null) {
                            var U = c ? encodeURIComponent(P) : P,
                                S = c ? encodeURIComponent(f[P]) : f[P];
                            w.push(U + "=" + S)
                        } return w.join("&")
                }
                m.default = b
            },
            655: function(_, m, l) {
                l.r(m), l.d(m, {
                    __extends: function() {
                        return b
                    },
                    __assign: function() {
                        return f
                    },
                    __rest: function() {
                        return c
                    },
                    __decorate: function() {
                        return w
                    },
                    __param: function() {
                        return P
                    },
                    __metadata: function() {
                        return U
                    },
                    __awaiter: function() {
                        return S
                    },
                    __generator: function() {
                        return O
                    },
                    __createBinding: function() {
                        return C
                    },
                    __exportStar: function() {
                        return F
                    },
                    __values: function() {
                        return A
                    },
                    __read: function() {
                        return N
                    },
                    __spread: function() {
                        return j
                    },
                    __spreadArrays: function() {
                        return $
                    },
                    __spreadArray: function() {
                        return K
                    },
                    __await: function() {
                        return Z
                    },
                    __asyncGenerator: function() {
                        return z
                    },
                    __asyncDelegator: function() {
                        return ie
                    },
                    __asyncValues: function() {
                        return ae
                    },
                    __makeTemplateObject: function() {
                        return oe
                    },
                    __importStar: function() {
                        return se
                    },
                    __importDefault: function() {
                        return re
                    },
                    __classPrivateFieldGet: function() {
                        return ue
                    },
                    __classPrivateFieldSet: function() {
                        return le
                    }
                });
                /*! *****************************************************************************
                Copyright (c) Microsoft Corporation.

                Permission to use, copy, modify, and/or distribute this software for any
                purpose with or without fee is hereby granted.

                THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
                REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
                AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
                INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
                LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
                OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
                PERFORMANCE OF THIS SOFTWARE.
                ***************************************************************************** */
                var y = function(a, s) {
                    return y = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(u, p) {
                        u.__proto__ = p
                    } || function(u, p) {
                        for (var k in p) Object.prototype.hasOwnProperty.call(p, k) && (u[k] = p[k])
                    }, y(a, s)
                };

                function b(a, s) {
                    if (typeof s != "function" && s !== null) throw new TypeError("Class extends value " + String(s) + " is not a constructor or null");
                    y(a, s);

                    function u() {
                        this.constructor = a
                    }
                    a.prototype = s === null ? Object.create(s) : (u.prototype = s.prototype, new u)
                }
                var f = function() {
                    return f = Object.assign || function(s) {
                        for (var u, p = 1, k = arguments.length; p < k; p++) {
                            u = arguments[p];
                            for (var v in u) Object.prototype.hasOwnProperty.call(u, v) && (s[v] = u[v])
                        }
                        return s
                    }, f.apply(this, arguments)
                };

                function c(a, s) {
                    var u = {};
                    for (var p in a) Object.prototype.hasOwnProperty.call(a, p) && s.indexOf(p) < 0 && (u[p] = a[p]);
                    if (a != null && typeof Object.getOwnPropertySymbols == "function")
                        for (var k = 0, p = Object.getOwnPropertySymbols(a); k < p.length; k++) s.indexOf(p[k]) < 0 && Object.prototype.propertyIsEnumerable.call(a, p[k]) && (u[p[k]] = a[p[k]]);
                    return u
                }

                function w(a, s, u, p) {
                    var k = arguments.length,
                        v = k < 3 ? s : p === null ? p = Object.getOwnPropertyDescriptor(s, u) : p,
                        x;
                    if (typeof Reflect == "object" && typeof Reflect.decorate == "function") v = Reflect.decorate(a, s, u, p);
                    else
                        for (var o = a.length - 1; o >= 0; o--)(x = a[o]) && (v = (k < 3 ? x(v) : k > 3 ? x(s, u, v) : x(s, u)) || v);
                    return k > 3 && v && Object.defineProperty(s, u, v), v
                }

                function P(a, s) {
                    return function(u, p) {
                        s(u, p, a)
                    }
                }

                function U(a, s) {
                    if (typeof Reflect == "object" && typeof Reflect.metadata == "function") return Reflect.metadata(a, s)
                }

                function S(a, s, u, p) {
                    function k(v) {
                        return v instanceof u ? v : new u(function(x) {
                            x(v)
                        })
                    }
                    return new(u || (u = Promise))(function(v, x) {
                        function o(n) {
                            try {
                                t(p.next(n))
                            } catch (i) {
                                x(i)
                            }
                        }

                        function e(n) {
                            try {
                                t(p.throw(n))
                            } catch (i) {
                                x(i)
                            }
                        }

                        function t(n) {
                            n.done ? v(n.value) : k(n.value).then(o, e)
                        }
                        t((p = p.apply(a, s || [])).next())
                    })
                }

                function O(a, s) {
                    var u = {
                            label: 0,
                            sent: function() {
                                if (v[0] & 1) throw v[1];
                                return v[1]
                            },
                            trys: [],
                            ops: []
                        },
                        p, k, v, x;
                    return x = {
                        next: o(0),
                        throw: o(1),
                        return: o(2)
                    }, typeof Symbol == "function" && (x[Symbol.iterator] = function() {
                        return this
                    }), x;

                    function o(t) {
                        return function(n) {
                            return e([t, n])
                        }
                    }

                    function e(t) {
                        if (p) throw new TypeError("Generator is already executing.");
                        for (; u;) try {
                            if (p = 1, k && (v = t[0] & 2 ? k.return : t[0] ? k.throw || ((v = k.return) && v.call(k), 0) : k.next) && !(v = v.call(k, t[1])).done) return v;
                            switch (k = 0, v && (t = [t[0] & 2, v.value]), t[0]) {
                                case 0:
                                case 1:
                                    v = t;
                                    break;
                                case 4:
                                    return u.label++, {
                                        value: t[1],
                                        done: !1
                                    };
                                case 5:
                                    u.label++, k = t[1], t = [0];
                                    continue;
                                case 7:
                                    t = u.ops.pop(), u.trys.pop();
                                    continue;
                                default:
                                    if (v = u.trys, !(v = v.length > 0 && v[v.length - 1]) && (t[0] === 6 || t[0] === 2)) {
                                        u = 0;
                                        continue
                                    }
                                    if (t[0] === 3 && (!v || t[1] > v[0] && t[1] < v[3])) {
                                        u.label = t[1];
                                        break
                                    }
                                    if (t[0] === 6 && u.label < v[1]) {
                                        u.label = v[1], v = t;
                                        break
                                    }
                                    if (v && u.label < v[2]) {
                                        u.label = v[2], u.ops.push(t);
                                        break
                                    }
                                    v[2] && u.ops.pop(), u.trys.pop();
                                    continue
                            }
                            t = s.call(a, u)
                        } catch (n) {
                            t = [6, n], k = 0
                        } finally {
                            p = v = 0
                        }
                        if (t[0] & 5) throw t[1];
                        return {
                            value: t[0] ? t[1] : void 0,
                            done: !0
                        }
                    }
                }
                var C = Object.create ? function(a, s, u, p) {
                    p === void 0 && (p = u), Object.defineProperty(a, p, {
                        enumerable: !0,
                        get: function() {
                            return s[u]
                        }
                    })
                } : function(a, s, u, p) {
                    p === void 0 && (p = u), a[p] = s[u]
                };

                function F(a, s) {
                    for (var u in a) u !== "default" && !Object.prototype.hasOwnProperty.call(s, u) && C(s, a, u)
                }

                function A(a) {
                    var s = typeof Symbol == "function" && Symbol.iterator,
                        u = s && a[s],
                        p = 0;
                    if (u) return u.call(a);
                    if (a && typeof a.length == "number") return {
                        next: function() {
                            return a && p >= a.length && (a = void 0), {
                                value: a && a[p++],
                                done: !a
                            }
                        }
                    };
                    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.")
                }

                function N(a, s) {
                    var u = typeof Symbol == "function" && a[Symbol.iterator];
                    if (!u) return a;
                    var p = u.call(a),
                        k, v = [],
                        x;
                    try {
                        for (;
                            (s === void 0 || s-- > 0) && !(k = p.next()).done;) v.push(k.value)
                    } catch (o) {
                        x = {
                            error: o
                        }
                    } finally {
                        try {
                            k && !k.done && (u = p.return) && u.call(p)
                        } finally {
                            if (x) throw x.error
                        }
                    }
                    return v
                }

                function j() {
                    for (var a = [], s = 0; s < arguments.length; s++) a = a.concat(N(arguments[s]));
                    return a
                }

                function $() {
                    for (var a = 0, s = 0, u = arguments.length; s < u; s++) a += arguments[s].length;
                    for (var p = Array(a), k = 0, s = 0; s < u; s++)
                        for (var v = arguments[s], x = 0, o = v.length; x < o; x++, k++) p[k] = v[x];
                    return p
                }

                function K(a, s, u) {
                    if (u || arguments.length === 2)
                        for (var p = 0, k = s.length, v; p < k; p++)(v || !(p in s)) && (v || (v = Array.prototype.slice.call(s, 0, p)), v[p] = s[p]);
                    return a.concat(v || Array.prototype.slice.call(s))
                }

                function Z(a) {
                    return this instanceof Z ? (this.v = a, this) : new Z(a)
                }

                function z(a, s, u) {
                    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                    var p = u.apply(a, s || []),
                        k, v = [];
                    return k = {}, x("next"), x("throw"), x("return"), k[Symbol.asyncIterator] = function() {
                        return this
                    }, k;

                    function x(r) {
                        p[r] && (k[r] = function(d) {
                            return new Promise(function(h, I) {
                                v.push([r, d, h, I]) > 1 || o(r, d)
                            })
                        })
                    }

                    function o(r, d) {
                        try {
                            e(p[r](d))
                        } catch (h) {
                            i(v[0][3], h)
                        }
                    }

                    function e(r) {
                        r.value instanceof Z ? Promise.resolve(r.value.v).then(t, n) : i(v[0][2], r)
                    }

                    function t(r) {
                        o("next", r)
                    }

                    function n(r) {
                        o("throw", r)
                    }

                    function i(r, d) {
                        r(d), v.shift(), v.length && o(v[0][0], v[0][1])
                    }
                }

                function ie(a) {
                    var s, u;
                    return s = {}, p("next"), p("throw", function(k) {
                        throw k
                    }), p("return"), s[Symbol.iterator] = function() {
                        return this
                    }, s;

                    function p(k, v) {
                        s[k] = a[k] ? function(x) {
                            return (u = !u) ? {
                                value: Z(a[k](x)),
                                done: k === "return"
                            } : v ? v(x) : x
                        } : v
                    }
                }

                function ae(a) {
                    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                    var s = a[Symbol.asyncIterator],
                        u;
                    return s ? s.call(a) : (a = typeof A == "function" ? A(a) : a[Symbol.iterator](), u = {}, p("next"), p("throw"), p("return"), u[Symbol.asyncIterator] = function() {
                        return this
                    }, u);

                    function p(v) {
                        u[v] = a[v] && function(x) {
                            return new Promise(function(o, e) {
                                x = a[v](x), k(o, e, x.done, x.value)
                            })
                        }
                    }

                    function k(v, x, o, e) {
                        Promise.resolve(e).then(function(t) {
                            v({
                                value: t,
                                done: o
                            })
                        }, x)
                    }
                }

                function oe(a, s) {
                    return Object.defineProperty ? Object.defineProperty(a, "raw", {
                        value: s
                    }) : a.raw = s, a
                }
                var ne = Object.create ? function(a, s) {
                    Object.defineProperty(a, "default", {
                        enumerable: !0,
                        value: s
                    })
                } : function(a, s) {
                    a.default = s
                };

                function se(a) {
                    if (a && a.__esModule) return a;
                    var s = {};
                    if (a != null)
                        for (var u in a) u !== "default" && Object.prototype.hasOwnProperty.call(a, u) && C(s, a, u);
                    return ne(s, a), s
                }

                function re(a) {
                    return a && a.__esModule ? a : {
                        default: a
                    }
                }

                function ue(a, s, u, p) {
                    if (u === "a" && !p) throw new TypeError("Private accessor was defined without a getter");
                    if (typeof s == "function" ? a !== s || !p : !s.has(a)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                    return u === "m" ? p : u === "a" ? p.call(a) : p ? p.value : s.get(a)
                }

                function le(a, s, u, p, k) {
                    if (p === "m") throw new TypeError("Private method is not writable");
                    if (p === "a" && !k) throw new TypeError("Private accessor was defined without a setter");
                    if (typeof s == "function" ? a !== s || !k : !s.has(a)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                    return p === "a" ? k.call(a, u) : k ? k.value = u : s.set(a, u), u
                }
            }
        },
        ce = {};

    function L(_) {
        var m = ce[_];
        if (m !== void 0) return m.exports;
        var l = ce[_] = {
            exports: {}
        };
        return te[_].call(l.exports, l, l.exports, L), l.exports
    }
    L.m = te,
        function() {
            var _ = Object.getPrototypeOf ? function(l) {
                    return Object.getPrototypeOf(l)
                } : function(l) {
                    return l.__proto__
                },
                m;
            L.t = function(l, y) {
                if (y & 1 && (l = this(l)), y & 8 || typeof l == "object" && l && (y & 4 && l.__esModule || y & 16 && typeof l.then == "function")) return l;
                var b = Object.create(null);
                L.r(b);
                var f = {};
                m = m || [null, _({}), _([]), _(_)];
                for (var c = y & 2 && l; typeof c == "object" && !~m.indexOf(c); c = _(c)) Object.getOwnPropertyNames(c).forEach(function(w) {
                    f[w] = function() {
                        return l[w]
                    }
                });
                return f.default = function() {
                    return l
                }, L.d(b, f), b
            }
        }(),
        function() {
            L.d = function(_, m) {
                for (var l in m) L.o(m, l) && !L.o(_, l) && Object.defineProperty(_, l, {
                    enumerable: !0,
                    get: m[l]
                })
            }
        }(),
        function() {
            L.f = {}, L.e = function(_) {
                return Promise.all(Object.keys(L.f).reduce(function(m, l) {
                    return L.f[l](_, m), m
                }, []))
            }
        }(),
        function() {
            L.u = function(_) {
                return "" + _ + ".b67d21ec.js"
            }
        }(),
        function() {
            L.miniCssF = function(_) {}
        }(),
        function() {
            L.o = function(_, m) {
                return Object.prototype.hasOwnProperty.call(_, m)
            }
        }(),
        function() {
            var _ = {},
                m = "web:";
            L.l = function(l, y, b, f) {
                if (_[l]) {
                    _[l].push(y);
                    return
                }
                var c, w;
                if (b !== void 0)
                    for (var P = document.getElementsByTagName("script"), U = 0; U < P.length; U++) {
                        var S = P[U];
                        if (S.getAttribute("src") == l || S.getAttribute("data-webpack") == m + b) {
                            c = S;
                            break
                        }
                    }
                c || (w = !0, c = document.createElement("script"), c.charset = "utf-8", c.timeout = 120, L.nc && c.setAttribute("nonce", L.nc), c.setAttribute("data-webpack", m + b), c.src = l), _[l] = [y];
                var O = function(F, A) {
                        c.onerror = c.onload = null, clearTimeout(C);
                        var N = _[l];
                        if (delete _[l], c.parentNode && c.parentNode.removeChild(c), N && N.forEach(function(j) {
                                return j(A)
                            }), F) return F(A)
                    },
                    C = setTimeout(O.bind(null, void 0, {
                        type: "timeout",
                        target: c
                    }), 12e4);
                c.onerror = O.bind(null, c.onerror), c.onload = O.bind(null, c.onload), w && document.head.appendChild(c)
            }
        }(),
        function() {
            L.r = function(_) {
                typeof Symbol != "undefined" && Symbol.toStringTag && Object.defineProperty(_, Symbol.toStringTag, {
                    value: "Module"
                }), Object.defineProperty(_, "__esModule", {
                    value: !0
                })
            }
        }(),
        function() {
            var _ = {},
                m = {};
            L.f.remotes = function(l, y) {
                L.o(_, l) && _[l].forEach(function(b) {
                    var f = L.R;
                    f || (f = []);
                    var c = m[b];
                    if (!(f.indexOf(c) >= 0)) {
                        if (f.push(c), c.p) return y.push(c.p);
                        var w = function(C) {
                                C || (C = new Error("Container missing")), typeof C.message == "string" && (C.message += `
while loading "` + c[1] + '" from ' + c[2]), te[b] = function() {
                                    throw C
                                }, c.p = 0
                            },
                            P = function(C, F, A, N, j, $) {
                                try {
                                    var K = C(F, A);
                                    if (K && K.then) {
                                        var Z = K.then(function(z) {
                                            return j(z, N)
                                        }, w);
                                        if ($) y.push(c.p = Z);
                                        else return Z
                                    } else return j(K, N, $)
                                } catch (z) {
                                    w(z)
                                }
                            },
                            U = function(C, F, A) {
                                return C ? P(L.I, c[0], 0, C, S, A) : w()
                            },
                            S = function(C, F, A) {
                                return P(F.get, c[1], f, 0, O, A)
                            },
                            O = function(C) {
                                c.p = 1, te[b] = function(F) {
                                    F.exports = C()
                                }
                            };
                        P(L, c[2], 0, 0, U, 1)
                    }
                })
            }
        }(),
        function() {
            L.S = {};
            var _ = {},
                m = {};
            L.I = function(l, y) {
                y || (y = []);
                var b = m[l];
                if (b || (b = m[l] = {}), !(y.indexOf(b) >= 0)) {
                    if (y.push(b), _[l]) return _[l];
                    L.o(L.S, l) || (L.S[l] = {});
                    var f = L.S[l],
                        c = function(O) {
                            return typeof console != "undefined" && console.warn && console.warn(O)
                        },
                        w = "web",
                        P = function(O, C, F, A) {
                            var N = f[O] = f[O] || {},
                                j = N[C];
                            (!j || !j.loaded && (!A != !j.eager ? A : w > j.from)) && (N[C] = {
                                get: F,
                                from: w,
                                eager: !!A
                            })
                        },
                        U = function(O) {
                            var C = function(j) {
                                c("Initialization of sharing external failed: " + j)
                            };
                            try {
                                var F = L(O);
                                if (!F) return;
                                var A = function(j) {
                                    return j && j.init && j.init(L.S[l], y)
                                };
                                if (F.then) return S.push(F.then(A, C));
                                var N = A(F);
                                if (N && N.then) return S.push(N.catch(C))
                            } catch (j) {
                                C(j)
                            }
                        },
                        S = [];
                    switch (l) {}
                    return S.length ? _[l] = Promise.all(S).then(function() {
                        return _[l] = 1
                    }) : _[l] = 1
                }
            }
        }(),
        function() {
            L.p = "//cdn.midasbuy.com/apps/login/"
        }(),
        function() {
            var _ = {
                175: 0
            };
            L.f.j = function(y, b) {
                var f = L.o(_, y) ? _[y] : void 0;
                if (f !== 0)
                    if (f) b.push(f[2]);
                    else {
                        var c = new Promise(function(S, O) {
                            f = _[y] = [S, O]
                        });
                        b.push(f[2] = c);
                        var w = L.p + L.u(y),
                            P = new Error,
                            U = function(S) {
                                if (L.o(_, y) && (f = _[y], f !== 0 && (_[y] = void 0), f)) {
                                    var O = S && (S.type === "load" ? "missing" : S.type),
                                        C = S && S.target && S.target.src;
                                    P.message = "Loading chunk " + y + ` failed.
(` + O + ": " + C + ")", P.name = "ChunkLoadError", P.type = O, P.request = C, f[1](P)
                                }
                            };
                        L.l(w, U, "chunk-" + y, y)
                    }
            };
            var m = function(y, b) {
                    var f = b[0],
                        c = b[1],
                        w = b[2],
                        P, U, S = 0;
                    if (f.some(function(C) {
                            return _[C] !== 0
                        })) {
                        for (P in c) L.o(c, P) && (L.m[P] = c[P]);
                        if (w) var O = w(L)
                    }
                    for (y && y(b); S < f.length; S++) U = f[S], L.o(_, U) && _[U] && _[U][0](), _[f[S]] = 0
                },
                l = self.webpackChunkweb = self.webpackChunkweb || [];
            l.forEach(m.bind(null, 0)), l.push = m.bind(null, l.push.bind(l))
        }();
    var fe = {};
    (function() {
        var _ = L(130),
            m = L(5974),
            l = L(5926),
            y = L(2564),
            b = function(o, e) {
                var t = typeof Symbol == "function" && o[Symbol.iterator];
                if (!t) return o;
                var n = t.call(o),
                    i, r = [],
                    d;
                try {
                    for (;
                        (e === void 0 || e-- > 0) && !(i = n.next()).done;) r.push(i.value)
                } catch (h) {
                    d = {
                        error: h
                    }
                } finally {
                    try {
                        i && !i.done && (t = n.return) && t.call(n)
                    } finally {
                        if (d) throw d.error
                    }
                }
                return r
            },
            f = function(o, e, t) {
                if (t || arguments.length === 2)
                    for (var n = 0, i = e.length, r; n < i; n++)(r || !(n in e)) && (r || (r = Array.prototype.slice.call(e, 0, n)), r[n] = e[n]);
                return o.concat(r || Array.prototype.slice.call(e))
            };

        function c(o) {
            var e = Date.now(),
                t = o(),
                n = Date.now() - e;
            return {
                times: n,
                result: t
            }
        }

        function w(o) {
            return btoa(String.fromCharCode.apply(String, f([], b(o.match(/../g).map(function(e) {
                return parseInt(e, 16)
            })), !1)))
        }
        var P = function(o, e) {
            var t = window.report;
            if (t && typeof t.custom == "function") return t.custom(o, e);
            if (typeof t == "function") return t("midasbuy.custom." + o, e)
        };

        function U() {
            var o, e = (o = document.getElementById("xMidasToken")) === null || o === void 0 ? void 0 : o.value;
            if (!e) return P("xmidas.no.token");
            try {
                var t = c(function() {
                        return window.xMidas()
                    }),
                    n = t.result || [];
                P("xmidas.init", {
                    times: t.times
                }), n.length > 0 && P("xmidas.init.result", {
                    result: n.join(",")
                })
            } catch (i) {}
        }

        function S(o, e) {
            var t = e === "goServer" ? JSON.stringify(o) : JSON.stringify((0, y.Z)(o, function(d) {
                    return typeof d != "undefined" && typeof d != "object" ? String(d) : d
                })),
                n = document.getElementById("xMidasToken").value;
            if (!n) return o;
            var i = document.getElementById("xMidasVersion").value,
                r = c(function() {
                    try {
                        return window.xMidas({
                            d: t
                        })
                    } catch (d) {
                        return o
                    }
                });
            return r.result ? (P("xmidas.encrypt", {
                times: r.times
            }), {
                encrypt_msg: w(r.result),
                ctoken_ver: i,
                ctoken: n
            }) : (P("xmidas.error", {
                times: r.times
            }), o)
        }
        var O = L(7504),
            C = "lipassTempToken";

        function F() {
            var o = "";
            try {
                o = sessionStorage.getItem(C)
            } catch (e) {}
            return o ? {
                "IN-FRAME": window.self === window.top ? "0" : "1",
                "LI-PASS-TOKEN": o
            } : null
        }
        var A = F,
            N = function(o, e) {
                var t = typeof Symbol == "function" && o[Symbol.iterator];
                if (!t) return o;
                var n = t.call(o),
                    i, r = [],
                    d;
                try {
                    for (;
                        (e === void 0 || e-- > 0) && !(i = n.next()).done;) r.push(i.value)
                } catch (h) {
                    d = {
                        error: h
                    }
                } finally {
                    try {
                        i && !i.done && (t = n.return) && t.call(n)
                    } finally {
                        if (d) throw d.error
                    }
                }
                return r
            };

        function j(o) {
            var e = o === void 0 ? {} : o,
                t = e.method,
                n = t === void 0 ? "GET" : t,
                i = e.url,
                r = e.param,
                d = r === void 0 ? {} : r,
                h = e.headers,
                I = h === void 0 ? {} : h,
                g = e.timeout,
                T = e.dataType,
                E = new XMLHttpRequest;
            n === "GET" ? (i = (0, _.Z)(d, i), E.open(n, i, !0)) : (E.open(n, i, !0), T === "json" ? E.setRequestHeader("Content-Type", "application/json") : E.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"));
            var R = A();
            R && (I = Object.assign({}, I, R)), Object.entries(I).forEach(function(D) {
                var B = N(D, 2),
                    G = B[0],
                    H = B[1];
                E.setRequestHeader(G, H)
            });
            var M;
            return new Promise(function(D, B) {
                var G = !1;
                E.onreadystatechange = function() {
                    if (E.readyState === 4) {
                        if (clearTimeout(M), G) return;
                        if (E.status >= 200 && E.status < 300) try {
                            return D(JSON.parse(E.responseText))
                        } catch (q) {
                            return B({
                                ret: -9995,
                                path: i,
                                msg: "System busy, please try again later\uFF01(-9995)"
                            })
                        } else E.status >= 300 ? B({
                            ret: -9994,
                            path: i,
                            msg: "System busy, please try again later\uFF01(-9994-" + E.status + ")"
                        }) : B({
                            ret: -9993,
                            path: i,
                            msg: "System busy, please try again later\uFF01(-9993)"
                        })
                    }
                }, g && (M = setTimeout(function() {
                    G = !0;
                    try {
                        E.abort()
                    } catch (q) {}
                    return B({
                        ret: -9997,
                        path: i,
                        msg: "\u5BF9\u4E0D\u8D77\uFF0C\u8BF7\u6C42\u8D85\u65F6\uFF01"
                    })
                }, g * 1e3));
                var H;
                n === "POST" && (H = T === "json" ? JSON.stringify(d) : (0, O.default)(d)), E.send(H)
            })
        }
        var $ = function(o, e) {
                return j({
                    method: "POST",
                    url: o + "/unlinkPlatform",
                    dataType: "json",
                    param: S(e)
                })
            },
            K = function(o) {
                return j({
                    method: "POST",
                    url: o + "/getAllPasskey",
                    dataType: "json",
                    param: S({})
                })
            },
            Z = function(o, e) {
                return j({
                    method: "POST",
                    url: o + "/updatePasskey",
                    dataType: "json",
                    param: S(e)
                })
            },
            z = function(o, e) {
                return j({
                    method: "POST",
                    url: o + "/deletePasskey",
                    dataType: "json",
                    param: S(e)
                })
            },
            ie = function(o, e) {
                return j({
                    method: "POST",
                    url: o + "/gameLogin",
                    dataType: "json",
                    param: S(e, "goServer")
                })
            },
            ae = function(o) {
                return encodeURIComponent(o).replace(/[!'()*]/g, function(e) {
                    return "%" + e.charCodeAt(0).toString(16)
                })
            },
            oe = ae,
            ne = L(4986);

        function se() {
            var o, e, t = ne.Z.get("UUID") || ((o = window.__Report_INFO) === null || o === void 0 ? void 0 : o.tid) || "",
                n = (e = navigator.platform) === null || e === void 0 ? void 0 : e.toLowerCase(),
                i = !!window.navigator.cookieEnabled,
                r = navigator.userAgent,
                d = ne.Z.get("device_id") || "",
                h = window.fingerprint || "",
                I = [t, n, i, "", r, d, window.currentLang || "en", h];
            return I.map(function(g) {
                return oe(g)
            }).join(",")
        }

        function re(o) {
            return o.browser_info = se(), Promise.resolve(o)
        }
        var ue = function() {
                function o() {}
                return o.prototype.getWidth = function() {
                    var e = document.documentElement.clientWidth;
                    return Math.abs(window.innerWidth - e)
                }, o
            }(),
            le = ue,
            a = function() {
                return a = Object.assign || function(o) {
                    for (var e, t = 1, n = arguments.length; t < n; t++) {
                        e = arguments[t];
                        for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (o[i] = e[i])
                    }
                    return o
                }, a.apply(this, arguments)
            },
            s = function(o, e, t, n) {
                function i(r) {
                    return r instanceof t ? r : new t(function(d) {
                        d(r)
                    })
                }
                return new(t || (t = Promise))(function(r, d) {
                    function h(T) {
                        try {
                            g(n.next(T))
                        } catch (E) {
                            d(E)
                        }
                    }

                    function I(T) {
                        try {
                            g(n.throw(T))
                        } catch (E) {
                            d(E)
                        }
                    }

                    function g(T) {
                        T.done ? r(T.value) : i(T.value).then(h, I)
                    }
                    g((n = n.apply(o, e || [])).next())
                })
            },
            u = function(o, e) {
                var t = {
                        label: 0,
                        sent: function() {
                            if (r[0] & 1) throw r[1];
                            return r[1]
                        },
                        trys: [],
                        ops: []
                    },
                    n, i, r, d;
                return d = {
                    next: h(0),
                    throw: h(1),
                    return: h(2)
                }, typeof Symbol == "function" && (d[Symbol.iterator] = function() {
                    return this
                }), d;

                function h(g) {
                    return function(T) {
                        return I([g, T])
                    }
                }

                function I(g) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; t;) try {
                        if (n = 1, i && (r = g[0] & 2 ? i.return : g[0] ? i.throw || ((r = i.return) && r.call(i), 0) : i.next) && !(r = r.call(i, g[1])).done) return r;
                        switch (i = 0, r && (g = [g[0] & 2, r.value]), g[0]) {
                            case 0:
                            case 1:
                                r = g;
                                break;
                            case 4:
                                return t.label++, {
                                    value: g[1],
                                    done: !1
                                };
                            case 5:
                                t.label++, i = g[1], g = [0];
                                continue;
                            case 7:
                                g = t.ops.pop(), t.trys.pop();
                                continue;
                            default:
                                if (r = t.trys, !(r = r.length > 0 && r[r.length - 1]) && (g[0] === 6 || g[0] === 2)) {
                                    t = 0;
                                    continue
                                }
                                if (g[0] === 3 && (!r || g[1] > r[0] && g[1] < r[3])) {
                                    t.label = g[1];
                                    break
                                }
                                if (g[0] === 6 && t.label < r[1]) {
                                    t.label = r[1], r = g;
                                    break
                                }
                                if (r && t.label < r[2]) {
                                    t.label = r[2], t.ops.push(g);
                                    break
                                }
                                r[2] && t.ops.pop(), t.trys.pop();
                                continue
                        }
                        g = e.call(o, t)
                    } catch (T) {
                        g = [6, T], i = 0
                    } finally {
                        n = r = 0
                    }
                    if (g[0] & 5) throw g[1];
                    return {
                        value: g[0] ? g[1] : void 0,
                        done: !0
                    }
                }
            },
            p = {},
            k = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform),
            v = function() {
                function o() {
                    this.preOverflow = "", this.prePosition = "", this.prePaddingRight = "", this.preTop = "", this.preWidth = "", this.params = {
                        country: "ot",
                        pageConfig: p,
                        hash: "#login",
                        host: location.hostname,
                        goServerUrl: "",
                        user: null,
                        preload: !1,
                        hasInit: !1,
                        hasLoaded: !1,
                        lang: ""
                    }, this.loginConfig = {
                        loginKey: "",
                        enabledSig: !0,
                        goVersion: ""
                    }, this.needReloadIframe = !1, this.csrftoken = "", this.initParams = {}, this.callback = {
                        loginSuccessCallback: function() {},
                        facebookLoginSuccessCallback: function() {},
                        lipassLoginSuccessCallback: function() {},
                        registerSuccessCallback: function() {},
                        resetSuccessCallback: function() {},
                        loginedCallback: function() {},
                        closeIframeCallback: function() {},
                        loginFailCallback: function() {},
                        initFailCallback: function() {},
                        checkCsrfFailCallback: function() {},
                        iframeLoadedCallback: function() {},
                        initLoginSuccessCallback: function() {}
                    }, this.loginInterface = {
                        getLoginInfo: "/interface/getLoginInfoV2"
                    }, this.registerMessageEvent()
                }
                return o.prototype.showLoginIframe = function() {
                    !this.params.preload || this.needReloadIframe ? this.loadHtml() : this.toggleIframe("visible")
                }, o.prototype.handleCallback = function(e) {
                    var t = e.user,
                        n = e.action,
                        i = this.handleUserData(t),
                        r = ["loginSuccess", "facebookLoginSuccess", "lipassLoginSuccess", "registerSuccess", "resetSuccess", "activeSuccess", "linkSuccess", "tofLoginSuccess", "googleLoginSuccess", "lipassLoginSuccess", "changeEmailSuccess", "msdkLoginSuccess", "msdkLinkSuccess", "gameLoginSuccess", "gameLinkSuccess"],
                        d = ["loginFail", "msdkLoginFail", "confirmLinkFail", "linkFail", "msdkLinkFail", "checkCsrfFail", "gameLoginFail", "gameLinkFail"],
                        h = this.callback[n + "Callback"];
                    r.indexOf(n) !== -1 && (h = this.callback.loginSuccessCallback), d.indexOf(n) !== -1 && (h = this.callback.loginFailCallback), h && h(a(a({}, e), {
                        user: i,
                        from: this.params.pageConfig.from
                    }))
                }, o.prototype.handleBindOpenidParams = function() {
                    var e = (0, m.Z)("appid");
                    !this.params.pageConfig.appid && e && (this.params.pageConfig.appid = e), this.params.lang && (this.params.pageConfig.lang = this.params.lang)
                }, o.prototype.handleInitParams = function(e) {
                    !e || (this.initParams = a({}, e), this.params = a(a(a({}, this.params), e), {
                        pageConfig: a(a({}, p), e.pageConfig)
                    }), this.handleBindOpenidParams())
                }, o.prototype.handleInitReportV2Params = function(e) {
                    !e || e.shopCode && (window._SHOPCODE = e.shopCode)
                }, o.prototype.handleLoginParams = function(e) {
                    var t;
                    if (!e) {
                        this.params.hash = "#login";
                        return
                    }
                    e.preload === !0 && delete e.preload, e.hash || (e.hash = "#login");
                    var n = (e == null ? void 0 : e.pageConfig) || {},
                        i = n.needReloadIframe,
                        r = n.appid;
                    this.needReloadIframe = i || !!r && ((t = this.params.pageConfig) === null || t === void 0 ? void 0 : t.appid) !== r, this.params = a(a(a({}, this.params), e), {
                        pageConfig: a(a(a({}, p), this.params.hasInit && this.initParams.pageConfig ? this.initParams.pageConfig : {}), e.pageConfig)
                    }), this.handleBindOpenidParams()
                }, o.prototype.getIframe = function() {
                    return document.getElementById("login-iframe")
                }, o.prototype.waitForIframeLoad = function(e) {
                    var t = this,
                        n = setInterval(function() {
                            t.params.hasLoaded && (e(), clearInterval(n))
                        }, 50)
                }, o.prototype.toggleLockBackground = function(e) {
                    var t, n, i, r, d;
                    if (!!((t = document.body) === null || t === void 0 ? void 0 : t.style)) {
                        var h = new le,
                            I = h.getWidth(),
                            g = I > 0;
                        if (e === "lock") this.preOverflow = ((i = (n = document.body) === null || n === void 0 ? void 0 : n.style) === null || i === void 0 ? void 0 : i.overflow) || "", this.prePosition = ((d = (r = document.body) === null || r === void 0 ? void 0 : r.style) === null || d === void 0 ? void 0 : d.position) || "", this.prePaddingRight = document.body.style.paddingRight || "", this.preTop = document.body.style.top || "", this.preWidth = document.body.style.width || "", g && (document.body.style.paddingRight = (this.prePaddingRight ? parseInt(this.prePaddingRight, 10) : 0) + I + "px"), k && (document.body.style.position = "fixed", document.body.style.width = "100%"), document.body.style.top = "-" + window.scrollY + "px", document.body.style.overflow = "hidden";
                        else {
                            var T = document.body.style.top;
                            k && (document.body.style.position = this.prePosition, document.body.style.width = this.preWidth), document.body.style.paddingRight = this.prePaddingRight, document.body.style.top = this.preTop, window.scrollTo(0, parseInt(T || "0", 10) * -1), document.body.style.overflow = this.preOverflow
                        }
                    }
                }, o.prototype.toggleIframe = function(e) {
                    var t = this;
                    e === void 0 && (e = "visible");
                    var n = this.getIframe();
                    if (!!n) {
                        var i = function() {
                            var r;
                            t.params.pageConfig.report = e === "visible", e === "visible" && (n.src = "" + n.src.replace(/#.+/, t.params.hash)), (r = n.contentWindow) === null || r === void 0 || r.postMessage(JSON.stringify({
                                action: "changePageConfig",
                                pageConfig: t.params.pageConfig
                            }), "*"), n.style.visibility = e, n.style.left = e === "visible" ? 0 : "-5000px", t.toggleLockBackground(e === "visible" ? "lock" : "unlock")
                        };
                        e === "visible" ? this.waitForIframeLoad(i) : i()
                    }
                }, o.prototype.loadScriptPromise = function(e) {
                    return new Promise(function(t, n) {
                        (0, l.Z)(e, function(i) {
                            i ? t(i) : n(new Error("loadScript " + e + " fail: " + i))
                        })
                    })
                }, o.prototype.waitForXMidas = function() {
                    var e = this;
                    return new Promise(function(t, n) {
                        var i = !1,
                            r = setInterval(function() {
                                return s(e, void 0, void 0, function() {
                                    return u(this, function(d) {
                                        return "xMidas" in window && (clearInterval(r), i = !0, U(), t()), [2]
                                    })
                                })
                            }, 50);
                        setTimeout(function() {
                            i || (console.error("window.xMidas function is not loaded"), clearInterval(r), n())
                        }, 5e3)
                    })
                }, o.prototype.loginInfoRequest = function(e) {
                    var t = this;
                    e === void 0 && (e = {});
                    var n = this.params.host || location.host,
                        i = document.getElementById("xMidasToken"),
                        r = i ? this.waitForXMidas().catch(function() {}) : this.loadScriptPromise("/xmidas-sdk.js").then(function() {
                            return t.waitForXMidas()
                        }).catch(function() {
                            console.error("xmidas-sdk load error")
                        });
                    return r.then(function() {
                        return j({
                            url: "https://" + n + t.loginInterface.getLoginInfo,
                            method: "GET",
                            timeout: 5,
                            param: a(a({}, S(a(a({}, e), {
                                appid: t.params.pageConfig.appid,
                                ts: Date.now()
                            }))), {
                                _r: Math.random()
                            })
                        }).then(function(d) {
                            if (d && d.ret === 0) return d.data;
                            throw d
                        }).catch(function(d) {
                            throw d
                        })
                    })
                }, o.prototype.setStyle = function(e, t) {
                    Object.keys(t).forEach(function(n) {
                        e.style[n] = t[n]
                    })
                }, o.prototype.createElement = function(e) {
                    var t = this,
                        n = e.tag,
                        i = e.attr,
                        r = e.children,
                        d = document.createElement(n);
                    return Object.keys(i).forEach(function(h) {
                        var I = typeof i[h];
                        h === "style" ? t.setStyle(d, i.style) : I === "function" ? d.addEventListener(h, i[h]) : d.setAttribute(h, i[h])
                    }), r && r.length ? r.forEach(function(h) {
                        d.appendChild(t.createElement(h))
                    }) : typeof r == "string" && (d.innerHTML = r), d
                }, o.prototype.createDocument = function(e) {
                    var t = this,
                        n = document.createDocumentFragment();
                    return e.forEach(function(i) {
                        n.appendChild(t.createElement(i))
                    }), n
                }, o.prototype.getDomTree = function() {
                    var e, t = {
                            width: "100%",
                            height: "100%",
                            visibility: "hidden",
                            position: "fixed",
                            left: "-5000px",
                            top: 0,
                            zIndex: 1e16,
                            overflow: "hidden",
                            border: "medium none"
                        },
                        n = this.params.pageConfig || {},
                        i = this.params.host || location.host,
                        r = (0, _.Z)(n, "https://" + i + "/apps/login/home/" + (((e = this.params.country) === null || e === void 0 ? void 0 : e.toLowerCase()) || "ot"));
                    return this.params.hash && (r += this.params.hash), [{
                        tag: "iframe",
                        attr: {
                            name: "iframe-window",
                            id: "login-iframe",
                            style: t,
                            src: r
                        }
                    }]
                }, o.prototype.loadHtml = function() {
                    var e = this.getIframe();
                    if (e && !this.needReloadIframe) {
                        this.toggleIframe("visible");
                        return
                    }
                    e && e.remove();
                    var t = document.getElementsByTagName("body")[0],
                        n = this.getDomTree();
                    t.appendChild(this.createDocument(n))
                }, o.prototype.registerMessageEvent = function() {
                    var e = this;
                    window.addEventListener("message", function(t) {
                        var n = t.origin,
                            i = t.data,
                            r;
                        try {
                            r = JSON.parse(i)
                        } catch (D) {}
                        var d = /(\.midasbuy\.com|\.360mobi\.vn|\.zing\.vn|\.levelinfinite\.com)$/;
                        if (!(!d.test(n) && location.origin !== n || !r)) {
                            var h = r.status,
                                I = r.user,
                                g = r.action,
                                T = r.msg,
                                E = r.errorCode,
                                R = r.gameSdkConfig,
                                M = r.msdkConfig;
                            switch (g) {
                                case "iframeLoad":
                                    e.handleCallback({
                                        status: h,
                                        action: g
                                    }), (!e.params.preload && !e.params.hasLoaded || e.needReloadIframe) && e.toggleIframe("visible"), e.params.hasLoaded = !0;
                                    break;
                                case "closeIframe":
                                    e.handleCallback({
                                        status: h,
                                        action: g
                                    }), e.hideLoginIframe();
                                    break;
                                case "linkFail":
                                case "confirmLinkFail":
                                case "otherFail":
                                    e.handleFail({
                                        status: h,
                                        action: g,
                                        errorCode: E,
                                        msg: T
                                    });
                                    break;
                                case "oauthSuccess":
                                case "oauthCancel":
                                    e.handleCallback({
                                        status: h,
                                        action: g,
                                        errorCode: E,
                                        msg: T
                                    });
                                    break;
                                case "loginSuccess":
                                    e.handleSuccess({
                                        status: h,
                                        action: g,
                                        user: I
                                    }, "login");
                                    break;
                                case "facebookLoginSuccess":
                                    e.handleSuccess({
                                        status: h,
                                        action: g,
                                        user: I
                                    }, "fbLogin");
                                    break;
                                case "lipassLoginSuccess":
                                case "googleLoginSuccess":
                                case "tofLoginSuccess":
                                case "lipassLoginSuccess":
                                case "changeEmailSuccess":
                                    e.handleSuccess({
                                        status: h,
                                        action: g,
                                        user: I
                                    });
                                    break;
                                case "gameLoginSuccess":
                                case "gameLinkSuccess":
                                case "msdkLoginSuccess":
                                case "msdkLinkSuccess":
                                    e.handleSuccess({
                                        status: h,
                                        action: g,
                                        user: I,
                                        msdkConfig: M,
                                        gameSdkConfig: R
                                    });
                                    break;
                                case "linkSuccess":
                                    e.handleSuccess({
                                        status: h,
                                        action: g,
                                        user: I
                                    }, "linkSuccess");
                                    break;
                                case "activeSuccess":
                                    e.handleSuccess({
                                        status: h,
                                        action: g,
                                        user: I
                                    }, "activeSuccess");
                                    break;
                                case "msdkLoginFail":
                                case "msdkLinkFail":
                                case "gameLoginFail":
                                case "gameLinkFail":
                                    e.handleFail({
                                        status: h,
                                        action: g,
                                        msg: T,
                                        gameSdkConfig: R,
                                        msdkConfig: M
                                    });
                                    break;
                                case "loginFail":
                                    e.handleFail({
                                        status: h,
                                        action: g,
                                        msg: T
                                    });
                                    break;
                                case "registerSuccess":
                                    e.handleSuccess({
                                        status: h,
                                        action: g
                                    }, "register");
                                    break;
                                case "resetSuccess":
                                    e.handleSuccess({
                                        status: h,
                                        action: g
                                    }, "reset");
                                    break;
                                case "checkCsrfFail":
                                    e.handleFail({
                                        status: h,
                                        action: g,
                                        msg: T
                                    });
                                    break;
                                default:
                                    break
                            }
                        }
                    })
                }, o.prototype.handleUserData = function(e) {
                    if (!e) return null;
                    var t = {
                            email: e.email || e.Email,
                            userName: e.userName || e.UserName,
                            avatar: e.avatarUrl || e.Avatar,
                            uid: e.uid || e.Uid
                        },
                        n = a(a({}, e), t);
                    return n.Token && delete n.Token, n
                }, o.prototype.handleFail = function(e) {
                    var t = e.action;
                    this.handleCallback(e), ["confirmLinkFail", "otherFail", "gameLinkFail"].includes(t) && this.hideLoginIframe()
                }, o.prototype.handleSuccess = function(e, t) {
                    var n = this;
                    t === void 0 && (t = "login"), this.loginInfoRequest().then(function(i) {
                        var r = i.user;
                        n.handleLoginInfo(i), n.handleCallback(a(a({}, e), {
                            user: r
                        })), n.hideLoginIframe()
                    }).catch(function(i) {
                        var r = {
                            login: {
                                status: 1003,
                                action: "loginFail"
                            },
                            register: {
                                status: 1004,
                                action: "registerFail"
                            },
                            reset: {
                                status: 1005,
                                action: "resetFail"
                            },
                            fbLogin: {
                                status: 1006,
                                action: "fbLoginFail"
                            },
                            linkAccount: {
                                status: 1010,
                                action: "linkAccountFail"
                            },
                            activeAccount: {
                                status: 1011,
                                action: "linkAccountFail"
                            }
                        };
                        n.handleCallback({
                            status: r[t].status,
                            action: r[t].action,
                            msg: "handleSuccess.error: " + i
                        })
                    })
                }, o.prototype.getGoHeaders = function(e) {
                    var t, n;
                    return s(this, void 0, void 0, function() {
                        var i, r, d, h, I, g, T, E, R;
                        return u(this, function(M) {
                            switch (M.label) {
                                case 0:
                                    return i = {}, r = this.loginConfig || {}, d = r.goVersion, h = r.enabledSig, I = r.loginKey, d && (i.versions = d), h ? (g = Math.floor(Date.now() / 1e3), i.Csrftokentime = g, [4, L.e(153).then(L.t.bind(L, 2153, 23))]) : [3, 2];
                                case 1:
                                    T = M.sent(), E = "" + JSON.stringify(e) + I + g, R = (n = (t = T == null ? void 0 : T.default) === null || t === void 0 ? void 0 : t.call(T, E)) === null || n === void 0 ? void 0 : n.toString(), i.Csrftokenv2 = R, M.label = 2;
                                case 2:
                                    return [2, i]
                            }
                        })
                    })
                }, o.prototype.handleLoginInfo = function(e) {
                    var t = e || {},
                        n = t.user,
                        i = t.goServerUrl,
                        r = t.loginConfig,
                        d = t.csrftoken;
                    this.params.user = n, this.params.goServerUrl = this.params.goServerUrl || i, this.csrftoken = d || "", this.loginConfig = r
                }, o.prototype.on = function(e, t) {
                    !e || !t || (this.callback[e + "Callback"] = t)
                }, o.prototype.login = function(e) {
                    var t = this;
                    this.handleLoginParams(e), this.loginInfoRequest().then(function(n) {
                        var i, r, d = n.user,
                            h = n.loginConfig;
                        if (t.handleLoginInfo(n), t.params.pageConfig.appid || (t.params.pageConfig.appid = n.gameAppid), !d) return t.showLoginIframe();
                        if (!d.currentBindUser && t.params.pageConfig.appid) {
                            var I = (r = (i = h == null ? void 0 : h.bindOpenidReferrerRegExpList) === null || i === void 0 ? void 0 : i.some) === null || r === void 0 ? void 0 : r.call(i, function(R) {
                                    return new RegExp(R).test(location.href)
                                }),
                                g = !t.params.pageConfig.noBindAfterLogin && (I || t.params.pageConfig.bindAfterLogin);
                            if (g) return t.params.hash = "#bind-openid", t.showLoginIframe()
                        }
                        if (t.params.hash === "#bind-openid") return t.showLoginIframe();
                        var T = t.params.hash,
                            E = ["#third-party-add-info", "#confirm-link-account", "#complete-email-account", "#authorize-confirm", "#result-page", "#application-login", "#lipass-login", "#login", "#change-password", "#change-email", "#webauthn-sign-up", "#native-game-login", "#native-game-login-fail", "#account-tips", "#game-ticket-active", "#game-ticket-account-tips"];
                        return E.indexOf(T) !== -1 ? t.showLoginIframe() : t.handleCallback({
                            status: 201,
                            action: "logined",
                            msg: "login.error: user has login",
                            user: t.params.user
                        })
                    }).catch(function(n) {
                        t.handleCallback({
                            status: 1002,
                            action: "loginFail",
                            msg: "login.error: " + n
                        })
                    })
                }, o.prototype.logout = function() {
                    return s(this, void 0, void 0, function() {
                        var e, t, n;
                        return u(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return this.params.goServerUrl ? [3, 2] : this.params.goServerUrl ? [3, 2] : [4, this.loginInfoRequest()];
                                case 1:
                                    if (e = i.sent(), this.handleLoginInfo(e), t = (e || {}).goServerUrl, !t) return [2, {
                                        ret: 1,
                                        msg: "logout.error: goServerUrl is invalid"
                                    }];
                                    i.label = 2;
                                case 2:
                                    return n = this.params.goServerUrl + "/logout", [2, j({
                                        url: n,
                                        method: "POST",
                                        timeout: 5,
                                        dataType: "json",
                                        param: {
                                            endpoint_type: "browser"
                                        }
                                    })]
                            }
                        })
                    })
                }, o.prototype.hideLoginIframe = function() {
                    this.toggleIframe("hidden")
                }, o.prototype.checkLogin = function(e, t) {
                    this.loginInfoRequest().then(function(n) {
                        var i = n.user;
                        e && e({
                            status: 200,
                            action: "checkLoginSuccess",
                            user: i
                        })
                    }).catch(function(n) {
                        t && t({
                            status: 1008,
                            action: "checkLoginFail",
                            msg: "checkLogin.error: " + n
                        })
                    })
                }, o.prototype.init = function(e) {
                    this.params.hasInit || (this.params.hasInit = !0, this.handleInitParams(e), this.handleInitReportV2Params(e), this.params.preload && this.loadHtml())
                }, o.prototype.thirdPartyLogin = function(e) {
                    var t, n = e.thirdPartyType,
                        i = n === void 0 ? "facebook" : n,
                        r = e.loginCallback,
                        d = e.country,
                        h = d === void 0 ? "ot" : d,
                        I = e.pageConfig,
                        g = I === void 0 ? {} : I,
                        T = function() {
                            location.reload()
                        };
                    if (i === "lipass") return this.login({
                        hash: "#lipass-login",
                        country: h,
                        pageConfig: g
                    });
                    var E = location.href;
                    (g == null ? void 0 : g.from) === "bind-pop-easy-login" && (E = ((t = parent == null ? void 0 : parent.location) === null || t === void 0 ? void 0 : t.href) || "https://www.midasbuy.com");
                    var R = (g == null ? void 0 : g.processType) === "addThirdParty";
                    window.__ThirdPartyLoginCallback = r || T;
                    var M = "https://" + location.hostname + "/apps/login/callback/login-callback-new?success=" + (R ? "thirdPartyBind" : "thirdPartyLogin") + "&thirdPartyType=" + i + "&redirect=" + encodeURIComponent(E) + "&country=" + h.toLowerCase() + "&pageFrom=" + ((g == null ? void 0 : g.from) || "");
                    window.open(M)
                }, o.prototype.signUp = function() {
                    var e, t = this.getIframe();
                    (e = t == null ? void 0 : t.contentWindow) === null || e === void 0 || e.switchModule("sign-up"), this.login()
                }, o.prototype.creatOrLoginMidasbuyByTicket = function(e) {
                    return s(this, void 0, void 0, function() {
                        var t, n, i, r, d, h, I, g, T, E, R, M, D, B, G, H, q, J, X, Q, ee, V, W;
                        return u(this, function(Y) {
                            switch (Y.label) {
                                case 0:
                                    return Y.trys.push([0, 4, , 5]), this.params.goServerUrl ? [3, 2] : [4, this.loginInfoRequest()];
                                case 1:
                                    if (t = Y.sent(), this.handleLoginInfo(t), n = (t || {}).goServerUrl, !n) return [2, {
                                        ret: 1,
                                        msg: "createMidasbuyUser.error: goServerUrl is invalid"
                                    }];
                                    Y.label = 2;
                                case 2:
                                    return i = e || {}, r = i.ticket, d = i.is_link_midas, h = d === void 0 ? !1 : d, I = i.offer_id, g = i.notBind, T = g === void 0 ? !1 : g, r ? (E = {
                                        ticket: r,
                                        is_link_midas: h,
                                        offer_id: I
                                    }, [4, ie(this.params.goServerUrl, E)]) : [2, {
                                        ret: 1,
                                        msg: "creatOrLoginMidasbuyByTicket.error: ticket is invalid"
                                    }];
                                case 3:
                                    if (R = Y.sent(), M = R || {}, D = M.ret, B = M.data, D !== 0 || (B == null ? void 0 : B.action) === "login_fail_had_bind") return [2, {
                                        ret: 1,
                                        msg: "ticket_login_failed"
                                    }];
                                    if (G = B || {}, H = G.action, q = G.game_nike_name, J = G.player_id, X = (B == null ? void 0 : B.bind_login_account) || {}, Q = X.platform, ee = X.nikename, V = {
                                            authType: "gameTicket",
                                            userName: q,
                                            playerId: J,
                                            isLinkMidas: !1
                                        }, H === "login_succeed") return [2, {
                                        ret: 0,
                                        msg: "login_succeed",
                                        data: {
                                            gameNickName: q,
                                            playerId: J
                                        }
                                    }];
                                    if (T) return [2, {
                                        ret: 0,
                                        msg: "login_no_action"
                                    }];
                                    switch (H) {
                                        case "login_confirm":
                                            this.login({
                                                hash: "#game-ticket-active",
                                                pageConfig: {
                                                    processType: "gameTicketActive",
                                                    gameLoginInfo: V,
                                                    appid: I
                                                }
                                            });
                                            break;
                                        case "login_fail_need_bind":
                                            this.login({
                                                hash: "#game-ticket-account-tips",
                                                pageConfig: {
                                                    appid: I,
                                                    processType: "gameTicketAccountBoundBind",
                                                    gameLoginInfo: a(a({}, V), {
                                                        authErrorType: "playerBound",
                                                        boundAccountInfo: {
                                                            platform: Q,
                                                            emailName: ee,
                                                            userName: q,
                                                            playerId: J
                                                        }
                                                    })
                                                }
                                            });
                                            break;
                                        case "login_fail_had_bind":
                                        default:
                                            return [2, {
                                                ret: 1,
                                                msg: "creatOrLoginMidasbuyByTicket.error: " + (R == null ? void 0 : R.msg)
                                            }]
                                    }
                                    return [3, 5];
                                case 4:
                                    return W = Y.sent(), [2, {
                                        ret: 1,
                                        msg: "creatOrLoginMidasbuyByTicket.error: " + ((W == null ? void 0 : W.msg) || (W == null ? void 0 : W.message) || W)
                                    }];
                                case 5:
                                    return [2]
                            }
                        })
                    })
                }, o.prototype.createMidasbuyUser = function(e) {
                    return s(this, void 0, void 0, function() {
                        var t, n, i, r, d, h, I, g, T, E, R, M, D, B, G, H, q, J, X, Q, ee, V;
                        return u(this, function(W) {
                            switch (W.label) {
                                case 0:
                                    return W.trys.push([0, 6, , 7]), this.params.goServerUrl ? [3, 2] : [4, this.loginInfoRequest()];
                                case 1:
                                    if (t = W.sent(), this.handleLoginInfo(t), n = (t || {}).goServerUrl, !n) return [2, {
                                        ret: 1,
                                        msg: "createMidasbuyUser.error: goServerUrl is invalid"
                                    }];
                                    W.label = 2;
                                case 2:
                                    return i = e || {}, r = i.openid, d = i.token, h = i.gameId, I = i.channelId, !r || !d || !h || !I ? [2, {
                                        ret: 1,
                                        msg: "createMidasbuyUser.error: openid or token is invalid"
                                    }] : (g = {
                                        type: "toweroffantasy",
                                        intlgame_open_id: r,
                                        intlgame_token: d,
                                        csrftoken: this.csrftoken,
                                        intlgame_game_id: h,
                                        intlgame_channel_id: I
                                    }, T = this.params.goServerUrl + "/login", [4, re(g)]);
                                case 3:
                                    return E = W.sent(), [4, this.getGoHeaders(E)];
                                case 4:
                                    return R = W.sent(), [4, j({
                                        url: T,
                                        method: "POST",
                                        timeout: 5,
                                        dataType: "json",
                                        headers: R,
                                        param: a({}, E)
                                    })];
                                case 5:
                                    return M = W.sent(), (M == null ? void 0 : M.ret) === 0 ? (D = (M == null ? void 0 : M.data) || {}, B = D.Uid, G = D.Platform, H = D.PlatformOpenId, q = D.UserName, J = D.ErrorCode, X = D.Email, Q = D.Token, ee = {
                                        uid: B,
                                        providerType: G,
                                        other: {
                                            "toweroffantasy-openid": H
                                        },
                                        userName: q,
                                        email: X,
                                        ErrorCode: J,
                                        token: Q
                                    }, [2, {
                                        ret: 0,
                                        data: ee
                                    }]) : [2, {
                                        ret: 1,
                                        msg: "createMidasbuyUser.error: " + (M == null ? void 0 : M.msg)
                                    }];
                                case 6:
                                    return V = W.sent(), [2, {
                                        ret: 1,
                                        msg: "createMidasbuyUser.error: " + ((V == null ? void 0 : V.msg) || (V == null ? void 0 : V.message) || V)
                                    }];
                                case 7:
                                    return [2]
                            }
                        })
                    })
                }, o.prototype.createMidasbuyUserByLipass = function(e) {
                    return s(this, void 0, void 0, function() {
                        var t, n, i, r, d, h, I, g, T, E, R, M, D, B, G, H;
                        return u(this, function(q) {
                            switch (q.label) {
                                case 0:
                                    return q.trys.push([0, 6, , 7]), this.params.goServerUrl ? [3, 2] : [4, this.loginInfoRequest()];
                                case 1:
                                    if (t = q.sent(), this.handleLoginInfo(t), n = (t || {}).goServerUrl, !n) return [2, {
                                        ret: 1,
                                        msg: "createMidasbuyUserByLipass.error: goServerUrl is invalid"
                                    }];
                                    q.label = 2;
                                case 2:
                                    return i = e || {}, r = i.openId, d = i.token, h = i.iframeUrl, I = i.endpointType, r && d && h && I ? (g = {
                                        lip_open_id: r,
                                        lip_token: d,
                                        iframe_url: h,
                                        endpoint_type: I,
                                        csrftoken: this.csrftoken
                                    }, T = this.params.goServerUrl + "/lipLogin", [4, re(g)]) : [2, {
                                        ret: 1,
                                        msg: "createMidasbuyUserByLipass.error: params is invalid"
                                    }];
                                case 3:
                                    return E = q.sent(), [4, this.getGoHeaders(E)];
                                case 4:
                                    return R = q.sent(), [4, j({
                                        url: T,
                                        method: "POST",
                                        timeout: 5,
                                        dataType: "json",
                                        headers: R,
                                        param: a({}, E)
                                    })];
                                case 5:
                                    return M = q.sent(), (M == null ? void 0 : M.ret) === 0 ? (D = (M == null ? void 0 : M.data) || {}, B = D.action, G = D.token, [2, {
                                        ret: 0,
                                        data: {
                                            action: B,
                                            token: G
                                        }
                                    }]) : [2, {
                                        ret: 1,
                                        msg: "createMidasbuyUserByLipass.error: " + (M == null ? void 0 : M.msg)
                                    }];
                                case 6:
                                    return H = q.sent(), [2, {
                                        ret: 1,
                                        msg: "createMidasbuyUserByLipass.error: " + ((H == null ? void 0 : H.msg) || (H == null ? void 0 : H.message) || H)
                                    }];
                                case 7:
                                    return [2]
                            }
                        })
                    })
                }, o.prototype.unlinkAccount = function(e) {
                    return s(this, void 0, void 0, function() {
                        var t, n, i, r, d, h;
                        return u(this, function(I) {
                            switch (I.label) {
                                case 0:
                                    return I.trys.push([0, 4, , 5]), this.params.goServerUrl ? [3, 2] : [4, this.loginInfoRequest()];
                                case 1:
                                    if (t = I.sent(), this.handleLoginInfo(t), n = (t || {}).goServerUrl, !n) return [2, {
                                        ret: 1,
                                        msg: "unlinkAccount.error: goServerUrl is invalid"
                                    }];
                                    I.label = 2;
                                case 2:
                                    return i = (e || {}).platform, r = i === void 0 ? "" : i, r ? [4, $(this.params.goServerUrl, e)] : [2, {
                                        ret: 1,
                                        msg: "unlinkAccount.error: platform is invalid"
                                    }];
                                case 3:
                                    return d = I.sent(), [2, d];
                                case 4:
                                    return h = I.sent(), [2, {
                                        ret: 2,
                                        msg: "unlinkAccount.error: " + (h == null ? void 0 : h.message)
                                    }];
                                case 5:
                                    return [2]
                            }
                        })
                    })
                }, o.prototype.getAllPasskey = function() {
                    return s(this, void 0, void 0, function() {
                        var e, t, n;
                        return u(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return i.trys.push([0, 3, , 4]), this.params.goServerUrl ? [3, 2] : [4, this.loginInfoRequest()];
                                case 1:
                                    if (e = i.sent(), this.handleLoginInfo(e), t = (e || {}).goServerUrl, !t) return [2, {
                                        ret: 1,
                                        msg: "getAllPasskey.error: goServerUrl is invalid"
                                    }];
                                    i.label = 2;
                                case 2:
                                    return [2, K(this.params.goServerUrl)];
                                case 3:
                                    return n = i.sent(), [2, {
                                        ret: 2,
                                        msg: "unlinkAccount.error: " + (n == null ? void 0 : n.message)
                                    }];
                                case 4:
                                    return [2]
                            }
                        })
                    })
                }, o.prototype.updatePasskey = function(e) {
                    return s(this, void 0, void 0, function() {
                        var t, n, i, r, d, h, I, g;
                        return u(this, function(T) {
                            switch (T.label) {
                                case 0:
                                    return T.trys.push([0, 3, , 4]), this.params.goServerUrl ? [3, 2] : [4, this.loginInfoRequest()];
                                case 1:
                                    if (t = T.sent(), this.handleLoginInfo(t), n = (t || {}).goServerUrl, !n) return [2, {
                                        ret: 1,
                                        msg: "updatePasskey.error: goServerUrl is invalid"
                                    }];
                                    T.label = 2;
                                case 2:
                                    return i = e || {}, r = i.passkey_id, d = r === void 0 ? "" : r, h = i.passkey_name, I = h === void 0 ? "" : h, !d || !I ? [2, {
                                        ret: 1,
                                        msg: "updatePasskey.error: params is invalid"
                                    }] : [2, Z(this.params.goServerUrl, e)];
                                case 3:
                                    return g = T.sent(), [2, {
                                        ret: 2,
                                        msg: "updatePasskey.error: " + (g == null ? void 0 : g.message)
                                    }];
                                case 4:
                                    return [2]
                            }
                        })
                    })
                }, o.prototype.deletePasskey = function(e) {
                    return s(this, void 0, void 0, function() {
                        var t, n, i, r, d;
                        return u(this, function(h) {
                            switch (h.label) {
                                case 0:
                                    return h.trys.push([0, 3, , 4]), this.params.goServerUrl ? [3, 2] : [4, this.loginInfoRequest()];
                                case 1:
                                    if (t = h.sent(), this.handleLoginInfo(t), n = (t || {}).goServerUrl, !n) return [2, {
                                        ret: 1,
                                        msg: "deletePasskey.error: goServerUrl is invalid"
                                    }];
                                    h.label = 2;
                                case 2:
                                    return i = (e || {}).passkey_id, r = i === void 0 ? "" : i, r ? [2, z(this.params.goServerUrl, e)] : [2, {
                                        ret: 1,
                                        msg: "deletePasskey.error: platform is invalid"
                                    }];
                                case 3:
                                    return d = h.sent(), [2, {
                                        ret: 2,
                                        msg: "deletePasskey.error: " + (d == null ? void 0 : d.message)
                                    }];
                                case 4:
                                    return [2]
                            }
                        })
                    })
                }, o
            }();
        if (!window.midasLogin) {
            var x = new v;
            window.midasLogin = x
        }
    })()
})();
