const children = document.querySelectorAll('.children')

window.addEventListener('scroll', () => {
    children.forEach(element => {
        element.style.animation = 'appear  linear'
        element.style.animationTimeline = 'view()'
        element.style.animationRange = 'entry 0 cover 30% '
    });
    
}) 

document.onclick = e => {
    console.log(e.srcElement.attributes.class ?? null)
    const classElement = e.srcElement.attributes.class ?? undefined   
}

//! part 1

//? soal 1 

const soalSatu = (a,b) => {
    return a + b
}

//? soal 2 

const soalDua = (a,b) => {
    return a === b ? true : false
}

// console.log(soalDua(2,1))

//? soal 3

const soalTiga = (a) => {
    return typeof(a)
}

// console.log(soalTiga(1))


//? soal 4 

const soalEmpat = (a,n) => {
    return a[n - 1] ?? 'katanya tidak sepanjang itu'
}

// console.log(soalEmpat('asbd',1 ))


//? soal 5

const soalLima = (a) => {
    return a.slice(3)
}

// console.log(soalLima('asdasda'))
// console.log('limakan')

//? soal 6

const soalEnam = (a) => {
    return a.slice(-3)   
}

// console.log(soalEnam('kocak'))

//? soal 7

const soalTujuh = (a) => {
    return a.indexOf('is') 
}

console.log(soalTujuh('asdais'))


//! part 2

//? soal nomor 1

const soal1 = (a,b) => {
    const arrayA = a.split('')
    
    console.log(arrayA)

    if(arrayA.includes(b)) {
        return `${b}${a}`
    } else {
        return `${a}${b}`
    }
}

// console.log(soal1('makan', 'kan'))

//? soal nomor 2

const soal2 = (a) =>  {
    if(a % 2 == 0 ) return true
    return false
}

// console.log(soal2(1))


//? soal nomor 3

const soal3 = (a,b) => {

   const arrayB = b.split('') 
   const sama = arrayB.filter(el => el == a) 
   return sama.length 
}

// console.log(soal3('a', 'apakahaaa'))

//? soal nomor 4

const soal4 = (a) => {
    return Math.round(a) == a ? true : false
}


// console.log(soal4(123))


//? soal nomor 5

const soal5 = (a,b) => {
    return a < b ? a / b : a * b
}

// console.log(soal5(3,2))

//? soal nomor 6

const soal6 = (a) => {
    const str = a.toString()
    const arrayA = str.split('')
    return arrayA.map(el => parseInt(el))
    
}

// console.log(soal6(33434))

