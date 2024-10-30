import JsonEditor from './json-editor'

export default function DashboardPage () {
  return (
    <main className='max-w-4xl lg:max-w-3xl lg:mx-auto md:mx-10 mx-4 font-medium'>
      <h3 className='mt-5 text-2xl'>Dashboard</h3>
      <h4 className='mt-1 text-base'>Manage your data and share with others</h4>

      <JsonEditor />
    </main>
  )
}
