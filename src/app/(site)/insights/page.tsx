import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

export const metadata = { title: "Insights — Andrew Cleverly" };

/**
 * LinkedIn Post Component
 */
function LinkedInPost({ 
  date, 
  excerpt, 
  url, 
  likes, 
  comments 
}: {
  date: string;
  excerpt: string;
  url: string;
  likes?: number;
  comments?: number;
}) {
  return (
    <div className="border border-neutral-800 rounded-lg p-6 hover:border-neutral-700 transition-colors">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </div>
        <div>
          <h3 className="font-semibold text-neutral-200">LinkedIn</h3>
          <p className="text-xs text-neutral-500">{date}</p>
        </div>
      </div>
      
      <p className="text-neutral-300 mb-4 leading-relaxed">{excerpt}</p>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 text-sm text-neutral-500">
          {likes && (
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558-.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z"/>
              </svg>
              {likes}
            </span>
          )}
          {comments && (
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              {comments}
            </span>
          )}
        </div>
        <a 
          href={url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
        >
          View on LinkedIn →
        </a>
      </div>
    </div>
  );
}

/**
 * Video Preview Component
 */
function VideoPreview({ 
  title, 
  description, 
  thumbnail, 
  duration, 
  url,
  releaseDate,
  isComingSoon = false
}: {
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  url: string;
  releaseDate: string;
  isComingSoon?: boolean;
}) {
  return (
    <div className="border border-neutral-800 rounded-lg overflow-hidden hover:border-neutral-700 transition-colors">
      <div className="aspect-video bg-neutral-900 relative">
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-neutral-800 to-neutral-900">
          <div className="text-center">
            <svg className="w-16 h-16 text-neutral-600 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
            <p className="text-neutral-400 text-sm font-medium">Coming Soon</p>
          </div>
        </div>
        {isComingSoon && (
          <div className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
            Expected: {releaseDate}
          </div>
        )}
        <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
          ~{duration}
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-neutral-200 mb-2">{title}</h3>
        <p className="text-sm text-neutral-400 mb-3">{description}</p>
        {isComingSoon ? (
          <div className="text-sm text-neutral-500">
            Release planned for {releaseDate}
          </div>
        ) : (
          <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
          >
            Watch Video →
          </a>
        )}
      </div>
    </div>
  );
}

export default function InsightsPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 px-6 bg-neutral-950">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-neutral-100 mb-6">Insights & Thought Leadership</h1>
          <p className="text-xl text-neutral-300 leading-relaxed">
            Sharing expertise on API documentation, developer experience, and documentation-as-infrastructure. 
            From LinkedIn insights to hands-on video demonstrations, see the strategies and practices that drive results.
          </p>
        </div>
      </section>

      <div className="flex-grow py-12 px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Video Demonstrations Section */}
          <section className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-semibold text-neutral-100">Video Demonstrations</h2>
              <span className="text-sm text-neutral-500">Practical expertise in action</span>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Example video previews - replace with actual content */}
              <VideoPreview
                title="OpenAPI 3.1 Advanced Patterns"
                description="Demonstrating complex schema design and documentation patterns for enterprise APIs."
                thumbnail="/api/placeholder/400/225"
                duration="8:32"
                url="https://www.youtube.com/watch?v=example"
                releaseDate="December 2025"
                isComingSoon={true}
              />
              
              <VideoPreview
                title="Redocly Enterprise Workflow"
                description="Setting up automated documentation pipelines with CI/CD integration and governance."
                thumbnail="/api/placeholder/400/225"
                duration="12:15"
                url="https://www.youtube.com/watch?v=example"
                releaseDate="January 2026"
                isComingSoon={true}
              />
              
              <VideoPreview
                title="Doc-as-Code Implementation"
                description="Complete walkthrough of implementing documentation-as-infrastructure methodology."
                thumbnail="/api/placeholder/400/225"
                duration="15:45"
                url="https://www.youtube.com/watch?v=example"
                releaseDate="February 2026"
                isComingSoon={true}
              />
            </div>
          </section>

          {/* LinkedIn Posts Section */}
          <section className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-semibold text-neutral-100">Latest LinkedIn Insights</h2>
              <a 
                href="https://www.linkedin.com/in/andrewcleverly/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
              >
                Follow on LinkedIn →
              </a>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Actual LinkedIn content */}
              <LinkedInPost
                date="November 2, 2025"
                excerpt="What if your API documentation was your company's most undervalued product? Most organizations treat documentation as a necessary evil—something that happens after the real work is done. But what if I told you that your API docs could be driving revenue, reducing support costs, and accelerating developer adoption faster than your actual API features?"
                url="https://www.linkedin.com/pulse/what-your-api-documentation-best-performing-product-andrew-cleverly-idzoe/?trackingId=MwIXrmpGQielVI%2Fllr21xg%3D%3D"
                likes={365}
                comments={0}
              />
              
              {/* Planned content */}
              <div className="border border-neutral-800 rounded-lg p-6 bg-neutral-900/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-200">LinkedIn</h3>
                    <p className="text-xs text-neutral-500">Coming Soon</p>
                  </div>
                </div>
                
                <h4 className="font-medium text-neutral-300 mb-2">Why OpenAPI Files Do More Than Documentation</h4>
                <p className="text-neutral-400 mb-4 text-sm leading-relaxed">
                  Upcoming article exploring how well-structured OpenAPI specifications drive code generation, 
                  testing automation, governance, and developer experience far beyond simple API documentation.
                </p>
                
                <div className="text-xs text-blue-400">
                  Article planned for November 2025
                </div>
              </div>
            </div>
          </section>

          {/* Knowledge Sharing Section */}
          <section>
            <div className="bg-neutral-900 rounded-lg p-8 text-center">
              <h3 className="text-xl font-semibold text-neutral-100 mb-4">Looking for Specific Insights?</h3>
              <p className="text-neutral-300 mb-6">
                Have questions about API documentation, developer experience, or documentation infrastructure? 
                Let's start a conversation about your specific challenges.
              </p>
              <Link 
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-neutral-800 hover:bg-neutral-700 text-neutral-100 rounded-lg font-medium transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </section>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}