import { useHttp } from '../hooks/http.hook';

const useMarvelService = () => {
    const { loading, request, error } = useHttp();

    const _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    const _apiKey = 'apikey=6c650452b20502d82f38448f9724958d';
    const _baseOffset = 210

    const getAllCharacters = async (offset = _baseOffset) => {
        const res = await request(`${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`);
        return res.data.results.map(_thransformCharacter);
    }

    const getCharacter = async (id) => {
        const character = await request(`${_apiBase}characters/${id}?${_apiKey}`);
        return _thransformCharacter(character.data.results[0])
    }

    const _thransformCharacter = (character) => {
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

    return { loading, error, getAllCharacters, getCharacter }

}

export default useMarvelService; 