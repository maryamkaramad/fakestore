import React from "react";
import "./categories-style.scss";
import { useParams } from "react-router-dom";
import { useState, useEfect } from "react";
import ps from "../../assets/images/ps.jpg";
import { Link } from "react-router-dom";
import Card from "../../componenets/card/Card";
import Container from "../../componenets/container/Container";
const Categories = () => {
  const { CategoriesID } = useParams();
  const [categories, usecategories] = useState([
    { id: 1, title: "موبایل" },
    { id: 2, title: "لپ تاپ" },
    { id: 3, title: "تلویزیون" },
    { id: 4, title: "بازی" },
    { id: 5, title: "لوازم جانبی" },
  ]);
  const [productlist, setproductlist] = useState([
    {
      image: ps,
      name: "نام آیتم در دسته بندی ها",
      price: "22000000",
      onClick: () => {},
    },
    {
      image: ps,
      name: "نام آیتم در دسته بندی ها",
      price: "22000000",
      onClick: () => {},
    },
    {
      image: ps,
      name: "نام آیتم در دسته بندی ها",
      price: "2200000",
      onClick: () => {},
    },
    {
      image: ps,
      name: "نام آیتم در دسته بندی ها",
      price: "22000000",
      onClick: () => {},
    },
    {
      image: ps,
      name: "نام آیتم در دسته بندی ها",
      price: "22000000",
      onClick: () => {},
    },
    {
      image: ps,
      name: "نام آیتم در دسته بندی ها",
      price: "22000000",
      onClick: () => {},
    },
    {
      image: ps,
      name: "نام آیتم در دسته بندی ها",
      price: "22000000",
      onClick: () => {},
    },
  ]);
  return (
    <div className="Categories">
      <Container>
        <div className="Categories__content">
          <div className="Categories__nav">
            <ul>
              {categories.map((item) => (
                <li key={item.id}>
                  <Link className="link__style" to={`/categories/${item.id}`}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="product">
            <h2>{categories.find((item) => item.id == CategoriesID)?.title}</h2>
            <div className="product__list">
              {productlist.map((p, index) => (
                <Card id={index} {...p} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default Categories;
