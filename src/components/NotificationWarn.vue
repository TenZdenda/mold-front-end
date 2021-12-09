<template>
  <div
    class="bg-white p-5 rounded-lg md:flex md:items-center md:justify-between space-y-5 md:space-y-0"
  >
    <div class="md:flex md:items-center md:space-x-5 md:space-y-0 space-y-5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        data-name="Layer 1"
        class="h-10 w-10 text-yellow-500"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path
          d="M9,11a1,1,0,1,0-1-1A1,1,0,0,0,9,11Zm6,3H9a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Zm0-5a1,1,0,1,0,1,1A1,1,0,0,0,15,9ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
        />
      </svg>
      <div>
        <p class="text-lg font-bold">Beware, there is a risk of mold!</p>
        <p class="text-gray-500 text-sm">
          Your environment is semi-mold friendly.
        </p>
      </div>
    </div>
    <a
      href="https://www.webmd.com/children/prevent-mold"
      class="block max-w-xs py-3 md:px-5 hover:text-blue-600 transition duration-300 text-black"
      >See what you can do</a
    >
  </div>
</template>

<script>
export default {
  name: "NotificationWarn",
};
</script>
