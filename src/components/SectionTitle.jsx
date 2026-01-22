import './SectionTitle.css';

function SectionTitle({ children, subtitle }) {
  return (
    <div className="section-title">
      <h2 className="section-title-heading">{children}</h2>

      {subtitle && (
        <p className="section-title-subtitle">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionTitle;
