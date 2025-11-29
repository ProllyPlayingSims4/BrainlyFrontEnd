import { Button } from '../components/UI/Button'
import { AddIcon } from '../components/Icons/AddIcon'
import { ShareIcon } from '../components/Icons/ShareIcon'
import { Sidebar } from '../components/UI/Sidebar'
import { BrainLogo } from '../components/Icons/BrainLogo'

const Dashboard = () => {

  const handleShare = () => {
    console.log("share post")
  }
  const addContent = () => {
    console.log("add some content")
  }
  const handleTabClick = (tab: string) => {
    console.log(tab);
  }

  return (
    <div className='flex h-screen bg-linear-to-r from-gray-800 to-gray-600 backdrop-blur-xl'>

      <Sidebar Logo={<BrainLogo />} Heading='Smart Brain' Tabs={["Tweets", "Videos", "Documents", "Links", "Tags"]} onTabClick={handleTabClick} />

      <div className='flex-1 p-4'>
        <Button variant='primary' size='sm' text='Add Content' startIcon={<AddIcon />} onClick={addContent} />
        <Button variant='secondary' size='md' text='Share Brain' startIcon={<ShareIcon />} onClick={handleShare} />
      </div>



    </div>
  )
}

export default Dashboard