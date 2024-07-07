import "./SectionCard.css";

interface Props {
  name: string;
  brdColor: string;
}

function SectionCard({ name, brdColor }: Props) {
  return (
    <div style={{ borderColor: brdColor }} className="section_card">
      <h2>{name}</h2>
    </div>
  );
}

export default SectionCard;
