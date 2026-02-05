import React from "react";

const impressumSections = [
  {
    heading: "Angaben gemäß § 5 TMG",
    lines: [
      "New Delhi Restaurant",
      "Kumar und Sehjal GbR",
      "Vertreten durch:",
      "Ramneek Kumar und Arbind Sehjal",
      "Pfotenhauerstraße 70",
      "01307 Dresden",
      "Deutschland",
      "Telefon: +49 152 14704642",
      "E-Mail: hallo.newdelhi@gmail.com"
    ]
  },
  {
    heading: "Umsatzsteuer-ID",
    lines: [
      "Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz:",
      "DE458817652"
    ]
  },
  {
    heading: "Handelsregister",
    lines: ["Eintragung im Handelsregister: Nein"]
  },
  {
    heading: "Verantwortlich für den Inhalt nach §18 Abs. 2 MStV",
    lines: [
      "Ramneek Kumar",
      "Pfotenhauerstraße 70",
      "01307 Dresden",
      "Deutschland"
    ]
  },
  {
    heading: "Online-Streitbeilegung",
    lines: [
      "Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:",
      "https://ec.europa.eu/consumers/odr",
      "Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen."
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
