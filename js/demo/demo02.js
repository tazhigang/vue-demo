new Vue({
	el: "#person",
	data: {
		name: "zhangsan",
		age: 25,
		sex: "男"
	},
	methods: {
		message: function() {
			return this.name + "\t" + this.age + "\t" + this.sex;
		}
	}
})