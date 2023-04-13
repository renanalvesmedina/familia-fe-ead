import React from 'react'

export function Tabs() {
  return (
    <ul className="flex flex-wrap border-b border-gray-200" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
      <li className="mr-2" role="presentation">
        <button 
          className="inline-block py-4 px-8 border-b-2 border-brand-700 hover:border-brand-700 rounded-t-lg text-brand-700"
          id="profile-tab" 
          data-tabs-target="#profile"
          type="button" 
          role="tab" 
          aria-controls="profile" 
          aria-selected="false"
          >
            Perfil
          </button>

        {/* <a href="#" 
          aria-current="page" 
          className="inline-block bg-gray-100 text-brand-700 rounded-t-lg py-4 px-8 text-sm font-medium text-center active">
          Perfil
        </a> */}
      </li>
      <li className="mr-2" role="presentation">
      <button 
        className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" 
        id="dashboard-tab" 
        data-tabs-target="#dashboard" 
        type="button" 
        role="tab" 
        aria-controls="dashboard" 
        aria-selected="false"
        >
          Segurança
        </button>

        {/* <a href="#" 
          className="inline-block text-gray-500 hover:text-gray-600 hover:bg-gray-50 rounded-t-lg py-4 px-8 text-sm font-medium text-center">
          Segurança
        </a> */}
      </li>
    </ul>
  )
}
