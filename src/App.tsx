import React, { useState, useRef } from 'react';
import './App.css';

// Type definitions
interface Pairing {
  a: string;
  b: string;
  da: string;
  db: string;
}

const PAIRS: Record<string, Pairing> = {
  'Clean / Chaos': {
    a: 'CLEAN',
    b: 'CHAOS',
    da: 'Crisp · Quiet · Considered',
    db: 'Loud · Restless · Alive'
  },
  'Day / Night': {
    a: 'DAY',
    b: 'NIGHT',
    da: 'Bright · Open · Easy',
    db: 'Low · Electric · After-hours'
  },
  'Classic / Street': {
    a: 'CLASSIC',
    b: 'STREET',
    da: 'Timeless · Clean · Heritage',
    db: 'Raw · Bold · Now'
  }
};

const ACCENT_COLORS = [
  { name: 'Mint Emerald', hex: '#3FBF95' },
  { name: 'Electric Blue', hex: '#2563EB' },
  { name: 'Vibrant Orange', hex: '#F97316' },
  { name: 'Classic Gold', hex: '#D97706' },
  { name: 'Atelier Red', hex: '#DC2626' }
];

// Interactive Shoe SVG Component
interface ShoeProps {
  laceColor: string;
  agletColor: string;
  settleKey: number;
}

