<template>
  <div class="flex h-screen">
    <div class="fixed top-0 left-0 w-64 py-5 bg-secondary-content h-full">
      <h2 class="mt-4 text-xl px-4 flex justify-between">
        DT Merch
        <div class="indicator" @click="$router.push('/cart')">
          <span class="indicator-item badge badge-primary">{{
            totalProducts
          }}</span>
          <button class="btn btn-square btn-outline btn-secondary">
            <span class="text-xs"> Panier </span>
          </button>
        </div>
      </h2>
      <ul class="menu w-full py-12">
        <li
          v-for="item in menuItems"
          :class="item.path === $route.path ? 'bordered' : 'hover-bordered'"
        >
          <NuxtLink :to="item.path">
            {{ item.title }}
          </NuxtLink>
        </li>
      </ul>
    </div>
    <div class="w-full ml-64">
      <slot />
    </div>
  </div>
</template>

<script setup>
const { categories } = useRuntimeConfig();
const { totalProducts } = useCart();

const menuCategoryItems = categories.map((category) => ({
  path: `/category/${category.id}`,
  title: category.title,
}));

const menuItems = [{ path: "/", title: "Home" }, ...menuCategoryItems];
</script>
