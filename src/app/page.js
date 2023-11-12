import {Sidebar} from '../components/sidebar';
import Instapost from '../components/instapost';
import Socialmedia from '../components/socialmedia';
import Competition from '@/components/competition';

export default function Home() {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='p-5 w-4/5 ml-auto'>
      <Competition />
      </div>
      </div>
  )
}
