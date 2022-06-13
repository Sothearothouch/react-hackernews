import axios from 'axios';
import { FC, useEffect, useState } from 'react'



interface HackernewDataProps{
      //numberOrder: number,
      title: string;
      url: string;
      //point: number;
      by: string;
      time: number;
      score: number;
      descendants: number;

}

export interface NewsCardProps {
    
    id: number;
    index: number;
}
 

export const NewsCard:FC<NewsCardProps> = (props) => {
    const [loading, setLoading] = useState(false);
    const [itemState, setItemState] = useState<HackernewDataProps>();

    useEffect(() => {
        setLoading(true);
        axios.get(
            `https://hacker-news.firebaseio.com/v0/item/${props.id}.json?print=pretty`
        ).then((res) => {
            console.log("res", res);
            const dataRes: HackernewDataProps = res.data;
            setItemState(dataRes);
            setLoading(false);
        })
        .finally(() => setLoading(false));
    },[props.id]);
    if(loading){
        return <div>loading</div>;
    }
    return (
        
            // <div style={{
            //     padding:5,
            //     height:40,
            //     display:"flex",
            //     flexDirection:"column",
            //     justifyContent:"flex-start",
            //     alignItems:"flex-start", 
            //     overflow:"hidden",
            //     }}>
            //    <a href={itemState?.url}>
            //    <div>
            //         {props.index} . {itemState?.title} ({itemState?.url})
            //     </div>
            //     <div style={{fontSize:10, paddingLeft:20}}>	
            //         {itemState?.point} points by {itemState?.by} 
            //     </div>
            //    </a>
            // </div>
        
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          paddingLeft: "5px",
          alignItems: "flex-start",
          overflow: "hidden",
        }}
      >
        <a href={itemState?.url}>
          <td style={{ fontSize: "12pt", display: "flex" }}>
            {props.index}.{" "}
            <div
              style={{ cursor: "pointer" }}
              className="votearrow"
              title="upvote"
            />
            {itemState?.title}
          </td>
        </a>
        <td
          style={{
            display: "flex",
            fontSize: 10,
            paddingLeft: 20,
            color: "#828282",
            justifyContent: "flex-start",
          }}
        >
          {itemState?.score} points by&nbsp;
          <a href={`https://news.ycombinator.com/user?id=${itemState?.by}`}>
            {itemState?.by}
          </a>
          &nbsp;|&nbsp;
          <a href={`https://news.ycombinator.com/item?id=${props.id}`}>
            {itemState?.descendants} comments
          </a>
        </td>
      </div>
   
    );
}; 
