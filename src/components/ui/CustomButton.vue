<template>
<button
	class="button"
	:disabled="disabled"
	@click="$emit('click')"
>	
	<span class="title">
		{{ title }}
	</span>
</button>
</template>

<script>

export default {
	name: "CustomButton",
	props: {
		title: {
			type: String,
			default: ''
		},
		disabled: {
			type: Boolean,
			default: false
		},
	}
}
</script>

<style scoped lang="scss">
.button {
	background: #212121;
	color: #fff;
	border-radius: 12px;
	padding: 10px 30px;
	transition: .5s;
	min-height: 44px;
	box-shadow: 4px 6px 16px 0px rgb(34 60 80 / 20%);
	cursor: pointer;

	.title {
		font-weight: 900;
		font-size: 12px;
		width: 100%;
	}

	&:hover {
		opacity: 0.7;
	}

	&:disabled {
		opacity: 0.15;
	}
}

</style>
