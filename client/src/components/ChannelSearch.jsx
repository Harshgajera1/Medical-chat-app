import React, { useState } from 'react'
import { useChatContext} from 'stream-chat-react'
import {SearchIcon} from '../assets/Index'

const ChannelSearch = () => {
  const[search,setSearch] = useState('')
  const[loading,setLoading] = useState(false)

  const getChannels = async () => {
    try {
        
    } catch (error) {
      
    }
  }

  const handleSearch = (e) => {
    setLoading(true)
    setSearch(e.target.value)
    getChannels(e.target.value)
  }

  return (
    <div className="channel-search-container">
        <div className="channel-search-input-wrapper">
            <div className="channel-search-input-icon">
                <SearchIcon />
            </div>
            <input
              className='channel-search-input-text'
              placeholder='Search'
              type='text'
              value={search}
              onChange={(e)=>{handleSearch(e)}}
            />
        </div>
    </div>
  )
}

export default ChannelSearch