import CardSkill from "../../../components/Card/CardSkills";
import { ItemSkills } from "../../../data/ItemSkills";

export default function SkillsCards() {
  return (
    <div className="container my-5">
      <div className="row justify-content-center ">
        {ItemSkills.map((skill, k) => (
          <div
            key={k}
            className="col-lg-2 col-md-3 col-sm-4 col-5 d-flex  m-1"
          >
            <CardSkill
              description={skill.description}
              iconSkill={skill.iconSkill}
              nameSkill={skill.nameSkill}
              category={skill.category}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
