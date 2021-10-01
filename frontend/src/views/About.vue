<template>
  <div>
       <div class="featured">
         <div class="px-16 py-20 sm:w-1/2 ">
           <h3 class='text-white'> Featured FundAriques </h3>
           <h1 class='text-white text-3xl'> One Desk; One Child Project </h1>
           <p  class='text-white text-base'>
             Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores.
           </p>
           <button class='featured-button px-2 text-primary rounded-md flex my-4 '> 
                 <svg xmlns="http://www.w3.org/2000/svg" width="9.47"  viewBox="0 0 9.47 13.529">
                  <path id="Icon_material-location-on" data-name="Icon material-location-on" d="M12.235,3A4.732,4.732,0,0,0,7.5,7.735c0,3.551,4.735,8.794,4.735,8.794s4.735-5.242,4.735-8.794A4.732,4.732,0,0,0,12.235,3Zm0,6.426a1.691,1.691,0,1,1,1.691-1.691A1.692,1.692,0,0,1,12.235,9.426Z" transform="translate(-7.5 -3)" fill="#269e26"/>
                </svg>
                  <p class='mx-2'> Uganda </p>
            </button>
            <button class='detail2-button text-white'>
            
                 See this FundArique 
              <svg xmlns="http://www.w3.org/2000/svg" width="18.931"  viewBox="0 0 18.931 18.931">
            <path id="Icon_metro-arrow-up-left" data-name="Icon metro-arrow-up-left" d="M19.486,17.266,10.235,8.015h4a1.115,1.115,0,1,0,0-2.231H7.542A1.114,1.114,0,0,0,6.427,6.9h0v6.693a1.115,1.115,0,1,0,2.231,0v-4l9.251,9.251a1.115,1.115,0,0,0,1.578-1.578Z" transform="translate(27.565 9.011) rotate(135)" fill="#fff"/>
          </svg>
            </button>

         </div>
       </div>
   </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: "about",
 

};
</script>
<style scoped>
.logo{
  color: #141414 !important;
  font-weight:900;
  font-size: 24px;
}
.featured{
   background: transparent url('../assets/Image5.png')  0% 0% no-repeat;
  height:500px;
}
</style>
