<template>
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold">Erreur</h1>
        <p class="py-6">
            {{ message }}
        </p>
        <button class="btn btn-primary" @click="$router.push('/')">Retourner à l'accueil</button>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  message: {
    type: String,
    default: "Oups, une erreur est survenue !",
  },
});
</script>
