export const getGifs = async (category) => {

    /**
     * GIPHY Developers - API Keys
     *
     * Curso React Udemy: vsDp3HcgPJP3YqXOgsstulaj0tID1aGg
     * GifExpertApp: tmWRdwb5vv9HxzJyuEmX8jrXebTovlt8
     */

    /******************/

    // Declarar variables
    const apiKey = 'vsDp3HcgPJP3YqXOgsstulaj0tID1aGg';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    // Debug
    console.log('url', url);

    // Retornar datos
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;
}
