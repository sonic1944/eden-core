import LegalLayout from '../components/LegalLayout'
import '../components/LegalLayout.css'

export default function LegalNotice() {
  return (
    <LegalLayout title="Legal Notice" subtitle="Impressum">
      <div className="legal-content">

        <section>
          <h2><span className="legal-num">—</span> Information According to Swiss Law</h2>
          <div className="legal-info-card">
            <p><strong>Eden-Core</strong></p>
            <p>Rothenburg, Lucerne</p>
            <p>Switzerland</p>
            <p>E-Mail: <a href="mailto:info@eden-core.com">info@eden-core.com</a></p>
            <p>Website: <a href="https://www.eden-core.com" target="_blank" rel="noopener noreferrer">www.eden-core.com</a></p>
          </div>
        </section>

        <section>
          <h2><span className="legal-num">—</span> Authorized Representative</h2>
          <div className="legal-info-card">
            <p><strong>Nicolas Edeni</strong></p>
          </div>
        </section>

        <section>
          <h2><span className="legal-num">—</span> Disclaimer</h2>
          <p>
            The content of this website has been created with the greatest possible care. However,
            we do not guarantee the accuracy, completeness, or timeliness of the information provided.
          </p>
          <p>
            Liability claims against Eden-Core for material or immaterial damages resulting from
            access to, use of, or non-use of the published information are excluded.
          </p>
        </section>

        <section>
          <h2><span className="legal-num">—</span> Liability for External Links</h2>
          <p>
            This website may contain links to third-party websites. We assume no responsibility
            for the content of external websites. The operators of the linked websites are solely
            responsible for their content.
          </p>
        </section>

        <section>
          <h2><span className="legal-num">—</span> Copyright</h2>
          <p>
            All content, images, designs, text, and files published on this website are subject
            to copyright and other intellectual property laws.
          </p>
          <p>
            Any use, reproduction, or distribution without prior written consent from Eden-Core
            is prohibited.
          </p>
        </section>

        <section>
          <h2><span className="legal-num">—</span> Contact</h2>
          <div className="legal-info-card">
            <p>E-Mail: <a href="mailto:info@eden-core.com">info@eden-core.com</a></p>
          </div>
        </section>

      </div>
    </LegalLayout>
  )
}
