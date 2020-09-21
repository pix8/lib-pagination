import Paginate from "@pix8/lib-pagination";

const curr = 1;
const total = 10;
const delta = 5;

for(let i = 1; i <= total; i++) {
  console.log('page = ', i, ' :: ', Paginate(i, total, delta));
}
