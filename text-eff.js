class TextScramble {
  constructor(el) {
    this.el = el;
    this.chars =
      "</<3{}-_\\//|/[]{}—=+*^?__#$!*3^8Zy4@3@qR3#xpff%cCfZqxL!uGtgqp3s4j9ir77uAp7fmsr6Tpa%Me&2khoDr$s$6!Ke#EKeuMfqW2ucu$EAkZn2gsiKusbk6A^sfu6FGk8cjJD*U$XkiVGUdw*eq8VM";
    this.update = this.update.bind(this);
  }
  setText(newText) {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise((resolve) => (this.resolve = resolve));
    this.queue = [];
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || "";
      const to = newText[i] || "";
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      this.queue.push({ from, to, start, end });
    }
    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }
  update() {
    let output = "";
    let complete = 0;
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `<span class="dud">${char}</span>`;
      } else {
        output += from;
      }
    }
    this.el.innerHTML = output;
    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}

const phrases = ["(◑﹏﹏◐)"];

const el = document.querySelector(".descr-scramble");
const fx = new TextScramble(el);

let counter = 0;
const next = () => {
  fx.setText(phrases[counter]).then(() => {
    setTimeout(next, 2200);
  });
  counter = (counter + 1) % phrases.length;
};

next();

var pathEls = document.querySelectorAll("path");
for (var i = 0; i < pathEls.length; i++) {
  var pathEl = pathEls[i];
  var offset = anime.setDashoffset(pathEl);
  pathEl.setAttribute("stroke-dashoffset", offset);
  anime({
    targets: pathEl,
    strokeDashoffset: [offset, 0],
    duration: anime.random(3000, 4000),
    delay: anime.random(0, 4000),
    loop: true,
    direction: "alternate",
    easing: "easeInOutSine",
    autoplay: true,
  });
}
