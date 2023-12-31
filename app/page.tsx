import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import GenerateTimeStamp from '../components/GenerateTimeStamp'
export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center p-24">
      <h1 className='text-3xl pb-8 text-red-500 font-extrabold'>Youtube Chapters Generator</h1>
      <GenerateTimeStamp />
      
    </main>
  )
}
