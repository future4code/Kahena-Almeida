import { SearchIcon } from '@heroicons/react/outline'
import { DotsHorizontalIcon, VideoCameraIcon } from '@heroicons/react/solid'
import Contact from './Contact'

const contacts = [
  {
    src: 'https://i.postimg.cc/DftJL8GF/272872079-4889456481143636-7747770111810562335-n.jpg',
    name: 'Kahena Mansano'
  },
  {
    src: 'https://links.papareact.com/4u4',
    name: 'Bill Gates'
  },
  {
    src: 'https://links.papareact.com/4zn',
    name: 'Elon Musk'
  },
  {
    src: 'https://links.papareact.com/k2j',
    name: 'Jeff Bezoz'
  },
  {
    src: 'https://links.papareact.com/xql',
    name: 'Mark Zuckerberg'
  }
]

function Widgets() {
  return (
    <div className="hidden lg:flex flex-col w-60 p-2 mt-5">
      <div className="flex justify-between items-center text-gray-500 mb-5">
        <h2>Contatos</h2>
        <div className="flex space-x-2">
          <VideoCameraIcon className="h-6" />
          <SearchIcon className="h-6" />
          <DotsHorizontalIcon className="h-6" />
        </div>
      </div>

      {contacts.map(contact => (
        <Contact key={contact.src} src={contact.src} name={contact.name} />
      ))}
    </div>
  )
}

export default Widgets
