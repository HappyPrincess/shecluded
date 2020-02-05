let count = 0;
let txt = 'We await your approval to continue...'; /* The text */
let speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (count < txt.length) {
    document.getElementById("typetext").innerHTML += txt.charAt(count);
    count++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();