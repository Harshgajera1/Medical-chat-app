import { useState } from 'react'
import { StreamChat } from 'stream-chat'
import { Chat } from 'stream-chat-react'
import Cookies from 'universal-cookie'

import { ChannelContainer, ChannelListContainer, Auth} from './components'

const apikey = '2s4thzw54q88'

const client = StreamChat.getInstance(apikey)

const authToken = false

const App = () => {

  if(!authToken) return <Auth />

  return (
    <>
      <div className="app-wrapper">
        <Chat client={client} theme='team light'>
          <ChannelListContainer />
          <ChannelContainer />
        </Chat>
      </div>
    </>
  )
}

export default App
