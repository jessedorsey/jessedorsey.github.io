<script setup lang="ts">
const route = useRoute()
</script>

<template>
    <div class="bookshelf">
        
        <div class="books-list">
            <div v-for="book in books" :key="book.isbn">
                {{ book }}
            </div>
        </div>
    </div>
</template>