// import { useState } from "react";
import { useState } from "react";
import Cell from "./Cell";
import GenerateMatrix from "./GenerateMatrix";



// update matrix[i]
const PlayingWindow = ({cells}) => {

    const [matrix, setMatrix] = useState(cells)

    console.log(cells)
    
    const updateMatrix = (ind, newCell) => {
        setMatrix(matrix => {
            return matrix.map((cell, i) => {
                if(ind === i) {
                    return newCell;
                } else {
                    return cell;
                }
            })
        })
        // console.log(matrix)
    }

    const handleRightClick=(ind)=>{
        
        let flag=matrix[ind]["isFlag"];
        let val=matrix[ind]["val"];
        let mine=matrix[ind]["isMine"];
        let hidden=matrix[ind]["isHidden"];
        
        
        updateMatrix(ind,{
            val:val,
            isFlag:!flag,
            isMine:mine,
            isHidden:hidden
        })
    }
    
    const handleLeftClick= (ind) => {
        // console.log("hover", ind)
        let flag=matrix[ind]["isFlag"];
        let val=matrix[ind]["val"];
        let mine=matrix[ind]["isMine"];
        let hidden=matrix[ind]["isHidden"];
        
        
        if(hidden)
        {
            if(!flag){
                updateMatrix(ind, {
                    val:val,
                    isHidden:false,
                    isMine:mine,
                    isFlag:false
                })
            }
        }

        if(mine)
        {
            setTimeout(()=>{alert("Game Over")},200);
            let k=GenerateMatrix();
            setTimeout(()=>{setMatrix(k)},700);
        }
        console.log(val,flag,mine,hidden);
    }


    return (
        <section id="arena">{
            matrix.map((cell, ind) => (
                <Cell 
                val={cell.val}
                isFlag={cell.isFlag}
                hidden={cell.isHidden}
                isMine={cell.isMine}
                key={ind}
                pos={ind}
                onClickHandler = {handleLeftClick}
                onContextHandler={handleRightClick}
                />
            ))
        }
        </section>
    );
};

export default PlayingWindow;   
