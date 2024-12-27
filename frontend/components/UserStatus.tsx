'use client'

import React, { useState } from 'react'
import { ConnectEmbed, TransactionButton, useActiveAccount, useContractEvents, useReadContract } from "thirdweb/react"
import { Home, Search, Bell, Mail, Users, User, MoreHorizontal, Image, Film, Calendar, MapPin, Smile, BarChart2, MessageCircle, Repeat2, Heart, Share, Bookmark, Clock, Shield, Lock, Coins, Zap } from 'lucide-react'
import { chain } from '@/app/chain'
import { client } from '@/app/client'
import { Twitter } from 'lucide-react'
import { contract } from '../utils/contract'
import { prepareContractCall } from 'thirdweb'

const UserStatus = () => {
  const account = useActiveAccount();
  const add = account?.address as string;
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const features = [
    {
      Icon: Shield,
      title: "Decentralized Posts",
      description: "Your content lives on the blockchain, free from censorship"
    },
    {
      Icon: Lock,
      title: "Self-Custody",
      description: "You own your data and content with Web3 technology"
    },
    {
      Icon: Coins,
      title: "Token Rewards",
      description: "Earn crypto for your valuable contributions"
    },
    {
      Icon: Zap,
      title: "Lightning Fast",
      description: "Experience Web3 at Web2 speeds"
    }
  ];

  const [newStatus, setNewStatus] = React.useState("");
  const [charCount, setCharCount] = React.useState(0);

  const {data: myStatus, refetch: myStatusInfo} = useReadContract({
    contract: contract,
    method: "getStatus",
    params: [add]
  });

  const {data: contractEvents, refetch: refetchContractEvents} = useContractEvents({
    contract: contract
  });

  const truncateWalletAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };
  
  const convertDate = (timestamp: bigint) => {
    const timestampNumber = Number(timestamp);
    return new Date(timestampNumber * 1000).toLocaleString();
  };

  const mainStyle: React.CSSProperties = {
    display: 'flex',
    minHeight: '100vh',
    backgroundColor: 'black',
    color: 'white',
  };

  const sidebarStyle: React.CSSProperties = {
    width: '275px',
    padding: '20px',
    position: 'sticky',
    top: 0,
    height: '100vh',
    borderRight: '1px solid #2f3336',
  };

  const mainContentStyle: React.CSSProperties = {
    flex: '1',
    maxWidth: '600px',
    borderRight: '1px solid #2f3336',
  };

  const rightSidebarStyle: React.CSSProperties = {
    width: '350px',
    padding: '20px',
    position: 'sticky',
    top: 0,
    height: '100vh',
  };

  const navItemStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    padding: '12px',
    borderRadius: '9999px',
    cursor: 'pointer',
    fontSize: '20px',
    color: 'white',
    textDecoration: 'none',
    marginBottom: '8px',
  };

  const composeBoxStyle: React.CSSProperties = {
    padding: '16px',
    borderBottom: '1px solid #2f3336',
  };

  const tweetInputStyle: React.CSSProperties = {
    width: '100%',
    backgroundColor: 'transparent',
    border: 'none',
    color: 'white',
    fontSize: '20px',
    outline: 'none',
    marginTop: '20px',
    resize: 'none',
  };

  const tweetActionsStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '12px',
    paddingTop: '12px',
    borderTop: '1px solid #2f3336',
  };

  const searchStyle: React.CSSProperties = {
    backgroundColor: '#202327',
    borderRadius: '9999px',
    padding: '12px 20px',
    marginBottom: '16px',
  };

  if (!account) {
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        minHeight: '100vh',
        backgroundColor: 'black',
        color: 'white',
        padding: '0 8%',
        gap: '60px',
      }}>
        {/* Left Side Content */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          maxWidth: '600px',
        }}>
          <Twitter 
            size={40} 
            color="#1d9bf0" 
            style={{ 
              marginBottom: '48px',
              transform: 'scale(1)',
              transition: 'transform 0.3s ease',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          />
          <h1 style={{ 
            fontSize: '64px', 
            fontWeight: 'bold', 
            marginBottom: '32px',
            textAlign: 'left',
            lineHeight: '1.2',
          }}>
            Happening now
          </h1>
          <p style={{ 
            fontSize: '31px', 
            marginBottom: '48px',
            textAlign: 'left',
            color: '#e7e9ea',
          }}>
            Join Web3 Twitter today.
          </p>

          {/* Features Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '24px',
            width: '100%',
            marginBottom: '32px',
          }}>
            {features.map((feature, index) => {
              const IconComponent = feature.Icon;
              return (
                <div
                  key={index}
                  style={{
                    padding: '24px',
                    borderRadius: '16px',
                    backgroundColor: hoveredFeature === index ? '#16181c' : 'transparent',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    border: '1px solid #2f3336',
                  }}
                  onMouseEnter={() => setHoveredFeature(index)}
                  onMouseLeave={() => setHoveredFeature(null)}
                >
                  <IconComponent 
                    size={24} 
                    color="#1d9bf0"
                    style={{
                      marginBottom: '16px',
                      transform: hoveredFeature === index ? 'scale(1.1)' : 'scale(1)',
                      transition: 'transform 0.3s ease',
                    }}
                  />
                  <h3 style={{ 
                    fontSize: '18px', 
                    fontWeight: 'bold',
                    marginBottom: '8px',
                    color: hoveredFeature === index ? '#1d9bf0' : 'white',
                  }}>
                    {feature.title}
                  </h3>
                  <p style={{ 
                    fontSize: '14px',
                    color: '#71767b',
                    lineHeight: '1.5',
                  }}>
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side Content */}
        <div style={{
          maxWidth: '400px',
          width: '100%',
        }}>
          <ConnectEmbed
            chain={chain}
            client={client}
            style={{
              backgroundColor: '#16181c',
              padding: '32px',
              borderRadius: '16px',
              width: '100%',
              boxShadow: '0 8px 16px rgba(0,0,0,0.4)',
              border: '1px solid #2f3336',
            }}
          />
        </div>
      </div>
    );
  }

  return (
    <div style={mainStyle}>
      {/* Left Sidebar */}
      <div style={sidebarStyle}>
        <div style={{ marginBottom: '32px' }}>
          <Twitter size={30} color="#1d9bf0" />
        </div>
        
        <nav>
          {[
            { icon: Home, text: 'Home' },
            { icon: Search, text: 'Explore' },
            { icon: Bell, text: 'Notifications' },
            { icon: Mail, text: 'Messages' },
            { icon: Users, text: 'Communities' },
            { icon: User, text: 'Profile' },
            { icon: MoreHorizontal, text: 'More' }
          ].map((item, index) => (
            <div key={index} style={navItemStyle}>
              <item.icon size={24} />
              <span>{item.text}</span>
            </div>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div style={mainContentStyle}>
        <div style={composeBoxStyle}>
          <div style={{ fontWeight: 'bold', fontSize: '20px' }}>Home</div>
          <textarea
            placeholder="What's happening?!"
            value={newStatus}
            onChange={(e) => {
              setNewStatus(e.target.value);
              setCharCount(e.target.value.length);
            }}
            style={tweetInputStyle}
            rows={3}
          />
          <div style={tweetActionsStyle}>
            <div style={{ display: 'flex', gap: '16px' }}>
              <Image size={20} color="#1d9bf0" />
              <Film size={20} color="#1d9bf0" />
              <BarChart2 size={20} color="#1d9bf0" />
              <Smile size={20} color="#1d9bf0" />
              <Calendar size={20} color="#1d9bf0" />
              <MapPin size={20} color="#1d9bf0" />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ color: charCount > 140 ? '#f4212e' : '#1d9bf0' }}>
                {140 - charCount}
              </span>
              <TransactionButton
                transaction={() => prepareContractCall({
                  contract: contract,
                  method: "setStatus",
                  params: [newStatus],
                })}
                onTransactionConfirmed={() => {
                  alert("Transaction Confirmed");
                  setNewStatus("");
                }}
                style={{
                  backgroundColor: '#1d9bf0',
                  color: 'white',
                  border: 'none',
                  borderRadius: '9999px',
                  padding: '8px 16px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                }}
              >
                Tweet
              </TransactionButton>
            </div>
          </div>
        </div>

        <div>
          {contractEvents && contractEvents.length > 0 ? (
            [...contractEvents].reverse().map((event, index) => (
              <div
                key={index}
                style={{
                  padding: '16px',
                  borderBottom: '1px solid #2f3336',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ color: '#1d9bf0', fontWeight: 500 }}>
                    {/* @ts-ignore */}
                    {truncateWalletAddress(event.args?.user || "0x0000")}
                  </span>
                </div>
                {/* @ts-ignore */}
                <p style={{ marginBottom: '12px' }}>{event.args?.newStatus || "No message provided."}</p>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  color: '#71767b',
                  width: '80%',
                  margin: '0 auto'
                }}>
                  <MessageCircle size={18} />
                  <Repeat2 size={18} />
                  <Heart size={18} />
                  <Share size={18} />
                  <Bookmark size={18} />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#71767b', fontSize: '14px', marginTop: '12px' }}>
                  <Clock size={14} />
                  {/* @ts-ignore */}
                  <span>{convertDate(event.args?.timestamp)}</span>
                </div>
              </div>
            ))
          ) : (
            <p style={{ textAlign: 'center', color: '#71767b', padding: '20px' }}>No tweets yet.</p>
          )}
        </div>
      </div>

      {/* Right Sidebar */}
      <div style={rightSidebarStyle}>
        <div style={{
          ...searchStyle,
          display: 'flex',
          alignItems: 'center'
        }}>
          <Search size={20} color="#71767b" />
          <input
            type="text"
            placeholder="Search"
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              color: 'white',
              marginLeft: '12px',
              outline: 'none',
            }}
          />
        </div>

        <div style={{
          backgroundColor: '#16181c',
          borderRadius: '16px',
          padding: '16px',
          marginBottom: '16px',
        }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '12px' }}>
            Try Premium
          </h2>
          <p style={{ color: '#e7e9ea', marginBottom: '16px' }}>
            Subscribe to unlock new features and if eligible, receive a share of ads revenue.
          </p>
          <button style={{
            backgroundColor: '#1d9bf0',
            color: 'white',
            border: 'none',
            borderRadius: '9999px',
            padding: '8px 16px',
            fontWeight: 'bold',
            cursor: 'pointer',
            width: '100%',
          }}>
            Subscribe
          </button>
        </div>

        <div style={{
          backgroundColor: '#16181c',
          borderRadius: '16px',
          padding: '16px',
        }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '12px' }}>
            What's happening
          </h2>
          {['Web3', 'Blockchain', 'Crypto', 'NFTs'].map((topic, index) => (
            <div key={index} style={{
              padding: '12px 0',
              borderBottom: index < 3 ? '1px solid #2f3336' : 'none',
            }}>
              <div style={{ color: '#71767b', fontSize: '13px' }}>Trending in Tech</div>
              <div style={{ fontWeight: 'bold', marginTop: '4px' }}>#{topic}</div>
              <div style={{ color: '#71767b', fontSize: '13px', marginTop: '4px' }}>
                {Math.floor(Math.random() * 10000)}K posts
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserStatus;

