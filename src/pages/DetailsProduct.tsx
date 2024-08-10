import { Link, useParams } from "react-router-dom";

export const DetailsProduct = () => {
  const { id } = useParams();
  return (
    <>
      DetailsProduct {id}
      <Link to="/home"></Link>
    </>
  );
};
