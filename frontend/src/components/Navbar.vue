<template>
   <header>
       <nav  class='flex flex-wrap
          items-center
          justify-between
          sm:items-center
          sm:justify-between
          w-full
          py-4
          px-4 
          bg-white'>
               <a class='logo' href="#"> FundAfrique </a>
       <div class='block sm:hidden'>
       <button @click="toggle"  class='nav-icon  border rounded text-black border-black '>
           <svg
            xml="<http://www.w3.org/2000/svg>"
            id="menu-button"
            class="h-6 w-6 cursor-pointer  "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width="24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
       </div>  
       <div :class=" open ? 'block': 'hidden'" class="w-full  sm:flex sm:items-center sm:w-auto">
         <ul class='nav-items text-sm  text-lg'>
         <li> <router-link to="/explore"> Explore... </router-link> </li> 
        <li> <a href='#about'> About </a>   </li>
          <li> <router-link to="/donation"> Start a FundAfrique </router-link>  </li>
        <li> <router-link to="/register"> Register my organization </router-link> </li>
          </ul> 
   </div>  
       </nav>
    </header>
</template>

<script>
export default {
  name: "Navbar",
    data() {
   return{
  	open: false,
  }
   },
  methods: {
  	toggle() {
    	this.open = !this.open
    }
  }

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 h3 {
  margin: 40px 0 0;
}
ul {
  padding: 0;
}
li {
  margin: 0 10px;
  display:inline-block;
  list-style-type: none;
}
.logo{
  color: #141414 !important;
  font-weight:900;
  font-size: 24px;
}
ul a{
  color:#373E37;
}

.nav-items  div a{
  color:#269E26;
}
.nav-items li:nth-child(4) a{
     background: #269E26;
     color:#fff;
     border-radius:20px;
    padding:10px 20px;
}
@media only screen and (min-width:100px) and (max-width:500px){
  .nav-icon{
    display:block;
  }
  .nav-items {
    display:block;
  }
.nav-items  div{
    display:block !important;
  }
  .nav-items ul{
    display:block;
  }
  
   .nav-items li{
    display:block;
    margin: 10px 0px;
  }
} 
/* h3 {
  margin: 40px 0 0;
}
ul {
  padding: 0;
}
li {
  margin: 0 10px;
  display:inline-block;
  list-style-type: none;
}
nav{
     display:flex;
      flex-wrap: nowrap;
    justify-content: flex-start;

}
.nav-items{
  display:flex;
flex-grow: 1;
align-items: center;
}
ul{
  display:flex;    
  flex-direction: row;
  margin:0px auto;
}

.nav-items div{
  display: flex !important;
}

ul a{
  color:#373E37;
}

.nav-items  div a{
  color:#269E26;
}
.nav-items  div li:nth-child(2) a{
     background: #269E26;
     color:#fff;
     border-radius:20px;
    padding:10px 20px;
}

.logo{
  color: #141414 !important;
  font-weight:900;
  font-size: 24px;
}
@media only screen and (min-width:100px) and (max-width:500px){
  .nav-icon{
    display:block;
  }
  .nav-items {
    display:block;
  }
.nav-items  div{
    display:block !important;
  }
  .nav-items ul{
    display:block;
  }
  
   .nav-items li{
    display:block;
    margin: 10px 0px;
  }
} */
</style>
