import './Header.css';

export const Header = () => {
  return (
    <div className="header-overflow-hidden">
      <div className="header-container">
        <div className="header-content">
          <div className="header-text-container">
            <h2 className="header-title">
              The quick, brown fox <br className="hidden md:block" />
              jumps over a{' '}
              <span className="header-highlight">lazy dog</span>
            </h2>
            <p className="header-description">
              Thus, it is that the entire thing was born from the pursuit of fault, the 
              accusations of fault, and the praise for pain, as I uncover the whole
            </p>
            <a
              href="/"
              aria-label=""
              className="header-link"
            >
              Learn more
              <svg
                className="header-icon"
                fill="currentColor"
                viewBox="0 0 12 12"
              >
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
              </svg>
            </a>
          </div>
          <div className="header-image-container">
           
          </div>
        </div>
      </div>
    </div>
  );
};