const Shoe: React.FC<ShoeProps> = ({ laceColor, agletColor, settleKey }) => {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        animation: settleKey > 0 ? 'ms-settle 0.7s cubic-bezier(0.34, 1.3, 0.5, 1) both' : 'none'
      }}
      key={settleKey}
    >
      <svg viewBox="0 0 640 440" width="100%" style={{ maxWidth: '100%', maxHeight: '100%', display: 'block', overflow: 'visible', pointerEvents: 'none' }}>
        {/* Shadow Drop */}
        <ellipse cx="320" cy="412" rx="248" ry="20" fill="rgba(40,36,30,0.16)" style={{ filter: 'blur(9px)' }}></ellipse>
        
        {/* Sole & Outsole */}
        <path d="M96,332 C 70,332 56,348 56,362 C 56,392 80,402 112,402 L 548,402 C 584,402 596,388 594,366 C 592,346 580,332 556,332 Z" fill="#EFEAE0"></path>
        <path d="M96,332 C 70,332 58,346 56,360 L 594,360 C 592,344 580,332 556,332 Z" fill="#F6F2EA"></path>
        <path d="M64,372 C 60,394 84,402 112,402 L 548,402 C 580,402 595,392 592,372 C 540,386 120,386 64,372 Z" fill="#2A2722"></path>
        
        {/* Upper Leather Panels */}
        <path d="M96,332 C 82,316 82,294 100,280 C 132,252 184,242 232,238 C 248,236 252,232 258,228 C 304,210 350,196 392,150 C 398,140 406,126 420,122 C 436,146 452,156 470,156 C 500,156 522,150 540,150 C 549,150 556,156 556,168 L 556,332 Z" fill="#C9BDA9"></path>
        <path d="M232,238 C 320,234 430,250 540,150 C 549,150 556,156 556,168 L 556,332 L 300,332 C 280,300 250,270 232,238 Z" fill="#C2B6A1"></path>
        <path d="M96,332 C 82,316 82,294 100,280 C 122,262 152,252 184,246 C 168,272 158,302 156,332 Z" fill="#BFB29C"></path>
        
        {/* Panel Linings & Top Stitching */}
        <path d="M156,332 C 158,302 168,272 184,246" fill="none" stroke="#A99C86" strokeWidth="2"></path>
        <path d="M540,150 C 549,150 556,156 556,168 L 556,332" fill="none" stroke="#B3A78F" strokeWidth="2" opacity="0.6"></path>
        <path d="M392,152 C 420,140 442,150 462,156 C 498,162 524,153 544,153 C 540,178 500,190 460,188 C 428,186 404,172 388,156 Z" fill="#3A352D"></path>
        <path d="M255,238 L 400,152" fill="none" stroke="#C7BCA9" strokeWidth="48" strokeLinecap="round"></path>
        <path d="M255,238 L 400,152" fill="none" stroke="#BCAF9B" strokeWidth="48" strokeLinecap="round" strokeDasharray="0.5 200"></path>
        <rect x="372" y="121" width="26" height="15" rx="3" transform="rotate(-30 385 128)" fill="#B0A48F"></rect>
        
        {/* Cascade Laces */}
        <g className="ll-lace" fill="none" strokeWidth="11" strokeLinecap="round">
          <path d="M254.3,210.4 L 278.9,251.8" style={{ stroke: laceColor }}></path>
          <path d="M254.3,210.4 L 307.9,234.6" style={{ stroke: laceColor }}></path>
          <path d="M278.9,251.8 L 283.3,193.2" style={{ stroke: laceColor }}></path>
          <path d="M283.3,193.2 L 336.9,217.4" style={{ stroke: laceColor }}></path>
          <path d="M307.9,234.6 L 312.3,176.0" style={{ stroke: laceColor }}></path>
          <path d="M312.3,176.0 L 365.9,200.2" style={{ stroke: laceColor }}></path>
          <path d="M336.9,217.4 L 341.3,158.8" style={{ stroke: laceColor }}></path>
          <path d="M341.3,158.8 L 394.9,183.0" style={{ stroke: laceColor }}></path>
          <path d="M365.9,200.2 L 370.3,141.6" style={{ stroke: laceColor }}></path>
          <path d="M370.3,141.6 L 356,108" style={{ stroke: laceColor }}></path>
          <path d="M394.9,183.0 L 408,128" style={{ stroke: laceColor }}></path>
        </g>
        
        {/* Lace Aglets */}
        <g className="ll-aglet" fill={agletColor}>
          <rect x="350" y="100" width="9" height="16" rx="2" transform="rotate(20 354 108)"></rect>
          <rect x="404" y="120" width="9" height="16" rx="2" transform="rotate(20 408 128)"></rect>
        </g>
        
        {/* Eyelets */}
        <circle cx="254.3" cy="210.4" r="5.5" fill="#2A2722"></circle><circle cx="254.3" cy="210.4" r="2.2" fill="#6B6354"></circle>
        <circle cx="278.9" cy="251.8" r="5.5" fill="#2A2722"></circle><circle cx="278.9" cy="251.8" r="2.2" fill="#6B6354"></circle>
        <circle cx="283.3" cy="193.2" r="5.5" fill="#2A2722"></circle><circle cx="283.3" cy="193.2" r="2.2" fill="#6B6354"></circle>
        <circle cx="307.9" cy="234.6" r="5.5" fill="#2A2722"></circle><circle cx="307.9" cy="234.6" r="2.2" fill="#6B6354"></circle>
        <circle cx="312.3" cy="176.0" r="5.5" fill="#2A2722"></circle><circle cx="312.3" cy="176.0" r="2.2" fill="#6B6354"></circle>
        <circle cx="336.9" cy="217.4" r="5.5" fill="#2A2722"></circle><circle cx="336.9" cy="217.4" r="2.2" fill="#6B6354"></circle>
        <circle cx="341.3" cy="158.8" r="5.5" fill="#2A2722"></circle><circle cx="341.3" cy="158.8" r="2.2" fill="#6B6354"></circle>
        <circle cx="365.9" cy="200.2" r="5.5" fill="#2A2722"></circle><circle cx="365.9" cy="200.2" r="2.2" fill="#6B6354"></circle>
        <circle cx="370.3" cy="141.6" r="5.5" fill="#2A2722"></circle><circle cx="370.3" cy="141.6" r="2.2" fill="#6B6354"></circle>
        <circle cx="394.9" cy="183.0" r="5.5" fill="#2A2722"></circle><circle cx="394.9" cy="183.0" r="2.2" fill="#6B6354"></circle>
      </svg>
    </div>
  );
};

