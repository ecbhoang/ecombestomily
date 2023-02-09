export function ebDebounce(fn, delay) {
  let timeoutId;
  return function (...args) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      fn(...args);
      timeoutId = null;
    }, delay);
  };
}

export function ebParseInt(params) {
  return 1 * params;
}

function dfs(node, adjacencyList, visited) {
  visited.add(node);
  let children = adjacencyList[node] || [];
  for (let child of children) {
    if (!visited.has(child)) {
      dfs(child, adjacencyList, visited);
    }
  }
}

export function parseDataMultipleLevel(adjList) {
  let result = {};
  let visited = new Set();
  for (let node in adjList) {
    result[node] = [];
    visited.clear();
    dfs(node, adjList, visited);
    result[node] = Array.from(visited);
  }
  return result;
}
