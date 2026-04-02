import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { BLOG_POSTS } from '../blogPosts';
import { BUSINESS_INFO } from '../constants';
import { ArrowLeft, ArrowRight, CalendarCheck, Phone, Clock, User, Tag } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';
import { StructuredData } from './StructuredData';
import { BlogContentRenderer } from './BlogContentRenderer';

export const BlogDetailPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();
    const post = BLOG_POSTS.find(p => p.slug === slug);
    const today = new Date().toISOString().split('T')[0];
    const relatedPosts = BLOG_POSTS.filter(p => p.slug !== slug && p.publishDate <= today).slice(0, 3);

    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-brand-bg">
                <div className="text-center">
                    <h1 className="text-4xl font-display text-brand-primary mb-4">Post Not Found</h1>
                    <Link to="/blog" className="text-brand-accent hover:underline flex items-center justify-center gap-2">
                        <ArrowLeft className="w-4 h-4" /> Back to Blog
                    </Link>
                </div>
            </div>
        );
    }

    const schemas = [
        {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.excerpt,
            "image": post.featuredImage,
            "datePublished": post.publishDate,
            "dateModified": post.lastUpdated || post.publishDate,
            "author": {
                "@type": "Person",
                "name": post.author,
                "jobTitle": "Doctor of Chiropractic & Family Nurse Practitioner",
                "url": "https://chirounlimitedwellness.com/about",
                "image": "https://i.ibb.co/cXh09B2q/Jason-B.jpg"
            },
            "publisher": {
                "@type": "Organization",
                "name": "Chiropractic Unlimited",
                "url": "https://chirounlimitedwellness.com",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://chirounlimitedwellness.com/Logo_Chiro%20Unlimited%20White%20Sidetrack.png"
                }
            },
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": `https://chirounlimitedwellness.com/blog/${slug}`
            },
            "url": `https://chirounlimitedwellness.com/blog/${slug}`,
            "wordCount": post.sections.reduce((acc, s) => acc + (s.content?.split(' ').length || 0) + (s.items?.join(' ').split(' ').length || 0), 0),
            "keywords": post.tags.join(', ')
        },
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
                    "name": "Blog",
                    "item": "https://chirounlimitedwellness.com/blog"
                },
                {
                    "@type": "ListItem",
                    "position": 3,
                    "name": post.title,
                    "item": `https://chirounlimitedwellness.com/blog/${slug}`
                }
            ]
        }
    ];

    const formattedDate = new Date(post.publishDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
    const formattedUpdated = post.lastUpdated ? new Date(post.lastUpdated).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }) : null;

    return (
        <>
            <Helmet>
                <title>{post.metaTitle}</title>
                <meta name="description" content={post.metaDescription} />
                <link rel="canonical" href={`https://chirounlimitedwellness.com/blog/${slug}`} />
                <meta property="og:title" content={post.metaTitle} />
                <meta property="og:description" content={post.metaDescription} />
                <meta property="og:image" content={post.featuredImage} />
                <meta property="og:url" content={`https://chirounlimitedwellness.com/blog/${slug}`} />
                <meta property="og:type" content="article" />
                <meta property="og:site_name" content="Chiropractic Unlimited" />
                <meta property="og:locale" content="en_US" />
                <meta property="article:published_time" content={post.publishDate} />
                {post.lastUpdated && <meta property="article:modified_time" content={post.lastUpdated} />}
                <meta property="article:author" content={post.author} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={post.metaTitle} />
                <meta name="twitter:description" content={post.metaDescription} />
                <meta name="twitter:image" content={post.featuredImage} />
            </Helmet>
            <StructuredData data={schemas} />

            {/* Hero Banner */}
            <section className="relative min-h-[50vh] flex items-end bg-brand-primary overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={post.featuredImage}
                        alt={post.featuredImageAlt}
                        className="w-full h-full object-cover opacity-25 transition-transform duration-[20s] ease-out hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-primary via-brand-primary/80 to-brand-primary/40"></div>
                </div>

                <div className="absolute top-20 right-10 w-64 h-64 bg-brand-accent/10 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-20 left-10 w-48 h-48 bg-brand-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pb-16 pt-40">
                    <Link to="/blog" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8 group">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Blog
                    </Link>

                    <RevealOnScroll animation="slide-left">
                        <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase bg-brand-accent/20 text-brand-accent rounded-full mb-4">
                            {post.category}
                        </span>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white leading-tight mb-6">
                            {post.title}
                        </h1>
                        <div className="flex flex-wrap items-center gap-4 text-white/70 text-sm">
                            <span className="flex items-center gap-1.5">
                                <User className="w-4 h-4" />
                                {post.author}, {post.authorCredentials}
                            </span>
                            <span className="flex items-center gap-1.5">
                                <Clock className="w-4 h-4" />
                                {formattedDate}
                                {formattedUpdated && <span className="text-white/50 ml-1">(Updated {formattedUpdated})</span>}
                            </span>
                            <span className="flex items-center gap-1.5">
                                <Tag className="w-4 h-4" />
                                {post.readTime}
                            </span>
                        </div>
                    </RevealOnScroll>
                </div>
            </section>

            {/* Article Content */}
            <article className="py-16 md:py-24 bg-brand-bg">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <RevealOnScroll animation="fade-up">
                        <BlogContentRenderer sections={post.sections} />
                    </RevealOnScroll>
                </div>
            </article>

            {/* Related Resources */}
            {post.relatedLinks.length > 0 && (
                <section className="py-12 bg-white">
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                        <RevealOnScroll animation="fade-up">
                            <h2 className="text-2xl font-display text-brand-primary mb-6">Related Resources</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {post.relatedLinks.map((link, idx) => (
                                    <Link
                                        key={idx}
                                        to={link.href}
                                        className="flex items-center gap-3 p-4 rounded-xl bg-brand-bg border border-brand-primary/5 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group"
                                    >
                                        <ArrowRight className="w-4 h-4 text-brand-accent shrink-0 group-hover:translate-x-1 transition-transform" />
                                        <span className="text-brand-text font-medium">{link.label}</span>
                                    </Link>
                                ))}
                            </div>
                        </RevealOnScroll>
                    </div>
                </section>
            )}

            {/* FAQs (visual only, no schema) */}
            {post.faqs.length > 0 && (
                <section className="py-16 md:py-24 bg-brand-bg">
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                        <RevealOnScroll animation="scale-up">
                            <div className="text-center mb-12">
                                <span className="text-brand-accent font-semibold tracking-widest uppercase text-xs mb-4 block">Got Questions?</span>
                                <h2 className="text-3xl md:text-4xl font-display text-brand-primary">Frequently Asked Questions</h2>
                            </div>
                        </RevealOnScroll>

                        <div className="space-y-4">
                            {post.faqs.map((faq, idx) => (
                                <RevealOnScroll key={idx} delay={idx * 100} animation={idx % 2 === 0 ? 'slide-left' : 'slide-right'}>
                                    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-brand-primary/5 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                                        <h3 className="font-bold text-brand-primary text-lg mb-3">{faq.question}</h3>
                                        <p className="text-brand-muted leading-relaxed">{faq.answer}</p>
                                    </div>
                                </RevealOnScroll>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA Banner */}
            <section className="py-16 md:py-24 bg-brand-accent text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1)_0%,transparent_60%)]"></div>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <RevealOnScroll animation="scale-up">
                        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                            Ready to Take the Next Step?
                        </h2>
                        <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                            Schedule a consultation with <Link to="/about" className="underline hover:text-white transition-colors">Dr. Jason Bang (DC, FNP)</Link> and find out how chiropractic care can help you.
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

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
                <section className="py-16 md:py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <RevealOnScroll animation="fade-up">
                            <div className="text-center mb-12">
                                <span className="text-brand-accent font-semibold tracking-widest uppercase text-xs mb-4 block">Keep Reading</span>
                                <h2 className="text-3xl md:text-4xl font-display text-brand-primary">More from the Blog</h2>
                            </div>
                        </RevealOnScroll>

                        <RevealOnScroll animation="stagger">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {relatedPosts.map((related) => (
                                    <div
                                        key={related.slug}
                                        className="group cursor-pointer"
                                        onClick={() => navigate(`/blog/${related.slug}`)}
                                    >
                                        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl shadow-sm bg-white mb-4 transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-1">
                                            <img
                                                src={related.featuredImage}
                                                alt={related.featuredImageAlt}
                                                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                                loading="lazy"
                                            />
                                            <div className="absolute top-3 left-3">
                                                <span className="px-2.5 py-1 text-xs font-semibold bg-white/90 text-brand-primary rounded-full">
                                                    {related.category}
                                                </span>
                                            </div>
                                        </div>
                                        <h3 className="font-bold text-brand-primary text-lg leading-snug mb-2 group-hover:text-brand-secondary transition-colors">
                                            {related.title}
                                        </h3>
                                        <p className="text-brand-muted text-sm line-clamp-2">{related.excerpt}</p>
                                    </div>
                                ))}
                            </div>
                        </RevealOnScroll>
                    </div>
                </section>
            )}
        </>
    );
};
