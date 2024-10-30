'use client'
import CodeMirror from '@uiw/react-codemirror'
import { json } from '@codemirror/lang-json'
import { IconPlus, IconCircleX } from '@tabler/icons-react'
import { useState } from 'react'

export default function JsonEditor () {
  const [isOpen, setIsOpen] = useState(false)
  const [jsonName, setJsonName] = useState('')
  const [jsonData, setJsonData] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  console.log({
    jsonName, setJsonData
  })

  return (
    <section className='mt-5'>
      <button type='button' className='bg-neutral-200 rounded-md px-3 py-1.5' onClick={() => setIsOpen(!isOpen)}>
        {!isOpen &&
          <div className='flex items-center justify-center gap-x-0.5 text-neutral-900 text-sm font-medium'>
            <IconPlus width={18} height={18} /> <span>New JSON</span>
          </div>}
      </button>

      {isOpen && (
        <div className='fixed inset-0 flex items-center px-6 lg:px-0 bg-[#565656] bg-opacity-50 transition-opacity duration-300'>
          <article className='flex flex-col mx-auto h-fit p-6 w-full lg:w-[672px] xl:w-[768px] bg-neutral-800 rounded-lg'>
            <div className='flex justify-between'>
              <h3 className='text-lg font-medium'>Create a new JSON</h3>
              <button type='button' onClick={() => setIsOpen(false)}>
                <IconCircleX width={26} height={26} />
              </button>
            </div>

            <form className='mt-5 text-sm font-medium'>
              <div className='flex flex-col gap-y-1'>
                <label htmlFor='name'>JSON name</label>
                <input
                  value={jsonName}
                  className='outline-none focus:border-blue-400 bg-transparent border border-neutral-400 rounded-md px-4 py-1.5'
                  onChange={e => setJsonName(e.target.value)}
                  type='text'
                  placeholder='For example: First JSON, New file...'
                />
              </div>

              <div className='flex flex-col gap-y-1 mt-3'>
                <label htmlFor='description'>JSON data</label>
                <CodeMirror
                  value={jsonData}
                  className='text-neutral-800 border'
                  height='390px'
                  onChange={(value) => setJsonData(value)}
                  extensions={[json()]}
                />
              </div>

              <div className='flex justify-end gap-x-3 mt-3 text-sm font-medium'>
                <button type='button' className='btn-border' onClick={() => setIsOpen(false)}>Close</button>
                <button disabled={!jsonName || !jsonData} type='submit' className='btn-bg' onClick={handleSubmit}>
                  Save
                </button>
              </div>
            </form>
          </article>
        </div>
      )}
    </section>
  )
}
