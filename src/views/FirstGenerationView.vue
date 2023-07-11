<template>
    <div class="grid grid-cols-2 xl:gap-10 xl:grid-cols-4" v-if="hasLoaded && listOfPokemon">
        <pokemon-card v-for="pokemon in listOfPokemon" :key="pokemon" :pokemon="pokemon" />
    </div>
</template>

<script>
import PokemonCard from "@/components/PokemonCard.vue";
import {usePokemonStore} from "@/stores/pokemon"
import {orderBy} from "lodash";
export default {
    name: 'FirstGenerationView',
    components: {PokemonCard},
    data() {
        return {
            listOfPokemon: [],
            hasLoaded: false
        }
    },
    async mounted() {
        const pkmnStore = usePokemonStore()
        if(pkmnStore.listOfPokemon.length === 0){
            await pkmnStore.getFirstGenPkmn()
        }
        this.listOfPokemon = pkmnStore.listOfPokemon
        this.listOfPokemon = orderBy(this.listOfPokemon, ['id'], ['asc'])
        this.hasLoaded = true
    },
}
</script>
