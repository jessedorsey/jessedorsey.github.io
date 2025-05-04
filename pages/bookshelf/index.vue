<script setup lang="ts">
const { data: books } = await useAsyncData('books-list', () => {
    return queryCollection('books')
        .order('title', 'ASC')
        .select('title', 'path', 'isbn', 'cardDescription')
        .all()
})
</script>

<template>
    <div class="bookshelf">
        <header>
            <h1>Bookshelf</h1>
            <p>As with all things - I'm trying to be more intentional about what I do and the media I consume. These are
                some of the books I've read... as I re-read them or read for the first time I want to start publishing
                book
                reports.</p>
        </header>
        <div class="books-grid">
            <BookCard v-for="book in books" :key="book.isbn" :book="book" />
        </div>
    </div>
</template>

<style scoped>
header {
    display: block;
    padding-bottom: 2rem;
}

h1 {
    padding: 0;
    margin: 0;
    font-family: 'Bebas Neue';
    font-size: 3rem;
    color: var(--primary-color);
}

p {
    margin: 0;
    padding: 0;
}

.bookshelf {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
}

.books-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
}
</style>