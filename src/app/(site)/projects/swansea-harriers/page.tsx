import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";
import Link from "next/link";

export const metadata = { title: "Swansea Harriers Analytics Platform — Andrew Cleverly" };

/**
 * ProjectHeader - Reusable header component for project pages
 */
function ProjectHeader({ 
  title, 
  subtitle, 
  category, 
  status,
  techStack 
}: {
  title: string;
  subtitle: string;
  category: string;
  status: string;
  techStack: string[];
}) {
  return (
    <div className="bg-neutral-950 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <Link 
          href="/projects" 
          className="text-sm text-neutral-400 hover:text-neutral-200 mb-4 inline-block"
        >
          ← Back to Projects
        </Link>
        
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="px-3 py-1 bg-neutral-800 text-neutral-300 text-xs rounded-full">{category}</span>
            <span className="px-3 py-1 bg-neutral-700 text-neutral-200 text-xs rounded-full">{status}</span>
          </div>
          <h1 className="text-4xl font-bold text-neutral-100 mb-3">{title}</h1>
          <p className="text-xl text-neutral-300 leading-relaxed">{subtitle}</p>
        </div>

        <div className="border-t border-neutral-800 pt-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h3 className="text-sm font-semibold text-neutral-400 mb-3">TECHNOLOGY STACK</h3>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 border border-neutral-700 text-neutral-300 text-sm rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex-shrink-0">
              <a 
                href="https://github.com/cleverly87/swansea-harriers-analytics" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-neutral-600 hover:border-neutral-400 text-neutral-300 hover:text-neutral-100 text-sm rounded transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View Repository
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * ProjectSection - Reusable section component with consistent styling
 */
function ProjectSection({ 
  title, 
  children 
}: { 
  title: string; 
  children: React.ReactNode; 
}) {
  return (
    <section className="py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-neutral-100 mb-6">{title}</h2>
        {children}
      </div>
    </section>
  );
}

/**
 * CodeBlock - Component for displaying code snippets
 */
function CodeBlock({ 
  title, 
  language, 
  children 
}: { 
  title: string; 
  language: string; 
  children: string; 
}) {
  return (
    <div className="border border-neutral-800 rounded-lg overflow-hidden">
      <div className="bg-neutral-900 px-4 py-3 border-b border-neutral-800 flex justify-between items-center">
        <h4 className="font-semibold text-neutral-200">{title}</h4>
        <span className="text-xs text-neutral-500 bg-neutral-800 px-2 py-1 rounded">{language}</span>
      </div>
      <pre className="bg-neutral-950 p-4 overflow-x-auto">
        <code className="text-neutral-300 text-sm">{children}</code>
      </pre>
    </div>
  );
}

export default function SwanseaHarriersProjectPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Header />
      
      <ProjectHeader
        title="Swansea Harriers Analytics Platform"
        subtitle="Comprehensive athlete performance analytics system integrating Power of 10 API data with custom Python data processing, SQL database architecture, and intuitive management interfaces for coaches and team managers."
        category="Sports Analytics"
        status="Production"
        techStack={[
          "Python",
          "Flask",
          "SQLite",
          "Power of 10 API",
          "pandas",
          "HTML/CSS/JavaScript",
          "Chart.js",
          "REST API"
        ]}
      />

      <div className="flex-grow">
        <ProjectSection title="Project Overview">
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-neutral-200 mb-4">Challenge</h3>
              <p className="text-neutral-300 mb-6 leading-relaxed">
                Swansea Harriers needed a comprehensive system to track athlete performance, 
                analyze training progress, and provide coaches with actionable insights. The 
                existing manual processes were time-consuming and limited analytical capabilities.
              </p>
              
              <h3 className="text-lg font-semibold text-neutral-200 mb-4">Solution Architecture</h3>
              <ul className="text-neutral-300 space-y-2">
                <li>• Power of 10 API integration for official race results</li>
                <li>• Python data cleaning and transformation pipeline</li>
                <li>• SQLite database for performance data storage</li>
                <li>• Flask web application with coach/manager interfaces</li>
                <li>• Automated data synchronization and validation</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-neutral-200 mb-4">System Capabilities</h3>
              <div className="space-y-4">
                <div className="border border-neutral-800 rounded-lg p-4">
                  <div className="text-2xl font-bold text-neutral-200">500+</div>
                  <div className="text-sm text-neutral-400">Athletes tracked across all categories</div>
                </div>
                <div className="border border-neutral-800 rounded-lg p-4">
                  <div className="text-2xl font-bold text-neutral-200">15+ Events</div>
                  <div className="text-sm text-neutral-400">Track & field disciplines monitored</div>
                </div>
                <div className="border border-neutral-800 rounded-lg p-4">
                  <div className="text-2xl font-bold text-neutral-200">5 Years</div>
                  <div className="text-sm text-neutral-400">Historical performance data</div>
                </div>
              </div>
            </div>
          </div>
        </ProjectSection>

        <ProjectSection title="Data Integration & Processing">
          <div className="mb-8">
            <p className="text-neutral-300 mb-6">
              The system integrates with the Power of 10 rankings database, which contains official 
              race results for UK athletics. Raw data requires significant cleaning and normalization 
              before it can be used for meaningful analysis.
            </p>
            
            <CodeBlock 
              title="Power of 10 API Integration" 
              language="Python"
            >
{`import requests
import pandas as pd
from datetime import datetime, timedelta

class PowerOf10Connector:
    def __init__(self, api_base="https://www.thepowerof10.info/api/"):
        self.api_base = api_base
        self.session = requests.Session()
        
    def get_athlete_results(self, athlete_id, years_back=5):
        """Fetch athlete results with data validation"""
        end_date = datetime.now()
        start_date = end_date - timedelta(days=365 * years_back)
        
        params = {
            'athlete_id': athlete_id,
            'start_date': start_date.strftime('%Y-%m-%d'),
            'end_date': end_date.strftime('%Y-%m-%d')
        }
        
        try:
            response = self.session.get(
                f"{self.api_base}athlete/results", 
                params=params,
                timeout=30
            )
            response.raise_for_status()
            
            raw_data = response.json()
            return self._clean_results_data(raw_data)
            
        except requests.exceptions.RequestException as e:
            self.logger.error(f"API request failed: {e}")
            return []
    
    def _clean_results_data(self, raw_data):
        """Clean and normalize race result data"""
        cleaned_results = []
        
        for result in raw_data.get('results', []):
            # Normalize performance times
            performance = self._parse_performance(result.get('performance'))
            
            # Validate event classification
            event = self._standardize_event_name(result.get('event'))
            
            # Extract venue and competition info
            venue_info = self._parse_venue_data(result.get('venue'))
            
            if performance and event:
                cleaned_results.append({
                    'athlete_id': result.get('athlete_id'),
                    'performance_seconds': performance,
                    'event': event,
                    'date': result.get('date'),
                    'venue': venue_info.get('name'),
                    'competition': result.get('competition'),
                    'wind_speed': result.get('wind'),
                    'position': result.get('position')
                })
                
        return cleaned_results`}
            </CodeBlock>
          </div>
        </ProjectSection>

        <ProjectSection title="Data Processing Pipeline">
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-neutral-200 mb-4">Data Cleaning Challenges</h3>
              <div className="space-y-4 text-neutral-300">
                <div>
                  <h4 className="font-medium text-neutral-200">Performance Format Variations</h4>
                  <p className="text-sm">Race times in different formats (MM:SS.ss, H:MM:SS, etc.) requiring standardization to seconds.</p>
                </div>
                <div>
                  <h4 className="font-medium text-neutral-200">Event Name Inconsistencies</h4>
                  <p className="text-sm">Multiple naming conventions for the same event across different competitions and venues.</p>
                </div>
                <div>
                  <h4 className="font-medium text-neutral-200">Data Quality Issues</h4>
                  <p className="text-sm">Missing wind readings, incomplete venue information, and duplicate result entries.</p>
                </div>
              </div>
            </div>
            
            <div>
              <CodeBlock 
                title="Performance Time Normalization" 
                language="Python"
              >
{`def _parse_performance(self, perf_string):
    """Convert various time formats to seconds"""
    if not perf_string:
        return None
        
    # Remove common suffixes and clean
    clean_perf = perf_string.strip().upper()
    clean_perf = re.sub(r'[^0-9:.]', '', clean_perf)
    
    try:
        # Handle different time formats
        if ':' in clean_perf:
            parts = clean_perf.split(':')
            
            if len(parts) == 2:  # MM:SS.ss
                minutes = float(parts[0])
                seconds = float(parts[1])
                return minutes * 60 + seconds
                
            elif len(parts) == 3:  # H:MM:SS.ss
                hours = float(parts[0])
                minutes = float(parts[1])
                seconds = float(parts[2])
                return hours * 3600 + minutes * 60 + seconds
                
        else:  # Pure seconds
            return float(clean_perf)
            
    except (ValueError, IndexError):
        self.logger.warning(f"Could not parse performance: {perf_string}")
        return None
        
    return None`}
              </CodeBlock>
            </div>
          </div>
        </ProjectSection>

        <ProjectSection title="Database Architecture">
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-neutral-200 mb-4">Schema Design</h3>
              <ul className="text-neutral-300 space-y-2">
                <li>• <strong>Athletes Table:</strong> Personal details, categories, club membership</li>
                <li>• <strong>Results Table:</strong> Performance data with event classification</li>
                <li>• <strong>Events Table:</strong> Standardized event definitions and categories</li>
                <li>• <strong>Competitions Table:</strong> Meet information and venue details</li>
                <li>• <strong>Personal Bests:</strong> Calculated PB tracking by event</li>
                <li>• <strong>Season Bests:</strong> Annual performance tracking</li>
              </ul>
            </div>
            
            <div>
              <CodeBlock 
                title="Database Schema (SQLite)" 
                language="SQL"
              >
{`-- Athletes table with comprehensive tracking
CREATE TABLE athletes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    po10_id VARCHAR(20) UNIQUE,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    date_of_birth DATE,
    gender VARCHAR(1) CHECK (gender IN ('M', 'F')),
    category VARCHAR(10),  -- U17, U20, Senior, etc.
    club_membership_start DATE,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Results with comprehensive performance data
CREATE TABLE results (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    athlete_id INTEGER REFERENCES athletes(id),
    event_id INTEGER REFERENCES events(id),
    competition_id INTEGER REFERENCES competitions(id),
    performance_seconds REAL NOT NULL,
    wind_speed REAL,
    position INTEGER,
    is_personal_best BOOLEAN DEFAULT FALSE,
    is_season_best BOOLEAN DEFAULT FALSE,
    result_date DATE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Indexed for performance analysis queries
CREATE INDEX idx_results_athlete_event ON results(athlete_id, event_id);
CREATE INDEX idx_results_date ON results(result_date);
CREATE INDEX idx_results_performance ON results(performance_seconds);`}
              </CodeBlock>
            </div>
          </div>
        </ProjectSection>

        <ProjectSection title="Management Interface">
          <div className="prose prose-invert max-w-none">
            <p className="text-neutral-300 leading-relaxed mb-6">
              The Flask web application provides coaches and team managers with intuitive interfaces 
              for athlete monitoring, performance analysis, and training planning. The system 
              automatically calculates personal bests, season bests, and performance trends.
            </p>
            
            <h3 className="text-lg font-semibold text-neutral-200 mb-4">Key Features</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-neutral-800 rounded-lg p-4">
                <h4 className="font-semibold text-neutral-200 mb-2">Athlete Profiles</h4>
                <p className="text-sm text-neutral-400">Comprehensive athlete pages showing PBs, SBs, recent results, and performance progression charts.</p>
              </div>
              <div className="border border-neutral-800 rounded-lg p-4">
                <h4 className="font-semibold text-neutral-200 mb-2">Team Analysis</h4>
                <p className="text-sm text-neutral-400">Group performance summaries, team rankings, and comparative analysis across age categories.</p>
              </div>
              <div className="border border-neutral-800 rounded-lg p-4">
                <h4 className="font-semibold text-neutral-200 mb-2">Performance Trends</h4>
                <p className="text-sm text-neutral-400">Visual progression tracking with seasonal comparisons and improvement identification.</p>
              </div>
              <div className="border border-neutral-800 rounded-lg p-4">
                <h4 className="font-semibold text-neutral-200 mb-2">Competition Planning</h4>
                <p className="text-sm text-neutral-400">Entry standard tracking, qualification monitoring, and target time setting tools.</p>
              </div>
            </div>
          </div>
        </ProjectSection>

        <ProjectSection title="Technical Implementation">
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-neutral-200 mb-4">Architecture Decisions</h3>
              <div className="space-y-4 text-neutral-300">
                <div>
                  <h4 className="font-medium text-neutral-200">SQLite Database</h4>
                  <p className="text-sm">Chosen for simplicity and portability while providing full SQL capabilities for complex analytical queries.</p>
                </div>
                <div>
                  <h4 className="font-medium text-neutral-200">Flask Framework</h4>
                  <p className="text-sm">Lightweight web framework ideal for internal tools with rapid development and easy deployment.</p>
                </div>
                <div>
                  <h4 className="font-medium text-neutral-200">pandas Processing</h4>
                  <p className="text-sm">Powerful data manipulation capabilities for cleaning, transforming, and analyzing performance data.</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-neutral-200 mb-4">System Benefits</h3>
              <ul className="text-neutral-300 space-y-2">
                <li>• Automated data synchronization reduces manual entry</li>
                <li>• Historical trend analysis identifies training patterns</li>
                <li>• Performance benchmarking across age groups</li>
                <li>• Competition readiness assessment tools</li>
                <li>• Injury risk indicators through performance drops</li>
                <li>• Training load optimization recommendations</li>
              </ul>
            </div>
          </div>
        </ProjectSection>

        <ProjectSection title="Performance Analytics">
          <div className="text-neutral-300">
            <p className="mb-6 leading-relaxed">
              The system provides advanced analytics capabilities that help coaches make data-driven 
              decisions about training programs, competition scheduling, and athlete development 
              strategies.
            </p>
            
            <CodeBlock 
              title="Performance Analysis Functions" 
              language="Python"
            >
{`def calculate_performance_trends(athlete_id, event, months=12):
    """Calculate performance trends and improvement rates"""
    query = """
        SELECT result_date, performance_seconds
        FROM results r
        JOIN athletes a ON r.athlete_id = a.id
        JOIN events e ON r.event_id = e.id
        WHERE a.id = ? AND e.name = ?
        AND result_date >= date('now', '-{} months')
        ORDER BY result_date
    """.format(months)
    
    results = db.execute(query, [athlete_id, event]).fetchall()
    
    if len(results) < 3:
        return None
        
    # Convert to pandas for analysis
    df = pd.DataFrame(results, columns=['date', 'performance'])
    df['date'] = pd.to_datetime(df['date'])
    
    # Calculate trend line
    x = (df['date'] - df['date'].min()).dt.days
    z = np.polyfit(x, df['performance'], 1)
    trend_slope = z[0]  # seconds per day
    
    # Performance improvement rate
    annual_improvement = trend_slope * -365  # negative slope = improvement
    
    # Recent form (last 3 months vs previous period)
    recent_avg = df[df['date'] >= df['date'].max() - pd.Timedelta(days=90)]['performance'].mean()
    previous_avg = df[df['date'] < df['date'].max() - pd.Timedelta(days=90)]['performance'].mean()
    
    return {
        'trend_slope': trend_slope,
        'annual_improvement_seconds': annual_improvement,
        'recent_form_change': previous_avg - recent_avg,
        'consistency_score': 1 / df['performance'].std() if df['performance'].std() > 0 else 0
    }`}
            </CodeBlock>
          </div>
        </ProjectSection>
      </div>
      
      <Footer />
    </main>
  );
}