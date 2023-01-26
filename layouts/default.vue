<template>
    <div class="flex h-screen">
        <div class="fixed top-0 left-0 w-64 py-5 bg-secondary-content h-full">
            <h2 class="mt-4 text-xl px-4">DT Merch</h2>
            <ul class="menu w-full py-12">
                <li v-for="item in menuItems" :class="item.path === $route.path ? 'bordered' : 'hover-bordered'">
                    <NuxtLink :to="item.path">
                        {{ item.title }}
                    </NuxtLink>
                </li>
            </ul>
        </div>
        <div class="w-full ml-64 " :class="$route.path === '/' ? '' : 'px-4'">
            <slot />
        </div>
    </div>
</template>

<script setup>
    const menuItems = [
        { path: '/', title: 'Home' },
        { path: '/category/head', title: 'Category head' },
        { path: '/category/body', title: 'Category body' },
        { path: '/category/other', title: 'Category ohter' },
    ]
</script>