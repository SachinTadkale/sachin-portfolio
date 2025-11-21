import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ 
          padding: '50px', 
          background: '#fee', 
          color: '#c00',
          minHeight: '100vh',
          fontSize: '18px'
        }}>
          <h1 style={{ fontSize: '32px', marginBottom: '20px' }}>
            ⚠️ Error Rendering App
          </h1>
          <p><strong>Error:</strong> {this.state.error?.toString()}</p>
          <p style={{ marginTop: '20px' }}>
            Check the browser console (F12) for more details.
          </p>
          <button 
            onClick={() => window.location.reload()}
            style={{
              marginTop: '20px',
              padding: '10px 20px',
              fontSize: '16px',
              background: '#c00',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            Reload Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

