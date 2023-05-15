import React from 'react'

const TeamChannelList = ({children,error = false, loading, type}) => {

    if(error){
        return type === 'team' ? (
            <div className="team-channel-list">
                <p className="team-channel-list-message">
                    Connection error, please wail a moment and try again.
                </p>
            </div>
        ) : null
    }

    if(loading){
        return (
            <div className="team-channel-list">
                <p className="team-channel-list-message loading">
                    Connection error, please wait a moment and try again.
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
        </div>
    </div>
  )
}

export default TeamChannelList