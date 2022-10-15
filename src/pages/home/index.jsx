import React from 'react'

import Card from '../../componenets/card/Card'
import ps from '../../assets/images/ps.jpg'
import CardList from '../../componenets/CardList/CardList'

const products=  [{
  image:ps,
   name:"نام آیتم در دسته بندی ها",
   price:"22000000" ,
    onClick:()=>{} 
},
{
  image:ps,
   name:"نام آیتم در دسته بندی ها",
   price:"22000000",
    onClick:()=>{} 
},
{image:ps,
name:"نام آیتم در دسته بندی ها",
price:"2200000",
 onClick:()=>{} 
},
{image:ps,
name:"نام آیتم در دسته بندی ها",
price:"22000000",
 onClick:()=>{} 
}
,
{image:ps,
name:"نام آیتم در دسته بندی ها",
price:"22000000",
 onClick:()=>{} 
},
{image:ps,
name:"نام آیتم در دسته بندی ها",
price:"22000000",
 onClick:()=>{} 
},
{image:ps,
name:"نام آیتم در دسته بندی ها",
price:"22000000",
 onClick:()=>{} 
},
{image:ps,
name:"نام آیتم در دسته بندی ها",
price:"22000000",
 onClick:()=>{} 
},
{image:ps,
name:"نام آیتم در دسته بندی ها",
price:"22000000",
 onClick:()=>{} 
}]

const Home = () => {
  return (
    <div>
      <CardList
      title={"دسته بندی ها"}
      href={"/categories/1"}  >
{products.map((item,index)=>(<Card key={index}{...item}/>))}
</CardList>
<CardList
      title={"دسته بندی ها"}
      href={"/categories/2"}  >
{products.map((item,index)=>(<Card key={index}{...item}/>))}
</CardList>
<CardList
      title={"دسته بندی ها"}
      href={"/categories/3"}  >
{products.map((item,index)=>(<Card key={index}{...item}/>))}
</CardList>
<CardList
      title={"دسته بندی ها"}
      href={"/categories/4"}  >
{products.map((item,index)=>(<Card key={index}{...item}/>))}
</CardList>
    </div>
  )
}

export default Home