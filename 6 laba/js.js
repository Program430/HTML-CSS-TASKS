var bt2 = document.getElementById("next_2");
var bt1 = document.getElementById("next_1");

var i=0;
var image1=document.getElementById("image1");
var image2=document.getElementById("image2");
var image3=document.getElementById("image3");
var image4=document.getElementById("image4");
var image5=document.getElementById("image5");
var image6=document.getElementById("image6");
var image7=document.getElementById("image7");
var image8=document.getElementById("image8");
// Добавьте свои картинки в массив через запятую
var imgs=new Array('./img/img_furnitureOrders/portfolio1.png',
'./img/img_furnitureOrders/portfolio2.png','./img/img_furnitureOrders/portfolio3.png',
'./img/img_furnitureOrders/portfolio4.png','./img/img_furnitureOrders/portfolio5.png',
'./img/img_furnitureOrders/portfolio6.png','./img/img_furnitureOrders/portfolio7.png',
'./img/img_furnitureOrders/portfolio8.png');

const modal2 = document.getElementById('d');
const modalBox2 = document.getElementById('modal-box');
let isModalOpen2 = false
let modal_image = document.getElementById("modal_image");

var image = document.getElementById('image1');

image.addEventListener('click', function(e) {
	console.log("sfsf");
	modal_image.src = image.src;
	modal2.showModal();
	isModalOpen2 = true;
	e.stopPropagation();
});

 document.addEventListener('click', (e) => {
	if (isModalOpen2 && !modalBox2.contains(e.target)) {
	  modal2.close();
	  
	}
  })

function rotationFunction(arr) { 
    if (arr.length <= 1) { 
        return arr; 
    } 
  
    return arr.map((_, index, array) => 
        array[(index + 1) % array.length]); 
} 

bt2.addEventListener('click', function (){
		imgs = rotationFunction(imgs);
		console.log(imgs[0]);
		console.log(imgs[1]);
		console.log(imgs[2]);
		console.log(imgs[3]);
		image1.src = imgs[0];
		image2.src = imgs[1];
		image3.src = imgs[2];
		image4.src = imgs[3];
		image5.src = imgs[4];
		image6.src = imgs[5];
		image7.src = imgs[6];
		image8.src = imgs[7];
	}
);

bt1.addEventListener('click', function (){
	imgs = rotationFunction(imgs);
	console.log(imgs[0]);
	console.log(imgs[1]);
	console.log(imgs[2]);
	console.log(imgs[3]);
	image1.src = imgs[7];
	image2.src = imgs[6];
	image3.src = imgs[5];
	image4.src = imgs[4];
	image5.src = imgs[3];
	image6.src = imgs[2];
	image7.src = imgs[1];
	image8.src = imgs[0];
}
);

const modal = document.querySelector('dialog');
const modalBox = document.getElementById('modal-box');
const showModalBtn = document.getElementById('ModalClick');
const showModalBtn2 = document.getElementById('ModalClick2');
const closeModalBtn = document.getElementById('close-modal-btn');
const openModalBtn = document.getElementById('open-modal-btn');
const names = document.getElementById('name');
const telef = document.getElementById('telefon');

let isModalOpen = false

showModalBtn.addEventListener('click', (e) => {
  modal.showModal()
  isModalOpen = true
  e.stopPropagation()
})

showModalBtn2.addEventListener('click', (e) => {
	modal.showModal()
	isModalOpen = true
	e.stopPropagation()
  })
  
closeModalBtn.addEventListener('click', () => {
  modal.close()
  isModalOpen = false
})

function validateForm() {
    var a = names.value;
    var b = telef.value;
    if ((a == null || a == "") && (b == null || b == "")) {
      alert("Заполните все поля");
      return false;
    }
	if (!isNumeric(b)) {
		alert("Телефон должен состоять только из цифр");
		return false;
	}
	return true;
  }

openModalBtn.addEventListener('click', () => {
	if (validateForm()){
		modal.close()
		isModalOpen = false
	}
  })

document.addEventListener('click', (e) => {
  if (isModalOpen && !modalBox.contains(e.target)) {
    modal.close()
  }
})

function isNumeric(input) {
	return /^\d+$/.test(input);
}