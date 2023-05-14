import React from 'react'
import {ChannelList, useChatContext} from 'stream-chat-react'
import Cookies from 'universal-cookie'
import hospitalIcon from '../assets/hospital.png'
import logoutIcon from '../assets/logout.png'
import { ChannelSearch, TeamChannelList, TeamChannelPreview } from './'

const SideBar = () =>{
  return (
    <div className="channel-list-sidebar">
      
      <div className="channel-list-sidebar-icon1">
        <div className="icon1-inner">
          <img src={hospitalIcon} alt='Hospital' width={30} />
        </div>
      </div>

      <div className="channel-list-sidebar-icon2">
        <div className="icon2-inner">
          <img src={logoutIcon} alt='Hospital' width={30} />
        </div>
      </div>

    </div>
  )
} 

const CompanyHeader = () =>{
  return (
    <div className="channel-list-sidebar">
      <div className="channel-list-header-text">
        Medical Gajera
      </div>
    </div>
  )
}

const ChannelListContainer = () => {
  return (
    <>
      <SideBar />
      <div className="channel-list-list-wrapper">
        <CompanyHeader />
        <ChannelSearch />
        <ChannelList 
          filters={{}}
          channelRenderFilterFn={()=>{}}
          List={(listProps)=>{
            <TeamChannelList {...listProps} type={'team'}/>
          }}
          Preview={(previewProps)=>{
            <TeamChannelPreview 
              {...previewProps}
              type="team"
            />
          }}
        />

        <ChannelList 
          filters={{}}
          channelRenderFilterFn={()=>{}}
          List={(listProps)=>{
            <TeamChannelList {...listProps} type={'messaging'}/>
          }}
          Preview={(previewProps)=>{
            <TeamChannelPreview 
              {...previewProps}
              type="messaging"
            />
          }}
        />
      </div>
    </>
  )
}

export default ChannelListContainer