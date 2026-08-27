//#region src/lib/pixel-walk/const.ts
var e = 1280, t = .78, n = {
	bg: "#0c0c0c",
	dot: "#d2d2cc",
	dotDim: "#8a8a86",
	peach: "#e08b6a",
	peachD: "#c56a48",
	ink: "#ecece8",
	glass: "#5a3038",
	book: "#6d7a9c",
	wait: "#e08b6a"
}, r = [
	"walk-1",
	"walk-2",
	"walk-3",
	"walk-4",
	"look-1",
	"look-2",
	"look-3",
	"look-4",
	"sit",
	"type",
	"shake",
	"wave",
	"crouch",
	"jump",
	"push",
	"book"
], i = [
	"study",
	"archive",
	"cafe",
	"warroom",
	"rooftop",
	"street"
], a = {
	A: [
		14,
		17,
		17,
		31,
		17,
		17,
		17
	],
	B: [
		30,
		17,
		17,
		30,
		17,
		17,
		30
	],
	C: [
		14,
		17,
		16,
		16,
		16,
		17,
		14
	],
	D: [
		30,
		17,
		17,
		17,
		17,
		17,
		30
	],
	E: [
		31,
		16,
		16,
		30,
		16,
		16,
		31
	],
	F: [
		31,
		16,
		16,
		30,
		16,
		16,
		16
	],
	G: [
		14,
		17,
		16,
		19,
		17,
		17,
		14
	],
	H: [
		17,
		17,
		17,
		31,
		17,
		17,
		17
	],
	I: [
		14,
		4,
		4,
		4,
		4,
		4,
		14
	],
	K: [
		17,
		18,
		20,
		24,
		20,
		18,
		17
	],
	L: [
		16,
		16,
		16,
		16,
		16,
		16,
		31
	],
	N: [
		17,
		25,
		21,
		19,
		17,
		17,
		17
	],
	O: [
		14,
		17,
		17,
		17,
		17,
		17,
		14
	],
	P: [
		30,
		17,
		17,
		30,
		16,
		16,
		16
	],
	R: [
		30,
		17,
		17,
		30,
		20,
		18,
		17
	],
	S: [
		14,
		17,
		16,
		14,
		1,
		17,
		14
	],
	T: [
		31,
		4,
		4,
		4,
		4,
		4,
		4
	],
	U: [
		17,
		17,
		17,
		17,
		17,
		17,
		14
	],
	W: [
		17,
		17,
		17,
		21,
		21,
		21,
		10
	],
	Y: [
		17,
		17,
		10,
		4,
		4,
		4,
		4
	],
	" ": [
		0,
		0,
		0,
		0,
		0,
		0,
		0
	],
	"-": [
		0,
		0,
		0,
		31,
		0,
		0,
		0
	],
	"?": [
		14,
		17,
		1,
		2,
		4,
		0,
		4
	]
};
function o(e, t, n, r, i = 1.7) {
	e.fillStyle = r, e.beginPath(), e.arc(Math.round(t) + .5, Math.round(n) + .5, i, 0, Math.PI * 2), e.fill();
}
function s(e, t, n, r, i, a, s = 5) {
	let c = r - t, l = i - n, u = Math.ceil((Math.hypot(c, l) || 1) / s);
	for (let r = 0; r <= u; r++) {
		let i = r / u;
		o(e, t + c * i, n + l * i, a, 1.55);
	}
}
function c(e, t, n, r, i, a) {
	s(e, t, n, t + r, n, a), s(e, t + r, n, t + r, n + i, a), s(e, t + r, n + i, t, n + i, a), s(e, t, n + i, t, n, a);
}
function l(e, t, n, r, i, a, s = !1) {
	if (s) {
		for (let s = n - i; s <= n + i; s += 5) for (let c = t - r; c <= t + r; c += 5) {
			let l = (c - t) / r, u = (s - n) / i;
			l * l + u * u <= 1 && o(e, c, s, a, 1.45);
		}
		return;
	}
	let c = Math.max(16, Math.round(2 * Math.PI * Math.max(r, i) / 5));
	for (let s = 0; s < c; s++) {
		let l = s / c * Math.PI * 2;
		o(e, t + Math.cos(l) * r, n + Math.sin(l) * i, a, 1.6);
	}
}
function u(e, t, n, r, i, o = 2) {
	let s = a[t] ?? a["?"];
	for (let t = 0; t < 7; t++) {
		let a = s[t] ?? 0;
		for (let s = 0; s < 5; s++) a & 1 << 4 - s && (e.fillStyle = i, e.fillRect(n + s * o, r + t * o, o, o));
	}
}
function d(e, t, n, r, i, a = 2) {
	let o = 6 * a, s = n - (t.length * o - a) / 2;
	for (let n of t) u(e, n, s, r, i, a), s += o;
}
function f(e, t, n, r, i) {
	for (let a = 0; a < r; a++) {
		let o = a / r * Math.PI * 2 + Math.random() * .4, s = 40 + Math.random() * 90;
		e.push({
			x: t,
			y: n,
			vx: Math.cos(o) * s,
			vy: Math.sin(o) * s - 20,
			life: .55 + Math.random() * .4,
			max: .9,
			r: 1.4 + Math.random() * 1.4,
			color: i
		});
	}
}
function p(e, t) {
	for (let n = e.length - 1; n >= 0; n--) {
		let r = e[n];
		r && (r.life -= t, r.x += r.vx * t, r.y += r.vy * t, r.vy += 80 * t, r.life <= 0 && e.splice(n, 1));
	}
}
function m(e, t) {
	for (let n of t) e.globalAlpha = Math.max(0, n.life / n.max), o(e, n.x, n.y, n.color, n.r);
	e.globalAlpha = 1;
}
function h(e, t) {
	let r = n.dot, i = n.dotDim;
	s(e, 20, 576, 1260, 576, r), s(e, 20, 582, 1260, 582, i), s(e, 40, 110, 1240, 110, i), s(e, 40, 110, 16, 64, i), s(e, 1240, 110, 1264, 64, i), s(e, 16, 64, 1264, 64, i);
	for (let n = 70; n < 1220; n += 180) s(e, n, 110, n, 576, i), c(e, n + 22, 150, 128, 168, i), s(e, n + 86, 150, n + 86, 318, i), s(e, n + 22, 234, n + 150, 234, i), Math.floor(t * 1.1 + n * .02) % 5 == 0 && c(e, n + 36, 164, 44, 56, r), s(e, n + 86, 110, n + 86, 132, i), o(e, n + 86, 138, r, 2.2);
	l(e, 160, 530, 28, 14, i, !0), s(e, 160, 530, 160, 470, i), l(e, 160, 455, 36, 28, r), l(e, 148, 440, 16, 14, r), l(e, 176, 442, 14, 12, r), c(e, 980, 520, 160, 12, r), s(e, 996, 532, 996, 576, i), s(e, 1124, 532, 1124, 576, i);
}
//#endregion
//#region src/lib/pixel-walk/script.ts
var g = [
	{
		id: "study",
		room: "study",
		caption: "flag the uncertainty",
		artist: "KUSTOD",
		startX: -70,
		clips: [
			{
				kind: "walk",
				toX: 210
			},
			{
				kind: "hold",
				pose: "look-up",
				duration: 1.5
			},
			{
				kind: "hold",
				pose: "idle",
				duration: .35
			},
			{
				kind: "walk",
				toX: 430
			},
			{
				kind: "hold",
				pose: "sit",
				duration: .45
			},
			{
				kind: "hold",
				pose: "type",
				duration: 3.4
			},
			{
				kind: "hold",
				pose: "shake",
				duration: 1.7
			},
			{
				kind: "event",
				name: "stamp-no"
			},
			{
				kind: "item",
				item: "book"
			},
			{
				kind: "hold",
				pose: "idle",
				duration: .4
			},
			{
				kind: "walk",
				toX: 1380
			}
		]
	},
	{
		id: "yes-hall",
		room: null,
		caption: "not an expensive mirror",
		artist: "KUSTOD",
		startX: -70,
		clips: [
			{
				kind: "walk",
				toX: 180
			},
			{
				kind: "event",
				name: "pop-0"
			},
			{
				kind: "hold",
				pose: "idle",
				duration: .25
			},
			{
				kind: "walk",
				toX: 360
			},
			{
				kind: "event",
				name: "pop-1"
			},
			{
				kind: "walk",
				toX: 540
			},
			{
				kind: "event",
				name: "pop-2"
			},
			{
				kind: "walk",
				toX: 720
			},
			{
				kind: "event",
				name: "pop-3"
			},
			{
				kind: "hold",
				pose: "look-up",
				duration: .7
			},
			{
				kind: "hold",
				pose: "shake",
				duration: 1.1
			},
			{
				kind: "event",
				name: "pop-4"
			},
			{
				kind: "event",
				name: "stamp-wait"
			},
			{
				kind: "hold",
				pose: "push",
				duration: .55
			},
			{
				kind: "walk",
				toX: 1380
			}
		]
	},
	{
		id: "archive",
		room: "archive",
		caption: "two lines. every time.",
		artist: "KUSTOD",
		startX: -70,
		clips: [
			{
				kind: "item",
				item: "book"
			},
			{
				kind: "walk",
				toX: 640
			},
			{
				kind: "hold",
				pose: "look-down",
				duration: 1.1
			},
			{
				kind: "hold",
				pose: "book",
				duration: .8
			},
			{
				kind: "item",
				item: null
			},
			{
				kind: "event",
				name: "file-away"
			},
			{
				kind: "hold",
				pose: "idle",
				duration: .5
			},
			{
				kind: "hold",
				pose: "look-up",
				duration: .9
			},
			{
				kind: "walk",
				toX: 1380
			}
		]
	},
	{
		id: "cafe",
		room: "cafe",
		caption: "name the risk",
		artist: "KUSTOD",
		startX: -70,
		clips: [
			{
				kind: "walk",
				toX: 310
			},
			{
				kind: "hold",
				pose: "sit",
				duration: .4
			},
			{
				kind: "item",
				item: "cup"
			},
			{
				kind: "hold",
				pose: "sit",
				duration: 2.6
			},
			{
				kind: "item",
				item: null
			},
			{
				kind: "hold",
				pose: "idle",
				duration: .3
			},
			{
				kind: "walk",
				toX: 760
			},
			{
				kind: "event",
				name: "bump"
			},
			{
				kind: "face",
				dir: -1
			},
			{
				kind: "hold",
				pose: "look-down",
				duration: .85
			},
			{
				kind: "hold",
				pose: "idle",
				duration: .3
			},
			{
				kind: "face",
				dir: 1
			},
			{
				kind: "walk",
				toX: 1380
			}
		]
	},
	{
		id: "warroom",
		room: "warroom",
		caption: "warn me first",
		artist: "KUSTOD",
		startX: -70,
		clips: [
			{
				kind: "walk",
				toX: 470
			},
			{
				kind: "hold",
				pose: "look-up",
				duration: 1.4
			},
			{
				kind: "hold",
				pose: "shake",
				duration: 1.3
			},
			{
				kind: "hold",
				pose: "push",
				duration: .7
			},
			{
				kind: "event",
				name: "draw-x"
			},
			{
				kind: "hold",
				pose: "idle",
				duration: .45
			},
			{
				kind: "walk",
				toX: 1380
			}
		]
	},
	{
		id: "rooftop",
		room: "rooftop",
		caption: "remembers why",
		artist: "KUSTOD",
		startX: -70,
		clips: [
			{
				kind: "walk",
				toX: 520
			},
			{
				kind: "hold",
				pose: "look-up",
				duration: 2.1
			},
			{
				kind: "hold",
				pose: "wave",
				duration: 1.9
			},
			{ kind: "jump" },
			{
				kind: "hold",
				pose: "look-back",
				duration: 1.15
			},
			{
				kind: "walk",
				toX: 1380
			}
		]
	},
	{
		id: "street",
		room: "street",
		caption: "consistency compounds",
		artist: "KUSTOD",
		startX: -70,
		clips: [
			{
				kind: "walk",
				toX: 340
			},
			{ kind: "jump" },
			{
				kind: "walk",
				toX: 620
			},
			{
				kind: "hold",
				pose: "push",
				duration: .7
			},
			{
				kind: "event",
				name: "kick"
			},
			{
				kind: "hold",
				pose: "look-back",
				duration: .8
			},
			{
				kind: "walk",
				toX: 1380
			}
		]
	}
];
//#endregion
//#region \0@oxc-project+runtime@0.146.0/helpers/esm/typeof.js
function _(e) {
	"@babel/helpers - typeof";
	return _ = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, _(e);
}
//#endregion
//#region \0@oxc-project+runtime@0.146.0/helpers/esm/toPrimitive.js
function v(e, t) {
	if (_(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (_(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
//#endregion
//#region \0@oxc-project+runtime@0.146.0/helpers/esm/toPropertyKey.js
function y(e) {
	var t = v(e, "string");
	return _(t) == "symbol" ? t : t + "";
}
//#endregion
//#region \0@oxc-project+runtime@0.146.0/helpers/esm/defineProperty.js
function b(e, t, n) {
	return (t = y(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
//#endregion
//#region src/lib/pixel-walk/engine.ts
var x = {
	walk: [
		"walk-1",
		"walk-2",
		"walk-3",
		"walk-4"
	],
	idle: "look-1",
	"look-up": "look-2",
	"look-down": "look-3",
	"look-back": "look-4",
	sit: "sit",
	type: ["sit", "type"],
	shake: "shake",
	wave: "wave",
	crouch: "crouch",
	jump: "jump",
	push: "push",
	book: "book"
};
function S(e) {
	return e < .5 ? 2 * e * e : 1 - (-2 * e + 2) ** 2 / 2;
}
function C(e) {
	return new Promise((t, n) => {
		let r = new Image();
		r.crossOrigin = "anonymous", r.onload = () => t(r), r.onerror = () => n(/* @__PURE__ */ Error(`Failed to load ${e}`)), r.src = e;
	});
}
var w = class {
	constructor(e, t = {}) {
		b(this, "canvas", void 0), b(this, "ctx", void 0), b(this, "sprites", /* @__PURE__ */ new Map()), b(this, "rooms", /* @__PURE__ */ new Map()), b(this, "ready", !1), b(this, "paused", !1), b(this, "reduced", !1), b(this, "sceneIndex", 0), b(this, "clipIndex", 0), b(this, "clipT", 0), b(this, "x", -70), b(this, "airY", 0), b(this, "facing", 1), b(this, "pose", "walk"), b(this, "item", null), b(this, "fade", {
			phase: "in",
			t: 0
		}), b(this, "particles", []), b(this, "clock", 0), b(this, "walkDist", 0), b(this, "bubbles", []), b(this, "drewX", !1), b(this, "waitMark", 0), b(this, "noMark", 0), b(this, "steam", []), b(this, "kickX", 0), b(this, "listeners", /* @__PURE__ */ new Set()), b(this, "raf", 0), b(this, "last", 0), b(this, "destroyed", !1), b(this, "scenes", g), b(this, "assetBase", "/"), b(this, "anchorY", .5), b(this, "pendingIndex", 0), this.canvas = e;
		let n = e.getContext("2d", { alpha: !1 });
		if (!n) throw Error("canvas 2d unavailable");
		if (this.ctx = n, t.assetBase && (this.assetBase = t.assetBase), typeof t.anchorY == "number" && (this.anchorY = Math.min(1, Math.max(0, t.anchorY))), t.sceneIds?.length) {
			let e = g.filter((e) => t.sceneIds.includes(e.id));
			if (e.length === 0) throw Error(`no scene matched ${JSON.stringify(t.sceneIds)} — a silent empty list would render a blank canvas that looks like a slow load`);
			this.scenes = e;
		}
		this.reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches, this.paused = this.reduced, this.resetScene(0);
	}
	async boot() {
		let e = await Promise.all(r.map(async (e) => [e, await C(`${this.assetBase}sprites/${e}.png`)]));
		for (let [t, n] of e) this.sprites.set(t, n);
		let t = i.filter((e) => this.scenes.some((t) => t.room === e)), n = await Promise.all(t.map(async (e) => [e, await C(`${this.assetBase}rooms/${e}.png`)]));
		for (let [e, t] of n) this.rooms.set(e, t);
		this.ready = !0, this.emit(), typeof window < "u" && (window.__kustodWalk = this);
	}
	onStatus(e) {
		return this.listeners.add(e), e(this.status()), () => this.listeners.delete(e);
	}
	status() {
		let e = this.scenes[this.sceneIndex] ?? this.scenes[0];
		return {
			caption: e.caption,
			artist: e.artist,
			scene: e.id,
			sceneIndex: this.sceneIndex,
			sceneCount: this.scenes.length,
			paused: this.paused,
			ready: this.ready,
			reduced: this.reduced
		};
	}
	emit() {
		let e = this.status();
		for (let t of this.listeners) t(e);
	}
	togglePause() {
		this.paused = !this.paused, this.emit();
	}
	nextScene() {
		this.beginFadeTo((this.sceneIndex + 1) % this.scenes.length);
	}
	start() {
		this.last = performance.now();
		let e = (t) => {
			if (this.destroyed) return;
			let n = Math.min(.05, (t - this.last) / 1e3);
			this.last = t, !this.paused && this.ready && this.tick(n), this.draw(), this.raf = requestAnimationFrame(e);
		};
		this.raf = requestAnimationFrame(e);
	}
	destroy() {
		this.destroyed = !0, cancelAnimationFrame(this.raf), this.listeners.clear();
	}
	resetScene(e) {
		let t = this.scenes[e] ?? this.scenes[0];
		this.sceneIndex = e, this.clipIndex = 0, this.clipT = 0, this.x = t.startX, this.airY = 0, this.facing = 1, this.pose = "walk", this.item = null, this.walkDist = 0, this.drewX = !1, this.waitMark = 0, this.noMark = 0, this.kickX = 0, this.bubbles = t.id === "yes-hall" ? T() : [], this.applyClipStart(t.clips[0]), this.emit();
	}
	beginFadeTo(e) {
		this.fade = {
			phase: "out",
			t: 0
		}, this.pendingIndex = e;
	}
	applyClipStart(e) {
		e && (e.kind === "walk" && (this.pose = e.pose ?? "walk"), e.kind === "hold" && (this.pose = e.pose), e.kind === "jump" && (this.pose = "crouch"), e.kind === "face" && (this.facing = e.dir), e.kind === "item" && (this.item = e.item));
	}
	fireEvent(e) {
		if (e.startsWith("pop-")) {
			let t = Number(e.slice(4)), r = this.bubbles[t];
			r && !r.popped && (r.popped = !0, f(this.particles, r.x, r.y, 16, n.peach), f(this.particles, r.x, r.y, 8, n.ink));
			return;
		}
		e === "stamp-wait" && (this.waitMark = 2.8, f(this.particles, this.x + 10, 486, 18, n.peach)), e === "stamp-no" && (this.noMark = 1.8, f(this.particles, this.x, 476, 10, n.peachD)), e === "draw-x" && (this.drewX = !0, f(this.particles, 430, 250, 14, n.peach)), e === "file-away" && f(this.particles, this.x + 8, 506, 8, n.book), e === "bump" && (f(this.particles, this.x + 20, 536, 7, n.dot), this.x -= 18), e === "kick" && (this.kickX = 1, f(this.particles, this.x + 30, 552, 10, n.dot));
	}
	tick(e) {
		if (this.clock += e, p(this.particles, e), this.waitMark > 0 && (this.waitMark -= e), this.noMark > 0 && (this.noMark -= e), this.kickX > 0 && (this.kickX += e * 140), this.fade.phase !== "none") {
			this.tickFade(e);
			return;
		}
		let t = this.scenes[this.sceneIndex].clips[this.clipIndex];
		if (!t) {
			this.beginFadeTo((this.sceneIndex + 1) % this.scenes.length);
			return;
		}
		if (t.kind === "event") {
			this.fireEvent(t.name), this.advanceClip();
			return;
		}
		if (t.kind === "face" || t.kind === "item") {
			this.advanceClip();
			return;
		}
		if (t.kind === "walk") {
			let n = t.speed ?? 92, r = Math.sign(t.toX - this.x) || 1;
			this.facing = r, this.x += r * n * e, this.walkDist += Math.abs(n * e), this.pose = t.pose ?? "walk", (r > 0 && this.x >= t.toX || r < 0 && this.x <= t.toX) && (this.x = t.toX, this.advanceClip());
			return;
		}
		if (t.kind === "hold") {
			this.pose = t.pose, this.clipT += e, t.pose === "walk" && (this.walkDist += 92 * e * .15), this.clipT >= t.duration && this.advanceClip();
			return;
		}
		if (t.kind === "jump") {
			this.clipT += e;
			let t = Math.min(1, this.clipT / .78);
			if (t < .16) this.pose = "crouch", this.airY = 0;
			else if (t < .86) {
				this.pose = "jump";
				let n = (t - .16) / .7;
				this.airY = 4 * n * (1 - n) * 64, this.x += this.facing * 70 * e;
			} else this.pose = "crouch", this.airY = 0;
			t >= 1 && (this.airY = 0, this.advanceClip());
		}
	}
	tickFade(e) {
		this.fade.t += e, this.fade.phase === "out" && this.fade.t >= .42 ? (this.fade = {
			phase: "hold",
			t: 0
		}, this.resetScene(this.pendingIndex)) : this.fade.phase === "hold" && this.fade.t >= .12 ? this.fade = {
			phase: "in",
			t: 0
		} : this.fade.phase === "in" && this.fade.t >= .48 && (this.fade = {
			phase: "none",
			t: 0
		});
	}
	advanceClip() {
		let e = this.scenes[this.sceneIndex];
		this.clipIndex += 1, this.clipT = 0;
		let t = e.clips[this.clipIndex];
		this.applyClipStart(t), t || this.beginFadeTo((this.sceneIndex + 1) % this.scenes.length);
	}
	fadeAlpha() {
		return this.fade.phase === "out" ? S(Math.min(1, this.fade.t / .42)) : this.fade.phase === "hold" ? 1 : this.fade.phase === "in" ? 1 - S(Math.min(1, this.fade.t / .48)) : 0;
	}
	currentSprite() {
		let e = x[this.pose];
		if (Array.isArray(e)) {
			if (this.pose === "walk" || e[0]?.startsWith("walk")) {
				let t = Math.floor(this.walkDist / 16) % e.length;
				return this.sprites.get(e[t] ?? e[0]);
			}
			if (this.pose === "type") {
				let t = Math.floor(this.clock * 6) % e.length;
				return this.sprites.get(e[t] ?? e[0]);
			}
			let t = Math.floor(this.clock * 8) % e.length;
			return this.sprites.get(e[t] ?? e[0]);
		}
		return this.pose === "shake" ? this.sprites.get(Math.floor(this.clock * 6) % 2 == 0 ? "shake" : "look-1") : this.pose === "wave" ? this.sprites.get(Math.floor(this.clock * 5) % 2 == 0 ? "wave" : "look-1") : this.sprites.get(e);
	}
	draw() {
		let t = this.ctx, { canvas: r } = this, i = Math.min(2, window.devicePixelRatio || 1), a = Math.max(320, Math.min(window.innerWidth || 1280, 4096)), o = Math.max(180, Math.min(window.innerHeight || 720, 4096)), s = Math.min(r.clientWidth || 1280, a), c = Math.min(r.clientHeight || 720, o), l = Math.round(s * i), u = Math.round(c * i);
		(r.width !== l || r.height !== u) && (r.width = l, r.height = u), t.setTransform(1, 0, 0, 1, 0, 0), t.fillStyle = n.bg, t.fillRect(0, 0, l, u);
		let d = Math.max(l / e, u / 720), f = e * d, p = 720 * d, g = (l - f) / 2, _ = (u - p) * this.anchorY;
		t.setTransform(d, 0, 0, d, g, _);
		let v = this.scenes[this.sceneIndex];
		if (v.room) {
			let n = this.rooms.get(v.room);
			n && (t.imageSmoothingEnabled = !0, t.imageSmoothingQuality = "high", t.drawImage(n, 0, 0, e, 720));
		} else t.imageSmoothingEnabled = !0, h(t, this.clock);
		this.drawOverlays(t, v.id), this.drawCharacter(t), m(t, this.particles);
		let y = this.fadeAlpha();
		y > .001 && (t.fillStyle = `rgba(12,12,12,${y})`, t.fillRect(-40, -40, 1360, 800));
	}
	drawOverlays(e, t) {
		if (t === "yes-hall") for (let t of this.bubbles) t.popped || (l(e, t.x, t.y, t.rx, t.ry, n.dot), d(e, t.word, t.x, t.y - 7, n.dot, 2));
		if (t === "warroom" && this.drewX && (e.save(), e.strokeStyle = n.peach, e.lineWidth = 4, e.lineCap = "square", e.beginPath(), e.moveTo(310, 168), e.lineTo(560, 310), e.moveTo(560, 168), e.lineTo(310, 310), e.stroke(), e.restore(), d(e, "WHY", 435, 330, n.peach, 3)), this.waitMark > 0 && (e.globalAlpha = Math.min(1, this.waitMark), d(e, "WAIT", this.x + 8, 428, n.peach, 4), e.globalAlpha = 1), this.noMark > 0 && (e.globalAlpha = Math.min(1, this.noMark), d(e, "NO", this.x, 426, n.peach, 3), e.globalAlpha = 1), t === "cafe") for (let t = 0; t < 5; t++) {
			let r = 458 - (this.clock * 22 + t * 10) % 36;
			o(e, 348 + Math.sin(this.clock * 2 + t) * 3, r, n.dotDim, 1.2);
		}
		t === "street" && this.kickX > 0 && c(e, 640 + this.kickX, 540, 22, 18, n.dot);
	}
	drawCharacter(e) {
		let r = this.currentSprite(), i = this.pose === "idle" || this.pose === "wave" || this.pose === "look-up" ? Math.sin(this.clock * 2.2) * 1.5 : 0, a = 576 - this.airY + i, s = 128 * t, c = this.x - s / 2, l = a - 119 * t;
		e.imageSmoothingEnabled = !1, e.save(), this.facing < 0 && (e.translate(this.x, 0), e.scale(-1, 1), e.translate(-this.x, 0)), r ? e.drawImage(r, c, l, s, 99.84) : (e.fillStyle = n.peach, e.fillRect(this.x - 18, a - 46, 36, 46)), e.restore(), this.item === "book" && this.pose !== "book" && (e.fillStyle = n.book, e.fillRect(this.x + 14 * this.facing, a - 28, 10, 14), e.fillStyle = n.ink, e.fillRect(this.x + 15 * this.facing, a - 26, 3, 10)), this.item === "cup" && (e.fillStyle = n.ink, e.fillRect(this.x + 16 * this.facing, a - 36, 8, 10), o(e, this.x + 20 * this.facing, a - 44 - this.clock % 1 * 8, n.dotDim, 1.1));
	}
};
function T() {
	return [
		{
			x: 240,
			y: 310,
			rx: 70,
			ry: 54,
			word: "YES",
			popped: !1
		},
		{
			x: 430,
			y: 210,
			rx: 64,
			ry: 48,
			word: "SURE",
			popped: !1
		},
		{
			x: 640,
			y: 330,
			rx: 58,
			ry: 46,
			word: "OK",
			popped: !1
		},
		{
			x: 840,
			y: 200,
			rx: 74,
			ry: 54,
			word: "GREAT",
			popped: !1
		},
		{
			x: 1040,
			y: 290,
			rx: 84,
			ry: 62,
			word: "YES",
			popped: !1
		}
	];
}
//#endregion
//#region src/backdrop/main.ts
var E = "kustod.backdrop.motion.v1";
function D() {
	return typeof window < "u" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function O() {
	try {
		let e = localStorage.getItem(E);
		return e === "on" || e === "off" ? e : null;
	} catch {
		return null;
	}
}
function k(e) {
	try {
		localStorage.setItem(E, e ? "on" : "off");
	} catch {}
}
function A(e, t = "/walk/") {
	let n = new w(e, {
		assetBase: t,
		sceneIds: ["yes-hall"],
		anchorY: .94
	}), r = O(), i = r ? r === "on" : !D(), a = !0, o = !0, s = /* @__PURE__ */ new Set(), c = () => {
		let e = i && a && o;
		n.paused !== !e && (n.paused = !e);
	}, l = () => {
		for (let e of s) e(i);
	};
	document.addEventListener("visibilitychange", () => {
		a = !document.hidden, c();
	}), "IntersectionObserver" in window && new IntersectionObserver((e) => {
		o = e.some((e) => e.isIntersecting), c();
	}, { threshold: .01 }).observe(e), n.boot().then(() => {
		c(), n.start(), e.dataset.ready = "1";
	});
	let u = {
		isOn: () => i,
		on() {
			i = !0, k(!0), c(), l();
		},
		off() {
			i = !1, k(!1), c(), l();
		},
		toggle() {
			return i ? u.off() : u.on(), i;
		},
		onChange(e) {
			return s.add(e), e(i), () => s.delete(e);
		}
	};
	return u;
}
var j = document.querySelector("canvas[data-kustod-backdrop]");
j && (window.kustodBackdrop = A(j, j.dataset.assetBase || "/walk/"));
//#endregion
export { A as mountBackdrop };
