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

export type Pokemon = {
  pokeName: string;
  url: string;
  id: number;
};
