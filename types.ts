export type Region = {
  id: number;
  main_region: {
    name: string;
    url: string;
  };
  name: string;
  pokemon_species: [
    {
      name: string;
      url: string;
    }
  ];
};

export type PokemonStorage = {
  pokeName: string;
  url: string;
  id: number;
};

export type PokemonDefinition = {
  species: {
    name: string
    url: string
  }
  url: string
  id: number
  abilities: [{
    abilityName: string
    hidden: boolean
  }]
  sprites: [{
    back_default: string
    back_female: string
    back_shiny: string
    back_shiny_female: string
    front_default: string
    front_female: string
    front_shiny: string
    front_shiny_female: string
  }]
  typing: [{
    typingOne: string
    typingTwo: string
  }]
  held_items: string[]
}
