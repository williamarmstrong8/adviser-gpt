import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const sectionStyles = {
  marginBottom: 32,
};
const headingStyles = {
  fontSize: 22,
  fontWeight: 500,
  color: "#1a1a1a",
  marginBottom: 12,
  fontFamily: "var(--font-playfair), Georgia, 'Times New Roman', serif",
};
const subheadingStyles = {
  fontSize: 16,
  fontWeight: 600,
  color: "#1a1a1a",
  marginBottom: 8,
  marginTop: 20,
};
const bodyStyles = {
  fontSize: 15,
  lineHeight: 1.65,
  color: "#555",
  marginBottom: 12,
};

export default function PrivacyPage() {
  return (
    <main style={{ paddingTop: 88, minHeight: "100vh", background: "#fafaf9" }}>
      <Navbar />

      <article
        style={{
          maxWidth: 720,
          margin: "0 auto",
          padding: "80px 24px 96px",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(28px, 3.5vw, 40px)",
            fontWeight: 400,
            lineHeight: 1.2,
            letterSpacing: "-0.01em",
            color: "#1a1a1a",
            marginBottom: 48,
            fontFamily:
              "var(--font-playfair), Georgia, 'Times New Roman', serif",
          }}
        >
          Privacy Policy
        </h1>

        <section style={sectionStyles}>
          <h2 style={headingStyles}>Introduction</h2>
          <p style={bodyStyles}>
            Our Privacy Policy explains how S2 Strategy, Inc. may collect,
            store, use, disclose and otherwise process information about you in
            the course of our business including through our websites that link
            to this notice (such as AdviserGPT); the &ldquo;AdviserGPT&rdquo;
            tool—our software-as-a-service offering; and our marketing and sales
            activities (collectively, our &ldquo;Services&rdquo;). It also sets
            out important information about your privacy rights.
          </p>
        </section>

        <section style={sectionStyles}>
          <h2 style={headingStyles}>Personal Information We Collect</h2>
          <p style={bodyStyles}>
            We collect information that alone or in combination with other
            information in our possession could be used to identify you
            (&ldquo;Personal Information&rdquo;) as follows:
          </p>
          <p style={{ ...bodyStyles, fontWeight: 600, color: "#1a1a1a" }}>
            Personal Information You Provide
          </p>
          <p style={bodyStyles}>
            We may collect Personal Information if you create an account to use
            our Services or communicate with us.
          </p>

          <p style={subheadingStyles}>Communication Information</p>
          <p style={bodyStyles}>
            If you communicate with us, we may collect your name, contact
            information, and the contents of any messages you send
            (&ldquo;Communication Information&rdquo;).
          </p>

          <p style={subheadingStyles}>Payment Information</p>
          <p style={bodyStyles}>
            When you purchase or subscribe to our Services, we may collect your
            billing information, such as your ACH bank routing and account
            details, credit card number, expiration date, and billing address,
            or use a third-party payment processor to process your payments
            (&ldquo;Payment Information&rdquo;).
          </p>

          <p style={subheadingStyles}>Social Media Pages</p>
          <p style={bodyStyles}>
            We may have postings on social media sites like LinkedIn, YouTube,
            and X (&ldquo;Social Media Pages&rdquo;), etc. When you interact with
            our Social Media Pages, we may collect Personal Information that you
            elect to provide to us, such as your contact details (&ldquo;Social
            Information&rdquo;). In addition, the companies that host our Social
            Media Pages may provide us with aggregate information and analytics
            regarding the use of our Social Media Pages.
          </p>

          <p style={subheadingStyles}>Technical Information</p>
          <p style={bodyStyles}>
            When you visit, use, and interact with our Services, we may receive
            certain information about your visit, use, or interactions
            (&ldquo;Technical Information&rdquo;), including Log data, Usage
            data, Device information, and Cookies.
          </p>

          <p style={subheadingStyles}>Customer Support Information</p>
          <p style={bodyStyles}>
            When you contact us for customer support, feedback, or inquiries, we
            may collect your name, email address, phone number, and any other
            information you provide us or that we request from you to assist you
            or resolve your issue (&ldquo;Support Information&rdquo;).
          </p>

          <p style={subheadingStyles}>Analytics</p>
          <p style={bodyStyles}>
            We may use a variety of online analytics products that use cookies
            to help us analyze how users use our Services and enhance your
            experience when you use them.
          </p>

          <p style={subheadingStyles}>Online Tracking and Do Not Track Signals</p>
          <p style={bodyStyles}>
            Our website currently does not respond to &ldquo;Do Not
            Track&rdquo; (&ldquo;DNT&rdquo;) signals and operates as described
            in this Privacy Policy whether or not a DNT signal is received.
          </p>
        </section>

        <section style={sectionStyles}>
          <h2 style={headingStyles}>How We Use Personal Information</h2>
          <p style={bodyStyles}>
            We do not sell your Personal Information. We may use Personal
            Information for the following purposes: To provide, administer,
            maintain, improve and/or analyze the Services; To provide you with
            support services; To communicate with you including by discussing
            with you options to use the AdviserGPT Platform; To prevent fraud,
            criminal activity, or misuses of our services, and to ensure the
            security of our IT systems, architecture, and networks; and To
            comply with legal obligations and legal process and to protect our
            rights, privacy, safety, or property, and/or that of our
            Affiliates, you, or other third parties.
          </p>
        </section>

        <section style={sectionStyles}>
          <h2 style={headingStyles}>Aggregated Information</h2>
          <p style={bodyStyles}>
            We may aggregate Personal Information and use the aggregated
            information to analyze the effectiveness of our Services, to improve
            and add features to our Services. In addition, from time to time, we
            may analyze the general behavior and characteristics of users of our
            Services and share aggregated information like general user
            statistics with third parties, publish such aggregated information
            or make such aggregated information generally available.
          </p>
        </section>

        <section style={sectionStyles}>
          <h2 style={headingStyles}>Disclosure of Personal Information</h2>
          <p style={bodyStyles}>
            In certain circumstances we may share your Personal Information if
            required by the law, including without limitation in the situations
            below: Vendors, Service Providers, and Subprocessors; Business
            Transfers; Legal Requirements.
          </p>
        </section>

        <section style={sectionStyles}>
          <h2 style={headingStyles}>Request for Action</h2>
          <p style={bodyStyles}>
            To request access, deletion, rectification, restriction, or
            portability of your Personal Information, please contact us at{" "}
            <a
              href="mailto:contact@s2strategy.ai"
              style={{ color: "#e85d26", textDecoration: "underline" }}
            >
              contact@s2strategy.ai
            </a>
            . We reserve our right to limit our facilitating such requests to
            that which is required by applicable law.
          </p>
        </section>

        <section style={sectionStyles}>
          <h2 style={headingStyles}>Security</h2>
          <p style={bodyStyles}>
            We take reasonable and appropriate steps to protect your Personal
            Information in an effort to prevent loss, misuse, and unauthorized
            access, disclosure, alteration and destruction. We use appropriate
            technical and organizational measures to protect your personal
            information which may include: physical access controls, encryption,
            intrusion detection and network monitoring depending on the nature
            of the information and the scope of processing.
          </p>
        </section>

        <section style={sectionStyles}>
          <h2 style={headingStyles}>Data Retention and Deletion</h2>
          <p style={bodyStyles}>
            We retain your personal information for as long as necessary to
            fulfill the purposes for which we collected it, unless a longer
            retention period is required or permitted by law. We may also retain
            your personal information for legitimate business interests, such as
            to comply with our legal obligations, resolve disputes, and
            maintain our records.
          </p>
        </section>

        <section style={sectionStyles}>
          <h2 style={headingStyles}>Links to Other Websites</h2>
          <p style={bodyStyles}>
            Our Services may contain links to other websites not operated or
            controlled by S2 Strategy, including social media services
            (&ldquo;Third Party Sites&rdquo;). The information that you share
            with Third Party Sites will be governed by the specific privacy
            policies and terms of service of the Third Party Sites and not by
            this Privacy Policy.
          </p>
        </section>

        <section style={sectionStyles}>
          <h2 style={headingStyles}>Changes to Our Privacy Policy</h2>
          <p style={bodyStyles}>
            We may update this Privacy Policy from time to time. When we do we
            will post an updated version on this page, unless another type of
            notice is required by applicable law or contractual agreement.
          </p>
        </section>

        <section style={sectionStyles}>
          <h2 style={headingStyles}>Questions</h2>
          <p style={bodyStyles}>
            If you have questions about our privacy practices, you can contact
            us at{" "}
            <a
              href="mailto:contact@s2strategy.ai"
              style={{ color: "#e85d26", textDecoration: "underline" }}
            >
              contact@s2strategy.ai
            </a>
            .
          </p>
        </section>
      </article>

      <Footer />
    </main>
  );
}
