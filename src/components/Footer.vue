<template>
  <footer >
    <div class="container">
      <div class="row">
        <div class="col-md-6"> 
          
          <div class="heading-block margin-bottom-80">
            <h6 >contact us</h6>

          </div>
          
          <ul >
            <li >
              <div > <i class="icon-pointer"></i> </div>
              <div >
                <p>Dutse, Abuja Nigeria.</p>
              </div>
            </li>
            <li class="media">
              <div> <i class="icon-envelope-open"></i> </div>
              <div>
                <p>info@GloryZone.com</p>
              </div>
            </li>
            <li>
              <div> <i class="icon-call-end"></i> </div>
              <div>
                <p>+234677908910</p>
              </div>
            </li>
          </ul>
        </div>
        
        <!-- Contact Form -->
        <div class="col-md-6">
          <div class="contact"> 
            
        
            <form >
              <ul>
                <li >
                    <input type="text"  name="name" id="name" placeholder="NAME">
                </li>
                <li>
                    <input type="text"  name="email" id="email" placeholder="EMAIL">
                </li>
                <li >
                    <input type="text"  name="company" id="company" placeholder="SUBJECT">
                </li>
                <li >
                  <label>
                    <textarea class="form-control" name="message" id="message" rows="5" placeholder="what’s in your mind"></textarea>
                  </label>
                </li>
                <li>
                  <button type="submit"  value="submit" id="btn_submit" >SUBMIT</button>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      
      <!-- Rights -->
      <div>
        <div class="social-icons">
             <a href="#"><i class="fas fa-facebook"></i></a>
              <a href="#."><i class="fas fa-twitter"></i></a> 
              <a href="#."><i class="fas fa-dribbble"></i></a>
               <a href="#."><i class="fas fa-tumblr"></i></a> 
            </div>
        <p>© 2012-2022 KANA, Inc. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style>
footer{
    display: flex;
    margin-top: auto ;
    background: #191b1f;
}
</style>