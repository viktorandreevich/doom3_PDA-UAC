<style>
	.npdl-frame0{
		display: block;
		width: 300px;
		height: 18px;
    	margin-left: auto;
    	margin-right: auto;
		border: 2px ridge rgba(108, 108, 108, 0.5);
		border-radius: 2px;
		filter: drop-shadow(0px 0px 1px black);
		overflow: hidden;
	}
	.npdl-loading-bar{
		height: 100%;
		width: 60%;
		background-color: #339999eb;
	}
	.nb-pda-data-loader-container p{
		position: relative;
		text-align: center;
		font-family: 'Exo 2',"Ubuntu Condensed", sans-serif;
		text-shadow: 0px 1px 2px black, 0em 0em 0em darkseagreen;
		font-weight: 500;
	}
	.npdl-block-name p{
		letter-spacing: 0.4em;
		color: #ffffffb3;
		font-size: 16px;
		text-transform: uppercase;
	}
	.npdl-process-name p{
		letter-spacing: 0.1em;
		color: #8c8585b3;
		font-size: 18px;
		margin-top: -15px;
	}
	.npdl-frame1{
		position: absolute;
		top: 0;
		left: 0;
		width: 300px;
		height: 18px;
		border: 1px ridge rgb(255, 255, 255,1.0);
		border-radius: 2px;
		opacity: 0;
		transform: scale(1.0);
		-webkit-transition: all .3s;
		-moz-transition: all .3s;
		transition: all .3s;
	}

	.npdl-frame1 p{
		letter-spacing: 0.4em;
		color: #fffc;
		font-size: 11px;
		text-transform: uppercase;
	}

</style>


<div class="npdl-frame0">
	<div class="npdl-loading-bar"></div>
</div>
<div class="npdl-frame1">
	<p>complete</p>
</div>

<div class="npdl-block-name"><p><?php echo($_POST['process'])?></p></div>
<div class="npdl-process-name"><p><?php echo($_POST['perform'])?></p></div>
