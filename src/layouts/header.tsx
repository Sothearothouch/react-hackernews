import { FC,Fragment } from 'react'
import y18 from "../assets/y18.gif";


export interface headerProps {}

const HeaderComponent:FC<{
    children: string;
}> = (props) => { 
    return (
        <div style={{paddingLeft:10 , cursor:"pointer"}}>{props.children}</div>
    );
};

export const Header:FC<headerProps> = (props) => {
    const LeftHeader = (
        <div style={{ display:"flex", alignItems:"center" }}>
            <a href="#">
                <img src={y18}
                    style={{
                        margin:"2px",
                        width:18,
                        height:18,
                        border:"1px white solid",
                    }}
                />
            </a>
            <HeaderComponent>    </HeaderComponent>
            
           <a href="#"><span style={{fontWeight:"bold"}}>Hacker News</span></a>
            <HeaderComponent>new</HeaderComponent>
            <HeaderComponent>|</HeaderComponent>
            <HeaderComponent>past</HeaderComponent>
            <HeaderComponent>|</HeaderComponent>
            <HeaderComponent>comment</HeaderComponent>
            <HeaderComponent>|</HeaderComponent>
            <HeaderComponent>ask</HeaderComponent>
            <HeaderComponent>|</HeaderComponent>
            <HeaderComponent>show</HeaderComponent>
            <HeaderComponent>|</HeaderComponent>
            <HeaderComponent>jobs</HeaderComponent>
            <HeaderComponent>|</HeaderComponent>
            <HeaderComponent>submit</HeaderComponent>
        </div>
    );
    // const RightHeader = (
    //     <div>
    //         <a>Login</a>
    //     </div>
    // );
    // return <Fragment>
    //     <div style={{
    //         width:"100%",
    //         height:"30px",
    //         backgroundColor:"#ff6600",
    //         display:"flex",
    //         alignItems:"center",
    //         paddingLeft:5,
    //         paddingRight:5,

    //     }}>
    //         <div style={{ display:"flex", justifyContent:"space-between", }}>
    //             <div>{LeftHeader}</div>
    //             <div>{RightHeader}</div>
    //         </div>
    //     </div>
    // </Fragment>
    return (
        <table
      style={{
        width: "100%",
        borderWidth: "0px",
        backgroundColor: "#f6f6ef",
        border: "0px",
        padding: "2px",
        borderSpacing: "0px",
      }}
    >
      
      <tbody>
        <tr>
          <td style={{ backgroundColor: "#ff6600", padding: "0px" }}>
            <table style={{ padding: "5px", width: "100%", border: "0" }}>
              <tr>
                <td style={{display: "flex"}}>{LeftHeader}</td>
                <td style={{ textAlign: "right", paddingRight: "4px" }}>
                  <span >
                    <a href="#">login</a>
                  </span>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
    );

}


