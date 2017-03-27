import React from 'react';
import Viewer from 'viewerjs';
import './viewer.css';
import './style.css';


const requireContext = require.context("../../../image", true, /^\.\/.*\.jpg$/);
const images = requireContext.keys().map(requireContext);

var imgdatas=[
    {orignurl:'../../../image/tibet-11.jpg',thumurl:'../../../image/tibet-1.jpg'},
    {orignurl:'../../../image/tibet-12.jpg',thumurl:'../../../image/tibet-2.jpg'}
]

// home页面
class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){
      var options = {
          // inline: true,
          url: 'data-original',
          ready:  function (e) {
              console.log(e.type);
          },
          show:  function (e) {
              console.log(e.type);
          },
          shown:  function (e) {
              console.log(e.type);
          },
          hide:  function (e) {
              console.log(e.type);
          },
          hidden:  function (e) {
              console.log(e.type);
          },
          view:  function (e) {
              console.log(e.type);
          },
          viewed:  function (e) {
              console.log(e.type);
              // this.viewer.zoomTo(1).rotateTo(180);
          }
      };
    new Viewer(document.getElementById('images'),options);
  }

  render() {
      var imgrow=[];
      imgdatas.forEach(function(imgdata){
          imgrow.push(<li className="img_li"><img data-original={imgdata.orignurl} src={imgdata.thumurl}/></li>)
      }.bind(this));
      return(
          <div>
              <ul id="images">
                  {imgrow}
              </ul>
          </div>
      )
  }
}
export default Home;