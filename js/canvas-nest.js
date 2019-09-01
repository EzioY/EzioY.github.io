!function() {
	"use strict";

	function e(e) {
		return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
	}

	function t(e, t) {
		return e(t = {
			exports: {}
		}, t.exports), t.exports
	}
	var n = t(function(e, t) {
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var n = 1;
		t.default = function() {
			return "" + n++
		}, e.exports = t.default
	});
	e(n);
	var o = t(function(e, t) {
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = function(e) {
			var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 30,
				n = null;
			return function() {
				for (var o = this, i = arguments.length, r = Array(i), s = 0; s < i; s++) r[s] = arguments[s];
				clearTimeout(n), n = setTimeout(function() {
					e.apply(o, r)
				}, t)
			}
		}, e.exports = t.default
	});
	e(o);
	var i = t(function(e, t) {
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		t.SizeSensorId = "size-sensor-id", t.SensorStyle =
			"display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;opacity:0",
			t.SensorClassName = "size-sensor-object"
	});
	e(i);
	i.SizeSensorId, i.SensorStyle, i.SensorClassName;
	var r = t(function(e, t) {
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.Sensor = void 0;
		var n, r = (n = o) && n.__esModule ? n : {
			default: n
		};
		t.Sensor = function e(t) {
			var n = this;
			! function(e, t) {
				if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
			}(this, e), this.createSensor = function() {
				"static" === getComputedStyle(n.element).position && (n.element.style.position = "relative");
				var e = document.createElement("object");
				return e.onload = function() {
						e.contentDocument.defaultView.addEventListener("resize", n.resizeListener), n.resizeListener()
					}, e.setAttribute("style", i.SensorStyle), e.setAttribute("class", i.SensorClassName), e.type = "text/html", n
					.element.appendChild(e), e.data = "about:blank", e
			}, this.resizeListener = (0, r.default)(function() {
				n.listeners.forEach(function(e) {
					e(n.element)
				})
			}), this.bind = function(e) {
				n.sensor || (n.sensor = n.createSensor()), -1 === n.listeners.indexOf(e) && n.listeners.push(e)
			}, this.unbind = function(e) {
				var t = n.listeners.indexOf(e); - 1 !== t && n.listeners.splice(t, 1), 0 === n.listeners.length && n.sensor &&
					n.destroy()
			}, this.destroy = function() {
				n.sensor && n.sensor.parentNode && (n.sensor.contentDocument.defaultView.removeEventListener("resize", n.resizeListener),
					n.sensor.parentNode.removeChild(n.sensor), n.sensor = void 0, n.listeners = [])
			}, this.element = t, this.listeners = [], this.sensor = void 0
		}
	});
	e(r);
	r.Sensor;
	var s = t(function(e, t) {
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.removeSensor = t.getSensor = void 0;
		var o, s = (o = n) && o.__esModule ? o : {
			default: o
		};
		var a = {};
		t.getSensor = function(e) {
			var t = e.getAttribute(i.SizeSensorId);
			if (t && a[t]) return a[t];
			var n = (0, s.default)();
			e.setAttribute(i.SizeSensorId, n);
			var o = new r.Sensor(e);
			return a[n] = o, o
		}, t.removeSensor = function(e) {
			var t = e.element.getAttribute(i.SizeSensorId);
			e.element.removeAttribute(i.SizeSensorId), e.destroy(), t && a[t] && delete a[t]
		}
	});
	e(s);
	s.removeSensor, s.getSensor;
	var a = t(function(e, t) {
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.clear = t.bind = void 0;
		t.bind = function(e, t) {
			var n = (0, s.getSensor)(e);
			return n.bind(t),
				function() {
					n.unbind(t)
				}
		}, t.clear = function(e) {
			var t = (0, s.getSensor)(e);
			(0, s.removeSensor)(t)
		}
	});
	e(a);
	var u = a.clear,
		l = a.bind,
		c = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame ||
		window.oRequestAnimationFrame || function(e) {
			return window.setTimeout(e, 1e3 / 60)
		},
		d = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.msCancelAnimationFrame ||
		window.oCancelAnimationFrame || window.clearTimeout,
		h = function(e) {
			return new Array(e).fill(0).map(function(e, t) {
				return t
			})
		},
		m = Object.assign || function(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
			}
			return e
		},
		v = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var o = t[n];
					o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e,
						o.key, o)
				}
			}
			return function(t, n, o) {
				return n && e(t.prototype, n), o && e(t, o), t
			}
		}();
	var f, y;
	new(function() {
		function e(t, n) {
			var o = this;
			! function(e, t) {
				if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
			}(this, e), this.randomPoints = function() {
					return h(o.c.count).map(function() {
						return {
							x: Math.random() * o.canvas.width,
							y: Math.random() * o.canvas.height,
							xa: 2 * Math.random() - 1,
							ya: 2 * Math.random() - 1,
							max: 6e3
						}
					})
				}, this.el = t, this.c = m({
					zIndex: -1,
					opacity: .5,
					color: "0,0,0",
					count: 99
				}, n), this.canvas = this.newCanvas(), this.context = this.canvas.getContext("2d"), this.points = this.randomPoints(),
				this.current = {
					x: null,
					y: null,
					max: 2e4
				}, this.all = this.points.concat([this.current]), this.bindEvent(), this.requestFrame(this.drawCanvas)
		}
		return v(e, [{
			key: "bindEvent",
			value: function() {
				var e = this;
				l(this.el, function() {
					e.canvas.width = e.el.clientWidth, e.canvas.height = e.el.clientHeight
				}), this.onmousemove = window.onmousemove, window.onmousemove = function(t) {
					e.current.x = t.clientX - e.el.offsetLeft, e.current.y = t.clientY - e.el.offsetTop, e.onmousemove && e.onmousemove(
						t)
				}, this.onmouseout = window.onmouseout, window.onmouseout = function() {
					e.current.x = null, e.current.y = null, e.onmouseout && e.onmouseout()
				}
			}
		}, {
			key: "newCanvas",
			value: function() {
				"static" === getComputedStyle(this.el).position && (this.el.style.position = "relative");
				var e, t = document.createElement("canvas");
				return t.style.cssText =
					"display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:" +
					(e = this.c).zIndex + ";opacity:" + e.opacity, t.width = this.el.clientWidth, t.height = this.el.clientHeight,
					this.el.appendChild(t), t
			}
		}, {
			key: "requestFrame",
			value: function(e) {
				var t = this;
				this.tid = c(function() {
					return e.call(t)
				})
			}
		}, {
			key: "drawCanvas",
			value: function() {
				var e = this,
					t = this.context,
					n = this.canvas.width,
					o = this.canvas.height,
					i = this.current,
					r = this.points,
					s = this.all;
				t.clearRect(0, 0, n, o);
				var a = void 0,
					u = void 0,
					l = void 0,
					c = void 0,
					d = void 0,
					h = void 0;
				r.forEach(function(r, m) {
					for (r.x += r.xa, r.y += r.ya, r.xa *= r.x > n || r.x < 0 ? -1 : 1, r.ya *= r.y > o || r.y < 0 ? -1 : 1, t.fillRect(
							r.x - .5, r.y - .5, 1, 1), u = m + 1; u < s.length; u++) null !== (a = s[u]).x && null !== a.y && (c = r.x -
						a.x, d = r.y - a.y, (h = c * c + d * d) < a.max && (a === i && h >= a.max / 2 && (r.x -= .03 * c, r.y -=
								.03 * d), l = (a.max - h) / a.max, t.beginPath(), t.lineWidth = l / 2, t.strokeStyle = "rgba(" + e.c.color +
							"," + (l + .2) + ")", t.moveTo(r.x, r.y), t.lineTo(a.x, a.y), t.stroke()))
				}), this.requestFrame(this.drawCanvas)
			}
		}, {
			key: "destroy",
			value: function() {
				u(this.el), window.onmousemove = this.onmousemove, window.onmouseout = this.onmouseout, d(this.tid), this.canvas
					.parentNode.removeChild(this.canvas)
			}
		}]), e
	}())(document.body, (f = document.getElementsByTagName("script"), {
		zIndex: (y = f[f.length - 1]).getAttribute("zIndex"),
		opacity: y.getAttribute("opacity"),
		color: y.getAttribute("color"),
		count: Number(y.getAttribute("count")) || 99
	}))
}();
