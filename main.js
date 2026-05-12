// let ism = confirm("salom")
// let ism1 = prompt("salom")

const title = document.querySelector(".title")

let ism = prompt("ismingiz nima")
let yosh = prompt("yoshingiz nechida")
let hisob = 2026 - yosh

title.textContent = `assalomu alaykum ${ism}. siz ${hisob} yilda tugilgansiz`

console.log(`assalomu alaykum ${ism}. siz ${hisob} yilda tugilgansiz`)