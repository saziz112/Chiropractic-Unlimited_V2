import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { BLOG_POSTS } from '../blogPosts';
import { ArrowRight, Clock, User } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

export const LatestBlog: React.FC = () => {
    const navigate = useNavigate();
    const latestPosts = BLOG_POSTS.slice(0, 3);

    if (latestPosts.length === 0) return null;

    return (
        <section className="py-16 md:py-24 bg-white relative overflow-hidden">
            <div className="absolute -top-20 -left-20 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <RevealOnScroll animation="fade-up">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <span className="text-brand-accent font-semibold tracking-widest uppercase text-xs mb-4 block">Latest Articles</span>
                        <h2 className="text-4xl md:text-5xl font-display text-brand-primary mb-4">From the Blog</h2>
                        <p className="text-brand-muted text-lg leading-relaxed">
                            Evidence-based health insights from Dr. Jason Bang, DC & FNP.
                        </p>
                    </div>
                </RevealOnScroll>

                <RevealOnScroll animation="stagger">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        {latestPosts.map((post) => {
                            const formattedDate = new Date(post.publishDate).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric',
                            });

                            return (
                                <article
                                    key={post.slug}
                                    className="group cursor-pointer bg-brand-bg rounded-2xl overflow-hidden shadow-sm border border-brand-primary/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
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
                                        <h3 className="font-bold text-brand-primary text-lg leading-snug mb-3 group-hover:text-brand-secondary transition-colors">
                                            {post.title}
                                        </h3>
                                        <p className="text-brand-muted text-sm leading-relaxed mb-4 line-clamp-2">
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

                <RevealOnScroll animation="fade-up">
                    <div className="text-center">
                        <Link
                            to="/blog"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-primary text-white font-bold rounded-full hover:bg-brand-primary/90 hover:-translate-y-0.5 transition-all duration-300 shadow-lg hover:shadow-xl group"
                        >
                            View All Articles
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
};
