import React from "react";
import CardList from "./components/CardList/CardList";

const cardsData = [
  {
    id: 1,
    title: "Лісова прогулянка",
    description: "Затишний лісовий пейзаж для відпочинку на природі.",
    image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    title: "Місто вночі",
    description: "Нічне місто з яскравими вогнями та неймовірною атмосферою.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGtAQvDH-5oGhbpVQtQrPf6EgMmzpKdeDBnA&s",
  },
  {
    id: 3,
    title: "Гірський пейзаж",
    description: "Краєвид величних гір під яскравим сонячним небом.",
    image: "https://print4you.com.ua/upload/iblock/cb5/cb5164bba0be8e062d1dc64d7571f4f6.jpg",
  },
  {
    id: 4,
    title: "Морський берег",
    description: "Спокійний пляж із чистою водою та м'яким піском.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop",
  },
  {
    id: 5,
    title: "Захід сонця",
    description: "Романтичний захід сонця, що фарбує небо у дивовижні кольори.",
    image: "https://images.unsplash.com/photo-1444090542259-0af8fa96557e?w=400&h=300&fit=crop",
  },
  {
    id: 6,
    title: "Весняний сад",
    description: "Квітучий сад навесні, наповнений ароматами та яскравими барвами.",
    image: "https://kyiv.gallery/images/pictures/2022/01/medium/p9IUbjGulF.jpg",
  },
  {
    id: 7,
    title: "Сніжний пейзаж",
    description: "Засніжений ліс з чарівною атмосферою зимової казки.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgVH_3-NB7jRKu4mNmGLy9pBm1S5oETYbXJQ&s",
  },
  {
    id: 8,
    title: "Тропічний острів",
    description: "Райський куточок з білим піском та бірюзовою водою.",
    image: "https://static.ukrinform.com/photos/2018_03/thumb_files/630_360_1521636108-6828.jpg",
  },
  {
    id: 9,
    title: "Водоспад",
    description: "Могутній водоспад, що спадає з висоти в оточенні зеленої природи.",
    image: "https://images.unian.net/photos/2023_11/thumb_files/1000_545_1699606900-4072.jpg?1",
  },
  {
    id: 10,
    title: "Космос",
    description: "Захоплюючий вид на зірки та планети в глибинах космосу.",
    image: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?w=400&h=300&fit=crop",
  }
];

const App = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Галерея карток</h1>
      <CardList cards={cardsData} />
    </div>
  );
};

export default App;