import React from "react";

const Footer = ({ copy, onImpressumClick }) => {
  const year = new Date().getFullYear();
  const safeCopy = copy || {};
  const allergenItems =
    safeCopy.allergenLegend
      ?.split(/•|\u0007/)
      .map((item) => item.trim())
      .filter(Boolean) || [];
  const itemsPerColumn = Math.ceil(allergenItems.length / 3) || 1;
  const allergenColumns = Array.from({ length: 3 }, (_, colIdx) =>
    allergenItems.slice(colIdx * itemsPerColumn, (colIdx + 1) * itemsPerColumn)
  );
  const impressumLabel = safeCopy.impressumLabel || "Impressum";
  const impressumHref = safeCopy.impressumHref || "/impressum";
  const handleImpressumClick = (event) => {
    if (!onImpressumClick) {
      return;
    }
    event.preventDefault();
    onImpressumClick();
  };

  return (
    <footer className="menu-footer">
      <div className="footer-columns">
        <div>
          <h4>{safeCopy.addressHeading}</h4>
          <p>
            {safeCopy.addressLines?.map((line, idx) => (
              <React.Fragment key={line}>
                {line}
                {idx < safeCopy.addressLines.length - 1 && <br />}
              </React.Fragment>
            ))}
          </p>
        </div>
        <div>
          <h4>{safeCopy.hoursHeading}</h4>
          <p>
            {safeCopy.hoursLines?.map((line, idx) => (
              <React.Fragment key={line}>
                {line}
                {idx < safeCopy.hoursLines.length - 1 && <br />}
              </React.Fragment>
            ))}
          </p>
        </div>
        <div id="contact">
          <h4>{safeCopy.contactHeading}</h4>
          <p>
            {safeCopy.contactLines?.map((line, idx) => (
              <React.Fragment key={line}>
                {line}
                {idx < safeCopy.contactLines.length - 1 && <br />}
              </React.Fragment>
            ))}
          </p>
        </div>
      </div>

      <div id="allergen" className="footer-allergen">
        <h5>{safeCopy.allergenHeading}</h5>
        <div className="footer-allergen-list">
          {allergenColumns.map((col, idx) => (
            <ul key={idx} className="allergen-column">
              {col.map((entry) => (
                <li key={entry}>{entry}</li>
              ))}
            </ul>
          ))}
        </div>
        <p className="footer-note">{safeCopy.allergenNote}</p>
      </div>

      <p className="footer-bottom">
        (c) {year} {safeCopy.bottomLabel}
        <span className="footer-separator" aria-hidden="true">
          |
        </span>
        <a
          className="footer-link"
          href={impressumHref}
          onClick={handleImpressumClick}
        >
          {impressumLabel}
        </a>
      </p>
    </footer>
  );
};

export default Footer;
