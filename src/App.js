
import React from 'react';

function Food({ name , picture}){
  
  return <div>
    <h2>I like {name}</h2>
    <img src={picture} />
  </div> 
}

const foodLike = [
  {
    name: "Kimchi",
    image:"https://contents.sixshop.com/uploadedFiles/72878/product/image_1540176020065.jpg"
  },
  {
    name: "ramen",
    image: "https://t1.daumcdn.net/cfile/tistory/250DFD3A535F09892F"
  },
  {
    name: "samgiopsal",
    image:"https://pds.joins.com/news/FbMetaImage/201809/25a532e9-a644-4a99-a5ed-fc588e5e8e2d.jpg"
  },
  {
    name: "chukumi",
    image:"http://recipe1.ezmember.co.kr/cache/recipe/2019/03/05/52d2be99c015378a75c9db81362422c71.jpg"
  },
  
];

function App() {
  return (
  <div>
    {foodLike.map(dish => (
      <Food name={dish.name} picture={dish.image} />
    ))}
  </div>
  )
}

export default App;
