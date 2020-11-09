<template>
<div class="home-hero-slider">
 <owlcarousel :items="1" :dots="true" :navText=navText :responsive=" {
      0:{
        items:1,
		autoplay: true,
      },
      500:{
        items:1,
		autoplay: true,
      },
      1000:{
        items:1,
		autoplay: true,
      }
    }">
  <div class="home-slider-item" :style="{ backgroundImage: 'url(' + require('@/assets/images/'+ image1) + ')' }" >
      <div class="container h-100">
        <div class="row h-100 align-items-center element-animate">
          <div class="col-sm-12 text-center pt-5">
            <h1 class="hero-text">{{text[0][0]}}</h1>
            <p v-if="text[0][1]" class="hero-sub w-75 text-center">{{text[0][1]}}</p>
          </div>
        </div>
      </div>
    </div>
  <div class="home-slider-item" :style="{ backgroundImage: 'url(' + require('@/assets/images/'+ image2) + ')' }" >
	  <div class="container h-100">
        <div class="row h-100 align-items-center element-animate">
          <div class="col-sm-12 text-center pt-5">
            <h1 class="hero-text">{{text[1][0]}}</h1>
            <p v-if="text[1][1]" class="hero-sub w-75 text-center">{{text[1][1]}}</p>
          </div>
        </div>
      </div>
    </div>
	<div class="home-slider-item" :style="{ backgroundImage: 'url(' + require('@/assets/images/'+ image3) + ')' }" >
	  <div class="container h-100">
        <div class="row h-100 align-items-center element-animate">
          <div class="col-sm-12 text-center pt-5">
            <h1 class="hero-text">{{text[2][0]}}</h1>
            <p v-if="text[1][1]" class="hero-sub w-75 text-center">{{text[2][1]}}</p>
          </div>
        </div>
      </div>
    </div>
 </owlcarousel>
 </div>
</template>
<script>
export default {
     components:
    { 
    },
    data() {
        return {
            navText : ["<span class='ion-chevron-left'></span>","<span class='ion-chevron-right'></span>"],
        }
    },
    props: {
		text: {type: Array},
		image1: {type: String,  default: "inherit", required: false},
		image2: {type: String,  default: "inherit", required: false},
		image3: {type: String,  default: "inherit", required: false},
        sub: {type: String,  default: "", required: false}
    },
    computed: {
      style () {
        return 'background-image: ' + this.bgHero;
      }
	},

	
}
</script>

<style lang="scss">
.hero-text {
  font-size: 50px;
  color: #fff;
  line-height: 1.2;
  font-weight: 300 !important;
  text-transform: uppercase;
}
.hero-sub{
    font-size: 20px;
    line-height: 1.5;
    font-weight: 300;
    color: white;
    margin: 0 auto;
}

