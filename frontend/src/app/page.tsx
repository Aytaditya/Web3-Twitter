import React from 'react'
import { ConnectButton } from 'thirdweb/react'
import { chain } from './chain'
import { client } from './client'
import UserStatus from '../../components/UserStatus'
import { XIcon } from 'lucide-react'

const Home = () => {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#000000',
      color: '#ffffff'
    }}>
      <nav style={{
        backgroundColor: 'black',
        padding: '16px',
        position: 'sticky',
        top: 0,
        zIndex: 10,
        boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <h1 style={{
            fontSize: '27px',
            fontWeight: 800,
            background: 'linear-gradient(to right, #00ff9d, #00b8ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>Web3 Twitter</h1>
          <ConnectButton chain={chain} client={client} />
        </div>
      </nav>
      <hr className="border-t border-gray-800" />
      <main style={{
        maxWidth: '1200px',
        margin: '32px auto',
        padding: '0 16px'
      }}>
        <UserStatus />
      </main>
    </div>
  )
}

export default Home

