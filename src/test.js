// const data = require('./data').setData;
// data.sort((a, b) => a.sort_id - b.sort_id);

// function groupOptionByWatchId(data) {
//   const result = {};
//   data.forEach((option) => {
//     option.conditions.forEach((condition) => {
//       if (!result[condition.watch_option]) {
//         result[condition.watch_option] = new Set();
//       }
//       result[condition.watch_option].add(option.id);
//     });
//   });
//   return result;
// }

// // const obj = [
// //   {
// //     id: 1,
// //   },
// //   {
// //     id: 2,
// //     parentId: [1],
// //   },
// //   { id: 3, parentId: [2, 1] },
// // ];

// // function buildTree(abc, parentId = null) {
// //   let node = [];
// //   abc.forEach((item) => {
// //     if (item.parentId && item.parentId.includes(parentId)) {
// //       let children = buildTree(abc, item.id);
// //       node.push({ ...item, children });
// //     } else if (!item.parentId && parentId === null) {
// //       let children = buildTree(abc, item.id);
// //       node.push({ ...item, children });
// //     }
// //   });
// //   return node;
// // }

// function dfs(node, adjacencyList, visited) {
//   visited.add(node);
//   let children = adjacencyList[node] || [];
//   for (let child of children) {
//     if (!visited.has(child)) {
//       dfs(child, adjacencyList, visited);
//     }
//   }
// }

// function convert(adjList) {
//   let result = {};
//   let visited = new Set();
//   for (let node in adjList) {
//     result[node] = [];
//     visited.clear();
//     dfs(node, adjList, visited);
//     result[node] = Array.from(visited);
//   }
//   return result;
// }

// console.log(convert(groupOptionByWatchId(data)));
// // const tree = buildTree(obj);

// // console.log('tree', JSON.stringify(tree, null, 1));

// // let test = [
// //   {
// //     id: 1,
// //     children: [
// //       {
// //         id: 2,
// //         parentId: [1],
// //         children: [
// //           {
// //             id: 3,
// //             parentId: [2, 1],
// //             children: [],
// //           },
// //         ],
// //       },
// //       {
// //         id: 3,
// //         parentId: [2, 1],
// //         children: [],
// //       },
// //     ],
// //   },
// // ];
