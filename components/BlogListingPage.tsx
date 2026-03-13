import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { BLOG_POSTS, BLOG_CATEGORIES } from '../blogPosts';
import { BUSINESS_INFO } from '../constants';
import { CalendarCheck, Phone, Clock, User } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';
import { StructuredData } from './StructuredData';

export const BlogListingPage: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<string>('All');
    const navigate = useNavigate();

    const today = new Date().toISOString().split('T')[0];
    const publishedPosts = BLOG_POSTS.filter(p => p.publishDate <= today);

    const filteredPosts = activeCategory === 'All'
        ? publishedPosts
        : publishedPosts.filter(p => p.category === activeCategory);

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
                "name": "Blog",
                "item": "https://chirounlimitedwellness.com/blog"
            }
        ]
    };

    return (
        <>
            <Helmet>
                <title>Chiropractic Blog | Health Tips from Dr. Jason Bang DC FNP</title>
                <meta name="description" content="Expert chiropractic and wellness articles from Dr. Jason Bang, a chiropractor and nurse practitioner in Valley, AL. Pain management, wellness tips, and evidence-based health advice." />
                <link rel="canonical" href="https://chirounlimitedwellness.com/blog" />
                <meta property="og:title" content="Chiropractic Blog | Chiropractic Unlimited" />
                <meta property="og:description" content="Expert chiropractic and wellness articles from Dr. Jason Bang DC FNP in Valley, AL." />
                <meta property="og:url" content="https://chirounlimitedwellness.com/blog" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Chiropractic Unlimited" />
                <meta property="og:locale" content="en_US" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Chiropractic Blog | Chiropractic Unlimited" />
                <meta name="twitter:description" content="Expert chiropractic and wellness articles from Dr. Jason Bang DC FNP in Valley, AL." />
            </Helmet>
            <StructuredData data={breadcrumbSchema} />

            {/* Hero */}
            <section className="relative bg-brand-primary overflow-hidden">
                <div className="absolute top-20 right-10 w-64 h-64 bg-brand-accent/10 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-10 left-10 w-48 h-48 bg-brand-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-40 pb-16">
                    <RevealOnScroll animation="slide-left">
                        <span className="text-brand-accent font-semibold tracking-widest uppercase text-xs mb-4 block">Our Blog</span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6">
                            Health Insights from<br />Dr. Jason Bang
                        </h1>
                        <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-2xl">
                            Evidence-based chiropractic and wellness advice from a doctor with both DC and FNP credentials.
                        </p>
                    </RevealOnScroll>
                </div>
            </section>

            {/* Category Filter + Posts */}
            <section className="py-16 md:py-24 bg-brand-bg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Category Pills */}
                    <RevealOnScroll animation="fade-up">
                        <div className="flex flex-wrap gap-3 mb-12">
                            {BLOG_CATEGORIES.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                                        activeCategory === cat
                                            ? 'bg-brand-primary text-white shadow-lg'
                                            : 'bg-white text-brand-muted border border-brand-primary/10 hover:border-brand-primary/30 hover:text-brand-primary'
                                    }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </RevealOnScroll>

                    {/* Posts Grid */}
                    {filteredPosts.length > 0 ? (
                        <RevealOnScroll animation="stagger">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {filteredPosts.map((post) => {
                                    const formattedDate = new Date(post.publishDate).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'short',
                                        day: 'numeric',
                                    });

                                    return (
                                        <article
                                            key={post.slug}
                                            className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-sm border border-brand-primary/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                                            onClick={() => navigate(`/blog/${post.slug}`)}
                                        >
                                            <div className="relative aspect-[16/10] overflow-hidden">
                                                <img
                                                    src={post.featuredImage}
                                                    alt={post.featuredImageAlt}
                                                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                                    loading="lazy"
                                                />
                                                <div className="absolute top-3 left-3">
                                                    <span className="px-2.5 py-1 text-xs font-semibold bg-white/90 text-brand-primary rounded-full shadow-sm">
                                                        {post.category}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="p-6">
                                                <h2 className="font-bold text-brand-primary text-lg leading-snug mb-3 group-hover:text-brand-secondary transition-colors">
                                                    {post.title}
                                                </h2>
                                                <p className="text-brand-muted text-sm leading-relaxed mb-4 line-clamp-3">
                                                    {post.excerpt}
                                                </p>
                                                <div className="flex items-center justify-between text-xs text-brand-muted">
                                                    <span className="flex items-center gap-1">
                                                        <User className="w-3.5 h-3.5" />
                                                        {post.author}
                                                    </span>
                                                    <span className="flex items-center gap-1">
                                                        <Clock className="w-3.5 h-3.5" />
                                                        {formattedDate}
                                                    </span>
                                                </div>
                                            </div>
                                        </article>
                                    );
                                })}
                            </div>
                        </RevealOnScroll>
                    ) : (
                        <div className="text-center py-16">
                            <p className="text-brand-muted text-lg">No posts in this category yet. Check back soon!</p>
                        </div>
                    )}
                </div>
            </section>

            {/* CTA Banner */}
            <section className="py-16 md:py-24 bg-brand-accent text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1)_0%,transparent_60%)]"></div>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <RevealOnScroll animation="scale-up">
                        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                            Have Questions About Your Health?
                        </h2>
                        <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                            Schedule a consultation with <Link to="/about" className="underline hover:text-white transition-colors">Dr. Jason Bang (DC, FNP)</Link> for personalized advice.
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
