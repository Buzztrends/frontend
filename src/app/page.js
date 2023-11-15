import Sidebar from '../components/sidebar';
import Competition from '@/components/competition';
import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/home')
  return (
    <div className='flex'>
      <Sidebar />
      <div className='p-5 w-4/5 ml-auto'>
      <Competition />
      </div>
      </div>
  )
}
