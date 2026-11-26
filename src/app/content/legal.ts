// Privacy Policy and Terms of Use, VERBATIM from the owner's documents
// (Privacy_Policy_Getting_Out_v4_RF_Jackson.docx, Terms_of_Use_Getting_Out_v4_RF_Jackson.docx,
// received 2026-11-26). Only markup was added: "## " headings, "### " subheadings,
// "- " list items. Never paraphrase; to update, replace the whole body.

export type LegalDoc = {
  id: "terms" | "privacy";
  title: string;
  body: string | null;
};

const privacy = `
Developer: Evaristo Verastegui

Contact: evaristo@verastegui.click

## 1. Introduction

This Privacy Policy explains how Evaristo Verastegui (“Developer,” “we,” “us,” or “our”) processes personal information in connection with the mobile application (the “Application,” “App,” or “Service”).

The Application provides communication, informational, contact management, and AI-assisted writing functionality.

We recognize the importance of privacy and aim to process information in accordance with applicable data protection requirements.

## 2. Information We Process

Depending on the features you use, the Application may process the following categories of information.

### 2.1. User-Provided Content

- Text entered into the Application;
- Messages and conversation content;
- Contact information entered or selected by users;
- Recipient names and identifiers;
- Search queries relating to correctional facilities and inmates;
- Photographs selected for supported AI features;
- Text extracted from supported documents;
- AI prompts and conversation history;
- Contact requests and related information.

Users should only provide information they are authorized to share.

### 2.2. Device and Technical Information

The Application and its supporting services may process technical information necessary for service operation, including:

- Application-specific device identifiers (UUID);
- Identifier for Vendor (IDFV);
- Application and operating system information;
- Purchase and subscription-related identifiers;
- Apple advertising attribution tokens;
- Technical network information required to establish and maintain service connections.

The Application does not request access to the Identifier for Advertisers (IDFA) through Apple's App Tracking Transparency framework.

### 2.3. Purchase and Subscription Information

When users purchase subscriptions or other paid functionality, information relating to the purchase, subscription status, transaction identifiers, and entitlement status may be processed.

Payments are handled through the Apple App Store.

We do not directly collect users' payment card numbers or banking credentials through the Application.

### 2.4. Support Communications

If you voluntarily contact us by email, we may process your email address, the contents of your communication, and other information you choose to provide to address your request.

The Application does not require email registration or the creation of a conventional user account.

## 3. How We Use Information

Information may be processed for the following purposes:

- Providing and maintaining Application functionality;
- Supporting communication and contact management;
- Processing search requests;
- Facilitating available messaging functionality;
- Providing AI-assisted writing and personalization;
- Managing subscriptions and purchase entitlements;
- Providing technical and customer support;
- Maintaining service functionality and security;
- Measuring purchase attribution and subscription-related performance;
- Complying with applicable legal obligations.

We aim to limit processing to information reasonably necessary for the relevant purpose.

## 4. Artificial Intelligence and Third-Party AI Processing

The Application integrates artificial intelligence services provided by OpenAI to support writing assistance, message personalization, and related functionality.

### 4.1. Information Transmitted to AI Services

Depending on the selected functionality, information transmitted to OpenAI may include:

- Text prompts and instructions;
- Relevant AI conversation history;
- User-selected photographs;
- Text extracted from supported PDF, TXT, and RTF files;
- Recipient names;
- Relevant recent messages from conversations;
- Other contextual information intentionally provided through AI features.

The Application does not transmit video content to AI services through its currently described functionality.

### 4.2. Purpose of AI Processing

Information is transmitted to generate responses, suggested messages, personalized writing assistance, and other requested AI outputs.

### 4.3. User Consent

The Application requests user consent before transmitting personal information to third-party AI services.

Users who do not wish to authorize such processing should refrain from using features that require third-party AI processing.

Where applicable, consent may be withdrawn by discontinuing the relevant functionality and contacting us regarding further processing.

Withdrawal of consent does not affect processing lawfully performed before withdrawal.

### 4.4. AI Data Storage and Retention

AI conversation history and associated attachments are maintained locally by the Application.

However, information submitted for AI processing is transmitted to OpenAI and may be temporarily processed or retained within the provider's infrastructure.

Third-party retention depends on the applicable service configuration, provider policies, security requirements, and legal obligations.

Local storage of AI conversations does not mean that submitted AI content remains exclusively on the user's device.

Further information regarding OpenAI's data handling practices is available at:

https://openai.com/privacy/

https://developers.openai.com/api/docs/guides/your-data

## 5. Communication Services and Backend Infrastructure

The Application uses backend infrastructure to support communication-related features and associated service operations.

Communication data may be transmitted to and stored within backend infrastructure associated with the Service, including Secure Cloud services.

Relevant information may include:

- Device-specific identifiers;
- Contact and recipient information;
- Message content;
- Contact requests;
- Conversation-related information;
- Message status information.

Cloud infrastructure, including Google Cloud services, supports certain technical and AI-related operations.

Communication services may be affected by applicable legal requirements, recipient availability, correctional institution procedures, and service restrictions.

Users should be aware that communications involving correctional facilities may be subject to lawful inspection, monitoring, disclosure, or retention.

The Application does not guarantee that communications involving correctional institutions are confidential or legally privileged.

## 6. Correctional Facility and Inmate Information

The Application may process names, identifiers, search parameters, and available information relating to correctional facilities and individuals within those facilities.

Such information is processed in connection with requested search, contact, and communication functionality.

Users must not use this information for harassment, unauthorized surveillance, unlawful profiling, discrimination, or other prohibited activities.

The availability of information does not establish unrestricted permission to collect, reproduce, redistribute, or otherwise use it for unrelated purposes.

## 7. Third-Party Service Providers

The Application relies on selected third-party technologies and service providers.

### 7.1. Apple

Apple provides Application distribution, payment processing, subscription management infrastructure, and advertising attribution services.

Privacy information:

https://www.apple.com/legal/privacy/

### 7.2. Apphud

Apphud supports in-app purchase management, subscription validation, entitlement management, and related attribution functionality.

Information processed through Apphud may include device identifiers, subscription information, purchase-related events, transaction identifiers, and attribution information.

Privacy information:

https://apphud.com/privacy

### 7.3. OpenAI

OpenAI provides AI processing capabilities used by the Application's writing assistance and related features.

Information submitted to AI features may be transmitted to OpenAI as described in Section 4.

Privacy information:

https://openai.com/privacy/

### 7.4. Google Cloud

Google Cloud infrastructure, including Cloud Run, supports certain backend and AI-related technical operations.

Privacy information:

https://cloud.google.com/terms/cloud-privacy-notice

### 7.5. Secure Cloud

Secure Cloud backend infrastructure supports communication-related functionality and server-side message storage.

Information processed through this infrastructure depends on the communication features used.

## 8. Analytics and Attribution

The Application does not currently integrate a separate general-purpose analytics SDK.

Subscription-related events, purchase information, and advertising attribution information may nevertheless be processed through Apphud and applicable Apple services.

The Application does not request App Tracking Transparency permission or access the IDFA.

Advertising attribution functionality should not be interpreted as a guarantee that no technical or attribution-related information is processed by third-party services.

## 9. Device Permissions

The Application may request permission to display notifications.

Photographs and supported documents may be selected through system-provided selection interfaces, without requiring unrestricted access to the user's photo library or file storage.

The Application does not currently request access to:

- Camera;
- Microphone;
- Precise or approximate device location;
- Advertising identifier through App Tracking Transparency;
- Unrestricted photo library access.

Selected content may be processed as described in this Privacy Policy when users choose to use the associated functionality.

## 10. Notifications

The Application supports local notifications and reminders.

Notification preferences may be managed through the device's system settings.

The Application does not currently use remote push notifications.

## 11. Data Storage and Retention

Different categories of information may be stored locally or within supporting service infrastructure.

AI conversations and associated attachments are maintained locally by the Application, subject to third-party processing when AI functionality is used.

Messages associated with communication functionality may be stored within Secure Cloud backend infrastructure.

Purchase-related information may be maintained by Apple and Apphud in accordance with their applicable operational and legal requirements.

Retention periods may vary depending on the information involved, service requirements, applicable legal obligations, security considerations, and third-party retention policies.

Deleting the Application may remove locally maintained Application data, but does not necessarily remove information previously transmitted to backend infrastructure, third-party providers, or recipients.

Users may contact us for information concerning the retention or deletion of personal information associated with their use of the Service.

## 12. Information Sharing and Disclosure

Information may be shared where necessary to:

- Provide requested Application functionality;
- Process communications and AI requests;
- Manage subscriptions and purchase entitlements;
- Maintain supporting technical infrastructure;
- Comply with applicable laws or lawful requests;
- Address security incidents, misuse, or legal claims.

Information may also be disclosed to intended communication recipients as part of messaging functionality.

Where personal information is shared with service providers, applicable data protection requirements remain relevant to such processing.

## 13. Data Security

We recognize the importance of protecting personal information against unauthorized access, disclosure, alteration, and loss.

No method of electronic transmission or storage can be guaranteed to be completely secure.

Users should avoid submitting unnecessary sensitive information, confidential documents, account credentials, or information they are not authorized to disclose.

Suspected security or privacy issues may be reported through our support email.

## 14. International Data Processing

Information may be processed in jurisdictions other than the user's country of residence due to the use of cloud infrastructure and third-party service providers.

Data protection requirements may differ between jurisdictions.

Where required by applicable law, international transfers of personal information must be subject to appropriate legal safeguards.

## 15. Legal Bases for Processing

Where applicable data protection law requires a legal basis for processing, the relevant basis may include:

- Providing requested services and fulfilling contractual obligations;
- User consent for processing that requires consent;
- Legitimate interests relating to service operation, security, and support, where legally permitted;
- Compliance with applicable legal obligations.

The applicable legal basis depends on the nature and purpose of the processing.

Personal information subject to additional statutory restrictions must be processed in accordance with those requirements.

## 16. Privacy Rights and Choices

Depending on the user's jurisdiction and applicable law, users may have rights to:

- Request access to personal information;
- Request correction of inaccurate information;
- Request deletion of personal information;
- Request restriction of certain processing;
- Object to certain processing;
- Request data portability;
- Withdraw consent;
- Lodge a complaint with an appropriate data protection authority.

To exercise applicable privacy rights, please contact:

evaristo@verastegui.click

We may request information reasonably necessary to verify a request and identify the relevant data.

Requests are subject to applicable legal requirements and permitted exceptions.

## 17. Data Deletion

The Application does not require conventional account registration.

Users may request assistance with deleting personal information associated with their use of the Application by contacting our support email.

Deletion requests may require identification of the relevant device-specific or service-related information.

Certain information may need to be retained where required by law, necessary for legitimate security purposes, or subject to applicable third-party retention requirements.

Uninstalling the Application does not automatically delete server-side communication records or information retained by third-party service providers.

## 18. Children's Privacy

The Application is intended for users aged 16 years or older.

Users below the age of legal majority must obtain parental or guardian permission where required by applicable law.

The Application is not directed at children under the age of 13.

If you believe that personal information relating to a child has been processed in violation of applicable requirements, please contact us so that the matter can be addressed.

## 19. Independent Operation and Trademark Rights

The Application is independently developed and operated by Evaristo Verastegui.

The Developer represents that a Trademark Use and Application Distribution Agreement has been signed with Global Tel*Link Corporation (d/b/a ViaPath Technologies).

Trademark authorization does not, by itself, establish a data-sharing arrangement or authorization to access third-party personal information.

Personal information processed through the Application is governed by this Privacy Policy and applicable legal requirements.

## 20. Changes to This Privacy Policy

We may update this Privacy Policy to reflect changes in Application functionality, processing practices, third-party services, or legal requirements.

Where required by applicable law, material changes will be communicated to users and additional consent will be requested when necessary.

## 21. Contact Information

For privacy-related questions, personal information requests, deletion requests, or concerns regarding this Privacy Policy, please contact:

Developer: Evaristo Verastegui

Email: evaristo@verastegui.click
`;

