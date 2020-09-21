import Paginate from '../src/pagination';

describe('pagination : all connotations for delta 5 with 10 pages', () => {
  const total = 10;
  const delta = 5;

  const runner = test.each([
    [1,[1, 2, 3, 4, 5, "...", 10]],
    [2,[1, 2, 3, 4, 5, "...", 10]],
    [3,[1, 2, 3, 4, 5, "...", 10]],
    [4,[1, "...", 2, 3, 4, 5, 6, "...", 10]],
    [5,[1, "...", 3, 4, 5, 6, 7, "...", 10]],
    [6,[1, "...", 4, 5, 6, 7, 8, "...", 10]],
    [7,[1, "...", 5, 6, 7, 8, 9, "...", 10]],
    [8,[1, "...", 6, 7, 8, 9, 10]],
    [9,[1, "...", 6, 7, 8, 9, 10]],
    [10,[1, "...", 6, 7, 8, 9, 10]],
  ]);

  runner('pagination(%i, 10, 5)', (index, expected) => {
    expect(Paginate(index, total, delta)).toStrictEqual(expected)
  });

  it("maintains performance", () => {
    const t0 = performance.now()
    Paginate(99999, 999999999, 999)
    const t1 = performance.now()

    expect(t1 - t0).toBeLessThan(1)
  })
});

describe('pagination : all connotations for delta 4 with 10 pages', () => {
  const total = 10;
  const delta = 4;

  const runner = test.each([
    [1,[1, 2, 3, 4, "...", 10]],
    [2,[1, 2, 3, 4, "...", 10]],
    [3,[1, 2, 3, 4, "...", 10]],
    [4,[1, "...", 2, 3, 4, 5, "...", 10]],
    [5,[1, "...", 3, 4, 5, 6, "...", 10]],
    [6,[1, "...", 4, 5, 6, 7, "...", 10]],
    [7,[1, "...", 5, 6, 7, 8, "...", 10]],
    [8,[1, "...", 6, 7, 8, 9, "...", 10]],
    [9,[1, "...", 7, 8, 9, 10]],
    [10,[1, "...", 7, 8, 9, 10]],
  ]);

  runner('pagination(%i, 10, 4)', (index, expected) => {
    expect(Paginate(index, total, delta)).toStrictEqual(expected)
  });
});

test('pagination algorithm; total less than delta', () => {
  const curr = 1;
  const total = 1;
  const delta = 5;

  expect(Paginate(curr, total, delta)).toStrictEqual([1]);
});

describe('pagination : total <= delta', () => {
  const curr = 1;
  const delta = 5;

  const runner = test.each([
    [1,[1]],
    [2,[1, 2]],
    [3,[1, 2, 3]],
    [4,[1, 2, 3, 4]],
    [5,[1, 2, 3, 4, 5]],
  ]);

  runner('pagination(1, %i, 5)', (index, expected) => {
    expect(Paginate(curr, index, delta)).toStrictEqual(expected)
  });
});

describe('pagination : mid-range delta variance from 1 to 10, 100 page collection', () => {
  const curr = 50;
  const total = 100;

  const runner = test.each([
    [1,[1, "...", 50, "...", 100]],
    [2,[1, "...", 49, 50, "...", 100]],
    [3,[1, "...", 49, 50, 51, "...", 100]],
    [4,[1, "...", 48, 49, 50, 51, "...", 100]],
    [5,[1, "...", 48, 49, 50, 51, 52, "...", 100]],
    [6,[1, "...", 47, 48, 49, 50, 51, 52, "...", 100]],
    [7,[1, "...", 47, 48, 49, 50, 51, 52, 53, "...", 100]],
    [8,[1, "...", 46, 47, 48, 49, 50, 51, 52, 53, "...", 100]],
    [9,[1, "...", 46, 47, 48, 49, 50, 51, 52, 53, 54, "...", 100]],
    [10,[1, "...", 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, "...", 100]],
  ]);

  runner('pagination(curr, 10, %i)', (index, expected) => {
    expect(Paginate(curr, total, index)).toStrictEqual(expected)
  });
});

describe('pagination : large collection size', () => {
  const total = 1000;
  const delta = 7;

  const runner = test.each([
    [3,[1, 2, 3, 4, 5, 6, 7, "...", 1000]],
    [399,[1, "...", 396, 397, 398, 399, 400, 401, 402, "...", 1000]],
    [997,[1, "...", 994, 995, 996, 997, 998, 999, 1000]],
  ]);

  runner('pagination(%i, 1000, 7)', (index, expected) => {
    expect(Paginate(index, total, delta)).toStrictEqual(expected)
  });
});
