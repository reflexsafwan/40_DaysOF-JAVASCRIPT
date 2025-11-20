for (let i = 1; i <= 5; i++) {
  console.log("Iteration number: " + i);
}
for (let j = 5; j >= 1; j--) {
  console.log("Countdown: " + j);
}       
for (let k = 1; k <= 10; k += 2) {
  console.log("Odd number: " + k);
}   
for (let m = 10; m >= 1; m -= 2) {
    console.log("Even number countdown: " + m);
}
for (let n = 1; n <= 20; n++) {
    if (n % 3 === 0) {
        console.log("Multiple of 3: " + n);
    }       
}for (let p = 1; p <= 15; p++) {
    if (p % 2 === 0) {
        console.log("Even number: " + p);
    } else {
        console.log("Odd number: " + p);
    }       
}
for (let q = 1; q <= 5; q++) {
    for (let r = 1; r <= 3; r++) {
        console.log("Outer loop iteration: " + q + ", Inner loop iteration: " + r);
    }   

}
for (let s = 1; s <= 10; s++) {
    if (s === 6) {
        console.log("Breaking the loop at: " + s);
        break;
        
    }
    console.log("Current number: " + s);
}
for (let t = 1; t <= 10; t++) {
    if (t % 2 === 0) {
        continue;
    }
    console.log("Odd number using continue: " + t);
}       
for (let u = 1; u <= 3; u++) {
    for (let v = 1; v <= 3; v++) {
        if (u === 2 && v === 2) {
            console.log("Skipping inner loop iteration at u: " + u + ", v: " + v);
            continue;
        }
        console.log("Outer loop u: " + u + ", Inner loop v: " + v);
    }
}   
for (let w = 1; w <= 3; w++) {
    for (let x = 1; x <= 3; x++) {
        if (w === 2 && x === 2) {
            console.log("Breaking inner loop at w: " + w + ", x: " + x);
            break;
        }
        console.log("Outer loop w: " + w + ", Inner loop x: " + x);
    }
}   
for (let y = 1; y <= 5; y++) {
    console.log("Current number before nested loop: " + y); 
    for (let z = 1; z <= 2; z++) {
        console.log("  Nested loop iteration: " + z);
    }
}
for (let a = 1; a <= 10; a++) {
    if (a % 4 === 0) {
        console.log("Number divisible by 4: " + a);
    }       
}
for (let b = 1; b <= 10; b++) {
    if (b === 7) {
        console.log("Skipping number 7");
        continue;
    }                       

    console.log("Current number: " + b);
}
for (let c = 1; c <= 3; c++) {
    for (let d = 1; d <= 3; d++) {
        if (c === 3 && d === 1) {
            console.log("Breaking out of inner loop at c: " + c + ", d: " + d);
            break;
        }
        console.log("Outer loop c: " + c + ", Inner loop d: " + d);
    }
}   
for (let e = 1; e <= 5; e++) {
    console.log("Outer loop e: " + e);
    for (let f = 1; f <= 2; f++) {
        console.log("  Inner loop f: " + f);
    }
}   
for (let g = 1; g <= 15; g++) {
    if (g % 5 === 0) {
        console.log("Multiple of 5: " + g);
    }   
}
for (let h = 1; h <= 10; h++) {
    if (h === 4 || h === 8) {
        console.log("Skipping number: " + h);
        continue;
    }
    console.log("Current number: " + h);
}                         
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        if (i === 2 && j === 3) {
            console.log("Breaking inner loop at i: " + i + ", j: " + j);
            break;
        }
        console.log("Outer loop i: " + i + ", Inner loop j: " + j);
    }
}   
for (let k = 1; k <= 5; k++) {
    console.log("Current iteration: " + k);
    for (let l = 1; l <= 2; l++) {
        console.log("  Nested iteration: " + l);
    }
}   
for (let m = 1; m <= 20; m++) {
    if (m % 4 === 0) {
        console.log("Number divisible by 4: " + m);
    }   
}
for (let n = 1; n <= 10; n++) {
    if (n === 5) {
        console.log("Skipping number 5");
        continue;
    }                       
    console.log("Current number: " + n);
}