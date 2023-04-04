import client from ".";

const STICKER_API = {
    getstickers() {
        return client.get('/stickers')
    }
}

export default STICKER_API