function App() {
  // Configurator States
  const [pairingKey, setPairingKey] = useState<string>('Clean / Chaos');
  const [productName, setProductName] = useState<string>('Atelier Runner — Phase 01');
  const [accentColor, setAccentColor] = useState<string>('#3FBF95');

  // Interactive Frame States (independent of each other)
  // 'a' = White Lace Mood, 'b' = Mint Lace Mood
  const [dMood, setDMood] = useState<'a' | 'b'>('a');
  const [mMood, setMMood] = useState<'a' | 'b'>('a');

  // Settle counts to trigger animation re-renders
  const [dSettleKey, setDSettleKey] = useState<number>(0);
  const [mSettleKey, setMSettleKey] = useState<number>(0);

  // Swipe gesture refs
  const dSwipeStartX = useRef<number | null>(null);
  const mSwipeStartX = useRef<number | null>(null);

  const pairing = PAIRS[pairingKey] || PAIRS['Clean / Chaos'];

  // Toggle mood functions
  const handleDSwitch = (mood: 'a' | 'b') => {
    if (dMood === mood) return;
    setDMood(mood);
    setDSettleKey((prev) => prev + 1);
  };

  const handleMSwitch = (mood: 'a' | 'b') => {
    if (mMood === mood) return;
    setMMood(mood);
    setMSettleKey((prev) => prev + 1);
  };

  // Drag/Swipe event handlers (mouse and touch support)
  const handleSwipeStart = (clientX: number, dev: 'd' | 'm') => {
    if (dev === 'd') {
      dSwipeStartX.current = clientX;
    } else {
      mSwipeStartX.current = clientX;
    }
  };

  const handleSwipeEnd = (clientX: number, dev: 'd' | 'm') => {
    const startX = dev === 'd' ? dSwipeStartX.current : mSwipeStartX.current;
    if (startX === null) return;
    
    const diff = clientX - startX;
    if (dev === 'd') dSwipeStartX.current = null;
    else mSwipeStartX.current = null;

    if (Math.abs(diff) > 40) {
      if (diff < 0) {
        // Swiped Left
        if (dev === 'd') handleDSwitch('b');
        else handleMSwitch('b');
      } else {
        // Swiped Right
        if (dev === 'd') handleDSwitch('a');
        else handleMSwitch('a');
      }
    }
  };

  // Render variables
  const WHITE = '#FAFAF8';
  const MINT = '#8FE3C4';
  const AGW = '#DCD8CF'; // White mood aglet
  const AGM = '#4FBF98'; // Mint mood aglet
  const cleanBg = '#F6F4EF';
  const chaosBg = 'radial-gradient(130% 110% at 70% 6%, #E7FAF1 0%, #F2F0EA 60%)';

  const getWordStyle = (active: boolean, big: boolean) => ({
    fontWeight: active ? 900 : 800,
    fontSize: (active ? (big ? 46 : 30) : (big ? 21 : 15)) + 'px',
    color: active ? '#1A1714' : '#C2BDB3',
    opacity: active ? '1' : '.9',
    cursor: 'pointer',
    userSelect: 'none' as const,
    transition: 'all .45s cubic-bezier(.4, 0, .2, 1)'
  });

  return (
    <div className="page-wrapper">
      <div style={{ maxWidth: '1640px', margin: '0 auto' }}>
        
        {/* ===== MIGRATION PLAYGROUND CONTROLS ===== */}
        <div className="configurator-panel">
          <div style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '.18em', textTransform: 'uppercase', color: accentColor, marginBottom: '14px' }}>
            Interactive Showcase Configurator
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px', alignItems: 'center' }}>
            
            {/* Pairing Selector */}
            <div style={{ flex: '1 1 240px' }}>
              <label style={{ display: 'block', fontSize: '10.5px', fontWeight: 700, color: '#6F6A60', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: '8px' }}>
                Mood Pair Concept
              </label>
              <select 
                value={pairingKey} 
                onChange={(e) => setPairingKey(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  borderRadius: '6px',
                  border: '1px solid #DDD9D1',
                  fontFamily: 'inherit',
                  fontWeight: 600,
                  fontSize: '13.5px',
                  background: '#FCFAF7',
                  outline: 'none',
                  cursor: 'pointer'
                }}
              >
                {Object.keys(PAIRS).map((key) => (
                  <option key={key} value={key}>{key}</option>
                ))}
              </select>
            </div>

            {/* Custom Product Name */}
            <div style={{ flex: '2 1 320px' }}>
              <label style={{ display: 'block', fontSize: '10.5px', fontWeight: 700, color: '#6F6A60', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: '8px' }}>
                Product Label
              </label>
              <input 
                type="text" 
                value={productName} 
                onChange={(e) => setProductName(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  borderRadius: '6px',
                  border: '1px solid #DDD9D1',
                  fontFamily: 'inherit',
                  fontWeight: 600,
                  fontSize: '13.5px',
                  background: '#FCFAF7',
                  outline: 'none'
                }}
              />
            </div>

            {/* Premium Accent Picker */}
            <div style={{ flex: '1 1 260px' }}>
              <label style={{ display: 'block', fontSize: '10.5px', fontWeight: 700, color: '#6F6A60', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: '8px' }}>
                Atelier Accent Color
              </label>
              <div style={{ display: 'flex', gap: '10px' }}>
                {ACCENT_COLORS.map((col) => (
                  <button
                    key={col.hex}
                    onClick={() => setAccentColor(col.hex)}
                    title={col.name}
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: col.hex,
                      border: accentColor === col.hex ? '3px solid #1A1714' : '1px solid rgba(0,0,0,0.15)',
                      cursor: 'pointer',
                      transform: accentColor === col.hex ? 'scale(1.1)' : 'scale(1)',
                      transition: 'transform 0.2s'
                    }}
                  />
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* ===== MOCK BRAND HEADER ===== */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          gap: '40px',
          paddingBottom: '28px',
          borderBottom: '1.5px solid #1A1714',
          marginBottom: '44px',
          flexWrap: 'wrap'
        }}>
          <div style={{ maxWidth: '760px' }}>
            <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.22em', textTransform: 'uppercase', color: '#8C877D', marginBottom: '18px' }}>
              Lifelong Atelier &nbsp;·&nbsp; PDP Gallery &nbsp;·&nbsp; Concept 02
            </div>
            <h1 className="brand-title">
              Mood Switch.
            </h1>
            <p className="brand-desc">
              Don't pick a colour — pick a mood. The laces follow. The second set reads as identity and self-expression, not a free accessory. Tap a word or swipe the image. <strong style={{ fontWeight: 700 }}>White&nbsp;⇄&nbsp;Mint</strong>, the shoe never changes.
            </p>
          </div>
          
          {/* Lacing Swatches */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '18px', padding: '15px 22px', background: '#fff', border: '1px solid #DDD9D1', borderRadius: '8px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '7px' }}>
              <span style={{ width: '26px', height: '26px', borderRadius: '50%', background: '#FAFAF8', border: '1px solid #D8D4CC;' }} />
              <span style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '.1em', color: '#6F6A60' }}>WHITE</span>
            </div>
            <span style={{ fontSize: '18px', color: '#B7B2A8' }}>⇄</span>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '7px' }}>
              <span style={{ width: '26px', height: '26px', borderRadius: '50%', background: MINT, border: '1px solid #6FCBA8;' }} />
              <span style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '.1em', color: '#6F6A60' }}>MINT</span>
            </div>
          </div>
        </div>

        {/* ===== VIEWPORT FRAMES ROW ===== */}
        <div style={{ display: 'flex', gap: '40px', alignItems: 'flex-start', flexWrap: 'wrap' }}>

          {/* ============ DESKTOP FRAME ============ */}
          <div className="desktop-only-frame" style={{ flex: '1 1 920px', minWidth: '680px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
              <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', color: '#1A1714' }}>Desktop Spec Frame</span>
              <span style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '.04em', color: '#A39E94' }}>1280px Viewport · Product Detail Page</span>
            </div>

            <div style={{ background: '#fff', border: '1px solid #E2DFD8', borderRadius: '14px', overflow: 'hidden', boxShadow: '0 1px 2px rgba(0,0,0,.04), 0 30px 60px -30px rgba(0,0,0,.28)' }}>
              
              {/* Site Header Chrome */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 34px', borderBottom: '1px solid #EDEAE3' }}>
                <div style={{ fontWeight: 900, fontSize: '18px', letterSpacing: '-.01em' }}>
                  ATELIER<span style={{ color: accentColor }}>°</span>
                </div>
                <div style={{ display: 'flex', gap: '30px', fontSize: '12px', fontWeight: 600, letterSpacing: '.08em', color: '#5A554D' }}>
                  <span>NEW</span><span>SHOP</span><span>STORY</span><span>ARCHIVE</span>
                </div>
                <div style={{ display: 'flex', gap: '20px', fontSize: '12px', fontWeight: 600, letterSpacing: '.04em', color: '#5A554D' }}>
                  <span>SEARCH</span><span>BAG&nbsp;(1)</span>
                </div>
              </div>

              {/* Grid Page Layout */}
              <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr' }}>

                {/* Desktop Interactive Gallery */}
                <div 
                  id="ms-stage-d" 
                  style={{
                    position: 'relative',
                    minHeight: '620px',
                    padding: '30px 30px 26px',
                    overflow: 'hidden',
                    display: 'flex',
                    touchAction: 'pan-y',
                    transition: 'background .55s ease',
                    background: dMood === 'b' ? chaosBg : cleanBg
                  }}
                  onTouchStart={(e) => handleSwipeStart(e.touches[0].clientX, 'd')}
                  onTouchEnd={(e) => handleSwipeEnd(e.changedTouches[0].clientX, 'd')}
                  onMouseDown={(e) => handleSwipeStart(e.clientX, 'd')}
                  onMouseUp={(e) => handleSwipeEnd(e.clientX, 'd')}
                >
                  {/* Left Rail */}
                  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '46px', flex: '0 0 46px', padding: '4px 0' }}>
                    <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '.16em', color: '#A39E94', writingMode: 'vertical-rl', transform: 'rotate(180deg)', whiteSpace: 'nowrap' }}>
                      01 — LACE STORY
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '9px', alignItems: 'center' }}>
                      <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: dMood === 'a' ? '#1A1714' : '#D2CEC5' }}></span>
                      <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: dMood === 'b' ? '#1A1714' : '#D2CEC5' }}></span>
                    </div>
                  </div>

                  {/* Stage Area */}
                  <div style={{ flex: 1, position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    
                    {/* Background floating text */}
                    <div aria-hidden="true" style={{
                      position: 'absolute',
                      left: '50%',
                      top: '46%',
                      fontWeight: 900,
                      fontSize: '200px',
                      letterSpacing: '-.05em',
                      color: 'rgba(26,23,20,0.045)',
                      whiteSpace: 'nowrap',
                      pointerEvents: 'none',
                      animation: 'ms-ghost 7s ease-in-out infinite'
                    }}>
                      {dMood === 'b' ? pairing.b : pairing.a}
                    </div>

                    {/* Desktop Shoe Rendering */}
                    <div style={{ width: '100%', maxWidth: '520px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Shoe 
                        laceColor={dMood === 'b' ? MINT : WHITE}
                        agletColor={dMood === 'b' ? AGM : AGW}
                        settleKey={dSettleKey}
                      />
                    </div>

                    {/* Desktop Toggle Buttons */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '22px', marginTop: '14px', zIndex: 10 }}>
                      <div 
                        onClick={() => handleDSwitch('a')}
                        style={getWordStyle(dMood === 'a', true)}
                      >
                        {pairing.a}
                      </div>
                      <span style={{ fontSize: '18px', color: '#C2BDB3', fontWeight: 300, userSelect: 'none' }}>/</span>
                      <div 
                        onClick={() => handleDSwitch('b')}
                        style={getWordStyle(dMood === 'b', true)}
                      >
                        {pairing.b}
                      </div>
                    </div>

                    {/* Descriptor Info */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '14px' }}>
                      <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: accentColor }}></span>
                      <span style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '.22em', textTransform: 'uppercase', color: '#7A756B' }}>
                        {dMood === 'b' ? pairing.db : pairing.da}
                      </span>
                    </div>

                  </div>

                  {/* Desktop Hint overlay */}
                  <div style={{ position: 'absolute', left: 0, right: 0, bottom: '14px', textAlign: 'center', fontSize: '10.5px', fontWeight: 600, letterSpacing: '.16em', textTransform: 'uppercase', color: '#B4AFA5', pointerEvents: 'none' }}>
                    Tap a word — or swipe the image
                  </div>

                </div>

                {/* Right Column: Product Detail Info */}
                <div style={{ padding: '42px 40px 40px', borderLeft: '1px solid #EDEAE3', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.2em', textTransform: 'uppercase', color: accentColor, marginBottom: '16px' }}>
                    SS26 · Collectible Drop
                  </div>
                  <h2 style={{ margin: 0, fontWeight: 900, fontSize: '34px', lineHeight: 1.04, letterSpacing: '-.02em', color: '#1A1714' }}>
                    {productName}
                  </h2>
                  <div style={{ marginTop: '10px', fontSize: '13.5px', fontWeight: 500, color: '#7A756B', lineHeight: 1.5 }}>
                    Two-lace edition · Unisex · Made in limited run
                  </div>

                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginTop: '22px' }}>
                    <span style={{ fontWeight: 800, fontSize: '26px' }}>₹ 18,900</span>
                    <span style={{ fontSize: '13px', fontWeight: 600, color: '#A39E94' }}>incl. of taxes</span>
                  </div>

                  {/* Mood Explainer Module */}
                  <div style={{ marginTop: '30px', padding: '22px', border: '1px solid #E6E2DA', borderRadius: '12px', background: '#FAF9F6' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifySelf: 'stretch', justifyContent: 'space-between' }}>
                      <div style={{ fontWeight: 800, fontSize: '13px', letterSpacing: '.14em', textTransform: 'uppercase' }}>
                        One pair · Two moods
                      </div>
                      <div style={{ display: 'flex', gap: '7px' }}>
                        <span style={{ width: '18px', height: '18px', borderRadius: '50%', background: '#FAFAF8', border: '1.5px solid #D8D4CC' }}></span>
                        <span style={{ width: '18px', height: '18px', borderRadius: '50%', background: MINT, border: '1.5px solid #6FCBA8' }}></span>
                      </div>
                    </div>
                    <p style={{ margin: '12px 0 0', fontSize: '13px', lineHeight: 1.55, color: '#5A554D' }}>
                      Your second set isn't a spare — it's a switch. Both lace sets ship in the box. Wear the mood you're in, re-thread when it changes.
                    </p>
                  </div>

                  {/* Size selectors */}
                  <div style={{ marginTop: '28px' }}>
                    <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: '#7A756B', marginBottom: '12px' }}>
                      Select size · UK
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {['6', '7', '8', '9', '10'].map((sz) => (
                        <span 
                          key={sz}
                          style={{
                            padding: '11px 0',
                            width: '50px',
                            textAlign: 'center',
                            fontSize: '13px',
                            fontWeight: sz === '7' ? 800 : 600,
                            border: sz === '7' ? '1.5px solid #1A1714' : '1px solid #DDD9D1',
                            borderRadius: '6px',
                            color: sz === '7' ? '#1A1714' : '#B4AFA5',
                            cursor: 'pointer'
                          }}
                        >
                          {sz}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div style={{ flex: 1 }}></div>

                  <button style={{
                    marginTop: '34px',
                    width: '100%',
                    padding: '18px',
                    border: 'none',
                    borderRadius: '8px',
                    background: '#1A1714',
                    color: '#fff',
                    fontFamily: 'inherit',
                    fontWeight: 700,
                    fontSize: '14px',
                    letterSpacing: '.08em',
                    cursor: 'pointer',
                    transition: 'opacity 0.2s'
                  }}>
                    ADD TO BAG — ₹ 18,900
                  </button>
                  <div style={{ marginTop: '12px', textAlign: 'center', fontSize: '11px', fontWeight: 500, letterSpacing: '.04em', color: '#A39E94' }}>
                    Free returns · Ships in 48h · Both lace sets included
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* ============ MOBILE FRAME ============ */}
          <div style={{ flex: '1 1 auto', display: 'flex', flexDirection: 'column', width: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
              <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', color: '#1A1714' }}>Mobile Frame</span>
              <span style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '.04em', color: '#A39E94' }}>390px Viewport</span>
            </div>

            <div className="mobile-responsive-frame" style={{ background: '#fff', border: '1px solid #E2DFD8', borderRadius: '38px', overflow: 'hidden', boxShadow: '0 1px 2px rgba(0,0,0,.04), 0 30px 60px -30px rgba(0,0,0,.28)', padding: '10px' }}>
              <div style={{ borderRadius: '30px', overflow: 'hidden', background: '#fff' }}>
                
                {/* Mobile Status Bar Chrome */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 24px 8px', fontSize: '12px', fontWeight: 700 }}>
                  <span>9:41</span>
                  <span style={{ display: 'flex', gap: '5px', alignItems: 'center', color: '#1A1714' }}>
                    <span style={{ width: '17px', height: '9px', border: '1.3px solid #1A1714', borderRadius: '2px', display: 'inline-block' }}></span>
                  </span>
                </div>

                {/* Mobile Navigation Chrome */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 22px 14px' }}>
                  <span style={{ fontSize: '18px', fontWeight: 700 }}>‹</span>
                  <span style={{ fontWeight: 900, fontSize: '14px', letterSpacing: '-.01em' }}>
                    ATELIER<span style={{ color: accentColor }}>°</span>
                  </span>
                  <span style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '.04em', color: '#5A554D' }}>BAG</span>
                </div>

                {/* Mobile Interactive Gallery */}
                <div 
                  id="ms-stage-m" 
                  style={{
                    position: 'relative',
                    height: '380px',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    touchAction: 'pan-y',
                    transition: 'background .55s ease',
                    background: mMood === 'b' ? chaosBg : cleanBg
                  }}
                  onTouchStart={(e) => handleSwipeStart(e.touches[0].clientX, 'm')}
                  onTouchEnd={(e) => handleSwipeEnd(e.changedTouches[0].clientX, 'm')}
                  onMouseDown={(e) => handleSwipeStart(e.clientX, 'm')}
                  onMouseUp={(e) => handleSwipeEnd(e.clientX, 'm')}
                >
                  {/* Floating text */}
                  <div aria-hidden="true" style={{
                    position: 'absolute',
                    left: '50%',
                    top: '44%',
                    fontWeight: 900,
                    fontSize: '128px',
                    letterSpacing: '-.05em',
                    color: 'rgba(26,23,20,0.05)',
                    whiteSpace: 'nowrap',
                    pointerEvents: 'none',
                    animation: 'ms-ghost 7s ease-in-out infinite'
                  }}>
                    {mMood === 'b' ? pairing.b : pairing.a}
                  </div>

                  {/* Mobile Shoe SVG Rendering */}
                  <div style={{ width: '84%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Shoe 
                      laceColor={mMood === 'b' ? MINT : WHITE}
                      agletColor={mMood === 'b' ? AGM : AGW}
                      settleKey={mSettleKey}
                    />
                  </div>

                  {/* Mobile Toggle Switches */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginTop: '10px', zIndex: 10 }}>
                    <div 
                      onClick={() => handleMSwitch('a')}
                      style={getWordStyle(mMood === 'a', false)}
                    >
                      {pairing.a}
                    </div>
                    <span style={{ fontSize: '14px', color: '#C2BDB3', fontWeight: 300, userSelect: 'none' }}>/</span>
                    <div 
                      onClick={() => handleMSwitch('b')}
                      style={getWordStyle(mMood === 'b', false)}
                    >
                      {pairing.b}
                    </div>
                  </div>

                  {/* Mobile Descriptor */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '11px' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: accentColor }}></span>
                    <span style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '.2em', textTransform: 'uppercase', color: '#7A756B' }}>
                      {mMood === 'b' ? pairing.db : pairing.da}
                    </span>
                  </div>

                  <div style={{ position: 'absolute', left: 0, right: 0, bottom: '12px', textAlign: 'center', fontSize: '9.5px', fontWeight: 600, letterSpacing: '.14em', textTransform: 'uppercase', color: '#B4AFA5' }}>
                    Swipe the shoe to switch
                  </div>
                </div>

                {/* Mobile Info Strip */}
                <div style={{ padding: '20px 24px 14px' }}>
                  <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', color: accentColor }}>
                    SS26 · Collectible
                  </div>
                  <h3 style={{ margin: '8px 0 0', fontWeight: 900, fontSize: '21px', lineHeight: 1.08, letterSpacing: '-.02em' }}>
                    {productName}
                  </h3>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '12px' }}>
                    <span style={{ fontWeight: 800, fontSize: '19px' }}>₹ 18,900</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '.1em', color: '#7A756B' }}>2 SETS</span>
                      <span style={{ width: '15px', height: '15px', borderRadius: '50%', background: '#FAFAF8', border: '1.5px solid #D8D4CC' }}></span>
                      <span style={{ width: '15px', height: '15px', borderRadius: '50%', background: MINT, border: '1.5px solid #6FCBA8' }}></span>
                    </div>
                  </div>
                </div>

                {/* Mobile CTA Button */}
                <div style={{ padding: '6px 18px 18px', display: 'flex', gap: '10px' }}>
                  <button style={{
                    flex: 1,
                    padding: '15px',
                    border: 'none',
                    borderRadius: '8px',
                    background: '#1A1714',
                    color: '#fff',
                    fontFamily: 'inherit',
                    fontWeight: 700,
                    fontSize: '13px',
                    letterSpacing: '.06em',
                    cursor: 'pointer'
                  }}>
                    ADD TO BAG
                  </button>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* ===== SPEC STRIP ===== */}
        <div className="spec-strip">
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '14px', marginBottom: '30px' }}>
            <span style={{ fontWeight: 900, fontSize: '40px', lineHeight: 1, color: '#E6E2DA' }}>02</span>
            <div>
              <div className="spec-title" style={{ fontWeight: 800, fontSize: '20px' }}>Mood Switch — Behaviour &amp; Build</div>
              <div style={{ fontWeight: 500, fontSize: '12px', letterSpacing: '.16em', textTransform: 'uppercase', color: accentColor, marginTop: '4px' }}>
                Editorial · Kinetic Type
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '38px 48px', fontSize: '13px', lineHeight: 1.55 }}>
            <div>
              <div style={{ fontWeight: 700, fontSize: '10px', letterSpacing: '.14em', textTransform: 'uppercase', color: '#A39E94', marginBottom: '9px' }}>
                Desktop behaviour
              </div>
              <div style={{ color: '#48443D' }}>
                Two mood words flank the centred shoe inside the image. Click a word — the active one scales up and darkens, the other recedes to a light caption. Laces re-thread to match (White ⇄ Mint). The ghost word, descriptor line and scene tint all reset together. You can also drag-swipe across the image to flip.
              </div>
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '10px', letterSpacing: '.14em', textTransform: 'uppercase', color: '#A39E94', marginBottom: '9px' }}>
                Mobile behaviour
              </div>
              <div style={{ color: '#48443D' }}>
                Words sit just under the shoe. Tap to switch, or swipe left / right across the image to flip moods. Hit targets stay ≥44px. The active word scales; descriptor and tint cross-fade. No carousel — one image, one focus.
              </div>
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '10px', letterSpacing: '.14em', textTransform: 'uppercase', color: '#A39E94', marginBottom: '9px' }}>
                Wireframe structure
              </div>
              <div style={{ color: '#48443D' }}>
                Gallery stage = left 60% (desktop) / top 60% (mobile). Inside: vertical index rail · ghost word layer · shoe · kinetic toggle · descriptor · hint. Product info (name, price, two-mood module, size, CTA) sits in the right rail / below.
              </div>
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '10px', letterSpacing: '.14em', textTransform: 'uppercase', color: '#A39E94', marginBottom: '9px' }}>
                Motion &amp; transitions
              </div>
              <div style={{ color: '#48443D' }}>
                Active word: scale + colour over 0.45s (cubic-bezier .4,0,.2,1). Shoe: a one-shot settle (≈ -1.4° tilt, 0.7s) on switch. Laces: 11-segment cascade recolour, front-to-collar, 60ms stagger (~0.6s). Ghost word + background tint cross-fade 0.55s.
              </div>
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '10px', letterSpacing: '.14em', textTransform: 'uppercase', color: '#A39E94', marginBottom: '9px' }}>
                Interaction states
              </div>
              <div style={{ color: '#48443D' }}>
                Mood A active (White) · Mood B active (Mint) · mid-transition (type in motion, cascade running) · hover (word lifts / cursor pointer) · swipe-dragging. State persists per device frame so both moods can be reviewed at once.
              </div>
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '10px', letterSpacing: '.14em', textTransform: 'uppercase', color: '#A39E94', marginBottom: '9px' }}>
                Visual direction
              </div>
              <div style={{ color: '#48443D' }}>
                Fashion-editorial, not configurator. Oversized Montserrat Black, tracked all-caps captions, one mint accent, bone canvas with a faint tint shift on the Mint mood. Reads like a lookbook spread.
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap', marginTop: '34px', paddingTop: '28px', borderTop: '1px solid #EDEAE3' }}>
            <div style={{ flex: '1 1 240px' }}>
              <div style={{ fontWeight: 700, fontSize: '10px', letterSpacing: '.14em', textTransform: 'uppercase', color: accentColor, marginBottom: '9px' }}>
                Pros
              </div>
              <div style={{ fontSize: '13px', lineHeight: 1.55, color: '#48443D' }}>
                Strong brand storytelling; frames the second set as identity, not a freebie; the type does the selling; calm, premium chrome.
              </div>
            </div>
            <div style={{ flex: '1 1 240px' }}>
              <div style={{ fontWeight: 700, fontSize: '10px', letterSpacing: '.14em', textTransform: 'uppercase', color: '#B9544A', marginBottom: '9px' }}>
                Cons
              </div>
              <div style={{ fontSize: '13px', lineHeight: 1.55, color: '#48443D' }}>
                Slightly less literal that it's a lace change; mood names must map cleanly to exactly two colours; relies on copy quality.
              </div>
            </div>
            <div style={{ flex: '1 1 240px' }}>
              <div style={{ fontWeight: 700, fontSize: '10px', letterSpacing: '.14em', textTransform: 'uppercase', color: '#A39E94', marginBottom: '9px' }}>
                Build complexity
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '2px' }}>
                <span style={{ display: 'flex', gap: '4px' }}>
                  <i style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#3FBF95', display: 'inline-block' }}></i>
                  <i style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#3FBF95', display: 'inline-block' }}></i>
                  <i style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#3FBF95', display: 'inline-block' }}></i>
                  <i style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#E3DFD7', display: 'inline-block' }}></i>
                  <i style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#E3DFD7', display: 'inline-block' }}></i>
                </span>
                <span style={{ fontSize: '13px', fontWeight: 600, color: '#6F6A60' }}>
                  Medium · toggle + kinetic type
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
