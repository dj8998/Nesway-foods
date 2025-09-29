"use client";

import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, MoveRight, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

function Header1() {
    const navigationItems = [
        {
            title: "Home",
            href: "/",
            description: "",
        },
        {
            title: "Products",
            description: "Discover our range of healthy and delicious food products.",
            items: [
                {
                    title: "Silken Tofu",
                    href: "/products/silken-tofu",
                },
                {
                    title: "Hummus",
                    href: "/products/hummus",
                },
                {
                    title: "Guacamole",
                    href: "/products/guacamole",
                },
                {
                    title: "Mocktails",
                    href: "/products/mocktails",
                },
                {
                    title: "Jackfruit",
                    href: "/products/jackfruit",
                },
            ],
        },
        {
            title: "Services",
            href: "/services",
            description: "",
        },
    ];

    const [isOpen, setOpen] = useState(false);
    return (
        <header className="w-full z-50 fixed top-0 left-0 backdrop-blur-md border-b-2 shadow-sm" style={{backgroundColor: '#F5F0E0', borderBottomColor: '#EBAFB4'}}>
            <div className="w-full relative mx-auto min-h-20 flex justify-between items-center px-4 lg:container lg:grid lg:grid-cols-3">
                <div className="justify-start items-center gap-4 hidden lg:flex flex-row">
                    <NavigationMenu className="flex justify-start items-start [&_[data-radix-navigation-menu-viewport]]:!bg-[#F5F0E0]">
                        <NavigationMenuList className="flex justify-start gap-4 flex-row">
                            {navigationItems.map((item) => (
                                <NavigationMenuItem key={item.title}>
                                    {item.href ? (
                                        <>
                                            <NavigationMenuLink asChild>
                                                <Link href={item.href}>
                                                    <Button variant="ghost" className="text-lg font-semibold">{item.title}</Button>
                                                </Link>
                                            </NavigationMenuLink>
                                        </>
                                    ) : (
                                        <>
                                            <NavigationMenuTrigger className="font-semibold text-lg">
                                                {item.title}
                                            </NavigationMenuTrigger>
                                            <NavigationMenuContent className="!w-[450px] p-4 !bg-[#F5F0E0]">
                                                <div className="flex flex-col lg:grid grid-cols-2 gap-4">
                                                    <div className="flex flex-col h-full justify-between">
                                                        <div className="flex flex-col">
                                                            <p className="text-base font-semibold">{item.title}</p>
                                                            <p className="text-muted-foreground text-sm">
                                                                {item.description}
                                                            </p>
                                                        </div>
                                                        <Button size="sm" className="mt-10">
                                                            Request Samples
                                                        </Button>
                                                    </div>
                                                    <div className="flex flex-col text-sm h-full justify-end">
                                                        {item.items?.map((subItem) => (
                                                            <NavigationMenuLink
                                                                asChild
                                                                key={subItem.title}
                                                                className="flex flex-row justify-between items-center hover:bg-muted py-2 px-4 rounded"
                                                            >
                                                                <Link href={subItem.href} className="flex flex-row justify-between items-center w-full">
                                                                    <span>{subItem.title}</span>
                                                                    <MoveRight className="w-4 h-4 text-muted-foreground" />
                                                                </Link>
                                                            </NavigationMenuLink>
                                                        ))}
                                                    </div>
                                                </div>
                                            </NavigationMenuContent>
                                        </>
                                    )}
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
                <div className="flex justify-center lg:justify-center">
                    <Link href="/" className="text-h5 font-semibold text-primary">
                        Nesway Foods
                    </Link>
                </div>
                <div className="hidden lg:flex justify-end w-full gap-2 lg:gap-4">
                    <Button variant="outline" asChild className="text-sm lg:text-lg font-semibold px-3 lg:px-4">
                        <Link href="/about">About Us</Link>
                    </Button>
                    <Button asChild className="text-sm lg:text-lg font-semibold px-3 lg:px-4">
                        <Link href="/contact">Contact</Link>
                    </Button>
                </div>
                <div className="flex lg:hidden items-center">
                    <Button variant="ghost" onClick={() => setOpen(!isOpen)} className="p-2 -mr-2">
                        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </Button>
                    {isOpen && (
                        <div className="absolute top-20 left-0 right-0 border-t-2 flex flex-col w-full backdrop-blur-md shadow-lg py-4 px-4 gap-6" style={{backgroundColor: '#F5F0E0', borderTopColor: '#EBAFB4'}}>
                            {navigationItems.map((item) => (
                                <div key={item.title}>
                                    <div className="flex flex-col gap-2">
                                        {item.href ? (
                                            <Link
                                                href={item.href}
                                                className="flex justify-between items-center py-2"
                                                onClick={() => setOpen(false)}
                                            >
                                                <span className="text-lg font-medium">{item.title}</span>
                                                <MoveRight className="w-4 h-4 stroke-1 text-muted-foreground" />
                                            </Link>
                                        ) : (
                                            <p className="text-lg font-semibold py-2">{item.title}</p>
                                        )}
                                        {item.items &&
                                            item.items.map((subItem) => (
                                                <Link
                                                    key={subItem.title}
                                                    href={subItem.href}
                                                    className="flex justify-between items-center pl-4 py-1"
                                                    onClick={() => setOpen(false)}
                                                >
                                                    <span className="text-muted-foreground text-base">
                                                        {subItem.title}
                                                    </span>
                                                    <MoveRight className="w-4 h-4 stroke-1" />
                                                </Link>
                                            ))}
                                    </div>
                                </div>
                            ))}
                            <div className="flex flex-col gap-2 pt-4 border-t border-gray-200">
                                <Link
                                    href="/about"
                                    className="flex justify-between items-center py-2"
                                    onClick={() => setOpen(false)}
                                >
                                    <span className="text-lg font-medium">About Us</span>
                                    <MoveRight className="w-4 h-4 stroke-1 text-muted-foreground" />
                                </Link>
                                <Link
                                    href="/contact"
                                    className="flex justify-between items-center py-2"
                                    onClick={() => setOpen(false)}
                                >
                                    <span className="text-lg font-medium">Contact</span>
                                    <MoveRight className="w-4 h-4 stroke-1 text-muted-foreground" />
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}

export { Header1 };
