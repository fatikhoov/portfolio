let innerContactsCard=`
<form id="form-contact">
<img id="close-form-contact" class="close-form-contact" src="img/header/close.svg" />
                <span class="contact_title"
                  >Заполните форму, я свяжусь с вами в ближайшее время</span
                >

                <div class="form__left">
                  <div class="chips chips-autocomplete">
                    <input class="custom-class" />
                  </div>
                  <div class="form_datepicker input-field">
                    <input id="my-datepicker" type="text" class="datepicker" />
                    <label for="my-datepicker">Удобная дата</label>
                  </div>
                  <div class="form_timepicker input-field">
                    <input id="my-timepicker" type="text" class="timepicker" />
                    <label for="my-timepicker">Удобное время</label>
                  </div>
                </div>

                <div class="form__right">
                  <div class="form__contact-inputs">
                    <div class="input-field">
                      <input
                        class="contact-input check-width"
                        type="text"
                        name="contact"
                        id="name-contact"
                      /><label for="name-contact">Ваше имя</label>
                    </div>

                    <div class="input-field">
                      <input
                        class="contact-input check-width"
                        type="text"
                        name="contact"
                        id="phone-contact"
                      /><label for="phone-contact">Ваш телефон</label>
                    </div>

                    <div class="input-field">
                      <input
                        class="contact-input check-width"
                        type="text"
                        name="contact"
                        id="email-contact"
                      /><label for="email-contact">Ваша почта</label>
                    </div>
                  </div>
                </div>
                <div class="form__checkbox-contact">
                  <p>
                    <label>
                      <input
                        id="checkbox-contact"
                        type="checkbox"
                        checked="checked"
                        class="check-width"
                      />
                      <span> галочка добра</span>
                    </label>
                  </p>
                </div>
                <div class="progress">
                  <div
                    id="determinate"
                    class="determinate"
                    style="width: 0%"
                  ></div>
                </div>
                <button
                  id="form_contact-button"
                  type="submit"
                  name="action"
                  disabled="disabled"
                >
                  ОТПРАВИТЬ
                </button>
              </form>
`;const contactCard=document.getElementById("contact-card");let inner=!1;const innerFunc=()=>{inner||(contactCard.innerHTML=innerContactsCard,inner=!0)};innerFunc();let formContant,determinate,formContactButton,checkboxContact,nameContact,phoneContact,emailContact,accountHeader,closeFormContact,countWidth=0,newArr=[],indInp0=!1,indInp=!1,indInp2=!1,indInp3=!1;const upCount=()=>{determinate.style.width=countWidth+100/newArr.length+"%",countWidth+=100/newArr.length,console.log("up",determinate.style.width,countWidth),100===countWidth&&formContactButton.removeAttribute("disabled")},downCount=()=>{determinate.style.width=countWidth-100/newArr.length+"%",countWidth-=100/newArr.length,console.log("down"),100!=countWidth&&formContactButton.setAttribute("disabled","disabled")},closeForm=()=>{"1"!=contactCard.style.opacity?(contactCard.style.opacity="1",contactCard.style.height="100vh",contactCard.style.background="white",contactCard.style.marginTop="0px"):(contactCard.style.opacity="0",contactCard.style.height="0vh",contactCard.style.background="transparent",contactCard.style.marginTop="-200px")},clicksContact=()=>{closeFormContact.addEventListener("click",()=>{closeForm()}),accountHeader.addEventListener("click",()=>{closeForm()}),checkboxContact.addEventListener("click",t=>{(t.target.checked?upCount:downCount)()}),nameContact.oninput=t=>{t=t.target.value;0<t.length&&!indInp?(upCount(),indInp=!0):t.length<=0&&(downCount(),indInp=!1)},phoneContact.oninput=t=>{t=t.target.value;0<t.length&&!indInp2?(upCount(),indInp2=!0):t.length<=0&&(downCount(),indInp2=!1)},emailContact.oninput=t=>{t=t.target.value;0<t.length&&!indInp3?(upCount(),indInp3=!0):t.length<=0&&(downCount(),indInp3=!1)},formContant.addEventListener("submit",t=>{t.preventDefault(),console.log("click",t)})},startForm=()=>{formContant=document.getElementById("form-contact"),determinate=document.getElementById("determinate"),formContactButton=document.getElementById("form_contact-button"),checkboxContact=document.getElementById("checkbox-contact"),nameContact=document.getElementById("name-contact"),phoneContact=document.getElementById("phone-contact"),emailContact=document.getElementById("email-contact"),accountHeader=document.getElementById("account"),closeFormContact=document.getElementById("close-form-contact");for(const t of formContant)"checkbox"!==t.type&&"contact"!==t.name||(newArr.push(t),console.log("заполнено",t.value));checkboxContact.defaultChecked&&!indInp0?(upCount(),indInp0=!0,console.log("checkboxContact",checkboxContact.defaultChecked)):console.log("indInp0 = true")};inner&&(startForm(),clicksContact());