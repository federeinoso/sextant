import "./Exhibit.css";

const Exhibit = ({ name, children }) => {
  return (
    <div className="exhibit-container">
      <h2 className="exhibit-title">{name}</h2>
      <div className="exhibit-content">{children}</div>
    </div>
  );
};

export default Exhibit;
