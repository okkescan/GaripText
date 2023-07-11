let icerik = document.getElementById("smesajj");
let gondMail = document.getElementById("gonderenmail");
let gondMailSifre = document.getElementById("gonderenmailsifre");
let aliciMail = document.getElementById("alicimail");

var gondbtn = document.getElementById("gonderbtn");
gondbtn.addEventListener("click", function (e) {
  e.preventDefault();

  let Data = {
    name: "GaripText",
    gemail: gondMail.value,
    gpass: gondMailSifre.value,
    aemail: aliciMail.value,
    subject: "Kim olduğunu bilirsin!",
    message: icerik.value,
  };

  let xhr = new XMLHttpRequest();
  xhr.open("POST", "/");
  xhr.setRequestHeader("content-type", "application/json");
  xhr.onload = function () {
    console.log(xhr.responseText);
    if (xhr.responseText == "success") {
      alert("Mail gönderildi.");
      name.value = "";
      gemail.value = "";
      gpass.value = "";
      aemail.value = "";
      subject.value = "";
      message.value = "";
    } else {
      alert("Birşeyler yanlış gitti, mail gönderilemedi!");
    }
  };
  xhr.send(JSON.stringify(Data));
});
