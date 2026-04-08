import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { BUSINESS_INFO } from './constants';
import { RevealOnScroll } from './components/RevealOnScroll';
import { StructuredData } from './components/StructuredData';
import { CheckCircle2, Phone, CalendarCheck, ArrowRight, DollarSign, Clock, Shield, Heart } from 'lucide-react';

export const PricingPage: React.FC = () => {
    const schemas = [
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://chirounlimitedwellness.com"
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Pricing & Affordability",
                    "item": "https://chirounlimitedwellness.com/pricing"
                }
            ]
        },
        {
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            "name": "Chiropractor Cost Without Insurance in Valley, AL | Chiropractic Unlimited",
            "description": "Transparent chiropractic pricing in Valley, AL. $20 new patient special. No insurance needed — affordable cash-based care with Dr. Jason Bang DC FNP.",
            "url": "https://chirounlimitedwellness.com/pricing",
            "lastReviewed": "2026-04-07",
            "reviewedBy": {
                "@type": "Person",
                "name": "Dr. Jason Bang",
                "jobTitle": "Doctor of Chiropractic & Family Nurse Practitioner",
                "url": "https://chirounlimitedwellness.com/about"
            }
        },
        {
            "@context": "https://schema.org",
            "@type": "Chiropractor",
            "name": "Chiropractic Unlimited",
            "url": "https://chirounlimitedwellness.com",
            "telephone": BUSINESS_INFO.phone,
            "email": "info@chirounlimitedwellness.com",
            "priceRange": "$$",
            "paymentAccepted": "Cash, Credit Card, Debit Card",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "3731 20th Ave",
                "addressLocality": "Valley",
                "addressRegion": "AL",
                "postalCode": "36854",
                "addressCountry": "US"
            },
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": 32.8167,
                "longitude": -85.1794
            },
            "openingHoursSpecification": [
                {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
                    "opens": "10:00",
                    "closes": "17:00"
                }
            ],
            "areaServed": [
                { "@type": "City", "name": "Valley" },
                { "@type": "City", "name": "Lanett" },
                { "@type": "City", "name": "West Point" },
                { "@type": "City", "name": "LaFayette" },
                { "@type": "City", "name": "Opelika" }
            ]
        }
    ];

    return (
        <>
            <Helmet>
                <title>Chiropractor Cost Without Insurance | Valley, AL | $20 New Patient Special</title>
                <meta name="description" content="Affordable chiropractic care in Valley, AL — no insurance needed. $20 new patient special includes consultation, exam, and report of findings. Transparent pricing from Dr. Jason Bang DC FNP." />
                <link rel="canonical" href="https://chirounlimitedwellness.com/pricing" />

                <meta property="og:title" content="Affordable Chiropractor in Valley, AL | No Insurance Needed" />
                <meta property="og:description" content="$20 new patient special. Transparent cash-based chiropractic care. No insurance hassles, no surprise bills." />
                <meta property="og:url" content="https://chirounlimitedwellness.com/pricing" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Chiropractic Unlimited" />
                <meta property="og:locale" content="en_US" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Chiropractor Cost Without Insurance | Valley, AL" />
                <meta name="twitter:description" content="$20 new patient special. Transparent, affordable chiropractic care — no insurance needed." />
            </Helmet>
            <StructuredData data={schemas} />

            {/* Hero Banner */}
            <section className="relative bg-brand-primary pt-36 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-primary via-brand-primary/95 to-brand-secondary/80"></div>
                <div className="absolute top-20 right-10 w-64 h-64 bg-brand-accent/10 rounded-full blur-3xl animate-float"></div>
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <RevealOnScroll animation="slide-left">
                        <span className="text-brand-accent font-semibold tracking-widest uppercase text-xs mb-4 block">Transparent Pricing</span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6">
                            Affordable Chiropractor
                            <span className="block text-2xl md:text-3xl lg:text-4xl font-semibold text-brand-accent mt-2">in Valley, AL — No Insurance Needed</span>
                        </h1>
                        <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-2xl mb-8">
                            Quality chiropractic care shouldn't require navigating insurance bureaucracy. At Chiropractic Unlimited, we keep pricing simple, transparent, and affordable for everyone.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="#new-patient-offer"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-accent text-white font-bold rounded-full hover:bg-emerald-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 animate-pulse-glow"
                            >
                                <CalendarCheck className="w-5 h-5" />
                                See New Patient Special
                            </a>
                            <a
                                href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, '')}`}
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-full hover:bg-white/10 hover:border-white transition-all duration-300"
                            >
                                <Phone className="w-5 h-5" />
                                {BUSINESS_INFO.phone}
                            </a>
                        </div>
                    </RevealOnScroll>
                </div>
            </section>

            {/* New Patient Special */}
            <section id="new-patient-offer" className="py-16 md:py-24 bg-brand-bg">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <RevealOnScroll animation="scale-up">
                        <div className="bg-gradient-to-br from-brand-secondary to-brand-primary border border-white/10 rounded-3xl p-8 md:p-16 text-center shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-pulse"></div>
                            <div className="relative z-10">
                                <div className="inline-block bg-brand-accent text-white font-bold px-4 py-1.5 rounded-full text-xs tracking-widest uppercase mb-6">
                                    New Patient Special
                                </div>
                                <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                                    Your First Visit — Just $20
                                </h2>
                                <div className="flex items-start justify-center text-white mb-6">
                                    <span className="text-3xl font-medium mt-2">$</span>
                                    <span className="text-8xl font-bold font-display">20</span>
                                </div>
                                <p className="text-white/90 text-lg mb-2 max-w-xl mx-auto">
                                    Includes consultation, comprehensive exam, and report of findings.
                                </p>
                                <p className="text-white/60 text-sm italic mb-8">A $350 value. No insurance required.</p>
                                <a
                                    href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, '')}`}
                                    className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-brand-primary font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                                >
                                    Schedule Now <ArrowRight className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </RevealOnScroll>
                </div>
            </section>

            {/* Why Cash-Based */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <RevealOnScroll animation="fade-up">
                        <div className="max-w-3xl">
                            <span className="text-brand-accent font-semibold tracking-widest uppercase text-xs mb-4 block">Why Cash-Based Care</span>
                            <h2 className="text-3xl md:text-4xl font-display text-brand-primary mb-6">How Much Does a Chiropractor Cost Without Insurance?</h2>
                            <p className="text-brand-muted text-lg leading-relaxed mb-4">
                                National averages for chiropractic visits range from $30 to $200 per session, with initial consultations often running $100 to $400. At Chiropractic Unlimited, our first visit is just $20 — a fraction of what most clinics charge, with or without insurance.
                            </p>
                            <p className="text-brand-muted text-lg leading-relaxed mb-4">
                                We chose a cash-based model for one reason: it lets Dr. Bang deliver better care. Without insurance companies dictating visit limits, treatment protocols, or billing codes, every decision is made based on what your body actually needs — not what an adjuster approves.
                            </p>
                            <p className="text-brand-muted text-lg leading-relaxed">
                                Many patients find they actually spend less out-of-pocket with us than they would at an insurance-billing clinic after factoring in copays, deductibles, and the extra visits that fragmented insurance-driven care often requires.
                            </p>
                        </div>
                    </RevealOnScroll>
                </div>
            </section>

            {/* Benefits of Cash-Based */}
            <section className="py-16 md:py-24 bg-brand-bg">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <RevealOnScroll animation="scale-up">
                        <div className="text-center max-w-2xl mx-auto mb-12">
                            <span className="text-brand-accent font-semibold tracking-widest uppercase text-xs mb-4 block">What You Get</span>
                            <h2 className="text-3xl md:text-4xl font-display text-brand-primary">Why Patients Choose Cash-Based Chiropractic in Valley, AL</h2>
                        </div>
                    </RevealOnScroll>

                    <RevealOnScroll animation="stagger">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="flex items-start gap-4 p-6 rounded-xl bg-white border border-brand-primary/5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                                <div className="w-12 h-12 rounded-full bg-brand-accent/10 flex items-center justify-center shrink-0">
                                    <DollarSign className="w-6 h-6 text-brand-accent" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-brand-primary text-lg mb-1">No Surprise Bills</h3>
                                    <p className="text-brand-muted">You know exactly what each visit costs before you walk in. No copay confusion, no deductible surprises, no balance billing.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-6 rounded-xl bg-white border border-brand-primary/5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                                <div className="w-12 h-12 rounded-full bg-brand-accent/10 flex items-center justify-center shrink-0">
                                    <Clock className="w-6 h-6 text-brand-accent" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-brand-primary text-lg mb-1">More Time With Dr. Bang</h3>
                                    <p className="text-brand-muted">Insurance-based clinics often cap visits at 5-10 minutes. Your initial visit at Chiropractic Unlimited is 20-30 minutes. Follow-ups are 10-15 minutes of focused, one-on-one care.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-6 rounded-xl bg-white border border-brand-primary/5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                                <div className="w-12 h-12 rounded-full bg-brand-accent/10 flex items-center justify-center shrink-0">
                                    <Shield className="w-6 h-6 text-brand-accent" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-brand-primary text-lg mb-1">Treatment Based on Your Needs</h3>
                                    <p className="text-brand-muted">No insurance company telling Dr. Bang what he can or can't do. Your care plan is built around what your body needs — not what gets approved.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-6 rounded-xl bg-white border border-brand-primary/5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                                <div className="w-12 h-12 rounded-full bg-brand-accent/10 flex items-center justify-center shrink-0">
                                    <Heart className="w-6 h-6 text-brand-accent" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-brand-primary text-lg mb-1">FSA/HSA Accepted</h3>
                                    <p className="text-brand-muted">You can use your Flexible Spending Account or Health Savings Account to pay for visits. We provide the documentation you need for reimbursement.</p>
                                </div>
                            </div>
                        </div>
                    </RevealOnScroll>
                </div>
            </section>

            {/* Payment Methods */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <RevealOnScroll animation="fade-up">
                        <div className="max-w-3xl">
                            <span className="text-brand-accent font-semibold tracking-widest uppercase text-xs mb-4 block">Payment Options</span>
                            <h2 className="text-3xl md:text-4xl font-display text-brand-primary mb-6">How to Pay for Chiropractic Care Without Insurance</h2>
                            <div className="space-y-4">
                                {[
                                    "Cash, credit cards, and debit cards accepted",
                                    "FSA and HSA accounts — we provide documentation for reimbursement",
                                    "Payment is due at the time of service",
                                    "Affordable care plans available for ongoing treatment",
                                    "No hidden fees, no contracts, no long-term commitments required"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-6 h-6 text-brand-accent shrink-0 mt-0.5" />
                                        <span className="text-brand-muted text-lg">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </RevealOnScroll>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-16 md:py-24 bg-brand-bg">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <RevealOnScroll animation="scale-up">
                        <div className="text-center mb-12">
                            <span className="text-brand-accent font-semibold tracking-widest uppercase text-xs mb-4 block">Common Questions</span>
                            <h2 className="text-3xl md:text-4xl font-display text-brand-primary">Chiropractor Cost FAQs in Valley, AL</h2>
                        </div>
                    </RevealOnScroll>

                    <div className="space-y-4">
                        {[
                            {
                                q: "How much does a chiropractor cost without insurance?",
                                a: "At Chiropractic Unlimited, your first visit is just $20 — that includes a consultation, comprehensive exam, and report of findings. This is a fraction of the national average of $100-$400 for an initial chiropractic visit. Follow-up visit pricing is discussed during your report of findings based on your personalized care plan."
                            },
                            {
                                q: "Do you accept insurance?",
                                a: "We are a cash-based practice and do not bill insurance directly. This allows Dr. Bang to spend the time your case requires without insurance-imposed visit limits or treatment restrictions. Many patients find they spend less with us than they would after insurance copays and deductibles at other clinics."
                            },
                            {
                                q: "Can I use my HSA or FSA?",
                                a: "Yes. Chiropractic care is an eligible expense for both Health Savings Accounts (HSA) and Flexible Spending Accounts (FSA). We provide detailed receipts and documentation for reimbursement."
                            },
                            {
                                q: "Is chiropractic care worth the cost?",
                                a: "Research consistently shows chiropractic patients have lower overall healthcare costs than those who see other providers first for back pain. A 2020 study found patients who started with a chiropractor had annual healthcare costs averaging $5,093, compared to $9,434 for those who started with an orthopedist. Chiropractic care addresses the root cause of pain rather than managing symptoms with medication."
                            },
                            {
                                q: "Do you offer payment plans?",
                                a: "We offer affordable care plans for patients who need ongoing treatment. Pricing details are discussed during your report of findings so you know exactly what to expect — no surprises."
                            },
                            {
                                q: "What if I have Medicaid or Medicare?",
                                a: "We do not bill Medicaid or Medicare directly. As a cash-based practice, our transparent pricing applies equally to all patients. If you have questions about coverage, we're happy to discuss your options during a phone call."
                            }
                        ].map((faq, idx) => (
                            <RevealOnScroll key={idx} delay={idx * 100} animation={idx % 2 === 0 ? 'slide-left' : 'slide-right'}>
                                <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-brand-primary/5 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                                    <h3 className="font-bold text-brand-primary text-lg mb-3">{faq.q}</h3>
                                    <p className="text-brand-muted leading-relaxed">{faq.a}</p>
                                </div>
                            </RevealOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Banner */}
            <section className="py-16 md:py-24 bg-brand-accent text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1)_0%,transparent_60%)]"></div>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <RevealOnScroll animation="scale-up">
                        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                            Get Started for Just $20 in Valley, AL
                        </h2>
                        <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                            No insurance paperwork. No referral needed. Just call to schedule your $20 new patient visit with <Link to="/about" className="underline hover:text-white transition-colors">Dr. Jason Bang (DC, FNP)</Link>.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                to="/#booking"
                                className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-white text-brand-primary font-bold rounded-full hover:bg-gray-50 hover:-translate-y-0.5 transition-all duration-300 shadow-xl"
                            >
                                <CalendarCheck className="w-5 h-5" />
                                Book Appointment
                            </Link>
                            <a
                                href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, '')}`}
                                className="inline-flex items-center justify-center gap-2 px-10 py-4 border-2 border-white/30 font-semibold rounded-full hover:bg-white/10 hover:border-white transition-all duration-300"
                            >
                                <Phone className="w-5 h-5" />
                                Call {BUSINESS_INFO.phone}
                            </a>
                        </div>
                    </RevealOnScroll>
                </div>
            </section>
        </>
    );
};
