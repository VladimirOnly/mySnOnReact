import React from 'react';

const MyOwn = (props) => {

    const tex = document.querySelector("textarea");

    function clickF() {
        alert(tex)
    }

    let textEf = (e) => {
        let aa = e.target.value;

    }



    return (
        <div>
           <div>
               <textarea //value={textEf}
                  //onChange={textEf}
               ></textarea>

           </div>
            <div>
                <button onClick={clickF}> My </button>
            </div>

        <div>
            myOwnText
        </div>
        </div>
    )
}

export default MyOwn;
