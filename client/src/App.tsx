import { useState, useRef } from 'react'

function App() {
  const [showMessage, setShowMessage] = useState(false)
  const noButtonRef = useRef<HTMLButtonElement>(null)
  const [clickCount, setClickCount] = useState(0)

  const handleYes = () => {
    setShowMessage(true)
  }

  const handleNoClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setClickCount(clickCount + 1)
    if (noButtonRef.current) {
      const randomX = Math.random() * 300 - 150
      const randomY = Math.random() * 300 - 150
      noButtonRef.current.style.transform = `translate(${randomX}px, ${randomY}px)`
    }
  }

  const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E2']
  const randomColor = colors[Math.floor(Math.random() * colors.length)]

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #00f2fe 100%)',
      backgroundSize: '400% 400%',
      animation: 'gradientShift 15s ease infinite',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Arial, sans-serif',
      padding: '20px'
    }}>
      {!showMessage ? (
        <div style={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(240, 248, 255, 0.95))',
          borderRadius: 'clamp(20px, 5vw, 30px)',
          padding: 'clamp(30px, 8vw, 60px) clamp(20px, 6vw, 40px)',
          boxShadow: `0 20px 70px ${randomColor}60, 0 0 30px rgba(255, 255, 255, 0.3) inset`,
          textAlign: 'center',
          maxWidth: '90vw',
          width: '100%',
          position: 'relative',
          border: '3px solid',
          borderImage: 'linear-gradient(135deg, #FF6B6B, #4ECDC4, #45B7D1, #FFA07A) 1',
          animation: 'pulseGlow 3s ease-in-out infinite'
        }}>
          <h1 style={{
            fontSize: 'clamp(2rem, 8vw, 3.5rem)',
            background: 'linear-gradient(135deg, #FF6B6B, #4ECDC4, #45B7D1, #FFA07A, #F7DC6F)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: 'clamp(15px, 5vw, 30px)',
            fontWeight: 'bold',
            animation: 'bounce 2s ease-in-out infinite'
          }}>
            Do you miss me? 💔
          </h1>

          <div style={{
            display: 'flex',
            gap: 'clamp(15px, 4vw, 30px)',
            justifyContent: 'center',
            minHeight: '60px',
            alignItems: 'center',
            position: 'relative',
            margin: 'clamp(20px, 5vw, 40px) 0',
            flexWrap: 'wrap'
          }}>
            <button
              onClick={handleYes}
              style={{
                padding: 'clamp(12px, 3vw, 15px) clamp(25px, 6vw, 40px)',
                fontSize: 'clamp(1rem, 4vw, 1.3rem)',
                fontWeight: 'bold',
                background: 'linear-gradient(135deg, #FF6B6B, #FF8E72)',
                color: 'white',
                border: 'none',
                borderRadius: '15px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 8px 25px rgba(255, 107, 107, 0.6)',
                transform: 'scale(1)',
                whiteSpace: 'nowrap'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.15) rotate(-5deg)'
                e.currentTarget.style.boxShadow = '0 12px 35px rgba(255, 107, 107, 0.8)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)'
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(255, 107, 107, 0.6)'
              }}
            >
              Yes 😍❤️
            </button>

            <button
              ref={noButtonRef}
              onClick={handleNoClick}
              style={{
                padding: 'clamp(12px, 3vw, 15px) clamp(25px, 6vw, 40px)',
                fontSize: 'clamp(1rem, 4vw, 1.3rem)',
                fontWeight: 'bold',
                background: 'linear-gradient(135deg, #4ECDC4, #45B7D1)',
                color: 'white',
                border: 'none',
                borderRadius: '15px',
                cursor: 'pointer',
                position: 'absolute',
                transition: 'transform 0.1s ease',
                boxShadow: '0 8px 25px rgba(78, 205, 196, 0.6)',
                whiteSpace: 'nowrap'
              }}
            >
              No 😡💔
            </button>
          </div>

          {clickCount > 0 && (
            <p style={{
              fontSize: 'clamp(0.85rem, 3vw, 1rem)',
              color: '#FF6B6B',
              fontWeight: 'bold',
              marginTop: 'clamp(15px, 4vw, 20px)',
              animation: 'wiggle 0.5s ease-in-out'
            }}>
              Nice try! You've pressed it {clickCount} times! 😄
            </p>
          )}

          <p style={{
            color: '#666',
            fontSize: 'clamp(0.8rem, 2.5vw, 0.95rem)',
            marginTop: 'clamp(15px, 4vw, 30px)',
            fontStyle: 'italic'
          }}>
            (Good luck clicking "No"! 😈✨)
          </p>
        </div>
      ) : (
        <div style={{
          background: 'linear-gradient(135deg, rgba(255, 182, 193, 0.95), rgba(255, 240, 245, 0.95))',
          borderRadius: 'clamp(20px, 5vw, 30px)',
          padding: 'clamp(30px, 8vw, 60px) clamp(20px, 6vw, 40px)',
          boxShadow: '0 20px 70px rgba(255, 105, 180, 0.5), 0 0 30px rgba(255, 255, 255, 0.3) inset',
          textAlign: 'center',
          maxWidth: '90vw',
          width: '100%',
          animation: 'slideInHeart 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
          border: '3px solid #FF69B4'
        }}>
          <div style={{ 
            fontSize: 'clamp(2.5rem, 10vw, 4rem)', 
            marginBottom: 'clamp(10px, 3vw, 20px)', 
            animation: 'float 3s ease-in-out infinite' 
          }}>
            💕 💗 💖
          </div>
          
          <h1 style={{
            fontSize: 'clamp(1.8rem, 7vw, 2.8rem)',
            background: 'linear-gradient(135deg, #FF1493, #FF69B4, #FFB6C1)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: 'clamp(15px, 4vw, 20px)',
            fontWeight: 'bold'
          }}>
            I miss you more! 💕
          </h1>
          
          <p style={{
            fontSize: 'clamp(1rem, 4vw, 1.3rem)',
            background: 'linear-gradient(135deg, #FF6B6B, #FFA07A, #FFB6C1)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: 'clamp(20px, 5vw, 30px)',
            fontWeight: 'bold'
          }}>
            You just made me the happiest person alive! 🥰✨
          </p>

          <button
            onClick={() => {
              setShowMessage(false)
              setClickCount(0)
              if (noButtonRef.current) {
                noButtonRef.current.style.transform = 'translate(0, 0)'
              }
            }}
            style={{
              padding: 'clamp(12px, 3vw, 15px) clamp(25px, 6vw, 35px)',
              fontSize: 'clamp(0.95rem, 3.5vw, 1.1rem)',
              fontWeight: 'bold',
              background: 'linear-gradient(135deg, #FF1493, #FFB6C1)',
              color: 'white',
              border: 'none',
              borderRadius: '15px',
              cursor: 'pointer',
              boxShadow: '0 8px 25px rgba(255, 20, 147, 0.6)',
              transition: 'all 0.3s ease',
              whiteSpace: 'nowrap'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.1)'
              e.currentTarget.style.boxShadow = '0 12px 35px rgba(255, 20, 147, 0.8)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)'
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(255, 20, 147, 0.6)'
            }}
          >
            Ask Again ❤️
          </button>
        </div>
      )}

      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        @keyframes pulseGlow {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }

        @keyframes slideInHeart {
          from {
            opacity: 0;
            transform: scale(0.3) rotate(-10deg);
          }
          to {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes wiggle {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-5deg); }
          75% { transform: rotate(5deg); }
        }
      `}</style>
    </div>
  )
}

export default App
