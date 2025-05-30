import { useState } from "react";
import Sidebar from "../components/Sidebar";
import ChatContainer from "../components/ChatContainer";
import RightSidebar from "../components/RightSidebar";
const HomePage = () => {
    const [selectedUser, setSelectedUser]= useState(false);
  return (
    <div className="border w-full h-screen sm:px-[12%] sm:py-[3%]">
        <div className={`backdrop-blur-xl bg-white/10  border-2 h-[100%] border-gray-600 rounded-2xl overflow-hidden grid grid-cols-1 relative ${selectedUser ? 'md:grid-cols-[1fr_1.5fr_1fr] xl:grid-cols-[1fr_2fr_1fr]':'md:grid-cols-2'}`}>
            <Sidebar selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
            <ChatContainer selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
            <RightSidebar selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
        </div>
    </div>
  )
}

export default HomePage