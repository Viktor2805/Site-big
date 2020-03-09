function name(params) {
// slider 
let sliderImages = document.querySelectorAll(".slide"),
  arrowLeft = document.querySelector("#arrow-left"),
  arrowRight = document.querySelector("#arrow-right"),
  current = 0;

//   reset sliders
function reset() {
    for (let i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.display = "none";  
    }
}

// init slide
function startSlide(){
    reset();
    sliderImages[0].style.display = "block";
}

const slideLeft = () => {
    reset();
    sliderImages[current - 1].style.display = "block";
    current--;
}

const slideRight = () => {
    reset();
    sliderImages[current + 1].style.display = "block";
    current++;
}

arrowLeft.addEventListener("click", (e) => {
    if (current === 0) {
        current = sliderImages.length;
    }
    slideLeft();
})

arrowRight.addEventListener("click",  (e) => {
    if (current === sliderImages.length - 1) {
        current = -1;
    }
    slideRight();
})

startSlide();

// === sortable table === 
let table = document.getElementById("grid");

table.onclick = sortNumber = (e) => {
    if (e.target.tagName != "TH") return;

    let th = e.target;
    sortGrid(th.cellIndex, th.dataset.type);
}

sortGrid = (colNum, type) => {
    let tbody = document.querySelector("tbody");
    let rowsArray = [...tbody.rows];

    let compare;

    switch (type) {
        case "number":
            compare = (rowA,rowB) => rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
        break;
        case "string":
            compare = (rowA,rowB) => rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML ? 1 : -1;
        break;
    }

    rowsArray.sort(compare);

    tbody.append(...rowsArray);
}

// const range = (array) => {
//     let reverse = [];
//     for (let i = 0; i < array.length; i++) {
//         reverse.unshift(array[i]);
//     }
//     console.log(reverse);
// }


let wrapper = [...document.querySelectorAll(".img")];

for (let i = 0; i < wrapper.length; i++) {
    wrapper[i].style.display = "none";
}
let count = 0;
let countSec = 1;

wrapper[count].style.display = "block";
wrapper[countSec].style.display = "block";

const arrowDown = () => {
    wrapper[count].style.display = "none";
    wrapper[countSec].style.display = "none";

    if (count == 4) {
        countSec = -1;
    }
    if (count == 5) {
        count = -1;
    }
    count++;
    countSec++;

    wrapper[count].style.display = "block";
    wrapper[countSec].style.display = "block";
}

const arrowUp = () => {
    wrapper[count].style.display = "none";
    wrapper[countSec].style.display = "none";

    if (count == 0) {
        count = 6;
    }
    if (countSec == 1) {
        countSec = 1;
    }
    if (countSec == 0) {
        countSec = 4;
    }
    count--;
    countSec--;

    wrapper[count].style.display = "block";
    wrapper[countSec].style.display = "block";
}

// wrapper_triple

// let wrapper_triple = [...document.querySelectorAll(".slider")];

// for (let i = 0; i < wrapper_triple.length; i++) {
//     wrapper_triple[i].style.display = "none";
// }

// console.log(wrapper_triple);

// wrapper_triple[4].classList.add("mystyle");
// wrapper_triple[5].classList.add("mystyle");
// wrapper_triple[0].classList.add("mystyle");


// let one = 0;
// let two = 1;
// let three = 2;

// wrapper_triple[one].style.display = "block";

// wrapper_triple[two].style.display = "block";

// wrapper_triple[three].style.display = "block";

// const arrowRight = () => {
//     wrapper_triple[one].style.display = "none";
//     wrapper_triple[two].style.display = "none";
//     wrapper_triple[three].style.display = "none";

//     if (three === 6) {
//         three = -1;
//     }

//     one++;
//     two++;
//     three++;

//     wrapper_triple[one].style.display = "block";
//     wrapper_triple[two].style.display = "block";
//     wrapper_triple[three].style.display = "block";
// }








// const destroyer = (array, ...rest) => {
//     for (let index = 0; index < rest.length; index++) {
//         for (let i = 0; i < array.length; i++) {            
//             if (rest[index] === array[i]) {                  
//                 array.splice(i--, 1)
//             }
//         }   
//     }
//     console.log(array);
// }
// destroyer([3, 5, 1, 2, 2], 2, 3, 5);
// function myReplace(str, before, after) {
//     if (before[0].toUpperCase() === before[0]) {
//          after =  after[0].toUpperCase() + after.slice(1);
//     }  
//     before = new RegExp(before);       
//     str = str.replace(before, after);
//     console.log(str);
//     return str;
// }
// myReplace("His name is Tom", "Tom", "john");
// const fearNotLetter = (str) => {
//    let alphabet = "abcdefghijklmnopqrstuvwxyz";
//    let newStr = alphabet.
//    substring(alphabet.indexOf(str[0]), alphabet.lastIndexOf(str[str.length -1]) +1);
//     for (let i = 0; i < newStr.length; i++) {
//         if (newStr[i] !== str[i]) {
//            return newStr[i];
//         }        
//     }    
// }
// console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));
// function sumPrimes(num) {
//     let i = 1;
//     let sum = 0;
//     while (i <= num) {
//       if (isPrime(i)) {
//         sum += i;
//       }
//       i++;
//     }
//     return sum;
// }
//   //function to check if a number is prime or not
// function isPrime(x) {
//     for (let i = 2; i < x; i++) {
//         console.log(x);
//         console.log(i);
//       if (x % i === 0) return false;
//     }
//     return x !== 1 && x !== 0;
// }
//   //test here
// sumPrimes(10);


}


