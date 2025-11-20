// multiple counter for  single loop
for (let i = 1, j = 10; i <= 10 && j >= 1; i++, j--) {
  console.log("i: " + i + ", j: " + j);
}
for (let x = 1, y = 5; x <= 5 && y <= 25; x++, y += 5) {
  console.log("x: " + x + ", y: " + y);
}
for (let m = 1, n = 100; m <= 10 && n >= 10; m++, n -= 10) {
  console.log("m: " + m + ", n: " + n);
}
for (let a = 1, b = 1; a <= 5 && b <= 25; a++, b += 5) {
  console.log("a: " + a + ", b: " + b);
}
for (let p = 10, q = 1; p >= 1 && q <= 10; p--, q++) {
  console.log("p: " + p + ", q: " + q);
}
for (let r = 1, s = 2; r <= 10 && s <= 20; r++, s += 2) {
  console.log("r: " + r + ", s: " + s);
}
for (let u = 5, v = 50; u >= 1 && v >= 10; u--, v -= 10) {
  console.log("u: " + u + ", v: " + v);
}
for (let c = 1, d = 3; c <= 10 && d <= 30; c++, d += 3) {
  console.log("c: " + c + ", d: " + d);
}
for (let e = 10, f = 5; e >= 1 && f <= 10; e--, f++) {
  console.log("e: " + e + ", f: " + f);
}
for (let g = 1, h = 4; g <= 10 && h <= 40; g++, h += 4) {
  console.log("g: " + g + ", h: " + h);
}
for (let i = 20, j = 2; i >= 2 && j <= 20; i -= 2, j++) {
  console.log("i: " + i + ", j: " + j);
}
for (let k = 1, l = 5; k <= 10 && l <= 50; k++, l += 5) {
  console.log("k: " + k + ", l: " + l);
}
for (let m = 15, n = 3; m >= 3 && n <= 15; m -= 3, n++) {
  console.log("m: " + m + ", n: " + n);
}

/* 
*
* *
* * *
* * * *
* * * * *

*/



for (let i = 1; i <= 5; i++) {
  let stars = "";
  for (let j = 1; j <= i; j++) {
    stars = stars + "*";
  }
  console.log(stars);
}