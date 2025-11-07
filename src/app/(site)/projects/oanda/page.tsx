import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";
import Link from "next/link";

export const metadata = { title: "OANDA Trading Bot System — Andrew Cleverly" };

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
              <Link 
                href="/private-repo-access"
                className="inline-flex items-center gap-2 px-4 py-2 border border-orange-600 hover:border-orange-500 text-orange-300 hover:text-orange-200 text-sm rounded transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Request Repository Access
              </Link>
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

export default function OandaProjectPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Header />
      
      <ProjectHeader
        title="OANDA Trading Bot System"
        subtitle="Automated forex trading platform with custom algorithmic strategies, real-time signal execution, and comprehensive risk management via OANDA's professional trading API."
        category="Financial Technology"
        status="Production"
        techStack={[
          "Python",
          "OANDA v20 API",
          "pandas",
          "numpy",
          "SQLite",
          "asyncio",
          "APScheduler",
          "Logging"
        ]}
      />

      <div className="flex-grow">
        <ProjectSection title="Project Overview">
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-neutral-200 mb-4">Challenge</h3>
              <p className="text-neutral-300 mb-6 leading-relaxed">
                Design and implement a fully automated forex trading system capable of executing 
                multiple trading strategies simultaneously while maintaining strict risk controls 
                and comprehensive logging for performance analysis.
              </p>
              
              <h3 className="text-lg font-semibold text-neutral-200 mb-4">System Architecture</h3>
              <ul className="text-neutral-300 space-y-2">
                <li>• Modular strategy framework with pluggable algorithms</li>
                <li>• Real-time market data processing and signal generation</li>
                <li>• Multi-timeframe analysis and decision making</li>
                <li>• Automated position sizing and risk management</li>
                <li>• Comprehensive trade logging and performance tracking</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-neutral-200 mb-4">Performance Metrics</h3>
              <div className="space-y-4">
                <div className="border border-neutral-800 rounded-lg p-4">
                  <div className="text-2xl font-bold text-neutral-200">24/7</div>
                  <div className="text-sm text-neutral-400">Autonomous operation with monitoring</div>
                </div>
                <div className="border border-neutral-800 rounded-lg p-4">
                  <div className="text-2xl font-bold text-neutral-200">5 Strategies</div>
                  <div className="text-sm text-neutral-400">Simultaneous algorithm execution</div>
                </div>
                <div className="border border-neutral-800 rounded-lg p-4">
                  <div className="text-2xl font-bold text-neutral-200">1-5 sec</div>
                  <div className="text-sm text-neutral-400">Signal to execution latency</div>
                </div>
              </div>
            </div>
          </div>
        </ProjectSection>

        <ProjectSection title="Trading Strategy Framework">
          <div className="mb-8">
            <p className="text-neutral-300 mb-6">
              The system implements multiple trading strategies with configurable parameters 
              and risk controls. Each strategy operates independently while sharing common 
              infrastructure for market data, execution, and risk management.
            </p>
            
            <CodeBlock 
              title="Strategy Base Class Implementation" 
              language="Python"
            >
{`class TradingStrategy:
    def __init__(self, name, config):
        self.name = name
        self.config = config
        self.positions = {}
        self.risk_manager = RiskManager(config)
        
    def analyze_market(self, market_data):
        """Override in strategy implementations"""
        raise NotImplementedError
        
    def generate_signals(self, analysis):
        """Generate buy/sell signals based on analysis"""
        signals = []
        for instrument, data in analysis.items():
            signal = self._evaluate_signal(instrument, data)
            if signal and self.risk_manager.validate_signal(signal):
                signals.append(signal)
        return signals
        
    def execute_trades(self, signals):
        """Execute validated trading signals"""
        for signal in signals:
            try:
                order = self._create_order(signal)
                response = self.api.place_order(order)
                self._log_execution(signal, response)
            except Exception as e:
                self.logger.error(f"Execution failed: {e}")`}
            </CodeBlock>
          </div>
        </ProjectSection>

        <ProjectSection title="Risk Management System">
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-neutral-200 mb-4">Risk Controls</h3>
              <div className="space-y-4 text-neutral-300">
                <div>
                  <h4 className="font-medium text-neutral-200">Position Sizing</h4>
                  <p className="text-sm">Dynamic position sizing based on account equity, volatility, and strategy confidence levels.</p>
                </div>
                <div>
                  <h4 className="font-medium text-neutral-200">Drawdown Limits</h4>
                  <p className="text-sm">Automatic strategy suspension when maximum drawdown thresholds are exceeded.</p>
                </div>
                <div>
                  <h4 className="font-medium text-neutral-200">Correlation Monitoring</h4>
                  <p className="text-sm">Real-time correlation analysis to prevent over-exposure to correlated currency pairs.</p>
                </div>
              </div>
            </div>
            
            <div>
              <CodeBlock 
                title="Risk Calculation Module" 
                language="Python"
              >
{`def calculate_position_size(self, signal, account_balance):
    # Kelly Criterion with conservative scaling
    win_rate = self.get_strategy_win_rate()
    avg_win_loss_ratio = self.get_avg_win_loss_ratio()
    
    kelly_fraction = (win_rate * avg_win_loss_ratio - (1 - win_rate)) / avg_win_loss_ratio
    
    # Conservative scaling (25% of Kelly)
    risk_fraction = kelly_fraction * 0.25
    
    # Apply maximum risk per trade (2%)
    max_risk = account_balance * 0.02
    
    # Calculate position size based on stop loss
    stop_loss_pips = signal.stop_loss
    pip_value = self.get_pip_value(signal.instrument)
    
    position_size = min(
        max_risk / (stop_loss_pips * pip_value),
        account_balance * risk_fraction / (stop_loss_pips * pip_value)
    )
    
    return position_size`}
              </CodeBlock>
            </div>
          </div>
        </ProjectSection>

        <ProjectSection title="Technical Implementation">
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-neutral-200 mb-4">System Components</h3>
              <ul className="text-neutral-300 space-y-2">
                <li>• <strong>Market Data Handler:</strong> Real-time price feed processing</li>
                <li>• <strong>Strategy Engine:</strong> Signal generation and validation</li>
                <li>• <strong>Order Management:</strong> Trade execution and monitoring</li>
                <li>• <strong>Risk Controller:</strong> Position and portfolio risk management</li>
                <li>• <strong>Performance Tracker:</strong> Trade analysis and reporting</li>
                <li>• <strong>Alert System:</strong> Error handling and notifications</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-neutral-200 mb-4">OANDA API Integration</h3>
              <ul className="text-neutral-300 space-y-2">
                <li>• Real-time streaming price data</li>
                <li>• Market order execution with slippage control</li>
                <li>• Position monitoring and modification</li>
                <li>• Account balance and margin tracking</li>
                <li>• Historical data for backtesting</li>
                <li>• Rate limiting and connection management</li>
              </ul>
            </div>
          </div>
        </ProjectSection>

        <ProjectSection title="Development Decisions">
          <div className="prose prose-invert max-w-none">
            <p className="text-neutral-300 leading-relaxed mb-6">
              This project required balancing performance, reliability, and maintainability while 
              handling real financial transactions. Every architectural decision was made with 
              fault tolerance and risk management as primary concerns.
            </p>
            
            <h3 className="text-lg font-semibold text-neutral-200 mb-4">Key Design Choices</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-neutral-800 rounded-lg p-4">
                <h4 className="font-semibold text-neutral-200 mb-2">Asynchronous Architecture</h4>
                <p className="text-sm text-neutral-400">Used asyncio for concurrent market data processing and order execution without blocking strategy calculations.</p>
              </div>
              <div className="border border-neutral-800 rounded-lg p-4">
                <h4 className="font-semibold text-neutral-200 mb-2">SQLite Database</h4>
                <p className="text-sm text-neutral-400">Local database for trade history and performance metrics, ensuring data persistence without external dependencies.</p>
              </div>
              <div className="border border-neutral-800 rounded-lg p-4">
                <h4 className="font-semibold text-neutral-200 mb-2">Modular Strategies</h4>
                <p className="text-sm text-neutral-400">Plugin-based strategy system allowing easy addition of new algorithms without modifying core infrastructure.</p>
              </div>
              <div className="border border-neutral-800 rounded-lg p-4">
                <h4 className="font-semibold text-neutral-200 mb-2">Comprehensive Logging</h4>
                <p className="text-sm text-neutral-400">Detailed logging of all decisions, trades, and system events for performance analysis and debugging.</p>
              </div>
            </div>
          </div>
        </ProjectSection>

        <ProjectSection title="Security & Compliance">
          <div className="text-neutral-300">
            <p className="mb-6 leading-relaxed">
              Trading systems require robust security practices and compliance with financial regulations. 
              This implementation includes secure credential management, audit trails, and risk controls.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-neutral-200 mb-3">Security Measures</h4>
                <ul className="text-sm space-y-1">
                  <li>• Environment-based credential storage</li>
                  <li>• API key rotation procedures</li>
                  <li>• Encrypted local data storage</li>
                  <li>• Network timeout and retry logic</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-neutral-200 mb-3">Audit & Compliance</h4>
                <ul className="text-sm space-y-1">
                  <li>• Complete trade audit trail</li>
                  <li>• Performance reporting</li>
                  <li>• Risk exposure monitoring</li>
                  <li>• Regulatory trade sizing limits</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-neutral-200 mb-3">Monitoring</h4>
                <ul className="text-sm space-y-1">
                  <li>• Real-time system health checks</li>
                  <li>• Automated alert notifications</li>
                  <li>• Performance metric tracking</li>
                  <li>• Error rate monitoring</li>
                </ul>
              </div>
            </div>
          </div>
        </ProjectSection>
      </div>
      
      <Footer />
    </main>
  );
}