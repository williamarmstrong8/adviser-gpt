import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const sectionStyles = { marginBottom: 32 };
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
const linkStyles = { color: "#e85d26", textDecoration: "underline" as const };

export default function TermsPage() {
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
            marginBottom: 8,
            fontFamily:
              "var(--font-playfair), Georgia, 'Times New Roman', serif",
          }}
        >
          AdviserGPT Terms of Service
        </h1>
        <p style={{ ...bodyStyles, marginBottom: 32 }}>
          Date of Last Revision: December 1, 2025
        </p>

        <section style={sectionStyles}>
          <p style={{ ...bodyStyles, fontWeight: 600, color: "#1a1a1a" }}>
            IMPORTANT – READ CAREFULLY BEFORE USING THE SERVICES: BY INDICATING
            YOUR ACCEPTANCE OF THESE TERMS OF SERVICE (&ldquo;TERMS&rdquo;) OR
            ACCESSING OR USING THE ADVISERGPT SERVICES (&ldquo;ADVISERGPT&rdquo;),
            YOU ARE ACCEPTING ALL OF THE TERMS.
          </p>
          <p style={bodyStyles}>
            THESE TERMS GOVERN THE PROVISION OF ADVISERGPT BY US TO CUSTOMER.
            THESE TERMS, THE APPLICABLE ORDER AGREED TO BY CUSTOMER, AND ANY
            POLICIES OR OTHER DOCUMENTS INCORPORATED BY REFERENCE HEREIN OR
            THEREIN ARE COLLECTIVELY REFERRED TO AS THE &ldquo;AGREEMENT&rdquo;.
          </p>
          <p style={bodyStyles}>
            IF YOU DO NOT AGREE TO THESE TERMS, YOU MAY NOT USE ADVISERGPT. IF
            THIS AGREEMENT IS CONSIDERED AN OFFER BY US, THEN ACCEPTANCE IS
            EXPRESSLY LIMITED TO THESE TERMS. THIS IS A LEGAL AGREEMENT BETWEEN
            YOU AND S2 STRATEGY.
          </p>
          <p style={bodyStyles}>
            IF YOU ARE ACCEPTING THIS AGREEMENT ON BEHALF OF ANOTHER PERSON OR A
            COMPANY OR OTHER LEGAL ENTITY, THEN YOU REPRESENT AND WARRANT THAT
            YOU HAVE FULL AUTHORITY TO BIND THAT PERSON, COMPANY, OR LEGAL
            ENTITY TO THIS AGREEMENT.
          </p>
          <p style={bodyStyles}>
            IF YOU DO NOT AGREE TO ALL OF THE TERMS AND CONDITIONS OF THIS
            AGREEMENT, THEN YOU ARE NOT ENTITLED TO USE ADVISERGPT.
          </p>
        </section>

        <section style={sectionStyles}>
          <h2 style={headingStyles}>1. Important Terms</h2>
          <p style={subheadingStyles}>1.1</p>
          <p style={bodyStyles}>
            This Agreement is between S2 Strategy, Inc. (&ldquo;us&rdquo; or
            &ldquo;we&rdquo; or &ldquo;our&rdquo;) and you (&ldquo;Customer&rdquo;
            or &ldquo;you&rdquo; or &ldquo;your&rdquo;) and govern your use of
            AdviserGPT.
          </p>
          <p style={subheadingStyles}>1.2</p>
          <p style={bodyStyles}>
            We may modify this Agreement from time to time by posting the updated
            Agreement on our website. All changes become effective when posted.
            Such changes are not retroactive, but your continued use of
            AdviserGPT after any such changes means you agree to such changes.
            Notwithstanding the above, in no event may we alter the Agreement in
            a way that meaningfully detracts from our obligations with respect
            to Confidential Information or Customer Content (both as defined
            below) as agreed to in this Agreement without express written
            authorization from you.
          </p>
          <p style={subheadingStyles}>1.3</p>
          <p style={bodyStyles}>
            AdviserGPT is a customer acquisition and research tool, and the
            output provided by AdviserGPT (&ldquo;Output&rdquo;) to you in
            response to your query to AdviserGPT based on data, documents and
            information uploaded into your Account (&ldquo;Input&rdquo;) is not
            financial advice. The Output of AdviserGPT may be AI-generated and
            may contain errors and misstatements or may be incomplete. You
            understand and agree that (a) AdviserGPT and/or the Output is not a
            replacement for your obligations and responsibilities under the
            law, and (b) and it is your sole responsibility and obligation to
            review and approve all Output. You must make an independent
            determination as to the suitability of the Output in light of your
            own business and legal requirements before use of the Output. If you
            are not satisfied for any reason with any portion of the Output, then
            you should not use it.
          </p>
        </section>

        <section style={sectionStyles}>
          <h2 style={headingStyles}>2. Trial Access; Other Free Use</h2>
          <p style={subheadingStyles}>2.1</p>
          <p style={bodyStyles}>
            If you are provided trial access to AdviserGPT or any other free use
            of AdviserGPT (&ldquo;Trial Access&rdquo;), you may access AdviserGPT
            for the period of time set forth in your Order (the &ldquo;Trial
            Period&rdquo;). Trial Access is for the sole and exclusive purpose
            of enabling Customer to evaluate a prospective purchase of
            AdviserGPT and not to be deployed as part of Customer&apos;s business
            processes. Certain features may not be available for use during the
            Trial Period. Unless earlier terminated, Trial Access will
            automatically time-out at the end of the Trial Period without
            further notice.
          </p>
          <p style={subheadingStyles}>2.2</p>
          <p style={bodyStyles}>
            All Trial Access is subject to the terms and conditions of the
            Agreement; supplemental terms and conditions made available by us
            may also apply and are incorporated herein by this reference. In the
            event of a conflict between this Section and any other portion of the
            Agreement, this Section will control. Customer agrees that we, in
            our sole discretion and for any or no reason, may terminate
            Customer&apos;s Trial Access or any part thereof without prior
            notice, and we will not be liable to Customer or any third party for
            such termination. Customer is solely responsible for exporting
            Output (as defined below), if applicable, from AdviserGPT subject to
            Trial Access before termination or expiration of the Trial Period.
          </p>
          <p style={subheadingStyles}>2.3</p>
          <p style={bodyStyles}>
            TRIAL ACCESS IS PROVIDED &ldquo;AS-IS&rdquo; WITHOUT ANY WARRANTY OF
            ANY KIND, EXPRESS OR IMPLIED. WE WILL HAVE NO LIABILITY OF ANY TYPE
            WITH RESPECT TO SUCH ACCESS OR USE UNLESS SUCH EXCLUSION OF LIABILITY
            IS NOT ENFORCEABLE UNDER APPLICABLE LAW IN WHICH CASE OUR LIABILITY
            WILL NOT EXCEED $1,000.00. NOTWITHSTANDING ANYTHING TO THE CONTRARY
            IN THE &ldquo;LIMITATIONS OF LIABILITY&rdquo; SECTION BELOW, CUSTOMER
            WILL BE FULLY LIABLE UNDER THE AGREEMENT TO S2 STRATEGY AND ITS
            AFFILIATES FOR ANY BREACH BY CUSTOMER OF THE AGREEMENT OR ANY
            DAMAGES ARISING OUT OF CUSTOMER&apos;S USE OF ADVISERGPT UNDER THIS
            SECTION 2.
          </p>
        </section>

        <section style={sectionStyles}>
          <h2 style={headingStyles}>3. Use of AdviserGPT</h2>
          <p style={subheadingStyles}>3.1 Services.</p>
          <p style={bodyStyles}>
            We will make available to you AdviserGPT and the technical
            documentation and usage guides for AdviserGPT available through
            AdviserGPT or otherwise provided by us (&ldquo;Documentation&rdquo;)
            on a non-exclusive, limited, revocable, non-transferable and
            non-sublicenseable basis in accordance with these Terms and your
            order for AdviserGPT referencing these Terms (&ldquo;Order&rdquo;)
            solely: (a) during the relevant Subscription Period (defined below);
            (b) for use by Customer and by the number of Authorized Users (defined
            below), (c) for Customer&apos;s own internal business purposes and not
            for resale or license to third parties, (d) subject to any
            applicable Usage Allowances (defined below), and (e) in accordance
            with any additional AdviserGPT rights and limitations specified in
            the Order.
          </p>
          <p style={subheadingStyles}>3.2 Account Creation.</p>
          <p style={bodyStyles}>
            In order to use AdviserGPT, you must register and create an account
            with us (&ldquo;Account&rdquo;). You represent and warrant that: (a)
            all required Account registration information submitted is truthful
            and accurate; and (b) you will maintain the accuracy of such
            information.
          </p>
          <p style={subheadingStyles}>3.3 Authorized Users.</p>
          <p style={bodyStyles}>
            All Authorized Users will be designated by you, and either you or we
            will enable Authorized Users designated by you. Each Authorized User
            will be provided with a unique username and password provided by you
            or us and may only be used by the designated Authorized User.
            Sharing of usernames and passwords is not permitted. If anyone who is
            not an Authorized User accesses AdviserGPT using the username or
            password of an Authorized User. You may permanently (i.e. not for a
            predefined temporary period of time) replace one Authorized User with
            another if the original Authorized User no longer has access to
            AdviserGPT (i.e. is no longer employed by you). If you desire more
            Authorized Users than are included in your AdviserGPT version, then
            you must purchase an upgrade to the version of AdviserGPT with the
            number of Authorized Users you desire. Such upgrade purchase will be
            prorated for your remaining Subscription Period.
          </p>
          <p style={subheadingStyles}>3.4 Contractors and Affiliates.</p>
          <p style={bodyStyles}>
            Customer may permit its Contractors and personnel of its Affiliates
            (both as defined below) to serve as Authorized Users provided that
            any use of AdviserGPT by each such Contractor or personnel of its
            Affiliates is solely for the benefit of Customer.
          </p>
          <p style={subheadingStyles}>3.5 Support.</p>
          <p style={bodyStyles}>
            We will provide standard support services to you with respect to
            AdviserGPT and your use of AdviserGPT. Send an email to{" "}
            <a href="mailto:support@s2strategy.ai" style={linkStyles}>
              support@s2strategy.ai
            </a>{" "}
            for all support questions.
          </p>
          <p style={subheadingStyles}>3.6 Definitions.</p>
          <p style={bodyStyles}>
            &ldquo;Authorized User&rdquo; means the persons designated and
            granted access to AdviserGPT by or on behalf of Customer based on
            the version of AdviserGPT purchased by you. &ldquo;Contractor&rdquo;
            means the independent contractors and consultants permitted by
            Customer to serve as Authorized Users. &ldquo;Usage Allowance&rdquo;
            means any usage limits (including the number of Authorized Users),
            quantities or other parameters specified in the Order with respect
            to Customer&apos;s use of or access to AdviserGPT. &ldquo;Affiliate&rdquo;
            means an entity that, directly or indirectly, owns or controls, is
            owned or is controlled by, or is under common ownership or control
            with a party. As used herein, &ldquo;control&rdquo; means the power
            to direct the management or affairs of an entity and
            &ldquo;ownership&rdquo; means the beneficial ownership of more than
            fifty percent (50%) of the voting equity securities or other
            equivalent voting interests of an entity.
          </p>
        </section>

        <section style={sectionStyles}>
          <h2 style={headingStyles}>4. Subscription; Fees and Payment</h2>
          <p style={subheadingStyles}>4.1 Subscription.</p>
          <p style={bodyStyles}>
            This Agreement will become effective on the date of your Order and
            will continue thereafter for the period of time set forth in your
            Order (&ldquo;Subscription Period&rdquo;). Any contractual terms and
            conditions, preprinted or otherwise, set forth in a Customer-issued
            purchase order, will be of no force and effect. Any such purchase
            order will be solely for the purpose of fulfilling Customer&apos;s
            internal accounting processes and requirements.
          </p>
          <p style={subheadingStyles}>4.2 Fees; Payment Terms.</p>
          <p style={bodyStyles}>
            In consideration for the rights granted, you will pay us the total
            fees set forth on the Order pursuant to the payment terms set forth
            on the Order. Except as expressly set forth in this Agreement, all
            fees are non-refundable and non-cancellable.
          </p>
          <p style={subheadingStyles}>4.3 Taxes.</p>
          <p style={bodyStyles}>
            Our fees do not include any local, state, federal or foreign taxes,
            levies, or duties of any nature (collectively, &ldquo;Taxes&rdquo;).
            Customer is responsible for timely paying all applicable Taxes
            arising from the performance of this Agreement, excluding only taxes
            based on our income. If we have the legal obligation to pay or
            collect Taxes for which Customer is responsible under this Section,
            the appropriate amount will be invoiced to and paid by Customer
            unless Customer provides us with a valid tax exemption certificate
            authorized by the appropriate taxing authority.
          </p>
        </section>

        <section style={sectionStyles}>
          <h2 style={headingStyles}>5. Customer Obligations</h2>
          <p style={subheadingStyles}>5.1 Use of Customer Content.</p>
          <p style={bodyStyles}>
            When your Input is uploaded into AdviserGPT, you grant us a
            non-exclusive license during your Subscription Period to use, copy,
            transmit, store, analyze, and back up all Input to: (a) enable you to
            use AdviserGPT; (b) allow us to improve, develop and protect
            AdviserGPT; (c) create new services; communicate with you about your
            subscription; (d) send you information we think may be of interest
            to you based on your marketing preferences; and (e) disclose to
            third party service providers and partners to enable and support
            such purposes.
          </p>
          <p style={subheadingStyles}>5.2 Account Activity.</p>
          <p style={bodyStyles}>
            You will: (a) have sole responsibility for the accuracy, quality,
            integrity, legality, reliability, and appropriateness of all
            Customer Content; (b) maintain the confidentiality of your Account
            login credentials and use commercially reasonable efforts to prevent
            unauthorized access to, or use of, AdviserGPT; and (c) be fully
            responsible for all activities that occur under your Account. You are
            responsible for Authorized Users&apos; and your Affiliates&apos;
            compliance with this Agreement. You will promptly notify us of any
            unauthorized Account access or unauthorized use of AdviserGPT of
            which you are aware. We are not liable for any loss or damage arising
            from your failure to comply with the above requirements.
          </p>
          <p style={subheadingStyles}>5.3 Compliance with Applicable Laws.</p>
          <p style={bodyStyles}>
            Your use of AdviserGPT and Customer Content will comply with
            applicable laws, government regulations, and any other legal
            requirements, including any data localization or data sovereignty
            laws, regulations, and any other third party legal requirements
            applicable to you.
          </p>
          <p style={subheadingStyles}>5.4 Backups.</p>
          <p style={bodyStyles}>
            We try to minimize any downtime, but sometimes it is necessary so we
            can keep AdviserGPT updated and secure. You also may have occasional
            access issues and may experience data loss, so backing up your data
            is important. You are responsible for maintaining copies of your
            Customer Content and any other data entered into AdviserGPT. You may
            export your Customer Content at any time and/or request a copy of
            your Customer Content from us. We are not liable for loss of your
            Customer Content or any other data except in accordance with Section
            11 (Limitations of Liability).
          </p>
          <p style={subheadingStyles}>5.5 Restrictions.</p>
          <p style={bodyStyles}>
            You will not, and will not authorized any third party to: (a)
            license, sublicense, sell, resell, rent, lease, transfer, assign,
            distribute, time share or otherwise commercially exploit or make
            AdviserGPT available to any third party other than your Affiliates;
            (b) use AdviserGPT in a way that infringes, misappropriates, or
            violates any person&apos;s rights; (c) decompile, disassemble, or
            otherwise reverse engineer or attempt to reconstruct or discover any
            source code or underlying ideas or algorithms of any of the software
            or systems comprising AdviserGPT; (d) attempt automated means to
            scrape content or Output from AdviserGPT; (e) input, send or store
            material containing software viruses, worms, Trojan horses or other
            harmful computer code, files, scripts, agents or programs; (f)
            interfere with or disrupt the integrity or performance of AdviserGPT;
            (g) use AdviserGPT in violation of any applicable laws or regulations
            (including any export, privacy or personal data laws); or (h) attempt
            to gain unauthorized access to AdviserGPT or related systems or
            networks.
          </p>
          <p style={subheadingStyles}>5.6 Non-AdviserGPT Products.</p>
          <p style={bodyStyles}>
            While we enable integrations with applications, services, and
            content provided by entities or individuals other than us that
            interoperate with AdviserGPT, including software, data, services,
            websites or other products (&ldquo;Non-AdviserGPT Products&rdquo;) as
            a convenience to our customers, no such integrations are official
            partnerships or endorsements. If you enable any Non-AdviserGPT
            Products for use with AdviserGPT, we assume no responsibility or
            liability for such Non-AdviserGPT Products including interoperation
            with AdviserGPT or support, maintenance, security or discontinuation
            of the Non-AdviserGPT Products. Your use of the Non-AdviserGPT
            Products is solely between you and the third party provider of the
            Non-AdviserGPT Product and is governed by such third party&apos;s
            terms and conditions.
          </p>
        </section>

        <section style={sectionStyles}>
          <h2 style={headingStyles}>6. Term; Termination</h2>
          <p style={subheadingStyles}>6.1 Agreement Term; Subscription Period.</p>
          <p style={bodyStyles}>
            This Agreement will become effective on the date of your Order and
            will continue thereafter for the Subscription Period set forth in
            your Order (&ldquo;Initial Subscription Period&rdquo;), unless
            terminated earlier in accordance with the terms of this Agreement.
            The Subscription Period will automatically renew for subsequent
            additional periods of the same length as the Initial Subscription
            Period (each a &ldquo;Renewal Subscription Period&rdquo;) at the
            then-current terms and conditions, unless either party provides
            notice of its intent not to renew at least 30 days before the end of
            the then-current Initial Subscription Period or Renewal Subscription
            Period. Your notice to us that you will not renew the Subscription
            Period must be made by sending an email to{" "}
            <a href="mailto:contact@s2strategy.ai" style={linkStyles}>
              contact@s2strategy.ai
            </a>{" "}
            or through the termination process in your Account.
          </p>
          <p style={subheadingStyles}>6.2 Termination.</p>
          <p style={bodyStyles}>
            This Agreement may be terminated by either party (a) for any breach
            of this Agreement by the other party and such breach has continued
            uncured for a period of 30 days after the breaching party is given
            written notice of such breach; or (b) effective immediately, if the
            other party files, or has filed against it, a petition for voluntary
            or involuntary bankruptcy or similar proceedings pursuant to any
            other insolvency law, makes or seeks to make a general assignment for
            the benefit of its creditors applies for or consents to, the
            appointment of a trustee, receiver, or custodian for a substantial
            part of its property, is wound up or liquidated, or ceases its
            business activities.
          </p>
          <p style={subheadingStyles}>6.3 Effect of Termination.</p>
          <p style={bodyStyles}>
            Upon termination of this Agreement, (a) we will immediately
            terminate access to AdviserGPT, (b) pursuant to Section 7.4, each
            party will promptly return or destroy, at the Disclosing Party&apos;s
            direction, all Confidential Information of the Disclosing Party, and
            all copies thereof, and (c) within 30 days of termination of this
            Agreement, upon request of Customer we will provide or make available
            to you all Customer Content in our possession or control and, in any
            event, within 60 days following termination we will destroy all such
            Customer Content; upon request a party will confirm compliance with
            the foregoing provisions of subsections (b) and (c). The provisions
            of Sections 2.3, 4, 5.4, 5.5, 5.6, 5.7, 6.3, 7, 9, 10, 11 and 12 will
            survive any termination or expiration of this Agreement.
          </p>
          <p style={subheadingStyles}>6.4 Suspension of AdviserGPT Access.</p>
          <p style={bodyStyles}>
            We may suspend your access to and use of AdviserGPT: (a) if we deem
            it necessary to prevent or terminate any prohibited use, or (b) upon
            notice to you if you commit a material breach of this Agreement. We
            will provide you with notice and an opportunity to remedy such
            violation or threat before any such suspension unless we reasonably
            conclude that your use of AdviserGPT is causing an immediate,
            material and ongoing harm to the security, integrity or availability
            of AdviserGPT. We will promptly remove such suspension to AdviserGPT
            once the applicable violation or threat has been resolved. Suspension
            of AdviserGPT will not constitute a termination of the Agreement nor
            will it relieve you of any of your obligations or liabilities under
            the Agreement.
          </p>
        </section>

        <section style={sectionStyles}>
          <h2 style={headingStyles}>7. Confidentiality</h2>
          <p style={subheadingStyles}>7.1 Confidential Information.</p>
          <p style={bodyStyles}>
            &ldquo;Confidential Information&rdquo; means all information that is
            identified as confidential at the time of disclosure by a party
            (&ldquo;Disclosing Party&rdquo;) or reasonably should be known by
            the party receiving (&ldquo;Receiving Party&rdquo;) the information
            to be confidential or proprietary due to the nature of the
            information disclosed and the circumstances surrounding the
            disclosure. This Agreement, AdviserGPT, the Documentation and all
            information regarding the performance of AdviserGPT (including
            availability, uptime, and performance benchmarks) will be deemed to
            be our Confidential Information. Customer Content is your
            Confidential Information.
          </p>
          <p style={subheadingStyles}>7.2 Non-Confidential Information.</p>
          <p style={bodyStyles}>
            Notwithstanding the foregoing, Confidential Information will not
            include information that: (a) has entered the public domain through
            no action or failure to act by the Receiving Party; (b) before
            disclosure hereunder was already lawfully in Receiving Party&apos;s
            possession without any obligation of confidentiality; (c) subsequent
            to disclosure hereunder is obtained by the Receiving Party on a
            non-confidential basis from a third party who has the right to
            disclose such information to the Receiving Party; or (d) is
            independently developed by the Receiving Party without use of or
            reference to the Disclosing Party&apos;s Confidential Information.
          </p>
          <p style={subheadingStyles}>7.3 Obligation of Non-Disclosure.</p>
          <p style={bodyStyles}>
            The Receiving Party agrees (a) not to disclose the Confidential
            Information of the Disclosing Party to any third parties (except for
            its subcontractors or professional advisors who are bound by an
            obligation of confidentiality no less restrictive than this
            provision), and (b) to use the Confidential Information solely for
            the purpose of performing its obligations and exercising its rights
            under this Agreement. The Receiving Party will safeguard the
            Confidential Information of the Disclosing Party with at least the
            same degree of care that it utilizes to safeguard its own
            Confidential Information, but in any event not less than a
            reasonable degree of care. The Receiving Party will not remove or
            alter any copyright, trademark, service mark or other proprietary
            rights notice attached to or included in any Confidential
            Information furnished by Disclosing Party.
          </p>
          <p style={subheadingStyles}>7.4 Return of Confidential Information.</p>
          <p style={bodyStyles}>
            Each Receiving Party will destroy or return to Disclosing Party all
            Confidential Information of the Disclosing Party that the Receiving
            Party possesses upon the expiration or termination of this Agreement;
            provided, however, that to the extent that copies of Confidential
            Information are contained in the Receiving Party&apos;s backup data
            storage archives and are not readily accessible for deletion, the
            Receiving Party will not be obligated to delete such copies so long
            as it does not willfully attempt to access such Confidential
            Information and continues to comply with the confidentiality
            restrictions set forth herein.
          </p>
          <p style={subheadingStyles}>7.5 Authorized Disclosure.</p>
          <p style={bodyStyles}>
            If the Receiving Party is compelled by law, regulation, or a court of
            competent jurisdiction to disclose any of the Disclosing Party&apos;s
            Confidential Information, to the extent permitted by law, the
            Receiving Party will promptly notify the Disclosing Party so that it
            may seek a protective order or other appropriate remedy. The
            Receiving Party agrees to cooperate at the Disclosing Party&apos;s
            expense in seeking such order or other remedy. If disclosure is
            ultimately required, the Receiving Party will furnish only that
            portion of the Confidential Information that is legally required,
            exercise reasonable efforts to obtain assurance that it will receive
            confidential treatment and continue to treat such Confidential
            Information in accordance with its obligations under this Section.
            Each party may disclose the terms and conditions of this Agreement:
            (a) on a confidential basis to legal or financial advisors; (b)
            pursuant to reports, applications or similar filings submitted to
            regulatory agencies and governing authorities as required by
            applicable law; or (c) on a confidential basis in connection with
            any financing transaction or due diligence inquiry.
          </p>
          <p style={subheadingStyles}>7.6 Injunctive Relief.</p>
          <p style={bodyStyles}>
            Each party acknowledges that the Disclosing Party would be
            irreparably harmed if Receiving Party&apos;s obligations under this
            Agreement are not specifically enforced and that Disclosing Party
            would not have an adequate remedy at law in the event of an actual or
            threatened breach hereof. Accordingly, the Disclosing Party is
            entitled to specific performance, injunctive or other equitable relief
            as a remedy for any such breach or anticipated breach without the
            necessity of proving irreparable harm or posting bond and without
            waiving any other remedies at law or in equity which may be
            available in the event of any action to enforce such provisions.
          </p>
        </section>

        <section style={sectionStyles}>
          <h2 style={headingStyles}>8. Proprietary Rights</h2>
          <p style={subheadingStyles}>8.1 Our Ownership.</p>
          <p style={bodyStyles}>
            As between Customer and us, we own all right, title, and interest in
            and to AdviserGPT and the hardware and software used to provide
            AdviserGPT (including any customizations, modifications,
            adaptations, interfaces or derivative works no matter by whom made),
            the Documentation, our Confidential Information, and all intellectual
            property rights related thereto.
          </p>
          <p style={subheadingStyles}>8.2 Customer Content Ownership.</p>
          <p style={bodyStyles}>
            You may provide Input to AdviserGPT and receive Output from
            AdviserGPT. Input and Output together means &ldquo;Customer
            Content&rdquo;. In no event will you provide any Input with
            personally identifiable information (&ldquo;PII&rdquo;). If you
            upload or otherwise provide any PII to AdviserGPT we will not have any
            obligation or liability related to such PII including with respect
            to any security standards. As between you and us, you own your
            Customer Content. You may provide Input that is similar or identical
            to a third party user&apos;s Input or may receive Output that is
            similar or identical to Output provided to other third party users.
            Queries that are requested by other third party users and responses
            provided to other third party users are not your Customer Content.
          </p>
          <p style={subheadingStyles}>8.3 Business Contact Information.</p>
          <p style={bodyStyles}>
            Each of us may be given access to the names and contact information
            regarding a party&apos;s personnel to exercise their rights or fulfil
            their obligations under this Agreement (&ldquo;Business Contact
            Information&rdquo;). Each of us consents to the processing of its
            Business Contact Information and confirms that it has the authority
            to make such disclosure, that such disclosure will be made in
            compliance with applicable data protection laws.
          </p>
          <p style={subheadingStyles}>8.4 No Other Rights.</p>
          <p style={bodyStyles}>
            This Agreement does not grant any right or license to any
            intellectual property except as expressly provided in this Agreement,
            and no other right or license is to be implied by or inferred from any
            provision of this Agreement or by the conduct of the parties.
          </p>
        </section>

        <section style={sectionStyles}>
          <h2 style={headingStyles}>9. Warranty and Disclaimer</h2>
          <p style={subheadingStyles}>9.1 Representations and Warranties.</p>
          <p style={bodyStyles}>
            You warrant that you have the necessary rights in your Input to use
            it with AdviserGPT and that your use of AdviserGPT will comply with
            all applicable laws and regulations. Each party represents that, in
            connection with the AdviserGPT, it has not relied on any term or
            representation not contained in this Agreement.
          </p>
          <p style={subheadingStyles}>9.2 Disclaimer.</p>
          <p style={bodyStyles}>
            ADVISERGPT IS PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. ADVISERGPT
            MAKES NO REPRESENTATIONS OR WARRANTIES OF ANY KIND, IMPLIED OR
            EXPRESSED, WITH RESPECT TO ADVISERGPT INCLUDING WARRANTIES OF
            MERCHANTABILITY, TITLE, NON-INFRINGEMENT, OR FITNESS FOR A
            PARTICULAR PURPOSE, WHICH ARE DISCLAIMED. ADVISERGPT DOES NOT
            REPRESENT OR WARRANT THAT THE USE OF ADVISERGPT WILL BE UNINTERRUPTED
            OR ERROR-FREE.
          </p>
        </section>

        <section style={sectionStyles}>
          <h2 style={headingStyles}>
            10. Indemnification and Limitations of Liability
          </h2>
          <p style={subheadingStyles}>10.1</p>
          <p style={bodyStyles}>
            You will indemnify us against all losses, costs (including legal
            costs), expenses, demands or liability that we incur arising out of,
            or in connection with, a third party claim against us arising from
            your Customer Content, your use of AdviserGPT and/or any
            Non-AdviserGPT Products, except for losses arising from (a) breach of
            these terms by us, our employees, contractors or agents, or (b) any
            gross negligence, willful misconduct, fraud or material error that
            was solely the responsibility of us, our employees, contractors or
            agents.
          </p>
          <p style={subheadingStyles}>10.2</p>
          <p style={bodyStyles}>
            Other than for claims based on liability which by law cannot be
            limited, our fraud or willful misconduct, in no event will we be
            liable to you or any third party for any indirect, incidental,
            special, exemplary, punitive, or consequential damages, including
            loss of income, data, profits, revenue, or business interruption, or
            the cost of substitute services, damage to reputation, or other
            economic loss, arising out of or in connection with this Agreement,
            whether such liability arises from any claim based on contract,
            warranty, tort (including negligence), strict liability or otherwise,
            and whether or not we have been advised of the possibility of such
            loss or damage.
          </p>
          <p style={subheadingStyles}>10.3</p>
          <p style={bodyStyles}>
            Other than for claims based on liability which by law cannot be
            limited, our fraud or willful misconduct, in no event will our total
            liability to you or any third party for all claims in the aggregate
            (for damages or liability of any type) in connection with this
            Agreement exceed the amounts actually paid by you to us for use of
            AdviserGPT during the 6 months immediately preceding the event
            giving rise to the claim under this Agreement. Our liability to you
            for loss or corruption of your data will be limited to taking
            reasonable steps to try and recover that data from our available
            backups.
          </p>
        </section>

        <section style={sectionStyles}>
          <h2 style={headingStyles}>11. General Terms</h2>
          <p style={subheadingStyles}>11.1 Assignment.</p>
          <p style={bodyStyles}>
            This Agreement will be binding upon and be enforceable by and
            against the parties hereto and, to the extent permitted hereby,
            their respective successors and assigns. This Agreement is not
            transferable or assignable by either party, in whole or in part,
            without the prior written consent of the other party, which consent
            will not be unreasonably withheld. Provided, however, either party
            may, without the other party&apos;s consent, assign or transfer all
            or part of this Agreement to any Affiliate or to any successor-in-interest
            to all or substantially all the business or assets of the assigning
            party pertaining to the subject matter hereof, whether voluntarily or
            by merger, reorganization, asset sale, or otherwise. Any attempted
            assignment in violation of this Section will be null and void.
          </p>
          <p style={subheadingStyles}>11.2 Subcontracting.</p>
          <p style={bodyStyles}>
            AdviserGPT may use subcontractors and other third party providers in
            connection with the performance of its activities under this
            Agreement as it deems appropriate, provided that it remains
            responsible for the performance of any such subcontractors or third
            party providers.
          </p>
          <p style={subheadingStyles}>11.3 Large Language Models.</p>
          <p style={bodyStyles}>
            AdviserGPT will not train or improve any Large Language Models with
            Customer Content nor retain or log for human review Customer Content.
            &ldquo;Large Language Models&rdquo; means artificial intelligence
            technology made commercially available by leading vendors in the AI
            industry.
          </p>
          <p style={subheadingStyles}>11.4 Feedback.</p>
          <p style={bodyStyles}>
            To the extent that you provide us with any Feedback, we may freely
            use and incorporate any Feedback into our products and services. We
            may not utilize Feedback in a way that identifies, or could be used
            to identify, you, Authorized Users, Customer Content, or Customer
            Confidential Information. &ldquo;Feedback&rdquo; means any
            suggestions, enhancement requests, recommendations, corrections, or
            other feedback provided to us by you relating to AdviserGPT or any of
            our offerings. Feedback excludes Customer Content.
          </p>
          <p style={subheadingStyles}>11.5 Usage Data.</p>
          <p style={bodyStyles}>
            We may collect and use Usage Data to develop, improve, support, and
            operate AdviserGPT. We will not share Usage Data that includes your
            Confidential Information with a third party except (a) in accordance
            with Section 7 (Confidentiality) or (b) to the extent the Usage Data
            is aggregated and anonymized such that you or any Authorized User
            cannot be identified. &ldquo;Usage Data&rdquo; means information
            reflecting the access, interaction, or use of AdviserGPT by or on
            behalf of Customer including frequency, duration, volume, features,
            functions, visit, session, click through or click stream data, and
            statistical or other analysis, information, or data based on, or
            derivative works of, the foregoing. Other than as strictly required
            for billing purposes, Usage Data does not include Customer Content,
            Customer Confidential Information, or any information that
            identifies or reasonably would permit identification of any Customer
            Content or Customer Confidential Information.
          </p>
          <p style={subheadingStyles}>11.6 Governing Law.</p>
          <p style={bodyStyles}>
            This Agreement will be governed by the laws of the State of Delaware
            and the United States without regard to conflicts of laws provisions
            thereof, and without regard to the United Nations Convention on the
            International Sale of Goods.
          </p>
          <p style={subheadingStyles}>11.7 Dispute Resolution.</p>
          <p style={bodyStyles}>
            Subject to the Governing Law Section, any controversy or dispute
            arising out of or relating to this Agreement, or the breach of this
            Agreement, that is not promptly resolved by negotiation between the
            parties, will be resolved by binding arbitration conducted in the
            English language in accordance with the arbitration rules of the
            JAMS and United States Federal Arbitration law without reference to
            state arbitration law, except that you may assert claims in small
            claims court if your claims qualify. Judgment upon the award rendered
            by the arbitral tribunal may be entered in any court having
            jurisdiction thereof. For matters with a disputed amount in
            controversy of more than $250,000, the matter will be heard before a
            panel of three arbitrators subject to JAMS&apos; Comprehensive
            Arbitration Rules and Procedures, and for other matters before a
            single arbitrator subject to JAMS&apos; Streamlined Arbitration Rules
            and Procedures. The place of arbitration will be in San Francisco, CA
            unless the parties have agreed to another location within 15
            calendar days from the first referral of the dispute to JAMS; the
            parties agree that any arbitration hearings will, to the extent
            possible and consistent with the JAMS arbitration rules, be
            conducted remotely (i.e. Zoom, phone, and the like). The arbitral
            award will be final and binding. Each party retains the right to
            seek judicial assistance: (a) to compel arbitration; (b) to obtain
            interim measures of protection prior to or pending arbitration, (c)
            to seek injunctive relief in the courts of any jurisdiction as may be
            necessary and appropriate to protect the unauthorized disclosure of
            its proprietary or confidential information, and/or (d) to enforce
            any decision of the arbitrator, including the final award. The
            arbitration proceedings contemplated by this Section will be as
            confidential and private to the extent permitted by applicable law.
            To that end, the parties will not disclose the existence, content or
            results of any proceedings conducted in accordance with this
            Section, and materials submitted in connection with such proceedings
            will not be admissible in any other proceeding, provided, however,
            that this confidentiality provision will not prevent a petition to
            vacate or enforce an arbitral award, and will not bar disclosures
            required by law. You agree that all dispute proceedings (whether in
            court or by arbitration) will be only on an individual basis and not
            heard on a class, representative or consolidated basis.
          </p>
          <p style={subheadingStyles}>11.8 Notices.</p>
          <p style={bodyStyles}>
            All notices must be in writing (in English) and addressed to the
            parties via email: (a) for AdviserGPT, notice must be sent to{" "}
            <a href="mailto:contact@s2strategy.ai" style={linkStyles}>
              contact@s2strategy.ai
            </a>
            ; and (b) notices to Customer will be sent to the primary email
            address associated with Customer&apos;s Account. Notices will be
            deemed given upon sending the email. Either party may change its
            email address for notices under this Agreement by providing the other
            party written notice in accordance with this Section.
          </p>
          <p style={subheadingStyles}>11.9 Waiver.</p>
          <p style={bodyStyles}>
            No failure or delay by either party in exercising any right under
            this Agreement will constitute a waiver of that right. A waiver by a
            party of any provision of this Agreement in any one instance will
            not be deemed or construed to be a waiver of such provision for any
            similar instance in the future or of any subsequent breach.
          </p>
          <p style={subheadingStyles}>11.10 Severability.</p>
          <p style={bodyStyles}>
            If any provision of this Agreement is held by a court of competent
            jurisdiction to be contrary to law, the provision will be deemed
            null and void, and the remaining provisions of this Agreement will
            remain in effect. The parties agree to negotiate in good faith an
            enforceable substitute provision for any invalid or unenforceable
            provision that most nearly achieves the intent and economic effect
            of such provision.
          </p>
          <p style={subheadingStyles}>11.11 Force Majeure.</p>
          <p style={bodyStyles}>
            Neither party will be liable to the other for any delay or failure to
            perform any obligation under this Agreement if the delay or failure
            results from any cause beyond such party&apos;s reasonable control
            that could not have been prevented through the use of commercially
            reasonable safeguards, including acts of God, labor disputes, or
            other industrial disturbances, systemic electrical,
            telecommunications, or other utility failures, earthquake, storms or
            other elements of nature, blockages, embargoes, riots, public health
            emergencies (including pandemics and epidemics), acts or orders of
            government, acts of terrorism, or war.
          </p>
          <p style={subheadingStyles}>11.12 Independent Contractors.</p>
          <p style={bodyStyles}>
            The relationship between the parties created by this Agreement is
            that of independent contractors and neither party will have any
            authority to create any obligation on behalf of the other.
          </p>
          <p style={subheadingStyles}>11.13 Publicity.</p>
          <p style={bodyStyles}>
            Neither party will use the other&apos;s name, logo or likeness without
            prior written consent from the other party.
          </p>
          <p style={subheadingStyles}>11.14 Construction.</p>
          <p style={bodyStyles}>
            The headings of Sections of this Agreement are included solely for
            convenience of reference and are not to be used to interpret,
            construe, define, or describe the scope of any aspect of this
            Agreement. The terms &ldquo;include,&rdquo; &ldquo;including,&rdquo;
            &ldquo;includes&rdquo; and similar terms mean &ldquo;including,
            without limitation.&rdquo; Each party represents that it has had the
            opportunity to participate in the preparation of this Agreement, and
            any rule of construction to the effect that ambiguities are to be
            resolved against the drafting party will not be applied in
            connection with the construction or interpretation of this
            Agreement. Unless otherwise expressly stated to the contrary herein,
            all remedies are cumulative and the exercise of any express remedy
            by either party does not by itself waive such party&apos;s right to
            exercise its other rights and remedies available at law or in
            equity.
          </p>
          <p style={subheadingStyles}>11.15 Counterparts.</p>
          <p style={bodyStyles}>
            The Order referencing these Terms may be executed in any number of
            counterparts, each of which will be deemed an original, but all of
            which taken together will constitute one single agreement between the
            parties. The signed Order or counterparts may be exchanged
            electronically or stored electronically as a photocopy (such as in
            .pdf format). The parties agree that electronically exchanged or
            stored copies will be enforceable as original documents and consent to
            the use of electronic and/or digital signatures for the execution of
            the Order and further agree the use of electronic and/or digital
            signatures will be binding, enforceable and admissible into evidence
            in any dispute regarding this Agreement.
          </p>
          <p style={subheadingStyles}>11.16 Order of Precedence.</p>
          <p style={bodyStyles}>
            To the extent there is a conflict between the Terms and the Order
            and the other referenced documents, then the following precedence
            will apply: (1) the Order; (2) the Terms; and (3) the other
            referenced documents.
          </p>
          <p style={subheadingStyles}>11.17 Entire Agreement.</p>
          <p style={bodyStyles}>
            This Agreement (together with the Order, policies and other
            documents incorporated by reference herein or therein) contains the
            entire understanding of the parties with respect to the subject
            matter hereof and supersedes all previous and contemporaneous
            agreements and understandings, whether oral or written, between the
            parties with respect to the subject matter hereof. Except as
            otherwise provided in this Agreement, all amendments and
            modifications to, or waivers of any provisions of, this Agreement
            must be in writing, signed by the duly authorized representatives of
            both parties.
          </p>
        </section>
      </article>
      <Footer />
    </main>
  );
}
