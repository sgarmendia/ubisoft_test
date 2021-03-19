import games from './games'
import platforms from './platforms'

export default request => {
    return new Promise(resolve => {
        setTimeout(() => {
            switch (request) {
                case 'all':
                    resolve({ status: 200, games: games.games, platforms: platforms.platforms });
                    break;
                case 'games':
                    resolve({ status: 200, games: games.games });
                    break;
                case 'platforms':
                    resolve({ status: 200, platforms: platforms.platforms });
                    break;
                default:
                    resolve({ status: 400, message: 'No Request' });
            }
        }, 500);
    });
}