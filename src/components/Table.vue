<template>
  <div class="flex flex-col">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="overflow-hidden">
          <table class="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th
                  v-for="(thead, index) in head"
                  :key="index"
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider"
                >
                  {{ thead }}
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="(tbody, index) in data" :key="index">
                <td
                  v-for="body in tbody"
                  :key="body.id"
                  class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                >
                  <div class="flex items-center">
                    <div v-if="body.icon" class="flex-shrink-0 h-10 w-10">
                      <img
                        :src="body.icon"
                        :alt="body.text"
                        class="h-10 w-10 mr-4 object-cover"
                      />
                    </div>
                    <div :class="{ 'ml-4 font-semibold': body.icon }">
                      {{ body.text }}
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    head: Array,
    data: Array,
  },
};
</script>
