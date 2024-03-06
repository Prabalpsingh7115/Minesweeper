const Cell = ({val,hidden,isMine,isFlag,pos,onClickHandler,onContextHandler}) => {

    let flag=isFlag

    val=val||""
    return (
            
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
        <div className ="cell"  onClick = {() => {onClickHandler(pos)}} onContextMenu={(e)=>{
            e.preventDefault();
            {onContextHandler(pos)}}}
            >
            {
                (hidden)?(
                    (flag)?(
                        <div className={`flag_cell`}><img src="./assets/flag.png" alt="alt_image" /></div>
                    ):(
                        <div className={`hidden_cell`}><img src="./assets/hidden.png" alt="alt_image" /></div>
                    )
                ):(
                    (isMine)?(
                        <div className={`mine_cell`}><img src="./assets/mine.png" alt="alt_image" /></div>
                    ):(
                        <div className={`num_cell`}>{val}</div>
                    )
                )
            }
        </div>
    )
}

export default Cell;

// const handleClick = (()=>{
//     if(!flag&&hidden)
//     {
//         setHidden(false);
//         if(isMine)
//         {
//             setTimeout(() => {
//                 alert("Game Over");
//             }, 200);
//         }
//         else
//         {
//             let vis =new Array(20).fill(0)
//             let q=new Queue;
//             q.enqueue(pos);
//             vis[pos]=1;

//             let dx=[-1,-1,-1,0,0,1,1,1]
//             let dy=[-1,0,1,-1,1,-1,0,1]
//             while(q.size())
//             {
//                 let p=q.dequeue();
//                 // console.log(vis);

//                 let r=p/4;
//                 let c=p%4;

//                 for(let i=0;i<8;i++)
//                 {
//                     if(r+dx[i]<5&&r+dx[i]>=0 && c+dy[i]<4&&c+dy[i]>=0)
//                     {
//                         let temp_key = (r+dx[i])*4+c+dy[i];
//                         // let temp = document.querySelector(temp_key);
//                         if(vis[temp_key]===0)
//                         {
//                             q.enqueue(temp_key);
//                             vis[temp_key]=1;
//                         }
//                     }
//                 }
//             }

//         }
//     }
// })