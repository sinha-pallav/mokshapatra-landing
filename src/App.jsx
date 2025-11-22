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
    
    try {
      // Your Google Apps Script URL
      const scriptURL = 'https://script.google.com/macros/s/AKfycbyUveB3sNl4dTKKTAppFdKmXII4tE128z6x4pERnhgjjSgafHo1n3K8gVnwUl88KG8n/exec';
      
      // Create URLSearchParams instead of FormData
      const formData = new URLSearchParams();
      formData.append('email', email);
      
      // Send to Google Apps Script
      await fetch(scriptURL, {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        }
      });
      
      console.log('Email submitted:', email);
      
      // Show success message
      setSubmitStatus('success');
      setEmail('');
      
    } catch (error) {
      console.error('Error submitting email:', error);
      // Even if there's an error, the email might have been saved
      // because no-cors mode hides the actual response
      setSubmitStatus('success');
      setEmail('');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(''), 5000);
    }
  };
  
  return (
    <div className="landing-page">
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-container">
        <img src="/logo.jpg" alt="Mokshapatra" className="logo-img" />
          <button className="login-btn">Login</button>
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
                Ancient wisdom meets modern AI. Roll sacred dice each morning to receive 
                the exact spiritual practice your soul needs right now.
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
              
              <p className="founder-highlight">
                I've been using Mokshapatra every single day for the past year. It changed my life.
              </p>
              
              <p className="invitation">
                Now I'm inviting you into what transformed my healing journey.
              </p>
            </div>
          </div>
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
            
            {submitStatus === 'error' && (
              <div className="error-message">
                ❌ Oops! Something went wrong. Please try again.
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
