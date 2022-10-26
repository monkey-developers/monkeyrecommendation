export const fetchRecommendations = async () => {
    const res = await fetch('http://localhost:8080/recommendations-list')
    return await res.json()
}

export const postRecommendations = async (data) => {
    const res = await fetch('http://localhost:8080/recommendation', {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
}