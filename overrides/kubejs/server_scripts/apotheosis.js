
ServerEvents.recipes(event => {
	event.shapeless("kubejs:sky_tear",
		[
			'deeperdarker:soul_elytra',
			'aether:enchanted_gravitite',
			'twilightforest:carminite',
			'minecraft:popped_chorus_fruit'
		]
	).keepIngredient('deeperdarker:soul_elytra').damageIngredient(0);
});

MoreJS.registerPotionBrewing(event => {
	event.removePotionBrewing({
		output: "apothic_attributes:flying"
	});
	event.addPotionBrewing("kubejs:sky_tear", "apothic_attributes:levitation", "apothic_attributes:flying");
});
