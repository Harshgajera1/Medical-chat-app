import { useState } from 'react'
import { StreamChat } from 'stream-chat'
import { Chat } from 'stream-chat-react'
import Cookies from 'universal-cookie'
import { ChannelContainer, ChannelListContainer, Auth} from './components'

const cookies = new Cookies()

const apikey = '2s4thzw54q88'
const authToken = cookies.get('token')
// const authToken = true

const client = StreamChat.getInstance(apikey)

if(authToken){
  client.connectUser({
    id : cookies.get('userId'),
    name : cookies.get('userName'),
    fullName : cookies.get('fullName'),
    image : cookies.get('avatarURL'),
    hashedPassword : cookies.get('hashedPassword'),
    phoneNumber : cookies.get('phoneNumber'),
  }, authToken)
}

const App = () => {
  const[createType,setCreateType] = useState('')
  const[isCreating,setIsCreating] = useState(false)
  const[isEditing,setIsEditing] = useState(false)

  if(!authToken) return <Auth />

  return (
    <>
      <div className="app-wrapper">
        <Chat client={client} theme='team light'>
          <ChannelListContainer 
            isCreating={isCreating}
            setIsCreating={setIsCreating}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
          />
          <ChannelContainer 
            isCreating={isCreating}
            setIsCreating={setIsCreating}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
            createType={createType}
          />
        </Chat>
      </div>
    </>
  )
}

export default App
