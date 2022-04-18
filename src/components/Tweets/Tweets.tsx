import React, { forwardRef, useCallback, useMemo, useState, useEffect } from 'react';
import Tweet from './Tweet'
import { Button } from '@blueprintjs/core';
function Tweets() {
    const [twitterIsLoaded, setTwitterIsLoaded] = React.useState(false)
    const [twitterIsLoading, setTwitterIsLoading] = React.useState(false)
    const [items, setItems] = React.useState([])

    useEffect(()=> {
        //No longer loading twitter widget.  only using embeds
        //loadTwitter()
    }, [])
    /*
    const twitterFinishedLoading = () => {
        console.log('finished loading!')
        setTwitterIsLoading(false)
        setTwitterIsLoaded(true)
    }
    */
    /*
    const loadTwitter =  ()=> {
        addScript(`https://platform.twitter.com/widgets.js`, twitterFinishedLoading)
    }
    const callbacks: any[] = []
    const addScript = (src: string, cb: () => any) => {
        if (callbacks.length === 0) {
          callbacks.push(cb)
          var s = document.createElement('script')
          s.setAttribute('src', src)
          s.onload = () => callbacks.forEach((cb) => cb())
          document.body.appendChild(s)
        } else {
          callbacks.push(cb)
        }
    }
    */

    const item = `<div class="twitter-tweet twitter-tweet-rendered" style="display: flex; max-width: 550px; width: 100%; margin-top: 10px; margin-bottom: 10px;"><iframe id="twitter-widget-0" scrolling="no" frameborder="0" allowtransparency="true" allowfullscreen="true" class="" style="position: static; visibility: visible; width: 550px; height: 641px; display: block; flex-grow: 1;" title="Twitter Tweet" src="https://platform.twitter.com/embed/Tweet.html?creatorScreenName=wetransfer&amp;dnt=false&amp;embedId=twitter-widget-0&amp;features=eyJ0ZndfZXhwZXJpbWVudHNfY29va2llX2V4cGlyYXRpb24iOnsiYnVja2V0IjoxMjA5NjAwLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3NrZWxldG9uX2xvYWRpbmdfMTMzOTgiOnsiYnVja2V0IjoiY3RhIiwidmVyc2lvbiI6bnVsbH0sInRmd19zcGFjZV9jYXJkIjp7ImJ1Y2tldCI6Im9mZiIsInZlcnNpb24iOm51bGx9LCJ0Zndfc2Vuc2l0aXZlX21lZGlhX2ludGVyc3RpdGlhbF8xMzk2MyI6eyJidWNrZXQiOiJjb250cm9sIiwidmVyc2lvbiI6NH19&amp;frame=false&amp;hideCard=false&amp;hideThread=false&amp;id=1506352425749286921&amp;lang=en&amp;origin=http%3A%2F%2Flocalhost%3A5000%2Fp%2FyYyhsJlrZLA%2Fs%2FD8UAz3aXsYf%3Fview%3Dg1KA9Elonau&amp;sessionId=9c9860c82f2dd8b3451094a67c45b07640ce31c1&amp;theme=light&amp;widgetsVersion=940dd9ee54270%3A1649359550911&amp;width=550px" data-tweet-id="1506352425749286921"></iframe></div>`
    
   const addItem = () => {
       let newItems = [
           item,
           ...items
        ]
        setItems(newItems)
    }

    return (
        <div style={{marginBottom: 15}}>
            <Button onClick={addItem}>Add Tweet</Button>
            <div style={{
                display:'flex'

            }}>
            {items.map( (item, index)=> {
                console.log(index)
                return <Tweet key={'index'+index} item={item}/>
            })}  
            </div>
        </div>
    )

}

export default Tweets 