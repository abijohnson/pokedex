<script setup>
const props = defineProps({
    pokemon: Object
})

const pokemonTypeBadgeColors = {
    fire: 'text-red-600 ring-red-700/20 bg-red-100',
    grass: 'text-green-600 ring-green-700/20 bg-green-100',
    water: 'text-blue-600 ring-blue-700/20 bg-blue-100',
    bug: 'text-lime-600 ring-lime-700/20 bg-lime-100',
    flying: 'text-sky-600 ring-sky-700/20 bg-sky-100',
    steel: 'text-gray-600 ring-gray-700/20 bg-gray-100',
    dragon: 'text-indigo-600 ring-indigo-700/20 bg-indigo-100',
    fairy: 'text-pink-600 ring-pink-700/20 bg-pink-100',
    poison: 'text-purple-600 ring-purple-700/20 bg-purple-100',
    dark: 'text-slate-800 ring-slate-700/20 bg-slate-300',
    ghost: 'text-violet-600 ring-violet-700/20 bg-violet-100',
    psychic: 'text-fuchsia-600 ring-fuchsia-700/20 bg-fuchsia-100',
    electric: 'text-yellow-600 ring-yellow-700/20 bg-yellow-100',
    fighting: 'text-orange-600 ring-orange-700/20 bg-orange-100',
    ice: 'text-cyan-600 ring-cyan-700/20 bg-cyan-100',
    normal: 'text-neutral-600 ring-neutral-700/20 bg-neutral-100',
    ground: 'text-amber-600 ring-amber-700/20 bg-amber-100',
    rock: 'text-stone-600 ring-stone-700/20 bg-stone-100',
}

</script>

<template>
    <div>
        <div class="mt-2">
            <dl class="divide-y divide-gray-100">
                <div class="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt class="text-sm font-medium leading-6 text-gray-900">Name</dt>
                    <dd class="mt-1 text-sm leading-6 text-gray-700 capitalize sm:col-span-2 sm:mt-0">{{ props.pokemon.name }}</dd>
                </div>
                <div class="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt class="text-sm font-medium leading-6 text-gray-900">Height</dt>
                    <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{{ props.pokemon.height }}</dd>
                </div>
                <div class="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt class="text-sm font-medium leading-6 text-gray-900">Weight</dt>
                    <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{{ props.pokemon.weight }}</dd>
                </div>
                <div class="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt class="text-sm font-medium leading-6 text-gray-900">Type(s)</dt>
                    <dd class="mt-1 text-sm leading-6 text-gray-700 space-x-2 sm:col-span-2 sm:mt-0">
                        <p
                            v-for="type in props.pokemon.types"
                            :key="type"
                            :class="pokemonTypeBadgeColors[type.type.name] + ' capitalize inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset'"
                        >
                            {{ type.type.name }}
                        </p>
                    </dd>
                </div>
            </dl>
        </div>
    </div>
</template>

