import { IconLogin2, IconLogout2 } from '@tabler/icons-react'

import { Tooltip } from '@nextui-org/tooltip'
import { Session } from '@supabase/supabase-js'
export default function NavbarAuthButton({
  session,
  handleSignOut,
}: {
  session: Session | null
  handleSignOut: () => void
}) {
  return (
    <>
      {session === null ? (
        <Tooltip content="Login" color="primary">
          <a className="flex items-center hover:text-gray-200" href="/login">
            <IconLogin2 color="white" strokeWidth={0.8} />
          </a>
        </Tooltip>
      ) : (
        <Tooltip content="LogOut" color="primary">
          <button
            onClick={handleSignOut}
            className="flex items-center justify-center aspect-square shadow-xl dark:shadow-thick hover:bg-zinc-100 dark:hover:bg-primary ring-1 bg-zinc-50 dark:ring-white/10 ring-primary/5 dark:bg-tertiary rounded-lg hover:ring-primary/5 dark:hover:ring-white/20 duration-300 group transition-all h-6 w-6">
            {<IconLogout2 color="white" strokeWidth={0.8} />}
          </button>
        </Tooltip>
      )}
    </>
  )
}
