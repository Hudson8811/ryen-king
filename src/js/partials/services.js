!(function () {
  function e(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
    return i;
  }
  function t(e, t) {
    if (!(e instanceof t))
      throw new TypeError('Cannot call a class as a function');
  }
  function n(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = n),
      e
    );
  }
  document.addEventListener('DOMContentLoaded', function () {
    if (document.querySelector('.section__services')) {
      var i = function () {
          o() && !l
            ? ((l = !0),
              c.clear(),
              a.forEach(function (e) {
                new r(e.control, e.content), e.container.appendChild(e.content);
              }),
              r.inited[0] && r.inited[0].open())
            : !o() &&
              l &&
              ((l = !1),
              r.clear(),
              a.forEach(function (e) {
                new c(e.control, e.content), s.appendChild(e.content);
              }),
              c.inited[0] && c.inited[0].open());
        },
        o = function () {
          return window.matchMedia('(max-width: 1000px)').matches;
        },
        r = function e(i, o) {
          var r = this;
          t(this, e),
            n(this, 'onClick', function () {
              r.isOpened ? r.close() : r.open();
            }),
            n(this, 'onAnimationEnd', function (e) {
              e.target === r.$refs.content &&
                'height' === e.propertyName &&
                r.isOpened &&
                (e.target.style.height = 'auto');
            }),
            n(this, 'open', function () {
              r.isOpened ||
                (e.active && e.active.close(),
                (r.isOpened = !0),
                (e.active = r),
                r.$refs.control.classList.add('active'),
                r.$refs.content.classList.add('active'),
                (r.$refs.content.style.height = ''.concat(
                  r.$refs.content.scrollHeight,
                  'px'
                )));
            }),
            n(this, 'close', function () {
              r.isOpened &&
                ((r.isOpened = !1),
                (r.$refs.content.style.height = ''.concat(
                  r.$refs.content.scrollHeight,
                  'px'
                )),
                getComputedStyle(r.$refs.content).height,
                (r.$refs.content.style.height = '0px'),
                r.$refs.control.classList.remove('active'),
                r.$refs.content.classList.remove('active'));
            }),
            n(this, 'destroy', function () {
              r.$refs.control.removeEventListener('click', r.onClick),
                r.$refs.content.removeEventListener(
                  'transitionend',
                  r.onAnimationEnd
                ),
                r.$refs.content.removeAttribute('style'),
                r.$refs.control.classList.remove('active'),
                r.$refs.content.classList.remove('active');
            }),
            (this.isOpened = !1),
            (this.$refs = { control: i, content: o }),
            this.$refs.control.addEventListener('click', this.onClick),
            this.$refs.content.addEventListener(
              'transitionend',
              this.onAnimationEnd
            ),
            e.inited.push(this);
        };
      n(r, 'active', null),
        n(r, 'inited', []),
        n(r, 'clear', function () {
          r.inited.forEach(function (e) {
            e.destroy();
          }),
            (r.active = null),
            (r.inited = []);
        });
      var c = function e(i, o) {
        var r = this;
        t(this, e),
          n(this, 'open', function () {
            r.isOpened ||
              (e.active && e.active.close(),
              (r.isOpened = !0),
              (e.active = r),
              r.$refs.control.classList.add('active'),
              r.$refs.content.classList.add('active'));
          }),
          n(this, 'close', function () {
            r.isOpened &&
              ((r.isOpened = !1),
              r.$refs.control.classList.remove('active'),
              r.$refs.content.classList.remove('active'));
          }),
          n(this, 'destroy', function () {
            r.$refs.control.removeEventListener('mouseover', r.open),
              r.$refs.control.classList.remove('active'),
              r.$refs.content.classList.remove('active');
          }),
          (this.isOpened = !1),
          (this.$refs = { control: i, content: o }),
          this.$refs.control.addEventListener('mouseover', this.open),
          e.inited.push(this);
      };
      n(c, 'active', null),
        n(c, 'inited', []),
        n(c, 'clear', function () {
          c.inited.forEach(function (e) {
            e.destroy();
          }),
            (c.active = null),
            (c.inited = []);
        });
      var s = document.querySelector('.js-services-tabs'),
        a = ((f = document.querySelectorAll('.js-services-item')),
        (function (t) {
          if (Array.isArray(t)) return e(t);
        })(f) ||
          (function (e) {
            if (
              ('undefined' != typeof Symbol && null != e[Symbol.iterator]) ||
              null != e['@@iterator']
            )
              return Array.from(e);
          })(f) ||
          (function (t, n) {
            if (t) {
              if ('string' == typeof t) return e(t, n);
              var i = Object.prototype.toString.call(t).slice(8, -1);
              return (
                'Object' === i && t.constructor && (i = t.constructor.name),
                'Map' === i || 'Set' === i
                  ? Array.from(t)
                  : 'Arguments' === i ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
                  ? e(t, n)
                  : void 0
              );
            }
          })(f) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()).map(function (e) {
          return {
            container: e,
            control: e.querySelector('.js-services-control'),
            content: e.querySelector('.js-services-content'),
          };
        }),
        l = !o();
      window.addEventListener('resize', i), i();
    }
    var f;
  });
})();
