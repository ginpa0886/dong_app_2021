
import React from 'react';
import PropTypes from 'prop-types'

function Food({ name , picture , rating}){
  
  return <div>
    <h2>I like {name}</h2>
    <h4>{rating} / 5.0</h4>
    <img src={ picture } alt= { name } />
    
  </div> 
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

const foodLike = [
  {
    id:1,
    name: "Kimchi",
    image:"https://contents.sixshop.com/uploadedFiles/72878/product/image_1540176020065.jpg",
    rating: 4.5
  },
  {
    id:2,
    name: "ramen",
    image: "https://t1.daumcdn.net/cfile/tistory/250DFD3A535F09892F",
    rating: 4.0
  },
  {
    id:3,
    name: "samgiopsal",
    image:"https://pds.joins.com/news/FbMetaImage/201809/25a532e9-a644-4a99-a5ed-fc588e5e8e2d.jpg",
    rating: 4.8
  },
  {
    id:4,
    name: "chukumi",
    image:"http://recipe1.ezmember.co.kr/cache/recipe/2019/03/05/52d2be99c015378a75c9db81362422c71.jpg",
    rating: 4.5
  },
  
];


function App() {
  return (
  <div>
    {foodLike.map(dish => (
      <Food key={ dish.id } name={ dish.name } picture={ dish.image } rating={dish.rating} />
    ))}
  </div>
  )
}

export default App;
