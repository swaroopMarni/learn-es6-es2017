function localScope() {
    var cat = "jerry";

    // return cat
    // console.log(cat);
    function lexicalScope() {
        console.log(cat);
        return cat;
    }

    lexicalScope();
}

console.log(localScope());
