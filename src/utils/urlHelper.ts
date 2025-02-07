export const buildGameUrl = (cardId: number | string, gameUlr?: string): string => {
    const url = new URL(window.location.origin + '/game.html')
    url.searchParams.set('gameId', cardId.toString())
    if (gameUlr)
        url.searchParams.set('gameUrl', gameUlr)
    return url.toString()
}

