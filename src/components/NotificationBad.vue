<template>
  <div
    class="bg-white p-5 rounded-lg md:flex md:items-center md:justify-between space-y-5 md:space-y-0"
  >
    <div class="md:flex md:items-center md:space-x-5 md:space-y-0 space-y-5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        data-name="Layer 1"
        class="h-10 w-10 text-red-400"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path
          d="M9.08,12.21l1.5-1.5a1,1,0,0,0,0-1.42l-1.5-1.5A1,1,0,0,0,7.66,9.21l.8.79-.8.79a1,1,0,0,0,0,1.42,1,1,0,0,0,.71.29A1,1,0,0,0,9.08,12.21Zm-.72,3.12a1,1,0,0,0-.13,1.4,1,1,0,0,0,1.41.13,3.76,3.76,0,0,1,4.72,0,1,1,0,0,0,1.41-.13,1,1,0,0,0-.13-1.4A5.81,5.81,0,0,0,8.36,15.33Zm8.22-7.54a1,1,0,0,0-1.42,0l-1.5,1.5a1,1,0,0,0,0,1.42l1.5,1.5a1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.42L15.79,10l.79-.79A1,1,0,0,0,16.58,7.79ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
        />
      </svg>
      <div>
        <p class="text-lg font-bold text-red-400">You have a problem!</p>
        <p class="text-gray-500 text-sm">
          Your environment is friendly for mold.
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
  name: "NotificationBad",
};
</script>
