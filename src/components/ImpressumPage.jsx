import React from "react";

const impressumSections = [
  {
    lines: [
      "New Delhi Restaurant",
      "XYZ Gastro GmbH",
      "Represented by: Ramneek",
      "Street Name 12",
      "12345 Berlin",
      "Germany",
      "",
      "Phone: +49 1521 4704642",
      "Email: hello@newdelhi.com"
    ]
  },
  {
    heading: "Registered in the commercial register",
    lines: [
      "Register court: Amtsgericht Berlin-Charlottenburg",
      "Registration number: HRB 123456"
    ]
  },
  {
    heading: "VAT Identification Number according to §27a UStG:",
    lines: ["DE123456789"]
  },
  {
    heading: "Responsible for content according to §18 Abs. 2 MStV:",
    lines: ["Max Mustermann", "Street Name 12", "12345 Berlin"]
  },
  {
    heading: "Online Dispute Resolution",
    lines: [
      "The European Commission provides a platform for online dispute resolution (ODR):",
      "https://ec.europa.eu/consumers/odr"
    ]
  },
  {
    lines: [
      "We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board."
    ]
  },
  {
    heading: "Liability for Contents",
    lines: [
      "As service providers, we are liable for own contents of these websites according to §7 Abs.1 TMG."
    ]
  },
  {
    heading: "Liability for Links",
    lines: [
      "We have no influence on the contents of linked external websites and therefore cannot assume any liability."
    ]
  },
  {
    heading: "Copyright",
    lines: ["All content on this website is subject to German copyright law."]
  },
  {
    heading: "Allergen Information",
    lines: [
      "Information on allergens and additives is available upon request before ordering."
    ]
  }
];

const ImpressumPage = ({
  onBack,
  backLabel = "Back to menu",
  title = "Impressum"
}) => (
  <section className="impressum-page">
    <h2 className="impressum-title">{title}</h2>
    <div className="impressum-content">
      {impressumSections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="impressum-section">
          {section.heading && (
            <h3 className="impressum-heading">{section.heading}</h3>
          )}
          <p className="impressum-block">
            {section.lines.map((line, lineIndex) => (
              <React.Fragment key={`${sectionIndex}-${lineIndex}`}>
                {line.startsWith("https://") ? (
                  <a
                    className="impressum-link"
                    href={line}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {line}
                  </a>
                ) : (
                  line
                )}
                {lineIndex < section.lines.length - 1 && <br />}
              </React.Fragment>
            ))}
          </p>
        </div>
      ))}
    </div>
    <button className="btn-outline impressum-back" type="button" onClick={onBack}>
      {backLabel}
    </button>
  </section>
);

export default ImpressumPage;
