import React from 'react'
import "./Shorturl.css"
import { useShortenUrl } from 'react-shorten-url';



export default function Shorturl() {

        const { loading, error, data } = useShortenUrl('http://example.com');
      
        if (loading)  <p>Loading.....</p>;
      
        if (error)  <p>Something went wrong</p>;
    

    // let endpoint = "https://www.jsonstore.io/8ba4fd855086288421f770482e372ccb5a05d906269a34da5884f39eed0418a1";
    // console.log(endpoint);

    // const  geturl = () => {
    //     var url = document.getElementById("urlinput").value;
    //     var protocol_ok = url.startsWith("http://") || url.startsWith("https://") || url.startsWith("ftp://");
    //     if(!protocol_ok){
    //        const newurl = "http://"+url;
    //         return newurl;
    //         }else{
    //             return url;
    //         }
    // }

    // const getRandom = () => {
    //     var text = "";
    //     var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    
    //     for (var i = 0; i < 5; i++)
    //         text += possible.charAt(Math.floor(Math.random() * possible.length));
    //     return text;
    // }

    // const genhash = () => {
    //     if (window.location.hash === ""){
    //         window.location.hash = getRandom();
    //     }
    // }

    // const sendRequest = (url) => {
    //     this.url = url;
    //     fetch({
    //         'url': endpoint + "/" + window.location.hash.substr(1),
    //         'type': 'POST',
    //         'data': JSON.stringify(this.url),
    //         'dataType': 'json',
    //         'contentType': 'application/json; charset=utf-8'
    // })
    // }

    // const Shorturl = () => {
    //     var longurl = geturl();
    //     genhash();
    //     sendRequest(longurl);
    // }

    // let hashh = window.location.hash.substring(1);


    // if (window.location.hash !== "") {
    //     fetch(endpoint + "/" + hashh, function (data) {
    //         data = data["result"];
    
    //         if (data != null) {
    //             window.location.href = data;
    //         }
    
    //     });
    // }
    

    
    

    return (
        <div className="short">
            <section className="short_name">
                <picture>
                <img className="img-mobile" media="(376px)" src="/images/bg-shorten-mobile.svg" alt="" />
                {/* <img className="img-responsive" src="/images/bg-shorten-desktop.svg" alt="" /> */}
                </picture>
                <form action="" className="shorturl">
                    <input type="text" className="shorturl_info" value="Shorten a link here..." aria-label="link" /><br />
                    <input type="submit" className="shorturl_submit" onClick={data} value="Shorten It!" aria-label="submit" />
                </form>
                
            </section>
        </div>
    )

}
