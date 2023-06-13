'use client'

import { useRouter } from "next/navigation"
import Image from "next/image"
import {FaPlay} from 'react-icons/fa'
import getLikedSongs from "@/actions/getLikedSongs"
import { useUser } from "@/hooks/useUser"
import AuthModal from "./AuthModal"
import useAuthModal from "@/hooks/useAuthModal"
import useOnPlay from "@/hooks/useOnPlay"

interface ListItemProps {
    image: string,
    name: string,
    href:string,
}

const ListItem: React.FC<ListItemProps> = ({image, name, href}) => {
    const router = useRouter();
    const {user} = useUser();
    const authModal = useAuthModal();
    const onClick = () => {
        //Add authentication before push
        if (!user){
            return authModal.onOpen()
        } else if (user) {
            router.push(href)
        }
    };

    return (
        <button onClick={onClick} className=" relative group flex items-center rounded-md overflow-hidden gap-x-4 bg-neutral-100/10 hover:bg-neutral-100/20 transition pr-4">
            <div className="relative min-h-[64px] min-w-[64px]">
                <Image className="object-cover" src={image} fill alt="image" />
            </div>
            <p className="font-medium truncate py-5">{name}</p>
            <div className="absolute transition opacity-0 rounded-full flex items-center justify-center bg-green-500 p-4 drop-shadow-md right-5 group-hover:opacity-100 hover:scale-110">
                <FaPlay onClick={()=>{}} className="text-black" />
            </div>
        </button>
    );
}
 
export default ListItem