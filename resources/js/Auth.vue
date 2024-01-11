<template>
    <div>
        <button @click="login">Login with Discord</button>
    </div>
</template>

<script setup lang="ts">
import axios from "axios";

const login = async () => {
    console.log("ja");
    axios.get("api/auth/discord").then((response) => {
        console.log(response);

        window.location.href = response.data;
    });
};
</script>
