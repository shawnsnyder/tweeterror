import React, { forwardRef, useCallback, useMemo, useState, useEffect } from 'react';

function Tweet(props:any) {
    const {item } = props
    let container = React.useRef<HTMLDivElement>(null);

    useEffect(()=> {
        // @ts-ignore
        console.log(props)

    }, [item])

    const cleanedHTML: string = React.useMemo(() => {
        //console.log('CLEANED')
        const element = document.createElement('div');
        element.innerHTML = item;
        //const iframe = element.querySelector('iframe');
        return element.innerHTML;
      }, [item]);

      React.useEffect(() => {

        const slotHtml = document.createRange().createContextualFragment(cleanedHTML);
        if (container.current){
            container.current.innerHTML = ''; // Clear the container
            container.current.appendChild(slotHtml); // Append the new content

            if (cleanedHTML.includes('twitter-tweet')){
                //window.setTimeout(()=>checkForRenderedSize(container, href), 400)
            }
        }
    
      }, [cleanedHTML]);

    //button to add tweets after widget loaded
    return (
            <div
                style={{
                    marginTop: 10
                }} 
            >
                <div
                    style={{
                        top: 0,
                        left: 0,
                        transformOrigin: 'left top', 
                    }}
                    ref={container}
                />
            </div>
    )

}

export default Tweet


/*
export const staticStyles = StyleSheet.create({
    EmbedBlock: {
      position: 'relative',
      margin: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    // Scales to fit frame
    embedWrapper: {
     yk
    },
    preview: {
      width: '100%',
      height: '100%',
      objectFit: 'contain',
    },
  });
  */