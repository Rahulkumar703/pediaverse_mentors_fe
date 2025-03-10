import { useState } from "react";
import { cn } from "@/lib/utils";
import { TabType } from "./types";

interface TabsProps {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface TabsComponentProps {
  tabs: TabsProps[];
}

export default function TabsComponent({ tabs }: TabsComponentProps) {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="w-full bg-white p-2 shadow-sm border border-light-100 rounded-xl">
      <div className="flex border-b">
        {tabs.map((tab) => (
          <TabItem
            key={tab.id}
            tab={tab}
            isActive={activeTab === tab.id}
            onClick={() => setActiveTab(tab.id)}
          />
        ))}
      </div>
      <div className="p-4 py-10">{tabs.find((t) => t.id === activeTab)?.content}</div>
    </div>
  );
}

function TabItem({ tab, isActive, onClick }: {
  tab: TabType,
  isActive: boolean,
  onClick: () => void,
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "py-2 px-4 text-sm font-medium border-b-2 transition-all focus:outline-none text-light-200",
        isActive ? "border-b-primary-main" : "border-transparent"
      )}
      role="tab"
      aria-selected={isActive}
    >
      {tab.label}
    </button>
  );
}
