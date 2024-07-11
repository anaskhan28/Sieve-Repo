import React from 'react'
import getUserData from '../actions/getUserData'
import { redirect } from 'next/navigation';
import Image from 'next/image';
import Filter from '@/components/Filter'
import getPlaylistData from '@/app/actions/getPlaylistData';
import PlaylistCards from '@/components/PlaylistCards';
import Search  from '@/components/Search';



type Props = {
  [key:string]: string
}


const playlist = async ({searchParams}: {searchParams: Props }) => {


  const userData = await getUserData();
  
   const playlistDatas =  await getPlaylistData(searchParams.query, searchParams.filter) || await getPlaylistData(searchParams.query, searchParams.filter);


  if (!userData) {
    return redirect('/signup');
  }

  
  if (!playlistDatas) return null;

  return (
    <div className='bg-[#0E0E0E] w-full min-h-screen'>
      <div className='container p-4 flex flex-col justify-center items-center py-16'>
   <Search/>

    <div className='hidden md:flex text-white justify-end  items-center gap-2 mt-5 self-start '>
      <Image src="/category.svg" alt='category' width={30} height={30}/>
      <span className='text-lg md:text-xl items-center'>Categories</span>
    </div>

     <Filter/>
      </div>
     <div className='container mx-auto px-4 '>
      <PlaylistCards className='grid grid-cols-1 md:grid-cols-3 gap-8' playlistData={playlistDatas}  />
     </div>
      
    </div>
  )
}

export default playlist