
<style>
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
  opacity: 0;
  -webkit-transition: all .5s;
  -moz-transition: all .5s;
  transition: all .5s;
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
}

.sitial-autorize-btn-group{
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  margin-right: -15px;
  margin-left: 15px;
}

.male-salect{
  position: relative;
  margin-top: 3px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
.ms-man{
  width: 20px;
  height: 20px;
  margin-top: 3px;
  background-image: url(/img/pda/pda/pda_man.svg);
  filter: drop-shadow(0px 0px 4px rgb(141, 143, 144));
}
.ms-woman{
  width: 20px;
  height: 20px;
  margin-top: 3px;
  background-image: url(/img/pda/pda/pda_woman.svg);
  filter: drop-shadow(0px 0px 4px rgb(141, 143, 144));
}


</style>

<div class="widjet-title">ДОБАВЛЕНИЕ НОВОГО ПОЛЬЗОВАТЕЛЯ</div>   

<div class="widjet-sub-panel">
  <div class="widjet-title">РЕГИСТРАЦИЯ</div> 

    <ul class="widget-table">
      <li style="">
        <div class="wigr-ava">
          <div class="scanlines"></div>
          <img src="/img/pda/widgets/all/widjet-user-ava.svg" alt="">
        </div> 
        <div class="male-salect">
          <div class="ms-man"></div>
          <input type="checkbox" name="test"/>
          <div class="ms-woman"></div>
        </div>  
        
      </li>
      <li style="margin-left: 19px;">
        <div class="futureinput futureinput--text">
          <label for="umail">Почта</label>
          <input type="text" name="umail" id="umail" placeholder="mail@mail.ru">
        </div>
        <div class="futureinput futureinput--text">
          <label for="upass">Пароль</label>
          <input type="text" name="upass" id="upass" placeholder="">
          <!--span class="futureinput__error">[ You have a validation error ]</span-->   
        </div>
        <div class="futureinput futureinput--text">
          <label for="udpass">Повторите пароль</label>
          <input type="text" name="udpass" id="udpass" placeholder="">
          <!--span class="futureinput__error">[ You have a validation error ]</span-->   
        </div>  
      </li>
    </ul>  
  </div>

<div class="widjet-btn widjet-btn-center">
  <a href="#" class="skew-wrapper orange-outline">
    <div class="unskew">Зарегистрироваться </div>
  </a>
</div>


