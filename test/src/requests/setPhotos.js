


export const fetchPhotos = async () => {
    try {
        const response = await fetch('https://boiling-refuge-66454.herokuapp.com/images')
        const result = await response.json()
        return result
    } catch (error) {
        throw new Error(error)
    }
}