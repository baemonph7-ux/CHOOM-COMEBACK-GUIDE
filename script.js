const target = new Date("May 4, 2026 18:00:00 GMT+9");  
  
function updateCountdown() {  
  const now = new Date();  
  const diff = target - now;  
  
  const d = Math.floor(diff / (1000 * 60 * 60 * 24));  
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);  
  const m = Math.floor((diff / (1000 * 60)) % 60);  
  const s = Math.floor((diff / 1000) % 60);  
  
  document.getElementById("d").innerText = d;  
  document.getElementById("h").innerText = h;  
  document.getElementById("m").innerText = m;  
  document.getElementById("s").innerText = s;  
}  
  
setInterval(updateCountdown, 1000);  
