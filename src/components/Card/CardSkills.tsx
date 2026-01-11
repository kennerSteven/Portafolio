import "../Card/CardSkills.css";

interface props {
  iconSkill: React.ReactNode;
  nameSkill: string;
  category: string;
  description: string;
}

export default function CardSkill({
  iconSkill,
  nameSkill,
  category,
  description,
}: props) {
  return (
    <div className="cardContent p-3">
      <div className="d-flex gap-2">
        <div>{iconSkill}</div>
        <div className="d-flex flex-column">
          <h5 className="m-0 titleIcon">{nameSkill}</h5>
          <small className="m-0 text-muted">{category}</small>
        </div>
      </div>
      <div className="pt-2">
        <p>{description}</p>
      </div>
    </div>
  );
}
