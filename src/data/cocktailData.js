export const cocktailData = [
	{
		iba: true,
		name: "Vesper",
		colors: "#D88317",
		glass: "martini",
		category: "Before Dinner Cocktail",
		ingredients: [
			{ unit: "cl", amount: 6, ingredient: "Gin" },
			{ unit: "cl", amount: 1.5, ingredient: "Vodka" },
			{ unit: "cl", amount: 0.75, ingredient: "Lillet Blonde" }
		],
		garnish: "Lemon twist",
		preparation: "Shake and strain into a chilled cocktail glass.",
		flavor: "boozy",
		strength: "strong"
	},
	{
		iba: true,
		name: "Bacardi",
		colors: ["#F80304"],
		glass: "martini",
		category: "Before Dinner Cocktail",
		ingredients: [
			{
				unit: "cl",
				amount: 4.5,
				ingredient: "White rum",
				label: "Bacardi White Rum"
			},
			{ unit: "cl", amount: 2, ingredient: "Lime juice" },
			{ unit: "cl", amount: 1, ingredient: "Syrup", label: "Grenadine" }
		],
		preparation: "Shake with ice cubes. Strain into chilled cocktail glass.",
		flavor: "sour, boozy",
		strength: "strong"
	},
	{
		iba: true,
		name: "Negroni",
		colors: "#ED0200",
		glass: "oldFashion",
		category: "Before Dinner Cocktail",
		ingredients: [
			{ unit: "cl", amount: 3, ingredient: "Gin" },
			{ unit: "cl", amount: 3, ingredient: "Campari" },
			{
				unit: "cl",
				amount: 3,
				ingredient: "Vermouth",
				label: "Sweet red vermouth"
			}
		],
		garnish: "Half an orange slice",
		flavor: "boozy",
		strength: "strong",
		preparation:
			"Build into old-fashioned glass filled with ice. Stir gently."
	},
	{
		iba: true,
		name: "Rose",
		colors: "#FE29BC",
		glass: "martini",
		ingredients: [
			{ unit: "cl", amount: 2, ingredient: "Kirsch" },
			{
				unit: "cl",
				amount: 4,
				ingredient: "Vermouth",
				label: "Dry vermouth"
			},
			{
				amount: "3 dashes",
				ingredient: "Syrup",
				label: "Strawberry syrup"
			}
		],
		preparation:
			"Stir all ingredients with ice and strain into a cocktail glass."
	},
	{
		iba: true,
		name: "Old Fashioned",
		colors: ["#E74A03", "#F1A507"],
		glass: "oldFashion",
		category: "Before Dinner Cocktail",
		ingredients: [
			{
				unit: "cl",
				amount: 4.5,
				ingredient: "Whiskey",
				label: "Bourbon or rye whiskey"
			},
			{ ingredient: "Angostura bitters", amount: "2 dashes" },
			{ ingredient: "Sugar", amount: "1", label: "Sugar cube" },
			{ special: "Few dashes plain water" }
		],
		garnish: "Orange slice and cherry",
		flavor: "boozy",
		strength: "strong",
		preparation:
			"Place sugar cube in old-fashioned glass and saturate with bitters, add a dash of plain water. Muddle until dissolve. Fill the glass with ice cubes and add whisky."
	},
	{
		iba: true,
		name: "Tuxedo",
		colors: "#FDC78B",
		glass: "martini",
		category: "All Day Cocktail",
		ingredients: [
			{
				unit: "cl",
				amount: 3,
				ingredient: "Gin",
				label: "Old Tom Gin"
			},
			{
				unit: "cl",
				amount: 3,
				ingredient: "Vermouth",
				label: "Dry vermouth"
			},
			{ amount: "1/4 bar spoon", ingredient: "Absinthe" },
			{
				amount: "1/2 bar spoon",
				ingredient: "Cherry liqueur",
				label: "Maraschino"
			},
			{ amount: "3 dashes", ingredient: "Orange bitters" }
		],
		garnish: "Cherry and lemon twist",
		preparation:
			"Stir all ingredients with ice and strain into cocktail glass."
	},
	{
		iba: true,
		name: "Mojito",
		colors: ["#F7F1BC", "#6D9600"],
		glass: "collins",
		category: "Longdrink",
		ingredients: [
			{
				unit: "cl",
				amount: 4,
				ingredient: "White rum",
				label: "White Cuban Rum"
			},
			{ ingredient: "Soda water" },
			{ unit: "cl", amount: 3, ingredient: "Lime juice" },
			{ ingredient: "Mint", amount: "6", label: "Mint sprigs" },
			{ ingredient: "Sugar", amount: "2 teaspoons", label: "White sugar" }
		],
		garnish: "Mint leaves and lemon slice",
		flavor: "sour, fruity",
		strength: "medium",
		preparation:
			"Muddle mint sprigs with sugar and lime juice. Add splash of soda water and fill glass with cracked ice. Pour rum and top with soda water. Serve with straw."
	},
	{
		iba: true,
		name: "Horse's Neck",
		colors: "#D9A031",
		glass: "highball",
		category: "Longdrink",
		ingredients: [
			{ unit: "cl", amount: 4, ingredient: "Cognac" },
			{ unit: "cl", amount: 12, ingredient: "Ginger Ale" },
			{ special: "Dash of Angostura bitters (optional)" }
		],
		garnish: "Lemon twist",
		preparation:
			"Build into highball glass with ice cubes. Stir gently. If required, add dashes of Angostura bitters.",
		flavor: "fizzy, sweet",
		strength: "medium"
	},
	{
		iba: true,
		name: "Planter's Punch",
		colors: ["#B51202", "#F9C31A"],
		glass: "highball",
		category: "Longdrink",
		ingredients: [
			{ unit: "cl", amount: 4.5, ingredient: "Dark rum" },
			{ unit: "cl", amount: 3.5, ingredient: "Orange juice" },
			{ unit: "cl", amount: 3.5, ingredient: "Pineapple juice" },
			{ unit: "cl", amount: 2, ingredient: "Lemon juice" },
			{
				unit: "cl",
				amount: 1,
				ingredient: "Syrup",
				label: "Grenadine"
			},
			{
				unit: "cl",
				amount: 1,
				ingredient: "Syrup",
				label: "Sugar syrup"
			},
			{ ingredient: "Angostura bitters", amount: "3 to 4 dashes" }
		],
		garnish: "Pineapple slice and a cherry",
		preparation:
			"Pour all ingredients, except the bitters, into shaker filled with ice. Shake. Pour into large glass, filled with ice. Add Angostura bitters, “on top”.",
		flavor: "sour, sweet, fruity",
		strength: "medium"
	},
	{
		iba: true,
		name: "Sea Breeze",
		colors: ["#f20010", "#89c134"],
		glass: "highball",
		category: "Longdrink",
		ingredients: [
			{ unit: "cl", amount: 4, ingredient: "Vodka" },
			{ unit: "cl", amount: 12, ingredient: "Cranberry juice" },
			{ unit: "cl", amount: 3, ingredient: "Grapefruit juice" }
		],
		garnish: "Lime wedge",
		preparation: "Build all ingredients in a rock glass filled with ice.",
		strength: "light"
	},
	{
		iba: true,
		name: "Pisco Sour",
		colors: "#B5AB90",
		glass: "oldFashion",
		category: "All Day Cocktail",
		ingredients: [
			{ unit: "cl", amount: 4.5, ingredient: "Pisco" },
			{ unit: "cl", amount: 3, ingredient: "Lemon juice" },
			{
				unit: "cl",
				amount: 2,
				ingredient: "Syrup",
				label: "Sugar syrup"
			},
			{
				ingredient: "Egg white",
				amount: 1,
				label: "Egg white (small egg)"
			}
		],
		preparation:
			"Shake and strain into a chilled champagne flute. Dash some Angostura bitters on top.",
		flavor: "sour, sweet, boozy",
		strength: "medium"
	},
	{
		iba: true,
		name: "Long Island Iced Tea",
		colors: "#C18450",
		glass: "highball",
		category: "Longdrink",
		ingredients: [
			{ unit: "cl", amount: 1.5, ingredient: "Tequila" },
			{ unit: "cl", amount: 1.5, ingredient: "Vodka" },
			{ unit: "cl", amount: 1.5, ingredient: "White rum" },
			{ unit: "cl", amount: 1.5, ingredient: "Triple Sec" },
			{ unit: "cl", amount: 1.5, ingredient: "Gin" },
			{ unit: "cl", amount: 2.5, ingredient: "Lemon juice" },
			{
				unit: "cl",
				amount: 3.0,
				ingredient: "Syrup",
				label: "Gomme syrup"
			},
			{ ingredient: "Cola", amount: "1 dash" }
		],
		garnish: "Lemon twist",
		preparation:
			"Add all ingredients into highball glass filled with ice. Stir gently. Serve with straw.",

		strength: "strong"
	},
	{
		iba: true,
		name: "Clover Club",
		colors: ["#B1061D", "#E65259", "#f4edee"],
		glass: "martini",
		category: "All Day Cocktail",
		ingredients: [
			{ unit: "cl", amount: 4.5, ingredient: "Gin" },
			{
				unit: "cl",
				amount: 1.5,
				ingredient: "Raspberry syrup"
			},
			{ unit: "cl", amount: 1.5, ingredient: "Lemon juice" },
			{
				ingredient: "Egg white",
				label: "Few drops of Egg White"
			}
		],
		preparation: "Shake with ice cubes. Strain into cocktail glass.",
		flavor: "sour, sweet, boozy",
		strength: "strong"
	},
	{
		iba: true,
		name: "Angel Face",
		colors: ["#F6CD4C"],
		glass: "martini",
		category: "All Day Cocktail",
		ingredients: [
			{ unit: "cl", amount: 3, ingredient: "Gin" },
			{ unit: "cl", amount: 3, ingredient: "Apricot brandy" },
			{ unit: "cl", amount: 3, ingredient: "Calvados" }
		],
		preparation: "Shake with ice cubes. Strain into a cocktail glass.",
		flavor: "citrus, sour, sweet, boozy",
		strength: "strong"
	},
	{
		iba: true,
		name: "Mimosa",
		colors: "#EBC04D",
		glass: "champagneflute",
		category: "Sparkling Cocktail",
		ingredients: [
			{ unit: "cl", amount: 7.5, ingredient: "Champagne" },
			{ unit: "cl", amount: 7.5, ingredient: "Orange juice" }
		],
		garnish: "Optional orange twist",
		preparation:
			"Pour orange juice into flute and gently pour Champagne. Stir gently. Note: Buck's Fizz is a very similar cocktail but made of two parts champagne to one part orange juice.",
		flavor: "soda, frizz",
		strength: "light"
	},
	{
		iba: true,
		name: "Whiskey Sour",
		colors: "#F3CA69",
		glass: "oldFashion",
		category: "Before Dinner Cocktail",
		ingredients: [
			{
				unit: "cl",
				amount: 4.5,
				ingredient: "Whiskey",
				label: "Bourbon whiskey"
			},
			{ unit: "cl", amount: 3.0, ingredient: "Lemon juice" },
			{ ingredient: "Egg white", label: "Dash of egg white" },
			{
				unit: "cl",
				amount: 1.5,
				ingredient: "Syrup",
				label: "Sugar syrup"
			}
		],
		garnish: "Half an orange slice and cherry",
		preparation:
			"(Optional: if used shake little harder to foam up the egg white). Pour all ingredients into cocktail shaker filled with ice. Shake. Strain into cocktail glass. If served ‘On the rocks’, strain ingredients into old-fashioned glass filled with ice.",
		flavor: "sour",
		strength: "medium"
	},
	{
		iba: true,
		name: "Screwdriver",
		colors: "#D6C01D",
		glass: "highball",
		category: "All Day Cocktail",
		ingredients: [
			{ unit: "cl", amount: 5, ingredient: "Vodka" },
			{ unit: "cl", amount: 10, ingredient: "Orange juice" }
		],
		garnish: "Orange slice",
		preparation: "Build into a highball glass filled with ice. Stir gently.",
		flavor: "sour, sweet, fruity",
		strength: "medium"
	},
	{
		iba: true,
		name: "Cuba Libre",
		colors: ["#440D06", "#983F27", "#EDDC7C"],
		glass: "highball",
		category: "Longdrink",
		ingredients: [
			{ unit: "cl", amount: 5, ingredient: "White rum" },
			{ unit: "cl", amount: 12, ingredient: "Cola" },
			{ unit: "cl", amount: 1, ingredient: "Lime juice" }
		],
		garnish: "Lime wedge",
		preparation: "Build all ingredients in a highball glass filled with ice.",
		flavor: "soda",
		strength: "light"
	},
	{
		iba: true,
		name: "Manhattan",
		colors: "#FF000B",
		glass: "martini",
		category: "Before Dinner Cocktail",
		ingredients: [
			{
				unit: "cl",
				amount: 5,
				ingredient: "Whiskey",
				label: "Rye whiskey"
			},
			{
				unit: "cl",
				amount: 2,
				ingredient: "Vermouth",
				label: "Red vermouth"
			},
			{ ingredient: "Angostura bitters", amount: "1 dash" }
		],
		garnish: "Cherry",
		preparation:
			"Stir in mixing glass with ice cubes. Strain into chilled cocktail glass.",
		flavor: "boozy",
		strength: "strong"
	},
	{
		iba: true,
		name: "Porto Flip",
		colors: "#823D38",
		glass: "martini",
		category: "After Dinner Cocktail",
		ingredients: [
			{ unit: "cl", amount: 1.5, ingredient: "Cognac" },
			{ unit: "cl", amount: 4.5, ingredient: "Red Port" },
			{ unit: "cl", amount: 1, ingredient: "Egg yolk" }
		],
		preparation:
			"Shake with ice cubes. Strain into cocktail glass. Sprinkle with fresh ground nutmeg.",
		flavor: "boozy",
		strength: "strong"
	},
	{
		iba: true,
		name: "Gin Fizz",
		colors: "#C6C8C3",
		glass: "highball",
		category: "Longdrink",
		ingredients: [
			{ unit: "cl", amount: 4.5, ingredient: "Gin" },
			{ unit: "cl", amount: 3, ingredient: "Lemon juice" },
			{
				unit: "cl",
				amount: 1,
				ingredient: "Syrup",
				label: "Sugar syrup"
			},
			{ unit: "cl", amount: 8, ingredient: "Soda water" }
		],
		garnish: "Lemon slice",
		preparation:
			"Shake all ingredients with ice cubes, except soda water. Pour into tumbler. Top with soda water.",
		flavor: "sour, sweet, fizzy",
		strength: "medium"
	},
	{
		iba: true,
		name: "Espresso Martini",
		searchTerm: "martini",
		colors: ["#463639", "#D0BFA5"],
		glass: "martini",
		category: "After Dinner Cocktail",
		ingredients: [
			{ unit: "cl", amount: 5, ingredient: "Vodka" },
			{
				unit: "cl",
				amount: 1,
				ingredient: "Coffee liqueur",
				label: "Kahlúa"
			},
			{
				ingredient: "Coffee",
				amount: "1 shot",
				label: "Espresso coffee"
			},
			{
				label: "Sugar syrup",
				ingredient: "Syrup",
				amount: "Amount-according-to-taste"
			}
		],
		preparation: "Shake and strain into a chilled cocktail glass.",
		flavor: "boozy",
		strength: "medium"
	},
	{
		iba: true,
		name: "The Revolver",
		searchTerm: "martini",
		colors: ["#463639", "#D0BFA5"],
		glass: "martini",
		category: "After Dinner Cocktail",
		ingredients: [
			{ unit: "cl", amount: 2, ingredient: "Bourbon" },
			{
				unit: "cl",
				amount: 0.5,
				ingredient: "Coffee liqueur",
				label: "Kahlúa"
			},
			{
				ingredient: "Orange Bitters",
				amount: "2 dashes"
			}
		],
		garnish: "Wide strip of orange zest",
		preparation: "Shake and strain into a chilled cocktail glass.",
		flavor: "boozy",
		strength: "strong"
	},
	{
		iba: true,
		name: "Margarita",
		colors: "#B8B781",
		glass: "margarita",
		category: "All Day Cocktail",
		ingredients: [
			{ unit: "cl", amount: 3.5, ingredient: "Tequila" },
			{
				unit: "cl",
				amount: 2,
				ingredient: "Triple Sec",
				label: "Cointreau"
			},
			{ unit: "cl", amount: 1.5, ingredient: "Lime juice" }
		],
		preparation:
			"Shake with ice cubes. Strain into cocktail glass rimmed with salt (note:Fruit Margarita - blend selected fruit with the above recipe).",
		flavor: "sour",
		strength: "medium"
	},
	{
		iba: true,
		name: "French 75",
		colors: ["#E9CE8E"],
		glass: "champagneflute",
		category: "Sparkling Cocktail",
		ingredients: [
			{ unit: "cl", amount: 3, ingredient: "Gin" },
			{ unit: "cl", amount: 1.5, ingredient: "Lemon juice" },
			{ ingredient: "Syrup", amount: "2 dashes", label: "Sugar syrup" },
			{ unit: "cl", amount: 6, ingredient: "Champagne" }
		],
		preparation:
			"Shake with ice cubes, except for champagne. Strain into a champagne flute. Top up with champagne. Stir gently.",
		flavor: "sour, sweet, fizzy",
		strength: "medium"
	},
	{
		iba: true,
		name: "Yellow Bird",
		colors: "#EBCF2E",
		glass: "martini",
		category: "All Day Cocktail",
		ingredients: [
			{ unit: "cl", amount: 3, ingredient: "White rum" },
			{ unit: "cl", amount: 1.5, ingredient: "Galliano" },
			{ unit: "cl", amount: 1.5, ingredient: "Triple Sec" },
			{ unit: "cl", amount: 1.5, ingredient: "Lime juice" }
		],
		preparation: "Shake and strain into a chilled cocktail glass.",
		flavor: "sour, sweet",
		strength: "medium"
	},
	{
		iba: true,
		name: "Pina Colada",
		colors: "#C5B9A1",
		glass: "hurricane",
		category: "Longdrink",
		ingredients: [
			{ unit: "cl", amount: 3, ingredient: "White rum" },
			{ unit: "cl", amount: 9, ingredient: "Pineapple juice" },
			{ unit: "cl", amount: 3, ingredient: "Coconut milk" }
		],
		garnish: "Pineapple slice and a cherry",
		preparation:
			"Blend all the ingredients with ice in a electric blender, pour into a large goblet or Hurricane glass and serve with straws.",
		flavor: "fruity",
		strength: "medium"
	},
	{
		iba: true,
		name: "Aviation",
		colors: "#68517B",
		glass: "martini",
		category: "All Day Cocktail",
		ingredients: [
			{ unit: "cl", amount: 4.5, ingredient: "Gin" },
			{
				unit: "cl",
				amount: 1.5,
				ingredient: "Cherry liqueur",
				label: "Maraschino"
			},
			{ unit: "cl", amount: 1.5, ingredient: "Lemon juice" },
			{ amount: "1 shot", ingredient: "Crème de violette" }
		],
		preparation:
			"Shake and strain into a chilled cocktail glass. The IBA recipe omits the commonly included crème de violette which gives the drink a distinctive purple color.",
		flavor: "fruity, sour, floral",
		strength: "strong"
	},
	{
		iba: true,
		name: "Bellini",
		colors: ["#F89E64"],
		glass: "champagneflute",
		category: "Sparkling Cocktail",
		ingredients: [
			{ unit: "cl", amount: 10, ingredient: "Prosecco" },
			{ unit: "cl", amount: 5, ingredient: "Peach puree" }
		],
		preparation:
			"Pour peach puree into chilled glass and add sparkling wine. Stir gently. Variations: Puccini (fresh mandarin juice), Rossini (fresh strawberry puree), Tintoretto (fresh pomegranate juice)",
		flavor: "frizz, soda",
		strength: "light"
	},
	{
		iba: true,
		name: "Grasshopper",
		colors: "#75CCA6",
		glass: "martini",
		category: "After Dinner Cocktail",
		ingredients: [
			{
				unit: "cl",
				amount: 3,
				ingredient: "Créme de Cacao",
				label: "White Créme de Cacao"
			},
			{
				unit: "cl",
				amount: 3,
				ingredient: "Créme de Menthe",
				label: "Green Créme de Menthe"
			},
			{ unit: "cl", amount: 3, ingredient: "Cream" }
		],
		preparation: "Shake with ice cubes. Strain into chilled cocktail glass.",
		flavor: "creamy",
		strength: "light"
	},
	{
		iba: true,
		name: "Tequila Sunrise",
		colors: ["#FFC800", "#F64202"],
		glass: "highball",
		category: "Longdrink",
		ingredients: [
			{ unit: "cl", amount: 4.5, ingredient: "Tequila" },
			{ unit: "cl", amount: 9, ingredient: "Orange juice" },
			{
				unit: "cl",
				amount: 1.5,
				ingredient: "Syrup",
				label: "Grenadine"
			}
		],
		garnish: "Orange slice and a cherry",
		preparation:
			"Build tequila and orange juice into highball with ice cubes. Add a splash of grenadine to create sunrise effect. Do not stir.",
		flavor: "fruity",
		strength: "medium"
	},
	{
		iba: true,
		name: "Daiquiri",
		colors: "#ACA99C",
		glass: "martini",
		category: "Before Dinner Cocktail",
		ingredients: [
			{ unit: "cl", amount: 4.5, ingredient: "White rum" },
			{ unit: "cl", amount: 2.5, ingredient: "Lime juice" },
			{
				unit: "cl",
				amount: 1.5,
				ingredient: "Syrup",
				label: "Simple syrup"
			}
		],
		preparation: "Shake and strain into a cocktail glass.",
		flavor: "sour, sweet, boozy",
		strength: "medium"
	},
	{
		iba: true,
		name: "Rusty Nail",
		colors: "#BD4200",
		glass: "oldFashion",
		category: "After Dinner Cocktail",
		ingredients: [
			{
				unit: "cl",
				amount: 4.5,
				ingredient: "Whiskey",
				label: "Scotch whisky"
			},
			{ unit: "cl", amount: 2.5, ingredient: "Drambuie" }
		],
		garnish: "Lemon twist",
		preparation:
			"Build into old-fashioned glass filled with ice. Stir gently.",
		flavor: "boozy",
		strength: "strong"
	},
	{
		iba: true,
		name: "B-52",
		colors: ["#F39F00", "#E7D3B3", "#401110"],
		glass: "shotglass",
		category: "After Dinner Cocktail",
		ingredients: [
			{
				unit: "cl",
				amount: 2,
				ingredient: "Coffee liqueur",
				label: "Kahlúa"
			},
			{
				unit: "cl",
				amount: 2,
				ingredient: "Cream liqueur",
				label: "Baileys Irish Cream"
			},
			{
				unit: "cl",
				amount: 2,
				ingredient: "Triple Sec",
				label: "Grand Marnier"
			}
		],
		preparation:
			"Layer ingredients one at a time starting with Kahlúa, followed by Baileys Irish Cream and top with Grand Marnier. Flame the Grand Marnier, serve while the flame is still on, accompanied with a straw on side plate.",
		flavor: "coffee",
		strength: "medium"
	},
	{
		iba: true,
		name: "Stinger",
		colors: "#D66806",
		glass: "martini",
		category: "After Dinner Cocktail",
		ingredients: [
			{ unit: "cl", amount: 5, ingredient: "Cognac" },
			{
				unit: "cl",
				amount: 2,
				ingredient: "Créme de Menthe",
				label: "White Créme de Menthe"
			}
		],
		preparation:
			"Stir in mixing glass with ice cubes. Strain into a cocktail glass.",
		flavor: "boozy",
		strength: "strong"
	},
	{
		iba: true,
		name: "Golden Dream",
		colors: "#FEEE8E",
		glass: "martini",
		category: "After Dinner Cocktail",
		ingredients: [
			{ unit: "cl", amount: 2, ingredient: "Galliano" },
			{ unit: "cl", amount: 2, ingredient: "Triple Sec" },
			{ unit: "cl", amount: 2, ingredient: "Orange juice" },
			{ unit: "cl", amount: 1, ingredient: "Cream" }
		],
		preparation: "Shake with ice cubes. Strain into chilled cocktail glass.",
		flavor: "fruity",
		strength: "light"
	},
	{
		iba: true,
		name: "Godmother",
		colors: "#C3660B",
		glass: "oldFashion",
		ingredients: [
			{ unit: "cl", amount: 3.5, ingredient: "Vodka" },
			{ unit: "cl", amount: 3.5, ingredient: "DiSaronno" }
		],
		preparation:
			"Build into old fashioned glass filled with ice cubes. Stir gently.",
		flavor: "boozy",
		strength: "strong"
	},
	{
		iba: true,
		name: "Spritz Veneziano",
		colors: "#DA1903",
		glass: "oldFashion",
		category: "Sparkling Cocktail",
		ingredients: [
			{ unit: "cl", amount: 6, ingredient: "Prosecco" },
			{ unit: "cl", amount: 4, ingredient: "Aperol" },
			{ amount: "1 Splash", ingredient: "Soda water" }
		],
		garnish: "Half an orange slice",
		preparation:
			"Build into an old-fashioned glass filled with ice. Top with a splash of soda water.",
		flavor: "fizzy",
		strength: "medium"
	},
	{
		iba: true,
		name: "Bramble",
		colors: ["#3B0005", "#C00834", "#eaafb5"],
		glass: "oldFashion",
		category: "All Day Cocktail",
		ingredients: [
			{ unit: "cl", amount: 4, ingredient: "Gin" },
			{ unit: "cl", amount: 1.5, ingredient: "Lemon juice" },
			{
				unit: "cl",
				amount: 1,
				ingredient: "Syrup",
				label: "Sugar syrup"
			},
			{ unit: "cl", amount: 1.5, ingredient: "Blackberry liqueur" }
		],
		garnish: "Lemon slice and two blackberries",
		preparation:
			"Build over crushed ice, in a rock glass. Stir, then pour the blackberry liqueur over the top of the drink in a circular fashion.",
		flavor: "sour, boozy",
		strength: "strong"
	},
	{
		iba: true,
		name: "Brandy Alexander",
		colors: ["#B39684"],
		glass: "martini",
		ingredients: [
			{ unit: "cl", amount: 3, ingredient: "Cognac" },
			{
				unit: "cl",
				amount: 3,
				ingredient: "Créme de Cacao",
				label: "Brown Créme de Cacao"
			},
			{ unit: "cl", amount: 3, ingredient: "Cream" }
		],
		preparation:
			"Shake and strain into a chilled cocktail glass. Sprinkle with fresh ground nutmeg. The IBA simply refers to this drink as an 'Alexander'",
		flavor: "creamy, boozy",
		strength: "medium"
	},
	{
		iba: true,
		name: "Lemon Drop",
		colors: "#C4B686",
		glass: "martini",
		category: "All Day Cocktail",
		ingredients: [
			{
				unit: "cl",
				amount: 2.5,
				ingredient: "Citron Vodka"
			},
			{ unit: "cl", amount: 2, ingredient: "Triple Sec" },
			{ unit: "cl", amount: 1.5, ingredient: "Lemon juice" }
		],
		garnish: "Lemon slice",
		preparation:
			"Shake and strain into a chilled cocktail glass rimmed with sugar.",
		flavor: "fruity",
		strength: "medium"
	},
	{
		iba: true,
		name: "French Martini",
		colors: "#E00001",
		glass: "martini",
		category: "Before Dinner Cocktail",
		ingredients: [
			{ unit: "cl", amount: 4.5, ingredient: "Vodka" },
			{ unit: "cl", amount: 1.5, ingredient: "Raspberry liqueur" },
			{ unit: "cl", amount: 1.5, ingredient: "Pineapple juice" }
		],
		preparation:
			"Stir in mixing glass with ice cubes. Strain into chilled cocktail glass. Squeeze oil from lemon peel onto the drink."
	},
	{
		iba: true,
		name: "Black Russian",
		colors: ["#EDE4DB", "#BA4D00", "#52180F"],
		glass: "oldFashion",
		category: "After Dinner Cocktail",
		ingredients: [
			{ unit: "cl", amount: 5, ingredient: "Vodka" },
			{ unit: "cl", amount: 2, ingredient: "Coffee liqueur" }
		],
		preparation:
			"Build into old fashioned glass filled with ice cubes. Stir gently. Note: for White Russian, float fresh cream on the top and stir gently.",
		flavor: "creamy, boozy",
		strength: "strong"
	},
	{
		iba: true,
		name: "Bloody Mary",
		colors: ["#c10000"],
		glass: "highball",
		category: "Longdrink",
		ingredients: [
			{ unit: "cl", amount: 4.5, ingredient: "Vodka" },
			{ unit: "cl", amount: 9, ingredient: "Tomato juice" },
			{ unit: "cl", amount: 1.5, ingredient: "Lemon juice" },
			{ amount: "2 to 3 dashes", ingredient: "Worcestershire Sauce" },
			{ special: "Tabasco" },
			{ special: "Celery salt" },
			{ special: "Pepper" }
		],
		garnish: "Celery and optionally lemon wedge",
		preparation: "Stir gently, pour all ingredients into highball glass.",
		flavor: "sour, funky, weird",
		strength: "medium"
	},
	{
		iba: true,
		name: "Mai Tai",
		colors: "#FF3006",
		glass: "highball",
		category: "Longdrink",
		ingredients: [
			{ unit: "cl", amount: 4, ingredient: "White rum" },
			{ unit: "cl", amount: 2, ingredient: "Dark rum" },
			{
				unit: "cl",
				amount: 1.5,
				ingredient: "Triple Sec",
				label: "Orange Curaçao"
			},
			{
				unit: "cl",
				amount: 1.5,
				ingredient: "Syrup",
				label: "Orgeat syrup"
			},
			{ unit: "cl", amount: 1, ingredient: "Lime juice" }
		],
		garnish: "Pineapple spear, mint leaves and lime wedge",
		preparation: "Shake and strain into highball glass. Serve with straw.",
		flavor: "fruity",
		strength: "medium"
	},
	{
		iba: true,
		name: "Rum Drink",
		colors: "#FF3006",
		glass: "highball",
		category: "Longdrink",
		ingredients: [
			{ unit: "cl", amount: 1, ingredient: "White rum" },
			{ unit: "cl", amount: 1, ingredient: "Dark rum" },
			{
				unit: "cl",
				amount: 1,
				ingredient: "Coffee Liquor",
				label: "Kahlua"
			},
			{
				unit: "cl",
				amount: 1,
				ingredient: "lemon"
			},
			{ unit: "cl", amount: 2, ingredient: "Orance Juice" }
		],
		garnish: "Slice of Lime",
		preparation: "Shake and strain into highball glass.",
		flavor: "coffee",
		strength: "medium"
	},
	{
		iba: true,
		name: "Barracuda",
		colors: ["#f2dd21"],
		glass: "margarita",
		category: "Sparkling Cocktail",
		ingredients: [
			{
				unit: "cl",
				amount: 4.5,
				ingredient: "Dark rum",
				label: "Gold rum"
			},
			{ unit: "cl", amount: 1.5, ingredient: "Galliano" },
			{ unit: "cl", amount: 6, ingredient: "Pineapple juice" },
			{ amount: "1 dash", ingredient: "Lime juice" },
			{
				ingredient: "Sparkling Wine",
				label: "Prosecco",
				amount: "Top up with"
			}
		],
		flavor: "sour, sweet",
		strength: "medium"
	},
	{
		iba: true,
		name: "Sex on the Beach",
		colors: ["#FE3A24", "#FFD801"],
		glass: "highball",
		category: "Longdrink",
		ingredients: [
			{ unit: "cl", amount: 4, ingredient: "Vodka" },
			{ unit: "cl", amount: 2, ingredient: "Peach schnapps" },
			{ unit: "cl", amount: 4, ingredient: "Cranberry juice" },
			{ unit: "cl", amount: 4, ingredient: "Orange juice" }
		],
		garnish: "Orange slice",
		preparation: "Build all ingredients in a highball glass filled with ice.",
		flavor: "fruity",
		strength: "medium"
	},
	{
		iba: true,
		name: "Monkey Gland",
		colors: "#FD5404",
		glass: "martini",
		category: "All Day Cocktail",
		ingredients: [
			{ unit: "cl", amount: 5, ingredient: "Gin" },
			{ unit: "cl", amount: 3, ingredient: "Orange juice" },
			{ amount: "2 drops", ingredient: "Absinthe" },
			{ amount: "2 drops", ingredient: "Syrup", label: "Grenadine" }
		],
		preparation: "Shake and strain into a chilled cocktail glass.",
		flavor: "fruity, boozy",
		strength: "strong"
	},
	{
		iba: true,
		name: "Derby",
		colors: "#FEB535",
		glass: "martini",
		category: "All Day Cocktail",
		ingredients: [
			{ unit: "cl", amount: 6, ingredient: "Gin" },
			{ unit: "2 drops", ingredient: "Peach bitters" },
			{ amount: "2", ingredient: "Mint", label: "Fresh mint leaves" }
		],
		garnish: "Mint leaves",
		preparation:
			"Stir in mixing glass with ice cubes. Strain into a cocktail glass."
	},
	{
		iba: true,
		name: "Sidecar",
		colors: "#C7A65F",
		glass: "martini",
		category: "All Day Cocktail",
		ingredients: [
			{ unit: "cl", amount: 5, ingredient: "Cognac" },
			{ unit: "cl", amount: 2, ingredient: "Triple Sec" },
			{ unit: "cl", amount: 2, ingredient: "Lemon juice" }
		],
		preparation: "Shake with ice cubes. Strain into cocktail glass.",
		flavor: "fruity",
		strength: "medium"
	},
	{
		iba: true,
		name: "Irish Coffee",
		colors: ["#E6D9D1", "#603309", "#1E0A05"],
		glass: "hotdrink",
		category: "Hot Drink",
		ingredients: [
			{
				unit: "cl",
				amount: 4,
				ingredient: "Whiskey",
				label: "Irish whiskey"
			},
			{
				unit: "cl",
				amount: 9,
				ingredient: "Coffee",
				label: "Hot coffee"
			},
			{ unit: "cl", amount: 3, ingredient: "Cream" },
			{ ingredient: "Sugar", label: "Brown sugar", amount: "1 teaspoon" }
		],
		preparation:
			"Warm the Irish whiskey over a burner. Pour into the glass (for hot drink) hot coffee, and add a teaspoon of sugar. Float Cream on top.",
		flavor: "warm, boozy",
		strength: "medium"
	},
	{
		iba: true,
		name: "Sazerac",
		colors: "#C98502",
		glass: "oldFashion",
		category: "After Dinner Cocktail",
		ingredients: [
			{ unit: "cl", amount: 5, ingredient: "Cognac" },
			{ unit: "cl", amount: 1, ingredient: "Absinthe" },
			{ amount: "2 dashes", ingredient: "Peychaud’s bitters" },
			{ ingredient: "Sugar", amount: "1", label: "Sugar cube" }
		],
		garnish: "Lemon twist",
		preparation:
			"Rinse a chilled old-fashioned glass with the absinthe, add crushed ice and set it aside. Stir the remaining ingredients over ice and set it aside. Discard the ice and any excess absinthe from the prepared glass, and strain the drink into the glass. Note: The original recipe changed after the American Civil War, rye whiskey substituted cognac as it became hard to obtain.",
		flavor: "boozy",
		strength: "strong"
	},
	{
		iba: true,
		name: "Americano",
		colors: ["#ED120A", "#FAC25B"],
		glass: "oldFashion",
		category: "Before Dinner Cocktail",
		ingredients: [
			{ unit: "cl", amount: 3, ingredient: "Campari" },
			{
				unit: "cl",
				amount: 3,
				ingredient: "Vermouth",
				label: "Red vermouth"
			},
			{ amount: "A splash", ingredient: "Soda water" }
		],
		garnish: "Half an orange slice",
		preparation:
			"Build into old fashioned glass filled with ice cubes. Add a splash of soda water.",
		flavor: "boozy",
		strength: "strong"
	},
	{
		iba: true,
		name: "Singapore Sling",
		colors: "#FF5542",
		glass: "highball",
		category: "Longdrink",
		ingredients: [
			{ unit: "cl", amount: 3, ingredient: "Gin" },
			{ unit: "cl", amount: 1.5, ingredient: "Cherry liqueur" },
			{
				unit: "cl",
				amount: 0.75,
				ingredient: "Triple Sec",
				label: "Cointreau"
			},
			{ unit: "cl", amount: 0.75, ingredient: "DOM Bénédictine" },
			{ unit: "cl", amount: 12.0, ingredient: "Pineapple juice" },
			{ unit: "cl", amount: 1.5, ingredient: "Lime juice" },
			{
				unit: "cl",
				amount: 1,
				ingredient: "Syrup",
				label: "Grenadine"
			},
			{ ingredient: "Angostura bitters", amount: "1 dash" }
		],
		garnish: "Pineapple slice and a cherry",
		preparation: "Shake with ice cubes. Strain into highball glass.",
		flavor: "sour, sweet, refreshing",
		strength: "light"
	},
	{
		iba: true,
		name: "French Connection",
		colors: "#EF7405",
		glass: "oldFashion",
		ingredients: [
			{ unit: "cl", amount: 3.5, ingredient: "Cognac" },
			{ unit: "cl", amount: 3.5, ingredient: "DiSaronno" }
		],
		preparation:
			"Build into old fashioned glass filled with ice cubes. Stir gently."
	},
	{
		iba: true,
		name: "Moscow Mule",
		colors: "#978540",
		glass: "highball",
		category: "Longdrink",
		ingredients: [
			{ unit: "cl", amount: 4.5, ingredient: "Vodka" },
			{ unit: "cl", amount: 12, ingredient: "Ginger beer" },
			{ unit: "cl", amount: 0.5, ingredient: "Lime juice" },
			{ ingredient: "Lime", amount: "1 slice" }
		],
		garnish: "Lime slice",
		preparation: "Combine the vodka and ginger beer. Add lime juice.",
		flavor: "fruity",
		strength: "medium"
	},
	{
		iba: true,
		name: "John Collins",
		searchTerm: "collins",
		colors: "#D0A254",
		glass: "highball",
		category: "Longdrink",
		ingredients: [
			{ unit: "cl", amount: 4.5, ingredient: "Gin" },
			{ unit: "cl", amount: 3, ingredient: "Lemon juice" },
			{
				unit: "cl",
				amount: 1.5,
				ingredient: "Syrup",
				label: "Sugar syrup"
			},
			{ unit: "cl", amount: 6, ingredient: "Soda water" },
			{ ingredient: "Angostura bitters", amount: "1 dash" }
		],
		garnish: "Lemon slice and a cherry",
		preparation:
			"Build into highball glass filled with ice. Stir gently. Add a dash of Angostura bitters. (Note: Use Old Tom Gin for Tom Collins)",
		flavor: "fruity",
		strength: "medium"
	},
	{
		iba: true,
		name: "Kir",
		colors: "#F73D29",
		glass: "champagneflute",
		category: "Before Dinner Cocktail",
		ingredients: [
			{ unit: "cl", amount: 9, ingredient: "Dry White Wine" },
			{
				unit: "cl",
				amount: 1,
				ingredient: "Créme de Cassis",
				label: "Créme de Cassis"
			}
		],
		preparation:
			"Pour Créme de Cassis into glass, top up with white wine. For Kir Royal: Use champagne instead of white wine.",
		flavor: "creamy",
		strength: "medium"
	},
	{
		iba: true,
		name: "Mint Julep",
		colors: ["#F4B317", "#759B4D"],
		glass: "highball",
		category: "Longdrink",
		ingredients: [
			{
				unit: "cl",
				amount: 6,
				ingredient: "Whiskey",
				label: "Bourbon whiskey"
			},
			{ amount: "4", ingredient: "Mint", label: "Fresh mint sprigs" },
			{
				amount: "1 teaspoon",
				label: "powdered sugar",
				ingredient: "Sugar"
			},
			{ special: "2 teaspoons water" }
		],
		garnish: "Mint sprig",
		preparation:
			"In a highball glass gently muddle the mint, sugar and water. Fill the glass with cracked ice, add Bourbon and stir well until the glass is frost.",
		flavor: "boozy",
		strength: "strong"
	},
	{
		iba: true,
		name: "Tommy's Margarita",
		colors: "#B46F13",
		glass: "martini",
		category: "All Day Cocktail",
		ingredients: [
			{ unit: "cl", amount: 4.5, ingredient: "Tequila" },
			{ unit: "cl", amount: 1.5, ingredient: "Lime juice" },
			{ amount: "2 bar spoons", ingredient: "Agave nectar" }
		],
		preparation: "Shake and strain into a chilled cocktail glass.",
		flavor: "fruity",
		strength: "medium"
	},
	{
		iba: true,
		name: "Paradise",
		colors: "#ECAE1B",
		glass: "martini",
		category: "All Day Cocktail",
		ingredients: [
			{ unit: "cl", amount: 3.5, ingredient: "Gin" },
			{ unit: "cl", amount: 2, ingredient: "Apricot brandy" },
			{ unit: "cl", amount: 1.5, ingredient: "Orange juice" }
		],
		preparation: "Shake with ice cubes. Strain into chilled cocktail glass.",
		flavor: "sweet, boozy",
		strength: "strong"
	},
	{
		iba: true,
		name: "Dirty Martini",
		searchTerm: "martini",
		colors: "#E1E6E3",
		glass: "martini",
		category: "Before Dinner Cocktail",
		ingredients: [
			{ unit: "cl", amount: 6, ingredient: "Vodka" },
			{
				unit: "cl",
				amount: 1,
				ingredient: "Vermouth",
				label: "Dry vermouth"
			},
			{ unit: "cl", amount: 1, ingredient: "Olive juice" }
		],
		garnish: "Green olive",
		preparation:
			"Stir in mixing glass with ice cubes. Strain into chilled martini glass.",
		flavor: "boozy",
		strength: "strong"
	},
	{
		iba: true,
		name: "Champagne Cocktail",
		colors: ["#efde8b"],
		glass: "champagneflute",
		category: "Sparkling Cocktail",
		ingredients: [
			{ unit: "cl", amount: 9, ingredient: "Champagne" },
			{ unit: "cl", amount: 1, ingredient: "Cognac" },
			{ ingredient: "Angostura bitters", amount: "2 dashes" },
			{ ingredient: "Sugar", amount: "1", label: "Sugar cube" }
		],
		garnish: "Orange slice and a cherry",
		preparation:
			"Add dash of Angostura bitter onto sugar cube and drop it into champagne flute. Add cognac followed by pouring gently chilled champagne.",
		flavor: "soda, frizz",
		strength: "light"
	},
	{
		iba: true,
		name: "Mary Pickford",
		colors: "#B11603",
		glass: "martini",
		category: "All Day Cocktail",
		ingredients: [
			{ unit: "cl", amount: 6, ingredient: "White rum" },
			{
				unit: "cl",
				amount: 1,
				ingredient: "Cherry liqueur",
				label: "Maraschino"
			},
			{ unit: "cl", amount: 6, ingredient: "Pineapple juice" },
			{ unit: "cl", amount: 1, ingredient: "Syrup", label: "Grenadine" }
		],
		preparation: "Shake and strain into a chilled large cocktail glass.",
		flavor: "sour, sweet, boozy",
		strength: "medium"
	},
	{
		iba: true,
		name: "Hemingway Special",
		colors: "#FFBB6D",
		glass: "martini",
		category: "All Day Cocktail",
		ingredients: [
			{ unit: "cl", amount: 6, ingredient: "White rum" },
			{ unit: "cl", amount: 4, ingredient: "Grapefruit juice" },
			{
				unit: "cl",
				amount: 1.5,
				ingredient: "Cherry liqueur",
				label: "Maraschino"
			},
			{ unit: "cl", amount: 1.5, ingredient: "Lime juice" }
		],
		preparation: "Shake with ice cubes. Strain into a double cocktail glass.",
		flavor: "sour, sweet, boozy",
		strength: "medium"
	},
	{
		iba: true,
		name: "Dark 'n' Stormy",
		searchTerm: "Dark and Stormy",
		colors: ["#CF612A", "#860F00", "#D1C112"],
		glass: "highball",
		category: "Longdrink",
		ingredients: [
			{ unit: "cl", amount: 6, ingredient: "Dark rum" },
			{ unit: "cl", amount: 10, ingredient: "Ginger beer" }
		],
		garnish: "Lime wedge",
		preparation:
			"Build into highball glass filled with ice. Add rum first and top it with ginger beer."
	},
	{
		iba: true,
		name: "Ramos Fizz",
		searchTerm: "Royal Gin Fizz",
		colors: "#D9CAA6",
		glass: "highball",
		category: "Longdrink",
		ingredients: [
			{ unit: "cl", amount: 4.5, ingredient: "Gin" },
			{ unit: "cl", amount: 1.5, ingredient: "Lime juice" },
			{ unit: "cl", amount: 1.5, ingredient: "Lemon juice" },
			{
				unit: "cl",
				amount: 3,
				ingredient: "Syrup",
				label: "Sugar syrup"
			},
			{ unit: "cl", amount: 6, ingredient: "Cream" },
			{ amount: 1, ingredient: "Egg white" },
			{ ingredient: "Soda water" },

			{ amount: "3 dashes", ingredient: "Orange flower water" },
			{ amount: "2 drops", ingredient: "Vanilla extract" }
		],
		preparation:
			"Pour all ingredients (except soda) in a mixing glass, dry shake (no ice) for two minutes, add ice and hard shake for another minute. Strain into a highball glass without ice, top with soda."
	},
	{
		iba: true,
		name: "Russian Spring Punch",
		colors: "#C70212",
		glass: "highball",
		category: "Sparkling Cocktail",
		ingredients: [
			{ unit: "cl", amount: 2.5, ingredient: "Vodka" },
			{ unit: "cl", amount: 2.5, ingredient: "Lemon juice" },
			{
				unit: "cl",
				amount: 1.5,
				ingredient: "Créme de Cassis",
				label: "Créme de Cassis"
			},
			{
				unit: "cl",
				amount: 1,
				ingredient: "Syrup",
				label: "Sugar syrup"
			},
			{ ingredient: "Sparkling Wine" }
		],
		garnish: "Lemon slice and a blackberry",
		preparation:
			"Shake the ingredients and pour into highball glass. Top with Sparkling wine.",
		flavor: "fruity",
		strength: "medium"
	},
	{
		iba: true,
		name: "Godfather",
		colors: "#B77F27",
		glass: "oldFashion",
		ingredients: [
			{
				unit: "cl",
				amount: 3.5,
				ingredient: "Whiskey",
				label: "Scotch whisky"
			},
			{ unit: "cl", amount: 3.5, ingredient: "DiSaronno" }
		],
		preparation:
			"Build into old fashioned glass filled with ice cubes. Stir gently.",
		flavor: "boozy",
		strength: "strong"
	},
	{
		iba: true,
		name: "Cosmopolitan",
		colors: ["#EC464F"],
		glass: "martini",
		category: "All Day Cocktail",
		ingredients: [
			{
				unit: "cl",
				amount: 4,
				ingredient: "Citron Vodka"
			},
			{
				unit: "cl",
				amount: 1.5,
				ingredient: "Triple Sec",
				label: "Cointreau"
			},
			{ unit: "cl", amount: 1.5, ingredient: "Lime juice" },
			{ unit: "cl", amount: 3, ingredient: "Cranberry juice" }
		],
		garnish: "Lime slice",
		preparation: "Shake with ice cubes. Strain into a large cocktail glass.",
		flavor: "fruity",
		strength: "medium"
	},
	{
		iba: true,
		name: "Dry Martini",
		searchTerm: "martini",
		colors: "#EFEFEF",
		glass: "martini",
		category: "Before Dinner Cocktail",
		ingredients: [
			{ unit: "cl", amount: 6, ingredient: "Gin" },
			{
				unit: "cl",
				amount: 1,
				ingredient: "Vermouth",
				label: "Dry vermouth"
			}
		],
		preparation:
			"Stir in mixing glass with ice cubes. Strain into chilled martini glass. Squeeze oil from lemon peel onto the drink, or garnish with olive.",
		flavor: "boozy",
		strength: "strong"
	},
	{
		iba: true,
		name: "Between the Sheets",
		colors: ["#ffe066"],
		glass: "martini",
		category: "All Day Cocktail",
		ingredients: [
			{ unit: "cl", amount: 3, ingredient: "White rum" },
			{ unit: "cl", amount: 3, ingredient: "Cognac" },
			{ unit: "cl", amount: 3, ingredient: "Triple Sec" },
			{ unit: "cl", amount: 2, ingredient: "Lemon juice" }
		],
		preparation: "Shake with ice cubes. Strain into chilled cocktail glass.",
		flavor: "sour, boozy",
		strength: "strong"
	},
	{
		iba: true,
		name: "Casino",
		colors: ["#FB3B34", "#eff2f0"],
		glass: "martini",
		category: "All Day Cocktail",
		ingredients: [
			{
				unit: "cl",
				amount: 4,
				ingredient: "Gin",
				label: "Old Tom Gin"
			},
			{
				unit: "cl",
				amount: 1,
				ingredient: "Cherry liqueur",
				label: "Maraschino"
			},
			{ unit: "cl", amount: 1, ingredient: "Orange bitters" },
			{ unit: "cl", amount: 1, ingredient: "Lemon juice" }
		],
		garnish: "Lemon twist and a cherry",
		preparation: "Shake with ice cubes. Strain into chilled cocktail glass.",
		flavor: "sour, boozy",
		strength: "strong"
	},
	{
		iba: true,
		name: "Caipirinha",
		colors: ["#4A8C03", "#e7ea96", "#f3f9ed"],
		glass: "oldFashion",
		category: "All Day Cocktail",
		ingredients: [
			{ unit: "cl", amount: 5, ingredient: "Cachaca" },
			{ ingredient: "Sugar", amount: "2 teaspoons" },
			{
				ingredient: "Lime",
				amount: "half",
				label: "Fresh lime cut into 4 wedges"
			}
		],
		preparation:
			"Place lime and sugar in old fashion glass and muddle. Fill glass with ice and Cachaca (note:Caipiroska- use Vodka instead of Cachaca).",
		flavor: "sour, sweet, boozy",
		strength: "strong"
	},
	{
		iba: true,
		name: "Vampiro",
		colors: "#D74339",
		glass: "highball",
		ingredients: [
			{
				unit: "cl",
				amount: 5,
				ingredient: "Tequila",
				label: "Silver Tequila"
			},
			{ unit: "cl", amount: 7, ingredient: "Tomato juice" },
			{ unit: "cl", amount: 3, ingredient: "Orange juice" },
			{ unit: "cl", amount: 1, ingredient: "Lime juice" },
			{ amount: "Few drops", ingredient: "Worcestershire Sauce" },
			{ amount: "1 teaspoon", ingredient: "Honey", label: "Clear honey" },
			{ special: "Half slice onion finely chopped" },
			{ special: "Few slices fresh red hot chili peppers" },
			{ special: "Salt" }
		],
		garnish: "Lime wedge and a green or red chili",
		preparation:
			"Shake with ice cubes. Strain into a highball glass, filled with ice.",
		flavor: "spicy, sour, weird",
		strength: "0 proof, zero, light"
	},
	{
		iba: true,
		name: "Kamikaze",
		colors: "#B6A861",
		glass: "martini",
		category: "All Day Cocktail",
		ingredients: [
			{ unit: "cl", amount: 3, ingredient: "Vodka" },
			{ unit: "cl", amount: 3, ingredient: "Triple Sec" },
			{ unit: "cl", amount: 3, ingredient: "Lime juice" }
		],
		preparation: "Shake and strain into a chilled cocktail glass.",
		flavor: "fruity",
		strength: "medium"
	},
	{
		iba: true,
		name: "White Lady",
		colors: "#E9E5C2",
		glass: "martini",
		category: "All Day Cocktail",
		ingredients: [
			{ unit: "cl", amount: 4, ingredient: "Gin" },
			{ unit: "cl", amount: 3, ingredient: "Triple Sec" },
			{ unit: "cl", amount: 2, ingredient: "Lemon juice" }
		],
		preparation: "Shake with ice cubes. Strain into large cocktail glass.",
		flavor: "sour, boozy",
		strength: "strong"
	},
	{
		iba: true,
		name: "Harvey Wallbanger",
		colors: "#FFBC2F",
		glass: "highball",
		category: "All Day Cocktail",
		ingredients: [
			{ unit: "cl", amount: 4.5, ingredient: "Vodka" },
			{ unit: "cl", amount: 1.5, ingredient: "Galliano" },
			{ unit: "cl", amount: 9, ingredient: "Orange juice" }
		],
		garnish: "Orance slice and a cherry",
		preparation:
			"Build vodka and orange juice into a highball glass filled with ice. Stir gently and float Galliano on top.",
		flavor: "fruity",
		strength: "light"
	},
	{
		iba: false,
		name: "Gimlet",
		colors: "#DADEC0",
		glass: "martini",
		category: "All Day Cocktail",
		ingredients: [
			{ unit: "cl", amount: 6, ingredient: "Gin" },
			{ unit: "cl", amount: 3, ingredient: "Lime juice" }
		],
		garnish: "Lime slice",
		preparation: "Shake with ice.",
		flavor: "sour, boozy",
		strength: "strong"
	},
	{
		iba: false,
		name: "White Russian",
		colors: "#BBA69B",
		glass: "oldFashion",
		category: "All Day Cocktail",
		ingredients: [
			{ unit: "cl", amount: 5, ingredient: "Vodka" },
			{
				unit: "cl",
				amount: 2,
				ingredient: "Coffee liqueur",
				label: "Kahlúa"
			},
			{ unit: "cl", amount: 3, ingredient: "Cream" }
		],
		garnish: null,
		preparation: "Shake and pour over ice.",
		flavor: "milky, creamy",
		strength: "medium"
	},
	{
		iba: false,
		name: "Bluebird",
		colors: "#66B7EC",
		glass: "martini",
		category: "All Day Cocktail",
		ingredients: [
			{ ingredient: "Gin", unit: "cl", amount: 4 },
			{ ingredient: "Blue Curaçao", unit: "cl", amount: 3 },
			{ ingredient: "Angostura bitters", amount: "2 dashes" }
		],
		garnish: "Twist of lemon and a cherry",
		preparation:
			"Stir with crushed ice and strain. Alternatively you could use half Blue Curaçao and half Triple Sec.",
		flavor: "boozy",
		strength: "strong"
	}
];
