<template>
  <footer>
    <div class="container">
      <h3>contact us</h3>

<hr />
      <div class="row">
        <div class="col-md-6 col-1">
       
          <ul>
            <li>
              <i class="fa fa-map-marker"></i>

              <p>Dutse, Abuja Nigeria.</p>
            </li>
            <li class="media">
              <i class="fa fa-envelope"></i>

              <p>info@GloryZone.com</p>
            </li>
            <li>
              <i class="fa fa-phone"></i>

              <p>+234677908910</p>
            </li>
          </ul>

          <div class="social-icons">
            <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
            <a href="#."><i class="fa fa-twitter-square"></i></a>
            <a href="#."><i class="fa fa-dribbble"></i></a>
            <a href="#."><i class="fa fa-whatsapp"></i></a>
          </div>
          <p class="p">© 2012-2022 KANA, Inc. All rights reserved.</p>
        </div>

        <div class="col-md-6 col-2">
          <form>
            <ul>
              <li>
                <input type="text" name="name" id="name" placeholder="NAME" />
              </li>
              <li>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="EMAIL"
                />
              </li>
              <li>
                <input
                  type="text"
                  name="company"
                  id="company"
                  placeholder="SUBJECT"
                />
              </li>
              <li>
                <label>
                  <textarea
                    class="form-control"
                    name="message"
                    id="message"
                    rows="5"
                    placeholder="What's in your mind"
                  ></textarea>
                </label>
              </li>
              <li>
                <button type="submit" class="btn" value="submit">SUBMIT</button>
              </li>
            </ul>
          </form>
        </div>
      </div>
      <div></div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>





footer {

  
  position: relative;
  margin-top: auto;
  background: #191b1f;
  color: var(--light);
  .container {
    width: 100vw;
    min-width: 100vw;
    min-height: 100vh;

    hr {
            width: 200px;
            height: 1px;
            background: #666666;
          }
          h3 {
            padding: 2rem 0;
            padding-left: 10%;
            text-transform: uppercase;
            font-size: 16px;
            font-weight: normal;
            color: #666666;
          }
    .row {
      display: flex;
      justify-content: space-between;
      height: 100%;
      position: relative;
      width: 100%;
      padding: 4rem 10%;

      .col-md-6 {
        position: relative;
        width: 40%;
        height: 100%;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        form {
          position: relative;
          width: 100%;

          input, textarea{
	// display: inline-block;
  position: relative;
	width: 100%;
	padding: 0px;
	border: 1px solid;
	border-color: transparent;
	background: none;
	font-size: 16px;
	border: none;
	box-shadow: none;
	border-radius: 0px;
	background: none;
	color: #fff;
	padding: 0px;
	font-size: 16px;
	border-bottom: 1px solid #666666;
	-webkit-transition: all 0.4s ease-in-out;
	-moz-transition: all 0.4s ease-in-out;
	-o-transition: all 0.4s ease-in-out;
	-ms-transition: all 0.4s ease-in-out;
	transition: all 0.4s ease-in-out;
}
input{
	height: 50px;

}
textarea{
	height: 120px !important;

}      

input,
          .btn {
            margin: 1rem 0;
          }
        }
        li {
          list-style: none;
        }
        .btn {
          border: 1px solid #fff;
          color: #fff;

        }
        &.col-1 {
        
          li{
            display: flex;
            margin: 2em 0;
            color: #666666;

            .fa{
              margin-right: 1rem;
              color: #fff;
            }
// line-height: 1.7rem;
          }
          .social-icons{
            display: flex;
a{
  color: #666666;
  transition: ease .4s;
  margin: 0 2rem;
  font-size: 1.8rem;

  &:nth-child(1){
    margin-left: 0;
  }
@media(max-width:350px){
  margin: 0 1rem;
}
  &:hover{
    transform: translateY(-5px);
    color:#fff;
  }
}
          }
          .p
          {
            color: #666666;
margin: 2rem 0;
          }
        }
      }
      @media(max-width:850px){
        flex-direction: column-reverse;
        // align-items: center;
        .col-md-6{
          width:100%;


        }
      }
      @media(max-width:500px){
     align-items: center;
      }
    }
  }
}
</style>