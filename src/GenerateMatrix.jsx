export default function GenerateMatrix(){
        
        let arr=new Array(20)
        
        for(let i=0;i<20;i++)
        {
            let cell={
                val:0,
                isHidden:true,
                isMine:false,
                isFlag:false,
            };
            arr[i]=cell;
        }

        for(let i=0;i<4;i++)
        {
            let p=Math.floor((Math.random() * 20));
            arr[p]["isMine"]=true
            arr[p]["val"]=-1
        }

        initValues(arr);
        console.log(arr);
        return arr;
}



function initValues(arr){

    let dx=[-1,-1,-1,0,0,1,1,1]
    let dy=[-1,0,1,-1,1,-1,0,1]

    for(let i=0;i<5;i++)
    {
        for(let j=0;j<4;j++)
        {
            let pos=i*4+j;
            if(arr[pos]["val"]==-1)
            {
                continue;
            }
        
            let c=0;
            for(let p=0;p<8;p++)
            {
                if(i+dx[p]>=0 && i+dx[p]<5 &&j+dy[p]>=0 &&j+dy[p]<4)
                {
                    let pos=(i+dx[p])*4+(j+dy[p]);
                    if(arr[pos]["isMine"])
                    {
                        c++;
                    }
                }
            }
            if(c)
            {
                arr[i*4+j]["val"]=c;
            }
        }
    }
    
}