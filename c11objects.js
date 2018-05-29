var library = [ 
   { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
   { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
   { author: 'Aldous Huxley', title: 'Brave New World', libraryID: 3245},
   { author: 'Stephen Hawking', title: 'A Brief History of Time', libraryID: 8237},
   { author: 'Frank Herbert', title: 'Dune', libraryID: 390},
   { author: 'Herman Hesse', title: 'Siddhartha', libraryID: 2112}
   ];
   
   
function libSort(a,b){
  return a.libraryID - b.libraryID;
}
console.log(library.sort(libSort));
