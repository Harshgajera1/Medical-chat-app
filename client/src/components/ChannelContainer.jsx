import React from 'react'
import {Channel, useChatContext} from 'stream-chat-react'
import {ChannelInner, CreateChannel, EditChannel, TeamChannelList, TeamMessage} from '../components'

const ChannelContainer = ({isCreating, createType, setIsEditing, isEditing, setIsCreating}) => {

  const {channel} = useChatContext()

  if(isCreating){
    return <div className='channel-container'>
      <CreateChannel createType={createType} setIsCreating={setIsCreating} />
    </div>
  }

  if(isEditing){
    return <div className='channel-container'>
      <CreateChannel setIsEditing={setIsEditing} />
    </div>
  }

  const EmptyState = () => (
    <div className='channel-empty-container'>
      <p className='channel-empty-first'>This is the beginning of your chat history.</p>
      <p className='channel-empty-second'>Send messages, attechments, links, emojis, amd more!</p>
    </div>
  )

  return (
    <div className='channel-container'>
      <Channel
        EmptyStateIndicator={EmptyState}
        Message={(messageProps,i)=>{<TeamMessage key={i} {...messageProps} />}}
      >
        <ChannelInner setIsEditing={setIsEditing} />
      </Channel>
    </div>
  )
}

export default ChannelContainer