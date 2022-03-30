let userName = prompt("Merhaba, kullanıcı adınızı giriniz:")
let info = document.querySelector('#userName')
info.innerHTML = `${userName ? userName : "Misafir"}`

function showTime() {
    let d = new Date();
    let days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
    let time = document.querySelector('#time')

time.innerHTML = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()} ${days[d.getUTCDay()]}`
setTimeout(showTime, 1000); 
}
showTime()