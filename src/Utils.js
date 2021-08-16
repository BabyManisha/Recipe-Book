export const range = (a, b) => a>b ? range(b, a).reverse() : (a===b ? [a] : range(a, b-1).concat(b));

export const flags = {
    'British': 'gb',
    'American': 'us',
    'French': 'fr',
    'Canadian': 'ca',
    'Jamaican': 'jm',
    'Chinese': 'cn',
    'Dutch': 'nl',	
    'Egyptian': 'eg',
    'Greek': 'gr',	
    'Indian': 'in',
    'Irish': 'ie',	
    'Italian': 'it',
    'Japanese': 'jp',
    'Kenyan': 'kn',
    'Malaysian': 'my',
    'Mexican': 'mx',
    'Moroccan': 'ma',
    'Croatian': 'hr',
    'Norwegian': 'no',
    'Portuguese': 'pt',
    'Russian': 'ru',
    'Argentinian': 'ar',
    'Spanish': 'es',
    'Slovakian': 'sk',
    'Thai': 'th',	
    'Saudi Arabian': 'sa',
    'Vietnamese': 'vn',
    'Turkish': 'tr',
    'Syrian': 'sy',
    'Algerian': 'dz',
    'Tunisian': 'tn',
    'Polish': 'pl'
}

export const iconBase = "https://www.themealdb.com/images/icons/flags/big/64/"

export const ingrBase = "https://www.themealdb.com/images/ingredients/"

export const stripURL = "https://buy.stripe.com/6oE3dSaSF83e2pW6op"