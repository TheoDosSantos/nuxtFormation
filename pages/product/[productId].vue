<template>
  <div>
    <div v-if="product" class="p-4">
      <div class="flex flex-row-reverse gap-5">
        <div class="w-2/3">
          <img
            class="w-full"
            :src="'/assets/images/' + product.imageName"
            :alt="product.name"
          />
        </div>
        <div class="w-1/3">
          <div class="text-sm breadcrumbs w-full break-words">
            <ul>
              <li>Category</li>
              <li>
                <NuxtLink
                  :to="
                    '/category/' +
                    categories.find(
                      (category) => category.id === product.category
                    ).id
                  "
                  >{{ $getCategoryTitle(product.category) }}</NuxtLink
                >
              </li>
              <li>
                <span class="text-base-content/75">{{ product.name }}</span>
              </li>
            </ul>
          </div>

          <h1 class="mt-8 text-xl font-bold">{{ product.name }}</h1>
          <p class="mt-4 text-sm font-bold">{{ product.price }}€</p>

          <form class="mt-8" @submit.prevent>
            <select
              ref="variantSelect"
              v-if="product.variants"
              class="select select-bordered w-full max-w-xs"
            >
              <option
                v-for="variant in product.variants"
                :selected="variant === product.defaultVariant"
              >
                {{ variant }}
              </option>
            </select>
            <button
              class="w-full mt-4 btn"
              @click="addProductToCart(product, variantSelect)"
            >
              Ajouter au panier
            </button>
            <button class="w-full mt-4 btn btn-primary">
              Acheter maintenant
            </button>
          </form>
        </div>
      </div>
    </div>
    <HeroLoader v-else-if="pending" />
    <HeroError v-else-if="error" message="Ce produit ne semble pas exister." />
  </div>
</template>

<script setup>
const route = useRoute();
const productId = route.params.productId;

const {
  data: product,
  pending,
  error,
} = await useLazyFetch(`http://localhost:3001/products/${productId}`);

const { categories } = useRuntimeConfig();

const variantSelect = ref(null);
const { addProductToCart } = useCart();
</script>
