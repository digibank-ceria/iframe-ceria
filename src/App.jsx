import React, { Component } from 'react';


const url = 'https://jkt-fm.discoverelement.com:9443/web/liveness/page/liveness_check.html?txnId=jkt_fm_test_1613048890621&userId=test_liveness_url&CLIENTID=94&TIMESTAMP=1613048890621&HASHTOKEN=MmYwSihqulH4u+/1+vXsW2MdpJhm03uzWTfXroySnEo='
const iframe =`<iframe src="${url}" allow="camera ${url} ${url}" style="height: 594px; overflow:hidden; width: 100%;
                    border:0px"></iframe>`

export default class App extends Component {
  
  
  render() {
    return (
      <div>
        <p>IFrame Ceria</p>

        {/* <iframe
          allow="camera;"
          id="iframe"
          name="ceriaIFrame"
          // sandbox="allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-same-origin allow-scripts allow-top-navigation allow-top-navigation-by-user-activation"
          src={url}
          style={{height: '594px', overflow:'hidden', width: '100%', border: '0px'}}
          title="iframe"
        /> */}

        < div dangerouslySetInnerHTML={{ __html: iframe }} />

      </div>
    );
  }
}
