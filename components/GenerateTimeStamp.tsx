'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { APIService } from '@/services/APIService'
import { Circle } from 'lucide-react'
import React, { useState } from 'react'

const GenerateTimeStamp = () => {
  const [url, setUlr] = useState('')
  const [timeStamps, setTimeStamps] = useState('')
  const [loading, setLoading] = useState(false)

  const handleGeneration = async () => {
    setLoading(true)
    try {
      const res = await APIService.post('http://localhost:3000/api/get-transcript', { url })
      setTimeStamps(res)
      setLoading(false)
    } catch (error) {
      setLoading(false)
    }
  }
  const statements = timeStamps.split(/\s(?=\d{1,2}:\d{2})/);

  // Format each statement as an array
  const formattedArray = statements.map(statement => statement.replace(/(\d{1,2}:\d{2})/, '$1 ') + '\n');
  
  console.log(formattedArray);

  return (
    <div className="flex flex-col  w-full max-w-sm items-center space-x-2">
      <div className='flex gap-4'>

        <Input onChange={(e) => setUlr(e.target.value)} type="email" placeholder="Put your video URL/ID" />
        <Button type="submit" onClick={handleGeneration}>{loading ? <Circle className='animate-spin bg-white' /> : 'Get Timestamps'}</Button>
      </div>
      {formattedArray.length > 0 &&
        <div className='w-full py-8 shadow-md px-6 mx-auto'>
          {formattedArray}
        </div>}
    </div>
  )
}

export default GenerateTimeStamp