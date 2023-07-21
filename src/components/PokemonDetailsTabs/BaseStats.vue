<script setup>
const props = defineProps({
    stats: Object
})
</script>

<template>
    <table class="mx-auto w-full mt-10 md:mt-0">
        <tbody>
        <tr v-for="stat in props.stats" :key="stat">
            <td class="relative py-4 pr-3 text-sm font-medium text-gray-900 capitalize">
                {{ Object.keys(props.stats).find(k=>props.stats[k]===stat) }}
                <div class="absolute bottom-0 right-full h-px w-screen bg-gray-100" />
                <div class="absolute bottom-0 left-0 h-px w-screen bg-gray-100" />
            </td>
            <td class="px-3 py-4 text-sm text-gray-500 table-cell">{{ stat }}</td>
            <td class="px-3 py-4 text-sm text-gray-500 table-cell w-full">
                <div class="overflow-hidden rounded-full bg-gray-200 ">
                    <div class="h-2 rounded-full bg-indigo-600" :style="'width:' + stat + '%'" />
                </div>
            </td>
        </tr>
        </tbody>
    </table>
</template>
