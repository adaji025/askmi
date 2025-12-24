"use client";
import Logo from "@/assets/images/svgs/askmi-logo.svg";

import * as React from "react";
import {
  IconChartBar,
  IconDashboard,
  IconFolder,
  IconListDetails,
} from "@tabler/icons-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { NavMain } from "./nav-main";
import { NavUser } from "./nav-user";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: IconDashboard,
    },
    {
      title: "Brands",
      url: "/brands",
      icon: IconListDetails,
    },
    {
      title: "Influencers",
      url: "/influencers",
      icon: IconFolder,
    },
    {
      title: "OCR Reviews",
      url: "/ocr-reviews",
      icon: IconChartBar,
    },
    {
      title: "Campaigns",
      url: "/campaigns",
      icon: IconChartBar,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:p-1.5! hover:bg-transparent hover:border-0 hover:border-r-0 active:border-0 active:border-r-0 data-[active=true]:border-0 data-[active=true]:border-r-0"
            >
              <a href="#">
                <img src={Logo} alt="askmi logo" className="max-w-30 h-8" />
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <div className="text-center bg-[#302D54] p-1.5 rounded-sm text-[#8B5CF6] text-xs font-bold">
          CONTROL CENTER
        </div>
      </SidebarHeader>
      <SidebarContent className="mt-6">
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
