import React from 'react'
import "./Shorturl.css"
function Shorturl() {
    return (
        <div className="short">
            <section className="short_name">
                <picture>
                <source media="(376px)" srcset="/images/bg-shorten-mobile.svg" />
                <img className="img-responsive" src="/images/bg-shorten-desktop.svg" alt="" />
                </picture>
                <form action="#" className="shorturl">
                    <input type="text" className="shorturl_info" value="Shorten a link here..." aria-label="link" /><br />
                    <input type="submit" className="shorturl_submit" value="Shorten It!" aria-label="submit" />
                </form>
                
            </section>
        </div>
    )
}

export default Shorturl
