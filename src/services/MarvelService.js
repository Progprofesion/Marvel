class MarvelService {
    _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    _apiKey = 'apikey=6c650452b20502d82f38448f9724958d';
    _baseOffset = 210
    getResources = async (url) => {
        const res = await fetch(url)
        if (!res.ok) {
            throw new Error(`Coluld not fetch ${url}, status: ${res.status}`);
        }
        return await res.json()
    }

    getAllCharacters = async (offset = this._baseOffset) => {
        const res = await this.getResources(`${this._apiBase}characters?limit=9&offset=${offset}&${this._apiKey}`);
        return res.data.results.map(this._thransformCharacter);
    }

    getCharacter = async (id) => {
        const character = await this.getResources(`${this._apiBase}characters/${id}?${this._apiKey}`);
        return this._thransformCharacter(character.data.results[0])
    }

    _thransformCharacter = (character) => {
        return {
            id: character.id,
            name: character.name,
            description: character.description ? `${character.description.slice(0, 210)}...` : 'There is no description for this character',
            thumbnail: character.thumbnail.path + '.' + character.thumbnail.extension,
            homepage: character.urls[0].url,
            wiki: character.urls[1].url,
            comics: character.comics.items
        }
    }

}

export default MarvelService; 