.owl-theme .owl-nav{
margin-top: 34px;
 [class*='owl-'] {
	color: white !important;
	background: none !important;
	&:hover {
		background: none !important;
	}
 }
}
// Owl
.home-hero-slider {
	position: relative;
	z-index: 4;
	.owl-item {
		opacity: 1;
		&.active {
			opacity: 1;
		}
	}
	
	.owl-nav {
		position: absolute;
		top: 50%;
		width: 100%;
		.owl-prev,
		.owl-next {
			position: absolute;
			transform: translateY(-50%);
			margin-top: -10px;
			opacity: 1;
			transition: .3s all ease;
			&:hover, &:focus, &:active {
				outline: none;
				opacity: 1;
			}
			span {
				&:before {
					font-size: 40px;
				}
			}
		}
		.owl-prev {
			
			left: 30px!important;
			// border: 1px solid red;
		}
		.owl-next {
			right: 30px!important;
		}
	}
	.owl-dots {
		text-align: center;
		width: 10px;
		.owl-dot {
			width: 7px;
			height: 7px;
			border-radius: 4px;
			margin: 5px;
			background: none;
			background: white;
			&.active {
				width: 12px;
				background: none;
			}
			span {
					width: 0px !important;
			}
			
			
		}
	}

	// big slider
	&.home-hero-slider {
		z-index: 1;
		position: relative;
		.btn-link {
			color: white;
		}
		.owl-nav {
			opacity: 1;
			visibility: visible;
			transition: .3s all ease;
			button {
				color: black;
			}
		}
		&:focus, &:hover {
			.owl-nav {
				opacity: 1;
				visibility: visible;
			}
		}

		
		&.inner-page {
			.home-slider-item {
				position: relative;
				z-index: 10;
				height: calc(50vh - 117px);
				min-height: 550px;	
				.slider-text {
					color: white;
					height: calc(50vh - 117px);
					min-height: 550px;
				}
			}
		}
		.owl-dots {
			position: absolute;
			bottom: 100px;
			width: 100%;

			.owl-dot {
				width: 5px;
				height: 5px;
				margin: 5px;
				border-radius: 50%;
				border-radius: 4px;
				border-radius: 0px;
				// border: 2px solid rgba(255,255,255,1);
				outline: none!important;
				position: relative;
				transition: .3s all ease;
				background: white!important;
				opacity: .5;
				span {
					background: none!important;
				}
				&.active {
					width: 15px;
					opacity: 1;
					// border: 2px solid white!important;
					// background: rgba(255,255,255,1)!important;
					span {	
						background: rgba(255,255,255,1)!important;
					}	
				}
			}

		}
	}
	&.major-caousel {
		.owl-stage-outer {
			padding-top: 30px;
			padding-bottom: 30px;
		}
		.owl-nav {
			.owl-prev, .owl-next {
				transition: .3s all ease;
				color: gray('700');
				&:hover, &:focus {
					color: gray('600');
					outline: none;
				}
				&.disabled {
					color: gray('300');
				}
			}
			.owl-prev {
				left: -60px!important;
			}
			.owl-next {
				right: -60px!important;
			}
		}
		.owl-dots {
			bottom: -30px!important;
			position: relative;
		}
	}
}
.inner-page {
			.home-slider-item {
				position: relative;
				height: calc(50vh - 117px);
				min-height: 550px;	
				.slider-text {
					color: white;
					height: calc(50vh - 117px);
					min-height: 550px;
				}
			}
		}
.home-slider-item {
			background-size: cover;
			background-repeat: no-repeat;
			background-position: center center;
			height: calc(100vh);
			min-height: 700px;	
			position: relative;
			&:before {
				content: "";
				position: absolute;
				top: 0;
				height: 500px;
				// bottom: 0;
				width: 100%;
				background: rgba(0,0,0,1);
				background: -moz-linear-gradient(top, rgba(0,0,0,1) 0%, rgba(145,232,66,0) 100%);
				background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(0,0,0,1)), color-stop(100%, rgba(145,232,66,0)));
				background: -webkit-linear-gradient(top, rgba(0,0,0,1) 0%, rgba(145,232,66,0) 100%);
				background: -o-linear-gradient(top, rgba(0,0,0,1) 0%, rgba(145,232,66,0) 100%);
				background: -ms-linear-gradient(top, rgba(0,0,0,1) 0%, rgba(145,232,66,0) 100%);
				background: linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(145,232,66,0) 100%);
				filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#000000', endColorstr='#91e842', GradientType=0 );
			}
			.slider-text {
				color: white;
				height: calc(100vh);
				min-height: 700px;
				.child-name {
					font-size: 40px;
					color: white;
				}
				h1 {
					font-size: 50px;
					color: white;
					line-height: 1.2;
					font-weight: 300!important;
					text-transform: uppercase;
					margin-bottom: 30px;
					margin-left: 0.5em;
					span {
						// color: white;
				  //   background-color: #fd5f00;
				  //   box-shadow: 0.5em 0 0 #fd5f00,-0.5em 0 0 #fd5f00;
					}
					
				}
				p {
					font-size: 20px;
					line-height: 1.5;
					font-weight: 300;
					color: rgba(255,255,255,1);
					margin: 0 auto;
					a {
						color: #fd5f00;
						text-decoration: underline;
						&:hover {
							color: white;
							text-decoration: underline;
						}
					}
					&.sub-text {
						line-height: 2;
					}
				}
			}
			
		}
.owl-custom-nav {
	float: right;
	position: relative;
	z-index: 10;
	.owl-custom-prev,
	.owl-custom-next {
		padding: 10px;
		font-size: 30px;
		background: #ccc;
		line-height: 0;
		width: 60px;
		text-align: center;
		display: inline-block;
	}
} 
</style>