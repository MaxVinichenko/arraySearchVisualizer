export default function insertionSort(nodes) {
  let newNodes = [...nodes];
  let swappedI =[];

  for (let i = 0; i < newNodes.length; i++) {
    let index = i;
    swappedI.push([i]);
    while (index >= 1) {
      if (newNodes[index].value >= newNodes[index - 1].value) {
        break;
      }
      [newNodes[index - 1], newNodes[index]] = [
        newNodes[index],
        newNodes[index - 1]
      ];
      swappedI.push([index, index-1]);
      index -= 1;
    }
  }
  return swappedI;
}
