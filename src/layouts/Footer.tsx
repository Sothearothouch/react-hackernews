export const Footer = () =>{
    return (
        <div>
            <table style={{ height:"3px", width:"100%", }}>
                <tbody>
                    <tr>
                        <td style={{backgroundColor:"#ff6600"}} />
                    </tr>
                </tbody>
            </table>
            <br/>
            <div style={{ textAlign:"center" }}>
                <span>
                    <a href="#">Guidelines</a>
                    &nbsp;|  <a href="#">FAQ</a>
                    &nbsp;|  <a href="#">Support</a>
                    &nbsp;|  <a href="https://github.com/HackerNews/API">API</a>
                    &nbsp;|  <a href="#">Security</a>
                    &nbsp;|  <a href="#">Lists</a>
                    &nbsp;|  <a href="#">Bookmarklet</a>
                    &nbsp;|  <a href="#">DMCA</a>
                    &nbsp;|  <a href="#">Apply to YC</a>
                    &nbsp;|  <a href="#">Contact</a>
                </span>
                <br />
                <br />
                <form style={{ marginBottom:"1em" }}>
                    Search:
                    <input 
                        type="text"
                        name="q"
                        size={17}
                        autoCorrect="off"
                        spellCheck={false}
                        autoCapitalize="off"
                        autoComplete="false"
                    />
                </form>
            </div>
        </div>
    );
}
// import { FC,Fragment } from 'react'
// import { Card } from 'antd';
// import Meta from 'antd/lib/card/Meta';
// export interface FooterComponentProps {name?:string}

// export const FooterComponent:FC<FooterComponentProps> = (props) => {
//     return <Fragment>
        
//     </Fragment>
// }
