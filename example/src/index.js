import Paginate from '@pix8/lib-pagination';
import { $ } from './util';

const curr = 1;
const total = 10;
const delta = 5;

const $example = $('#example');

for(let i = 1; i <= total; i++) {
  let wrapperNode = document.createElement('li');
  let paragraphNode = document.createElement('p');
  let preNode = document.createElement('pre');
  let codeNode = document.createElement('code');
  let pagination = document.createElement('ul');
  let navNode = document.createElement('nav');
  let labelNode = document.createTextNode(`Current page = ${i}`);
  let textNode = document.createTextNode(`${JSON.stringify(Paginate(i, total, delta))}`);

  paragraphNode.classList.add('example__label');
  preNode.classList.add('example__code');
  navNode.classList.add('example__pagination');

  paragraphNode.appendChild(labelNode);
  wrapperNode.appendChild(paragraphNode);

  codeNode.appendChild(textNode);
  preNode.appendChild(codeNode);
  wrapperNode.appendChild(preNode);

  for(const page of Paginate(i, total, delta)) {
    let listItemNode = document.createElement('li');
    let linkNode = document.createElement('a');
    let spanNode = document.createElement('span');
    let textNode = document.createTextNode(page);

    if(page === i) {
      listItemNode.classList.add('active');
    }else {
      linkNode.href = `?page=${page}`
    }
    linkNode.classList.add('btn');

    if(page === '...') {
      spanNode.appendChild(textNode);
      listItemNode.appendChild(spanNode);
    }else {
      linkNode.appendChild(textNode);
      listItemNode.appendChild(linkNode);
    }

    pagination.appendChild(listItemNode);
  }

  navNode.appendChild(pagination);
  wrapperNode.appendChild(navNode);

  $example.appendChild(wrapperNode);
}
