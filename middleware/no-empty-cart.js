export default defineNuxtRouteMiddleware((to, from) => {
  const { selectedProducts } = useCart();
  if (selectedProducts.value.length === 0) {
    if (from.name) {
      const { $toast } = useNuxtApp();
      $toast.error("Your cart is empty");
      return abortNavigation();
    } else {
      return navigateTo("/");
    }
  }
});
