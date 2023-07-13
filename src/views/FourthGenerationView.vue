<template>
    <div class="grid grid-cols-2 gap-5 md:grid-cols-3 xl:grid-cols-4 xl:gap-10 2xl:grid-cols-5"
         v-if="hasLoaded && listOfPokemon">
        <pokemon-card v-for="pokemon in listOfPokemon" :key="pokemon" :pokemon="pokemon"/>
    </div>
</template>

<script>
import PokemonCard from '@/components/PokemonCard.vue'
import {usePokemonStore} from '@/stores/pokemon'
import {orderBy} from "lodash"

export default {
    name: 'FourthGenerationView',
    components: {PokemonCard},
    data() {
        return {
            listOfPokemon: [],
            hasLoaded: false
        }
    },
    async mounted() {
        const pkmnStore = usePokemonStore()
        if (pkmnStore.listOfPokemonByGeneration[4].length === 0) {
            await pkmnStore.getPokemonByGeneration(4)
        }
        this.listOfPokemon = pkmnStore.listOfPokemonByGeneration[4]
        this.listOfPokemon = orderBy(this.listOfPokemon, ['id'], ['asc'])
        this.hasLoaded = true
    },
}
</script>
