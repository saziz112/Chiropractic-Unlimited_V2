import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { PATIENTS } from '../constants';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { StructuredData } from './StructuredData';

export const PatientDetailPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const patientGroup = PATIENTS.find(p => p.slug === slug);

    if (!patientGroup) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-brand-bg">
                <div className="text-center">
                    <h1 className="text-4xl font-display text-brand-primary mb-4">Page Not Found</h1>
                    <Link to="/" className="text-brand-accent hover:underline flex items-center justify-center gap-2">
                        <ArrowLeft className="w-4 h-4" /> Back to Home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="pt-32 pb-24 bg-brand-bg">
            <Helmet>
                <title>{patientGroup.metaTitle || `${patientGroup.title} Chiropractic Care in Valley, AL`}</title>
                <meta name="description" content={patientGroup.metaDescription || patientGroup.fullDescription.slice(0, 160)} />
                <meta property="og:title" content={patientGroup.metaTitle || patientGroup.title} />
                <meta property="og:description" content={patientGroup.metaDescription || patientGroup.fullDescription.slice(0, 160)} />
                <meta property="og:image" content={patientGroup.image} />
                <meta property="og:url" content={`https://chiropracticunlimited.com/patients/${slug}`} />
                <meta property="og:type" content="article" />
            </Helmet>
            <StructuredData data={[
                {
                    "@context": "https://schema.org",
                    "@type": "BreadcrumbList",
                    "itemListElement": [
                        {
                            "@type": "ListItem",
                            "position": 1,
                            "name": "Home",
                            "item": "https://chiropracticunlimited.com"
                        },
                        {
                            "@type": "ListItem",
                            "position": 2,
                            "name": "Patients",
                            "item": "https://chiropracticunlimited.com/#patients"
                        },
                        {
                            "@type": "ListItem",
                            "position": 3,
                            "name": patientGroup.title,
                            "item": `https://chiropracticunlimited.com/patients/${slug}`
                        }
                    ]
                }
            ]} />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Breadcrumbs / Back button */}
                <Link to="/" className="inline-flex items-center gap-2 text-brand-muted hover:text-brand-primary transition-colors mb-8 group">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Home
                </Link>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div className="order-2 lg:order-1">
                        <span className="text-brand-accent font-semibold tracking-widest uppercase text-xs mb-4 block">Specialized Care</span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-brand-primary mb-6">
                            {patientGroup.title}
                        </h1>
                        <p className="text-brand-muted text-xl leading-relaxed mb-8">
                            {patientGroup.fullDescription}
                        </p>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-brand-primary/5 mb-8">
                            <h3 className="text-xl font-bold text-brand-primary mb-4">How We Help</h3>
                            <ul className="space-y-3">
                                {patientGroup.benefits.map((benefit, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-brand-muted">
                                        <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                                        <span>{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <Link
                            to="/#booking"
                            className="inline-block bg-brand-primary text-white px-8 py-4 rounded-lg font-bold hover:bg-brand-secondary transition-all shadow-md"
                        >
                            Book an Appointment
                        </Link>
                    </div>

                    {/* Image */}
                    <div className="order-1 lg:order-2">
                        <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src={patientGroup.image}
                                alt={patientGroup.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-brand-primary/10 mix-blend-multiply"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
