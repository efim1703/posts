<template>
	<input
		type="text"
		:value="value"
		@input="$emit('input', $event.target.value)"
		class="input"
	>
</template>

<script>

export default {
	name: "CustomInput",
	props: {
		value: {
			type: String,
			required: true
		},
	},
}

</script>

<style scoped lang="scss">

.input {
	padding: 8px 12px;
	background: transparent;
	border: 1px solid #211221;
	border-radius: 8px;
	color: #211221;
	cursor: pointer;
}
</style>
