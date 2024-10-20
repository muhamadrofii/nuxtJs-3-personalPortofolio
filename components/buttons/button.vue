<template>
    <button :class="[
        'border-solid border-2 border-sky-500 rounded-lg p-2.5 text-white transition-colors duration-200 ease-in-out',
        variantClasses,
        sizeClasses,
        {
            'cursor-not-allowed opacity-50': disabled
        }
    ]" :disabled="disabled" @click="handleClick">
        <slot />
    </button>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    variant: {
        type: String,
        default: 'primary', // Default variant
        validator: value => ['primary', 'secondary', 'danger'].includes(value),
    },
    size: {
        type: String,
        default: 'medium', // Default size
        validator: value => ['small', 'medium', 'large'].includes(value),
    },
    disabled: {
        type: Boolean,
        default: false,
    },
})

const emit = defineEmits(['click'])

const handleClick = (event) => {
    if (!props.disabled) {
        emit('click', event)
    }
}

const variantClasses = computed(() => {
    switch (props.variant) {
        case 'primary':
            return 'bg-blue-500 text-white hover:bg-blue-600'
        case 'secondary':
            return 'bg-gray-500 text-white hover:bg-gray-600'
        case 'danger':
            return 'bg-red-500 text-white hover:bg-red-600'
        default:
            return ''
    }
})

const sizeClasses = computed(() => {
    switch (props.size) {
        case 'small':
            return 'text-sm px-3 py-1'
        case 'medium':
            return 'text-base px-4 py-2'
        case 'large':
            return 'text-lg px-5 py-3'
        default:
            return ''
    }
})
</script>