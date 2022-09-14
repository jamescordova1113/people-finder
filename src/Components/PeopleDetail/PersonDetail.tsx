import { IPerson } from "../../types";
import "./PersonDetail.css";

interface IPersonDetail {
  person: IPerson;
}

export const PersonDetail = ({ person }: IPersonDetail) => {
  return (
    <div className="person-item">
      <img src={person.avatar} alt="avatar" className="avatar" loading="lazy" />
      <div className="person-detail">
        <h3>{person.name}</h3>
        <p className="description-p">{person.description}</p>
      </div>
    </div>
  );
};
