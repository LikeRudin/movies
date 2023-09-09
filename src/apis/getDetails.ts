export const getDetails = async (id: string | number) => {
    console.log(`id: ${id}`);
    const comicJson = await( await fetch(`https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters/${id}/comics`
    )).json();
    const seriesJson = await( await fetch(`https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters/${id}/series`
    )).json();
    const eventJson = await( await fetch(`https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters/${id}/events`
    )).json();

    const comics = comicJson.data.results;
    const series = seriesJson.data.results;
    const events = eventJson.data.results;
    const characterData = {
      comics, series, events
    }
    return characterData;
}
