import DetailCard from "../components/DetailCard";
import SearchBar from "../components/SearchBar";
import Seo from "../components/Seo";

export default function Detail() {
  return (
    <>
      <Seo title="About" />
      <SearchBar />
      <DetailCard />
    </>
  );
}
