import React from 'react';
import { useReadContract } from 'thirdweb/react';

const Footer = () => {
  return (
    <div>
      {/* Footer */}
      <div style={{ position: 'fixed', bottom: 0, width: '100%', borderTop: '1px solid #1f2937', backgroundColor: 'black', backdropFilter: 'blur(10px)' }}>
        <div style={{ maxWidth: '6xl', margin: '0 auto', padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '14px' }}>
          <span style={{ color: '#71717a' }}>
            Powered by secure blockchain technology
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', color: '#a1a1aa' }}>
          <a href="#" style={{ color: '#00b8ff', transition: 'color 0.3s', textDecoration: 'none' }} >1Cr+ Users</a>
            <a href="#" style={{ color: '#a1a1aa', transition: 'color 0.3s', textDecoration: 'none' }} >Terms</a>
            <a href="#" style={{ color: '#a1a1aa', transition: 'color 0.3s', textDecoration: 'none' }} >Privacy</a>
            <a 
              href="https://github.com/Aytaditya" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: '#a1a1aa', transition: 'color 0.3s', textDecoration: 'none' }}
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;