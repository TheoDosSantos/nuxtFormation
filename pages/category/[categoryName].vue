<template>
  <div>
    <div v-if="products" class="p-4">
      <h1 class="text-5xl text-center p-5">{{ categoryName }} page</h1>
      <CardsContainer v-if="products && products.length > 0" class="mt-16">
        <ProductCard
          v-for="product in products"
          :id="product.id"
          :name="product.name"
          :price="product.price"
          :imageSrc="'/assets/images/' + product.imageName"
        />
      </CardsContainer>
      <p v-else>
        Aucun produit dans cette catégorie pour le moment.
      </p>
    </div>
    <HeroLoader v-else-if="pending" />
  </div>
</template>

<script setup>
const route = useRoute();
const categoryName = route.params.categoryName;
const { data: products, pending, error } = await useLazyFetch(
  `http://localhost:3001/products/?category=${categoryName}`
);
</script>
