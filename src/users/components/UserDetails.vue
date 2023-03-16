<script lang="ts" setup>
import type { PropType } from 'vue';
import type { UserView } from '../domain/types';

const props = defineProps({
    user: {type: Object as PropType<UserView>, required: true},
}) 

</script>

<template>
    <div>
        {{ props.user.name }}
    </div>
</template>