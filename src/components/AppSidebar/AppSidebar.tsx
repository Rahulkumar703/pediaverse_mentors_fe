/* eslint-disable @typescript-eslint/no-explicit-any */
import { LogOut, User } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function AppSideBar() {
  const { open } = useSidebar();
  const location = useLocation();
  const navigate = useNavigate();
  const [navItems] = useState<any[]>([
    {
      url: "/",
      title: "Students Profiles",
      icon: User,
    },
  ]);

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <div className="flex flex-row items-center gap-4">
          <div className="bg-light-100 p-2 rounded-full">
            <p>PD</p>
          </div>
          {open && <h1 className="font-semibold text-xl">Pediaverse</h1>}
        </div>
      </SidebarHeader>
      <SidebarContent className="mt-5">
        <SidebarGroup className="p-0">
          <SidebarGroupContent>
            <SidebarMenu className="justify-start flex gap-2">
              {navItems.map((item) => (
                <SidebarMenuItem
                  key={item.title}
                  className={cn(
                    "hover:bg-gray-100 hover:text-black border-4 border-solid border-transparent",
                    location.pathname === item.url
                      ? " border-r-primary-main bg-gray-200"
                      : "bg-white",
                    open && "py-1"
                  )}
                >
                  <SidebarMenuButton asChild>
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div
          onClick={() => {
            localStorage.clear();
            navigate("/login");
          }}
          className={cn(
            "flex flex-row p-1 justify-between hover:bg-gray-200 rounded-lg hover:text-black cursor-pointer",
            open && "p-2"
          )}
        >
          {open && <h1>Logout</h1>}
          <LogOut className="w-6 h-6" />
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
