let n = 5;
let string = "";
i=1
while (i<=n) { // external loop(row)
    j=1
    while (j<=n){ // internal loop(coloumn)
        string += "*";
    j=j+1
  }i++
  string += "\n";
}console.log(string);