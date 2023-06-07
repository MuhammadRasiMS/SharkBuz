import SideBar from "../../Partials/Sidebar/SideBar";
import CardRight from "../../components/Home/CardRight/CardRight";
import MainCard from "../../components/Home/MainCard/MainCard";
import './Home.css';
import slides from './slidesData';
import slides2 from "./slidesData2";

export default function Home() {
  
  return (
    <div className="home">
      <SideBar />
      <div className="container-styles">
        <MainCard slides={slides} parentWidth={500} />
      </div>
      <div className="container-styles1">
        <CardRight slides2={slides2} parentWidth={500} />
      </div>
    </div>
  );
}
