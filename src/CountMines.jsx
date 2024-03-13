export default function CountMines(arr){
    let mine=0;
    let win=1;
    for(let i=0;i<36;i++)
    {
        mine-=arr[i]["isFlag"];
        mine+=arr[i]["isMine"];
        if(arr[i]["isMine"])
        {
            win=win&arr[i]["isFlag"];
        }
    }
    console.log(mine,win);
    return [mine,win]
}