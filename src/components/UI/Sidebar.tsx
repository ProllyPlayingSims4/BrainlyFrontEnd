import { useState, type ReactElement } from "react"

interface SidebarProps {
    Logo: ReactElement,
    Heading: string,
    Tabs: string[];
    onTabClick?: (tab: string) => void
}

const defaultStyles = "flex flex-col items-start gap-3 w-48 p-4 bg-gray-100 h-full"

export function Sidebar(props: SidebarProps) {
    const [activeTab, setActiveTab] = useState(props.Tabs[0]);
    const handleClick = (tab: string) => {
        setActiveTab(tab);
        props.onTabClick?.(tab);
    }
    return <div  className="bg-linear-to-r from-gray-800 to-gray-600 backdrop-blur-xl">
        <div className="flex justify-center items-center ">
         {props.Logo}
         {props.Heading}
        </div>
        <div className={`${defaultStyles} bg-linear-to-r from-gray-800 to-gray-600 backdrop-blur-xl`}>
         {props.Tabs.map((tab) => {
            return (
            <button
            key={tab}
            onClick={() => handleClick(tab)}
            className={`w-full px-4 py-2 rounded cursor-pointer ${activeTab === tab ? "bg-blue-500 text-white": 
            "hover: bg-gray-200"
            }`}
            >
                {tab}
            </button>
         )} )}
        </div>
    </div>
}