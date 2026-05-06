import LegalLayout from '../components/LegalLayout'
import '../components/LegalLayout.css'

const sections = [
  { num: '01', title: 'Scope of Application' },
  { num: '02', title: 'Services' },
  { num: '03', title: 'Conclusion of Contract' },
  { num: '04', title: 'Prices & Payment' },
  { num: '05', title: 'Project Delivery & Acceptance' },
  { num: '06', title: 'Client Obligations' },
  { num: '07', title: 'Intellectual Property & Usage Rights' },
  { num: '08', title: 'Confidentiality' },
  { num: '09', title: 'Warranty & Liability' },
  { num: '10', title: 'Monthly Partnership Terms' },
  { num: '11', title: 'Termination' },
  { num: '12', title: 'Governing Law & Jurisdiction' },
  { num: '13', title: 'Amendments' },
]

export default function TermsConditions() {
  return (
    <LegalLayout title="Terms & Conditions" subtitle="Legal">
      <div className="legal-content">

        <div className="legal-placeholder" style={{ marginBottom: '48px' }}>
          <p>
            This section is currently being prepared. The full Terms & Conditions will be published here shortly.
            For any questions in the meantime, please contact us at{' '}
            <a href="mailto:info@eden-core.com">info@eden-core.com</a>.
          </p>
        </div>

        {sections.map((s) => (
          <section key={s.num}>
            <h2>
              <span className="legal-num">{s.num}</span>
              {s.title}
            </h2>
            <div className="legal-placeholder">
              <p>Content for this section will be added shortly.</p>
            </div>
          </section>
        ))}

      </div>
    </LegalLayout>
  )
}
