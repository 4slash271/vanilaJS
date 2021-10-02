const foods = [
    {
        food: "후라이드 치킨",
        restaurant: "굽네",
    },
    {
        food: "피자",
        restaurant: "빨간모자",
    },
    {
        food: "평양냉면",
        restaurant: "더평양",
    },
    {
        food: "초밥",
        restaurant: "스시쇼부",
    },
    {
        food: "짬뽕",
        restaurant: "유경장",
    },
    {
        food: "닭한마리",
        restaurant: "공릉동 닭한마리",
    },
    {
        food: "햄버거",
        restaurant: "바스버거",
    },
    
    
]

const food = document.querySelector("#foods span:first-child");
const restaurant = document.querySelector("#foods span:last-child");
const randomFoods = foods[Math.floor(Math.random()*foods.length)];

food.innerText = randomFoods.food;
restaurant.innerText = randomFoods.restaurant;

/*
console.log(Math.random()*10);
//random은 무작위의 수를 보여주지만 소수점 아래는 제거되지 않음
console.log(Math.round(2.999)); //반올림
console.log(Math.floor(29.9)); //내림
console.log(Math.ceil(2.1)); //올림
*/

//round나 ceil을 쓰면 7 이상의 소수를 8로 받아 undefined 뜰 수 있음
/*
console.log(foods[Math.floor(Math.random()*7)]); //이렇게 작성하면 인덱스에 새로운 항목이 추가될 경우 랜덤에 반영하기 힘들다!
console.log(foods[Math.floor(Math.random()*foods.length)]); 
*/