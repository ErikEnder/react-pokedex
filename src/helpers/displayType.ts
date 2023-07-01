// This function exists solely to display Pokemon types in an image format
// Purely cosmetic
/** To display the proper image, PokemonView.tsx calls the API for the current Pokemon
 * then passes the Pokemon's types individually to this function. The Type in String form
 * is compared against the switch statement which then sets the typeImage to the proper
 * img source needed to display the correct Type Image, which is then returned
 * to PokemonView.tsx and used in its img tag.
 */
export function DisplayType(typeName: string) {
  let typeImage = ''
  switch(typeName.toLowerCase()) {
    case 'fire':
      typeImage = '../types/fire.gif'
      break
    case 'water':
      typeImage = '../types/water.gif'
      break
    case 'grass':
      typeImage = '../types/grass.gif'
      break
    case 'bug':
      typeImage = '../types/bug.gif'
      break
    case 'dark':
      typeImage = '../types/dark.gif'
      break
    case 'dragon':
      typeImage = '../types/dragon.gif'
      break
    case 'electric':
      typeImage = '../types/electric.gif'
      break
    case 'fairy':
      typeImage = '../types/fairy.gif'
      break
    case 'fighting':
      typeImage = '../types/fighting.gif'
      break
    case 'flying':
      typeImage = '../types/flying.gif'
      break
    case 'ghost':
      typeImage = '../types/ghost.gif'
      break
    case 'ground':
      typeImage = '../types/ground.gif'
      break
    case 'ice':
      typeImage = '../types/ice.gif'
      break
    case 'normal':
      typeImage = '../types/normal.gif'
      break
    case 'poison':
      typeImage = '../types/poison.gif'
      break
    case 'psychic':
      typeImage = '../types/psychic.gif'
      break
    case 'rock':
      typeImage = '../types/rock.gif'
      break
    case 'steel':
      typeImage = '../types/steel.gif'
      break
  }
  return typeImage
}