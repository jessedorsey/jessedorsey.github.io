<script setup lang="ts">
defineProps<{
    text: string
    to?: string
    variant?: 'default' | 'tech'
}>()
</script>

<template>
    <component
        :is="to ? 'NuxtLink' : 'span'"
        :to="to"
        :class="['tag', variant]"
    >
        {{ text }}
    </component>
</template>

<style scoped>
.tag {
    display: inline-flex;
    align-items: center;
    padding: 0.35rem 1rem;
    background: rgba(240, 240, 240, 0.8);
    border-radius: 8px;
    font-size: 0.85rem;
    font-weight: 500;
    color: #333;
    text-decoration: none;
    transition: all 0.3s ease;
    cursor:default;
}

.tag.tech {
    border: 1px solid var(--primary-color);
    color: var(--primary-color);
}

</style> 