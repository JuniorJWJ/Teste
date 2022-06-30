var string_original = "123456789"
var string_inversa = []
var string_inversa1 = ""

for (let i = 0; i < string_original.length; i++) {
    console.log(string_original[i])
    string_inversa[string_original.length-1-i] = string_original[i];
}
for (let i = 0; i < string_inversa.length; i++){
    string_inversa1 += string_inversa[i]
}
console.log(JSON.stringify(string_inversa1))