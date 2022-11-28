import Image from "next/image"
import dashboard from "./img/dashboard.png"
import community from "./img/community.png"
import course from "./img/course.png"
import knowledge from "./img/knowledge.png"
import learn from "./img/learn.png"
import notepad from "./img/notepad.png"
import notification from "./img/notification.png"
import project from "./img/project.png"
import rooms from "./img/rooms.png"
import services from "./img/services.png"
import team from "./img/team.png"

export default function Home() {
  return (
    <div className="flex flex-row">
      <div className='flex flex-col px-8 py-8 gap-3 bg-slate-900 text-white h-screen w-72'>
        <span className="bg-violet-600 rounded-full h-6 w-6 text-center">K</span>
        <button className="border-b-gray-300 border-2 rounded-md py-1 my-4">Create new Space</button>
        <span className="flex flex-row"><Image className="h-6 w-6 mx-2" src={dashboard} alt='dashboard'></Image> Dashboard</span>
        <span className="flex flex-row" > <Image className="h-6 w-6 mx-2" src={notepad} alt='dashboard'></Image> Notepad</span>
        <span className="flex flex-row"> <Image className="h-6 w-6 mx-2" src={rooms} alt='rooms'></Image> Rooms</span>
        <span className="flex flex-row"> <Image className="h-6 w-6 mx-2" src={notification} alt='notification'></Image> Notification</span>
        <span >  Favourites</span>
        <span className="flex flex-row"> <Image className="h-6 w-6 mx-2" src={community} alt='community'></Image> Comunity</span>
        <span className="flex flex-row"> <Image className="h-6 w-6 mx-2" src={course} alt='course'></Image> Course</span>
        <span className="flex flex-row"> <Image className="h-6 w-6 mx-2" src={project} alt='project'></Image> Project</span>
        <span >  View All</span>
        <span >  All Spaces</span>
        <span className="flex flex-row"> <Image className="h-6 w-6 mx-2" src={team} alt='team'></Image> Team</span>
        <span className="flex flex-row"> <Image className="h-6 w-6 mx-2" src={knowledge} alt='knowledge'></Image> Knowledge</span>
        <span className="flex flex-row"> <Image className="h-6 w-6 mx-2" src={learn} alt='learn'></Image> Learn</span>
        <span className="flex flex-row"> <Image className="h-6 w-6 mx-2" src={notepad} alt='dashboard'></Image> View All</span>
        <span className="flex flex-row"> <Image className="h-6 w-6 mx-2" src={notepad} alt='dashboard'></Image> Meridian University</span>
        <span className="flex flex-row"> <Image className="h-6 w-6 mx-2" src={services} alt='services'></Image> Services App</span>
        <div className="py-20">
          <hr />
          <span>Help & Support</span>
        </div>
      </div>
      <div className="w-screen bg-slate-700 ">
        <nav className="bg-slate-900 text-white flex flex-row h-24 items-center gap-10 list-none">
          <li>Home</li>
          <li>Upcoming</li>
          <li>My Spaces</li>
          <li>Assignned to Me</li>
          <li>Explore Spaces</li>
        </nav>
        <div >
          <nav className="flex flex-row justify-between text-white">
            <ul className="px-8 py-6">
              <li>Upcoming</li>
            </ul>
            <ul className="flex flex-row px-8 py-6 gap-6">
              <li>Type</li>
              <li>From</li>
              <li>To</li>
            </ul>
          </nav>
          <div className="mx-8">
            <hr />
          </div>

        </div>
        <div className="grid grid-cols-4 grid-flow-row gap-11 px-8 py-8">
          <div className="h-60 w-80 bg-slate-900 rounded-lg"></div>
          <div className="h-60 w-80 bg-slate-900 rounded-lg"></div>
          <div className="h-60 w-80 bg-slate-900 rounded-lg"></div>
          <div className="h-60 w-80 bg-slate-900 rounded-lg"></div>
          <div className="h-60 w-80 bg-slate-900 rounded-lg"></div>
          <div className="h-60 w-80 bg-slate-900 rounded-lg"></div>
          <div className="h-60 w-80 bg-slate-900 rounded-lg"></div>
          <div className="h-60 w-80 bg-slate-900 rounded-lg"></div>
          <div className="h-60 w-80 bg-slate-900 rounded-lg"></div>
          <div className="h-60 w-80 bg-slate-900 rounded-lg"></div>
          <div className="h-60 w-80 bg-slate-900 rounded-lg"></div>
          <div className="h-60 w-80 bg-slate-900 rounded-lg"></div>
        </div>
      </div>
    </div>
  )
}
