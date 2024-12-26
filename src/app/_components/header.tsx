import { LayoutGrid, LogInIcon, SearchIcon, ShoppingCart, UserPlus } from 'lucide-react'
import { Input } from 'postcss'
import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


const Header = () => {
    return (
        <div className='flex justify-between items-center shadow-sm'>
            <div className='flex items-center p-3 gap-6 '>
                <h1 className='text-2xl font-bold text-center text-lime-500'>
                    Grocery Store
                </h1>
                <div>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <h2 className='hidden md:flex items-center gap-2 text-sm bg-slate-200 rounded-full p-2 px-10 border cursor-pointer '><LayoutGrid className='w-5 h-5' /> Category</h2>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>Category</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Profile</DropdownMenuItem>
                            <DropdownMenuItem>Billing</DropdownMenuItem>
                            <DropdownMenuItem>Team</DropdownMenuItem>
                            <DropdownMenuItem>Subscription</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                </div>
                <div className='hidden md:flex items-center gap-2'>
                    <SearchIcon />
                    <input type="text" placeholder="Search Here..." className='border-1 border-gray-100 rounded-lg p-2 text-sm bg-slate-50' />
                </div>
            </div>
            <div className='flex items-center p-3 gap-2'>
                <p className='flex items-center gap-2 p-3'>
                    <ShoppingCart />
                    0
                </p>
                <UserPlus />

            </div>

        </div>
    )
}

export default Header