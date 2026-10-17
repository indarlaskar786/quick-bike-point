import React from 'react';
import { Star, ExternalLink, CheckCircle2, MessageSquareQuote } from 'lucide-react';
import { REVIEWS, BUSINESS_CONFIG } from '../data/businessData';

export const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-16 sm:py-24 bg-[#090b10] relative overflow-hidden">
      {/* Decorative backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-80 bg-amber-500/5 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold tracking-wider uppercase mb-3">
            <span>Customer Reviews</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Trusted by Local Riders
          </h2>
          <p className="mt-4 text-base text-neutral-300">
            Real customer impressions from two-wheeler owners in and around Panathur.
          </p>
        </div>

        {/* Overall Google Scorecard */}
        <div className="max-w-2xl mx-auto mb-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-neutral-900 via-neutral-900/90 to-neutral-950 border border-neutral-800 shadow-2xl shadow-black/60 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            
            {/* Left Score */}
            <div className="flex items-center gap-4 text-left">
              <div className="text-5xl sm:text-6xl font-black text-white tracking-tight font-racing">
                {BUSINESS_CONFIG.rating}
              </div>
              <div>
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <div className="text-sm font-semibold text-neutral-300 mt-1">
                  Based on {BUSINESS_CONFIG.reviewsCount} reviews
                </div>
                <div className="text-xs text-neutral-500">
                  Google Maps Business Rating
                </div>
              </div>
            </div>

            {/* Right: CTA button */}
            <a
              href={BUSINESS_CONFIG.mapsSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-neutral-800 hover:bg-neutral-700 hover:text-orange-400 border border-neutral-700 transition-all shadow-md shrink-0"
            >
              <span>View on Google</span>
              <ExternalLink className="w-4 h-4" />
            </a>

          </div>
        </div>

        {/* Reviews Grid: Only the Real Snippets Provided */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className={`relative rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between ${
                review.highlight
                  ? 'bg-neutral-900/90 border border-neutral-700/80 hover:border-orange-500/50 shadow-lg shadow-black/50'
                  : 'bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700'
              }`}
            >
              <div>
                {/* Quote Icon & Stars */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <MessageSquareQuote className="w-6 h-6 text-neutral-700" />
                </div>

                {/* Review Snippet Content */}
                <blockquote className="text-base sm:text-lg font-medium text-neutral-100 leading-snug my-2">
                  "{review.snippet}"
                </blockquote>
              </div>

              {/* Author Footer */}
              <div className="mt-6 pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className={`w-7 h-7 rounded-full ${review.avatarColor} text-white flex items-center justify-center font-bold text-xs`}>
                    {review.author.charAt(0)}
                  </div>
                  <div>
                    <span className="font-semibold text-neutral-200 block">
                      {review.author}
                    </span>
                    <span className="text-[11px] text-neutral-400">
                      {review.timeAgo}
                    </span>
                  </div>
                </div>

                <span className="text-[11px] font-medium text-neutral-400">
                  Customer Snippet
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Note stating genuine review policy */}
        <div className="mt-10 text-center text-xs text-neutral-400 max-w-xl mx-auto">
          Snippets shown are genuine feedback from Google Maps for Quick Bike Point. Click "View on Google" to read the complete review feed on Google Maps.
        </div>

      </div>
    </section>
  );
};
