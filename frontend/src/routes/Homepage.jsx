import "./homepage.scss";
import { Card } from "../components/Card";
import { useQuery } from "react-query";
import { fetchRecommendations } from "../fetchers/recommendations";
import { ButtonNavigate } from "../components/ButtonNavigate";
import { Plus } from "phosphor-react";

export const Homepage = () => {
  const { data, isLoading, error } = useQuery(
    ["recommend"],
    fetchRecommendations
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <section className="homepage-container">
      {data.recommends.map((item, index) => {
        return (
          <div key={index}>
            <Card
              masterpiece={item.masterpiece}
              rate={item.rate}
              description={item.description}
              category={item.category}
              author={item.author}
            />
          </div>
        );
      })}
      <ButtonNavigate url={"/recommend"}>
        <Plus size={40} />
      </ButtonNavigate>
    </section>
  );
};
