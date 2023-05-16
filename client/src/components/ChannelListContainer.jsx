import React from 'react'
import {ChannelList, useChatContext} from 'stream-chat-react'
import Cookies from 'universal-cookie'
import hospitalIcon from '../assets/hospital.png'
import logoutIcon from '../assets/logout.png'
import { ChannelSearch, TeamChannelList, TeamChannelPreview } from './'

const cookies = new Cookies()

const SideBar = ({logout}) =>{
  return (
    <div className="channel-list-sidebar">
      <div className="channel-list-sidebar-icon1">
        <div className="icon1-inner">
          <img src={hospitalIcon} alt='Hospital' width={30} />
        </div>
      </div>

      <div className="channel-list-sidebar-icon2">
        <div className="icon1-inner">
          <img src={logoutIcon} onClick={()=>{logout}} alt='Logout' width={30} />
        </div>
      </div>
    </div>
  )
} 

const CompanyHeader = () =>{
  return (
    <div className="channel-list-header">
      <p className="channel-list-header-text">
        Medical Gajera
      </p>
    </div>
  )
}

const customChannelTeamFilter = (channels) => {
  return channels.filter((channel) => channel.type === 'team');
}

const customChannelMessagingFilter = (channels) => {
  return channels.filter((channel) => channel.type === 'messaging');
}

const ChannelListContainer = ({ isCreating, setIsCreating, setCreateType, setIsEditing, setToggleContainer }) => {
  const { client } = useChatContext();

  const filters = { members: { $in: [client.userID] } };

  const logout = () =>{ 
    cookies.remove('userId');
    cookies.remove('userName');
    cookies.remove('fullName');
    cookies.remove('avatarURL');
    cookies.remove('hashedPassword');
    cookies.remove('phoneNumber');

    window.location.reload()
  }
  
  return (
    <>
      <SideBar logout={logout}/>
      <div className="channel-list-list-wrapper">
        <CompanyHeader />
        <ChannelSearch setToggleContainer={setToggleContainer}/>
        <ChannelList
          filters={filters}
          channelRenderFilterFn={customChannelTeamFilter}
          List={(listProps)=>{
            <TeamChannelList {...listProps} type={'team'}
              isCreating={isCreating}
              setIsCreating={setIsCreating}
              setCreateType={setCreateType} 
              setIsEditing={setIsEditing}
              setToggleContainer={setToggleContainer}
            />
          }}
          Preview={(previewProps)=>{
            <TeamChannelPreview 
              {...previewProps}
              setIsCreating={setIsCreating}
              setIsEditing={setIsEditing}
              setToggleContainer={setToggleContainer}
              type="team"
            />
          }}
        />

        <ChannelList 
          filters={filters}
          channelRenderFilterFn={customChannelMessagingFilter}
          List={(listProps)=>{
            <TeamChannelList {...listProps} type={'messaging'}
              isCreating={isCreating}
              setIsCreating={setIsCreating}
              setCreateType={setCreateType} 
              setIsEditing={setIsEditing}
              setToggleContainer={setToggleContainer}
            />
          }}
          Preview={(previewProps)=>{
            <TeamChannelPreview 
              {...previewProps}
              setIsCreating={setIsCreating}
              setIsEditing={setIsEditing}
              setToggleContainer={setToggleContainer}
              type="messaging"
            />
          }}
        />
      </div>
    </>
  )
}

export default ChannelListContainer