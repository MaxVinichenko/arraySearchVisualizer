export default function insertionSort(nodes) {
  let newNodes = nodes;
  let animationNodes = [["highlited", newNodes[0]]];

  for (let i = 1; i < newNodes.length; i++) {
    animationNodes.push(["highlited", newNodes[i]]);
    let index = i;
    while (index >= 1) {
      if (newNodes[index].value >= newNodes[index - 1].value) {
        animationNodes.push(["inPlace", newNodes[index - 1], newNodes[index]]);
        break;
      }

      [newNodes[index - 1], newNodes[index]] = [
        newNodes[index],
        newNodes[index - 1],];

        newNodes[index-1].index=index-1
        newNodes[index].index=index

      animationNodes.push(["swapped", newNodes[index], newNodes[index-1]]);
      if (index - 1 === 0) {
        animationNodes.push(["inPlace", newNodes[index - 1], newNodes[index]]);
      }
      index -= 1;
    }
  }
  return [newNodes, animationNodes];
}
