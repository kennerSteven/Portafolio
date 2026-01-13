import { AboutmeItems } from "../../../data/AboutmeItems";
import CardAboutme from "../../Card/CardAboutme";

export default function AboutItemsCards() {
  return (
    <div className="row justify-content-center mt-5 ">
      {AboutmeItems.map((item, key) => (
        <div key={key} className="col-lg-4 m-2">
          <CardAboutme icon={item.icon} label={item.name} />
        </div>
      ))}
    </div>
  );
}
