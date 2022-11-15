import axios from "axios";
import { useState, useEffect } from "react";
import OfferCard from "../components/OfferCard";

const Home = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );
        //   console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <p>Loading ...</p>
  ) : (
    <div className="home-container">
      {data.offers.map((offer) => {
        // console.log(offer);
        return <OfferCard key={offer._id} offerInfos={offer} />;
      })}
    </div>
  );
};

export default Home;
