import React from 'react'
import { ConnectButton } from 'thirdweb/react'
import { chain } from './chain'
import { client } from './client'
import UserStatus from '../../components/UserStatus'
import { Twitter, HomeIcon, Bell, Mail, User, Search } from 'lucide-react'
import Footer from '../../components/Footer'

const Home = () => {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#000000',
      color: '#ffffff'
    }}>
      <nav style={{
        backgroundColor: 'black',
        padding: '12px 16px',
        position: 'sticky',
        top: 0,
        zIndex: 10,
        borderBottom: '1px solid #2f3336'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
            <h1 className='text-[30px] text-[#1d9bf0] font-bold'>Twitter</h1>
            <Twitter size={32} color="#1d9bf0" />
            
          </div>
          <ConnectButton chain={chain} client={client} />
        </div>
      </nav>
      <main style={{
        maxWidth: '1200px',
        margin: '32px auto',
        padding: '0 16px'
      }}>
        <UserStatus />
      </main>
      <Footer/>
    </div>
  )
}

export default Home