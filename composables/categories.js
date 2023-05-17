export const useCategories = () => {
  return useState("categories", () => {
    return [
      { id: "head", title: "Head" },
      { id: "body", title: "Body" },
      { id: "other", title: "Other" },
    ];
  });
};
