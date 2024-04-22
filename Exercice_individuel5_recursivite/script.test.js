const fun = require ('./script'); 
test("should add 1,2 and 3 equal 6", () => {
    let result= fun.sum1([1,2,3]);
    expect(result).toBe(6);
});

test("should add 1 equal 1", () => {
    let result= fun.sum1([1]);
    expect(result).toBe(1);
});

test("should not work (number as function argument)", () => {
    let result= fun.sum1(1);
    expect(result).toBe(null);
});

test("should not work string as function argument)", () => {
    let result= fun.sum1("c'est pareil");
    expect(result).toBe(null);
});

test("should not work  stringArray as function argument ", () => {
    let result= fun.sum1(["A", "B", "C"]);
    expect(result).toBe(null);
});
test("should not work  numbreStringBolean as function argument ", () => {
    let result= fun.sum1([[1], {}, "2", true, 1]);
    expect(result).toBe(null);
});