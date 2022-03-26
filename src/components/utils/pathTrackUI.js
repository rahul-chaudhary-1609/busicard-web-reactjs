import * as React from "react";


const PathTrackUI=(props)=>{
    return (
        <div className="pt-ui-main mt-80">
            {               
                props.paths.map((path,index)=>{
                    if(props.paths.length===index+1){
                        return <>{path}</>
                    }else{                        
                        return <>{path}<span><img src={require('../../assets/images/right_arrow_img.png')} alt=""/></span></>
                    }
                    
                })
            }
        </div>
    )
}

export default PathTrackUI;