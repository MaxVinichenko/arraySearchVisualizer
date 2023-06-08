export default function bubblesort(nodes) {
  let newNodes = [...nodes];
  let animations = [];
  let swapped;
  let firstInPlace = newNodes.length - 1;

  for (let i = 0; i < nodes.length; i++) {
    swapped = false;
    for (let j = 0; j < nodes.length - 1 - i; j++) {
      if (newNodes[j].value > newNodes[j + 1].value) {
        [newNodes[j + 1], newNodes[j]] = [newNodes[j], newNodes[j + 1]];
        animations.push([j, j + 1]);
        swapped = true;
      }
    }
    if (swapped == false) {
      break;
    }
    animations.push([firstInPlace]);
    firstInPlace -= 1;
  }
  return animations;
}

// const nodes = [
//   { value: 23 },
//   { value: 6432 },
//   { value: 64236 },
//   { value: 623 },
//   { value: 36 },
//   { value: 456 },
//   { value: 17 },
//   { value: 6 },
// ];

// console.log(bubblesort(nodes));
