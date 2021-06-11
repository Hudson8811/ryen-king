!(function () {
  function t(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
    return i;
  }
  function e(t, e, n) {
    return (
      e in t
        ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (t[e] = n),
      t
    );
  }
  document.addEventListener('DOMContentLoaded', function () {
    var n,
      i = new (function t() {
        var n = this;
        !(function (t, e) {
          if (!(t instanceof e))
            throw new TypeError('Cannot call a class as a function');
        })(this, t),
          e(this, 'initDOM', function () {
            (n.container = document.createElement('div')),
              n.container.classList.add('custom-cursor'),
              document.body.appendChild(n.container);
          }),
          e(this, 'initListeners', function () {
            window.addEventListener('mousemove', n.trackPosition);
          }),
          e(this, 'add', function (t) {
            (new Image().src = t.dataset.cursor),
              t.addEventListener('mousemove', n.show),
              t.addEventListener('mouseleave', n.hide);
          }),
          e(this, 'show', function (t) {
            n.isActive ||
              (clearTimeout(n.timer),
              (n.isActive = !0),
              (n.container.style.backgroundImage = 'url('.concat(
                t.currentTarget.dataset.cursor,
                ')'
              )),
              n.container.classList.add('active'));
          }),
          e(this, 'hide', function () {
            (n.isActive = !1),
              (n.timer = setTimeout(function () {
                n.container.classList.remove('active');
              }, 10));
          }),
          e(this, 'trackPosition', function (t) {
            (n.container.style.top = ''.concat(event.clientY, 'px')),
              (n.container.style.left = ''.concat(event.clientX, 'px'));
          }),
          (this.isActive = !1),
          (this.timer = null),
          this.initDOM(),
          this.initListeners();
      })();
    ((n = document.querySelectorAll('.experience__card')),
    (function (e) {
      if (Array.isArray(e)) return t(e);
    })(n) ||
      (function (t) {
        if (
          ('undefined' != typeof Symbol && null != t[Symbol.iterator]) ||
          null != t['@@iterator']
        )
          return Array.from(t);
      })(n) ||
      (function (e, n) {
        if (e) {
          if ('string' == typeof e) return t(e, n);
          var i = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === i && e.constructor && (i = e.constructor.name),
            'Map' === i || 'Set' === i
              ? Array.from(e)
              : 'Arguments' === i ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
              ? t(e, n)
              : void 0
          );
        }
      })(n) ||
      (function () {
        throw new TypeError(
          'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        );
      })()).forEach(function (t) {
      return i.add(t);
    });
  });
})();
