import { AppSidebar } from "@/components/AppSidebar";
import { Header } from "@/components/Header";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full bg-[#F9FAFB]">
        <Header>
          <SidebarTrigger className="group w-10 h-10 px-0 py-0" />
        </Header>
        {children}
      </main>
    </SidebarProvider>
  );
}
