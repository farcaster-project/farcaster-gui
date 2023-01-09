import Image from 'next/image'
import { BsGithub } from 'react-icons/bs'

export default function FcLogo() {
  return (
    <a href="https://github.com/farcaster-project" target="_blank" rel="noreferrer">
      <div className="group relative">
        <Image
          className="ring-1 ring-offset-4 ring-gray-700 ring-offset-transparent rounded-xl mb-6 shadow-lg"
          alt="Farcaster logo"
          src="/farcaster.png"
          width={125}
          height={125}
        />

        <div className="opacity-0 group-hover:opacity-100 transition-all ease-in-out absolute top-0 left-0 w-[125px] h-[125px] text-5xl flex items-center justify-center text-white bg-gray-900/80 rounded-xl">
          <BsGithub />
        </div>
      </div>
    </a>
  )
}
