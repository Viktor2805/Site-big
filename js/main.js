// const url = "https://jsonplaceholder.typicode.com/todos/1";

// const delay = ms => {
//     return new Promise(r => setTimeout(() => r(), ms));
// };

// function functionTodo () {
//     return  delay(0000)
//     .then(() => fetch(url))
//     .then(response => response.json());
// }

// functionTodo()
//     .then(json => console.log(json))
//     .catch(error => console.log('error is', error));


// console.log(fibSeq());

// function wordsToSentence(words) {
//   return words.join(", ");
// }

// console.log(wordsToSentence(["Hello", "Bye", "See you soon"]));



// function fibonacci(n,memo) {
//     memo = memo || {}
//     if (memo[n]) {
//         return memo[n];
//     }
//     if (n <= 1) {
//         return 1;
//     }
//     return memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo)
// }

// console.log(fibonacci(5));

// document.addEventListener("mousemove", (e) => {
//     let dot = document.createElement("div");
//     dot.className = "trail";
//     dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
//     document.body.append(dot);

//     let amountDots = document.querySelectorAll("div.trail");
//     if (amountDots.length > 11) {
//         amountDots[amountDots.length - 12].remove(); 
//     }
// });


// const asTabs = (node) => {
//     console.log(this);      
// }


// let tab_panel = ;

// tab_panel.addEventListener("click", (e) => {
//     console.log(e.target);
// })


// buttons = (tab_panel) => {
//     let button = document.createElement("button");
//     button.innerText = "button";
//     button.className = "button";  
    
//     for (let i = 0; i < tab_panel.children.length; i++) {
//         // tab_panel.children[i].after(document.createElement("button"));    

//     }
//     // tab_panel.children[1].after(button);     
//     // tab_panel.children[2].after(button);    
//     console.log(button);
     

//     // for (let i = 0; i < tab_panel.children.length; i++) {
//         // tab_panel.children[i].before(button);     
//     // }    
// }
// buttons(document.querySelector("tab-panel"));
// asTabs(document.querySelector("tab-panel"));



// fetch("/js/text.txt", {
//     headers: {
//         // 'Content-Type': 'text/plain',
//         // 'Content-Type': 'text/html',
//         // 'Content-Type': 'text/json',
//     }
// })
// .then(response => {
//     console.log(response.status);
//     // → 200
//     console.log(response.headers.get("Content-Type"));
//     // → text/plain
// });

// fetch("https://javascriptcsshtml.000webhostapp.com/");

// const fibonacci(num){
//     let a = 1;
//       let b = 0;
//       let storage;
  
//     while (num >= 0){
//       storage = a;
//       a += b;
//       b = storage;
//       num--;
//     }
  
//     return b;
//   }

// console.log(fibonacci(7));


// const sort = (arr) => {
//     return [...new Set(arr)]
// }

// console.log(sort([2,3,7,4,6,1,5,8,9]));
// // 2,1,3,4,6,5,7,8,9


const code = document.getElementById("code");
const buttonRun = document.getElementById("button");
const output = document.getElementById("output");
// console.log(code.value,button, output);


// buttonRun.addEventListener("click", () => {
//     try {
//         let plusOne =  Function(code.value)();
//         output.innerHTML = String(plusOne);
//     } catch (error) {
//         output.innerHTML = "Error" + error;
//     }

// });
// console.log(String("bre"));

// const quickSort = (array) => {
//     if (array.length < 2) {
//       return array;
//     }
//     const pivot = array[0];//     const keysAreLessPivot = array.slice(1).filter(key => key <= pivot);
//     const keysAreMorePivot = array.slice(1).filter(key => key > pivot);
//     // console.log([...quickSort(keysAreLessPivot), pivot, ...quickSort(keysAreMorePivot)]);

//     return [...quickSort(keysAreLessPivot), pivot, ...quickSort(keysAreMorePivot)];
    
//   };
  
//   console.log(quickSort([10, 5,6])); // [2, 3, 5, 10]
// .seletion sort
// let identicalFilter=a=>a.filter(s=>/^(.)\1*$/.test(s))
// const countTrue = (arr) =>  arr.filter(a => a === true).length;

// console.log(countTrue([true, false, false, true, false]));



// const order = (arr) => {
//   let num = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (num > arr[i]) return false;
//     else num = arr[i]
//   }
//   return true;
// }
// console.log(order([3,1,5,7,9]));



const getIndices = (str,sym) => {
	let arr = [];
	 str.map((a,index) => {
		if (a === sym)  arr.push(index);
	})
	return arr;
}	
console.log(getIndices(["a", "a", "b", "a", "b", "a"], "a"));
