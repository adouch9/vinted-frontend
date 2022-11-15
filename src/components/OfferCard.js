import { Link } from "react-router-dom";

const OfferCard = ({ offerInfos }) => {
  //   console.log(offerInfos.owner);
  //   if (offerInfos.owner) {
  //     console.log(offerInfos.owner.account.avatar);
  //   }
  //   console.log(offerInfos._id);
  return (
    offerInfos.owner && (
      <Link to={`/offer/${offerInfos._id}`} className="offer-card-container">
        <div>
          {offerInfos.owner.account.avatar && (
            <img
              src={offerInfos.owner.account.avatar.secure_url}
              alt="owner"
              style={{ height: 50, width: 50 }}
            />
          )}
          <span>{offerInfos.owner.account.username}</span>
        </div>
        <img
          src={offerInfos.product_image.secure_url}
          alt="product"
          style={{ height: 400, width: 200, objectFit: "cover" }}
        />
        <div>
          <p>{offerInfos.product_price} €</p>
          {offerInfos.product_details.map((detail, index) => {
            if (detail.TAILLE) {
              return <p key={index}>{detail.TAILLE}</p>;
            } else {
              return null;
            }
          })}
          {offerInfos.product_details.map((detail, index) => {
            if (detail.MARQUE) {
              return <p key={index}>{detail.MARQUE}</p>;
            } else {
              return null;
            }
          })}
        </div>
      </Link>
    )
  );
};

export default OfferCard;
