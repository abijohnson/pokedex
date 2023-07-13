<template>
    <TransitionRoot as="template" :show="props.open">
        <Dialog as="div" class="relative z-10" @close="emits('close')">
            <TransitionChild as="template" enter="ease-in-out duration-500" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-300" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </TransitionChild>

            <div class="fixed inset-0 overflow-hidden">
                <div class="absolute inset-0 overflow-hidden">
                    <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                        <TransitionChild as="template" enter="transform transition ease-in-out duration-300 sm:duration-300" enter-from="translate-x-full" enter-to="translate-x-0" leave="transform transition ease-in-out duration-300 sm:duration-300" leave-from="translate-x-0" leave-to="translate-x-full">
                            <DialogPanel class="pointer-events-auto w-screen max-w-md">
                                <div class="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                                    <div class="px-4 sm:px-6">
                                        <div class="flex items-start justify-between">
                                            <DialogTitle>
                                                <p class="text-lg font-semibold leading-6 text-gray-900 capitalize lg:text-xl">
                                                    {{ props.pokemon.name }}
                                                </p>
                                                <p class="text-base pt-1 text-gray-500">
                                                    <span v-if="props.pokemon.id > 99" class="inline-flex">
                                                        #
                                                    </span>
                                                    <span v-else-if="props.pokemon.id > 9" class="inline-flex">
                                                        #0
                                                    </span>
                                                    <span v-else class="inline-flex">
                                                        #00
                                                    </span>
                                                    <span class="inline-flex">{{ props.pokemon.id }}</span>
                                                </p>
                                            </DialogTitle>
                                            <div class="ml-3 flex h-7 items-center">
                                                <button type="button" class="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" @click="$emit(emits('close'))">
                                                    <span class="sr-only">Close panel</span>
                                                    <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="relative mt-6 flex-1 px-4 sm:px-6">
                                        <!--Sprites (front & back)-->
                                        <div class="grid grid-cols-2 px-10 py-7">
                                            <img :src="props.pokemon.sprite" class="mx-auto w-3/4" />
                                            <img :src="props.pokemon.spriteBack" class="mx-auto w-3/4" />
                                        </div>
                                        <!--Tabs-->
                                        <div>
                                            <div class="sm:hidden">
                                                <label for="tabs" class="sr-only">Select a tab</label>
                                                <!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
                                                <select id="tabs" name="tabs" class="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500">
                                                    <option v-for="tab in tabs" :key="tab.name" @click="currentTab = tab" :selected="isCurrentTab(tab)">{{ tab.name }}</option>
                                                </select>
                                            </div>
                                            <div class="hidden sm:block">
                                                <div class="border-b border-gray-200">
                                                    <nav class="-mb-px flex space-x-8" aria-label="Tabs">
                                                        <p v-for="tab in tabs" :key="tab.name" @click="currentTab = tab" :class="[isCurrentTab(tab) ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700', 'group inline-flex items-center border-b-2 py-4 px-1 text-sm font-medium']" :aria-current="tab.current ? 'page' : undefined">
                                                            <component :is="tab.icon" :class="[isCurrentTab(tab) ? 'text-indigo-500' : 'text-gray-400 group-hover:text-gray-500', '-ml-0.5 mr-2 h-5 w-5']" aria-hidden="true" />
                                                            <span>{{ tab.name }}</span>
                                                        </p>
                                                    </nav>
                                                </div>
                                            </div>
                                        </div>
                                        <!--Display current tab-->
                                        <div>
                                            <component
                                                :is="currentTab.component"
                                                :stats="props.pokemon.stats"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>

<script setup>
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'
import { BoltIcon, HomeIcon, InformationCircleIcon } from '@heroicons/vue/20/solid'
import BaseStats from '@/components/PokemonDetailsTabs/BaseStats.vue'
import Locations from '@/components/PokemonDetailsTabs/Locations.vue'
import About from '@/components/PokemonDetailsTabs/About.vue'

const emits = defineEmits(['close'])
const props = defineProps({
    open: Boolean,
    pokemon: Object
})

const tabs = [
    { name: 'About', icon: InformationCircleIcon, component: About },
    { name: 'Locations', icon: HomeIcon, component: Locations },
    { name: 'Base stats', icon: BoltIcon, component: BaseStats },
]

let currentTab = tabs[2]

const isCurrentTab = (tab) => {
    return currentTab.name === tab.name
}


</script>