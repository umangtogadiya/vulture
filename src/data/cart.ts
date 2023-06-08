// export const cart = [
//   {
//     id: 12,
//     productId: 1,
//     title: "Button Through Strap Mini Dress",
//     category: "mango",
//     price: "45.00",
//     qty: 1,
//     size: "S",
//     color: "RED",
//     image: "product-5.jpg",
//     productDetails: {
//       id: 1,
//       category: "topshop",
//       name: "Knot Front Mini Dress",
//       oldPrice: "75.00",
//       price: "55.00",
//       description:
//         "Mauris viverra cursus ante laoreet eleifend. Donec vel fringilla ante. Aenean finibus velit id urna vehicula, nec maximus est sollicitudin.",
//       sizes: [
//         { id: 1, title: "S" },
//         { id: 2, title: "M" },
//         { id: 3, title: "L" },
//         { id: 4, title: "XL" },
//         { id: 5, title: "XXL" },
//       ],
//       color: [
//         { id: 1, title: "Blue" },
//         { id: 2, title: "Black" },
//         { id: 3, title: "Yellow" },
//         { id: 4, title: "Red" },
//       ],
//     },
//   },
//   {
//     id: 15,
//     productId: 3,
//     title: "Poplin Displaced Wrap Dress",
//     category: "topshop",
//     price: "55.00",
//     qty: 2,
//     size: "XL",
//     color: "Yellow",
//     image: "product-7.jpg",
//     productDetails: {
//       id: 3,
//       category: "topshop",
//       name: "Poplin Displaced Wrap Dress",
//       oldPrice: "75.00",
//       price: "55.00",
//       description:
//         "Mauris viverra cursus ante laoreet eleifend. Donec vel fringilla ante. Aenean finibus velit id urna vehicula, nec maximus est sollicitudin.",
//       sizes: [
//         { id: 1, title: "S" },
//         { id: 2, title: "M" },
//         { id: 3, title: "L" },
//         { id: 4, title: "XL" },
//         { id: 5, title: "XXL" },
//       ],
//       color: [
//         { id: 1, title: "Blue" },
//         { id: 2, title: "Black" },
//         { id: 3, title: "Yellow" },
//         { id: 4, title: "Red" },
//       ],
//     },
//   },
// ];

// localStorage.setItem("cart", JSON.stringify(cart));

const storedData = localStorage.getItem("cart");
let data = [];
if (storedData) {
  data = JSON.parse(storedData);
}
export const cart = data;
