import React from 'react'
import Link from "next/link"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Button } from '@/components/ui/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function Header() {
    return(
        <header className="px-4 lg:px-6 h-14 flex items-center border-b border-gray-500 shadow-lg">
        <Link href="#" className="text-xl flex font-medium hover:underline underline-offset-4  items-center justify-center" prefetch={false}>
          
          Trip Sinc
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-lg font-medium hover:underline underline-offset-4 py-2" prefetch={false}>
            Explore
          </Link>
          <Link href="#" className="text-lg font-medium hover:underline underline-offset-4 py-2" prefetch={false}>
            About Us
          </Link>
          <Link href="#" className="text-lg font-medium hover:underline underline-offset-4 py-2" prefetch={false}>
            Bookings
          </Link>
          <Link href="#" className="text-lg font-medium hover:underline underline-offset-4 " prefetch={false}>
          <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="default"
              className="rounded-md text-md font-medium transition-colors hover:bg-gray-200 bg-white text-black dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
            >
              Login
              
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-40 rounded-md bg-white p-2 shadow-lg dark:bg-gray-800  ">
            <DropdownMenuItem>
              <Link href="/personality" className="flex items-center gap-2 hover:text-primary bg-gray-400 "  >
              <FontAwesomeIcon icon="fa-solid fa-suitcase" />
                Tourist
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="#" className="flex items-center gap-2 hover:text-primary" prefetch={false}>
              <FontAwesomeIcon icon="fa-solid fa-utensils" />
                Local Guide
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="#" className="flex items-center gap-2 text-blue-700 hover:text-primary" prefetch={false}>
              <FontAwesomeIcon icon="fa-solid fa-user-tie" />
                Service Provider
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

          </Link>
        </nav>
        
      </header>
    )

}