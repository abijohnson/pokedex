<script setup>
const props = defineProps({
    pokemon: Object
    // id: Number,
    // name: String,
    // number: String,
    // hp: String,
    // types: Array,
    // abilityTitle: String,
    // abilityDesc: String,
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
    <div class="bg-gray-50 p-5 rounded-lg shadow">
        <div>
            <div class="flex flex-wrap items-center justify-between sm:flex-nowrap">
                <p class="font-semibold text-lg capitalize">
                    {{ props.pokemon.name }}
                </p>
                <div class="ml-4 text-gray-600 flex-shrink-0">
                    HP {{ props.pokemon.stats.hp }}
                </div>
            </div>
            <p class="text-gray-400">
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
        </div>
        <div class="py-5">
            <img :src="props.pokemon.sprite" class="mx-auto max-w-[5.5rem] w-full" />
        </div>
        <div class="space-x-2">
            <p
                v-for="type in props.pokemon.types"
                :key="type"
                :class="pokemonTypeBadgeColors[type.type.name] + ' capitalize inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset'"
            >
                {{ type.type.name }}
            </p>
        </div>
        <div class="pt-5">
            <p class="font-medium capitalize">Ability: {{ props.pokemon.abilityTitle }} </p>
            <p class="text-sm text-gray-600">{{ props.pokemon.abilityDesc }} </p>
        </div>
    </div>
</template>