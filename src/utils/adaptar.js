export function adaptarPersonaje(raw) {
  return {
    id: raw.id,
    nombre: raw.name,
    estado: raw.status,
    especie: raw.species,
    genero: raw.gender,
    imagen: raw.image,
    origen: raw.origin?.name ?? 'unknown',
    ubicacion: raw.location?.name ?? 'unknown',
    episodios: raw.episode?.length ?? 0,
  }
}

export function adaptarLista(json) {
  return {
    personajes: (json?.results ?? []).map(adaptarPersonaje),
    paginas: json?.info?.pages ?? 0,
    total: json?.info?.count ?? 0,
  }
}