import "./homepageStyle.scss";
import { Card } from "../components/Card";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Homepage = () => {
  const [recommends, setRecommends] = useState([{}])

  useEffect(() => {
    fetch('http://localhost:8080/recommendations-list')
      .then((res) => res.json())
      .then(({ recommends }) => setRecommends(recommends))
  }, [])

  return (
    <section className="homepage-container">
      {recommends.map((item, index) => {
        return (
          <div key={index}><Card masterpiece={item.masterpiece} rate={item.rate} description={item.description} category={item.category} author={item.author} /></div>
        )
      })}
      <Link to={'/recommend'}>recommend</Link>
    </section>
  )
};
