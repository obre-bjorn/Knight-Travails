/* eslint-disable no-plusplus */
/* eslint-disable import/prefer-default-export */
function Gameboard(){

    const board = []

     function init(){

        for(let x = 0; x <= 7; x++){
            board[x] = []
            // eslint-disable-next-line no-plusplus
            for(let y = 0; y <= 7; y++){
                board[x][y] = ' '
            } 
        }
        
        return board
     }

     function getBoard(){
        return board
     }

     function checkPossibleMove([posX,posY]){
        return (posX <= 7 && posX >= 0) && (posY <= 7 && posY >=0)

     }

     function placeKnight(piece,[posX,posY]){
        if(checkPossibleMove([posX,posY])){

            board[posX][posY] = piece.value

            return board
        }
        return 'Invalid Coordinates'
     }

     function placeTarget(piece,[posX,posY]){
        if(checkPossibleMove([posX,posY])){

            board[posX][posY] = piece.value

            return board
        }
        return 'Invalid Coordinates'
     }
     
     return {
        init,
        getBoard,
        placeKnight,
        placeTarget,
        checkPossibleMove
     }


     

}

function Knight(){
    const value = 'K'
    
    const moves = [[2,1], [-2,1],[2,-1],[-2,-1],[1,2],[-1,2],[1,-2],[-1,-2]]

    // function placeKnight(board,[knightX,knightY]){
    //     console.log(board.checkPossibleMove)
    //     if(board.checkPossibleMove){
    //         board.getBord[knightX][knightY] = 'K'
    //     }
    //     console.log(board)
    // }
    return{value}
}




function knightMoves(board,knightPos,targPos){
    
    const checkValidBoard = board.checkPossibleMove(knightPos) && board.checkPossibleMove(targPos)
    

    if(checkValidBoard){


        const queue = [knightPos]
        const visited = new Set()
        const [targX,targY] = targPos
        const path = {}
    
        while(queue.length > 0){
            const currKnightPos = queue.shift()
    
            visited.add(currKnightPos.toString())
            const [currKnighPosX, currKnightPosY] = currKnightPos
    
    
            if(currKnighPosX === targX && currKnightPosY === targY){
                  const shortestPath = [];
            let current = currKnightPos.toString();
            while (current) {
                shortestPath.push(current);
                current = path[current];
            }
            return shortestPath.reverse();
                
            }
    
            const moves = [[2,1], [-2,1],[2,-1],[-2,-1],[1,2],[-1,2],[1,-2],[-1,-2]]
    
    
            moves.forEach(move =>{
    
                const newmove = [currKnighPosX + move[0], currKnightPosY+move[1]]
    
                if(board.checkPossibleMove(newmove) && !visited.has(newmove.toString())){
                    queue.push(newmove)
                    path[newmove.toString()] = currKnightPos

                }
                
                console.log(queue)
    
            })
    

    }    


    }
    
    return 'Not Found'

}




const gameBoard = Gameboard()
const knight = Knight()
gameBoard.init()

gameBoard.placeKnight(knight,[6,6])
gameBoard.placeTarget({value:'K'},[1,1])

console.log(knightMoves(gameBoard,[6,6],[0,0]))





// console.log(board)
