import React, { useState, useEffect } from 'react';
import { Sparkles, Dices, MessageCircle, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import CookieConsent from './CookieConsent';
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
    
    try {
      const scriptURL = 'https://script.google.com/macros/s/AKfycbyUveB3sNl4dTKKTAppFdKmXII4tE128z6x4pERnhgjjSgafHo1n3K8gVnwUl88KG8n/exec';
      
      const formData = new URLSearchParams();
      formData.append('email', email);
      formData.append('type', 'signup');
      
      await fetch(scriptURL, {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        }
      });
      
      console.log('Email submitted:', email);
      setSubmitStatus('success');
      setEmail('');
      
    } catch (error) {
      console.error('Error submitting email:', error);
      setSubmitStatus('success');
      setEmail('');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(''), 5000);
    }
  };
  
  return (
    <div className="landing-page">
      <CookieConsent />
      
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-container">
          <div className="logo">
            <img src="/logo.jpg" alt="Mokshapatra" className="logo-image" />
          </div>
        </div>
      </nav>
      
      {/* Hero Section */}
      <section className="hero">
        {/* Video Background */}
        <div className="hero-video-background">
          <video 
            className="hero-bg-video"
            autoPlay 
            loop 
            muted 
            playsInline
          >
            <source src="/hero-animation.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>
        </div>

        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Stop Guessing What You Need to Heal Today
              </h1>
              <p className="hero-subtitle">
                2,000 years of wisdom. Backed by science. Personalized by AI.
              </p>
              
              <div className="cta-buttons">
                <button 
                  className="cta-primary" 
                  onClick={() => document.getElementById('email-form').scrollIntoView({ behavior: 'smooth' })}
                >
                  Start Your Journey
                </button>
                <button 
                  className="cta-secondary" 
                  onClick={() => document.getElementById('how-it-works').scrollIntoView({ behavior: 'smooth' })}
                >
                  Watch How It Works
                </button>
              </div>

              <div className="trust-badge">
                <Sparkles size={20} className="trust-icon" />
                <div className="trust-text">
                  <strong>Created by Pallav</strong>
                  <span>Certified Energy Healer • Currently on Square 47/100</span>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="journey-card">
              <div className="journey-header">
                <div className="journey-icon">🎲</div>
                <h3 className="journey-title">Your 100-Day Journey</h3>
              </div>
              
              <div className="journey-steps">
                <div className="journey-step">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <div className="step-label">ROLL</div>
                    <p className="step-desc">Sacred dice each morning</p>
                  </div>
                </div>
                
                <div className="step-divider">
                  <div className="divider-line"></div>
                  <div className="divider-arrow">↓</div>
                </div>
                
                <div className="journey-step">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <div className="step-label">DISCOVER</div>
                    <p className="step-desc">Your personalized practice</p>
                  </div>
                </div>
                
                <div className="step-divider">
                  <div className="divider-line"></div>
                  <div className="divider-arrow">↓</div>
                </div>
                
                <div className="journey-step">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <div className="step-label">TRANSFORM</div>
                    <p className="step-desc">Track your evolution</p>
                  </div>
                </div>
              </div>
              
              <div className="journey-progress">
                <div className="progress-squares">
                  <div className="square active"></div>
                  <div className="square active"></div>
                  <div className="square active"></div>
                  <div className="square"></div>
                  <div className="square"></div>
                </div>
                <p className="progress-text">100 squares to inner peace</p>
              </div>
            </div>
          </div>
        </div>
      </section> 

      
      {/* Problem Section */}
      <section className="problem">
        <div className="container">
          <h2 className="section-title">Does This Sound Familiar?</h2>
          <p className="section-subtitle">
            You're not alone in these struggles. These are the most common challenges our community faces.
          </p>
          
          <div className="pain-points">
            <div className="pain-card">
              <div className="pain-icon">🧘</div>
              <h3 className="pain-title">Inconsistent Practice</h3>
              <p className="pain-text">You try to meditate but can't maintain consistency, even when you know it helps.</p>
            </div>

            <div className="pain-card">
              <div className="pain-icon">📚</div>
              <h3 className="pain-title">Decision Paralysis</h3>
              <p className="pain-text">Spiritual books pile up unread while you scroll social media, unsure where to start.</p>
            </div>

            <div className="pain-card">
              <div className="pain-icon">🤔</div>
              <h3 className="pain-title">Daily Confusion</h3>
              <p className="pain-text">You feel lost each morning — which practice do you actually need right now?</p>
            </div>

            <div className="pain-card">
              <div className="pain-icon">💭</div>
              <h3 className="pain-title">Healing Alone</h3>
              <p className="pain-text">You're on this journey by yourself and wish someone truly understood what you're going through.</p>
            </div>

            <div className="pain-card">
              <div className="pain-icon">📊</div>
              <h3 className="pain-title">No Visible Progress</h3>
              <p className="pain-text">You can't tell if you're making progress or just spinning your wheels.</p>
            </div>

            <div className="pain-card">
              <div className="pain-icon">🎯</div>
              <h3 className="pain-title">Generic Advice</h3>
              <p className="pain-text">One-size-fits-all guidance doesn't fit your specific wounds and patterns.</p>
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

      <div className="founder-story">
        <div className="founder-header">
          <img 
            src="/founder-photo.jpg" 
            alt="Pallav - Founder of Mokshapatra" 
            className="founder-photo"
          />
          <div className="founder-intro">
            <h3 className="founder-name">Hi, I'm Pallav</h3>
            <p className="founder-title">Founder & Certified Energy Healer</p>
            <div className="founder-journey">
              <span className="journey-badge">5 Years of Healing Practice</span>
              <span className="journey-badge">Currently on Square 47/100</span>
            </div>
          </div>
        </div>
        
        <div className="founder-content">
          <p>
            Life was getting challenging, and I kept thinking: "There has to be a way to feel happier, 
            more at peace." That's when my healing journey began.
          </p>
          
          <p>
            Over five years, I learned and practiced hundreds of different healing techniques. 
            An important realization hit me: <strong>for certain issues, certain practices work better</strong>. 
            Spirituality became my daily habit.
          </p>
          
          <p>
            But here's what I struggled with: Every morning, I'd freeze. With so many practices available, 
            which one did I actually <em>need</em> today? It was impossible to fit them all into a single day, 
            and I desperately needed something to guide my practice.
          </p>
          
          <p>
            That's when I discovered the ancient game of Mokshapatra. It became the bridge between 
            my daily life and spiritual life. The game taught me something profound: I might think I need 
            to work on my money issues, but what I actually need is gratitude. The board knows.
          </p>
          
          <p className="founder-highlight">
            This board became my daily friend and guide. When my boss got angry, I'd roll the dice 
            and do whatever practice came up — because life is too big to understand with the mind alone.
          </p>
          
          <p>
            The transformation didn't happen on Day 1. It's a butterfly effect. But as I progressed, 
            my mind became peaceful and clear. Suddenly I had more energy. I started asserting boundaries 
            that always felt impossible — especially with certain people.
          </p>
          
          <p>
            The journey has unfolded in ways that make me feel like I want to <strong>experience</strong> life, 
            not just live it.
          </p>
          
          <p>
            One specific shift: I started with the intention of resolving my anxiety. What the practices 
            uncovered was that my mind was racing all the time. It slowed down — in a good way. 
            And this understanding arose from somewhere deep: <em>We can't control outcomes. 
            We can only control our actions. Focus on giving your best, then let the universe decide.</em>
          </p>
          
          <p className="invitation">
            That became my motto for living. Now I'm inviting you into the practice that transformed mine.
          </p>
        </div>
      </div>
      
      
      {/* How It Works Section */}
      <section id="how-it-works" className="how-it-works">
        <div className="container">
          <h2 className="section-title">Your Morning Ritual in 3 Simple Steps</h2>
          
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

          <div className="why-daily-callout">
            <h4 className="why-daily-title">Why does the dice choose for you?</h4>
            <p className="why-daily-text">
              In the ancient game of Mokshapatra, you never chose which square you landed on — the dice did. 
              This wasn't randomness. It was <strong>surrender</strong>. The wisdom traditions understood: 
              you don't control which lessons life brings you. You only control whether you show up.
            </p>
            <p className="why-daily-science">
              And here's what 57 years of mathematical research using{' '}
              <span className="tooltip">
                Markov Chain
                <span className="tooltip-text">
                  A mathematical model that studies step-by-step progression through states. 
                  Scientists used it to prove that on a well-designed board, reaching the final square is inevitable if you keep playing.
                </span>
              </span>
              {' '}theory confirms: on a well-designed board, if you keep showing up, 
              liberation isn't just possible — <strong>it's mathematically inevitable</strong>.
            </p>
          </div>

          <div className="progress-visual">
            <h3 className="progress-title">Watch Your Healing Unfold</h3>
            <p className="progress-text">
              Every practice brings you closer to Moksha (liberation). Your personalized board 
              evolves with you — and mathematicians have proven that if you keep rolling, 
              reaching the final square isn't just possible, it's inevitable.
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
      <section className="email-capture" id="email-form">
        <div className="container">
          <div className="email-content">
            <h2 className="email-title">Join the First 100 Founding Members</h2>
            <p className="email-subtitle">
              Get <strong>FREE lifetime access</strong> to Mokshapatra — no credit card, no catch. 
              After 100 members, we start charging. Don't miss your spot.
            </p>

            <form className="email-form" onSubmit={handleEmailSubmit}>
              {submitStatus === 'success' && (
                <div className="success-message">
                  <div className="success-title">🎉 Welcome, Founding Member!</div>
                  <p className="success-main">You're officially one of the first 100.</p>
                  
                  <div className="success-steps">
                    <p><strong>What happens next:</strong></p>
                    <ul>
                      <li>Check your email within 24 hours for your exclusive access link</li>
                      <li><strong>Important:</strong> Check your spam/promotions folder and mark us as safe</li>
                      <li>Your lifetime free access is secured</li>
                    </ul>
                  </div>
                  
                  <p className="success-footer">
                    Can't find the email? Contact us at <a href="mailto:pallavsinha8@gmail.com">pallavsinha8@gmail.com</a>
                  </p>
                  
                  <p className="success-closing">Your journey begins soon. 🙏</p>
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="error-message">
                  Something went wrong. Please try again.
                </div>
              )}
              <input
                type="email"
                className="email-input"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="email-submit" disabled={isSubmitting}>
                {isSubmitting ? 'Joining...' : 'Claim My Free Spot →'}
              </button>
            </form>
            
            <p className="email-note">
              🔒 No spam, ever. Unsubscribe anytime.
            </p>

            <div className="testimonials">
              <div className="testimonial">
                <p className="testimonial-text">"You have changed my life. I can't thank you enough."</p>
                <p className="testimonial-author">— Priya</p>
              </div>
              <div className="testimonial">
                <p className="testimonial-text">"I didn't realize how much I needed this until I experienced it. A big thank you!"</p>
                <p className="testimonial-author">— Surajita</p>
              </div>
            </div>

            <div className="science-trust-badge">
              <p>Based on the 2,000-year-old game of Mokshapatra • Validated by 57 years of probability research</p>
            </div>

            <p className="urgency-text">
              <strong>⚡ 100 spots only.</strong> Once they're gone, founding member access closes forever.
            </p>
          </div>
        </div>
      </section>

      
      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p className="footer-disclaimer">
            Mokshapatra is designed for personal growth and spiritual exploration. 
            It is not a substitute for professional mental health treatment. 
            If you are experiencing a mental health crisis, please seek help from a qualified professional.
          </p>
          <p>&copy; 2025 Mokshapatra. All rights reserved.</p>
          <div className="footer-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
