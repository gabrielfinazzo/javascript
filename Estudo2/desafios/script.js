var a = 10
var b = 20
var c = null

c = a
a = b
b = c

c = null

document.write(`${a}, ${b} ${c} `)