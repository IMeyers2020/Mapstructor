export type MapItem = {
    id: string,
    name: string,
    groupId: string,
    mapId: string,
    center: [long: number, lat: number],
    zoom: number,
    bearing: number,
    styleId: string,
    infoId?: string
}

export type MapZoomProps = {
    center: [long: number, lat: number],
    zoom: number,
    speed: number,
    curve: number,
    duration: number
}