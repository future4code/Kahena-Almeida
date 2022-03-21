import {
  ChevronDoubleDownIcon,
  ShoppingBagIcon,
  UserGroupIcon
} from '@heroicons/react/outline'
import {
  CalendarIcon,
  ClockIcon,
  DesktopComputerIcon,
  UsersIcon
} from '@heroicons/react/solid'
import { useSession } from 'next-auth/react'
import SidebarRow from './SidebarRow'

function Sidebar() {
  const { data: session, loading } = useSession()

  return (
    <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
      <SidebarRow src={session.user.image} title={session.user.name} />
      <SidebarRow Icon={UsersIcon} title="Amigos" />
      <SidebarRow Icon={UserGroupIcon} title="Grupos" />
      <SidebarRow Icon={ShoppingBagIcon} title="Marketplace" />
      <SidebarRow Icon={DesktopComputerIcon} title="Assistir" />
      <SidebarRow Icon={CalendarIcon} title="Eventos" />
      <SidebarRow Icon={ClockIcon} title="Histórico" />
      <SidebarRow Icon={ChevronDoubleDownIcon} title="Veja mais" />
    </div>
  )
}

export default Sidebar
