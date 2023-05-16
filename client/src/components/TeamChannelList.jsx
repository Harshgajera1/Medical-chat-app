import React from 'react'
import { AddChannel } from '../assets/Index'

const TeamChannelList = ({children,error = false, loading, type}) => {

    if(error){
        return type === 'team' ? (
            <div className="team-channel-list">
                <p className="team-channel-list-message">
                    Connection error, please wait a moment and try again.
                </p>
            </div>
        ) : null
    }

    if(loading){
        return (
            <div className="team-channel-list">
                <p className="team-channel-list-message loading">
                    { type === 'team' ? 'Channels' : 'Messages' } loading...
                </p>
            </div>
        )
    }

  return (
    <div className="team-channel-list">
        <div className="team-channel-list-header">
            <p className="team-channel-list-header-title">
                {type === 'team' ? 'Channels' : 'Direct Messages'}
            </p>
            <AddChannel 
                isCreating={isCreating}
                setIsCreating={setIsCreating}
                setCreateType={setCreateType} 
                setIsEditing={setIsEditing}
                type={type === 'team' ? 'team' : 'messaging'}
                setToggleContainer={setToggleContainer}
            />
        </div>
    </div>
  )
}

export default TeamChannelList