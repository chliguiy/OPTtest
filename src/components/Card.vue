
<template>
<div class="row"  style="margin-left:15px;margin-right:15px" v-show="count >0 ">
    <div class="col-sm-3 col-md-3 pb-2 py-2" v-for="(item, index) in OcsData" :key="`item-${index}`">
         <div class="card card-outline-info d-flex flex-nowrap h-100" >
             <div class="containerimg">
	               <img class="card-img-top" v-bind:src="'https://statics.ocs.fr'+item.imageurl" alt="Card image cap">
	               <router-link :to="{name:'detail',params:{'OscData':item}}" class="btn">	Détail</router-link>
              </div>
              <div class="card-body">
	          	    <h4 class="card-title">{{item.title[0].value}}</h4>  
                  <p class="card-text">{{item.subtitle}}</p>      
	            </div>
         </div>     
     </div>
</div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    OcsData: Array,
    count:Number
  }
  }

  </script>

  <style scoped>
  .card-title{
    font-family: fantasy;
  }
  .btn{
    background-color: black;
    color: whitesmoke;
  }
  .btn:hover{
    color:#ab5a24;
  }
  .card-body{
    background-color: #ab5a24;
    color: whitesmoke;
  }
  .card {
    min-height: 300px;
}

.containerimg {
  position: relative;
  width: 100%;
  max-width: 400px;
}

.containerimg img {
  width: 100%;
  height: auto;
}

.containerimg .btn {
  position: absolute;
  top: 96%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  background-color: #555;
  color: white;
  font-size: 16px;
  padding: 12px 24px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  text-align: center;
}

.containerimg .btn:hover {
  background-color: black;
}

  </style>