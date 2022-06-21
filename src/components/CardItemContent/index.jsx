import "./CardItemContent.css";

export default function CardItemContent({ title, content }) {
  return (
    <div className="card-item-content">
      <p className="title">{title}</p>
      <p className="content">{content}</p>
    </div>
  );
}
