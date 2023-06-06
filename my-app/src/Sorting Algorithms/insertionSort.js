export default function insertionSort(nodes) {
  let newNodes = nodes;
  let animationNodes = [0];

  for (let i = 1; i < newNodes.length; i++) {
    let index = i;
    while (index >= 1) {
      if (newNodes[index].value >= newNodes[index - 1].value) {
        animationNodes.push(["inPlace",newNodes[index],newNodes[index - 1]])
        break;
      }
      [newNodes[index - 1], newNodes[index]] = [
        newNodes[index],
        newNodes[index - 1],
      ];
      animationNodes.push(["swapped",newNodes[index - 1], newNodes[index]])
      index -= 1;
    }
  }
  return [newNodes, animationNodes];
}

const nodes = [
  { value: 423324123 },
  { value: 45323 },
  { value: 43 },
  { value: 43 },
  { value: 403 },
  { value: 3 },
  { value: 32409517 },
];

const [newNodes, animationNodes]=insertionSort(nodes);
console.log(insertionSort(nodes));
console.log(animationNodes);