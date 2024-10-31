import JsonEditor from './json-editor'
import JsonTable from './json-table'

export default function DashboardPage () {
  return (
    <main className='max-w-4xl lg:max-w-3xl lg:mx-auto md:mx-10 mx-4 font-medium'>
      <h3 className='mt-5 text-2xl'>Dashboard</h3>
      <h4 className='mt-1 text-base'>Manage your data and share with others</h4>

      <div className='bg-[#202020] rounded-lg p-6 mt-5'>
        <h3 className='text-2xl'>Saved data</h3>
        <h4 className='mt-1 text-base'>View and share your saved JSON data</h4>

        <JsonEditor />
        <JsonTable />
      </div>
    </main>
  )
}
