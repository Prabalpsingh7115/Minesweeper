import Cell from "./Cell";
import { useState } from "react";
import Queue from "./Queue"
import GenerateMatrix from "./GenerateMatrix";

const Board = ({arr}) => {

    let dx=[-1,-1,-1,0,0,1,1,1]
    let dy=[-1,0,1,-1,1,-1,0,1]

    const [matrix,setMatrix]=useState(arr);

    const destroyCells = (idx) => {
        
        let q=new Queue();
        let s=[];
        q.push(idx);
        let vis=new Array(36).fill(0);
        vis[idx]=1;
        
        while(!q.isEmpty)
        {
            let cur=q.pop();
            console.log(cur);
            s.push(cur);
            
            let x=Math.floor(cur/6);
            let y=cur%6;

            for(let i=0;i<8;i++)
            {
                let temp=(x+dx[i])*6+y+dy[i];
                if(x+dx[i]>=0&&x+dx[i]<6&&y+dy[i]>=0&&y+dy[i]<6&&vis[temp]===0)
                {
                    if(matrix[temp]["val"]==0&&matrix[temp]["isHidden"])
                    {
                        q.push(temp);
                        vis[temp]=1;
                    }
                    else
                    {
                        s.push(temp);
                        vis[temp]=1;
                    }
                }
            }
        }

        let newMatrix = matrix.map((cell, ind) => {
            if(s.includes(ind)) {
                return {
                    ...cell,
                    isHidden: false
                }
            }
            return cell;
        })

        setMatrix(newMatrix)
    }

    const updateCell=(newCell,idx)=>{
        let newMatrix=matrix.map((cell,cur_idx)=>{
            if(idx===cur_idx)
            {
                return newCell;
            }
            else
            {
                return cell; 
            }
        });
        setMatrix(newMatrix);
    }

    return (
        <div id="board">
        {
            matrix.map(cell => (
                <Cell 
                    updateCell={updateCell}
                    destroyCells={destroyCells}
                    hidden={cell.isHidden}
                    mine={cell.isMine}
                    flag={cell.isFlag}
                    val={cell.val}
                    pos={cell.pos}
                    key={cell.pos}/>
            ))
        }
        <button id="new_game" onClick={()=>{
            let p=GenerateMatrix(6,6);
            setMatrix(p);
        }}>New Game</button>
        </div>
    )
}

export default Board;