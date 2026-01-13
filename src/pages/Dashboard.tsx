import { Button } from '../components/UI/Button'
import { AddIcon } from '../components/Icons/AddIcon'
import { ShareIcon } from '../components/Icons/ShareIcon'
import { Sidebar } from '../components/UI/Sidebar'
import { BrainLogo } from '../components/Icons/BrainLogo'
import { Card } from '../components/UI/Card'
import { useEffect, useState } from 'react'
import { useNotes } from '../api/api'

import { AddContentForm } from '../components/UI/AddContentForm'

const Dashboard = () => {


  const notes = useNotes();


  
  const [showAddModal, setShowAddModal] = useState(false)

  const handleShare = () => {
    console.log("share post")
  }
  const addContent = () => {
    console.log("add some content");
    setShowAddModal(true);
  }
  const closeAddContent = () => setShowAddModal(false);

  const handleTabClick = (tab: string) => {
    console.log(tab);
  }

  const handleSubmit = () => {
    console.log("Submitted");
  }


  
 

  return (

    <>
      <AddContentForm open= {showAddModal} onClose={closeAddContent} onSubmit={handleSubmit}/>
      <Sidebar Logo={<BrainLogo />} Heading='Smart Brain' Tabs={["Tweets", "Videos", "Documents", "Links", "Tags"]} onTabClick={handleTabClick} />
     

      <header className='fixed top-0 left-48 right-0 z-50 p-4 bg-linear-to-r from-gray-800 to-gray-600 backdrop-blur-xl flex items-center justify-between'>
        <div className='text-white'>
          All Notes
        </div>
        <nav className='flex justify-between m-4 gap-2'>
          <Button variant='primary' size='sm' text='Add Content' startIcon={<AddIcon />} onClick={addContent} />
          <Button variant='secondary' size='md' text='Share Brain' startIcon={<ShareIcon />} onClick={handleShare} />
        </nav>
      </header>

      <div className='Main Content min-h-screen grid grid-cols-3 gap-3 pt-30 p-4 ml-48 bg-linear-to-r from-gray-800 to-gray-600 backdrop-blur-xl'>
        {notes.map((content: any) => {
          return <Card key={content.userId} Logo={<BrainLogo />} Heading={content.title} MainContent={content.link} Tags={content.tags?.map((t: { title: any }) => t.title).join(" ")} Date={content.createdAt} />
        })}
      </div>
    </>
  )
}

export default Dashboard;