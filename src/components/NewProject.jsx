import React from 'react'
import { HiOutlinePlusSm } from 'react-icons/hi'

export default function NewProject() {
  return (
    <div>
    <div className="flex flex-col gap-y-4 md:flex-row justify-between px-8 items-center py-4 drop-shadow-lg rounded-t-lg border-b-2 border-gray-200">
          <p className="font-bold">Project Overview</p>
          <button className="flex gap-x-2 items-center bg-gradient-to-r from-sky-500 to-indigo-500 text-white px-10 py-2 rounded-lg ">
            {" "}
            <span>
              <HiOutlinePlusSm size={24} />
            </span>
            Add Project
          </button>
        </div>
    </div>
  )
}
