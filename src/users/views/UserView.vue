<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import UserAxiosImpl from '../adapters/UserAxiosImpl';
import UserDetails from '../components/UserDetails.vue';
import type { UserView } from '../domain/types';
import GetAllUsersUsecase from '../usecases/GetAllUsersUsecase';

const users = ref<UserView[]>();

onMounted(async (): Promise<void> => {
    users.value = await GetAllUsersUsecase.build().execute();
});

async function fetchUsers() {
    const response = await new UserAxiosImpl().fetchAllUsers();
    return response;
}

</script>

<template>
    <div>
        <h3>Coucou</h3>
        <ul>
            <li v-for="user in users" :key="user.id">
                <UserDetails :user="user" />   
            </li>
        </ul>
    </div>
</template>