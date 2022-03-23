//Sayfa yüklendiğinde default olarak Size Özel kısmı active olarak gelir.
window.onload = function() {
    filter("Size Özel")
};

//Tıklanan kategorinin active özelliğinin çalışmasına yaramaktadır.
function active(){
    var btns = document.getElementsByClassName("menu");
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
  });
}
}

//Ürünlerin istenilern categoriye göre filtrelenmesini sağlamaktadır.
function filter(category){
    let database = fetch("data.json")
    .then(response => response.json())
        .then(data => {
            i = 0
            while (i < 20) {
                let names = document.getElementsByClassName("names")[i];
                let image = document.getElementsByClassName("images")[i];
                let price = document.getElementsByClassName("prices")[i];
                let shippingFee = document.getElementsByClassName("shippingFee")[i];
                let bosluk = document.getElementsByClassName("bosluk")[i];

                if(data.recommendedProducts[category][i]["shippingFee"] == "FREE"){
                    shippingFee.style.display = "block";
                    bosluk.style.display = "none";
                }
                else if(data.recommendedProducts[category][i]["shippingFee"] == "NON-FREE"){
                    shippingFee.style.display = "none";
                    bosluk.style.display = "block";
                }
                names.innerHTML = data.recommendedProducts[category][i]["name"];
                image.src = data.recommendedProducts[category][i]["image"];
                price.innerHTML = data.recommendedProducts[category][i]["priceText"];

                i = i + 1;
            }
        });
}

function category(category) {
    active();
    filter(category);
}
// ------------------------------------------


//slider içerinde ileri ve geri gitme işlemini gerçekleştirir.
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}
//-----------------------------------------------


function showSlides(n) {
    var i;
    var next = document.getElementById("next");
    var prev = document.getElementById("prev");
    var slides = document.getElementsByClassName("products");    

    //Slider'da ilk ürün görüntülendiğinde geri tuşunun, son ürün görüntülendiğinde ileri tuşunun görünmemesini sağlamaktadır.
    if(slideIndex == 1){
        prev.style.display = "none";
    }
    else if(slideIndex == 17){
        next.style.display = "none";
    }
    else{
        prev.style.display = "block";
        next.style.display = "block";
    }
    //------------------------------------------------

    //Sliderda görüntülenecek ürünler seçilmektedir.
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex].style.display = "block";
    slides[slideIndex + 1].style.display = "block";
    slides[slideIndex + 2].style.display = "block";
}
//-----------------------------------------------


// Sepete ekle butonunu çalıştırmaktadır.
function addCart(){
    var alert = document.getElementById('alert');
    var alert_close = document.getElementById('alert_close');
    alert.style.display = 'block';
    window.setTimeout(alertClose, 3000);
    function alertClose() {
        alert.style.display = 'none';
    }
    alert_close.onclick = function() {
        alert.style.display = "none";
    }
}
