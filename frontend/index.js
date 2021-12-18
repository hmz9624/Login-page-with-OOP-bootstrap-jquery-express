 document.getElementById("bas2").onclick = function () {
     console.log(document.getElementById("degis").value)
 }

 let sehirler = ["bursa", "ankara", "adıyaman"]
 for (sehir of sehirler) {
   //  console.log(sehir)
     var deger = document.createElement("h1");
     deger.innerHTML = sehir
     document.body.appendChild(deger)
 }

