export default function GenerateMatrix(n,m){
        
        let arr=new Array(n*m)
        
        for(let i=0;i<n*m;i++)
        {
            let cell={
                val:0,
                isHidden:true,
                isMine:false,
                isFlag:false,
                pos:i
            };
            arr[i]=cell;
        }

        for(let i=0;i<(n*m)/10;i++)
        {
            let p=Math.floor((Math.random() * (m*n)));
            arr[p]["isMine"]=true
            // arr[p]["isFlag"]=true
            arr[p]["val"]=-1
        }

        initValues(arr,n,m);
        // console.log(arr);
        return arr;
}



function initValues(arr,n,m){

    let dx=[-1,-1,-1,0,0,1,1,1]
    let dy=[-1,0,1,-1,1,-1,0,1]

    for(let i=0;i<n;i++)
    {
        for(let j=0;j<m;j++)
        {
            let pos=i*m+j;
            if(arr[pos]["val"]==-1)
            {
                continue;
            }
        
            let c=0;
            for(let p=0;p<8;p++)
            {
                if(i+dx[p]>=0 && i+dx[p]<n &&j+dy[p]>=0 &&j+dy[p]<m)
                {
                    let pos=(i+dx[p])*m+(j+dy[p]);
                    if(arr[pos]["isMine"])
                    {
                        c++;
                    }
                }
            }
            if(c)
            {
                arr[pos]["val"]=c;
            }
        }
    }
    
}