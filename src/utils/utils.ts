
export const animationCreate = () => {
  if (typeof window !== "undefined") {
    import("wowjs").then((module) => {
      const WOW = module.default;
      new WOW.WOW({live: false}).init()
    });
  }
};

export const calculateDiscountedPrice = (price:number, discount:number) => {
  return (price - (price * discount) / 100).toFixed(2);
};