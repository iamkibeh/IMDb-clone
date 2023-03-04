import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { BsFillMoonFill } from 'react-icons/bs'
import { MdLightMode } from 'react-icons/md'

const DarkModeSwitch = () => {
  const { systemTheme, theme, setTheme } = useTheme()

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const currentTheme = theme === 'system' ? systemTheme : theme

  return (
    <>
      {
        // If mounted on client, now we can show the UI

        mounted && currentTheme === 'dark' ? (
          <MdLightMode
            className='cursor-pointer hover:text-amber-300 text-xl'
            onClick={(theme) => setTheme('light')}
          />
        ) : (
          <BsFillMoonFill
            className='cursor-pointer hover:text-amber-300 text-xl'
            onClick={(theme) => setTheme('dark')}
          />
        )
      }
    </>
  )
}

export default DarkModeSwitch
