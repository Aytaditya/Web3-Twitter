'use client'

import React from 'react'
import { ConnectEmbed, useActiveAccount } from "thirdweb/react"
import { Shield, Lock, Coins, User, XIcon } from 'lucide-react'
import { chain } from '@/app/chain'
import { client } from '@/app/client'
import { Twitter } from 'lucide-react'


const UserStatus = () => {
  const account = useActiveAccount();

  const features = [
    { text: "Censorship-resistant posts", Icon: Shield },
    { text: "Full ownership of your content", Icon: Lock },
    { text: "Integrated cryptocurrency tipping", Icon: Coins },
    { text: "Decentralized identity management", Icon: User }
  ];

  const logs = [
    { text: "New user joined Twitter", time: "1 day ago" },
    { text: "0xcCBB...B689 made a new tweet", time: "2 days ago" },
  ];

  if(account){
    return (
        <div>
            hi chud gye guru
        </div>
      );
  }

  return(
    <div className="container">
          <div className="">
            <div className='colorChange'>
            <span className="marginTopp text-change"> <Twitter size={75}/></span>
            </div>
            <div className='flex'>
            <h2 className="heading flex">
                Welcome to Twitter
                
            </h2>
            </div>
            <p className="text">
              Experience the future of social media with our decentralized platform. 
              {/* Connect your wallet to get started and enjoy: */}
            </p>
            <ul className="list">
              {features.map((feature, index) => (
                <li key={index} className="list-item">
                  <feature.Icon className="icon" />
                  <span>{feature.text}</span>
                </li>
              ))}
            </ul>
            <p className="text">
              Connect your wallet now to join the decentralized social revolution!
            </p>
            <button className="button">
              Get Started
            </button>
          </div>
          {/* <div className="latest-changes-card">
            <h3 className="heading small">Latest Changes</h3>
            {logs.map((log, index) => (
              <div key={index} className="log-item">
                <div>{log.text}</div>
                <div className="log-time">{log.time}</div>
              </div>
            ))}
          </div> */}
          <ConnectEmbed  chain={chain} client={client}/>
        </div>
  )
}

export default UserStatus