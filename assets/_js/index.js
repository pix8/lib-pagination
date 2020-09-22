import Paginate from '@pix8/lib-pagination';

const current = 1, total = 10, delta = 5;

const $example = document.getElementById('example');

for(let i = current; i <= total; i++) {
  const node = {
    wrapper: document.createElement('li'),
    paragraph: document.createElement('p'),
    pre: document.createElement('pre'),
    code: document.createElement('code'),
    pagination: document.createElement('ul'),
    nav: document.createElement('nav')
  };

  const text = {
    label: document.createTextNode(`Current page = ${i}`),
    index: document.createTextNode(`${JSON.stringify(Paginate(i, total, delta))}`),
  }

  node.paragraph.classList.add('example__label');
  node.pre.classList.add('example__code');
  node.nav.classList.add('example__pagination');

  node.paragraph.appendChild(text.label);
  node.wrapper.appendChild(node.paragraph);

  node.code.appendChild(text.index);
  node.pre.appendChild(node.code);
  node.wrapper.appendChild(node.pre);

  for(const page of Paginate(i, total, delta)) {
    const pNode = {
      listItem: document.createElement('li'),
      link: document.createElement('a'),
      span: document.createElement('span')
    }

    const pText = {
      page: document.createTextNode(page)
    }

    pNode.link.classList.add('btn');

    if(page === i) {
      pNode.listItem.classList.add('active');
    }else {
      pNode.link.href = `?page=${page}`
    }

    if(page === '...') {
      pNode.span.appendChild(pText.page);
      pNode.listItem.appendChild(pNode.span);
    }else {
      pNode.link.appendChild(pText.page);
      pNode.listItem.appendChild(pNode.link);
    }

    node.pagination.appendChild(pNode.listItem);
  }

  node.nav.appendChild(node.pagination);
  node.wrapper.appendChild(node.nav);

  $example.appendChild(node.wrapper);
}