// === runVideo === // 
// const runVideo = () => {
//     document.querySelector(".section-header-wrapper-content__form-video-button__play").onclick = () => 
//     document.getElementById("v").style.zIndex = "12";
// }
// runVideo();
// === runVideo === //


// === toggle menu === //
(() => {
    let menu = document.querySelectorAll(".section-services-statistics");
    let toggle = document.querySelectorAll(".section-services-statistics__wrapper-slider");

    for (let i = 0; i < menu.length; i++) {
        menu[i].addEventListener("click", myFunction = (e) => {
            if (toggle[i].style.display == "none") {
                toggle[i].style.display = "flex";
            } else {
                toggle[i].style.display = "none";
            };
        });
    }
}) ();
// toggle();
// === toggle menu === //


// === VERTICAL SLIDER === //

// const verticalSlider = () => {
//     return TransformStream;
// }

// verticalSlider();
// === VERTICAL SLIDER === //
























// const binarySearch = (list, item) => {
//     let low = 0;
//     let high = list.length - 1;
  
//     while (low <= high) {
//       const mid = Math.floor((low + high) / 2);
//       const guess = list[mid];
  
//       if (guess === item) {
//         return mid;
//       }
//       if (guess > item) {
//         high = mid - 1;
//       } else {
//         low = mid + 1;
//       }
//     }
  
//     return null;
//   };
  
//   const myList = [1, 5, 100];
  
//   console.log(binarySearch(myList, 5)); // 1
//   console.log(binarySearch(myList, -1)); // null


// const recursive = (arr) => {    
//     if (arr.length === 0) {
//         return 0;
//     } else {        
//         return 1 + recursive(arr.slice(1));
//     }
// }

// console.log(recursive([1,3,3,4]));

// const recursive = (arr) => { 
//     let total = arr[0];   
//     for (let index = 0; index < arr.length; index++) {
//         if (arr[index] > total) {
//             total = arr[index];
//         }
//     }
//     return total;
// }

// console.log(recursive([1,2,4,3,6]));


// const quickSort = (array) => {
//     if (array.length < 2) {
//       return array;
//     }
//     const pivot = array[0];
//     const keysAreLessPivot = array.slice(1).filter(key => key <= pivot);
//     const keysAreMorePivot = array.slice(1).filter(key => key > pivot);
//     return [...quickSort(keysAreLessPivot), pivot, ...quickSort(keysAreMorePivot)];
//   };
  
//   console.log(quickSort([10, 5, 2, 3])); // [2, 3, 5, 10]




// const range = (a, b) => {
//     let arr = []; 
//     if ((a + 1) === b || a === b) {
//         return arr;
//     } else {
//         arr.push(b - 1);
//         return range(a, b - 1).concat(arr);          
//     }
// }

// console.log(range(-1,2));


// const binarySearch = (arr, item) => {
//     let high = arr[arr.length - 1];
//     let low = ;
//     let mid = Math.floor((high + low) / 2);    
//     let  guess = arr[mid];
//     console.log(guess);
    

//     if (mid === guess) {
//         return mid;
//     } else {
//         return 
//     }  
//     return null;
// }

// console.log(binarySearch([1, 3, 4], 4));



const url = "https://jsonplaceholder.typicode.com/todos/1";

const delay = ms => {
    return new Promise(r => setTimeout(() => r(), ms));
};

function functionTodo () {
    return  delay(1000)
    .then(() => fetch(url))
    .then(response => response.json());
}

functionTodo()
    .then(json => console.log(json))
    .catch(error => console.log('error is', error));
