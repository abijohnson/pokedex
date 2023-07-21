<template>
    <div class="mt-2">
        <div v-if="locations.notCatchable" class="text-sm font-medium leading-6 text-gray-900 mt-4">
            {{ locations.notCatchable }}
        </div>
        <dl class="divide-y divide-gray-100" v-else>
            <div class="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0" v-for="location in locations">
                <dt class="text-sm font-medium leading-6 text-gray-900 capitalize">{{ (location['location_area'].name).replaceAll('-', ' ') }}</dt>
                <dd class="mt-1 text-sm leading-6 text-gray-700 capitalize sm:col-span-2 sm:mt-0">
                        <span v-for="locationGame in location['version_details']" class="text-sm text-gray-500 capitalize">
                            {{ locationGame.version.name + ' ' }}
                        </span>
                </dd>
            </div>
        </dl>
    </div>
</template>
<script>
export default {
    props: {
        locations: {
            type: Object,
            required: true
        }
    },
    emits: ['getLocations'],
    created() {
        if(Object.keys(this.locations).length === 0){
            this.$emit('getLocations')
        }
    }
}
</script>
