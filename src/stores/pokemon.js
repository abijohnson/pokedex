import {defineStore} from 'pinia'
import {orderBy} from "lodash";

export const usePokemonStore = defineStore('pokemon', {
    persist: true,
    state: () => ({ listOfPokemon: [] }),
    actions: {
        async getFirstGenPkmn() {
            this.listOfPokemon = []
            await fetch('https://pokeapi.co/api/v2/pokemon?limit=151').then((response) => {
                return response.json()
            }).then((data) => {
                this.formatPokemonList(data.results)
            })
        },
        formatPokemonList(pokemonList){
             pokemonList.forEach(async (pokemon) => {
                 const data = await this.getPokemonByName(pokemon.name)
                 const abilityDesc = await this.getPokemonAbilityDescription(data.abilities[0].ability.url)
                 const formattedData = {
                     id: data.id,
                     abilityTitle: (data.abilities[0].ability.name).replace('-', ' '),
                     abilityDesc: abilityDesc,
                     name: data.name,
                     sprite: data.sprites.front_default,
                     hp: data.stats[0].base_stat,
                     types: data.types,
                 }
                this.listOfPokemon.push(formattedData)
            })

        },
        async getPokemonByName(name){
            const res = await fetch(
                `https://pokeapi.co/api/v2/pokemon/${name}`
            ).then(async (response) => {
                const res = await response.json()
                return res
            })
            return res
        },
        async getPokemonAbilityDescription(url){
            return await fetch(
                url
            ).then((response) => {
                return response.json()
            }).then((data) => {
                const englishEntry = data.effect_entries.filter((x) => { return x.language.name === 'en' })
                return englishEntry[0].short_effect
            })
        }
    },
})

