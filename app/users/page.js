'use client';

import React from 'react';
import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function Users() {
    return (
        <header className="flex items-center justify-between p-4 bg-primary">
          <div className="text-white font-semibold text-2xl">Trip Sinc</div>
          <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="default"
              className="rounded-md px-12 py-2 text-md font-medium transition-colors hover:bg-gray-200 bg-white text-black dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
            >
              Login
              
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-40 rounded-md bg-white p-2 shadow-lg dark:bg-gray-800  ">
            <DropdownMenuItem>
              <Link href="/tourist" className="flex items-center gap-2 hover:text-primary "  >
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
              <Link href="#" className="flex items-center gap-2 hover:text-primary" prefetch={false}>
              <FontAwesomeIcon icon="fa-solid fa-user-tie" />
                Service Provider
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
          </header>
      );
    }
    