const terms = `
Developer: Evaristo Verastegui

Contact: evaristo@verastegui.click

## 1. Acceptance of Terms

These Terms of Use (“Terms”) govern your access to and use of the mobile application (the “Application,” “App,” or “Service”), provided by Evaristo Verastegui (“Developer,” “we,” “us,” or “our”).

By downloading, accessing, or using the Application, you agree to these Terms and the accompanying Privacy Policy. If you do not agree to these Terms, you must discontinue use of the Application.

## 2. Description of the Service

The Application provides communication, contact management, informational, and AI-assisted writing tools designed to help users maintain meaningful connections with individuals in correctional facilities.

Available functionality may include:

- Correctional facility and inmate search tools;
- Contact requests and contact management;
- Messaging functionality and conversation organization;
- Message status information;
- Favorite contacts;
- AI-assisted writing and message personalization;
- Suggested messages and quick replies.

Certain functionality depends on backend infrastructure, network connectivity, available information, and applicable communication restrictions.

Features may be modified, expanded, restricted, or discontinued as the Service develops.

## 3. Eligibility

The Application is intended for individuals aged 16 years or older.

Users who have not reached the age of legal majority in their jurisdiction must obtain permission from a parent or legal guardian where required by applicable law.

By using the Application, you confirm that you satisfy the applicable eligibility requirements.

## 4. License to Use the Application

Subject to compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, and revocable license to access and use the Application for personal, lawful purposes.

You may not reproduce, redistribute, reverse engineer, modify, resell, or commercially exploit the Application except where expressly permitted by applicable law or written authorization.

## 5. Trademark Authorization and Intellectual Property Rights

The Developer acknowledges the intellectual property rights associated with the GTL and GettingOut names and trademarks.

The Developer represents that a Trademark Use and Application Distribution Agreement has been signed with Global Tel*Link Corporation (d/b/a ViaPath Technologies).

Any use of third-party trademarks is limited to the scope of the applicable authorization.

All third-party trademarks, trade names, and associated intellectual property remain the property of their respective owners.

The Application is independently developed and operated by Evaristo Verastegui. It does not use the original GettingOut logo.

Trademark authorization does not, by itself, establish an official service integration, partnership, agency relationship, or endorsement beyond the rights expressly granted under the applicable agreement.

## 6. Independent Service

The Application operates as an independent service.

It is not a government agency, correctional authority, or official representative of any correctional institution.

Nothing in these Terms should be interpreted as establishing an affiliation with a correctional facility or granting access to restricted institutional systems.

## 7. Correctional Facility and Inmate Information

The Application provides tools for accessing and organizing available information relating to correctional facilities and individuals within those facilities.

Information may be subject to availability, updates, administrative restrictions, and technical limitations.

We do not guarantee that search results, inmate records, facility information, contact availability, or related information will always be complete, accurate, or current.

Users should independently verify important information through appropriate official sources.

## 8. Communication Services

Communication-related functionality may rely on server infrastructure, application programming interfaces (APIs), network availability, and applicable service restrictions.

The availability of messaging features and message delivery may depend on recipient eligibility, facility procedures, technical compatibility, and other circumstances.

A message status displayed within the Application does not necessarily constitute independent confirmation that a recipient has received, reviewed, or responded to a message.

We do not guarantee uninterrupted communication, successful delivery, response times, or recipient availability.

Users are responsible for complying with applicable laws and correctional facility communication requirements.

Communications involving correctional facilities may be subject to lawful monitoring, inspection, restriction, or retention. Users should not assume that such communications are legally privileged or confidential.

## 9. User Content and Acceptable Use

Users may create messages, enter text, upload supported files or images for AI-assisted processing, and otherwise provide content through available Application features.

You retain any ownership rights you lawfully hold in your content.

You grant us a limited permission to process your content as necessary to provide the requested functionality and operate the Service in accordance with our Privacy Policy.

You agree not to use the Application to:

- Engage in unlawful, fraudulent, abusive, or deceptive activities;
- Harass, threaten, exploit, or intimidate others;
- Distribute unlawful or harmful content;
- Infringe intellectual property or privacy rights;
- Impersonate another person or organization;
- Circumvent correctional facility restrictions;
- Obtain unauthorized access to systems or personal information;
- Interfere with the security or operation of the Service;
- Facilitate prohibited transactions or criminal activities.

Users remain responsible for the content they submit and the consequences of their communications.

Concerns regarding inappropriate content, misuse, or unlawful activity may be directed to our support email.

## 10. Artificial Intelligence Features

The Application includes AI-assisted functionality powered by third-party artificial intelligence technologies, including services provided by OpenAI.

AI features may assist users with drafting, improving, personalizing, and suggesting messages.

When you choose to use AI functionality and provide the required consent, relevant inputs may be transmitted to the AI service provider for processing.

AI-generated content may contain inaccuracies, inappropriate suggestions, incomplete information, or unintended interpretations.

Users must independently review AI-generated content before relying on it or sending it to another person.

AI-generated responses are provided for general assistance and do not constitute legal, medical, psychological, financial, or other professional advice.

You are responsible for ensuring that information submitted to AI features may lawfully be shared and processed.

## 11. Subscriptions and In-App Purchases

The Application may offer paid subscriptions, in-app purchases, promotional offers, or other paid functionality.

Available purchase options, prices, billing periods, and applicable promotional conditions are displayed within the Application or through the Apple App Store before purchase.

Payments are processed through Apple's payment infrastructure.

Where an automatically renewing subscription is offered, it renews according to the billing period selected at purchase unless canceled in accordance with Apple's subscription management requirements.

Users can manage or cancel subscriptions through their Apple Account settings.

Free trials or introductory offers, if available, are subject to the conditions displayed at the time of purchase. Such offers may convert into paid subscriptions unless canceled before the applicable renewal deadline.

Deleting the Application does not automatically cancel an active subscription.

Refund requests are generally handled by Apple in accordance with its applicable policies and legal requirements.

Nothing in these Terms limits mandatory consumer protection rights.

## 12. Third-Party Services

Certain Application features rely on third-party technologies and infrastructure, including Apple, Apphud, OpenAI, cloud hosting services, and communication-related backend services.

Third-party services may be governed by their respective terms, privacy policies, and operational limitations.

The availability of functionality may be affected by changes, restrictions, or interruptions affecting these services.

## 13. Notifications

The Application may provide local notifications and reminders related to available features.

Users may manage notification permissions through their device settings.

Notifications are provided for convenience and should not be relied upon for emergency, legal, or time-sensitive communications.

## 14. Privacy

Our processing of personal information is described in the Privacy Policy accompanying the Application.

By using the Service, you acknowledge that certain information may be processed to provide communication, AI-assisted functionality, purchase management, and other Application features.

Where consent is legally required, the relevant processing is subject to that consent.

## 15. Service Availability and Changes

We may update, maintain, modify, or discontinue features of the Application.

Temporary interruptions may occur due to maintenance, network failures, third-party service limitations, regulatory requirements, or other circumstances.

We do not guarantee continuous or error-free operation.

Any material changes affecting paid services remain subject to applicable consumer protection requirements.

## 16. Disclaimer of Warranties

To the maximum extent permitted by applicable law, the Application is provided on an “as is” and “as available” basis.

We make no guarantee regarding the accuracy of third-party information, availability of communication services, reliability of AI-generated content, or suitability of the Application for any particular purpose.

Nothing in these Terms excludes warranties or guarantees that cannot lawfully be excluded.

## 17. Limitation of Liability

To the extent permitted by applicable law, the Developer shall not be liable for indirect, incidental, special, or consequential losses resulting from the use of, or inability to use, the Application.

This includes losses arising from communication delays, inaccurate information, third-party service interruptions, or reliance on AI-generated content.

Nothing in these Terms excludes or limits liability where such exclusion or limitation is prohibited by applicable law.

## 18. Suspension and Termination

We may restrict or discontinue access to the Service where reasonably necessary to address unlawful activity, security risks, violations of these Terms, or applicable legal obligations.

Users may discontinue use of the Application at any time.

Active subscriptions must be managed separately through Apple Account settings.

## 19. Apple App Store Terms

The Application is distributed through the Apple App Store and is subject to applicable Apple usage rules and licensing requirements.

These Terms are between the user and the Developer, not Apple.

The Developer is responsible for the Application and related support obligations, except where applicable law or Apple's terms provide otherwise.

Where applicable, Apple and its subsidiaries are third-party beneficiaries of the relevant application license terms.

## 20. Applicable Law

These Terms shall be interpreted in accordance with applicable law, including mandatory consumer protection provisions in the user's jurisdiction.

Nothing in these Terms deprives users of rights or remedies that cannot lawfully be waived.

## 21. Changes to These Terms

We may update these Terms to reflect changes in the Application, operational practices, or legal requirements.

Where required, users will be notified of material changes or asked to provide renewed acceptance.

## 22. Contact Information

For questions regarding these Terms, intellectual property matters, support requests, or concerns related to the Application, please contact:

Developer: Evaristo Verastegui

Email: evaristo@verastegui.click
`;

export const docs: LegalDoc[] = [
  { id: "privacy", title: "Privacy Policy", body: privacy.trim() },
  { id: "terms", title: "Terms of Use", body: terms.trim() },
];
