const app = Vue.createApp({
	data() {
		return {
			myName: 'Joanna',
			myAge: 36,
			imageUrl: 'https://picsum.photos/id/237/200/300',
		};
	},
	methods: {
		outputAgeIn5Years() {
			return this.myAge + 5;
		},
		printRandomNum() {
			return Math.random().toFixed(1);
		},
	},
});

app.mount('#assignment');
