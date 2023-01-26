<template>
    <div>
        <h1 class="text-5xl text-center p-5">{{ $route.params.categoryName}} page</h1>
        <CardsContainer class="mt-16">
            <ProductCard v-for="product in products" :name="product.name" :price="product.price" :imageSrc="product.imageSrc" />
        </CardsContainer>
    </div>
</template>

<script setup>
    const products = [
        {
            name: 'Hoodie',
            price: 35,
            imageSrc: 'https://placeimg.com/400/225/people',
        },
        {
            name: 'T-shirt',
            price: 15,
            imageSrc: 'https://placeimg.com/400/225/people',
        },
        {
            name: 'Veste',
            price: 40,
            imageSrc: 'https://placeimg.com/400/225/people',
        },
        {
            name: 'Casquette',
            price: 12,
            imageSrc: 'https://placeimg.com/400/225/people',
        },
        {
            name: 'Chaussettes',
            price: 8,
            imageSrc: 'https://placeimg.com/400/225/people',
        }
    ]
</script>