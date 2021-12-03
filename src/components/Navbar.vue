<template>
  <div class="flex items-center justify-between">
    <p class="font-bold text-2xl">MOLD</p>
    <div class="md:flex space-x-10 hidden">
      <router-link
        to="/"
        class="text-gray-800 hover:bg-blue-100 hover:text-blue-800 px-3 py-1 transition duration-300 rounded-full"
      >
        <div class="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M21.66,10.25l-9-8a1,1,0,0,0-1.32,0l-9,8a1,1,0,0,0-.27,1.11A1,1,0,0,0,3,12H4v9a1,1,0,0,0,1,1H19a1,1,0,0,0,1-1V12h1a1,1,0,0,0,.93-.64A1,1,0,0,0,21.66,10.25ZM13,20H11V17a1,1,0,0,1,2,0Zm5,0H15V17a3,3,0,0,0-6,0v3H6V12H18ZM5.63,10,12,4.34,18.37,10Z"
            />
          </svg>
          <p>Home</p>
        </div>
      </router-link>
      <router-link
        to="/reports"
        class="text-gray-800 hover:bg-blue-100 hover:text-blue-800 px-3 py-1 transition duration-300 rounded-full"
      >
        <div class="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M5,12a1,1,0,0,0-1,1v8a1,1,0,0,0,2,0V13A1,1,0,0,0,5,12ZM10,2A1,1,0,0,0,9,3V21a1,1,0,0,0,2,0V3A1,1,0,0,0,10,2ZM20,16a1,1,0,0,0-1,1v4a1,1,0,0,0,2,0V17A1,1,0,0,0,20,16ZM15,8a1,1,0,0,0-1,1V21a1,1,0,0,0,2,0V9A1,1,0,0,0,15,8Z"
            />
          </svg>
          <p>Reports</p>
        </div>
      </router-link>
      <router-link
        to="/settings"
        class="text-gray-800 hover:bg-blue-100 hover:text-blue-800 px-3 py-1 transition duration-300 rounded-full"
      >
        <div class="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M10,13a1,1,0,1,0,1,1A1,1,0,0,0,10,13Zm0-4a1,1,0,1,0,1,1A1,1,0,0,0,10,9Zm4,0a1,1,0,1,0,1,1A1,1,0,0,0,14,9Zm7,4a1,1,0,0,0,0-2H19V9h2a1,1,0,0,0,0-2H18.82A3,3,0,0,0,17,5.18V3a1,1,0,0,0-2,0V5H13V3a1,1,0,0,0-2,0V5H9V3A1,1,0,0,0,7,3V5.18A3,3,0,0,0,5.18,7H3A1,1,0,0,0,3,9H5v2H3a1,1,0,0,0,0,2H5v2H3a1,1,0,0,0,0,2H5.18A3,3,0,0,0,7,18.82V21a1,1,0,0,0,2,0V19h2v2a1,1,0,0,0,2,0V19h2v2a1,1,0,0,0,2,0V18.82A3,3,0,0,0,18.82,17H21a1,1,0,0,0,0-2H19V13Zm-4,3a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8A1,1,0,0,1,8,7h8a1,1,0,0,1,1,1Zm-3-3a1,1,0,1,0,1,1A1,1,0,0,0,14,13Z"
            />
          </svg>
          <p>Settings</p>
        </div>
      </router-link>
    </div>
    <button
      class="md:hidden hover:bg-blue-100 hover:text-blue-800 p-3 rounded transition duration-300"
    >
      MENU
    </button>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>
