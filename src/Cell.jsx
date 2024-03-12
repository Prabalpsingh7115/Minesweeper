const Cell = ({hidden,mine,flag,val,pos,updateCell, destroyCells})=>{

    const leftClickHandler = ()=>{

        if(!flag){
            if(hidden){
                updateCell({
                    isHidden:false,
                    isFlag:flag,
                    val:val,
                    pos:pos,
                    isMine:mine
                },pos)
                if(mine)
                {
                    setTimeout(()=>{alert("GameOver")},150);
                } else if(val === 0) [
                    destroyCells(pos)
                ]
            }    
        }
    }

    const rightClickHandler = (e) => {
        e.preventDefault();
        updateCell({
            isHidden:hidden,
            isFlag:!flag,
            val:val,
            pos:pos,
            isMine:mine
        },pos)
    } 

    return (
        <div className="cell" onClick={leftClickHandler} onContextMenu={rightClickHandler}>{
            (hidden)?(
                (flag)?(
                    <img className="flag_cell" src="./assets/flag.png" alt="flagged cell" />
                ):(
                    <img src="./assets/hidden.png" alt="hidden cell"/>
                )
            ):(
                (mine)?(
                    <img src="./assets/mine.png" alt="mine cell" />
                ):(
                    <p>{val}</p>
                )
            )
        }
        </div>
    )
}
export default Cell;