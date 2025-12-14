import axios from 'axios'
import { useState, useEffect } from 'react';


const token = localStorage.getItem("token");

export const useNotes = () => {
  const [notes, setNotes] = useState([]);
  
  useEffect(() => {
   
    if (!token) return;
    const fetchNotes = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/v1/content", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setNotes(res.data.content);
      } catch (error) {
        console.error(error);
      }
    };
    fetchNotes();
  }, []);
  
  return notes;
};
