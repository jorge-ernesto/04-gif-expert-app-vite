async function getGifs(busqueda) {

    /**
     * GIPHY Developers - API Keys
     *
     * React Cero Experto: vsDp3HcgPJP3YqXOgsstulaj0tID1aGg
     * GifExpertApp: 1NvxYkRzew82rCuERZ4dqHKgbGznwcqY
     */

    /****************** Solicitud HTTP ******************/

    // Solicitud HTTP
    let apiKey = 'vsDp3HcgPJP3YqXOgsstulaj0tID1aGg';
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${busqueda}&limit=10`;
    let resp = await fetch(url);
    let { data } = await resp.json();

    // Obtener datos
    let gifs = [];
    data.forEach((value) => {
        gifs.push({
            id: value.id,
            title: value.title,
            url: value.images.downsized_medium.url
        });
    });

    // Debug
    console.log('url', url);
    console.log('gifs', gifs);

    /****************** Respuesta ******************/

    return gifs;
}

export { getGifs };
