<template>
  <div
    class="card w-full bg-base-100 shadow-xl card-compact lg:card-normal cursor-pointer"
    @mouseover="isHovering = true"
    @mouseout="isHovering = false"
    @click="$router.push('/product/' + id)"
  >
    <figure class="overflow-hidden">
      <img
        :class="isHovering ? 'scale-110' : ''"
        class="duration-500 transition-transform"
        :src="imageSrc"
      />
    </figure>
    <div class="card-body">
      <p>
        <span class="relative">
          {{ name }}
          <span
            :class="isHovering ? 'w-full' : 'w-0'"
            class="absolute -bottom-1 left-0 h-[1px] bg-base-content duration-500"
          ></span>
        </span>
      </p>
      <h2 class="card-title">{{ price }}€</h2>
    </div>
  </div>
</template>

<script setup>
let isHovering = ref(false);
watch(isHovering, () => {});

const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  imageSrc: {
    type: String,
    required: true,
  },
});
</script>
