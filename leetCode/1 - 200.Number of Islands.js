/*
200. Number of Islands
Medium
Topics
Companies
Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.
*/


const grid1 = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
]
Output: 1

  //Example 2:

const grid2 = [
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
]
Output: 3





function getNeighbors(row, col, grid) {
    let res = []
    //up
    if(row -1 >=0 && grid[row -1][col]) res.push([row-1 , col])
    //down
    if(row + 1 < grid.length && grid[row+1][col]) res.push([row+1, col])
    //left
    if(col - 1 >= 0 && grid[row][col-1]) res.push([row, col-1])
    //right
    if(col + 1 < grid.length && grid[row][col+1]) res.push([row,col+1])

    return res
}

const numIslands = function(grid) {
    let visited = new Set();
    let count = 0;

    for(let row = 0; row < grid.length; row++) {
        for(let col = 0; col < grid[row].length; col++) {
            if(grid[row][col] && !visited.has(String([row,col]))) {
                if( grid[row][col] === 1){

                    const queue = [[row, col]];
                    visited.add(String([row,col]));

                    while(queue.length) {
                        deq = queue.shift();
                        const [popRow, popCol] = deq;

                        const neighbors = getNeighbors(popRow, popCol, grid)
                        for(let neighbor of neighbors){
                            const stringy = String(neighbor);
                            if(!visited.has(stringy)){
                                queue.push(neighbor);
                                visited.add(stringy)
                            }
                        }
                    }



                }
                count++


            }

        }
    }
    return count
}

console.log(numIslands(grid1))

//Example 1:


/*
Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 300
grid[i][j] is '0' or '1'.
*/
