import React from 'react'
import { Avatar, useChatContext } from 'stream-chat-react'

const TeamChannelPreview = () => {
  const {channel : activeChannel, client} = useChatContext()

  const ChannelPreview = () =>{
    return (
      <p className="channel-preview-item">
        
      </p>
    )
  } 

  return (
    <div>TeamChannelPreview</div>
  )
}

export default TeamChannelPreview