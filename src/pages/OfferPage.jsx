import { useParams } from "react-router-dom";

const OfferPage = () => {
  const { segment } = useParams();
  return (
    <div style={{ padding: "2rem", fontFamily: "system-ui" }}>
      <h1>Offer Page (placeholder)</h1>
      <p>Segmento: {segment}</p>
    </div>
  );
};

export default OfferPage;
