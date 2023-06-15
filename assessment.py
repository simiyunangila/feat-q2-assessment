

#  2. **African Cuisine:** You're creating a recipe app specifically for African cuisine.
#  The app needs to handle recipes from different African countries, each with its
# unique ingredients, preparation time, cooking method, and nutritional
# information. Consider creating a `Recipe` class, and think about how you might
#  create subclasses for different types of recipes (e.g., `MoroccanRecipe`,
# `EthiopianRecipe`, `NigerianRecipe`), each with their own unique properties and
#  methods.

#             //process
# // class-Recipe
# // Sub classes-`MoroccanRecipe`,
# //             `EthiopianRecipe`,
# //             `NigerianRecipe
# //method-getAfricancuisinedetails
#               //output
# // Atributtes- unique ingredients
# //             preparation Time
# //             cooking method
# //             nutritional information
class Recipe:
    def __init__(self ,unique_ingredients,preparatin_time,cooking_method):
        self.unique_ingredients = unique_ingredients
        self.preparatin_time = preparatin_time
        self.cooking_method = cooking_method
        
    def african_cuisine_details:
        return ("{__self__.__class__.__name__} uses {self.unique_ingredients} and takes {self.preparatin_time} minutes to prepare and the cooking method is to {self.cooking_method} " )

    

class Moroccan_recipe (Recipe):
    nutritional_information="It gives you a finer skin tone"

class Ethiopian_recipe (Recipe):
    nutritional_information="It makes your hair grow longer"

class Nigerian_recipe (Recipe):
    nutritional_information="It makes your bones stronger"

# recipe = Moroccan_recipe(['Carrots','peanuts', 'and milk '],20,'simmer in a water bath')
# print(recipe.african_cuisine_details())
# recipe2 =  Ethiopian_recipe(['Carrots','peanuts', 'and milk '],20, 'boil in with salt')
# print(recipe2.african_cuisine_details())
# recipe3 = Nigerian_recipe(['sugar','cassava', 'and water '],20,' shallow fry')
# print(recipe3.african_cuisine_details())