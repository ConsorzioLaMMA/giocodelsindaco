(function(t) {
    function a(a) {
        for (var s, r, o = a[0], l = a[1], u = a[2], m = 0, p = []; m < o.length; m++) r = o[m], Object.prototype.hasOwnProperty.call(n, r) && n[r] && p.push(n[r][0]), n[r] = 0;
        for (s in l) Object.prototype.hasOwnProperty.call(l, s) && (t[s] = l[s]);
        c && c(a);
        while (p.length) p.shift()();
        return i.push.apply(i, u || []), e()
    }

    function e() {
        for (var t, a = 0; a < i.length; a++) {
            for (var e = i[a], s = !0, o = 1; o < e.length; o++) {
                var l = e[o];
                0 !== n[l] && (s = !1)
            }
            s && (i.splice(a--, 1), t = r(r.s = e[0]))
        }
        return t
    }
    var s = {},
        n = {
            app: 0
        },
        i = [];

    function r(a) {
        if (s[a]) return s[a].exports;
        var e = s[a] = {
            i: a,
            l: !1,
            exports: {}
        };
        return t[a].call(e.exports, e, e.exports, r), e.l = !0, e.exports
    }
    r.m = t, r.c = s, r.d = function(t, a, e) {
        r.o(t, a) || Object.defineProperty(t, a, {
            enumerable: !0,
            get: e
        })
    }, r.r = function(t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, r.t = function(t, a) {
        if (1 & a && (t = r(t)), 8 & a) return t;
        if (4 & a && "object" === typeof t && t && t.__esModule) return t;
        var e = Object.create(null);
        if (r.r(e), Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
            }), 2 & a && "string" != typeof t)
            for (var s in t) r.d(e, s, function(a) {
                return t[a]
            }.bind(null, s));
        return e
    }, r.n = function(t) {
        var a = t && t.__esModule ? function() {
            return t["default"]
        } : function() {
            return t
        };
        return r.d(a, "a", a), a
    }, r.o = function(t, a) {
        return Object.prototype.hasOwnProperty.call(t, a)
    }, r.p = "./";
    var o = window["webpackJsonp"] = window["webpackJsonp"] || [],
        l = o.push.bind(o);
    o.push = a, o = o.slice();
    for (var u = 0; u < o.length; u++) a(o[u]);
    var c = l;
    i.push([0, "chunk-vendors"]), e()
})({
    0: function(t, a, e) {
        t.exports = e("56d7")
    },
    "02b0": function(t, a, e) {
        t.exports = e.p + "img/IT.6f245478.png"
    },
    "11a3": function(t, a, e) {},
    1481: function(t, a, e) {
        "use strict";
        var s = e("7e1c"),
            n = e.n(s);
        n.a
    },
    "2f61": function(t, a, e) {
        t.exports = e.p + "img/start.a243c571.png"
    },
    "331c": function(t, a, e) {
        t.exports = e.p + "img/inizia.36429c85.png"
    },
    3350: function(t, a, e) {},
    3383: function(t, a, e) {
        t.exports = e.p + "img/medium.8fdad3be.png"
    },
    "3a3e": function(t, a, e) {
        t.exports = e.p + "img/english1.e3717852.jpg"
    },
    "3c85": function(t, a, e) {
        "use strict";
        var s = e("11a3"),
            n = e.n(s);
        n.a
    },
    4022: function(t, a, e) {
        "use strict";
        var s = e("f9ef"),
            n = e.n(s);
        n.a
    },
    "45b1": function(t, a, e) {
        t.exports = e.p + "img/mediumL.4ef7526e.png"
    },
    "56d7": function(t, a, e) {
        "use strict";
        e.r(a);
        e("cadf"), e("551c"), e("f751"), e("097d");
        var s = e("2b0e"),
            n = function() {
                var t = this,
                    a = t.$createElement,
                    e = t._self._c || a;
                return e("div", {
                    attrs: {
                        id: "app"
                    }
                }, [e("router-view")], 1)
            },
            i = [],
            r = {
                name: "App"
            },
            o = r,
            l = e("2877"),
            u = Object(l["a"])(o, n, i, !1, null, null, null),
            c = u.exports,
            m = e("8c4f"),
            p = function() {
                var t = this,
                    a = t.$createElement,
                    e = t._self._c || a;
                return e("div", {
                    attrs: {
                        id: "myImage"
                    }
                }, [e("swiper", {
                    staticClass: "swiffer",
                    attrs: {
                        options: t.swiperOption
                    },
                    on: {
                        reachEnd: t.activateButton
                    }
                }, [e("swiper-slide", [e("img", {
                    attrs: {
                        src: t.getImage(0),
                        alt: "pagina",
                        id: "image"
                    }
                })]), e("swiper-slide", [e("img", {
                    attrs: {
                        src: t.getImage(1),
                        alt: "pagina",
                        id: "image"
                    }
                })]), e("swiper-slide", [e("img", {
                    attrs: {
                        src: t.getImage(2),
                        alt: "pagina",
                        id: "image"
                    }
                })]), e("div", {
                    staticClass: "swiper-pagination",
                    attrs: {
                        slot: "pagination"
                    },
                    slot: "pagination"
                }), e("div", {
                    staticClass: "swiper-button-prev",
                    attrs: {
                        slot: "button-prev"
                    },
                    slot: "button-prev"
                }), e("div", {
                    staticClass: "swiper-button-next",
                    attrs: {
                        slot: "button-next"
                    },
                    slot: "button-next"
                })], 1), e("router-link", {
                    attrs: {
                        to: {
                            name: "Game",
                            params: {
                                lang: t.lang
                            }
                        }
                    }
                }, [e("img", {
                    staticClass: "iniziaIMG",
                    attrs: {
                        src: t.getImage(3),
                        alt: "button"
                    }
                })])], 1)
            },
            g = [],
            d = {
                avanti: e("5945"),
                italian0: e("e18e"),
                italian1: e("7c08"),
                italian2: e("e575"),
                inizia: e("331c")
            },
            f = d,
            v = {
                next: e("702d"),
                english0: e("644d"),
                english1: e("3a3e"),
                english2: e("b82a"),
                start: e("2f61")
            },
            h = v,
            _ = (e("dfa4"), e("7212")),
            b = (f.inizia, f.italian0, {
                name: "Istruzioni",
                data: function() {
                    return {
                        lang: this.$route.params.lang,
                        swiperOption: {
                            pagination: {
                                el: ".swiper-pagination",
                                type: "progressbar"
                            },
                            navigation: {
                                nextEl: ".swiper-button-next",
                                prevEl: ".swiper-button-prev"
                            }
                        }
                    }
                },
                components: {
                    swiper: _["swiper"],
                    swiperSlide: _["swiperSlide"]
                },
                methods: {
                    getImage: function(t) {
                        var a;
                        switch (t) {
                            case 0:
                                a = "it" === this.$route.params.lang ? f.italian0 : h.english0;
                                break;
                            case 1:
                                a = "it" === this.$route.params.lang ? f.italian1 : h.english1;
                                break;
                            case 2:
                                a = "it" === this.$route.params.lang ? f.italian2 : h.english2;
                                break;
                            case 3:
                                a = "it" === this.$route.params.lang ? f.inizia : h.start
                        }
                        return a
                    },
                    activateButton: function() {
                        !1
                    },
                    nextPage: function() {
                        console.log("Next Page")
                    }
                }
            }),
            x = b,
            C = (e("a2f9"), Object(l["a"])(x, p, g, !1, null, null, null)),
            $ = C.exports,
            I = function() {
                var t = this,
                    a = t.$createElement,
                    s = t._self._c || a;
                return s("div", {
                    attrs: {
                        id: "head"
                    }
                }, [s("img", {
                    staticClass: "bordo",
                    attrs: {
                        src: e("f4ce")
                    }
                }), s("nav", [s("button", {
                    attrs: {
                        id: "italian",
                        disabled: t.italianButton
                    },
                    on: {
                        click: function(a) {
                            return a.preventDefault(), t.toItalian(a)
                        }
                    }
                }, [s("img", {
                    staticClass: "ButtonIMG",
                    attrs: {
                        src: e("02b0")
                    }
                })]), s("button", {
                    attrs: {
                        id: "english",
                        disabled: t.englishButton
                    },
                    on: {
                        click: function(a) {
                            return a.preventDefault(), t.toEnglish(a)
                        }
                    }
                }, [s("img", {
                    staticClass: "ButtonIMG",
                    attrs: {
                        src: e("998d")
                    }
                })])])])
            },
            y = [],
            w = {
                root: "../../src/assets/",
                ITALIAN_IMAGE: "italian",
                ENGLISH_IMAGE: "english",
                currentImage: "italian",
                extension: ".jpg"
            },
            k = w,
            E = !0,
            G = !1,
            M = k.ITALIAN_IMAGE,
            P = {
                name: "Header",
                data: function() {
                    return {
                        italianButton: E,
                        englishButton: G,
                        currentLanguage: M
                    }
                },
                methods: {
                    toItalian: function() {
                        this.italianButton = !0, this.englishButton = !1, M = k.ITALIAN_IMAGE, console.log(M)
                    },
                    toEnglish: function() {
                        this.italianButton = !1, this.englishButton = !0, M = k.ENGLISH_IMAGE, console.log(M)
                    }
                }
            },
            j = P,
            O = (e("4022"), Object(l["a"])(j, I, y, !1, null, null, null)),
            A = O.exports,
            N = function() {
                var t = this,
                    a = t.$createElement,
                    e = t._self._c || a;
                return e("div", {
                    attrs: {
                        id: "selezione"
                    }
                }, [t._l(t.maxPlayers, (function(a) {
                    return e("tr", {
                        key: a
                    }, [1 == a ? e("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.message,
                            expression: "message"
                        }],
                        attrs: {
                            placeholder: "Citta'Piccola",
                            id: t.m1
                        },
                        domProps: {
                            value: t.message
                        },
                        on: {
                            input: function(a) {
                                a.target.composing || (t.message = a.target.value)
                            }
                        }
                    }) : t._e(), 2 == a ? e("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.message,
                            expression: "message"
                        }],
                        attrs: {
                            placeholder: "Citta'Media",
                            id: t.m2
                        },
                        domProps: {
                            value: t.message
                        },
                        on: {
                            input: function(a) {
                                a.target.composing || (t.message = a.target.value)
                            }
                        }
                    }) : t._e(), 3 == a ? e("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.message,
                            expression: "message"
                        }],
                        attrs: {
                            placeholder: "Citta'Grande",
                            id: t.m3
                        },
                        domProps: {
                            value: t.message
                        },
                        on: {
                            input: function(a) {
                                a.target.composing || (t.message = a.target.value)
                            }
                        }
                    }) : t._e(), 4 == a ? e("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.message,
                            expression: "message"
                        }],
                        attrs: {
                            placeholder: "Citta'Piccola",
                            id: t.m4,
                            disabled: t.dis1
                        },
                        domProps: {
                            value: t.message
                        },
                        on: {
                            input: function(a) {
                                a.target.composing || (t.message = a.target.value)
                            }
                        }
                    }) : t._e(), 5 == a ? e("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.message,
                            expression: "message"
                        }],
                        attrs: {
                            placeholder: "Citta'Media",
                            id: t.m5,
                            disabled: t.dis2
                        },
                        domProps: {
                            value: t.message
                        },
                        on: {
                            input: function(a) {
                                a.target.composing || (t.message = a.target.value)
                            }
                        }
                    }) : t._e(), 6 == a ? e("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.message,
                            expression: "message"
                        }],
                        attrs: {
                            placeholder: "Citta'Grande",
                            id: t.m6,
                            disabled: t.dis3
                        },
                        domProps: {
                            value: t.message
                        },
                        on: {
                            input: function(a) {
                                a.target.composing || (t.message = a.target.value)
                            }
                        }
                    }) : t._e(), 7 == a ? e("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.message,
                            expression: "message"
                        }],
                        attrs: {
                            placeholder: "Citta'Piccola",
                            id: t.m7,
                            disabled: t.dis4
                        },
                        domProps: {
                            value: t.message
                        },
                        on: {
                            input: function(a) {
                                a.target.composing || (t.message = a.target.value)
                            }
                        }
                    }) : t._e(), 8 == a ? e("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.message,
                            expression: "message"
                        }],
                        attrs: {
                            placeholder: "Citta'Media",
                            id: t.m8,
                            disabled: t.dis5
                        },
                        domProps: {
                            value: t.message
                        },
                        on: {
                            input: function(a) {
                                a.target.composing || (t.message = a.target.value)
                            }
                        }
                    }) : t._e(), a > 3 ? e("input", t._g({
                        attrs: {
                            type: "radio",
                            name: "i",
                            id: a
                        }
                    }, t.activate(a))) : t._e()])
                })), e("router-link", {
                    attrs: {
                        to: "{name: 'Game', params: {players : players} }"
                    }
                })], 2)
            },
            S = [],
            L = {
                name: "Selezione",
                data: function() {
                    return {
                        maxPlayers: 8,
                        players: 3,
                        dis1: !0,
                        dis2: !0,
                        dis3: !0,
                        dis4: !0,
                        dis5: !0
                    }
                },
                methods: {
                    changePlayers: function() {
                        players = players
                    },
                    activate: function(t) {
                        4 == t ? (dis1 = !1, dis2 = !0, dis3 = !0, dis4 = !0, dis5 = !0) : 5 == t ? (dis1 = !1, dis2 = !1, dis3 = !0, dis4 = !0, dis5 = !0) : 5 == t ? (dis1 = !1, dis2 = !1, dis3 = !1, dis4 = !0, dis5 = !0) : 5 == t ? (dis1 = !1, dis2 = !1, dis3 = !1, dis4 = !1, dis5 = !0) : 5 == t && (dis1 = !1, dis2 = !1, dis3 = !1, dis4 = !1, dis5 = !1)
                    }
                }
            },
            B = L,
            T = (e("c999"), e("3c85"), Object(l["a"])(B, N, S, !1, null, null, null)),
            z = T.exports,
            R = function() {
                var t = this,
                    a = t.$createElement,
                    e = t._self._c || a;
                return e("div", [e("div", {
                    staticClass: "testo"
                }, ["it" === t.lang ? e("h1", {
                    staticClass: "turno"
                }, [t._v(" Turno " + t._s(t.turn) + " ")]) : t._e(), "eng" === t.lang ? e("h1", {
                    staticClass: "turno"
                }, [t._v(" Round " + t._s(t.turn) + " ")]) : t._e(), "it" === t.lang ? e("h1", {
                    staticClass: "probabilita"
                }, [t._v("Probabilita' precipitazioni: " + t._s(t.probabilita) + " % ")]) : t._e(), "eng" === t.lang ? e("h1", {
                    staticClass: "probabilita"
                }, [t._v("Rainfall Probability: " + t._s(t.probabilita) + " % ")]) : t._e(), "it" === t.lang ? e("h1", {
                    staticClass: "assicuri"
                }, [t._v(" cliccare la casella della rispettiva citta' per assicurarsi ")]) : t._e(), "eng" === t.lang ? e("h1", {
                    staticClass: "assicuri"
                }, [t._v(" click on the respective city to insure against rainfall ")]) : t._e()]), t._l(t.teams, (function(a, s) {
                    return e("tr", {
                        key: a
                    }, ["eng" == t.lang ? e("span", [a.includes("Big") ? e("img", {
                        staticClass: "image",
                        attrs: {
                            src: t.getImage(0)
                        }
                    }) : a.includes("Medium") ? e("img", {
                        staticClass: "image1",
                        attrs: {
                            src: t.getImage(1)
                        }
                    }) : e("img", {
                        staticClass: "image2",
                        attrs: {
                            src: t.getImage(2)
                        }
                    })]) : e("span", [a.includes("Grande") ? e("img", {
                        staticClass: "image",
                        attrs: {
                            src: t.getImage(0)
                        }
                    }) : a.includes("Media") ? e("img", {
                        staticClass: "image1",
                        attrs: {
                            src: t.getImage(1)
                        }
                    }) : e("img", {
                        staticClass: "image2",
                        attrs: {
                            src: t.getImage(2)
                        }
                    })]), e("label", {
                        staticClass: "container"
                    }, [e("span", {
                        staticClass: "cityName"
                    }, [t._v(" " + t._s(a) + " ")]), e("input", {
                        attrs: {
                            type: "checkbox",
                            id: s
                        }
                    }), e("span", {
                        staticClass: "checkmark"
                    })])])
                })), e("router-link", {
                    attrs: {
                        to: {
                            name: "Results",
                            params: {
                                lang: t.lang,
                                teams: t.teams,
                                risultati: t.risultati,
                                turn: t.turn,
                                events: t.events
                            }
                        }
                    }
                }, [e("button", {
                    staticClass: "button",
                    on: {
                        click: t.save
                    }
                }, [t._v(" >> ")])])], 2)
            },
            F = [],
            H = (e("f386"), e("9c86"), e("5df3"), e("1c4c"), {
                big: e("af81"),
                bigL: e("9aa1"),
                bigS: e("6ee9"),
                medium: e("3383"),
                mediumL: e("45b1"),
                mediumS: e("855f"),
                small: e("ff80"),
                smallL: e("ccaa"),
                smallS: e("5fb3")
            }),
            D = H,
            U = {
                name: "Game",
                props: [],
                data: function() {
                    return {
                        teams: ["Big", "Medium", "Small"],
                        probabilita: Math.floor(100 * Math.random()),
                        index: 0,
                        risultati: Array.from(Array(3), (function() {
                            return new Array(10)
                        })),
                        turn: 1,
                        events: new Array(10),
                        lang: "it"
                    }
                },
                methods: {
                    getImage: function(t) {
                        switch (t) {
                            case 0:
                                return D.big;
                            case 1:
                                return D.medium;
                            case 2:
                                return D.small
                        }
                    },
                    save: function() {
                        for (var t in this.teams) void 0 === this.$route.params.turn ? this.risultati[t][0] = document.getElementById(t).checked : this.risultati[t][this.$route.params.turn - 1] = document.getElementById(t).checked;
                        var a = Math.floor(100 * Math.random());
                        a <= this.probabilita ? this.event = !0 : this.event = !1, this.events[this.turn - 1] = this.event
                    }
                },
                created: function() {
                    void 0 === this.$route.params.turn ? (this.turn = 1, this.lang = this.$route.params.lang) : (this.turn = this.$route.params.turn, this.risultati = this.$route.params.risultati, this.events = this.$route.params.events, this.lang = this.$route.params.lang), "it" === this.lang ? this.teams = ["Citta' Grande", "Citta' Media", "Citta' Piccola"] : this.teams = ["Big city", "Medium city", "Small city"]
                }
            },
            J = U,
            V = (e("d03f"), Object(l["a"])(J, R, F, !1, null, null, null)),
            Y = V.exports,
            Z = function() {
                var t = this,
                    a = t.$createElement,
                    e = t._self._c || a;
                return e("div", ["it" == t.lang ? e("span", [10 === t.$route.params.turn ? e("span", {
                    staticClass: "titolo"
                }, [t._v(" Turno Finale ")]) : e("span", {
                    staticClass: "titolo"
                }, [t._v(" Turno " + t._s(t.$route.params.turn) + " ")])]) : e("span", [10 === t.$route.params.turn ? e("span", {
                    staticClass: "titolo"
                }, [t._v(" Final Round ")]) : e("span", {
                    staticClass: "titolo"
                }, [t._v(" Turn " + t._s(t.$route.params.turn) + " ")])]), "it" == t.lang ? e("span", [!0 === t.$route.params.events[this.$route.params.turn - 1] ? e("span", {
                    staticClass: "esito"
                }, [t._v(" Ha nevicato ")]) : e("span", {
                    staticClass: "esito"
                }, [t._v(" Non ha nevicato ")])]) : e("span", [!0 === t.$route.params.events[this.$route.params.turn - 1] ? e("span", {
                    staticClass: "esito"
                }, [t._v(" It Rained ")]) : e("span", {
                    staticClass: "esito"
                }, [t._v(" It didn't rain ")])]), t._l(t.$route.params.teams, (function(a, s) {
                    return e("tr", {
                        key: a
                    }, ["eng" == t.lang ? e("span", [a.includes("Big") ? e("img", {
                        staticClass: "image",
                        attrs: {
                            src: t.getImage(0)
                        }
                    }) : a.includes("Medium") ? e("img", {
                        staticClass: "image1",
                        attrs: {
                            src: t.getImage(1)
                        }
                    }) : e("img", {
                        staticClass: "image2",
                        attrs: {
                            src: t.getImage(2)
                        }
                    })]) : e("span", [a.includes("Grande") ? e("img", {
                        staticClass: "image",
                        attrs: {
                            src: t.getImage(0)
                        }
                    }) : a.includes("Media") ? e("img", {
                        staticClass: "image1",
                        attrs: {
                            src: t.getImage(1)
                        }
                    }) : e("img", {
                        staticClass: "image2",
                        attrs: {
                            src: t.getImage(2)
                        }
                    })]), e("label", {
                        staticClass: "container"
                    }, ["it" == t.lang ? e("span", [!0 === t.$route.params.risultati[s][t.turn - 1] ? e("span", {
                        staticClass: "scelta"
                    }, [t._v(" Assicurato ")]) : e("span", {
                        staticClass: "scelta"
                    }, [t._v(" Non Assicurato ")])]) : e("span", [!0 === t.$route.params.risultati[s][t.turn - 1] ? e("span", {
                        staticClass: "scelta"
                    }, [t._v(" Insured ")]) : e("span", {
                        staticClass: "scelta"
                    }, [t._v(" Not Insured ")])])])])
                })), (t.lang, e("span", [10 === t.$route.params.turn ? e("router-link", {
                    attrs: {
                        to: {
                            name: "Fine",
                            params: {
                                lang: t.lang,
                                events: t.events,
                                teams: t.teams,
                                risultati: t.$route.params.risultati
                            }
                        }
                    }
                }, [e("button", {
                    staticClass: "button"
                }, [t._v(" >> ")])]) : e("router-link", {
                    attrs: {
                        to: {
                            name: "Game",
                            params: {
                                lang: t.lang,
                                events: t.events,
                                teams: t.teams,
                                risultati: t.$route.params.risultati,
                                turn: t.turn
                            }
                        }
                    }
                }, [e("button", {
                    staticClass: "button",
                    on: {
                        click: t.nextTurn
                    }
                }, [t._v(" >> ")])])], 1))], 2)
            },
            q = [],
            K = {
                name: "Results",
                data: function() {
                    return {
                        lang: this.$route.params.lang,
                        teams: this.$route.params.teams,
                        turn: this.$route.params.turn,
                        events: this.$route.params.events
                    }
                },
                methods: {
                    getImage: function(t) {
                        switch (t) {
                            case 0:
                                return D.big;
                            case 1:
                                return D.medium;
                            case 2:
                                return D.small
                        }
                    },
                    nextTurn: function() {
                        this.turn = this.turn + 1, this.first = !1
                    },
                    calculate: function(t) {
                        var a = 0;
                        for (var e in 10) void 0 !== this.$route.params.risultati[t][e] && (a += this.$route.params.risultati[t][e]);
                        return a
                    }
                },
                created: function() {
                    this.lang = this.$route.params.lang
                }
            },
            Q = K,
            W = (e("e4e8"), Object(l["a"])(Q, Z, q, !1, null, null, null)),
            X = W.exports,
            tt = function() {
                var t = this,
                    a = t.$createElement,
                    e = t._self._c || a;
                return e("div", [e("table", {
                    attrs: {
                        id: "fine"
                    }
                }, [e("tr", ["it" === t.lang ? e("td", [t._v(" Giorno ")]) : e("td", [t._v(" Day ")]), "it" == t.lang ? e("td", [t._v(" Evento ")]) : e("td", [t._v(" Event ")]), t._l(t.$route.params.teams, (function(a) {
                    return e("td", {
                        key: a
                    }, [t._v(" " + t._s(a) + " ")])
                }))], 2), t._l(10, (function(a) {
                    return e("tr", {
                        key: a
                    }, [e("td", [t._v(" " + t._s(a) + " ")]), e("td", [t._v(" " + t._s(t.$route.params.events[a - 1]) + " ")]), t._l(t.$route.params.teams, (function(s, n) {
                        return e("td", {
                            key: s
                        }, [t._v(" " + t._s(t.$route.params.risultati[n][a - 1]) + " ")])
                    }))], 2)
                })), e("tr", [e("td", [t._v(" CSI ")]), e("td"), t._l(t.$route.params.teams, (function(a, s) {
                    return e("td", {
                        key: a
                    }, [t._v(" " + t._s(t.csi(s)) + " ")])
                }))], 2), "it" === t.lang ? e("span", {
                    staticClass: "Vincitore"
                }, [t._v("\n        Il vincitore e' " + t._s(t.$route.params.teams[t.team]) + " col punteggio " + t._s(t.max) + "\n    ")]) : e("span", {
                    staticClass: "Vincitore"
                }, [t._v("\n        The winner is " + t._s(t.$route.params.teams[t.team]) + " with a score of " + t._s(t.max) + "\n    ")])], 2)])
            },
            at = [],
            et = {
                name: "Fine",
                data: function() {
                    return {
                        lang: this.$route.params.lang,
                        max: -1,
                        team: null
                    }
                },
                methods: {
                    csi: function(t) {
                        for (var a = 0, e = 0, s = 0, n = 0, i = 0; i < 10; i++) !0 === this.$route.params.risultati[t][i - 1] && !0 === this.$route.params.events[i] ? a++ : !0 === this.$route.params.risultati[t][i - 1] && !1 === this.$route.params.events[i] ? e++ : !1 === this.$route.params.risultati[t][i - 1] && !0 === this.$route.params.events[i] && s++;
                        return n = a / (a + e + s), n = n.toFixed(2), n > this.max && (this.max = n, this.team = t), n
                    }
                },
                created: function() {
                    this.lang = this.$route.params.lang
                }
            },
            st = et,
            nt = (e("8be9"), Object(l["a"])(st, tt, at, !1, null, null, null)),
            it = nt.exports,
            rt = function() {
                var t = this,
                    a = t.$createElement,
                    s = t._self._c || a;
                return s("div", {
                    attrs: {
                        id: "lingua"
                    }
                }, [s("h1", {
                    attrs: {
                        id: "Testo"
                    }
                }, [t._v(" SELEZIONA LA LINGUA ")]), s("h1", {
                    attrs: {
                        id: "Testo"
                    }
                }, [t._v(" CHOOSE YOUR LANGUAGE ")]), s("router-link", {
                    attrs: {
                        to: {
                            name: "Istruzioni",
                            params: {
                                lang: t.lang
                            }
                        }
                    }
                }, [s("img", {
                    staticClass: "ButtonIMG",
                    attrs: {
                        id: "IT",
                        src: e("02b0")
                    },
                    on: {
                        click: function(a) {
                            return t.changeLanguage("it")
                        }
                    }
                })]), s("router-link", {
                    attrs: {
                        to: {
                            name: "Istruzioni",
                            params: {
                                lang: t.lang
                            }
                        }
                    }
                }, [s("img", {
                    staticClass: "ButtonIMG",
                    attrs: {
                        id: "ENG",
                        src: e("998d")
                    },
                    on: {
                        click: function(a) {
                            return t.changeLanguage("eng")
                        }
                    }
                })])], 1)
            },
            ot = [],
            lt = {
                name: "Language",
                data: function() {
                    return {
                        lang: "it"
                    }
                },
                methods: {
                    changeLanguage: function(t) {
                        this.lang = t
                    }
                }
            },
            ut = lt,
            ct = (e("1481"), Object(l["a"])(ut, rt, ot, !1, null, null, null)),
            mt = ct.exports;
        s["a"].use(m["a"]);
        var pt = new m["a"]({
            routes: [{
                path: "/",
                name: "Language",
                component: mt
            }, {
                path: "/header",
                name: "Header",
                component: A
            }, {
                path: "/selezione",
                name: "Selezione",
                component: z
            }, {
                path: "/game",
                name: "Game",
                component: Y
            }, {
                path: "/results",
                name: "Results",
                component: X
            }, {
                path: "/fine",
                name: "Fine",
                component: it
            }, {
                path: "/istruzioni",
                name: "Istruzioni",
                component: $
            }]
        });
        s["a"].config.productionTip = !1, new s["a"]({
            el: "#app",
            router: pt,
            render: function(t) {
                return t(c)
            }
        }).$mount("#app")
    },
    5945: function(t, a, e) {
        t.exports = e.p + "img/avanti.c40ff228.png"
    },
    "5fb3": function(t, a, e) {
        t.exports = e.p + "img/smallS.a2c569db.png"
    },
    "644d": function(t, a, e) {
        t.exports = e.p + "img/english0.791328aa.jpg"
    },
    "6ee9": function(t, a, e) {
        t.exports = e.p + "img/bigS.5c77f887.png"
    },
    "702d": function(t, a, e) {
        t.exports = e.p + "img/next.372f7dc6.png"
    },
    7651: function(t, a, e) {},
    "7c08": function(t, a, e) {
        t.exports = e.p + "img/italian1.2b08ec07.jpg"
    },
    "7e1c": function(t, a, e) {},
    "855f": function(t, a, e) {
        t.exports = e.p + "img/mediumS.ce114d53.png"
    },
    "8be9": function(t, a, e) {
        "use strict";
        var s = e("dc9c"),
            n = e.n(s);
        n.a
    },
    "8e78": function(t, a, e) {},
    "998d": function(t, a, e) {
        t.exports = e.p + "img/ENG.0d164b78.jpg"
    },
    "9aa1": function(t, a, e) {
        t.exports = e.p + "img/bigL.29c849f5.png"
    },
    a2f9: function(t, a, e) {
        "use strict";
        var s = e("3350"),
            n = e.n(s);
        n.a
    },
    af81: function(t, a, e) {
        t.exports = e.p + "img/big.dd35f06e.png"
    },
    b82a: function(t, a, e) {
        t.exports = e.p + "img/english2.659ca512.jpg"
    },
    c999: function(t, a, e) {
        "use strict";
        var s = e("cc92"),
            n = e.n(s);
        n.a
    },
    cc92: function(t, a, e) {},
    ccaa: function(t, a, e) {
        t.exports = e.p + "img/smallL.d00f4914.png"
    },
    d03f: function(t, a, e) {
        "use strict";
        var s = e("8e78"),
            n = e.n(s);
        n.a
    },
    dc9c: function(t, a, e) {},
    e18e: function(t, a, e) {
        t.exports = e.p + "img/italian0.707a40ad.jpg"
    },
    e4e8: function(t, a, e) {
        "use strict";
        var s = e("7651"),
            n = e.n(s);
        n.a
    },
    e575: function(t, a, e) {
        t.exports = e.p + "img/italian2.287b4197.jpg"
    },
    f4ce: function(t, a, e) {
        t.exports = e.p + "img/bordo.26028522.png"
    },
    f9ef: function(t, a, e) {},
    ff80: function(t, a, e) {
        t.exports = e.p + "img/small.150f4fcc.png"
    }
});
//# sourceMappingURL=app.ef2a97b6.js.map
