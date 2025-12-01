import { Button } from '../components/UI/Button'
import { AddIcon } from '../components/Icons/AddIcon'
import { ShareIcon } from '../components/Icons/ShareIcon'
import { Sidebar } from '../components/UI/Sidebar'
import { BrainLogo } from '../components/Icons/BrainLogo'
import { Card } from '../components/UI/Card'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Dashboard = () => {

  const token = localStorage.getItem("token");
  const [notes, setNotes] = useState([]);

  const handleShare = () => {
    console.log("share post")
  }
  const addContent = () => {
    console.log("add some content")
  }
  const handleTabClick = (tab: string) => {
    console.log(tab);
  }


  const getNotes = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/v1/content", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log(res);
      const data = res.data.content;
      setNotes(data);
      
      
    } catch (e) {
      console.error(e);
    }
  }
  useEffect(() => {
    getNotes();
  }, [])

  return (
    <>

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

        <div className='Main Content grid grid-cols-3 gap-3 pt-30 p-4 ml-48 bg-linear-to-r from-gray-800 to-gray-600 backdrop-blur-xl'>
          {notes.map((content: any)=> {
            return <Card key={content.userId} Logo={<BrainLogo/>} Heading={content.title} MainContent={content.link} Tags={content.tags?.map((t: { title: any }) => t.title).join(" ")} Date={content.createdAt}/>
          })} 
        </div>
    </>
  )
}

export default Dashboard;