import { IconTable, IconShare } from '@tabler/icons-react'

export default function JsonTable () {
  const data = [
    {
      id: '1',
      name: 'test 1',
      createdAt: '2024-09-23T07:01.58.297Z'
    },
    {
      id: '2',
      name: 'test 2',
      createdAt: '2024-09-23T07:01.58.297Z'
    },
    {
      id: '3',
      name: 'test 3',
      createdAt: '2024-09-23T07:01.58.297Z'
    },
    {
      id: '4',
      name: 'test 4',
      createdAt: '2024-09-23T07:01.58.297Z'
    },
    {
      id: '5',
      name: 'test 5',
      createdAt: '2024-09-23T07:01.58.297Z'
    },
    {
      id: '6',
      name: 'test 6',
      createdAt: '2024-09-23T07:01.58.297Z'
    },
    {
      id: '7',
      name: 'test 7',
      createdAt: '2024-09-23T07:01.58.297Z'
    },
    {
      id: '8',
      name: 'test 8',
      createdAt: '2024-09-23T07:01.58.297Z'
    },
    {
      id: '9',
      name: 'test 9',
      createdAt: '2024-09-23T07:01.58.297Z'
    },
    {
      id: '10',
      name: 'test 10',
      createdAt: '2024-09-23T07:01.58.297Z'
    }
  ]

  return (
    <section className='mt-5'>
      <div className='flex items-center justify-between py-3 font-medium'>
        <h3 className='text-lg'>Listing of data</h3>
        <div className='flex items-center gap-x-1'>
          <IconTable className='text-teal-400' width={18} height={18} /> <span>{data.length}</span>
        </div>
      </div>

      <div className='w-full pr-0.5 h-72 overflow-auto'>
        <table className='text-left w-full min-w-[600px] lg:min-w-[700px] overflow-auto'>
          <thead className='flex w-full rounded-md bg-neutral-200 text-neutral-800 mb-1'>
            <tr className='flex w-full'>
              <th className='py-2.5 pl-6 w-1/3 text-base font-medium'>Name</th>
              <th className='py-2.5 w-2/4 text-base font-medium'>Created At</th>
              <th className='py-2.5 w-1/3 text-base font-medium'>Share</th>
            </tr>
          </thead>
          <tbody className='flex flex-col items-center justify-between w-full'>
            {data.map((item) => (
              <tr key={item.id} className='flex w-full font-medium text-sm rounded-md bg-neutral-400/10 mb-1'>
                <td className='py-1.5 pl-6 w-1/3'>{item.name}</td>
                <td className='py-1.5 w-2/4'>{item.createdAt}</td>
                <td className='py-1.5 pl-3.5 w-1/3 hover:text-teal-400 transition-colors duration-300'>
                  <IconShare width={18} height={18} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
