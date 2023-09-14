import ConceptImage from "./ConceptImage";

const Concept = (props) => {
  return (
    <li className="concept">
      <ConceptImage image={props.image}/>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </li>
  );
};

export default Concept;
