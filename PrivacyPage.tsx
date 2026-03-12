import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { BUSINESS_INFO } from './constants';
import { RevealOnScroll } from './components/RevealOnScroll';

export const PrivacyPage: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Privacy Policy | Chiropractic Unlimited</title>
                <meta name="description" content="Privacy Policy for Chiropractic Unlimited in Valley, AL. Learn how we collect, use, and protect your personal and health information." />
                <link rel="canonical" href="https://chirounlimitedwellness.com/privacy" />
                <meta name="robots" content="noindex, follow" />
            </Helmet>

            {/* Hero Banner */}
            <section className="relative bg-brand-primary pt-36 pb-16 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-primary via-brand-primary/95 to-brand-secondary/80"></div>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <RevealOnScroll>
                        <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                            Privacy Policy
                        </h1>
                        <p className="text-white/70 text-lg">
                            Last updated: March 11, 2026
                        </p>
                    </RevealOnScroll>
                </div>
            </section>

            {/* Content */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <RevealOnScroll>
                        <div className="prose prose-lg max-w-none text-brand-text/80 leading-relaxed space-y-8">

                            <div>
                                <h2 className="text-2xl font-display font-bold text-brand-primary mb-4">Introduction</h2>
                                <p>
                                    {BUSINESS_INFO.name} ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website at chirounlimitedwellness.com, visit our clinic, or use our services.
                                </p>
                                <p>
                                    Please read this Privacy Policy carefully. By using our website or services, you agree to the collection and use of information in accordance with this policy.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-display font-bold text-brand-primary mb-4">Information We Collect</h2>

                                <h3 className="text-xl font-display font-semibold text-brand-primary mb-3">Personal Information</h3>
                                <p>We may collect the following personal information when you interact with us:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Name, date of birth, and contact information (phone number, email address, mailing address)</li>
                                    <li>Insurance and billing information</li>
                                    <li>Health and medical history, including symptoms, diagnoses, and treatment records</li>
                                    <li>Emergency contact information</li>
                                    <li>Appointment scheduling information</li>
                                </ul>

                                <h3 className="text-xl font-display font-semibold text-brand-primary mb-3 mt-6">Website Usage Information</h3>
                                <p>When you visit our website, we may automatically collect:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Browser type and version</li>
                                    <li>Operating system</li>
                                    <li>Pages visited and time spent on each page</li>
                                    <li>Referring website or source</li>
                                    <li>IP address (anonymized where possible)</li>
                                    <li>Device type and screen resolution</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-display font-bold text-brand-primary mb-4">How We Use Your Information</h2>
                                <p>We use the information we collect to:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Provide, maintain, and improve our chiropractic and wellness services</li>
                                    <li>Schedule and manage your appointments</li>
                                    <li>Process payments and insurance claims</li>
                                    <li>Communicate with you about your care, appointments, and treatment plans</li>
                                    <li>Send appointment reminders and follow-up communications</li>
                                    <li>Comply with legal and regulatory requirements</li>
                                    <li>Improve our website and user experience</li>
                                    <li>Respond to your inquiries and requests</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-display font-bold text-brand-primary mb-4">HIPAA Compliance</h2>
                                <p>
                                    As a healthcare provider, we are required to comply with the Health Insurance Portability and Accountability Act (HIPAA). Your Protected Health Information (PHI) is handled in accordance with HIPAA regulations, including:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>We maintain appropriate physical, electronic, and procedural safeguards to protect your PHI</li>
                                    <li>We limit access to your PHI to authorized personnel only</li>
                                    <li>We will not use or disclose your PHI without your authorization except as permitted by HIPAA</li>
                                    <li>You have the right to request a copy of your medical records</li>
                                    <li>You have the right to request corrections to your medical records</li>
                                    <li>You have the right to receive a Notice of Privacy Practices</li>
                                </ul>
                                <p className="mt-4">
                                    A full Notice of Privacy Practices is available at our clinic upon request.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-display font-bold text-brand-primary mb-4">Cookies and Tracking Technologies</h2>
                                <p>Our website uses the following technologies:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong>Vercel Analytics:</strong> We use Vercel Analytics to understand how visitors use our website. This collects anonymous usage data to help us improve our site.</li>
                                    <li><strong>Vercel Speed Insights:</strong> We use Speed Insights to monitor website performance and loading times.</li>
                                    <li><strong>Cal.com:</strong> Our appointment booking system is powered by Cal.com. When you book an appointment, Cal.com's privacy policy also applies.</li>
                                </ul>
                                <p className="mt-4">
                                    We do not use cookies for advertising or marketing purposes. We do not sell your personal data to third parties.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-display font-bold text-brand-primary mb-4">Third-Party Services</h2>
                                <p>We may use the following third-party services that have their own privacy policies:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong>Cal.com</strong> for appointment scheduling</li>
                                    <li><strong>Vercel</strong> for website hosting and analytics</li>
                                    <li><strong>Google Fonts</strong> for typography (no tracking cookies)</li>
                                </ul>
                                <p className="mt-4">
                                    We are not responsible for the privacy practices of these third-party services. We encourage you to review their respective privacy policies.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-display font-bold text-brand-primary mb-4">Data Security</h2>
                                <p>
                                    We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-display font-bold text-brand-primary mb-4">Your Rights</h2>
                                <p>You have the right to:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Access your personal information and medical records</li>
                                    <li>Request correction of inaccurate information</li>
                                    <li>Request deletion of your personal data (subject to legal retention requirements)</li>
                                    <li>Opt out of non-essential communications</li>
                                    <li>Request a copy of this Privacy Policy</li>
                                    <li>File a complaint with the U.S. Department of Health and Human Services if you believe your privacy rights have been violated</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-display font-bold text-brand-primary mb-4">Children's Privacy</h2>
                                <p>
                                    We provide chiropractic care for patients of all ages, including children. For patients under 18 years of age, we require parental or guardian consent before collecting any personal or health information.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-display font-bold text-brand-primary mb-4">Changes to This Policy</h2>
                                <p>
                                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. Your continued use of our website or services after any changes constitutes acceptance of the updated policy.
                                </p>
                            </div>

                            <div className="bg-brand-bg rounded-xl p-8 border border-brand-primary/10">
                                <h2 className="text-2xl font-display font-bold text-brand-primary mb-4">Contact Us</h2>
                                <p>If you have questions about this Privacy Policy or your personal information, please contact us:</p>
                                <div className="mt-4 space-y-2">
                                    <p><strong>{BUSINESS_INFO.name}</strong></p>
                                    <p>{BUSINESS_INFO.address}</p>
                                    <p>Phone: <a href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, '')}`} className="text-brand-primary font-semibold hover:text-brand-secondary transition-colors">{BUSINESS_INFO.phone}</a></p>
                                    <p>Email: <a href={`mailto:${BUSINESS_INFO.email}`} className="text-brand-primary font-semibold hover:text-brand-secondary transition-colors">{BUSINESS_INFO.email}</a></p>
                                </div>
                            </div>

                        </div>
                    </RevealOnScroll>

                    <div className="mt-12 text-center">
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 text-brand-primary font-semibold hover:text-brand-secondary transition-colors"
                        >
                            &larr; Back to Home
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};
