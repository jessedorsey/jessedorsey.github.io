export const useBookCover = (isbn: string) => {
    const coverUrl = computed(() => {
        // Open Library covers API
        return `https://covers.openlibrary.org/b/isbn/${isbn}-M.jpg`
    })

    return {
        coverUrl
    }
} 