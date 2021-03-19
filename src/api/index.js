import games from './games'
import platforms from './platforms'

export default request => {
    return new Promise(resolve => {
        setTimeout(() => {
            switch (request) {
            case 'games':
                resolve({ status: 200, games: games.games });
                break;
            case 'platforms':
                resolve({ status: 200, platforms: platforms.platforms });
                break;
            default:
                resolve({ status: 400, message: 'No Request' });
            }
        }, 300);
    });
}