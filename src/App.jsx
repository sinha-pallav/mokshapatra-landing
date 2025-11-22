import React, { useState, useEffect } from 'react';
import { Check, Sparkles, Dices, MessageCircle, TrendingUp } from 'lucide-react';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [diceRoll, setDiceRoll] = useState(1);

  // Animated dice rolling effect
  useEffect(() => {
    const interval = setInterval(() => {
      setDiceRoll(Math.floor(Math.random() * 6) + 1);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // We'll add Google Sheets integration in next step
    // For now, just simulate submission
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      setEmail('');
      
      setTimeout(() => {
        setSubmitStatus('');
      }, 5000);
    }, 1000);
  };

  return (
    <div className="landing-page">
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-container">
          <div className="logo">Mokshapatra</div>
          <button className="login-btn">Login</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Stop Guessing What You Need to Heal Today
            </h1>
            <p className="hero-subtitle">
              Roll sacred dice each morning. Receive the exact practice your soul needs. 
              Track your transformation on a personalized 100-square journey to inner peace.
            </p>
            
            <div className="cta-buttons">
              <button className="cta-primary" onClick={() => document.getElementById('email-form').scrollIntoView({ behavior: 'smooth' })}>
                Join the Waitlist
              </button>
              <button className="cta-secondary" onClick={() => document.getElementById('how-it-works').scrollIntoView({ behavior: 'smooth' })}>
                Watch How It Works
              </button>
            </div>

            <div className="trust-badge">
              <Sparkles size={16} className="trust-icon" />
              <span>Created by Pallav, Certified Energy Healer with 5 Years Personal Practice</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="dice-container">
              <div className="dice-glow"></div>
              <div className="dice">
                <Dices size={80} className="dice-icon" />
                <div className="dice-number">{diceRoll}</div>
              </div>
              <p className="dice-caption">Roll → Discover → Transform</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="problem">
        <div className="container">
          <h2 className="section-title">Does This Sound Familiar?</h2>
          
          <div className="pain-points">
            <div className="pain-point">
              <Check className="check-icon" />
              <p>You try to meditate but can't maintain consistency</p>
            </div>
            <div className="pain-point">
              <Check className="check-icon" />
              <p>Spiritual books pile up unread while you scroll social media</p>
            </div>
            <div className="pain-point">
              <Check className="check-icon" />
              <p>You feel lost each morning — which practice do you actually need?</p>
            </div>
            <div className="pain-point">
              <Check className="check-icon" />
              <p>You're healing alone and wish someone truly understood your journey</p>
            </div>
            <div className="pain-point">
              <Check className="check-icon" />
              <p>You can't tell if you're making progress or just spinning your wheels</p>
            </div>
            <div className="pain-point">
              <Check className="check-icon" />
              <p>Generic advice doesn't fit your specific wounds and patterns</p>
            </div>
          </div>

          <div className="empathy-statement">
            <p className="empathy-text">
              You're not broken. You don't lack discipline.
            </p>
            <p className="empathy-highlight">
              You just need a practice that adapts to <strong>you</strong> — not the other way around.
            </p>
          </div>

          <div className="transition-hook">
            What if your spiritual practice <strong>found you</strong> each morning, 
            perfectly tailored to where you are right now?
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="solution">
        <div className="container">
          <h2 className="section-title">Meet Mokshapatra: Your Daily Spiritual Companion</h2>
          
          <div className="founder-story">
            <div className="founder-content">
              <p className="greeting">Hi, I'm Pallav.</p>
              
              <p>
                Five years ago, I was exactly where you are — trying every spiritual practice, 
                never sticking to anything, feeling alone on the healing journey.
              </p>
              
              <p>
                As a certified energy healer, I knew the practices worked. 
                But <strong>I</strong> wasn't working with the practices consistently.
              </p>
              
              <p>
                So I built what I needed to exist: A guide who meets me where I am each morning. 
                Who remembers my patterns. Who sees my growth when I can't see it myself.
              </p>
              
              <p>
                I've been using Mokshapatra every day for the past year. 
                I'm currently on square 47 of my own journey.
              </p>
              
              <p className="invitation">
                Now I'm inviting you into what changed my life.
              </p>
            </div>
          </div>

          <div className="concept">
            <h3 className="concept-title">The Concept</h3>
            <p className="concept-text">
              <strong>Mokshapatra combines a 2,000-year-old spiritual board game with modern AI 
              to create your personalized 100-square journey to inner peace.</strong>
            </p>
            <p>
              Each morning, roll sacred dice to discover today's practice — perfectly matched 
              to your emotional state, current wounds, and available time.
            </p>
            <p>
              No more decision fatigue. No more generic advice. Just 10 minutes with a companion 
              who remembers your journey and adapts to your growth.
            </p>
          </div>

          <div className="promise">
            <h3 className="promise-title">No more guessing. No more quitting. No more going it alone.</h3>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="how-it-works">
        <div className="container">
          <h2 className="section-title">Your Morning Journey in 3 Simple Steps</h2>
          
          <div className="steps">
            <div className="step">
              <div className="step-icon">
                <Dices size={48} />
              </div>
              <h3 className="step-title">1. Roll the Dice</h3>
              <p className="step-description">
                Each morning, roll sacred dice to discover which of your 100 personalized squares 
                calls to you today. What you need finds you when you're ready.
              </p>
              <p className="step-note">
                Based on your initial assessment, your board focuses on YOUR specific wounds and growth areas
              </p>
            </div>

            <div className="step">
              <div className="step-icon">
                <MessageCircle size={48} />
              </div>
              <h3 className="step-title">2. Have a Conversation</h3>
              <p className="step-description">
                Share what's alive for you right now. Our AI companion asks Socratic questions 
                that help you understand your patterns and uncover your own wisdom. Takes 5-7 minutes.
              </p>
              <p className="step-note">
                The AI remembers your past conversations and builds on your insights over time
              </p>
            </div>

            <div className="step">
              <div className="step-icon">
                <TrendingUp size={48} />
              </div>
              <h3 className="step-title">3. Practice & Transform</h3>
              <p className="step-description">
                Get a practice tailored to your wound, energy level, and available time. 
                From 5-minute breathwork to 20-minute somatic exercises. You choose the depth.
              </p>
              <p className="step-note">
                Return in the evening for optional reflection (2 min) or roll again tomorrow
              </p>
            </div>
          </div>

          <div className="progress-visual">
            <h3 className="progress-title">Watch Your Healing Journey Unfold</h3>
            <p className="progress-text">
              Every practice brings you closer to Moksha (liberation). Your personalized board 
              evolves with you, showing your growth, patterns, and transformation.
            </p>
            <div className="board-progression">
              <div className="board-stage">
                <div className="mini-board board-day-1"></div>
                <p>Day 1</p>
              </div>
              <div className="board-arrow">→</div>
              <div className="board-stage">
                <div className="mini-board board-day-30"></div>
                <p>Day 30</p>
              </div>
              <div className="board-arrow">→</div>
              <div className="board-stage">
                <div className="mini-board board-day-100"></div>
                <p>Day 100</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Email Capture Section */}
      <section id="email-form" className="email-capture">
        <div className="container">
          <div className="email-content">
            <h2 className="email-title">Begin Your Journey to Inner Peace</h2>
            <p className="email-subtitle">
              Join the waitlist to be among the first 100 founding members. 
              Get early access and exclusive pricing.
            </p>
            
            <form onSubmit={handleEmailSubmit} className="email-form">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="email-input"
                disabled={isSubmitting}
              />
              <button 
                type="submit" 
                className="email-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Joining...' : 'Join Waitlist'}
              </button>
            </form>

            {submitStatus === 'success' && (
              <div className="success-message">
                ✨ Welcome! Check your email for next steps.
              </div>
            )}

            <p className="email-note">
              No spam. Just your invitation to transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Mokshapatra. All rights reserved.</p>
          <div className="footer-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
