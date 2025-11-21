// SIMPLE TEST VERSION - Replace App.jsx with this to test
function App() {
  return (
    <div style={{ 
      padding: '50px', 
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
      color: 'white',
      minHeight: '100vh',
      fontSize: '24px',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>
        ✅ React is Working!
      </h1>
      <p>If you see this, React is rendering correctly.</p>
      <p style={{ marginTop: '20px', fontSize: '16px' }}>
        The issue is likely in one of the components. Check browser console (F12) for errors.
      </p>
    </div>
  );
}

export default App;

