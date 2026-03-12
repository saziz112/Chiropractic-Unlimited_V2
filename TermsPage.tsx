import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { BUSINESS_INFO } from './constants';
import { RevealOnScroll } from './components/RevealOnScroll';

export const TermsPage: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Terms of Service | Chiropractic Unlimited</title>
                <meta name="description" content="Terms of Service for Chiropractic Unlimited in Valley, AL. Understand the terms governing your use of our website and chiropractic services." />
                <link rel="canonical" href="https://chirounlimitedwellness.com/terms" />
                <meta name="robots" content="noindex, follow" />
            </Helmet>

            {/* Hero Banner */}
            <section className="relative bg-brand-primary pt-36 pb-16 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-primary via-brand-primary/95 to-brand-secondary/80"></div>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <RevealOnScroll>
                        <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                            Terms of Service
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
                                <h2 className="text-2xl font-display font-bold text-brand-primary mb-4">Agreement to Terms</h2>
                                <p>
                                    By accessing or using the {BUSINESS_INFO.name} website (chirounlimitedwellness.com) and our chiropractic services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our website or services.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-display font-bold text-brand-primary mb-4">Services</h2>
                                <p>
                                    {BUSINESS_INFO.name} provides chiropractic care, spinal correction, integrated wellness services, and related healthcare services at our clinic located at {BUSINESS_INFO.address}. Our services are provided by licensed healthcare professionals, including {BUSINESS_INFO.doctor}.
                                </p>
                                <p>
                                    Our website provides general information about our practice, services, and health conditions we treat. This information is for educational purposes only and does not constitute medical advice.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-display font-bold text-brand-primary mb-4">Medical Disclaimer</h2>
                                <p>
                                    The content on this website is provided for general informational purposes only and is not intended as a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of a qualified healthcare provider with any questions you may have regarding a medical condition.
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Never disregard professional medical advice or delay seeking it because of something you have read on this website</li>
                                    <li>If you think you may have a medical emergency, call your doctor or 911 immediately</li>
                                    <li>Individual results from chiropractic treatment may vary</li>
                                    <li>Testimonials on this website reflect the personal experiences of individual patients and are not guarantees of results</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-display font-bold text-brand-primary mb-4">Appointments and Cancellations</h2>
                                <p>
                                    Appointments can be scheduled through our online booking system (powered by Cal.com) or by calling our office at {BUSINESS_INFO.phone}.
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>We request at least 24 hours' notice for appointment cancellations</li>
                                    <li>Repeated no-shows or late cancellations may result in scheduling restrictions</li>
                                    <li>We make every effort to see patients on time, but delays may occasionally occur</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-display font-bold text-brand-primary mb-4">Payment and Insurance</h2>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Payment is due at the time of service unless other arrangements have been made</li>
                                    <li>We accept various forms of payment including cash, credit cards, and select insurance plans</li>
                                    <li>It is your responsibility to verify your insurance coverage and benefits</li>
                                    <li>Any balance not covered by insurance is the patient's responsibility</li>
                                    <li>Special pricing offers (such as new patient specials) cannot be combined with insurance claims</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-display font-bold text-brand-primary mb-4">Informed Consent</h2>
                                <p>
                                    Before receiving chiropractic care, you will be asked to provide informed consent. This includes understanding:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>The nature of the proposed treatment</li>
                                    <li>Potential risks and benefits</li>
                                    <li>Alternative treatment options</li>
                                    <li>Your right to refuse or discontinue treatment at any time</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-display font-bold text-brand-primary mb-4">Website Use</h2>
                                <p>When using our website, you agree to:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Use the website only for lawful purposes</li>
                                    <li>Not attempt to gain unauthorized access to any part of the website</li>
                                    <li>Not use the website to transmit harmful or malicious content</li>
                                    <li>Not reproduce, duplicate, or copy any content without our written permission</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-display font-bold text-brand-primary mb-4">Intellectual Property</h2>
                                <p>
                                    All content on this website, including text, images, logos, graphics, and design elements, is the property of {BUSINESS_INFO.name} and is protected by applicable intellectual property laws. You may not use, reproduce, or distribute any content from this website without our prior written consent.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-display font-bold text-brand-primary mb-4">Limitation of Liability</h2>
                                <p>
                                    To the fullest extent permitted by law, {BUSINESS_INFO.name} shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our website or services. This includes, but is not limited to, damages for loss of profits, data, or other intangible losses.
                                </p>
                                <p>
                                    Our total liability for any claim arising from or related to these terms shall not exceed the amount you paid for the specific service giving rise to the claim.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-display font-bold text-brand-primary mb-4">External Links</h2>
                                <p>
                                    Our website may contain links to external websites that are not operated by us. We have no control over the content or practices of these sites and are not responsible for their privacy policies or terms of service. We encourage you to review the terms and privacy policy of any external site you visit.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-display font-bold text-brand-primary mb-4">Governing Law</h2>
                                <p>
                                    These Terms of Service shall be governed by and construed in accordance with the laws of the State of Alabama, without regard to its conflict of law provisions. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts located in Chambers County, Alabama.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-display font-bold text-brand-primary mb-4">Changes to These Terms</h2>
                                <p>
                                    We reserve the right to update or modify these Terms of Service at any time. Changes will be effective immediately upon posting to this page. Your continued use of our website or services after any changes constitutes acceptance of the updated terms.
                                </p>
                            </div>

                            <div className="bg-brand-bg rounded-xl p-8 border border-brand-primary/10">
                                <h2 className="text-2xl font-display font-bold text-brand-primary mb-4">Contact Us</h2>
                                <p>If you have questions about these Terms of Service, please contact us:</p>
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
