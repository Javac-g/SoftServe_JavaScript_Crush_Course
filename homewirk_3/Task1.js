function count(input) {
let numb = input.split``.filter(v=>/[0-9]/.test(v)).length
let letter = input.split``.filter(v=>/[a-zA-Z]/.test(v)).length 
let symb = input.split``.filter(v=>/[@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(v)).length 
let arr = [numb,letter,symb]
  alert('[чисел/букв/символов] = ' + arr)
}
count('Ja1vaScri2ptCras3hCou4rse+-')
