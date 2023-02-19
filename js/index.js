const hometown = document.getElementById("hometown");
const food = document.getElementById("food");
const trip = document.getElementById("trip");
const where = document.getElementById("where");

hometown.addEventListener("click", () => {
  alert("삼천포");
});

food.addEventListener("click", () => {
  alert("회/해산물/날것");
});

trip.addEventListener("click", () => {
  alert(
    "일본,홍콩,마카오,러시아,핀란드,덴마크,스웨덴,노르웨이,베트남,체코,이탈리아"
  );
});

where.addEventListener("click", () => {
  alert("서울시 중랑구");
});

console.log(food);
