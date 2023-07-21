<template>
    <div>
        <PokemonDetails
            :open="detailViewOpen"
            :pokemon="pokemonToView"
            @close="detailViewOpen = false"
            @getLocations="getLocationsByPokemon"
        />
        <div class="grid grid-cols-2 gap-5 md:grid-cols-3 xl:grid-cols-4 xl:gap-10 2xl:grid-cols-5" v-if="hasLoaded && listOfPokemon">
            <pokemon-card v-for="pokemon in listOfPokemon" :key="pokemon" :pokemon="pokemon" @click="openDetailView(pokemon)" />
        </div>
    </div>

</template>

<script>
import PokemonCard from '@/components/PokemonCard.vue'
import {usePokemonStore} from '@/stores/pokemon'
import {orderBy} from 'lodash'
import PokemonDetails from '@/components/PokemonDetails.vue'
export default {
    name: 'FifthGenerationView',
    components: {PokemonDetails, PokemonCard},
    setup() {
        const pkmnStore = usePokemonStore()
        return {
            pkmnStore
        }
    },
    data() {
        return {
            listOfPokemon: [],
            hasLoaded: false,
            detailViewOpen: false,
            pokemonToView: {}
        }
    },
    async mounted() {
        if(this.pkmnStore.listOfPokemonByGeneration[5].length === 0){
            await this.pkmnStore.getPokemonByGeneration(5)
        }
        this.listOfPokemon = this.pkmnStore.listOfPokemonByGeneration[5]
        this.listOfPokemon = orderBy(this.listOfPokemon, ['id'], ['asc'])
        this.hasLoaded = true
    },
    methods: {
        openDetailView(pokemon) {
            this.pokemonToView = pokemon
            this.detailViewOpen = true
        },
        async getLocationsByPokemon(pokemon) {
            await this.pkmnStore.getLocationsByPokemon(5, pokemon)
        }
    }
}
</script>
