
<style>
.message-container{
  background: #2c3e4ab3;
  display: inline-block;
  opacity: 1;
  filter: drop-shadow(0px 0px 5px black);
   -webkit-transition: all .5s;
  -moz-transition: all .5s;
  transition: all .5s;  
}

.message-container::before, .message-container:after {
  content: "";
  display: inline-block;
  position: absolute;
  top: 0;
  bottom: 0;
}

.message-container::before {
  right: 100%;
  border-right: 30px solid #2c3e4ab3;
  border-bottom: 30px solid transparent;
  border-top: 30px solid transparent;
}

.message-container::after {
  left: 100%;
  border-left: 30px solid #2c3e4ab3;
  border-top: 30px solid transparent;
  border-bottom: 30px solid transparent;
}

.message-title span{
	font-family: 'Exo 2',"Ubuntu Condensed", sans-serif;
    text-shadow: 0px 1px 1px black, 0em 0em 0em darkseagreen;
    /*letter-spacing: .1em;*/
    color: #fefffd;
    font-size: 26px;
}

.m-line{
	border-top: 2px solid #4a6377;
}

.message-text{
	margin-top: 11px; 
	min-width: 500px;
	min-height: 100px;
}
.message-text span{
	font-family: 'Exo 2',"Ubuntu Condensed", sans-serif;
    text-shadow: 0px 1px 1px black, 0em 0em 0em darkseagreen;
    /*letter-spacing: .1em;*/
    color: #fefffd;
    font-size: 18px;
}
.skew-wrapper {
  height: 40px;
  display: inline-block;
  transform: skew(-30deg);
  overflow: hidden;
  border-radius: 5px;
}

.orange-filled {
  background-color: #ee6900;
  color: #191919;
  transition: all 150ms ease-in-out;
}

.orange-outline {
  box-sizing: border-box;
  border: 2px solid rgb(67, 86, 94);
  color: #adb2b4;
  background: rgba(91, 107, 113, 0.4);
  transition: all 150ms ease-in-out;
}

.skew-wrapper,
.skew-wrapper:focus,
.skew-wrapper:active,
.skew-wrapper:visited {
  outline: none;
}

.orange-outline:hover {
  background-color: rgb(67, 103, 126);
}

.orange-filled:hover {
  background-color: #ff7a00;
}

.orange-filled:active {
  background-color: #dd5700;
}

.orange-outline div:hover {
  color: #fff;
}

.orange-outline:active {
  background-color: #dd5700;
}
.unskew {
  font-family: 'Exo 2',"Ubuntu Condensed", sans-serif;
  text-shadow: 0px 1px 1px black, 0em 0em 0em darkseagreen;
  letter-spacing: .1em;
  color: #adb2b4;
  font-size: 16px;
  transform: skew(30deg);
  line-height: 40px;
}

.skew-wrapper div {
  text-align: center;
  font-style: normal;
  list-style: none;
}

.widjet-btn{
  margin-top: 15px;
  margin-bottom: 15px;
  opacity: 1;
  -webkit-transition: all .5s;
  -moz-transition: all .5s;
  transition: all .5s;
  z-index: 1000;
}

.widjet-btn a {
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 300;
  margin: 0 9px;
  width: 100%;
}
.widjet-btn-center{
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: 45%;
}

.sitial-autorize-btn-group{
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  margin-right: -15px;
  margin-left: 15px;
}
</style>

<div class="message-container">
	<div class="message-title">
		<span>ПРЕДУПРЕЖДЕНИЕ</span>
		<div class="m-line"></div>
	</div>
	<div class="message-text">
		<span>
			Text
		</span>
	</div>

	<div class="widjet-btn widjet-btn-center widjet-btn-ok">
  		<a href="#" class="skew-wrapper orange-outline">
    	<div class="unskew">ОК</div>
  		</a>
	</div>
</div>