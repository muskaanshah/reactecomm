const discount = (actualprice, newprice) => Math.floor(((actualprice - newprice) * 100) / actualprice);

export { discount }