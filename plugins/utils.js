export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide("getCategoryTitle", (categoryId) => {
    const { categories } = useRuntimeConfig();
    const category = categories.find((category) => category.id === categoryId);
    return category ? category.title : "Inconnue";
  });
});
