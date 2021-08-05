<template>
  <div style="position:relative; left:5%; top:20px; width:90%">
   <style>
	 
		@media all and (max-width: 480px)
		{
				.case_container {
					position:relative; 
					width:100%; 
					height:800px;
				}
				
				.case1_3 {
					position:absolute; 
					left:0%; 
					top:0px; 
					width:100%; 
					height:200px;
				}
				
				.case2_3 {
					position:absolute; 
					left:0%; 
					top:200px; 
					width:100%; 
					height:300px;
				}
				
				.case3_3 {
					position:absolute; 
					left:0%; 
					top:500px; 
					width:100%; 
					height:300px;
				}
		}
		@media all and (min-width: 481px)
		{
			.case_container {
					position:relative; 
					width:100%; 
					height:300px;
				}
				
				.case1_3 {
					position:absolute; 
					left:0%; 
					top:0px; 
					width:33%; 
					height:300px;
				}
				
				.case2_3 {
					position:absolute; 
					left:39%; 
					top:0px; 
					width:30%; 
					height:300px;
				}
				
				.case3_3 {
					position:absolute; 
					left:69%; 
					top:0px; 
					width:30%; 
					height:300px;
				}
		}
	</style>
	 <p>{{ $t('smartphone_guide.intro') }}</p>
	 <p> <b>{{ $t('smartphone_guide.guide_title') }}</b></p>
	 <div class="case_container">
		 <div style="padding-top:30px;" class="case1_3">
			<ul>
				<li>{{ $t('smartphone_guide.step_1') }}</li>
				<li>{{ $t('smartphone_guide.step_2') }}</li>
				<li>{{ $t('smartphone_guide.step_3') }}</li>
			</ul>
		 </div>
		 <div class="case2_3">
		  <img v-bind:src="$t('smartphone_guide.img_1')" style="max-width:100%; max-height:300px;"></img>
		 </div>
		 <div class="case3_3">
			<img v-bind:src="$t('smartphone_guide.img_2')" style="max-width:100%; max-height:300px;"></img>
		 </div>
	 </div>
	 <p>{{ $t('smartphone_guide.concl_begin') }} <a v-bind:href="$t('smartphone_guide.concl_link1_1')">{{ $t('smartphone_guide.concl_link1_2') }}</a>
	 {{ $t('smartphone_guide.between_links') }} <a v-bind:href="$t('smartphone_guide.concl_link2_1')">{{ $t('smartphone_guide.concl_link2_2') }}</a>.</p>
	</div>
</template>