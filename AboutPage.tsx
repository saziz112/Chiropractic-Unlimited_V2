import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Award, GraduationCap, Heart, Globe, CalendarCheck, Phone } from 'lucide-react';
import { RevealOnScroll } from './components/RevealOnScroll';
import { StructuredData } from './components/StructuredData';
import { BUSINESS_INFO } from './constants';

export const AboutPage: React.FC = () => {
    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Dr. Jason Bang",
        "jobTitle": "Doctor of Chiropractic and Family Nurse Practitioner",
        "description": "Board-certified chiropractor and family nurse practitioner offering integrated wellness care in Valley, AL",
        "image": "https://i.ibb.co/cXh09B2q/Jason-B.jpg",
        "url": "https://chirounlimitedwellness.com/about",
        "telephone": BUSINESS_INFO.phone,
        "email": BUSINESS_INFO.email,
        "alumniOf": [
            {
                "@type": "EducationalOrganization",
                "name": "Life University",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Marietta",
                    "addressRegion": "GA",
                    "addressCountry": "US"
                }
            }
        ],
        "hasCredential": [
            {
                "@type": "EducationalOccupationalCredential",
                "credentialCategory": "degree",
                "name": "Doctor of Chiropractic (DC)"
            },
            {
                "@type": "EducationalOccupationalCredential",
                "credentialCategory": "degree",
                "name": "Family Nurse Practitioner (FNP)"
            }
        ],
        "worksFor": {
            "@type": "MedicalBusiness",
            "name": BUSINESS_INFO.name,
            "address": {
                "@type": "PostalAddress",
                "streetAddress": BUSINESS_INFO.address.split(',')[0],
                "addressLocality": "Valley",
                "addressRegion": "AL",
                "postalCode": "36854",
                "addressCountry": "US"
            }
        }
    };

    const breadcrumbSchema = {
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
                "name": "About Dr. Jason Bang",
                "item": "https://chirounlimitedwellness.com/about"
            }
        ]
    };

    return (
        <>
            <Helmet>
                <title>About Dr. Jason Bang DC FNP | Chiropractor in Valley, AL</title>
                <meta name="description" content="Meet Dr. Jason Bang, Valley AL's only chiropractor with dual DC and FNP credentials. Integrated wellness care combining chiropractic and medical expertise." />

                {/* Canonical URL */}
                <link rel="canonical" href="https://chirounlimitedwellness.com/about" />

                {/* Open Graph Tags */}
                <meta property="og:title" content="About Dr. Jason Bang DC FNP | Chiropractor in Valley, AL" />
                <meta property="og:description" content="Meet Dr. Jason Bang, Valley AL's only chiropractor with dual DC and FNP credentials. Offering integrated wellness care combining chiropractic and medical expertise." />
                <meta property="og:image" content="https://i.ibb.co/cXh09B2q/Jason-B.jpg" />
                <meta property="og:url" content="https://chirounlimitedwellness.com/about" />
                <meta property="og:type" content="profile" />
                <meta property="og:site_name" content="Chiropractic Unlimited" />
                <meta property="og:locale" content="en_US" />

                {/* Twitter Card Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="About Dr. Jason Bang DC FNP | Chiropractor in Valley, AL" />
                <meta name="twitter:description" content="Meet Dr. Jason Bang, Valley AL's only chiropractor with dual DC and FNP credentials. Offering integrated wellness care." />
                <meta name="twitter:image" content="https://i.ibb.co/cXh09B2q/Jason-B.jpg" />
            </Helmet>
            <StructuredData data={[personSchema, breadcrumbSchema]} />

            {/* Hero Section */}
            <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-brand-primary via-brand-primary to-brand-secondary overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1)_0%,transparent_60%)]"></div>
                <div className="absolute top-20 right-10 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-20 left-10 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 pt-40 relative z-10">
                    <Link to="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8 group">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Home
                    </Link>
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <RevealOnScroll animation="slide-left">
                            <div>
                                <span className="text-brand-accent font-semibold tracking-widest uppercase text-xs mb-4 block">Meet Your Doctor</span>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6">
                                    Dr. Jason Bang<br />
                                    <span className="text-brand-accent">DC, FNP</span>
                                </h1>
                                <p className="text-white/90 text-xl leading-relaxed mb-8">
                                    Valley, AL's only chiropractor with dual credentials in Chiropractic and Family Nurse Practice, offering truly integrated wellness care.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <a
                                        href="/#booking"
                                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-accent text-white font-bold rounded-full hover:bg-emerald-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                                    >
                                        <CalendarCheck className="w-5 h-5" />
                                        Schedule Consultation
                                    </a>
                                    <a
                                        href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, '')}`}
                                        className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 hover:border-white transition-all duration-300"
                                    >
                                        <Phone className="w-5 h-5" />
                                        {BUSINESS_INFO.phone}
                                    </a>
                                </div>
                            </div>
                        </RevealOnScroll>

                        <RevealOnScroll animation="scale-up" delay={200}>
                            <div className="relative">
                                <div className="absolute -inset-4 bg-brand-accent/20 rounded-3xl blur-2xl"></div>
                                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                                    <img
                                        src="https://i.ibb.co/cXh09B2q/Jason-B.jpg"
                                        alt="Dr. Jason Bang DC FNP"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </RevealOnScroll>
                    </div>
                </div>
            </section>

            {/* Credentials Section */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <RevealOnScroll animation="fade-up">
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <span className="text-brand-accent font-semibold tracking-widest uppercase text-xs mb-4 block">Dual Credentials</span>
                            <h2 className="text-3xl md:text-4xl font-display text-brand-primary mb-6">A Unique Combination of Expertise</h2>
                            <p className="text-brand-muted text-lg leading-relaxed">
                                Dr. Bang is one of the few practitioners in the nation who holds both Doctor of Chiropractic (DC) and Family Nurse Practitioner (FNP) credentials, allowing him to provide comprehensive, integrated care that addresses both musculoskeletal and overall health needs.
                            </p>
                        </div>
                    </RevealOnScroll>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <RevealOnScroll animation="slide-left">
                            <div className="bg-brand-bg p-8 rounded-2xl border-2 border-brand-accent/20 hover:border-brand-accent/40 transition-all duration-300 hover:shadow-lg">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-3 bg-brand-accent/10 rounded-xl">
                                        <GraduationCap className="w-8 h-8 text-brand-accent" />
                                    </div>
                                    <h3 className="text-2xl font-display font-bold text-brand-primary">Doctor of Chiropractic (DC)</h3>
                                </div>
                                <p className="text-brand-muted leading-relaxed mb-4">
                                    <strong>Life University, Marietta, GA</strong><br />
                                    One of the premier chiropractic institutions in the world, Life University is renowned for its rigorous academic standards and evidence-based approach to chiropractic care.
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                                        <span className="text-brand-text">Comprehensive study of spinal biomechanics and nervous system function</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                                        <span className="text-brand-text">Advanced training in spinal adjustment techniques and rehabilitative therapies</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                                        <span className="text-brand-text">Specialized focus on wellness-based, patient-centered care</span>
                                    </li>
                                </ul>
                            </div>
                        </RevealOnScroll>

                        <RevealOnScroll animation="slide-right">
                            <div className="bg-brand-bg p-8 rounded-2xl border-2 border-brand-secondary/20 hover:border-brand-secondary/40 transition-all duration-300 hover:shadow-lg">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-3 bg-brand-secondary/10 rounded-xl">
                                        <Heart className="w-8 h-8 text-brand-secondary" />
                                    </div>
                                    <h3 className="text-2xl font-display font-bold text-brand-primary">Family Nurse Practitioner (FNP)</h3>
                                </div>
                                <p className="text-brand-muted leading-relaxed mb-4">
                                    <strong>Graduate-Level Advanced Practice Nursing</strong><br />
                                    FNP certification represents the highest level of advanced practice nursing, with expertise in diagnosing, treating, and managing acute and chronic conditions across the lifespan.
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-brand-secondary shrink-0 mt-0.5" />
                                        <span className="text-brand-text">Advanced pharmacology and clinical diagnostics training</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-brand-secondary shrink-0 mt-0.5" />
                                        <span className="text-brand-text">Comprehensive health assessment and treatment planning</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-brand-secondary shrink-0 mt-0.5" />
                                        <span className="text-brand-text">Holistic approach to patient wellness and disease prevention</span>
                                    </li>
                                </ul>
                            </div>
                        </RevealOnScroll>
                    </div>
                </div>
            </section>

            {/* Professional Journey Section */}
            <section className="py-16 md:py-24 bg-brand-bg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <RevealOnScroll animation="scale-up">
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <span className="text-brand-accent font-semibold tracking-widest uppercase text-xs mb-4 block">Professional Journey</span>
                            <h2 className="text-3xl md:text-4xl font-display text-brand-primary mb-6">Global Experience, Local Commitment</h2>
                        </div>
                    </RevealOnScroll>

                    <div className="max-w-4xl mx-auto">
                        <RevealOnScroll animation="fade-up">
                            <div className="prose prose-lg max-w-none">
                                <p className="text-brand-text leading-relaxed mb-6">
                                    Dr. Jason Bang's journey in healthcare is defined by a deep passion for improving the quality of life in others through wellness-based care. A proud graduate of Life University in Marietta, GA, Dr. Bang's chiropractic education laid the foundation for his patient-centered approach to healthcare.
                                </p>

                                <div className="bg-white p-8 rounded-2xl shadow-sm mb-8">
                                    <div className="flex items-center gap-3 mb-4">
                                        <Globe className="w-6 h-6 text-brand-accent" />
                                        <h3 className="text-2xl font-display font-bold text-brand-primary m-0">International Training & Mentorship</h3>
                                    </div>
                                    <p className="text-brand-muted leading-relaxed mb-0">
                                        Dr. Bang's commitment to excellence led him across the globe, where he had the privilege of mentoring and learning alongside professionals in countries including <strong>Canada, Germany, and China</strong>. These international experiences exposed him to diverse treatment philosophies and cutting-edge techniques, shaping his holistic, evidence-based approach to patient care. This global perspective allows Dr. Bang to integrate the best practices from around the world into his treatment protocols.
                                    </p>
                                </div>

                                <div className="bg-white p-8 rounded-2xl shadow-sm mb-8">
                                    <div className="flex items-center gap-3 mb-4">
                                        <Heart className="w-6 h-6 text-brand-secondary" />
                                        <h3 className="text-2xl font-display font-bold text-brand-primary m-0">Expanding to Advanced Practice Nursing</h3>
                                    </div>
                                    <p className="text-brand-muted leading-relaxed mb-0">
                                        Driven by a desire to expand his ability to serve patients more comprehensively, Dr. Bang pursued a degree in nursing and recently graduated as a <strong>Family Nurse Practitioner (FNP)</strong>. This advanced credential represents years of additional study in pharmacology, pathophysiology, advanced diagnostics, and comprehensive health management. As an FNP, Dr. Bang can diagnose conditions, order and interpret diagnostic tests, prescribe medications when appropriate, and manage both acute and chronic health conditions—all while maintaining his chiropractic focus on spinal health and nervous system optimization.
                                    </p>
                                </div>

                                <div className="bg-white p-8 rounded-2xl shadow-sm mb-8">
                                    <div className="flex items-center gap-3 mb-4">
                                        <Award className="w-6 h-6 text-brand-primary" />
                                        <h3 className="text-2xl font-display font-bold text-brand-primary m-0">Real-World Clinical Experience</h3>
                                    </div>
                                    <p className="text-brand-muted leading-relaxed mb-0">
                                        During his nursing training, Dr. Bang worked as a registered nurse at the <strong>VA Hospital in Birmingham, Alabama</strong>, serving our nation's veterans during the challenging period of the COVID-19 pandemic. This frontline experience deepened his understanding of complex medical conditions, honed his clinical skills, and reinforced his commitment to compassionate, patient-centered care. Working with veterans facing diverse health challenges taught him the importance of addressing not just symptoms, but the whole person—physically, mentally, and emotionally.
                                    </p>
                                </div>

                                <p className="text-brand-text leading-relaxed">
                                    These experiences have deepened Dr. Bang's compassion and reinforced his commitment to <strong>integrated care</strong>—an approach that recognizes the interconnection between spinal health, nervous system function, and overall wellness. Today, Dr. Bang brings this unique combination of chiropractic expertise and advanced medical knowledge to Valley, Alabama, offering his patients truly comprehensive care that few practitioners can match.
                                </p>
                            </div>
                        </RevealOnScroll>
                    </div>
                </div>
            </section>

            {/* Treatment Philosophy Section */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <RevealOnScroll animation="scale-up">
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <span className="text-brand-accent font-semibold tracking-widest uppercase text-xs mb-4 block">Treatment Philosophy</span>
                            <h2 className="text-3xl md:text-4xl font-display text-brand-primary mb-6">Treating the Root Cause, Not Just Symptoms</h2>
                        </div>
                    </RevealOnScroll>

                    <div className="max-w-4xl mx-auto">
                        <RevealOnScroll animation="fade-up">
                            <div className="prose prose-lg max-w-none">
                                <p className="text-brand-text text-lg leading-relaxed mb-6">
                                    Dr. Bang's treatment philosophy is built on a simple but powerful principle: <strong>true healing comes from addressing the underlying cause of pain and dysfunction, not just masking symptoms</strong>. This philosophy is what sets integrated chiropractic and wellness care apart from conventional symptom-focused approaches.
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="bg-brand-bg p-6 rounded-xl">
                                        <h3 className="text-xl font-bold text-brand-primary mb-3 flex items-center gap-2">
                                            <span className="text-2xl">🎯</span> Whole-Person Approach
                                        </h3>
                                        <p className="text-brand-muted mb-0">
                                            Your body is a complex, interconnected system. Dr. Bang evaluates how your spine, nervous system, muscles, and overall health work together, identifying the root dysfunction that's causing your symptoms.
                                        </p>
                                    </div>

                                    <div className="bg-brand-bg p-6 rounded-xl">
                                        <h3 className="text-xl font-bold text-brand-primary mb-3 flex items-center gap-2">
                                            <span className="text-2xl">🔬</span> Evidence-Based Care
                                        </h3>
                                        <p className="text-brand-muted mb-0">
                                            Every treatment recommendation is grounded in scientific research and clinical evidence. Dr. Bang combines the best of chiropractic science with modern medical knowledge to create effective, personalized treatment plans.
                                        </p>
                                    </div>

                                    <div className="bg-brand-bg p-6 rounded-xl">
                                        <h3 className="text-xl font-bold text-brand-primary mb-3 flex items-center gap-2">
                                            <span className="text-2xl">🤝</span> Patient Empowerment
                                        </h3>
                                        <p className="text-brand-muted mb-0">
                                            Dr. Bang believes in educating patients about their condition and involving them in their own healing process. You'll understand why you're experiencing pain and what steps you can take to prevent future problems.
                                        </p>
                                    </div>

                                    <div className="bg-brand-bg p-6 rounded-xl">
                                        <h3 className="text-xl font-bold text-brand-primary mb-3 flex items-center gap-2">
                                            <span className="text-2xl">💪</span> Long-Term Wellness
                                        </h3>
                                        <p className="text-brand-muted mb-0">
                                            The goal isn't just temporary pain relief—it's lasting health and improved quality of life. Dr. Bang develops comprehensive wellness plans that address current issues while preventing future problems.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-brand-primary to-brand-secondary p-8 rounded-2xl text-white mb-8">
                                    <h3 className="text-2xl font-display font-bold mb-4">The Integrated Advantage</h3>
                                    <p className="text-white/90 leading-relaxed mb-4">
                                        Dr. Bang's dual credentials in chiropractic and family nurse practice create a unique advantage: he can view your health from both a structural (chiropractic) and a systemic (medical) perspective. This means:
                                    </p>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-3">
                                            <CheckCircle2 className="w-6 h-6 shrink-0 mt-0.5 text-brand-accent" />
                                            <span><strong>Comprehensive diagnosis:</strong> Understanding how spinal issues may relate to other health conditions</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle2 className="w-6 h-6 shrink-0 mt-0.5 text-brand-accent" />
                                            <span><strong>Coordinated care:</strong> Seamlessly integrating chiropractic adjustments with medical management when needed</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle2 className="w-6 h-6 shrink-0 mt-0.5 text-brand-accent" />
                                            <span><strong>Reduced referrals:</strong> Many issues can be addressed in-house without bouncing between multiple providers</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle2 className="w-6 h-6 shrink-0 mt-0.5 text-brand-accent" />
                                            <span><strong>Better outcomes:</strong> A holistic understanding of your health leads to more effective, personalized treatment plans</span>
                                        </li>
                                    </ul>
                                </div>

                                <p className="text-brand-text leading-relaxed text-lg">
                                    Whether you're struggling with chronic back pain, recovering from an auto injury, seeking performance optimization, or looking to improve your overall wellness, Dr. Bang's integrated approach provides the comprehensive care your body deserves.
                                </p>
                            </div>
                        </RevealOnScroll>
                    </div>
                </div>
            </section>

            {/* Why Choose Dr. Bang Section */}
            <section className="py-16 md:py-24 bg-brand-primary text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.1)_0%,transparent_60%)]"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <RevealOnScroll animation="scale-up">
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Why Patients Choose Dr. Bang</h2>
                            <p className="text-white/90 text-lg leading-relaxed">
                                Experience the difference that dual expertise and genuine compassion make in your healthcare journey.
                            </p>
                        </div>
                    </RevealOnScroll>

                    <div className="grid md:grid-cols-3 gap-6">
                        <RevealOnScroll animation="fade-up" delay={100}>
                            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                                <div className="text-4xl mb-4">🏆</div>
                                <h3 className="text-xl font-bold mb-3">Unique Dual Credentials</h3>
                                <p className="text-white/80">
                                    One of the few practitioners nationally with both DC and FNP certifications, offering truly integrated care.
                                </p>
                            </div>
                        </RevealOnScroll>

                        <RevealOnScroll animation="fade-up" delay={200}>
                            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                                <div className="text-4xl mb-4">🌍</div>
                                <h3 className="text-xl font-bold mb-3">Global Perspective</h3>
                                <p className="text-white/80">
                                    International training and mentorship bring world-class techniques to Valley, Alabama.
                                </p>
                            </div>
                        </RevealOnScroll>

                        <RevealOnScroll animation="fade-up" delay={300}>
                            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                                <div className="text-4xl mb-4">❤️</div>
                                <h3 className="text-xl font-bold mb-3">Compassionate Care</h3>
                                <p className="text-white/80">
                                    Frontline healthcare experience during COVID-19 deepened commitment to patient-centered healing.
                                </p>
                            </div>
                        </RevealOnScroll>

                        <RevealOnScroll animation="fade-up" delay={100}>
                            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                                <div className="text-4xl mb-4">🎯</div>
                                <h3 className="text-xl font-bold mb-3">Root Cause Focus</h3>
                                <p className="text-white/80">
                                    Treats underlying dysfunction, not just symptoms, for lasting results and improved quality of life.
                                </p>
                            </div>
                        </RevealOnScroll>

                        <RevealOnScroll animation="fade-up" delay={200}>
                            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                                <div className="text-4xl mb-4">🔬</div>
                                <h3 className="text-xl font-bold mb-3">Evidence-Based</h3>
                                <p className="text-white/80">
                                    Every treatment grounded in scientific research and clinical evidence for safe, effective care.
                                </p>
                            </div>
                        </RevealOnScroll>

                        <RevealOnScroll animation="fade-up" delay={300}>
                            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                                <div className="text-4xl mb-4">🤝</div>
                                <h3 className="text-xl font-bold mb-3">Patient Partnership</h3>
                                <p className="text-white/80">
                                    Empowering patients through education and involving them in their own healing journey.
                                </p>
                            </div>
                        </RevealOnScroll>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 md:py-24 bg-brand-accent text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1)_0%,transparent_60%)]"></div>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <RevealOnScroll animation="scale-up">
                        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                            Ready to Experience Integrated Wellness Care?
                        </h2>
                        <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                            Schedule a consultation with Dr. Bang and discover how his unique combination of chiropractic expertise and advanced medical training can help you achieve lasting health and wellness.
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
