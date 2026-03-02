import React, { useState, useEffect } from 'react';
import CookieConsent from './CookieConsent';

const GOLD = '#C9920A';
const DEEP_INDIGO = '#1A0533';
const DARK_BG2 = '#0E0120';
const OFF_WHITE = '#F0EBE3';

function App() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;900&family=Lato:ital,wght@0,300;0,400;0,700;1,300&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    const style = document.createElement('style');
    style.textContent = '* { margin: 0; padding: 0; box-sizing: border-box; } html { scroll-behavior: smooth; } body { background: #1A0533; } .btn-gold { background: #C9920A; color: #1A0533; border: none; padding: 18px 48px; font-size: 15px; font-weight: 700; letter-spacing: 0.08em; cursor: pointer; font-family: Lato, sans-serif; text-transform: uppercase; transition: opacity 0.2s; } .btn-gold:hover { opacity: 0.88; } .btn-outline { background: transparent; border: 1px solid #C9920A; color: #C9920A; padding: 10px 24px; cursor: pointer; font-family: Lato, sans-serif; font-size: 13px; letter-spacing: 0.1em; text-transform: uppercase; transition: all 0.2s; } .btn-outline:hover { background: #C9920A; color: #1A0533; } .chapter-label { font-size: 11px; letter-spacing: 0.35em; text-transform: uppercase; color: #C9920A; margin-bottom: 24px; display: block; } .divider { width: 48px; height: 2px; background: #C9920A; opacity: 0.5; margin: 32px 0; } @media (max-width: 768px) { .grid-2 { grid-template-columns: 1fr !important; } .grid-3 { grid-template-columns: 1fr !important; } .hero-title { font-size: 42px !important; } .hero-sub { font-size: 26px !important; } section { padding: 80px 24px !important; } nav { padding: 16px 24px !important; } }';
    document.head.appendChild(style);
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const scriptURL = 'https://script.google.com/macros/s/AKfycbyUveB3sNl4dTKKTAppFdKmXII4tE128z6x4pERnhgjjSgafHo1n3K8gVnwUl88KG8n/exec';
      const formData = new URLSearchParams();
      formData.append('email', email);
      formData.append('type', 'signup');
      await fetch(scriptURL, { method: 'POST', body: formData, headers: { 'Content-Type': 'application/x-www-form-urlencoded' } });
      setSubmitStatus('success');
      setEmail('');
    } catch (error) {
      setSubmitStatus('success');
      setEmail('');
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToSignup = () => document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' });
  const ff = { fontFamily: "'Cinzel', serif" };

  return (
    <div style={{ fontFamily: "'Lato', sans-serif", background: DEEP_INDIGO, color: OFF_WHITE, overflowX: 'hidden' }}>
      <CookieConsent />
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, padding: '20px 56px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: scrolled ? 'rgba(14,1,32,0.96)' : 'transparent', backdropFilter: scrolled ? 'blur(16px)' : 'none', borderBottom: scrolled ? '1px solid rgba(201,146,10,0.15)' : 'none', transition: 'all 0.35s ease' }}>
        <img src="/logo.jpg" alt="Mokshapatra" style={{ height: 42 }} />
        <button className="btn-outline" onClick={scrollToSignup}>Begin Practice</button>
      </nav>
      <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '140px 48px 100px', background: 'radial-gradient(ellipse 80% 60% at 50% -10%, #2D1B5E 0%, #1A0533 65%)' }}>
        <span className="chapter-label" style={{ marginBottom: 56 }}>â¦  2,000 years of wisdom Â· Now personalized for you  â¦</span>
        <h1 className="hero-title" style={{ ...ff, fontSize: 'clamp(44px, 7.5vw, 100px)', fontWeight: 700, lineHeight: 1.08, color: '#FFFFFF', marginBottom: 20, maxWidth: 960 }}>Something waits for you<br />every morning.</h1>
        <h2 className="hero-sub" style={{ ...ff, fontSize: 'clamp(26px, 4vw, 52px)', fontWeight: 400, color: GOLD, marginBottom: 44 }}>It's been patient.</h2>
        <p style={{ fontSize: 18, lineHeight: 1.8, color: OFF_WHITE, opacity: 0.8, maxWidth: 520, marginBottom: 56, fontWeight: 300 }}>Mokshapatra gives you exactly what to practice today.<br />One roll. No deciding. The ancient game guides.</p>
        <button className="btn-gold" onClick={scrollToSignup}>Begin Your Practice â</button>
        <p style={{ marginTop: 80, fontSize: 11, letterSpacing: '0.25em', opacity: 0.35, textTransform: 'uppercase' }}>scroll to discover â</p>
      </section>
      <section className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', maxWidth: 1200, margin: '0 auto', padding: '120px 56px', alignItems: 'center' }}>
        <div>
          <span className="chapter-label">Chapter I â The Seeking</span>
          <h2 style={{ ...ff, fontSize: 'clamp(30px, 3.5vw, 50px)', fontWeight: 700, lineHeight: 1.2, color: '#FFFFFF', marginBottom: 32 }}>You follow the right people.<br />You know what you need.<br />You just never start.</h2>
          <div className="divider"></div>
          <p style={{ fontSize: 17, lineHeight: 1.85, opacity: 0.78, marginBottom: 24 }}>You save the videos. You follow the teachers. You go to the retreat, come back changed â and two weeks later you are back to the same morning scroll.</p>
          <p style={{ fontSize: 17, lineHeight: 1.85, opacity: 0.78 }}>It is not willpower. It is not discipline. It is the absence of something that guides you â every morning â to exactly the right practice for exactly where you are.</p>
        </div>
        <div style={{ textAlign: 'right', overflow: 'hidden', userSelect: 'none' }}>
          <p style={{ ...ff, fontSize: 'clamp(72px, 11vw, 160px)', fontWeight: 900, lineHeight: 0.88, color: 'transparent', WebkitTextStroke: '1.5px rgba(201,146,10,0.3)' }}>SEEK<br />ING</p>
        </div>
      </section>
      <section style={{ background: DARK_BG2, padding: '120px 56px', textAlign: 'center' }}>
        <div style={{ maxWidth: 780, margin: '0 auto' }}>
          <span className="chapter-label">Chapter II â The Ancient Game</span>
          <h2 style={{ ...ff, fontSize: 'clamp(30px, 4vw, 54px)', fontWeight: 700, lineHeight: 1.15, color: '#FFFFFF', marginBottom: 48 }}>2,000 years ago,<br />ancient India already solved this.</h2>
          <p style={{ fontSize: 18, lineHeight: 1.95, opacity: 0.8, marginBottom: 28 }}>The game of Gyan Chaupar â what you know as Snakes and Ladders â was never about luck. It was a guide. Each square held a specific teaching, a specific practice, chosen by the fall of the dice rather than the wandering of the mind.</p>
          <p style={{ fontSize: 18, lineHeight: 1.95, opacity: 0.8, marginBottom: 48 }}>Your ancestors did not wake up asking what to practice today. The game decided. They surrendered to it. And in that surrender, they built something you have been trying to build for years.</p>
          <div style={{ borderTop: '1px solid rgba(201,146,10,0.25)', paddingTop: 48 }}>
            <p style={{ ...ff, fontSize: 22, color: GOLD, fontStyle: 'italic', lineHeight: 1.6 }}>"The dice does not choose randomly.<br />It chooses what you need."</p>
          </div>
        </div>
      </section>
      {/* Science Credibility Bridge */}
      <section style={{ background: 'rgba(201,146,10,0.04)', borderTop: '1px solid rgba(201,146,10,0.12)', borderBottom: '1px solid rgba(201,146,10,0.12)', padding: '72px 56px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontFamily: 'Lato, sans-serif', fontSize: 12, letterSpacing: 5, color: GOLD, opacity: 0.6, marginBottom: 48, textTransform: 'uppercase' }}>Ancient Wisdom. Modern Validation.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'rgba(201,146,10,0.15)' }}>
            {[
              { stat: '66', unit: 'days', label: 'Average time to form a lasting daily habit', note: 'Lally et al., University College London, 2010' },
              { stat: '700+', unit: 'years', label: "Gyan Chaupar's documented pedagogical lineage", note: 'Referenced in Sanskrit texts from the 13th century' },
              { stat: '35,000', unit: 'decisions', label: 'The average adult makes daily — leading to fatigue', note: 'Mokshapatra removes one. The most important one.' }
            ].map((item, idx) => (
              <div key={idx} style={{ background: DEEP_INDIGO, padding: '40px 28px' }}>
                <p style={{ fontFamily: 'Cinzel, serif', fontSize: 'clamp(36px, 4vw, 58px)', fontWeight: 900, color: GOLD, lineHeight: 1, marginBottom: 4 }}>{item.stat}</p>
                <p style={{ fontFamily: 'Lato, sans-serif', fontSize: 11, letterSpacing: 3, color: OFF_WHITE, opacity: 0.4, marginBottom: 16, textTransform: 'uppercase' }}>{item.unit}</p>
                <p style={{ fontFamily: 'Lato, sans-serif', fontSize: 15, color: OFF_WHITE, opacity: 0.85, marginBottom: 12, lineHeight: 1.5 }}>{item.label}</p>
                <p style={{ fontFamily: 'Lato, sans-serif', fontSize: 12, color: OFF_WHITE, opacity: 0.35, fontStyle: 'italic' }}>{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section style={{ padding: '120px 56px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 80 }}>
          <span className="chapter-label">Chapter III â How It Works</span>
          <h2 style={{ ...ff, fontSize: 'clamp(30px, 3.5vw, 52px)', fontWeight: 700, color: '#FFFFFF', marginBottom: 16 }}>Three things happen when you roll.</h2>
          <p style={{ fontSize: 17, opacity: 0.65, maxWidth: 480, margin: '0 auto' }}>No algorithm. A gentle morning nudge — then just you, the board, and 2,000 years of guidance.</p>
        </div>
        <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2px' }}>
          {[
            { num: '01', title: 'Roll', sub: 'The dice lands. The board speaks.', body: 'Each morning you roll. The square you land on holds a specific practice mapped to your 100-day journey â aligned to exactly where you are on your path.' },
            { num: '02', title: 'Reflect', sub: 'The AI listens.', body: 'A brief Socratic conversation â not therapy, not journaling prompts, but the kind of question that shows you something you already half-knew. 5 to 7 minutes.' },
            { num: '03', title: 'Practice', sub: "Today's practice. Chosen for you.", body: 'One specific practice â meditation, breathwork, mantra, or movement â calibrated to your mood, your square, and your history. No more choosing. Just doing.' },
          ].map((step, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,0.025)', padding: '48px 40px', borderTop: `3px solid ${GOLD}` }}>
              <p style={{ ...ff, fontSize: 60, fontWeight: 900, color: 'rgba(201,146,10,0.12)', lineHeight: 1, marginBottom: 20 }}>{step.num}</p>
              <h3 style={{ ...ff, fontSize: 26, fontWeight: 700, color: '#FFFFFF', marginBottom: 8 }}>{step.title}</h3>
              <p style={{ fontSize: 12, color: GOLD, letterSpacing: '0.06em', marginBottom: 20, textTransform: 'uppercase' }}>{step.sub}</p>
              <p style={{ fontSize: 16, lineHeight: 1.85, opacity: 0.72 }}>{step.body}</p>
            </div>
          ))}
        </div>
      </section>
      <section style={{ background: DARK_BG2, padding: '120px 56px' }}>
        <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', maxWidth: 1200, margin: '0 auto', alignItems: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <p style={{ ...ff, fontSize: 'clamp(120px, 18vw, 260px)', fontWeight: 900, lineHeight: 1, color: 'transparent', WebkitTextStroke: '2px rgba(201,146,10,0.35)', userSelect: 'none' }}>100</p>
            <p style={{ fontSize: 11, letterSpacing: '0.3em', color: GOLD, marginTop: 12, textTransform: 'uppercase' }}>Squares Â· 100 Days Â· One Journey</p>
          </div>
          <div>
            <span className="chapter-label">Chapter IV â The Journey</span>
            <h2 style={{ ...ff, fontSize: 'clamp(28px, 3vw, 44px)', fontWeight: 700, lineHeight: 1.2, color: '#FFFFFF', marginBottom: 40 }}>A 100-square path through<br />the four stages of practice.</h2>
            {[
              { label: 'Yama Â· Squares 1â25', desc: 'Foundation. The clearing of what does not serve.' },
              { label: 'Niyama Â· Squares 26â50', desc: 'Cultivation. Building the habits that last.' },
              { label: 'Dharana Â· Squares 51â75', desc: 'Concentration. The deepening of attention.' },
              { label: 'Dhyana Â· Squares 76â100', desc: 'Absorption. Where practice becomes being.' },
            ].map((phase, i) => (
              <div key={i} style={{ borderLeft: '2px solid rgba(201,146,10,0.3)', paddingLeft: 20, marginBottom: 28 }}>
                <p style={{ ...ff, fontSize: 14, color: GOLD, marginBottom: 4 }}>{phase.label}</p>
                <p style={{ fontSize: 15, opacity: 0.72, lineHeight: 1.6 }}>{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="signup" style={{ padding: '120px 56px', textAlign: 'center' }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <span className="chapter-label" style={{ marginBottom: 32 }}>â¡ Founding Member Access</span>
          <h2 style={{ ...ff, fontSize: 'clamp(34px, 5vw, 62px)', fontWeight: 700, lineHeight: 1.1, color: '#FFFFFF', marginBottom: 24 }}>The practice has been waiting.<br />Begin tomorrow morning.</h2>
          <p style={{ fontSize: 17, lineHeight: 1.85, opacity: 0.75, marginBottom: 52, fontWeight: 300 }}>Join as a founding member. Be among the first 100 to complete a full journey. Early access, founding pricing, and a personal board generated for you before your first roll.</p>
          {submitStatus === 'success' ? (
            <div style={{ padding: '36px 48px', border: `1px solid ${GOLD}`, background: 'rgba(201,146,10,0.08)' }}>
              <p style={{ ...ff, fontSize: 22, color: GOLD, marginBottom: 10 }}>Your practice awaits.</p>
              <p style={{ opacity: 0.7 }}>We will be in touch with your founding member access.</p>
            </div>
          ) : (
            <form onSubmit={handleEmailSubmit} style={{ display: 'flex', maxWidth: 480, margin: '0 auto' }}>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your@email.com" required style={{ flex: 1, padding: '18px 20px', background: 'rgba(255,255,255,0.06)', border: `1px solid rgba(201,146,10,0.4)`, borderRight: 'none', color: OFF_WHITE, fontSize: 16, outline: 'none', fontFamily: "'Lato', sans-serif" }} />
              <button type="submit" disabled={isSubmitting} className="btn-gold" style={{ padding: '18px 28px', fontSize: 13, whiteSpace: 'nowrap' }}>{isSubmitting ? '...' : 'Begin â'}</button>
            </form>
          )}
          <p style={{ marginTop: 20, fontSize: 12, opacity: 0.4 }}>No spam. No daily emails. Just your practice.</p>
        </div>
      </section>
      <footer style={{ borderTop: '1px solid rgba(201,146,10,0.12)', padding: '56px', textAlign: 'center' }}>
        <img src="/logo.jpg" alt="Mokshapatra" style={{ height: 36, marginBottom: 24, opacity: 0.6 }} />
        <p style={{ fontSize: 13, opacity: 0.4, letterSpacing: '0.04em', marginBottom: 16 }}>Based on the 2,000-year-old game of Gyan Chaupar Â· Built for modern seekers</p>
        <p style={{ fontSize: 12, opacity: 0.28 }}>Â© 2025 Mokshapatra Â· <a href="/privacy" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy</a> Â· <a href="/terms" style={{ color: 'inherit', textDecoration: 'none' }}>Terms</a></p>
      </footer>
    </div>
  );
}

export default App;
