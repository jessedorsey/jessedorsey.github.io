import { ref } from 'vue'
import { usePseudoRandom } from './usePseudoRandom'

// I'm usually indecisive about colors - there's a funny story about that.
// For now I'll just make the thing use a bunch of different colors on reload.
const colorSets = [
    { primary: '#E02550', accent: '#00A89D' }, // Current default
    { primary: '#FF6B6B', accent: '#4ECDC4' }, // Coral and Turquoise
    { primary: '#845EC2', accent: '#FF9671' }, // Purple and Orange
    { primary: '#00B8A9', accent: '#F8F3D4' }, // Teal and Cream
    { primary: '#F96D00', accent: '#253D5B' }, // Orange and Navy
    { primary: '#588B8B', accent: '#FFD93D' }, // Sage and Yellow
    { primary: '#FF2E63', accent: '#08D9D6' }, // Hot Pink and Cyan
]

export const useColors = () => {
    const index = usePseudoRandom('color-theme', colorSets.length, 3)
    const currentColors = ref(colorSets[index])

    const cssVariables = computed(() => ({
        '--primary-color': currentColors.value.primary,
        '--accent-color': currentColors.value.accent,
    }))

    onMounted(() => {
        const root = document.documentElement
        Object.entries(cssVariables.value).forEach(([key, value]) => {
            root.style.setProperty(key, value)
        })
    })

    return {
        currentColors,
        cssVariables
    }
} 